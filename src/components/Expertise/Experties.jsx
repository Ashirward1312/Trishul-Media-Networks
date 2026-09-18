import React from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import outdoor_ad1 from "../Images/outdoor experties.png";

/* ─── Brand Palette (matches all service pages) ─── */
const BRAND = {
  indigo: "#0B1B3B",
  indigo2: "#08142E",
  gold: "#D4AF37",
  gold2: "#F3D27A",
};

/* ─── Services data (internal React Router routes) ─── */
const services = [
  {
    img: outdoor_ad1,
    title: "Outdoor Advertising",
    desc: "Grow your brand with the best outdoor advertising solutions in Raipur—hoardings, gantry, and mobile advertising.",
    route: "/services/outdoor-advertising",
    points: ["Mobile Hoarding", "Hoardings", "Gantry", "Pole Kiosk", "Society Branding"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482373/bullhorn_cvjwfw.png",
    title: "Digital Marketing",
    desc: "Boost your business with a leading digital marketing agency offering SEO, social media, and performance campaigns.",
    route: "/services/digital-marketing",
    points: ["Website Development", "SEO / SEM Optimization", "Social Media Marketing", "Application Development"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482373/design-thinking_eca0oe.png",
    title: "Designing Services",
    desc: "Elevate your brand with top design services—logos, packaging, graphics, and creative concepts.",
    route: "/services/designing",
    points: ["Packaging", "Creative Concepts", "Design & Artwork"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482371/audio-visual_rkbpde.png",
    title: "Audio Visuals",
    desc: "Enhance storytelling with top-notch audio-visual production—videos, commercials, photography and more.",
    route: "/services/audio-visuals",
    points: ["Video Presentations", "Short Films / Documentary", "Radio & TV Commercials", "Photography & Videography"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482351/analysis_str2jj.png",
    title: "Branding & Strategy",
    desc: "Build a strong brand identity with impactful communications strategy and creative 360 campaigns.",
    route: "/services/branding-strategy",
    points: ["Communication Strategy", "Creative 360 Campaigns", "Corporate and Brand Identity"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482377/flyer_ecj9ug.png",
    title: "Print Media",
    desc: "Promote your brand with high-quality print solutions—newspaper ads, brochures, pamphlets, and in-shop branding.",
    route: "/services/print-media",
    points: ["Newspaper Ads", "Brochure", "Pamphlet", "In-Shop Branding"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482353/approved-light-blue_duuxzi.png",
    title: "AI Services",
    desc: "Maximize ROI with cutting-edge AI-powered marketing—smart targeting, chatbots, and campaign optimization.",
    route: "/services/ai-services",
    points: ["AI Chatbot", "Predictive Analytics", "Smart Targeting", "Campaign Optimization"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482354/approved-orange_vywzif.png",
    title: "Personal Branding",
    desc: "Build your authority and credibility with a premium personal branding system for doctors, founders, and leaders.",
    route: "/services/personal-branding",
    points: ["Visibility", "Profile Optimisation", "Content System", "Trust Assets"],
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_180/v1757482377/flyer_ecj9ug.png",
    title: "Event Promotion",
    desc: "Drive registrations and footfall with smart event promotion—corporate events and mall activations.",
    route: "/services/event-promotion",
    points: ["Corporate Events", "Mall Activations", "Targeted Ads", "On-ground Coverage"],
  },
];

/* ─── Small UI Parts ─── */
const Pill = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-slate-200 bg-white/70 backdrop-blur">
    {children}
  </div>
);

const GradientLine = () => (
  <div
    className="mx-auto mt-6 h-1 w-16 rounded-full"
    style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
  />
);

const IconChip = ({ children }) => (
  <div
    className="w-16 h-16 rounded-2xl flex items-center justify-center border"
    style={{
      borderColor: "rgba(212,175,55,0.28)",
      background: "linear-gradient(135deg, rgba(243,210,122,0.55), rgba(212,175,55,0.14))",
      boxShadow: "0 18px 45px rgba(212,175,55,0.12)",
    }}
  >
    {children}
  </div>
);

/* ─── Main Component ─── */
function WhatWeDo() {
  return (
    <section
      id="expertise"
      className="w-full relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F4F7FF 0%, #EEF4FF 100%)" }}
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.14] [background-image:linear-gradient(rgba(11,27,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(11,27,59,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div
        className="absolute -top-52 left-1/2 -translate-x-1/2 w-[900px] h-[900px] blur-3xl rounded-full pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 60%)" }}
      />
      <div
        className="absolute -bottom-56 right-[-160px] w-[780px] h-[780px] blur-3xl rounded-full pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle, rgba(11,27,59,0.12), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24">
        {/* ── Section Heading ── */}
        <div className="mx-auto max-w-3xl text-center">
          <Pill>
            <span
              className="text-[11px] font-extrabold tracking-[0.18em] uppercase"
              style={{ color: BRAND.indigo }}
            >
              OUR EXPERTISE
            </span>
          </Pill>

          <h2
            className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08]"
            style={{ color: BRAND.indigo }}
          >
            High-Impact Services to scale your brand
          </h2>

          <GradientLine />

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Accelerate your business growth with tailored services that unlock new opportunities,
            strengthen brand trust, and improve conversions across channels.
          </p>
        </div>

        {/* ── AI Highlight Wide Card (Premium gradient border) ── */}
        <div className="mt-14">
          <div className="rounded-[2.2rem] p-[1px] bg-gradient-to-r from-[#F3D27A] via-white/35 to-[#D4AF37] shadow-[0_26px_80px_-55px_rgba(11,27,59,0.45)]">
            <Link
              to="/services/ai-services"
              className="relative block rounded-[2.15rem] overflow-hidden border border-white/10
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#D4AF37]"
              style={{
                background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
              }}
              aria-label="Explore AI Services"
            >
              {/* glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-90"
                style={{
                  background:
                    "radial-gradient(circle at 16% 25%, rgba(212,175,55,0.22), transparent 50%), radial-gradient(circle at 82% 70%, rgba(255,255,255,0.08), transparent 50%)",
                }}
              />

              <div className="relative grid lg:grid-cols-2 gap-8 items-center p-6 sm:p-8 lg:p-10">
                {/* Illustration */}
                <div className="flex items-center justify-center lg:justify-start">
                  <img
                    src="https://res.cloudinary.com/dxzxvhrhy/image/upload/f_auto,q_auto,w_700/v1758024526/ai2_yrn9uc.png"
                    alt="AI Powered Marketing"
                    loading="lazy"
                    decoding="async"
                    width="700"
                    height="400"
                    className="w-full max-w-[440px] h-auto object-contain drop-shadow-[0_22px_60px_rgba(0,0,0,0.25)]"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div
                    className="inline-flex items-center rounded-full px-4 py-2 w-fit text-[11px] font-extrabold tracking-[0.18em] uppercase border"
                    style={{
                      borderColor: "rgba(212,175,55,0.35)",
                      background: "rgba(212,175,55,0.12)",
                      color: BRAND.gold2,
                    }}
                  >
                    AI · AUTOMATION · MARKETING
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    AI Powered Marketing Services
                  </h3>

                  <p className="text-white/80 leading-relaxed">
                    Maximize ROI with AI—smart targeting, automation and optimisation that helps you generate better leads,
                    reduce wasted spend, and scale campaigns with confidence.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 mt-1">
                    {[
                      "AI Chatbot",
                      "Predictive Analytics",
                      "Smart Targeting",
                      "Automated Content",
                      "Sentiment Analysis",
                      "Campaign Optimization",
                    ].map((pt) => (
                      <div key={pt} className="flex items-center gap-2">
                        <span
                          className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: "rgba(212,175,55,0.20)",
                            border: "1px solid rgba(212,175,55,0.35)",
                          }}
                        >
                          <FiCheck className="text-xs" style={{ color: BRAND.gold2 }} />
                        </span>
                        <span className="font-semibold text-white/90 text-sm">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 font-extrabold text-sm text-white">
                      <span style={{ color: BRAND.gold2 }}>Explore AI Services</span>
                      <FiArrowRight style={{ color: BRAND.gold2 }} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ── Services Grid ── */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative rounded-[1.85rem] border border-slate-200 bg-white overflow-hidden flex flex-col h-full
                         shadow-[0_12px_40px_rgba(11,27,59,0.08)]
                         hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(11,27,59,0.14)]
                         transition-all duration-300"
            >
              {/* top accent */}
              <div
                className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
              />

              {/* hover glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.10), transparent 55%), radial-gradient(circle at 90% 10%, rgba(11,27,59,0.06), transparent 55%)",
                }}
              />

              <div className="relative p-6 flex flex-col flex-grow">
                {/* icon */}
                <IconChip>
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    width="72"
                    height="72"
                    className="w-9 h-9 object-contain"
                  />
                </IconChip>

                <h3 className="mt-4 text-lg font-extrabold" style={{ color: BRAND.indigo }}>
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.desc}
                </p>

                {/* points */}
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm font-semibold text-slate-700"
                    >
                      <span
                        className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(243,210,122,0.55), rgba(212,175,55,0.18))",
                          border: "1px solid rgba(212,175,55,0.30)",
                        }}
                      >
                        <FiCheck className="text-xs" style={{ color: BRAND.indigo }} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <div className="pt-4 border-t border-slate-100 flex justify-center">
                  <Link
                    to={service.route}
                    className="inline-flex items-center justify-center gap-2 w-full rounded-full px-6 py-3 text-sm font-extrabold
                               transition-all duration-300 hover:brightness-105 hover:shadow-[0_10px_28px_rgba(212,175,55,0.30)]"
                    style={{
                      color: "#08142E",
                      background: "linear-gradient(90deg, #F3D27A, #D4AF37)",
                      boxShadow: "0 6px 18px rgba(212,175,55,0.22)",
                    }}
                    aria-label={`Enquire Now about ${service.title}`}
                  >
                    Enquire Now
                    <FiArrowRight />
                  </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;