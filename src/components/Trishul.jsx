import { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";

const PARTICLES = [
  { top: "10%", left: "15%", size: 5, className: "particle-a", delay: "0s" },
  { top: "20%", left: "85%", size: 3, className: "particle-b", delay: "1.2s" },
  { top: "70%", left: "8%", size: 4, className: "particle-b", delay: "0.6s" },
  { top: "80%", left: "90%", size: 6, className: "particle-a", delay: "2s" },
  { top: "45%", left: "96%", size: 3, className: "particle-a", delay: "0.4s" },
  { top: "5%", left: "50%", size: 3, className: "particle-b", delay: "1.6s" },
  { top: "55%", left: "3%", size: 2, className: "particle-a", delay: "3.1s" },
  { top: "88%", left: "55%", size: 4, className: "particle-b", delay: "1.8s" },
];

/**
 * Services to show around the Trishul orbit circle (all directions)
 */
const ORBIT_SERVICES = [
  { label: "Outdoor Advertising", angle: -90, delay: "2.1s" },   // top
  { label: "Digital Marketing", angle: -18, delay: "2.35s" },    // top-right
  { label: "SEO Optimization", angle: 54, delay: "2.6s" },       // bottom-right
  { label: "AI-Powered Service", angle: 126, delay: "2.85s" },   // bottom-left
  { label: "Branding & Strategy", angle: 198, delay: "3.1s" },   // left
];

function Model({ url, reduceMotion }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current && !reduceMotion) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={8.2}          // ✅ trishul slightly bigger
      position={[0, -12, 0]}
    />
  );
}

useGLTF.preload("/trident.glb");

export default function Trishul() {
  const wrapperRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visible, setVisible] = useState(false);

  /* Respect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  /* Delayed reveal */
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full flex items-center justify-center select-none"
      role="img"
      aria-label="3D Animated golden trishul"
    >
      {/* ── Deep ambient glow for Dark Theme ── */}
      <div
        className="absolute rounded-full glow-pulse"
        style={{
          width: "90%",
          height: "90%",
          background:
            "radial-gradient(circle, rgba(14,27,56,0.6) 0%, rgba(14,27,56,0.1) 55%, transparent 75%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* ── Gold core glow (behind Trishul) ── */}
      <div
        className="absolute rounded-full trishul-glow"
        style={{
          width: "48%",
          height: "65%",
          background:
            "radial-gradient(circle, rgba(200,155,60,0.3) 0%, rgba(200,155,60,0.05) 55%, transparent 78%)",
          filter: "blur(25px)",
        }}
        aria-hidden="true"
      />

      {/* ── Floating sparkle particles ── */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`absolute rounded-full ${p.className}`}
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background:
              "radial-gradient(circle, rgba(248,220,130,0.96) 0%, rgba(200,155,60,0.4) 70%)",
            animationDelay: p.delay,
            boxShadow: "0 0 10px 2px rgba(200,155,60,0.6)",
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Decorative orbit rings for dark theme ── */}
      <div
        className="absolute rounded-full orbit-ring"
        style={{
          width: "clamp(280px, 34vw, 500px)",
          height: "clamp(280px, 34vw, 500px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 0 0 1px rgba(255,255,255,0.02) inset",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute rounded-full orbit-ring-2"
        style={{
          width: "clamp(210px, 26vw, 390px)",
          height: "clamp(210px, 26vw, 390px)",
          border: "1px solid rgba(200,155,60,0.15)",
        }}
        aria-hidden="true"
      />

      {/* ── Services around the circle (Glassmorphic for Dark theme) ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        style={{
          // orbit radius for translate (responsive)
          "--orbitRadius": "clamp(125px, 15vw, 210px)",
        }}
        aria-hidden="true"
      >
        {ORBIT_SERVICES.map((s) => (
          <div
            key={s.label}
            className="absolute"
            style={{
              transform: `rotate(${s.angle}deg) translateY(calc(-1 * var(--orbitRadius))) rotate(${-s.angle}deg)`,
              animationDelay: s.delay,
            }}
          >
            <span
              className="concept-label font-sans text-[10px] sm:text-[11px] tracking-[0.2em] font-bold text-white flex items-center gap-2"
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)", 
                backgroundColor: "rgba(14,27,56,0.6)",
                boxShadow: "0 8px 32px 0 rgba(0,0,0,0.4)",
                backdropFilter: "blur(12px)",
                textTransform: "uppercase",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              <span 
                style={{ 
                  display: "inline-block", 
                  width: "4px", 
                  height: "4px", 
                  borderRadius: "50%", 
                  backgroundColor: "#C89B3C",
                  boxShadow: "0 0 8px 1px rgba(200,155,60,0.8)"
                }} 
              />
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* ── 3D Canvas ── */}
      <div
        className="relative w-full h-full z-10"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1.5s ease-out",
        }}
      >
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={2.5} color="#fff1d0" />
          <directionalLight position={[-10, 5, 5]} intensity={1.5} color="#c89b3c" />
          <Suspense fallback={null}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 4, Math.PI / 4]}
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <Float
                speed={reduceMotion ? 0 : 2.5}
                rotationIntensity={reduceMotion ? 0 : 0.6}
                floatIntensity={reduceMotion ? 0 : 0.8}
              >
                <Model url="/trident.glb" reduceMotion={reduceMotion} />
              </Float>
            </PresentationControls>
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}