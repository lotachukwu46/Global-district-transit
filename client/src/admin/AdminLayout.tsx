import {
  Activity,
  History,
  LayoutDashboard,
  LogOut,
  Package,
  Settings,
  ShieldCheck,
} from "lucide-react"; // I recommend adding lucide-react for professional icons
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("admin_session");
    navigate("/admin/login");
  };

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
      active: true,
    },
    {
      label: "Parcel Registry",
      path: "/admin/parcels",
      icon: Package,
      active: true,
    },
    { label: "Audit Logs", path: "/admin/logs", icon: History, active: false },
    {
      label: "Security",
      path: "/admin/settings",
      icon: Settings,
      active: false,
    },
  ];

  return (
    <div className="min-h-screen flex bg-[#020617] text-slate-300 font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-[#0b0f1a] border-r border-slate-800/50 flex flex-col">
        {/* BRANDING */}
        <div className="p-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <div>
              <span className="text-white font-black text-lg tracking-tight block leading-none">
                GDT
              </span>
              <span className="text-[10px] text-blue-500 font-bold uppercase tracking-[0.2em]">
                Core Admin
              </span>
            </div>
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-4 space-y-1">
          <p className="px-4 text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">
            Management
          </p>
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => item.active && navigate(item.path)}
              disabled={!item.active}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all group
                ${
                  location.pathname === item.path
                    ? "bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[inset_0_0_12px_rgba(37,99,235,0.1)]"
                    : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/30"
                }
                ${!item.active && "opacity-25 cursor-not-allowed"}
              `}
            >
              <item.icon
                className={`w-5 h-5 ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-slate-600"
                }`}
              />
              <span className="text-sm font-bold tracking-wide">
                {item.label}
              </span>
              {location.pathname === item.path && (
                <div className="ml-auto w-1 h-4 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
              )}
            </button>
          ))}
        </nav>

        {/* FOOTER / USER */}
        <div className="p-6 mt-auto border-t border-slate-800/50 bg-[#080b14]">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/40 border border-slate-800/50 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-blue-400 font-bold">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">
                System Administrator
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-slate-500 font-mono">
                  ID: 9402-ROOT
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 text-red-500 hover:text-white hover:bg-red-500/10 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all border border-transparent hover:border-red-500/20"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* TOP BAR */}
        <header className="h-20 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-10">
          <div className="flex items-center gap-4">
            <h2 className="text-sm font-black text-white uppercase tracking-widest">
              {location.pathname.split("/").pop()?.replace("-", " ") ||
                "Overview"}
            </h2>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-800/50">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">
                Network Latency: 24ms
              </span>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500 font-mono leading-none">
                JAN 12, 2026
              </p>
              <p className="text-xs font-bold text-slate-300">05:30 GMT</p>
            </div>
          </div>
        </header>

        {/* VIEWPORT */}
        <section className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent">
          <div className="p-10 max-w-7xl mx-auto w-full">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLayout;
