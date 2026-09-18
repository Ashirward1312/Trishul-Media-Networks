import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiArrowRight,
  FiCheck,
  FiVideo,
  FiFilm,
  FiRadio,
  FiCamera,
  FiTarget,
  FiFileText,
  FiZap,
  FiGrid,
} from "react-icons/fi";

/**
 * ✅ Images (aap apne according import kar lena)
 * Bas inhi names ko same rakho, path change kar dena.
 */
import AVHeroImg from "../Images/audio hero.png";
import VideoPresentationImg from "../Images/audio.jpg";
import ShortFilmDocImg from "../Images/audio 2.jpg";
import RadioTvCommercialImg from "../Images/audio 3.jpg";
import PhotoVideoImg from "../Images/audio 4.jpg";

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
               text-[#08142E] bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]
               shadow-[0_18px_50px_rgba(212,175,55,0.25)]
               hover:brightness-105 transition"
  >
    {children}
  </Link>
);

const OutlineButton = ({ to, children, dark = false }) => (
  <Link
    to={to}
    className={[
      "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 font-bold transition",
      dark
        ? "border border-white/20 bg-white/10 text-white hover:bg-white/15 backdrop-blur"
        : "border border-slate-200 bg-white text-[#0B1B3B] hover:bg-slate-50",
    ].join(" ")}
  >
    {children}
  </Link>
);

const SectionHeading = ({ badge, title, desc }) => (
  <div className="mx-auto max-w-3xl text-center">
    {badge ? (
      <Pill>
        <span className="text-[11px] font-extrabold tracking-[0.18em] uppercase text-[#0B1B3B]">
          {badge}
        </span>
      </Pill>
    ) : null}

    <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1B3B] leading-[1.08]">
      {title}
    </h2>

    <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#F3D27A] to-[#D4AF37]" />

    {desc ? (
      <p className="mt-6 text-lg leading-relaxed text-slate-600">{desc}</p>
    ) : null}
  </div>
);

const SoftCard = ({ children, className = "" }) => (
  <div
    className={
      "rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_40px_rgba(11,27,59,0.08)] " +
      className
    }
  >
    {children}
  </div>
);

const ServiceImage = ({ src, alt, fit = "cover" }) => (
  <div className="rounded-[1.6rem] overflow-hidden border border-slate-200 bg-white shadow-2xl">
    <div className="bg-slate-50 p-4 sm:p-5">
      <img
        src={src}
        alt={alt}
        className={[
          "w-full rounded-[1.25rem]",
          "h-[280px] sm:h-[340px] lg:h-[420px]",
          fit === "contain" ? "object-contain" : "object-cover",
        ].join(" ")}
        loading="lazy"
        decoding="async"
      />
    </div>
  </div>
);

const MiniFeature = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-4 py-4 text-center">
    <div className="mx-auto w-10 h-10 rounded-2xl flex items-center justify-center border border-white/15 bg-white/10 text-[#F3D27A]">
      {icon}
    </div>
    <p className="mt-3 m-0 font-extrabold text-white">{title}</p>
    <p className="mt-1 text-sm font-semibold text-white/70">{desc}</p>
  </div>
);

/* --------------------------------- Page --------------------------------- */

