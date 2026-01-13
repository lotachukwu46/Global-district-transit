import { Globe, MapPin, ShieldAlert, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const generateTrackingId = () =>
  `GDT-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

const CreateShipment = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    recipient: "",
    origin: "",
    destination: "",
  });

  const createShipment = () => {
    if (!form.recipient || !form.origin || !form.destination) return;

    const shipments = JSON.parse(
      localStorage.getItem("admin_shipments") || "[]"
    );
    const shipment = {
      id: generateTrackingId(),
      ...form,
      status: "CREATED",
      events: [
        {
          time: new Date().toISOString(),
          location: form.origin,
          description: "Shipment manifest initialized in secure database.",
        },
      ],
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "admin_shipments",
      JSON.stringify([shipment, ...shipments])
    );
    navigate("/admin/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h1 className="text-3xl font-black text-white tracking-tighter">
          INITIALIZE MANIFEST
        </h1>
        <p className="text-slate-500 text-sm mt-2 font-mono">
          Secure Entry Protocol 0.4
        </p>
      </div>

      <div className="bg-slate-900/60 border border-slate-800/50 p-10 rounded-[2.5rem] shadow-2xl space-y-6">
        {/* Recipient Input */}
        <div className="space-y-2">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
            <User className="w-3 h-3 text-blue-500" /> Authorized Recipient
          </label>
          <input
            placeholder="Name or Corporate Entity"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 transition-all outline-none"
            value={form.recipient}
            onChange={(e) => setForm({ ...form, recipient: e.target.value })}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Origin */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <Globe className="w-3 h-3 text-blue-500" /> Point of Origin
            </label>
            <input
              placeholder="e.g. Zurich, CH"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 transition-all outline-none"
              value={form.origin}
              onChange={(e) => setForm({ ...form, origin: e.target.value })}
            />
          </div>

          {/* Destination */}
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <MapPin className="w-3 h-3 text-blue-500" /> Destination Node
            </label>
            <input
              placeholder="e.g. Singapore, SG"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-blue-500/50 transition-all outline-none"
              value={form.destination}
              onChange={(e) =>
                setForm({ ...form, destination: e.target.value })
              }
            />
          </div>
        </div>

        <button
          onClick={createShipment}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all shadow-xl shadow-blue-600/10 mt-4 flex items-center justify-center gap-3"
        >
          <ShieldAlert className="w-4 h-4" />
          Authorize New Shipment
        </button>
      </div>
    </div>
  );
};

export default CreateShipment;
