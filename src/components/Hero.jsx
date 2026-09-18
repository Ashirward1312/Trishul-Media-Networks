import Trishul from "./Trishul.jsx";

const BG_PARTICLES = [
  { top: "12%", left: "6%", size: 2.5, delay: "0s" },
  { top: "24%", left: "32%", size: 2, delay: "1.4s" },
  { top: "60%", left: "18%", size: 3, delay: "0.8s" },
  { top: "80%", left: "44%", size: 2, delay: "2.1s" },
  { top: "36%", left: "58%", size: 2, delay: "0.4s" },
  { top: "8%", left: "72%", size: 3, delay: "1.8s" },
  { top: "70%", left: "88%", size: 2.5, delay: "2.6s" },
  { top: "48%", left: "78%", size: 2, delay: "3.2s" },
];

/* Thin horizontal rule with gold center glow */
function GoldRule() {
  return (
    <div
      className="enter-rise my-6 flex items-center gap-3 lg:justify-start justify-center"
      style={{ animationDelay: "0.5s" }}
    >
      <div
        style={{
          height: 1,
          flex: 1,
          maxWidth: 44,
          background:
            "linear-gradient(90deg, transparent, rgba(200,155,60,0.6))",
        }}
      />
      <div
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#C89B3C",
          boxShadow: "0 0 10px 2px rgba(200,155,60,0.5)",
        }}
      />
      <div
        style={{
          height: 1,
          flex: 1,
          maxWidth: 44,
          background:
            "linear-gradient(90deg, rgba(200,155,60,0.6), transparent)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-label="Trishul Media Networks introduction"
      className="relative min-h-[100svh] w-full overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at top, #142850 0%, #0E1B38 45%, #050a14 100%)", // Premium Dark Navy Gradient
      }}
    >
      {/* ── Background: subtle ambient washes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top-right subtle glow */}
        <div
          className="absolute"
          style={{
            top: "-20%",
            right: "-10%",
            width: "65%",
            height: "65%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,155,60,0.08) 0%, transparent 60%)",
            filter: "blur(50px)",
          }}
        />
        {/* Bottom-left subtle glow */}
        <div
          className="absolute"
          style={{
            bottom: "-10%",
            left: "-5%",
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 60%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle grid overlay for dark theme */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
          style={{ opacity: 0.04 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 100}
              y1="0"
              x2={i * 100}
              y2="800"
              stroke="#ffffff"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 9 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 100}
              x2="1200"
              y2={i * 100}
              stroke="#ffffff"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Floating background stars/particles (gold for dark theme) */}
        {BG_PARTICLES.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full particle-a"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: "rgba(200,155,60,0.45)",
              animationDelay: p.delay,
              animationDuration: "9s",
            }}
          />
        ))}
      </div>

      {/* ── Main content container ── */}
      <div className="relative max-w-content mx-auto px-6 sm:px-10 lg:px-14 min-h-[100svh] flex items-center pt-32 pb-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-14 lg:gap-6 w-full">
          {/* ── Left column: text content ── */}
          <div className="text-center lg:text-left order-2 lg:order-1 z-10">
           
            {/* Brand Badge */}
            <div
              className="enter-rise inline-block"
              style={{ animationDelay: "0.18s" }}
            >
              <span
                className="font-bold text-navy-900"
                style={{
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontSize: "0.75rem",
                  padding: "6px 14px",
                  borderRadius: "2px",
                  backgroundColor: "#C89B3C", // Gold background on dark theme
                  boxShadow: "0 4px 14px rgba(200,155,60,0.3)"
                }}
              >
                Trishul Media Networks
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="enter-rise font-display font-bold text-white leading-[1.05] mt-6 tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                animationDelay: "0.25s",
              }}
            >
              Building Brands<br/>
              with <span className="text-gold-500" style={{ textShadow: "0 0 30px rgba(200,155,60,0.4)" }}>Media</span> that<br/>
              Moves
            </h1>

            <GoldRule />

            {/* Sub-copy */}
            <p
              className="enter-rise max-w-[54ch] mx-auto lg:mx-0 leading-[1.7] text-gray-300 font-medium"
              style={{
                animationDelay: "0.62s",
                fontSize: "1.05rem",
                marginTop: "1.5rem"
              }}
            >
              Welcome to{" "}
              <strong className="text-white font-bold tracking-wide">TRISHUL MEDIA NETWORKS</strong>{" "}
              — your full-service advertising & media partner. From powerful
              outdoor visibility to performance-driven digital campaigns, we
              craft strategy, creativity, and execution that helps your brand
              grow consistently.
            </p>

            {/* CTA buttons */}
            <div
              className="enter-rise mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
              style={{ animationDelay: "0.85s" }}
            >
              {/* Primary CTA (Gold) */}
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-md font-extrabold text-xs tracking-widest transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-offset-4 uppercase"
                style={{
                  padding: "16px 38px",
                  backgroundColor: "#C89B3C", // Gold Button
                  color: "#0E1B38", // Navy Text
                  boxShadow: "0 8px 24px -6px rgba(200,155,60,0.6)",
                  minWidth: "180px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 14px 32px -8px rgba(200,155,60,0.8)";
                  e.currentTarget.style.backgroundColor = "#dcb158";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px -6px rgba(200,155,60,0.6)";
                  e.currentTarget.style.backgroundColor = "#C89B3C";
                }}
              >
                <span className="relative z-10">Get Services</span>
                <svg
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* ── Right column: Trishul visual ── */}
          <div
            className="enter-fade order-1 lg:order-2 w-full flex items-center justify-center relative"
            style={{
              height: "clamp(380px, 50vw, 700px)",
              animationDelay: "0.3s",
              animationDuration: "1.2s",
            }}
          >
            <Trishul />
          </div>
        </div>
      </div>
    </section>
  );
}