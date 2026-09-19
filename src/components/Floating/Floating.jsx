import React, { useMemo, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FiShare2, FiX } from "react-icons/fi";
const BRAND = {
  indigo: "#0B1B3B",
  indigo2: "#08142E",
  gold: "#D4AF37",
  gold2: "#F3D27A",
};

const IconBtn = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="group relative w-11 h-11 rounded-2xl grid place-items-center
               border border-slate-200 bg-white
               shadow-[0_12px_36px_-28px_rgba(11,27,59,0.45)]
               hover:-translate-y-[2px] hover:shadow-[0_18px_55px_-32px_rgba(11,27,59,0.55)]
               transition motion-reduce:transition-none"
  >
    <span className="text-[#0B1B3B]">{children}</span>

    {/* Tooltip (left) */}
    <span
      className="pointer-events-none absolute right-full mr-3 whitespace-nowrap
                 opacity-0 translate-x-1
                 group-hover:opacity-100 group-hover:translate-x-0
                 transition motion-reduce:transition-none
                 text-xs font-extrabold tracking-wide
                 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-800"
    >
      {label}
    </span>
  </a>
);

const FloatingSocial = () => {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "918085354646";
  const whatsappLink = useMemo(() => {
    const text = "Hello, I want to enquire about your services.";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, []);

  const socials = [
    { label: "Instagram", href: "#", icon: <FaInstagram className="text-[18px]" /> },
    { label: "Facebook", href: "#", icon: <FaFacebookF className="text-[18px]" /> },
    // { label: "LinkedIn", href: "#", icon: <FaLinkedinIn className="text-[18px]" /> },
    { label: "YouTube", href: "#", icon: <FaYoutube className="text-[18px]" /> },
    // { label: "X (Twitter)", href: "#", icon: <FaTwitter className="text-[18px]" /> },
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[999] flex flex-col items-end gap-3">
      {/* ───────── Social panel (UPWARDS) ───────── */}
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Toggle button (premium) */}
        <button
          type="button"
          aria-label="Open social links"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="relative w-12 h-12 rounded-2xl p-[1px] transition
                     hover:-translate-y-[2px] motion-reduce:transition-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(243,210,122,0.75), rgba(255,255,255,0.35), rgba(212,175,55,0.70))",
            boxShadow: "0 18px 55px rgba(11,27,59,0.18)",
          }}
        >
          <span
            className="w-full h-full rounded-2xl grid place-items-center border border-white/40 backdrop-blur"
            style={{
              background: "rgba(255,255,255,0.85)",
              color: BRAND.indigo,
            }}
          >
            <span
              className={[
                "transition-transform duration-300 motion-reduce:transition-none",
                open ? "rotate-90" : "rotate-0",
              ].join(" ")}
            >
              {open ? <FiX className="text-xl" /> : <FiShare2 className="text-xl" />}
            </span>
          </span>
        </button>

        {/* Panel opens above */}
        <div
          className={[
            "absolute bottom-full right-0 mb-3",
            "transition-all duration-300 motion-reduce:transition-none",
            open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none",
          ].join(" ")}
        >
          {/* Premium glass container with gold ring */}
          <div
            className="rounded-[1.8rem] p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(243,210,122,0.70), rgba(255,255,255,0.40), rgba(212,175,55,0.70))",
              boxShadow: "0 22px 70px rgba(11,27,59,0.18)",
            }}
          >
            <div className="rounded-[1.75rem] border border-white/40 bg-white/85 backdrop-blur px-3 py-3">
              {/* subtle premium pattern */}
              <div className="relative">
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none [background-image:linear-gradient(rgba(11,27,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(11,27,59,0.10)_1px,transparent_1px)] [background-size:52px_52px] rounded-[1.6rem]" />

                <div className="relative flex flex-col items-end gap-2">
                  {socials.map((s, i) => (
                    <div
                      key={s.label}
                      style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                      className={[
                        "transition-all duration-300 motion-reduce:transition-none",
                        open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
                      ].join(" ")}
                    >
                      <IconBtn href={s.href} label={s.label}>
                        {s.icon}
                      </IconBtn>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* tiny hint */}
          <div className="mt-2 text-right text-[11px] font-extrabold tracking-[0.18em] uppercase text-white/70 hidden" />
        </div>
      </div>

      {/* ───────── WhatsApp button (main) ───────── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative group w-14 h-14 rounded-full grid place-items-center border
                   transition hover:-translate-y-[2px] motion-reduce:transition-none"
        style={{
          borderColor: "rgba(212,175,55,0.35)",
          background: `linear-gradient(135deg, ${BRAND.gold2}, ${BRAND.gold})`,
          boxShadow: "0 22px 70px rgba(212,175,55,0.25)",
          color: BRAND.indigo2,
        }}
      >
        <FaWhatsapp className="text-2xl" />

        {/* Premium pulse ring on hover */}
        <span
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition motion-reduce:transition-none"
          style={{
            boxShadow: "0 0 0 10px rgba(212,175,55,0.18)",
          }}
        />
      </a>
    </div>
  );
};

export default FloatingSocial;