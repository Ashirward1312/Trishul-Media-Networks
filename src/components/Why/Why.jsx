import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  FiDollarSign,
  FiUsers,
  FiAward,
  FiZap,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";

/**
 * ✅ FIXED: Dark sections were looking “faded/white” because of negative z-index layers.
 * This version DOES NOT use -z-* at all.
 * Background is applied on the section itself + overlays use z-0 and content uses z-10.
 * Result: Hero + Final CTA will show proper dark-blue premium look.
 */

const BRAND = {
  indigo: "#0B1B3B",
  indigo2: "#08142E",
  gold: "#D4AF37",
  gold2: "#F3D27A",
  page: "#F4F7FF",
};

const Pill = ({ children, dark = false }) => (
  <div
    className={[
      "inline-flex items-center gap-2 rounded-full px-4 py-2 border backdrop-blur",
      dark
        ? "border-white/15 bg-white/10 text-white"
        : "border-slate-200 bg-white/80 text-slate-900",
    ].join(" ")}
  >
    {children}
  </div>
);

const GoldLine = ({ center = false }) => (
  <div
    className={[center ? "mx-auto" : "", "mt-6 h-1 w-16 rounded-full"].join(" ")}
    style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
  />
);

const PrimaryBtn = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-extrabold
               text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
               shadow-[0_16px_45px_rgba(212,175,55,0.22)] hover:brightness-105 transition"
  >
    {children}
  </Link>
);

const OutlineBtn = ({ to, dark = false, children }) => (
  <Link
    to={to}
    className={[
      "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-extrabold transition",
      dark
        ? "border border-white/20 bg-white/10 text-white hover:bg-white/15"
        : "border border-slate-200 bg-white text-[#0B1B3B] hover:bg-slate-50",
    ].join(" ")}
  >
    {children}
  </Link>
);

