export interface ApiResponse<T> {
  meta: { code: number; message: string };
  data: T;
}

export type TrackingStatus =
  | "PENDING"
  | "CREATED"
  | "IN_TRANSIT"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED"
  | "EXCEPTION";

export interface ParcelEvent {
  id?: number;
  parcelId?: number;
  location: string;
  description: string;
  status: TrackingStatus | string;
  timestamp: string;
}

export interface TrackingInfo {
  id: string | number;
  tracking_number: string;
  courier_code?: string;
  order_number?: string;
  order_date?: string;
  created_at: string;
  update_at: string;
  delivery_status: TrackingStatus | string;
  origin_country: string;
  destination_country: string;
  // Added missing fields from your JSON
  customer_name?: string;
  customer_email?: string;
  weight?: string;
  latest_event?: string;
  events: ParcelEvent[];
}

export interface TrackingEvent {
  time: string;
  location: string;
  description: string;
}

export interface TrackingError {
  type:
    | "NOT_FOUND"
    | "INVALID"
    | "QUOTA_EXCEEDED"
    | "SERVER_ERROR"
    | "UNKNOWN_ERROR"
    | "INVALID_FORMAT";
  message: string;
}

export interface ParcelEvent {
  id?: number;
  parcelId?: number;
  location: string;
  description: string;
  status: TrackingStatus | string;
  timestamp: string;
}