const AudioVisuals = () => {
  const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://trishulmedia.com";
  const canonicalUrl = `${siteUrl}/audio-visuals`;

  const seoTitle =
    "Audio Visuals | Video Presentations, Short Films, Commercials, Photography";
  const seoDesc =
    "Premium audio-visual services: video presentations, short films/documentaries, radio & TV commercials, photography & videography—crafted for clarity, storytelling and brand impact.";
  const seoKeywords =
    "audio visuals, video production, video presentations, short films, documentary, tv commercials, radio commercials, photography videography";

  const services = [
    {
      id: "video-presentations",
      icon: <FiVideo className="text-2xl" />,
      title: "Video Presentations",
      desc:
        "Video presentations are a powerful medium for delivering information—combining visuals, animations, audio, and text to engage audiences. " +
        "Perfect for education, marketing, business meetings, product demos, and tutorials where clarity matters.",
      bullets: [
        "Script + structure for clear flow",
        "Professional visuals, icons & motion style",
        "Voiceover/music + clean subtitles",
        "Export in multiple formats (Reels/YouTube/Screen)",
      ],
      imageSrc: VideoPresentationImg,
      fit: "cover",
    },
    {
      id: "short-films-documentary",
      icon: <FiFilm className="text-2xl" />,
      title: "Short Films / Documentary",
      desc:
        "Short films and documentaries are concise storytelling formats—fictional or real-life—designed to entertain, inform or inspire. " +
        "We focus on narrative, emotion and cinematic framing so the message feels authentic and memorable.",
      bullets: [
        "Storyboarding + shot planning",
        "On-ground filming + direction support",
        "Cinematic edit + sound design",
        "Trailer + short cutdowns for social",
      ],
      imageSrc: ShortFilmDocImg,
      fit: "cover",
    },
    {
      id: "radio-tv-commercials",
      icon: <FiRadio className="text-2xl" />,
      title: "Radio & TV Commercials",
      desc:
        "Radio and TV commercials are audio-visual ads designed to promote products, services, or brands. " +
        "We craft strong hooks, clean messaging and high recall—so your brand stays in mind even after the ad ends.",
      bullets: [
        "Ad script + concept options",
        "Voiceover + music/SFX (radio-ready)",
        "TV edit with branding + CTA clarity",
        "Multiple durations (10s/15s/30s/60s)",
      ],
      imageSrc: RadioTvCommercialImg,
      fit: "cover",
    },
    {
      id: "photography-videography",
      icon: <FiCamera className="text-2xl" />,
      title: "Photography & Videography",
      desc:
        "Photography and videography capture moments, products and experiences—used for storytelling, documentation, and marketing. " +
        "We create clean, premium visuals that match your brand and look great across websites, ads, and social media.",
      bullets: [
        "Brand/product shoots + lifestyle frames",
        "Event coverage + highlight videos",
        "Color grading + retouching",
        "Content batches for consistent posting",
      ],
      imageSrc: PhotoVideoImg,
      fit: "cover",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FF]">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ========================= HERO ========================= */}
      <section
        className="relative overflow-hidden px-6 lg:px-20 pt-32 pb-24"
        style={{
          background: "linear-gradient(135deg, #08142E 0%, #0B1B3B 55%, #08142E 100%)",
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
        {/* Gold glow top */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] blur-3xl rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.34), transparent 60%)" }}
        />
        {/* Soft white glow bottom-right */}
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
                color: "#F3D27A",
              }}
            >
              <span className="text-xs font-extrabold tracking-[0.18em] uppercase">
                Audio Visuals — Trishul Media
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
              Audio Visuals<br />
              <span style={{ color: "#F3D27A" }}>that people remember</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Audiovisuals combine sound and imagery to convey information and
              enhance communication. We help you tell your story with clarity,
              emotion, and premium production quality.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PrimaryButton to="/contact">
                Enquire Now <FiArrowRight />
              </PrimaryButton>
              <OutlineButton to="/contact" dark>
                Get Quote <FiArrowRight />
              </OutlineButton>
            </div>
          </div>

          {/* Image RIGHT */}
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
                src={AVHeroImg}
                alt="Audio Visuals Hero"
                className="w-full h-[320px] sm:h-[380px] lg:h-[440px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ========================= WHY AUDIOVISUAL ========================= */}
      <section className="py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="WHY IT WORKS"
            title="Audiovisual Content Builds Trust Faster"
            desc="People buy from brands they understand. Great audiovisuals simplify your message and make it feel credible."
          />

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                t: "Clear Messaging",
                d: "Script + visuals + sound = complex ideas become simple.",
              },
              {
                t: "Stronger Brand Recall",
                d: "Music, voice and visuals together improve memory & recall.",
              },
              {
                t: "Higher Engagement",
                d: "Better watch time, more shares, and stronger conversions.",
              },
            ].map((x, i) => (
              <SoftCard key={i} className="p-7">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#D4AF37]/30 text-[#0B1B3B]
                                bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                  <FiCheck className="text-xl" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#0B1B3B]">
                  {x.t}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{x.d}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= SERVICES ========================= */}
      <section className="py-20 px-6 lg:px-10 bg-white">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="SERVICES"
            title="What We Create"
            desc="From brand videos to documentaries—premium visuals with clean sound, strong pacing and clear CTAs."
          />

          <div className="mt-14 space-y-10">
            {services.map((s, idx) => {
              const reverse = idx % 2 === 1;
              return (
                <SoftCard key={s.id} className="p-6 sm:p-8" id={s.id}>
                  <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Text */}
                    <div className={reverse ? "lg:order-2" : "lg:order-1"}>
                      <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-3">
                          <span className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#D4AF37]/30 text-[#0B1B3B]
                                           bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                            {s.icon}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-extrabold text-[#0B1B3B]">
                            {s.title}
                          </h3>
                        </div>

                        <p className="mt-5 text-slate-600 leading-relaxed text-lg">
                          {s.desc}
                        </p>

                        <ul className="mt-6 space-y-3">
                          {s.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="flex gap-3 items-start justify-center lg:justify-start"
                            >
                              <span className="mt-1 w-8 h-8 rounded-xl flex items-center justify-center border border-[#D4AF37]/30 text-[#0B1B3B]
                                               bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                                <FiCheck />
                              </span>
                              <span className="text-slate-700 font-semibold">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                          <PrimaryButton to="/contact">
                            Enquire Now <FiArrowRight />
                          </PrimaryButton>
                          <OutlineButton to="/contact">
                            Talk to Team <FiArrowRight />
                          </OutlineButton>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={reverse ? "lg:order-1" : "lg:order-2"}>
                      <ServiceImage src={s.imageSrc} alt={s.title} fit={s.fit} />
                    </div>
                  </div>
                </SoftCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= PROCESS ========================= */}
      <section className="py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            badge="PROCESS"
            title="A Clean, Professional Workflow"
            desc="Fast coordination, clear approvals, and smooth delivery—so production stays stress-free."
          />

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { t: "Brief", d: "Goals, audience, references, and timeline." },
              { t: "Pre‑Production", d: "Script, storyboard, shoot plan & setup." },
              { t: "Production", d: "Shoot day + direction + asset collection." },
              { t: "Post & Delivery", d: "Edit, sound, revisions, final exports." },
            ].map((x, i) => (
              <SoftCard key={i} className="p-7">
                <div className="flex items-start justify-between">
                  <span className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#D4AF37]/30 text-[#0B1B3B]
                                   bg-[linear-gradient(135deg,rgba(243,210,122,0.55),rgba(212,175,55,0.18))]">
                    <FiCheck className="text-xl" />
                  </span>
                  <span className="text-4xl font-black text-slate-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#0B1B3B]">
                  {x.t}
                </h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{x.d}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative isolate overflow-hidden py-24 px-6 lg:px-10">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#08142E] via-[#0B1B3B] to-[#08142E]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] pointer-events-none [background-image:radial-gradient(circle_at_25%_25%,rgba(212,175,55,0.30),transparent_50%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.10),transparent_50%)]" />

        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] backdrop-blur px-8 py-14 md:px-14 shadow-[0_28px_90px_rgba(0,0,0,0.25)]">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to create premium audio-visuals?
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80">
              Share your requirement (type of video, duration, platform and
              timeline). We’ll suggest the best format and production plan.
            </p>

            <div className="mt-10 flex justify-center">
              <PrimaryButton to="/contact">
                Contact Us <FiArrowRight />
              </PrimaryButton>
            </div>

            <div className="mt-10 text-sm text-white/55 font-semibold">
              Strategy • Story • Production • Editing • Distribution
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudioVisuals;