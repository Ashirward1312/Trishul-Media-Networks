import React from "react";
import {
    FaRocket,
    FaHandshake,
    FaChartLine,
    FaUsers,
    FaGlobeAmericas,
    FaShieldAlt,
    FaArrowRight,
} from "react-icons/fa";
import Meeting from "../Images/Meeting.png";

const About = () => {
    // Brand palette (Gold + Indigo/Navy)
    const BRAND = {
        navy: "#0B1B3B", // dark indigo/navy
        navy2: "#08142E",
        gold: "#D4AF37",
        gold2: "#F3D27A",
        page: "#F7F8FB",
    };

    const values = [
        {
            icon: <FaRocket className="text-2xl" />,
            title: "Execution",
            description:
                "We focus on delivering results with precision, ensuring timely, high-quality execution that meets client needs and expectations.",
        },
        {
            icon: <FaShieldAlt className="text-2xl" />,
            title: "Accountability",
            description:
                "We embrace responsibility for our actions, maintaining transparency and trust, and ensuring high ethical standards in all our endeavors.",
        },
        {
            icon: <FaChartLine className="text-2xl" />,
            title: "Growth",
            description:
                "We value continuous learning, fostering innovation and development to help individuals and the organization reach their full potential.",
        },
        {
            icon: <FaUsers className="text-2xl" />,
            title: "Teamwork",
            description:
                "We prioritize collaboration, leveraging diverse strengths and perspectives to achieve common goals and foster a supportive work environment.",
        },
    ];

    return (
        <div
            className="w-full min-h-screen text-slate-800"
            style={{ backgroundColor: BRAND.page }}
        >
            {/* =========================
    HERO (Full screen feel)
========================= */}
            <section className="relative bg-white overflow-hidden px-6 lg:px-20 pt-32 pb-24 min-h-[calc(100vh-80px)] flex items-center">
                {/* Premium glows */}
                <div className="absolute inset-0 -z-10">
                    <div
                        className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 blur-3xl rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(212,175,55,0.30), transparent 60%)",
                        }}
                    />
                    <div
                        className="absolute top-10 right-0 h-[620px] w-[620px] blur-3xl rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(11,27,59,0.14), transparent 60%)",
                        }}
                    />
                    <div
                        className="absolute -bottom-56 left-0 h-[520px] w-[520px] blur-3xl rounded-full"
                        style={{
                            background:
                                "radial-gradient(circle, rgba(212,175,55,0.22), transparent 60%)",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text */}
                    <div className="text-center lg:text-left space-y-7">
                        <div
                            className="inline-flex items-center justify-center mx-auto lg:mx-0 px-5 py-2 rounded-full border"
                            style={{ borderColor: "rgba(11,27,59,0.12)", background: "#fff" }}
                        >
                            <span
                                className="text-xs font-extrabold tracking-[0.18em] uppercase"
                                style={{ color: BRAND.gold }}
                            >
                                About Trishul Media
                            </span>
                        </div>

                        <h1
                            className="text-5xl md:text-7xl font-extrabold leading-[1.05]"
                            style={{ color: BRAND.navy }}
                        >
                            We&apos;re your{" "}
                            <span className="relative inline-block">
                                <span style={{ color: BRAND.gold }}>Partners</span>
                                <span
                                    className="absolute left-0 right-0 -bottom-2 h-3 rounded-full -z-10"
                                    style={{ background: "rgba(212,175,55,0.25)" }}
                                />
                            </span>{" "}
                            in growth.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            <span style={{ color: BRAND.gold, fontWeight: 800 }}>
                                Trishul Media Network
                            </span>{" "}
                            is not just a marketing agency. We believe in transforming your vision into
                            reality through strategic planning and creative excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full font-extrabold"
                                style={{
                                    color: BRAND.navy,
                                    background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                                    boxShadow: "0 22px 55px rgba(212,175,55,0.28)",
                                }}
                            >
                                Contact Us <FaArrowRight />
                            </a>

                            <a
                                href="/portfolio"
                                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition"
                            >
                                View Work
                            </a>
                        </div>
                    </div>

                    {/* Image (bigger + premium) */}
                    <div className="relative mx-auto w-full max-w-2xl">
                        <div
                            className="absolute -inset-4 rounded-[2.6rem] blur-xl -z-10"
                            style={{
                                background: `linear-gradient(135deg, rgba(212,175,55,0.28), rgba(255,255,255,0.65), rgba(11,27,59,0.12))`,
                            }}
                        />
                        <div className="rounded-[2.3rem] overflow-hidden bg-white border border-slate-200 shadow-2xl">
                            <img
                                src={Meeting}
                                alt="Team Meeting"
                                loading="lazy"
                                className="w-full object-cover object-center h-[340px] sm:h-[420px] lg:h-[560px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          GLOBAL IMPACT + PROMISE
      ========================= */}
            <section className="py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
                    {/* Global Impact */}
                    <div
                        className="p-[1px] rounded-[2rem]"
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(11,27,59,0.14), rgba(255,255,255,0.9), rgba(212,175,55,0.22))",
                            boxShadow: "0 20px 55px rgba(11,27,59,0.06)",
                        }}
                    >
                        <div className="relative rounded-[2rem] bg-white h-full overflow-hidden">
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(135deg, rgba(212,175,55,0.12), transparent 55%)",
                                }}
                            />
                            <div className="relative p-10 md:p-12 text-center">
                                <div
                                    className="w-16 h-16 mx-auto rounded-2xl border flex items-center justify-center"
                                    style={{
                                        borderColor: "rgba(11,27,59,0.12)",
                                        background: "rgba(11,27,59,0.04)",
                                    }}
                                >
                                    <FaGlobeAmericas className="text-3xl" style={{ color: BRAND.navy }} />
                                </div>

                                <h2
                                    className="mt-6 text-3xl md:text-4xl font-extrabold"
                                    style={{ color: BRAND.navy }}
                                >
                                    Global Impact
                                </h2>

                                <div
                                    className="w-16 h-1 mx-auto mt-5 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                                    }}
                                />

                                <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                                    We are dedicated to empowering our clients to make a global impact
                                    by providing innovative strategies and tailored solutions. Our
                                    goal is to help them expand their reach, build meaningful
                                    connections, and achieve success across diverse markets, fostering
                                    growth and establishing a strong presence on the international
                                    stage.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Promise (Dark Indigo) */}
                    <div
                        className="rounded-[2rem] overflow-hidden border"
                        style={{
                            borderColor: "rgba(255,255,255,0.10)",
                            background: `linear-gradient(135deg, ${BRAND.navy2} 0%, ${BRAND.navy} 55%, ${BRAND.navy2} 100%)`,
                            boxShadow: "0 30px 90px rgba(11,27,59,0.35)",
                        }}
                    >
                        <div
                            className="h-full"
                            style={{
                                background:
                                    "radial-gradient(circle at 20% 12%, rgba(212,175,55,0.24), transparent 42%), radial-gradient(circle at 85% 40%, rgba(255,255,255,0.08), transparent 45%)",
                            }}
                        >
                            <div className="p-10 md:p-12 text-center h-full">
                                <div
                                    className="w-16 h-16 mx-auto rounded-2xl border flex items-center justify-center"
                                    style={{
                                        borderColor: "rgba(255,255,255,0.12)",
                                        background: "rgba(255,255,255,0.08)",
                                    }}
                                >
                                    <FaHandshake className="text-3xl" style={{ color: BRAND.gold2 }} />
                                </div>

                                <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-white">
                                    Our Promise
                                </h2>

                                <div
                                    className="w-16 h-1 mx-auto mt-5 rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                                    }}
                                />

                                <p className="mt-6 text-lg leading-relaxed italic" style={{ color: "rgba(255,255,255,0.82)" }}>
                                    &quot;We are committed to delivering exceptional quality, fostering
                                    creativity, and driving impactful results. With a focus on your
                                    goals, we ensure every solution aligns with your vision. Your
                                    success fuels our passion, as we work together to create lasting
                                    achievements and build a foundation for mutual growth.&quot;
                                </p>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================
          VALUES (Vertical Timeline + Line Connected)
      ========================= */}
            <section className="py-20 px-6 lg:px-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center justify-center mx-auto px-4 py-2 rounded-full border"
                            style={{ borderColor: "rgba(11,27,59,0.12)" }}
                        >
                            <span
                                className="text-xs font-extrabold tracking-[0.18em] uppercase"
                                style={{ color: BRAND.navy }}
                            >
                                What We Stand For
                            </span>
                        </div>

                        <h2
                            className="mt-5 text-4xl md:text-5xl font-extrabold"
                            style={{ color: BRAND.navy }}
                        >
                            Our Values
                        </h2>

                        <div
                            className="w-16 h-1 mx-auto mt-6 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                            }}
                        />

                        <p className="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
                            The core values behind our work that drive our meaningful impact.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative mt-14 max-w-5xl mx-auto">
                        {/* Vertical line (left on mobile, center on md+) */}
                        <div
                            className="absolute top-0 bottom-0 w-px md:hidden"
                            style={{
                                left: "1.5rem",
                                background: `linear-gradient(${BRAND.gold2}, ${BRAND.gold})`,
                                opacity: 0.9,
                            }}
                        />
                        <div
                            className="hidden md:block absolute top-0 bottom-0 w-px"
                            style={{
                                left: "50%",
                                background: `linear-gradient(${BRAND.gold2}, ${BRAND.gold})`,
                                opacity: 0.9,
                            }}
                        />

                        <ul className="space-y-10">
                            {values.map((v, idx) => {
                                const isLeft = idx % 2 === 0;
                                return (
                                    <li
                                        key={idx}
                                        className={`relative flex md:items-stretch ${isLeft ? "md:justify-start" : "md:justify-end"
                                            }`}
                                    >
                                        {/* Dot + Icon (connected to line) */}
                                        <div
                                            className="absolute md:hidden"
                                            style={{
                                                top: "1.75rem",
                                                left: "1.5rem",
                                                transform: "translateX(-50%)",
                                            }}
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl border flex items-center justify-center"
                                                style={{
                                                    borderColor: "rgba(11,27,59,0.16)",
                                                    background: `linear-gradient(135deg, rgba(243,210,122,0.30), rgba(212,175,55,0.22))`,
                                                    boxShadow: "0 14px 35px rgba(212,175,55,0.18)",
                                                }}
                                            >
                                                <span style={{ color: BRAND.navy }}>{v.icon}</span>
                                            </div>
                                        </div>

                                        {/* Desktop icon position (center line) */}
                                        <div
                                            className="hidden md:block absolute"
                                            style={{
                                                top: "1.75rem",
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                            }}
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl border flex items-center justify-center"
                                                style={{
                                                    borderColor: "rgba(255,255,255,0.14)",
                                                    background: `linear-gradient(135deg, rgba(243,210,122,0.30), rgba(212,175,55,0.22))`,
                                                    boxShadow: "0 14px 35px rgba(212,175,55,0.18)",
                                                }}
                                            >
                                                <span style={{ color: BRAND.navy }}>{v.icon}</span>
                                            </div>
                                        </div>

                                        {/* Card */}
                                        <div
                                            className={`w-full md:w-[calc(50%-2.75rem)] pl-20 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"
                                                }`}
                                        >
                                            <div
                                                className="relative rounded-[1.75rem] border p-8 md:p-9 overflow-hidden"
                                                style={{
                                                    borderColor: "rgba(11,27,59,0.10)",
                                                    background: "white",
                                                    boxShadow: "0 20px 60px rgba(11,27,59,0.08)",
                                                }}
                                            >
                                                {/* subtle premium overlay */}
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background:
                                                            "linear-gradient(135deg, rgba(212,175,55,0.10), transparent 55%)",
                                                    }}
                                                />

                                                <div className="relative text-center">
                                                    <h3
                                                        className="text-2xl font-extrabold"
                                                        style={{ color: BRAND.navy }}
                                                    >
                                                        {v.title}
                                                    </h3>

                                                    <p className="mt-3 text-slate-600 leading-relaxed">
                                                        {v.description}
                                                    </p>

                                                    <div
                                                        className="mt-7 w-16 h-1 mx-auto rounded-full"
                                                        style={{
                                                            background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>

            {/* =========================
          CTA (Dark Indigo + Gold)
      ========================= */}
            <section
                className="relative py-24 px-6 lg:px-20 overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${BRAND.navy2} 0%, ${BRAND.navy} 55%, ${BRAND.navy2} 100%)`,
                }}
            >
                {/* Gold/white soft glows */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(circle at 18% 18%, rgba(212,175,55,0.25), transparent 45%), radial-gradient(circle at 85% 65%, rgba(255,255,255,0.08), transparent 45%)",
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
                            Need help with a project?
                        </h2>

                        <p className="mt-6 text-lg md:text-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.78)" }}>
                            Our team is here to assist you with any questions or concerns.
                            Let&apos;s work together to turn your dreams into reality. Get in
                            touch with us today!
                        </p>

                        <div className="mt-10 flex justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-11 py-4 rounded-full text-lg font-extrabold"
                                style={{
                                    color: BRAND.navy,
                                    background: `linear-gradient(90deg, ${BRAND.gold2}, ${BRAND.gold})`,
                                    boxShadow: "0 18px 45px rgba(212,175,55,0.28)",
                                }}
                            >
                                Contact Us <FaArrowRight />
                            </a>
                        </div>

                        <div className="mt-10 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                            Strategy • Branding • Performance Marketing • Creative
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;