import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../api/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!password) return;
    setLoading(true);
    setError("");

    try {
      const data = await loginAdmin(password);
      const session = {
        token: data.token,
        expires: Date.now() + 1000 * 60 * 60,
      };
      localStorage.setItem("admin_session", JSON.stringify(session));
      navigate("/admin/");
    } catch (err: any) {
      const msg = err.response?.data?.error || "CONNECTION_FAILED";
      setError(msg === "INVALID_CREDENTIALS" ? "INVALID SECURITY KEY" : msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0b] p-6 font-sans">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[420px]">
        {/* Professional Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg mb-6 shadow-xl shadow-white/5">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight">
            GDT Management Console
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Authorized personnel only
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#111113] border border-zinc-800/50 p-8 rounded-2xl shadow-2xl shadow-black/50">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2 px-1">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                  Access Token
                </label>
                <span className="text-[10px] text-zinc-600 font-mono">
                  SEC-LEVEL 4
                </span>
              </div>
              <input
                type="password"
                placeholder="Enter access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className={`w-full bg-[#161618] border rounded-xl px-5 py-3.5 text-white placeholder:text-zinc-700 outline-none transition-all
                  ${
                    error
                      ? "border-red-500/50 ring-1 ring-red-500/20"
                      : "border-zinc-800 focus:border-zinc-500 focus:bg-[#1a1a1c]"
                  }
                `}
                autoFocus
              />
            </div>

            {error && (
              <div className="animate-shake flex items-center gap-3 p-3.5 bg-red-500/5 border border-red-500/10 rounded-lg">
                <svg
                  className="w-4 h-4 text-red-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-red-500 text-xs font-medium uppercase tracking-wide">
                  {error}
                </p>
              </div>
            )}

            <button
              onClick={handleLogin}
              disabled={loading || !password}
              className="w-full relative bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 text-black py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                "Verify Identity"
              )}
            </button>
          </div>
        </div>

        {/* Audit Info */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4 text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
            <span>Server: HK-4</span>
            <div className="w-1 h-1 bg-zinc-800 rounded-full" />
            <span>Enc: AES-256</span>
          </div>
          <div className="h-px w-8 bg-zinc-800" />
          <p className="text-[10px] text-zinc-700 text-center leading-relaxed max-w-[280px]">
            This system is for the use of authorized GDT employees. All sessions
            are logged and monitored for compliance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
