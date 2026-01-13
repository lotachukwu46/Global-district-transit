// src/api/admin.ts
import { api } from "./client";

export function getAllParcels() {
  return api.get("/admin/parcels").then((res) => res.data);
}

export function createParcel(payload: { origin: string; destination: string }) {
  return api.post("/admin/parcels", payload).then((res) => res.data);
}

export function addParcelEvent(payload: {
  trackingNumber: string;
  location: string;
  description: string;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
}) {
  return api.post("/admin/parcels/event", payload).then((res) => res.data);
}

export function deleteParcel(trackingNumber: string) {
  return api.delete(`/admin/parcels/${trackingNumber}`).then((res) => res.data);
}
