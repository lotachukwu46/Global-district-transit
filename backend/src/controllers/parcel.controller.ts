import { Request, Response } from "express";
import { trackParcel as aggregatorTrackParcel } from "../services/aggregator.service";
import { getParcelByTrackingNumber } from "../services/parcel.service";

export async function trackParcel(req: Request, res: Response) {
  const { trackingNumber } = req.params;

  try {
    // 1. Check internal DB - DO NOT TOUCH (As requested)
    const parcel = await getParcelByTrackingNumber(trackingNumber);
    if (parcel) return res.json(parcel);

    // 2. Fallback to aggregator service
    const aggParcel = await aggregatorTrackParcel(trackingNumber);

    if (!aggParcel) {
      return res.status(404).json({
        meta: { code: 404, message: "NOT_FOUND" },
        error: "Parcel not found",
      });
    }

    // 3. Return Aggregator data wrapped in meta/data to match your required Frontend structure
    return res.json({
      meta: { code: 200, message: "OK" },
      data: {
        id: "-1", // Dummy ID for fake parcel
        tracking_number: aggParcel.trackingNumber,
        courier_code: aggParcel.courierCode,
        order_number: aggParcel.orderNumber,
        created_at: new Date().toISOString(),
        update_at: new Date().toISOString(),
        delivery_status: aggParcel.status,
        customer_name: aggParcel.customerName,
        customer_email: aggParcel.customerEmail,
        weight: aggParcel.weight.toString(),
        origin_country: aggParcel.origin,
        destination_country: aggParcel.destination,
        // Optional helpers for the UI
        latest_event:
          aggParcel.events[aggParcel.events.length - 1]?.description,
        events: aggParcel.events.map((e, i) => ({
          id: i,
          parcelId: -1,
          location: e.location,
          description: e.description,
          status: e.status,
          timestamp: e.timestamp,
        })),
      },
    });
  } catch (err: any) {
    console.error("Tracking Error:", err);
    return res.status(500).json({
      meta: { code: 500, message: "INTERNAL_ERROR" },
      error: err.message,
    });
  }
}
