import React from "react";
import { Link } from "react-router-dom";
import {
  FiPhone as Phone,
  FiMail as Mail,
  FiMapPin as MapPin,
  FiInstagram as Instagram,
  FiFacebook as Facebook,
  FiLinkedin as Linkedin,
  FiArrowUpRight as ArrowUpRight,
} from "react-icons/fi";
import logo from "../Images/logo.png";

/* ─── Same services list (as Header) ─── */
const servicesMenu = [
  { name: "AI Services", path: "/services/ai-services" },
  { name: "Outdoor Advertising", path: "/services/outdoor-advertising" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "Personal Branding", path: "/services/personal-branding" },
  { name: "Designing Services", path: "/services/designing" },
  { name: "Audio Visuals", path: "/services/audio-visuals" },
  { name: "Branding & Strategy", path: "/services/branding-strategy" },
  { name: "Print Media", path: "/services/print-media" },
  { name: "Event Promotion", path: "/services/event-promotion" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const phoneDisplay = "+91-8085354646";
  const phoneDial = "+918085354646";
  const email = "[EMAIL_ADDRESS]";
  const address = "Mowa, Raipur, Chhattisgarh";

  const whatsappNumber = "918085354646";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I want to enquire about your services."
  )}`;

  return (
    <footer className="w-full bg-[#F4EDE3] border-t border-[#D8C9B8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* ───────────────── Top CTA strip ───────────────── */}
        <div className="py-10">
          <div className="rounded-3xl border border-[#D8C9B8] bg-white/70 backdrop-blur px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_60px_-40px_rgba(11,27,59,0.35)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <p className="m-0 text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#6B4F3A]">
                  Need help with a project?
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-[#3F342C]">
                  Let’s build something premium.
                </h3>
                <p className="mt-2 text-[#4A4038] font-medium max-w-2xl">
                  Share your goals and timeline—our team will suggest the right
                  service plan and execution approach.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-[13px] font-extrabold
                             text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
                             shadow-[0_10px_28px_rgba(212,175,55,0.28)] hover:brightness-105 transition"
                >
                  WhatsApp Now <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-[13px] font-extrabold
                             border border-[#D8C9B8] bg-white text-[#3F342C]
                             hover:bg-[#F4EDE3] transition"
                >
                  Contact Us <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────── Main Footer Grid ───────────────── */}
        <div className="py-12 grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Trishul Media Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-[#4A4038] font-medium leading-relaxed">
              We create premium advertising solutions across Outdoor, Digital,
              Design, Audio-Visuals and Branding focused on clarity, trust and
              results.
            </p>

            {/* Social (optional links — replace with your real URLs) */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center
                           text-[#4A4038] hover:text-[#6B4F3A] hover:bg-white transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center
                           text-[#4A4038] hover:text-[#6B4F3A] hover:bg-white transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center
                           text-[#4A4038] hover:text-[#6B4F3A] hover:bg-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[#3F342C] font-extrabold tracking-wide">
              Quick Links
            </p>
            <div className="mt-4 space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((x) => (
                <Link
                  key={x.path}
                  to={x.path}
                  className="block text-[#4A4038] font-semibold hover:text-[#6B4F3A] transition"
                >
                  {x.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#3F342C] font-extrabold tracking-wide">
              Services
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3">
              {servicesMenu.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  className="text-[#4A4038] font-semibold hover:text-[#6B4F3A] transition"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#3F342C] font-extrabold tracking-wide">
              Contact
            </p>

            <div className="mt-4 space-y-4">
              <a
                href={`tel:${phoneDial}`}
                className="flex items-start gap-3 text-[#4A4038] hover:text-[#6B4F3A] transition"
              >
                <span className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="font-semibold">{phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-3 text-[#4A4038] hover:text-[#6B4F3A] transition"
              >
                <span className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="font-semibold break-all">{email}</span>
              </a>

              <a
                href="https://www.google.com/maps?q=Mowa%20Raipur%20Chhattisgarh"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-[#4A4038] hover:text-[#6B4F3A] transition"
              >
                <span className="w-10 h-10 rounded-2xl border border-[#D8C9B8] bg-white/70 grid place-items-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <span className="font-semibold">{address}</span>
              </a>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-extrabold
                           text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
                           shadow-[0_10px_28px_rgba(212,175,55,0.28)] hover:brightness-105 transition"
              >
                WhatsApp <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[13px] font-extrabold
                           border border-[#D8C9B8] bg-white text-[#3F342C]
                           hover:bg-[#F4EDE3] transition"
              >
                Enquire <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ───────────────── Bottom bar ───────────────── */}
        <div className="py-6 border-t border-[#D8C9B8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="m-0 text-sm font-semibold text-[#4A4038]">
            © {year} Trishul Media Networks. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link to="/privacy-policy" className="text-[#4A4038] hover:text-[#6B4F3A] transition">
              Privacy Policy
            </Link>
            <span className="text-[#D8C9B8]">|</span>
            <Link to="/terms" className="text-[#4A4038] hover:text-[#6B4F3A] transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;