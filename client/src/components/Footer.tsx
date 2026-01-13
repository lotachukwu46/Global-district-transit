import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto py-16 px-6 md:px-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.833 1.277 9.473 3.666 13.558a11.952 11.952 0 0014.952 0c2.39-4.085 3.666-8.725 3.666-13.558z"
                />
              </svg>
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">
              GDT <span className="text-blue-600">TRANSIT</span>
            </span>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
            The global authority in discreet manifest verification. We provide
            unbiased tracking intelligence for high-security assets in transit.
            Not a carrier; an auditor.
          </p>

          <div className="mt-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Global Node Network: Operational
            </span>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <p className="text-slate-900 font-black uppercase tracking-widest text-[11px]">
            Inquiry Services
          </p>
          <nav className="flex flex-col gap-3 text-sm text-slate-500">
            <Link to="/track" className="hover:text-blue-600 transition-colors">
              Manifest Search
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-600 transition-colors"
            >
              API Documentation
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Agent Support
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              Node Infrastructure
            </Link>
          </nav>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <p className="text-slate-900 font-black uppercase tracking-widest text-[11px]">
            Governance
          </p>
          <nav className="flex flex-col gap-3 text-sm text-slate-500">
            <Link
              to="/privacy"
              className="hover:text-blue-600 transition-colors"
            >
              Data Privacy
            </Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
            <Link
              to="/security"
              className="hover:text-blue-600 transition-colors"
            >
              Security Protocols
            </Link>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
        <p>© {currentYear} Global Discreet Transit. All manifests encrypted.</p>
        <div className="flex gap-8">
          <span className="text-slate-300">Build: 2026.01.PX</span>
          <span className="text-blue-600/50">Secure Environment</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
