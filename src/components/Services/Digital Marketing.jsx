import React from "react";
import {
  FaArrowRight,
  FaComments,
  FaLaptopCode,
  FaSearch,
  FaBullhorn,
  FaAd,
  FaPenNib,
  FaMobileAlt,
} from "react-icons/fa";

import HeroImg from "../Images/digital marketing hero.png";
import DigitalImg1 from "../Images/digital marketing 1.jpg";

const DigitalMarketing = () => {
  // Trishul Theme (Gold + Indigo) — premium
  const BRAND = {
    indigo: "#0B1B3B",
    indigo2: "#08142E",
    gold: "#D4AF37",
    gold2: "#F3D27A",
    page: "#F4F7FF",
  };

  // change this to your WhatsApp
  const WHATSAPP_LINK =
    "https://wa.me/919999999999?text=Hi%20Trishul%20Media,%20I%20want%20Digital%20Marketing%20details";

  const cards = [
    {
      icon: <FaLaptopCode className="text-xl" />,
      title: "Web Development",
      desc: "Secure, scalable, user-friendly websites with premium UI and performance focus.",
    },
    {
      icon: <FaSearch className="text-xl" />,
      title: "SEO & SEM",
      desc: "Rank better, drive quality traffic, and improve visibility with smart search strategies.",
    },
    {
      icon: <FaBullhorn className="text-xl" />,
      title: "Social Media Marketing",
      desc: "Content + campaigns that increase brand awareness and engagement across platforms.",
    },
    {
      icon: <FaAd className="text-xl" />,
      title: "Paid Advertising",
      desc: "Meta/Google ads built for leads & sales with testing, tracking, and optimization.",
    },
    {
      icon: <FaPenNib className="text-xl" />,
      title: "Content Marketing",
      desc: "High-quality content that builds trust, improves SEO, and supports conversions.",
    },
    {
      icon: <FaMobileAlt className="text-xl" />,
      title: "Mobile Applications",
      desc: "Android & iOS apps from concept to launch—fast, clean, and user-focused.",
    },
  ];

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: BRAND.page }}>
      {/* =========================
          HERO (Image: digital marketing hero.png)
      ========================= */}
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
                Digital Marketing — Trishul Media
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Digital Growth<br />
              <span style={{ color: "#F3D27A" }}>That Converts</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help businesses build a strong online presence, drive traffic, and generate
              quality leads through a clear, data-driven marketing approach.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 font-extrabold text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37] shadow-[0_18px_50px_rgba(212,175,55,0.25)] hover:brightness-105 transition"
              >
                Enquire Now <FaArrowRight />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-bold transition border border-white/20 bg-white/10 text-white hover:bg-white/15 backdrop-blur"
              >
                Get Quote <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg mt-10 lg:mt-0">
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
                src={HeroImg}
                alt="Digital Marketing Hero"
                className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          INTRO (Image: digital marketing 1.jpg)
      ========================= */}
      <section
        className="relative py-20 px-6 lg:px-20 overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F4F7FF 0%, #EEF4FF 100%)" }}
      >
        <div
          className="absolute -top-32 left-10 w-[520px] h-[520px] blur-3xl rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.16), transparent 62%)",
          }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Text LEFT */}
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl md:text-4xl font-extrabold leading-tight"
              style={{ color: BRAND.indigo }}
            >
              Digital Marketing Services to Accelerate Your Online Growth
            </h2>

            <p className="mt-5 text-slate-700 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We help businesses build a strong online presence, drive traffic, and generate
              quality leads through a clear, data-driven marketing approach.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                style={{
                  color: BRAND.indigo2,
                  background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                  boxShadow: "0 18px 45px rgba(212,175,55,0.22)",
                }}
              >
                Enquire Now <FaArrowRight />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold border"
                style={{
                  color: BRAND.indigo,
                  borderColor: "rgba(11,27,59,0.16)",
                  background: "rgba(255,255,255,0.78)",
                }}
              >
                Chat with Us <FaComments />
              </a>
            </div>
          </div>

          {/* Image RIGHT */}
          <div className="relative mx-auto w-full max-w-2xl">
            <div
              className="absolute -inset-4 rounded-[2.2rem] blur-xl -z-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,175,55,0.22), rgba(255,255,255,0.70), rgba(11,27,59,0.10))",
              }}
            />
            <div className="rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl bg-white/70">
              <img
                src={DigitalImg1}
                alt="Digital Marketing"
                className="w-full h-[320px] sm:h-[380px] lg:h-[460px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CARDS (SEO, SMM, Web, etc.)
      ========================= */}
      <section className="relative py-20 px-6 lg:px-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(238,244,255,1) 0%, rgba(244,247,255,1) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div
              className="inline-flex items-center justify-center mx-auto px-4 py-2 rounded-full border"
              style={{
                borderColor: "rgba(11,27,59,0.12)",
                background: "rgba(255,255,255,0.70)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                className="text-xs font-extrabold tracking-[0.18em] uppercase"
                style={{ color: BRAND.indigo }}
              >
                Our Services
              </span>
            </div>

            <h2
              className="mt-5 text-4xl md:text-5xl font-extrabold"
              style={{ color: BRAND.indigo }}
            >
              What We Do
            </h2>

            <div
              className="w-16 h-1 mx-auto mt-6 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
              }}
            />
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[1.75rem] border p-8 transition-all duration-300 hover:-translate-y-2"
                style={{
                  borderColor: "rgba(11,27,59,0.10)",
                  background: "white",
                  boxShadow: "0 8px 30px rgba(11,27,59,0.07)",
                }}
              >
                {/* gold top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[1.75rem]"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                    opacity: 0,
                    transition: "opacity 0.3s",
                  }}
                />

                {/* hover shadow upgrade */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 28px 70px rgba(11,27,59,0.13)",
                    borderRadius: "1.75rem",
                  }}
                />

                <div className="relative">
                  {/* Number badge + Icon row */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border text-2xl"
                      style={{
                        borderColor: "rgba(212,175,55,0.35)",
                        background:
                          "linear-gradient(135deg, rgba(243,210,122,0.40), rgba(212,175,55,0.16))",
                        color: BRAND.indigo,
                        boxShadow: "0 10px 28px rgba(212,175,55,0.18)",
                      }}
                    >
                      {c.icon}
                    </div>
                    <span
                      className="text-5xl font-black leading-none"
                      style={{ color: "rgba(11,27,59,0.06)" }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gold divider */}
                  <div
                    className="w-10 h-[3px] rounded-full mt-6"
                    style={{
                      background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                    }}
                  />

                  <h3
                    className="mt-4 text-xl font-extrabold"
                    style={{ color: BRAND.indigo }}
                  >
                    {c.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">{c.desc}</p>

                  <div className="mt-7">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-extrabold"
                      style={{ color: BRAND.gold }}
                    >
                      Learn More <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA (Premium)
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
            background:
              "radial-gradient(circle, rgba(212,175,55,0.30), transparent 62%)",
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
              Need help with Digital Marketing?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              Share your goal and we’ll suggest the best plan for your business.
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
                Enquire Now <FaArrowRight />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;