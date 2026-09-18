import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import HeroImg from "../Images/pb.webp";
import Img1 from "../Images/pb1.webp";
import Img2 from "../Images/pb2.webp";
import Img3 from "../Images/pb bussiness.webp";
import Img4 from "../Images/pb doctor.webp";
import Img5 from "../Images/pb realestate.webp";

import {
  FiMapPin,
  FiArrowRight,
  FiCheck,
  FiEye,
  FiShield,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiFileText,
  FiLayout,
  FiEdit3,
  FiCamera,
  FiStar,
  FiSearch,
} from "react-icons/fi";

/* ----------------------------- Small UI parts ----------------------------- */

const Pill = ({ children, dark = false }) => (
  <div
    className={[
      "inline-flex items-center gap-2 rounded-full px-4 py-2 border backdrop-blur",
      dark
        ? "border-white/15 bg-white/10 text-white"
        : "border-slate-200 bg-white/70 text-slate-900",
    ].join(" ")}
  >
    {children}
  </div>
);

const PrimaryButton = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 font-extrabold
               text-[color:var(--indigo2)]
               bg-gradient-to-r from-[color:var(--gold2)] to-[color:var(--gold)]
               shadow-[0_18px_50px_rgba(212,175,55,0.25)]
               hover:brightness-105 transition"
  >
    {children}
  </Link>
);

const SecondaryButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-full px-9 py-4 font-bold
               border border-white/20 bg-white/10 text-white backdrop-blur
               hover:bg-white/15 transition"
  >
    {children}
  </a>
);

const SectionHeading = ({ badge, title, desc }) => (
  <div className="mx-auto max-w-3xl text-center">
    {badge ? (
      <Pill>
        <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[color:var(--indigo)]">
          {badge}
        </span>
      </Pill>
    ) : null}

    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[color:var(--indigo)] leading-[1.08]">
      {title}
    </h2>

    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[color:var(--gold2)] to-[color:var(--gold)]" />

    {desc ? (
      <p className="mt-6 text-lg leading-relaxed text-slate-600">{desc}</p>
    ) : null}
  </div>
);

const SoftCard = ({ children, className = "" }) => (
  <div
    className={
      "rounded-[1.6rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(11,27,59,0.08)] " +
      className
    }
  >
    {children}
  </div>
);

/* --------------------------------- Page --------------------------------- */

