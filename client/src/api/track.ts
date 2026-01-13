import { api } from "./client";

export function trackParcel(trackingNumber: string) {
  return api.get(`/api/track/${trackingNumber}`).then((res) => res.data);
}
