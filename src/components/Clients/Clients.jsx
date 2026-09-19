import React from "react";
import { Helmet } from "react-helmet";

const BRAND = {
  indigo: "#0B1B3B",
  indigo2: "#08142E",
  gold: "#D4AF37",
  gold2: "#F3D27A",
};

import raghavLogo from "../Images/raghav logo.png";
import maheshventuresLogo from "../Images/maheshventures logo.png";
import classiccastleLogo from "../Images/classiccastle logo.png";
import aarogyaLogo from "../Images/aarogya logo.png";

const logos = [
  { src: raghavLogo, alt: "Raghav" },
  { src: maheshventuresLogo, alt: "Mahesh Ventures" },
  { src: classiccastleLogo, alt: "Classic Castle" },
  { src: aarogyaLogo, alt: "Aarogya" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482869/client1_eperoe.png", alt: "Client logo 1" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482870/client2_dgj1fr.png", alt: "Client logo 2" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482872/client3_jvsa0m.jpg", alt: "Client logo 3" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482873/client4_rjmawq.png", alt: "Client logo 4" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482875/client5_kujipr.svg", alt: "Client logo 6" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482877/client6_djuwum.webp", alt: "Client logo 7" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482880/client8_migh3c.jpg", alt: "Client logo 8" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482883/client9_ci5bbw.png", alt: "Client logo 9" },
  { src: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482853/client10_n1xmxs.svg", alt: "Client logo 10" },
];

function ClientsMarquee() {
  // Duplicate for infinite marquee
  const track = [...logos, ...logos];

  return (
    <div className="relative mt-12 marquee-container">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-[#F4F7FF] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-[#F4F7FF] to-transparent" />

      <div className="overflow-hidden rounded-[2rem] bg-white/60 backdrop-blur-sm border border-slate-200 shadow-sm">
        <div
          className="flex gap-8 py-8 px-6 will-change-transform marquee-track"
          style={{
            // speed control
            "--marquee-duration": "30s",
            animation: "clientMarquee var(--marquee-duration) linear infinite",
          }}
        >
          {track.map((l, i) => (
            <div
              key={i}
              className="shrink-0 w-[220px] sm:w-[250px] h-[100px]
                         rounded-2xl bg-white
                         border border-slate-100
                         shadow-[0_8px_30px_rgba(11,27,59,0.06)]
                         flex items-center justify-center px-6
                         transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={l.src}
                alt={l.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-[60px] object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes (no external CSS needed) */}
      <style>{`
        @keyframes clientMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Pause animation on hover */
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F4F7FF 0%, #EEF4FF 100%)" }}
      id="clients"
    >
      <Helmet>
        <title>Our Clients in Raipur | Trishul Media Networks</title>
        <meta
          name="description"
          content="Our clients and collaborations in Raipur. Trusted by brands across categories for outdoor, digital, print and creative."
        />
      </Helmet>

      {/* Background grid + soft glows (theme match) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.12] [background-image:linear-gradient(rgba(11,27,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(11,27,59,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div
        className="absolute -top-56 left-1/2 -translate-x-1/2 w-[900px] h-[900px] blur-3xl rounded-full pointer-events-none opacity-70"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.16), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24">
        {/* Watermark title */}
        <div className="absolute inset-x-0 top-10 text-center pointer-events-none select-none">
          <div className="text-[54px] sm:text-[76px] md:text-[96px] font-black tracking-[0.12em] uppercase text-slate-300/45">
            OUR CLIENTS
          </div>
        </div>

        {/* Foreground heading (centered and restricted width, marquee full width) */}
        <div className="max-w-3xl mx-auto text-center pt-14">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase" style={{ color: BRAND.indigo }}>
            OUR CLIENTS
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            At SP Advertising, we create impactful ads that capture attention and deliver results.
            Our expert team is dedicated to ensuring every project’s success, whether for outdoor
            advertising or digital ad campaigns.
          </p>
        </div>

        {/* Marquee */}
        <ClientsMarquee />
      </div>
    </section>
  );
}