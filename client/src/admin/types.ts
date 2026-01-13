export interface ShipmentEvent {
  time: string;
  location: string;
  description: string;
}

export interface Shipment {
  id: string;
  recipient: string;
  origin: string;
  destination: string;
  status: "CREATED" | "IN_TRANSIT" | "ON_HOLD" | "DELIVERED" | "CANCELLED";
  events: ShipmentEvent[];
  createdAt: string;
}
