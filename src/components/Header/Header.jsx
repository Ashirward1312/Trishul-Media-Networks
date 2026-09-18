import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../Images/logo.png";

/* ─── All services for dropdown ─── */
const servicesMenu = [
  { name: "AI Services",           path: "/services/ai-services" },
  { name: "Outdoor Advertising",   path: "/services/outdoor-advertising" },
  { name: "Digital Marketing",     path: "/services/digital-marketing" },
  { name: "Personal Branding",     path: "/services/personal-branding" },
  { name: "Designing Services",    path: "/services/designing" },
  { name: "Audio Visuals",         path: "/services/audio-visuals" },
  { name: "Branding & Strategy",   path: "/services/branding-strategy" },
  { name: "Print Media",           path: "/services/print-media" },
  { name: "Event Promotion",       path: "/services/event-promotion" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [servicesOpen, setServicesOpen]   = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate    = useNavigate();

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleContactClick = () => {
    setMobileOpen(false);
    navigate("/contact");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4EDE3]/95 backdrop-blur-md border-b border-[#D8C9B8] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* ═══════════════ TOP BAR ═══════════════ */}
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center shrink-0"
          >
            <img src={logo} alt="Trishul Media Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#6B4F3A]" : "text-[#4A4038] hover:text-[#6B4F3A]"
                }`
              }
            >
              Home
            </NavLink>

            {/* ── Services dropdown ── */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((p) => !p)}
                className="flex items-center gap-1 py-2 text-[14px] font-medium tracking-wide text-[#4A4038] hover:text-[#6B4F3A] transition-all duration-300"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-[#D8C9B8] rounded-2xl shadow-[0_16px_48px_rgba(11,27,59,0.14)] overflow-hidden z-50">
                  {servicesMenu.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      onClick={() => setServicesOpen(false)}
                      className="block px-5 py-3 text-[13px] font-semibold text-[#3F342C] hover:bg-[#F4EDE3] hover:text-[#6B4F3A] transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#6B4F3A]" : "text-[#4A4038] hover:text-[#6B4F3A]"
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                `py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#6B4F3A]" : "text-[#4A4038] hover:text-[#6B4F3A]"
                }`
              }
            >
              Case Studies
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-[#6B4F3A]" : "text-[#4A4038] hover:text-[#6B4F3A]"
                }`
              }
            >
              About Us
            </NavLink>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full text-[13px] font-extrabold
                         text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
                         shadow-[0_8px_24px_rgba(212,175,55,0.30)] hover:brightness-105 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden p-2 text-[#3F342C] hover:text-[#6B4F3A] transition"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* ═══════════════ MOBILE MENU ═══════════════ */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#D8C9B8] py-4 space-y-1">

            <NavLink
              to="/"
              end
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive ? "bg-[#E6D8C8] text-[#6B4F3A]" : "text-[#4A4038] hover:bg-[#EDE3D7]"
                }`
              }
            >
              Home
            </NavLink>

            {/* ── Mobile Services accordion ── */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#4A4038] hover:bg-[#EDE3D7] transition"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 ml-4 border-l-2 border-[#D8C9B8] pl-4 space-y-0.5">
                  {servicesMenu.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false); }}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#4A4038] hover:bg-[#EDE3D7] hover:text-[#6B4F3A] transition"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/portfolio"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive ? "bg-[#E6D8C8] text-[#6B4F3A]" : "text-[#4A4038] hover:bg-[#EDE3D7]"
                }`
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/case-studies"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive ? "bg-[#E6D8C8] text-[#6B4F3A]" : "text-[#4A4038] hover:bg-[#EDE3D7]"
                }`
              }
            >
              Case Studies
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive ? "bg-[#E6D8C8] text-[#6B4F3A]" : "text-[#4A4038] hover:bg-[#EDE3D7]"
                }`
              }
            >
              About Us
            </NavLink>

            {/* Mobile CTA */}
            <div className="pt-3 px-4">
              <button
                onClick={handleContactClick}
                className="w-full inline-flex items-center justify-center px-7 py-3 rounded-full text-[13px] font-extrabold
                           text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
                           shadow-[0_8px_24px_rgba(212,175,55,0.30)] hover:brightness-105 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
