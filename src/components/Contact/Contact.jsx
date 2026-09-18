import React from "react";
import { Helmet } from "react-helmet-async";
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight } from "react-icons/fi";

/**
 * ✅ FIXED Premium Contact Page (TailwindCSS)
 * - Map form-card ke niche chipak ke “odd” nahi lagega (map separate section)
 * - Left (dark) card + Right (white) card heights balanced
 * - Clean premium theme: Indigo + Gold accents (no weird boxes)
 * - WhatsApp submit working (encodeURIComponent)
 *
 * NOTE: Contact.css remove kar do (NO CSS file required)
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
        ? "border-white/15 bg-white/[0.08] text-white"
        : "border-slate-200 bg-white/80 text-slate-900",
    ].join(" ")}
  >
    {children}
  </div>
);

const GoldLine = ({ center = false }) => (
  <div
    className={[center ? "mx-auto" : "", "mt-5 h-1 w-16 rounded-full"].join(" ")}
    style={{ background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})` }}
  />
);

const PrimaryBtn = ({ type = "button", href, children }) => {
  const cls =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-extrabold " +
    "text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37] " +
    "shadow-[0_16px_45px_rgba(212,175,55,0.22)] hover:brightness-105 transition";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return (
    <button type={type} className={cls}>
      {children}
    </button>
  );
};

const GhostBtn = ({ href, dark = false, children }) => (
  <a
    href={href}
    className={[
      "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-extrabold transition",
      dark
        ? "border border-white/20 bg-white/[0.08] text-white hover:bg-white/[0.12]"
        : "border border-slate-200 bg-white text-[#0B1B3B] hover:bg-slate-50",
    ].join(" ")}
  >
    {children}
  </a>
);

const Field = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-sm font-extrabold text-slate-700">{label}</span>
    <input
      {...props}
      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3
                 text-slate-900 font-semibold outline-none
                 focus:ring-4 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition"
    />
  </label>
);

const TextArea = ({ label, ...props }) => (
  <label className="block">
    <span className="block text-sm font-extrabold text-slate-700">{label}</span>
    <textarea
      {...props}
      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3
                 text-slate-900 font-semibold outline-none min-h-[140px]
                 focus:ring-4 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition"
    />
  </label>
);

const InfoBlockDark = ({ icon, title, value, href }) => (
  <a
    href={href}
    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4
               hover:bg-white/[0.12] transition"
  >
    <div
      className="w-11 h-11 rounded-2xl flex items-center justify-center border shrink-0"
      style={{
        borderColor: "rgba(212,175,55,0.35)",
        background: "linear-gradient(135deg, rgba(243,210,122,0.35), rgba(212,175,55,0.12))",
        color: BRAND.gold2,
      }}
    >
      {icon}
    </div>

    <div className="min-w-0">
      <p className="m-0 text-[11px] font-extrabold tracking-[0.18em] uppercase text-white/65">
        {title}
      </p>
      <p className="mt-1.5 m-0 text-base font-extrabold text-white break-words">
        {value}
      </p>
      <p className="mt-2 text-sm font-bold text-[#F3D27A]">
        Open{" "}
        <FiArrowRight className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </p>
    </div>
  </a>
);

const Contact = () => {
  const phone = "+91-8085354646";
  const phoneDigits = "918085354646";
  const email = "spadvertising@live.com";
  const address = "Mowa, Raipur, Chhattisgarh";

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://spadvertising.in/contact";

  const mapsUrl = "https://www.google.com/maps?q=Mowa%20Raipur%20Chhattisgarh";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = formData.get("name") || "";
    const emailVal = formData.get("email") || "";
    const phoneVal = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const text = `New Inquiry from Website

Name: ${name}
Email: ${emailVal}
Phone: ${phoneVal}

Message: ${message}`;

    const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    e.target.reset();
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.page }}>
      <Helmet>
        <title>Contact Us | SP Advertising</title>
        <meta
          name="description"
          content="Contact SP Advertising in Raipur via phone, email, WhatsApp, or visit our office. Send us a message to start your project."
        />
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* ========================= Header (simple + premium) ========================= */}
      <section className="relative overflow-hidden -mt-20 pt-20">
        {/* soft background */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#F4F7FF] via-[#EEF4FF] to-[#F4F7FF]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] pointer-events-none [background-image:linear-gradient(rgba(11,27,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(11,27,59,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div
          className="absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[900px] blur-3xl rounded-full -z-10 pointer-events-none opacity-70"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.16), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-20 pb-10">
          <div className="text-center max-w-3xl mx-auto">
            <Pill>
              <span
                className="text-[11px] font-extrabold tracking-[0.18em] uppercase"
                style={{ color: BRAND.indigo }}
              >
                CONTACT
              </span>
            </Pill>

            <h1
              className="mt-5 text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.08]"
              style={{ color: BRAND.indigo }}
            >
              Contact Us
            </h1>

            <GoldLine center />

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We’d love to hear from you. Reach out via phone, email, WhatsApp, or visit our office.
            </p>
          </div>

          {/* ========================= Main Grid ========================= */}
          <div className="mt-12 grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left: Dark premium info card */}
            <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-[#F3D27A]/55 via-white/15 to-[#D4AF37]/55 shadow-[0_24px_80px_-55px_rgba(11,27,59,0.45)] h-full">
              <div
                className="rounded-[1.95rem] h-full overflow-hidden border border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.indigo2} 0%, ${BRAND.indigo} 55%, ${BRAND.indigo2} 100%)`,
                }}
              >
                <div className="relative p-7 sm:p-8 h-full flex flex-col">
                  {/* dark grid */}
                  <div className="absolute inset-0 opacity-[0.14] pointer-events-none [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]" />
                  <div
                    className="absolute -top-44 right-[-160px] w-[520px] h-[520px] blur-3xl rounded-full pointer-events-none opacity-70"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(212,175,55,0.22), transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <Pill dark>
                      <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#F3D27A]">
                        GET IN TOUCH
                      </span>
                    </Pill>

                    <h2 className="mt-5 text-2xl md:text-3xl font-extrabold text-white">
                      We’re here to help
                    </h2>

                    <p className="mt-4 text-white/80 leading-relaxed">
                      Share your requirement and goals—our team will suggest the right service and next steps.
                    </p>

                    <div className="mt-6 space-y-3">
                      <InfoBlockDark icon={<FiPhone />} title="PHONE" value={phone} href={`tel:${phone}`} />
                      <InfoBlockDark icon={<FiMail />} title="EMAIL" value={email} href={`mailto:${email}`} />
                      <InfoBlockDark icon={<FiMapPin />} title="ADDRESS" value={address} href={mapsUrl} />
                    </div>
                  </div>

                  <div className="relative mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <PrimaryBtn href={`tel:${phone}`}>Call Now <FiArrowRight /></PrimaryBtn>
                    <GhostBtn
                      href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(
                        "Hello Trishul Media Networks, I want to enquire about your services."
                      )}`}
                      dark
                    >
                      WhatsApp <FiArrowRight />
                    </GhostBtn>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form only (✅ Map removed from here to fix odd layout) */}
            <div className="rounded-[2rem] p-[1px] bg-gradient-to-br from-slate-200 via-white to-slate-200 shadow-[0_18px_60px_rgba(11,27,59,0.10)] h-full">
              <div className="rounded-[1.95rem] bg-white border border-slate-200 p-7 sm:p-8 h-full">
                <Pill>
                  <span
                    className="text-[11px] font-extrabold tracking-[0.18em] uppercase"
                    style={{ color: BRAND.indigo }}
                  >
                    SEND US A MESSAGE
                  </span>
                </Pill>

                <h3
                  className="mt-5 text-2xl md:text-3xl font-extrabold"
                  style={{ color: BRAND.indigo }}
                >
                  Start your enquiry
                </h3>

                <GoldLine />

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field name="name" label="Your Name" placeholder="Enter your name" required />
                    <Field name="email" type="email" label="Your Email" placeholder="Enter your email" required />
                  </div>

                  <Field name="phone" type="tel" label="Phone Number" placeholder="Enter your phone number" required />

                  <TextArea
                    name="message"
                    label="Your Message"
                    placeholder="Tell us what you need (service, timeline, budget)"
                    rows={5}
                    required
                  />

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <PrimaryBtn type="submit">
                      Message Us <FiSend />
                    </PrimaryBtn>
                    <GhostBtn href={`mailto:${email}`}>
                      Email <FiArrowRight />
                    </GhostBtn>
                  </div>

                  <p className="m-0 text-sm text-slate-500 font-semibold">
                    Tip: Mention your city, budget and timeline for faster response.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* ========================= MAP (separate premium card) ========================= */}
          <div className="mt-8 rounded-[2rem] p-[1px] bg-gradient-to-br from-[#F3D27A]/35 via-white to-[#D4AF37]/35 shadow-[0_18px_60px_rgba(11,27,59,0.10)]">
            <div className="rounded-[1.95rem] bg-white border border-slate-200 overflow-hidden">
              <div className="p-6 sm:p-7 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="m-0 text-[11px] font-extrabold tracking-[0.18em] uppercase text-slate-500">
                    VISIT OUR OFFICE
                  </p>
                  <p className="mt-2 m-0 text-lg font-extrabold" style={{ color: BRAND.indigo }}>
                    {address}
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-extrabold"
                  style={{ color: BRAND.indigo }}
                >
                  Open in Maps <FiArrowRight />
                </a>
              </div>

              <iframe
                title="SP Advertising Location"
                src="https://www.google.com/maps?q=Mowa%20Raipur%20Chhattisgarh&output=embed"
                className="w-full h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ========================= Bottom CTA (clean) ========================= */}
          <div className="mt-8 rounded-[1.6rem] border border-slate-200 bg-white px-6 py-6 shadow-[0_14px_50px_rgba(11,27,59,0.08)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <p className="m-0 text-[11px] font-extrabold tracking-[0.18em] uppercase text-slate-500">
                  NEED HELP WITH A PROJECT?
                </p>
                <p className="mt-2 m-0 text-lg font-extrabold" style={{ color: BRAND.indigo }}>
                  Get in touch today — we’ll guide you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <PrimaryBtn
                  href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(
                    "Hello Trishul Media Networks, I want to start a project."
                  )}`}
                >
                  WhatsApp <FiArrowRight />
                </PrimaryBtn>
                <GhostBtn href={`tel:${phone}`}>Call <FiArrowRight /></GhostBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;