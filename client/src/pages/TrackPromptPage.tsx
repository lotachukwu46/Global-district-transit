import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TRACKING_REGEX = /^GDT-[A-Z0-9]{6,}$/;

const TrackPromptPage = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const navigate = useNavigate();

  // Reset error when user starts typing again
  useEffect(() => {
    if (error) setError(null);
  }, [trackingNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = trackingNumber.trim().toUpperCase();

    if (!TRACKING_REGEX.test(cleanId)) {
      setError(
        "Format incorrect. Must start with 'GDT-' followed by at least 6 characters."
      );
      return;
    }

    setIsValidating(true);
    // Mimic a "Secure Check" delay
    setTimeout(() => {
      navigate(`/track/${cleanId}`);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex bg-white overflow-hidden">
      {/* LEFT SIDE: Visual Brand Reinforcement */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 items-center justify-center p-12">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
          alt="Global Logistics"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-lg">
          <div className="w-16 h-1 bg-blue-500 mb-8"></div>
          <h2 className="text-5xl font-black text-white leading-tight mb-6">
            Global Discreet <br />
            <span className="text-blue-500">Security Portal</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Authorized access only. Enter your unique transit identifier to pull
            real-time manifest data from our global nodes.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-white font-bold text-2xl">24/7</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
                Surveillance
              </p>
            </div>
            <div>
              <p className="text-white font-bold text-2xl">Encrypted</p>
              <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">
                Data Feed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:px-32 relative">
        {/* Mobile Header (only visible on small screens) */}
        <div className="lg:hidden mb-12">
          <h2 className="text-3xl font-black text-slate-900">
            Secure Tracking
          </h2>
        </div>

        <div className="max-w-md w-full mx-auto">
          <div className="mb-10">
            <h1 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-2">
              Manifest Access
            </h1>
            <h3 className="text-3xl font-bold text-slate-900">
              Enter Tracking ID
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="GDT-XXXXXXX"
                disabled={isValidating}
                className={`w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 transition-all text-lg font-mono tracking-wider focus:outline-none 
                  ${
                    error
                      ? "border-red-500 bg-red-50"
                      : "border-slate-100 focus:border-blue-500 focus:bg-white"
                  }
                  ${isValidating ? "opacity-50 cursor-not-allowed" : ""}
                `}
                autoComplete="off"
                spellCheck={false}
                required
              />
              {/* Floating Validation Helper */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {TRACKING_REGEX.test(trackingNumber.toUpperCase()) && (
                  <span className="text-green-500">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <button
              disabled={isValidating || !trackingNumber}
              className="w-full relative bg-slate-900 text-white font-black py-5 rounded-2xl overflow-hidden hover:bg-slate-800 transition-all disabled:opacity-50 disabled:bg-slate-700"
            >
              <span className={isValidating ? "opacity-0" : "opacity-100"}>
                {isValidating ? "Validating..." : "ACCESS MANIFEST"}
              </span>

              {/* Loading Spinner */}
              {isValidating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>

          <div className="mt-12 space-y-4">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              Help & Support
            </p>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => navigate("/contact")}
                className="text-left text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Lost your tracking identifier? Contact an agent.
              </button>
              <button
                onClick={() => navigate("/")}
                className="text-left text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Return to Global Homepage
              </button>
            </div>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 p-8 opacity-5 select-none pointer-events-none">
          <h4 className="text-9xl font-black">GDT</h4>
        </div>
      </div>
    </div>
  );
};

export default TrackPromptPage;
