import React from "react";
import { ParcelEvent } from "../types";
import StatusBadge from "./StatusBadge";

interface TimelineProps {
  events: ParcelEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  // Sort: Newest at the top
  const sorted = [...events].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  if (sorted.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400">
        No events recorded yet.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Line */}
      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100" />

      <div className="space-y-10">
        {sorted.map((event, index) => {
          const isLatest = index === 0;
          return (
            <div key={event.id || index} className="relative pl-10">
              {/* Dot */}
              <div
                className={`absolute left-0 w-6 h-6 rounded-full border-4 border-white z-10 
                ${
                  isLatest ? "bg-blue-600 ring-4 ring-blue-50" : "bg-gray-300"
                }`}
              />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
                <div>
                  <h4
                    className={`text-base font-bold leading-none ${
                      isLatest ? "text-blue-600" : "text-gray-900"
                    }`}
                  >
                    {event.description}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-gray-500">
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="md:text-right flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1">
                  <time className="text-xs font-bold text-gray-400">
                    {new Date(event.timestamp).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <time className="text-[11px] text-gray-400">
                    {new Date(event.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                  <div className="md:mt-2 scale-90 origin-right">
                    <StatusBadge status={event.status as string} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
