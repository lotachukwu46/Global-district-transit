import React from "react";
import { TrackingInfo } from "../types";
import StatusBadge from "./StatusBadge";
import Timeline from "./Timeline";

interface TrackingResultProps {
  data: TrackingInfo;
}

const TrackingResult: React.FC<TrackingResultProps> = ({ data }) => {
  if (!data) return null;

  const events = data.events || [];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
      <div className="bg-white shadow-2xl shadow-blue-900/10 rounded-3xl border border-gray-100 overflow-hidden">
        {/* Header - Improved Contrast */}
        <div className="p-6 md:p-10 bg-slate-900 text-white relative overflow-hidden">
          {/* Subtle Decorative Element */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                Official Tracking ID
              </span>
              <h2 className="text-3xl md:text-4xl font-mono font-bold mt-1">
                {data.tracking_number || "N/A"}
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">
                    Origin
                  </span>
                  <span className="font-semibold text-gray-100">
                    {data.origin_country || "Unknown"}
                  </span>
                </div>
                <svg
                  className="w-5 h-5 text-blue-500 mt-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 uppercase font-bold">
                    Destination
                  </span>
                  <span className="font-semibold text-gray-100">
                    {data.destination_country || "Unknown"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <StatusBadge status={data.delivery_status as string} />
              <p className="text-xs text-gray-400 font-medium">
                Update:{" "}
                {data.update_at
                  ? new Date(data.update_at).toLocaleString()
                  : "Just now"}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid - Fixed Property Mappings */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100 bg-gray-50/50">
          <StatBlock
            label="Weight"
            value={data.weight ? `${data.weight} kg` : "N/A"}
          />
          <StatBlock label="Order Ref" value={data.order_number || "None"} />
          <StatBlock label="Carrier" value={data.courier_code || "Standard"} />
          <StatBlock
            label="Booked On"
            value={
              data.created_at
                ? new Date(data.created_at).toLocaleDateString()
                : "N/A"
            }
          />
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-slate-900">
                  Shipment Timeline
                </h3>
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
                  {events.length} Checkpoints
                </span>
              </div>
              <Timeline events={events} />
            </div>

            <div className="space-y-6">
              {/* Recipient Card */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-4">
                  Recipient Details
                </h4>
                <p className="text-sm font-bold text-slate-800">
                  {data.customer_name || "Guest User"}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {data.customer_email || "No email provided"}
                </p>
              </div>

              {/* Support Card */}
              <div className="p-6 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-200">
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-xs text-blue-100 leading-relaxed mb-4">
                  If your package is delayed more than 3 days, please contact
                  our dispatch.
                </p>
                <button className="w-full py-2.5 bg-white text-blue-600 text-xs font-bold rounded-xl transition-transform active:scale-95">
                  Raise a Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatBlock = ({ label, value }: { label: string; value: string }) => (
  <div className="p-4 md:p-6 border-r border-gray-100 last:border-r-0">
    <p className="text-[10px] uppercase font-black text-gray-400 tracking-tighter mb-1">
      {label}
    </p>
    <p className="text-sm font-bold text-slate-800">{value}</p>
  </div>
);

export default TrackingResult;
