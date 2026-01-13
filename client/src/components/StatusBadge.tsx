import React from "react";

interface StatusBadgeProps {
  status: string; // allow string for safety
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const config: Record<string, { bg: string; text: string; label: string }> = {
    CREATED: {
      bg: "bg-slate-100",
      text: "text-slate-700",
      label: "Order Created",
    },
    PENDING: { bg: "bg-gray-100", text: "text-gray-700", label: "Pending" },
    IN_TRANSIT: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      label: "In Transit",
    },
    OUT_FOR_DELIVERY: {
      bg: "bg-amber-100",
      text: "text-amber-700",
      label: "Out for Delivery",
    },
    DELIVERED: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      label: "Delivered",
    },
    EXCEPTION: { bg: "bg-red-100", text: "text-red-700", label: "Exception" },
  };

  const { bg, text, label } = config[status] ?? {
    bg: "bg-gray-200",
    text: "text-gray-800",
    label: status || "Unknown",
  };

  return (
    <span
      className={`${bg} ${text} px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest`}
    >
      {label}
    </span>
  );
};

export default StatusBadge;
