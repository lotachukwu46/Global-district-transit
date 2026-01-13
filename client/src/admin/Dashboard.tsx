import { AlertCircle, Package, TrendingUp, Users } from "lucide-react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 0, active: 0, hold: 0 });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("admin_shipments") || "[]");
    setStats({
      total: saved.length,
      active: saved.filter((s: any) => s.status === "IN_TRANSIT").length,
      hold: saved.filter((s: any) => s.status === "ON_HOLD").length,
    });
  }, []);

  const cards = [
    {
      label: "Total Manifests",
      value: stats.total,
      icon: Package,
      color: "text-blue-500",
    },
    {
      label: "Active Transit",
      value: stats.active,
      icon: TrendingUp,
      color: "text-emerald-500",
    },
    {
      label: "Security Holds",
      value: stats.hold,
      icon: AlertCircle,
      color: "text-amber-500",
    },
    {
      label: "System Nodes",
      value: "14",
      icon: Users,
      color: "text-purple-500",
    },
  ];

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
          System Overview
        </h1>
        <p className="text-slate-500 font-mono text-xs mt-1 uppercase tracking-widest">
          Global Node Network Status: Optimal
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-[#0b0f1a] border border-slate-800/50 p-6 rounded-2xl shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-slate-900 ${card.color}`}>
                <card.icon size={20} />
              </div>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
                Live Data
              </span>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
              {card.label}
            </p>
            <p className="text-3xl font-black text-white mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      {/* System Activity Mockup */}
      <div className="bg-[#0b0f1a] border border-slate-800/50 rounded-3xl p-8">
        <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] mb-6">
          Global Latency Map
        </h3>
        <div className="h-64 w-full bg-slate-950 rounded-2xl border border-slate-900 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <p className="text-slate-700 font-mono text-[10px] animate-pulse uppercase tracking-[0.5em]">
            Encrypted Visual Uplink Unavailable
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
