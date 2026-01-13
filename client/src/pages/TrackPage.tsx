import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import TrackingResult from "../components/TrackingResult";
import { trackParcel } from "../services/trackingService";
import { TrackingInfo } from "../types";

const TRACKING_REGEX = /^GDT-[A-Z0-9]{6,}$/;

const TrackPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [data, setData] = useState<TrackingInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    if (!TRACKING_REGEX.test(id)) {
      setError("Invalid tracking number. Format should be GDT-XXXXXX");
      setStatus("error");
      return;
    }

    let isMounted = true;
    setStatus("loading");

    trackParcel(id)
      .then((res) => {
        if (isMounted) {
          setData(res); // res is now correctly TrackingInfo
          setStatus("success");
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Parcel not found.");
          setStatus("error");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  // UX Improvement: Skeleton Loader
  if (status === "loading") {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-4">
        <div className="h-32 w-full bg-gray-200 animate-pulse rounded-xl" />
        <div className="h-64 w-full bg-gray-100 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="max-w-md mx-auto py-20">
        <ErrorMessage
          error={{ type: "NOT_FOUND", message: error || "An error occurred" }}
          onRetry={() => navigate("/")}
        />
      </div>
    );
  }

  if (status === "success" && data) {
    return <TrackingResult data={data} />;
  }

  return null;
};

export default TrackPage;
