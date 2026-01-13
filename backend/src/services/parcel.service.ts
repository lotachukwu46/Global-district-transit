// src/services/parcel.service.ts
import { prisma } from "../prisma/client";

export const PARCEL_STATUSES = ["PENDING", "IN_TRANSIT", "DELIVERED"] as const;
export type ParcelStatus = (typeof PARCEL_STATUSES)[number];

/* =======================
   HELPERS
======================= */
function generateTrackingNumber(): string {
  const randomNum = Math.floor(1000000 + Math.random() * 9000000); // 7 digits
  return `GDT-${randomNum}`;
}

/* =======================
   CREATE
======================= */
export async function createParcel(input: {
  origin: string;
  destination: string;
  courierCode?: string;
  orderNumber?: string;
  customerName?: string;
  customerEmail?: string;
  weight?: number;
}) {
  const trackingNumber = generateTrackingNumber();

  return prisma.parcel.create({
    data: {
      trackingNumber,
      origin: input.origin,
      destination: input.destination,
      status: "PENDING",
      courierCode: input.courierCode,
      orderNumber: input.orderNumber,
      customerName: input.customerName,
      customerEmail: input.customerEmail,
      weight: input.weight,
    },
  });
}

/* =======================
   READ
======================= */
export async function getAllParcels() {
  return prisma.parcel.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      events: {
        orderBy: { timestamp: "asc" },
      },
    },
  });
}

/**
 * Returns a parcel in TrackingMore-like shape
 */
export async function getParcelByTrackingNumber(trackingNumber: string) {
  const parcel = await prisma.parcel.findUnique({
    where: { trackingNumber },
    include: {
      events: {
        orderBy: { timestamp: "asc" },
      },
    },
  });

  if (!parcel) return null;

  // Map to TrackingMore-like structure
  return {
    meta: {
      code: 200,
      message: "OK",
    },
    data: {
      id: parcel.id.toString(),
      tracking_number: parcel.trackingNumber,
      courier_code: parcel.courierCode ?? "unknown",
      order_number: parcel.orderNumber ?? "",
      order_date: parcel.createdAt.toISOString(),
      created_at: parcel.createdAt.toISOString(),
      update_at: parcel.updatedAt.toISOString(),
      delivery_status: parcel.status,
      customer_name: parcel.customerName ?? "",
      customer_email: parcel.customerEmail ?? "",
      weight: parcel.weight?.toString() ?? "",
      origin_country: parcel.origin,
      destination_country: parcel.destination,
      latest_event: parcel.events.length
        ? parcel.events[parcel.events.length - 1].description
        : "",
      latest_checkpoint_time: parcel.events.length
        ? parcel.events[parcel.events.length - 1].timestamp.toISOString()
        : "",
      events: parcel.events.map((e) => ({
        id: e.id,
        parcelId: e.parcelId,
        location: e.location,
        description: e.description,
        status: e.status,
        timestamp: e.timestamp.toISOString(),
      })),
    },
  };
}

/* =======================
   UPDATE
======================= */
export async function updateParcelStatus(input: {
  trackingNumber: string;
  status: ParcelStatus;
}) {
  if (!PARCEL_STATUSES.includes(input.status)) {
    throw new Error("INVALID_STATUS");
  }

  return prisma.parcel.update({
    where: { trackingNumber: input.trackingNumber },
    data: { status: input.status },
  });
}

export async function addParcelEvent(input: {
  trackingNumber: string;
  location: string;
  description: string;
  status: ParcelStatus;
}) {
  if (!PARCEL_STATUSES.includes(input.status)) {
    throw new Error("INVALID_STATUS");
  }

  const parcel = await prisma.parcel.findUnique({
    where: { trackingNumber: input.trackingNumber },
  });

  if (!parcel) throw new Error("PARCEL_NOT_FOUND");

  return prisma.$transaction([
    prisma.parcel.update({
      where: { id: parcel.id },
      data: { status: input.status },
    }),
    prisma.parcelEvent.create({
      data: {
        parcelId: parcel.id,
        location: input.location,
        description: input.description,
        status: input.status,
      },
    }),
  ]);
}

/* =======================
   DELETE
======================= */
export async function deleteParcel(trackingNumber: string) {
  const parcel = await prisma.parcel.findUnique({ where: { trackingNumber } });
  if (!parcel) throw new Error("PARCEL_NOT_FOUND");

  await prisma.parcel.delete({ where: { trackingNumber } });
  return { success: true };
}
