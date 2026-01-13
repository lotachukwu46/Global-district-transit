import { trackParcel as apiTrackParcel } from "../api/track";
import { ApiResponse, TrackingError, TrackingInfo } from "../types";

export async function trackParcel(
  trackingNumber: string
): Promise<TrackingInfo> {
  try {
    // apiTrackParcel returns ApiResponse<TrackingInfo>
    const response: ApiResponse<TrackingInfo> = await apiTrackParcel(
      trackingNumber
    );

    // Extract the data property here so the component gets the clean object
    return response.data;
  } catch (err: any) {
    throw {
      type: err.response?.status === 404 ? "NOT_FOUND" : "SERVER_ERROR",
      message: err.response?.data?.message || "Unable to fetch tracking info",
    } as TrackingError;
  }
}
