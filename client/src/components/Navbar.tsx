import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinkBase = "transition-colors font-semibold hover:text-blue-600";

const navLinkActive = "text-blue-600";
const navLinkInactive = "text-gray-600";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={closeMobile}
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Global Discreet Transit
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? navLinkActive : navLinkInactive}`
            }
          >
            Support
          </NavLink>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/track"
            className="px-5 py-2 text-sm font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
          >
            Track Parcel
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-6 space-y-4 text-sm">
            <NavLink
              to="/about"
              onClick={closeMobile}
              className={({ isActive }) =>
                `block ${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              onClick={closeMobile}
              className={({ isActive }) =>
                `block ${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMobile}
              className={({ isActive }) =>
                `block ${navLinkBase} ${
                  isActive ? navLinkActive : navLinkInactive
                }`
              }
            >
              Support
            </NavLink>

            <Link
              to="/track"
              onClick={closeMobile}
              className="block mt-4 w-full text-center px-5 py-3 text-sm font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
            >
              Track Parcel
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
