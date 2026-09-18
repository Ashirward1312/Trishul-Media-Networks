import React from "react";
import {
  FaArrowRight,
  FaRobot,
  FaBrain,
  FaMagic,
  FaChartLine,
  FaSearch,
  FaSyncAlt,
  FaVideo,
  FaBullseye,
} from "react-icons/fa";

import Meeting from "../Images/ai services.png";
import HeroImg2 from "../Images/ai services 2.png";

const Services = () => {
  // Premium Palette
  const BRAND = {
    indigo: "#0B1B3B",
    indigo2: "#08142E",
    gold: "#D4AF37",
    gold2: "#F3D27A",
    page: "#F4F7FF",
  };

  const services = [
    {
      icon: <FaBrain />,
      title: "AI Marketing Strategy & Roadmap",
      desc: "AI-first growth plan: positioning, funnel mapping, content direction, and measurable KPIs to scale faster.",
    },
    {
      icon: <FaChartLine />,
      title: "Predictive Campaign Analytics",
      desc: "Forecast performance with AI insights, optimize budgets, and improve ROAS using data-driven decisions.",
    },
    {
      icon: <FaMagic />,
      title: "AI-Powered Creative & Copy",
      desc: "High-performing ad creatives and copy variants generated & tested faster for better conversion.",
    },
    {
      icon: <FaSearch />,
      title: "AI SEO + Content Intelligence",
      desc: "Keyword clustering, content briefs, on-page optimization, and topical authority building using AI tools.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Marketing Automation & Workflows",
      desc: "Automated lead nurturing, email sequences, CRM workflows, and retargeting logic for efficiency.",
    },
    {
      icon: <FaVideo />,
      title: "AI Video Ads & Reels Production",
      desc: "Script-to-video workflows, short-form ad creatives, and content repurposing for social growth.",
    },
    {
      icon: <FaRobot />,
      title: "AI Chatbot & Lead Qualification",
      desc: "24/7 website/WhatsApp chatbots that capture, qualify, and route leads—reducing manual follow-ups.",
    },
    {
      icon: <FaBullseye />,
      title: "Hyper-Personalization",
      desc: "Dynamic offers, audience segmentation, and personalized messaging to boost engagement and conversions.",
    },
  ];

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: BRAND.page }}>

      {/* =========================
          HERO — Split layout with image
      ========================= */}
      <section
        className="relative overflow-hidden px-6 lg:px-20 pt-32 pb-24"
        style={{
          background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
        }}
      >
        {/* Grid overlay */}
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
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.34), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-56 right-[-120px] w-[780px] h-[780px] blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Text LEFT */}
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
                AI-Powered Services — Trishul Media
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Revolutionize Your<br />
              Marketing with{" "}
              <span style={{ color: BRAND.gold2 }}>AI Power</span>
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
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold border text-white"
                style={{
                  borderColor: "rgba(255,255,255,0.22)",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Image RIGHT */}
          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
              }}
            />
            <div
              className="rounded-[2rem] overflow-hidden border shadow-2xl"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src={HeroImg2}
                alt="AI Marketing Services"
                className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO
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
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{ color: BRAND.indigo }}
            >
              AI‑Powered Branding & Marketing for the Digital Age
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed">
              We combine creative excellence with AI workflows to build faster campaigns,
              smarter decisions, and consistent brand growth—without guesswork.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Talk to an Expert <FaArrowRight />
              </a>
            </div>
          </div>

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
                src={Meeting}
                alt="AI Marketing"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES — Premium Card Grid
      ========================= */}
      <section className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center">
            <div
              className="inline-flex items-center justify-center mx-auto px-4 py-2 rounded-full border"
              style={{
                borderColor: "rgba(11,27,59,0.12)",
                background: "rgba(255,255,255,0.65)",
              }}
            >
              <span
                className="text-xs font-extrabold tracking-[0.18em] uppercase"
                style={{ color: BRAND.indigo }}
              >
                Our AI Services
              </span>
            </div>

            <h2
              className="mt-5 text-4xl md:text-5xl font-extrabold"
              style={{ color: BRAND.indigo }}
            >
              AI‑Powered Branding & Marketing
            </h2>

            <div
              className="w-16 h-1 mx-auto mt-6 rounded-full"
              style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
            />

            <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
              From strategy to automation—everything optimized for speed, clarity, and performance.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((v, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderColor: "rgba(11,27,59,0.09)",
                  background: "white",
                  boxShadow: "0 8px 30px rgba(11,27,59,0.07)",
                }}
              >
                {/* Gold top bar on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
                />

                {/* Subtle gold bg overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.05), transparent 55%)" }}
                />

                <div className="relative">
                  {/* Icon + number row */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border text-xl"
                      style={{
                        borderColor: "rgba(212,175,55,0.35)",
                        background:
                          "linear-gradient(135deg, rgba(243,210,122,0.40), rgba(212,175,55,0.18))",
                        color: BRAND.indigo,
                        boxShadow: "0 10px 28px rgba(212,175,55,0.18)",
                      }}
                    >
                      {v.icon}
                    </div>
                    <span
                      className="text-4xl font-black leading-none"
                      style={{ color: "rgba(11,27,59,0.06)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div
                    className="w-10 h-[3px] rounded-full mt-6 transition-all duration-300 group-hover:w-16"
                    style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
                  />

                  <h3
                    className="mt-4 text-lg font-extrabold leading-snug"
                    style={{ color: BRAND.indigo }}
                  >
                    {v.title}
                  </h3>

                  <p className="mt-3 text-slate-500 text-sm leading-relaxed">{v.desc}</p>

                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider"
                      style={{ color: BRAND.gold }}
                    >
                      Learn More <FaArrowRight className="text-[10px]" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
              style={{
                color: BRAND.indigo2,
                background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                boxShadow: "0 18px 45px rgba(212,175,55,0.25)",
              }}
            >
              Enquire Now <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          CTA (Dark Indigo)
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
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.30), transparent 62%)" }}
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
              Want an AI Growth Plan for your business?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              We'll audit your current marketing, identify AI opportunities, and build a clear
              step-by-step roadmap to improve results quickly.
            </p>

            <div className="mt-10">
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
            </div>

            <div className="mt-10 text-sm text-white/55 font-semibold">
              AI Strategy • AI Creatives • Automation • Analytics • Chatbots
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;