const SoftCard = ({ className = "", children }) => (
  <div
    className={[
      "group rounded-[1.8rem] border border-slate-200 bg-white transition-transform hover:-translate-y-1",
      "shadow-[0_14px_50px_rgba(11,27,59,0.08)]",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

const FeatureCard = ({ icon, title, desc, bullets }) => (
  <div
    className="group relative h-full flex flex-col rounded-[1.8rem] border border-slate-200 bg-white p-7
               shadow-[0_12px_40px_rgba(11,27,59,0.08)]
               hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(11,27,59,0.14)]
               transition-all duration-300 overflow-hidden"
  >
    <div
      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(212,175,55,0.12), transparent 55%)",
      }}
    />
    <div className="relative flex flex-col h-full flex-1">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center border"
        style={{
          borderColor: "rgba(212,175,55,0.35)",
          background:
            "linear-gradient(135deg, rgba(243,210,122,0.55), rgba(212,175,55,0.16))",
          color: BRAND.indigo,
          boxShadow: "0 18px 40px rgba(212,175,55,0.12)",
        }}
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
        {title}
      </h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>

      <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]" />

      {bullets?.length ? (
        <ul className="mt-5 space-y-2 mb-6">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm font-semibold text-slate-700"
            >
              <FiCheck className="mt-0.5 text-[#D4AF37]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-4 border-t border-slate-100/60">
        <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-extrabold transition-colors hover:text-[#0B1B3B]" style={{ color: BRAND.gold }}>
          Work With Us <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const siteUrl =
    typeof window !== "undefined" ? window.location.origin : "https://spadvertising.in";
  const pageUrl =
    typeof window !== "undefined" ? window.location.href : `${siteUrl}/why-choose-us`;

  const features = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Affordable Price",
      desc: "High-quality service delivered at a price that suits everyone—without compromising standards.",
      bullets: ["Transparent pricing", "Value-focused packages", "No unnecessary add-ons"],
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Professional Team",
      desc: "Experienced, reliable, and skilled team committed to your success from planning to execution.",
      bullets: ["Dedicated support", "Design + marketing experts", "Clear communication"],
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Experience",
      desc: "Delivering reliable results clients trust—backed by proven expertise and strong execution.",
      bullets: ["Category understanding", "Strong execution", "Consistent brand quality"],
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Fast Delivery",
      desc: "Speedy service without compromising on quality or project goals—built for deadlines.",
      bullets: ["Quick turnaround", "Priority coordination", "On-time delivery mindset"],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.page }}>
      <Helmet>
        <title>Why Choose Us </title>
        <meta
          name="description"
          content="Why choose SP Advertising: affordable price, professional team, proven experience, and fast delivery—premium execution with consistent quality."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* ========================= HERO (FIXED: dark bg visible, min-h-[100dvh]) ========================= */}
      <header
        className="relative overflow-hidden min-h-[100dvh] flex flex-col justify-center pt-[80px] -mt-20"

        style={{
          background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
        }}
      >
        {/* overlays */}
        <div
          className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2 w-[860px] h-[860px] blur-3xl rounded-full z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.26), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 py-12 md:py-16 text-center w-full flex-1 flex flex-col justify-center">
          <div>
            <Pill dark>
              <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#F3D27A]">
                WHY CHOOSE US
              </span>
            </Pill>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
            What Makes Us <span className="text-[#F3D27A]">Special?</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            We focus on clean creative, consistent execution, and measurable results—so your brand grows with trust.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <PrimaryBtn to="/contact">
              Enquire Now <FiArrowRight />
            </PrimaryBtn>
            <OutlineBtn to="/services" dark>
              View Services <FiArrowRight />
            </OutlineBtn>
          </div>

          {/* small trust row to reduce empty feel */}
          <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            {[
              { t: "Premium Output", d: "Clean and consistent." },
              { t: "On-Time Delivery", d: "Deadline focused." },
              { t: "Clear Communication", d: "Smooth coordination." },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-4 py-4 text-center"
              >
                <p className="m-0 font-extrabold text-[#F3D27A]">{x.t}</p>
                <p className="mt-1 text-sm font-semibold text-white/70">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ========================= FEATURES ========================= */}
      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <Pill>
              <span
                className="text-[11px] font-extrabold tracking-[0.18em] uppercase"
                style={{ color: BRAND.indigo }}
              >
                OUR PROMISE
              </span>
            </Pill>

            <h2
              className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08]"
              style={{ color: BRAND.indigo }}
            >
              Premium Execution. Clear Results.
            </h2>

            <GoldLine center />

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              These are the key reasons clients choose us—and stay with us.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================= PROCESS ========================= */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <Pill>
              <span
                className="text-[11px] font-extrabold tracking-[0.18em] uppercase"
                style={{ color: BRAND.indigo }}
              >
                HOW WE WORK
              </span>
            </Pill>

            <h2
              className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08]"
              style={{ color: BRAND.indigo }}
            >
              Simple Process. Professional Output.
            </h2>

            <GoldLine center />

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We keep it smooth—so you get quality work without stress.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "1) Understand",
                d: "We study your business, audience, and goals to plan the right approach.",
              },
              {
                t: "2) Create",
                d: "We design and execute creatives with a premium, consistent brand look.",
              },
              {
                t: "3) Deliver",
                d: "We deliver on time with clear outputs, revisions and next-step guidance.",
              },
            ].map((x, i) => (
              <SoftCard key={i} className="p-7 flex flex-col h-full">
                <div className="text-5xl font-black text-slate-200 transition-colors group-hover:text-[#F3D27A]/30">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 text-xl font-extrabold" style={{ color: BRAND.indigo }}>
                  {x.t}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed flex-1">{x.d}</p>
                
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="h-1 w-14 rounded-full bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]" />
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-extrabold transition-colors hover:text-[#0B1B3B]" style={{ color: BRAND.gold }}>
                    Start <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA (FIXED: dark bg visible) ========================= */}
      <section
        className="relative overflow-hidden py-20 px-6 lg:px-10"
        style={{
          background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2 w-[760px] h-[760px] blur-3xl rounded-full z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.22), transparent 60%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] backdrop-blur px-8 py-12 md:px-14 shadow-[0_28px_90px_rgba(0,0,0,0.25)]">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Ready to work with a premium team?
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              Tell us your goals—our team will suggest the right services and a clean plan for growth.
            </p>

            <div className="mt-10 flex justify-center">
              <PrimaryBtn to="/contact">
                Contact Us <FiArrowRight />
              </PrimaryBtn>
            </div>

            <div className="mt-8 text-sm text-white/55 font-semibold">
              Affordable • Professional • Experienced • Fast Delivery
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;