import React from "react";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaBullhorn,
  FaRoute,
  FaRoad,
  FaSign,
  FaLightbulb,
  FaComments,
} from "react-icons/fa";

// Import actual Outdoor images
import HeroImg from "../Images/outdoor services hero.png";
import Outdoor1 from "../Images/outdoor 1.webp";
import Outdoor2 from "../Images/outdoor 2.jpg";
import Outdoor3 from "../Images/outdoor 3.jpg";
import Outdoor4 from "../Images/outdoor 4.jpg";

const OutdoorAdvertising = () => {
  // Same Premium Palette (Gold + Indigo)
  const BRAND = {
    indigo: "#0B1B3B",
    indigo2: "#08142E",
    gold: "#D4AF37",
    gold2: "#F3D27A",
    page: "#F4F7FF",
  };

  // Replace with your real WhatsApp link
  const WHATSAPP_LINK = "https://wa.me/919999999999?text=Hi%20Trishul%20Media,%20I%20need%20Outdoor%20Advertising%20details";

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: BRAND.page }}>
      {/* =========================
          HERO (Outdoor Advertising)
      ========================= */}
      <section
        className="relative overflow-hidden px-6 lg:px-20 pt-32 pb-24"
        style={{
          background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
        }}
      >
        {/* Premium grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Gold glow */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] blur-3xl rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.34), transparent 60%)",
          }}
        />
        <div
          className="absolute -bottom-56 right-[-120px] w-[780px] h-[780px] blur-3xl rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center justify-center mx-auto lg:mx-0 px-5 py-2 rounded-full border"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                color: BRAND.gold2,
              }}
            >
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase">
                Outdoor Advertising — Trishul Media
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              <span style={{ color: BRAND.gold2 }}>Capturing Attention</span><br />
              On‑the‑Go
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 22px 55px rgba(212,175,55,0.25)",
                }}
              >
                Get Quote <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg mt-10 lg:mt-0">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(255,255,255,0.60), rgba(11,27,59,0.12))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200/20 shadow-2xl bg-white/10 backdrop-blur-md">
              <img
                src={HeroImg}
                alt="Outdoor Advertising Hero"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 1: Mobile Hoarding
      ========================= */}
      <section
        className="relative py-20 px-6 lg:px-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F4F7FF 0%, #EEF4FF 100%)" }}
      >
        <div
          className="absolute -top-28 left-10 w-[420px] h-[420px] blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 62%)" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Text LEFT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70">
              <FaRoute style={{ color: BRAND.indigo }} />
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase" style={{ color: BRAND.indigo }}>
                Mobile Hoarding
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: BRAND.indigo }}>
              Boost your brand visibility with Mobile Hoarding
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed">
              Looking for Mobile Hoarding solutions? We help your brand stand out on roads with
              high‑impact moving visibility in key areas.
            </p>

            <h3 className="mt-6 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
              Why Choose Our Mobile Hoarding Services?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Affordable Advertisement Hoarding Cost – premium advertising at competitive rates.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Billboard and Hoarding Options – choose from multiple advertising formats.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Strategic Placement – we reach the right audience at the right time.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Flexible Hoarding Advertising Price – packages that fit your budget.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Outdoor Hoarding Advertising – target high‑traffic areas for better impact.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Get Quote <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border"
                style={{
                  color: BRAND.indigo,
                  borderColor: "rgba(11,27,59,0.16)",
                  background: "rgba(255,255,255,0.75)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>

          {/* Image RIGHT */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(255,255,255,0.60), rgba(11,27,59,0.12))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/70">
              <img
                src={Outdoor1}
                alt="Mobile Hoarding"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 2: Hoarding Advertising
      ========================= */}
      <section className="relative py-20 px-6 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, #EEF4FF 0%, #F4F7FF 100%)" }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image LEFT */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(255,255,255,0.60), rgba(11,27,59,0.12))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/70">
              <img
                src={Outdoor2}
                alt="Hoarding Advertising"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text RIGHT */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70">
              <FaSign style={{ color: BRAND.indigo }} />
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase" style={{ color: BRAND.indigo }}>
                Hoarding Advertising
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: BRAND.indigo }}>
              High‑Impact Hoarding Advertising for Maximum Brand Exposure
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed">
              Looking for the best advertising hoardings to promote your brand? Our ad hoarding solutions provide
              high visibility and ensure your message reaches a vast audience in high‑traffic areas.
            </p>

            <h3 className="mt-6 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
              Why Invest in Hoarding Advertising?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Cost‑Effective Advertisement Hoarding – flexible pricing options.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Billboard and Hoarding Solutions – premium placements for exposure.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Affordable Hoarding Advertising Cost – competitive rates to fit budget.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Transparent Hoarding Advertising Price – no hidden fees.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Outdoor Hoarding Advertising – busy streets, hubs, prime locations.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Get Quote <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border"
                style={{
                  color: BRAND.indigo,
                  borderColor: "rgba(11,27,59,0.16)",
                  background: "rgba(255,255,255,0.75)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3: Gantries Advertising
      ========================= */}
      <section
        className="relative py-20 px-6 lg:px-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F4F7FF 0%, #EEF4FF 100%)" }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text LEFT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70">
              <FaRoad style={{ color: BRAND.indigo }} />
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase" style={{ color: BRAND.indigo }}>
                Gantries Advertising
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: BRAND.indigo }}>
              High‑Impact Gantries Advertising for Maximum Brand Exposure
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed">
              Gantry billboards are placed on highways and major roads—ensuring maximum reach and continuous visibility.
              Large, eye‑catching displays make your message stand out in high‑traffic zones.
            </p>

            <h3 className="mt-6 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
              Why Choose Gantries Advertising?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Maximum Visibility – highways and busy roads for continuous exposure.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                24/7 Brand Promotion – always visible day and night.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Cost‑Effective Marketing – high ROI compared to other mediums.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Targeted Reach – engage daily commuters and travelers.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Premium Locations – choose prime spots for best engagement.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Get Quote <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border"
                style={{
                  color: BRAND.indigo,
                  borderColor: "rgba(11,27,59,0.16)",
                  background: "rgba(255,255,255,0.75)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>

          {/* Image RIGHT */}
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(255,255,255,0.60), rgba(11,27,59,0.12))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/70">
              <img
                src={Outdoor3}
                alt="Gantries Advertising"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4: Pole Kiosk Branding
      ========================= */}
      <section className="relative py-20 px-6 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(180deg, #EEF4FF 0%, #F4F7FF 100%)" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image LEFT */}
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(255,255,255,0.60), rgba(11,27,59,0.12))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/70">
              <img
                src={Outdoor4}
                alt="Pole Kiosk Branding"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text RIGHT */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white/70">
              <FaLightbulb style={{ color: BRAND.indigo }} />
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase" style={{ color: BRAND.indigo }}>
                Pole Kiosk Branding
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: BRAND.indigo }}>
              Use Pole Kiosk Branding & Advertising to Expand Your Brand
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed">
              Our pole kiosk branding solutions help your brand stand out in high‑traffic areas, capturing the attention
              of pedestrians and motorists alike.
            </p>

            <h3 className="mt-6 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
              Why Choose Pole Kiosks Advertising?
            </h3>

            <ul className="mt-4 space-y-3 text-slate-700 leading-relaxed">
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                High‑Impact Visibility – prime street locations for strong recall.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                LED Pole Kiosks – bright and eye‑catching for 24/7 promotion.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Best Pole Kiosk Advertising Services – premium-quality branding output.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                Affordable Pole Kiosk Branding Solutions – cost-effective packages.
              </li>
              <li className="flex gap-3 justify-center lg:justify-start">
                <span className="mt-1 text-sm" style={{ color: BRAND.gold }}>●</span>
                High Visibility Pole Kiosks for Marketing – reach thousands daily.
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Get Quote <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border"
                style={{
                  color: BRAND.indigo,
                  borderColor: "rgba(11,27,59,0.16)",
                  background: "rgba(255,255,255,0.75)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA (same AI style)
      ========================= */}
      <section
        className="relative py-24 px-6 lg:px-20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] blur-3xl rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.30), transparent 62%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className="rounded-[2rem] border px-8 py-14 md:px-14"
            style={{
              borderColor: "rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 28px 90px rgba(0,0,0,0.25)",
            }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Need Outdoor Advertising in Raipur?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              Tell us your location, timeline, and budget—we’ll suggest the best hoarding, gantry,
              and kiosk placements for maximum visibility.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-11 py-4 rounded-full text-lg font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.28)",
                }}
              >
                Contact Us <FaArrowRight />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-11 py-4 rounded-full text-lg font-bold border text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>

            <div className="mt-10 text-sm text-white/55 font-semibold flex flex-wrap justify-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2"><FaMapMarkerAlt /> Prime Locations</span>
              <span className="inline-flex items-center gap-2"><FaBullhorn /> High Visibility</span>
              <span className="inline-flex items-center gap-2"><FaRoute /> Strategic Placement</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutdoorAdvertising;