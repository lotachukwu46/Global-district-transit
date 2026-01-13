// src/services/aggregator.service.ts

export type AggregatorParcelEvent = {
  location: string;
  description: string;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
  timestamp: string;
};

export type AggregatorParcel = {
  trackingNumber: string;
  courierCode: string;
  orderNumber: string;
  origin: string;
  destination: string;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
  customerName: string;
  customerEmail: string;
  weight: number;
  events: AggregatorParcelEvent[];
};

export async function trackParcel(
  trackingNumber: string
): Promise<AggregatorParcel> {
  await new Promise((r) => setTimeout(r, 300));

  return {
    trackingNumber,
    courierCode: "GDT",
    orderNumber: `ORD-${Math.floor(Math.random() * 10000)}`,
    origin: "Lagos Hub",
    destination: "Abuja Central",
    status: "IN_TRANSIT",
    customerName: "John Doe (Fake)",
    customerEmail: "john.doe@example.com",
    weight: 2.5,
    events: [
      {
        location: "Warehouse",
        description: "Parcel received at origin",
        status: "PENDING",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        location: "Lagos Hub",
        description: "Sorting complete",
        status: "IN_TRANSIT",
        timestamp: new Date().toISOString(),
      },
    ],
  };
}