const PersonalBranding = () => {
  // Premium Trishul theme (CSS variables)
  const BRAND = {
    indigo: "#0B1B3B",
    indigo2: "#08142E",
    gold: "#D4AF37",
    gold2: "#F3D27A",
    page: "#F4F7FF",
  };

  const buildCards = [
    {
      icon: <FiEye className="text-2xl" />,
      title: "Visibility",
      desc: "Stronger discovery + premium first impression.",
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Credibility",
      desc: "Trust signals that reduce hesitation and improve enquiries.",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Attraction",
      desc: "Better inbound leads, referrals, and profile conversions.",
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Leadership",
      desc: "Authority positioning people remember and recommend.",
    },
  ];

  const deliverableRows = [
    {
      icon: <FiTarget className="text-xl" />,
      title: "Positioning Blueprint",
      desc: "Niche, audience, differentiation — clear “why you”.",
    },
    {
      icon: <FiFileText className="text-xl" />,
      title: "PR‑Ready Messaging",
      desc: "Bio, intro, service copy and premium narrative.",
    },
    {
      icon: <FiLayout className="text-xl" />,
      title: "Profile Optimization",
      desc: "Instagram + LinkedIn + Google setup for trust & conversion.",
    },
    {
      icon: <FiEdit3 className="text-xl" />,
      title: "Authority Content System",
      desc: "Content pillars, topics, cadence — consistent visibility.",
    },
    {
      icon: <FiCamera className="text-xl" />,
      title: "Visual Direction",
      desc: "Templates, look & feel, shoot guidance — clean brand aesthetic.",
    },
    {
      icon: <FiStar className="text-xl" />,
      title: "Trust Assets",
      desc: "Reviews/testimonials strategy + best placement guidance.",
    },
  ];

  const personaCards = [
    {
      img: Img4,
      title: "Doctors",
      sub: "Ethical, trust‑first growth.",
      points: ["Quality appointments", "Patient trust", "Local discovery"],
    },
    {
      img: Img3,
      title: "Founders",
      sub: "Premium brand that attracts inbound.",
      points: ["Premium identity", "Better leads", "Partnerships"],
    },
    {
      img: Img5,
      title: "Real Estate",
      sub: "Local authority + faster closures.",
      points: ["Faster closures", "More referrals", "Area positioning"],
    },
  ];

  const whoCanItems = [
    {
      title: "Doctors, Clinics & Healthcare Professionals",
      desc: "Ethical messaging + premium profiles to build trust and increase appointments.",
    },
    {
      title: "Entrepreneurs & Business Owners",
      desc: "Founder authority that attracts better leads, partnerships, and premium opportunities.",
    },
    {
      title: "Consultants, Coaches & Freelancers",
      desc: "Expert positioning so people understand your value fast and choose you confidently.",
    },
    {
      title: "Real Estate Professionals",
      desc: "Local area authority with consistent content + reviews for faster closures.",
    },
    {
      title: "Corporate Professionals & Leaders",
      desc: "Leadership presence and credibility on LinkedIn + Google.",
    },
    {
      title: "Creators, Speakers & Educators",
      desc: "A trusted public identity that supports collaborations and invitations.",
    },
  ];

  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://trishulmedia.com";
  const canonicalUrl = `${siteUrl}/personal-branding`;

  const seoTitle =
    "Personal Branding in Raipur | Doctors, Entrepreneurs, Business Owners";
  const seoDesc =
    "Premium personal branding in Raipur: positioning, PR-ready messaging, profile optimization, content system and reputation-first strategy.";
  const seoKeywords =
    "personal branding Raipur, personal branding agency Raipur, PR agency Raipur, LinkedIn personal branding Raipur";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Personal Branding Service in Raipur",
    description: seoDesc,
    serviceType: "Personal Branding",
    areaServed: {
      "@type": "City",
      name: "Raipur",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Chhattisgarh",
        addressCountry: "IN",
      },
    },
    provider: {
      "@type": "Organization",
      name: "Trishul Media Network",
      url: siteUrl,
    },
  };

  return (
    <div
      className="min-h-screen bg-[color:var(--page)]"
      style={{
        "--indigo": BRAND.indigo,
        "--indigo2": BRAND.indigo2,
        "--gold": BRAND.gold,
        "--gold2": BRAND.gold2,
        "--page": BRAND.page,
      }}
    >
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      {/* ========================= HERO (Premium + Simple) ========================= */}
      <section
        className="relative overflow-hidden px-6 lg:px-20 pt-32 pb-24"
        style={{
          background: "linear-gradient(135deg, #08142E 0%, #0B1B3B 55%, #08142E 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.34), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-56 right-[-120px] w-[780px] h-[780px] blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 60%)" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <div
              className="inline-flex items-center justify-center mx-auto lg:mx-0 px-5 py-2 rounded-full border"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                color: "#F3D27A",
              }}
            >
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase">
                Personal Branding — Trishul Media
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Be Seen. Be Trusted.<br />
              <span style={{ color: "#F3D27A" }}>Be Remembered.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A clean, premium personal branding system for professionals who
              need trust first—then growth.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PrimaryButton to="/contact">
                Enquire Now <FiArrowRight />
              </PrimaryButton>
              <SecondaryButton href="#what">View Deliverables</SecondaryButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md mt-10 lg:mt-0">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.25), rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
              }}
            />
            <div
              className="rounded-[2rem] overflow-hidden border shadow-2xl p-4 sm:p-6 lg:p-8"
              style={{
                borderColor: "rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              <img
                src={HeroImg}
                alt="Premium Personal Branding Hero"
                className="w-full h-[260px] sm:h-[300px] lg:h-[360px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ========================= ABOUT ========================= */}
      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Pill>
              <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[color:var(--indigo)]">
                ABOUT
              </span>
            </Pill>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--indigo)] leading-tight">
              Your Personal Brand is Your Strongest Asset
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We align your positioning, profiles and content so people trust
              faster—and choose you confidently. You look premium, credible and
              consistent across Instagram, LinkedIn and Google.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <PrimaryButton to="/contact">
                Start Growing <FiArrowRight />
              </PrimaryButton>
            </div>
          </div>

          <SoftCard className="overflow-hidden bg-white/80">
            <img
              src={Img1}
              alt="Personal branding foundation"
              className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </SoftCard>
        </div>
      </section>

      {/* ========================= WHY IT WORKS ========================= */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SoftCard className="overflow-hidden order-2 lg:order-1">
            <img
              src={Img2}
              alt="Trust and conversion"
              className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </SoftCard>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <Pill>
              <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[color:var(--indigo)]">
                WHY IT WORKS
              </span>
            </Pill>

            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-[color:var(--indigo)] leading-tight">
              Trust = Faster Decisions
            </h2>

            <p className="mt-4 text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              When your profile and content clearly communicate value, people
              hesitate less. You get better enquiries, better referrals, and
              better opportunities.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                {
                  icon: <FiCheck />,
                  text: "Premium first impression across Instagram/LinkedIn/Google.",
                },
                {
                  icon: <FiSearch />,
                  text: "Better discovery + higher quality inbound enquiries.",
                },
                {
                  icon: <FiShield />,
                  text: "Stronger credibility signals that reduce doubt.",
                },
              ].map((x, i) => (
                <li
                  key={i}
                  className="flex gap-3 justify-center lg:justify-start items-start"
                >
                  <span className="w-10 h-10 rounded-2xl flex items-center justify-center border border-[color:var(--gold)]/30 text-[color:var(--indigo)]
                                   bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                    {x.icon}
                  </span>
                  <span className="text-slate-700 font-semibold leading-relaxed mt-1">
                    {x.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ========================= OUTCOMES ========================= */}
      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="OUTCOMES"
            title="We Help You Build"
            desc="Visibility + credibility + attraction—without looking salesy."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildCards.map((c, idx) => (
              <SoftCard
                key={idx}
                className="p-7 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(11,27,59,0.12)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-[color:var(--gold)]/30 text-[color:var(--indigo)]
                                bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                  {c.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[color:var(--indigo)]">
                  {c.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{c.desc}</p>

                <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-[color:var(--gold2)] to-[color:var(--gold)]" />
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHO IT’S FOR ========================= */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="WHO IT’S FOR"
            title="Who It’s For"
            desc="Tailored for professionals who need trust, visibility and premium positioning."
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {personaCards.map((p, idx) => (
              <article
                key={idx}
                className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white
                           shadow-[0_12px_40px_rgba(11,27,59,0.08)]
                           hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(11,27,59,0.12)]
                           transition-all duration-300"
              >
                <div className="relative h-[320px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,27,59,0.78)] via-[rgba(11,27,59,0.20)] to-transparent" />
                  <div className="absolute bottom-5 left-6">
                    <h3 className="text-2xl font-extrabold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-white/80 font-semibold">{p.sub}</p>
                  </div>
                </div>

                <div className="p-7">
                  <ul className="space-y-3">
                    {p.points.map((pt, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-slate-700 font-semibold items-center"
                      >
                        <span className="w-8 h-8 rounded-xl flex items-center justify-center border border-[color:var(--gold)]/30 text-[color:var(--indigo)]
                                         bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                          <FiCheck />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 font-extrabold text-[color:var(--indigo)]"
                  >
                    Enquire Now{" "}
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHO CAN BENEFIT ========================= */}
      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="IDEAL FOR"
            title="Who Can Benefit from Personal Branding?"
            desc="If people need to trust you before they buy, visit, consult, or refer—your personal brand is a real asset."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-6">
            <SoftCard className="p-8">
              <ul className="space-y-5">
                {whoCanItems.map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="w-10 h-10 rounded-2xl flex items-center justify-center border border-[color:var(--gold)]/30 text-[color:var(--indigo)]
                                     bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                      <FiCheck />
                    </span>
                    <div>
                      <p className="m-0 font-extrabold text-[color:var(--indigo)]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </SoftCard>

            <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-[#FFFFFF] to-[#EEF4FF] p-8 lg:p-10 shadow-[0_12px_40px_rgba(11,27,59,0.08)] self-start lg:sticky lg:top-28">
              <div className="absolute inset-0 pointer-events-none opacity-[0.7] [background-image:radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_50%)]" />
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-[color:var(--indigo)]">
                  Best results when you want:
                </h3>

                <ul className="mt-6 space-y-3 text-slate-700 font-semibold">
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />
                    Premium, trust-first positioning (not salesy).
                  </li>
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />A profile
                    that converts visitors into enquiries.
                  </li>
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />
                    Consistent authority content that builds reputation.
                  </li>
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <PrimaryButton to="/contact">
                    Enquire Now <FiArrowRight />
                  </PrimaryButton>

                  <a
                    href="#what"
                    className="inline-flex items-center justify-center rounded-full px-8 py-4 font-bold
                               border border-slate-200 bg-white/70 text-[color:var(--indigo)]
                               hover:bg-white transition"
                  >
                    View Deliverables
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= DELIVERABLES ========================= */}
      <section id="what" className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="DELIVERABLES"
            title="What You Get"
            desc="Not just posts—your brand foundation + a system for long-term authority."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverableRows.map((d, idx) => (
              <SoftCard
                key={idx}
                className="p-8 hover:-translate-y-1.5 hover:shadow-[0_22px_70px_rgba(11,27,59,0.12)] transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-[color:var(--gold)]/30 text-[color:var(--indigo)]
                                  bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                    {d.icon}
                  </div>
                  <div className="text-5xl font-black leading-none text-slate-200/70">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[color:var(--gold2)] to-[color:var(--gold)]" />

                <h3 className="mt-5 text-xl font-extrabold text-[color:var(--indigo)]">
                  {d.title}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{d.desc}</p>

                <ul className="mt-5 space-y-2 text-slate-700 font-semibold">
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />
                    Clarity + premium tone
                  </li>
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />
                    Trust signals & proof
                  </li>
                  <li className="flex gap-2 items-start">
                    <FiCheck className="mt-1 text-[color:var(--gold)]" />
                    Consistency system
                  </li>
                </ul>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative isolate overflow-hidden py-24 px-6 lg:px-10">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[color:var(--indigo2)] via-[color:var(--indigo)] to-[color:var(--indigo2)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] pointer-events-none [background-image:radial-gradient(circle_at_30%_25%,rgba(212,175,55,0.32),transparent_48%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-[2rem] border border-white/12 bg-white/7 backdrop-blur px-8 py-14 md:px-14 shadow-[0_28px_90px_rgba(0,0,0,0.25)]">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to build your authority in Raipur?
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              Share your profession and goals—we’ll suggest the right plan and
              placements for your category.
            </p>

            <div className="mt-10 flex justify-center">
              <PrimaryButton to="/contact">
                Contact Us <FiArrowRight />
              </PrimaryButton>
            </div>

            <div className="mt-10 text-sm text-white/55 font-semibold">
              Positioning • Messaging • Profiles • Content • Reputation
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalBranding;