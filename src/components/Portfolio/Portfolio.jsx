import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Img from "../Portfolio Images/website1.webp";
import Img2 from "../Portfolio Images/website2.webp";
import website3 from "../Portfolio Images/website3.webp";
import website4 from "../Portfolio Images/website4.webp";
import website5 from "../Portfolio Images/website5.webp";
import website6 from "../Portfolio Images/website6.webp";
import website7 from "../Portfolio Images/website7.webp";
import website8 from "../Portfolio Images/website8.webp";
import website9 from "../Portfolio Images/website9.webp";
import website10 from "../Portfolio Images/website10.webp";
import website11 from "../Portfolio Images/website11.webp";
import website12 from "../Portfolio Images/website12.webp";
import website13 from "../Portfolio Images/website13.webp";
import website14 from "../Portfolio Images/website14.png";



import Digital from "../Portfolio Images/Artboard 1.webp";
import Digital1 from "../Portfolio Images/Artboard 2.webp";
import Digital2 from "../Portfolio Images/Artboard 3.webp";
import Digital3 from "../Portfolio Images/Artboard 4.webp";
import Digital4 from "../Portfolio Images/Artboard 5.webp";
import Digital5 from "../Portfolio Images/Artboard 6.webp";
import Digital6 from "../Portfolio Images/Artboard 7.webp";
import Digital7 from "../Portfolio Images/Artboard 8.webp";
import Digital8 from "../Portfolio Images/Artboard 9.webp";
import Digital9 from "../Portfolio Images/Artboard 10.webp";
import Digital10 from "../Portfolio Images/Artboard 11.webp";
import Digital11 from "../Portfolio Images/Artboard 12.webp";
import Digital12 from "../Portfolio Images/Artboard 13.webp";


import Creative from "../Portfolio Images/c1.webp";
import Creative1 from "../Portfolio Images/c2.webp";
import Creative2 from "../Portfolio Images/c3.webp";
import Creative3 from "../Portfolio Images/c4.webp";
import Creative4 from "../Portfolio Images/c5.webp";
import Creative5 from "../Portfolio Images/c6.webp";
import Creative6 from "../Portfolio Images/c7.webp";
import Creative7 from "../Portfolio Images/c8.webp";
import Creative8 from "../Portfolio Images/c9.webp";
import Creative9 from "../Portfolio Images/c11.webp";
import Creative10 from "../Portfolio Images/c12.webp";
import Creative11 from "../Portfolio Images/c13.webp";
import Creative12 from "../Portfolio Images/c14.webp";
import Creative13 from "../Portfolio Images/c15.webp";


import Event from "../Portfolio Images/event.webp";
import Event2 from "../Portfolio Images/event2.webp";
import Event3 from "../Portfolio Images/event3.webp";
import Event4 from "../Portfolio Images/event4.webp";
import Event5 from "../Portfolio Images/event5.webp";
import Event6 from "../Portfolio Images/event6.webp";
import Event7 from "../Portfolio Images/event7.webp";

import Outdoor from "../Portfolio Images/outdoor1.webp";
import Outdoor2 from "../Portfolio Images/outdoor2.webp";
import Outdoor3 from "../Portfolio Images/outdoor3.webp";
import Outdoor4 from "../Portfolio Images/outdoor4.webp";
import Outdoor5 from "../Portfolio Images/outdoor5.webp";



import Inshop from "../Portfolio Images/inshop1.webp";
import Inshop2 from "../Portfolio Images/inshop2.webp";
import Inshop3 from "../Portfolio Images/inshop3.webp";
import Inshop4 from "../Portfolio Images/inshop4.webp";

import Print from "../Portfolio Images/print.webp"
import Print2 from "../Portfolio Images/print2.webp"
import Print3 from "../Portfolio Images/print3.webp"


import Seo1 from "../Portfolio Images/l.webp";
import Seo2 from "../Portfolio Images/l2.webp";
import Seo3 from "../Portfolio Images/seovideo.mp4";
import Seo4 from "../Portfolio Images/seovideo2.mp4";

import Googlead from "../Portfolio Images/GA.webp";
import Googlead1 from "../Portfolio Images/GA1.webp";
import Googlead2 from "../Portfolio Images/GA2.webp";



// import Video from "../Portfolio Images/video1.mp4"
// import Video1 from "../Portfolio Images/video2.mp4"
// import Video2 from "../Portfolio Images/video3.mp4"
// import Video3 from "../Portfolio Images/video4.mp4"
import Video4 from "../Portfolio Images/23k+.mp4"
import Video5 from "../Portfolio Images/25k+.mp4"
import Video6 from "../Portfolio Images/30k+.mp4"
import Video8 from "../Portfolio Images/40k+.mp4"
import Video9 from "../Portfolio Images/70k+ reach.mp4"
import v1 from "../Portfolio Images/v1.mp4"
import v2 from "../Portfolio Images/v2.mp4"
import v3 from "../Portfolio Images/v3.mp4"
import v4 from "../Portfolio Images/v4.mp4"
import v5 from "../Portfolio Images/v5.mp4"
import vid from "../Portfolio Images/vid.mp4"
import vid1 from "../Portfolio Images/vid1.mp4"
import vid2 from "../Portfolio Images/vid2.mp4"

import Lead1 from "../Portfolio Images/a1.jpeg"
import Lead2 from "../Portfolio Images/a2.jpeg"
import Lead3 from "../Portfolio Images/a3.jpeg"
import Lead4 from "../Portfolio Images/a4.jpeg"







import { FiArrowRight } from "react-icons/fi";
import heroImg from "../Images/digital marketing hero.png";
/* =========================
   ARRAYS / DATA
   ========================= */



const digital = [
    Digital, Digital4, Digital1, Digital7, Digital2, Digital10,
    Digital5, Digital3, Digital8, Digital6, Digital11,
    Digital9, Digital12
];

const creativeAll = [
    Creative2, Creative11, Creative, Creative7, Creative4, Creative13,
    Creative1, Creative8, Creative5, Creative10, Creative3, Creative12,
    Creative6, Creative9
];

const eventsAll = [Event, Event2, Event3, Event4, Event5, Event6, Event7];

const outdoor = [Outdoor, Outdoor2, Outdoor3, Outdoor4, Outdoor5];

const inShop = [Inshop, Inshop2, Inshop3, Inshop4];

const printMedia = [Print, Print2, Print3];

const seoItems = [Seo1, Seo2, Seo3, Seo4];

const googleAds = [Googlead, Googlead1, Googlead2];

const leadGen = [Lead1, Lead2, Lead3, Lead4];

const reachVideos = [
    { src: Video4, reach: "23k+" },
    { src: Video5, reach: "25k+" },
    { src: Video6, reach: "30k+" },
    { src: Video8, reach: "40k+" },
    { src: Video9, reach: "70k+" },
    { src: vid },
    //   { src: vid1 },
    { src: vid2 },
];

const promoVideos = [
    { src: v1 },
    { src: v2 },
    { src: v3 },
    { src: v4 },
    { src: v5 },

];

// Optimized Video Component
function OptimizedVideo({ src, reach, isLandscape = false, className = "" }) {
    const videoRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const [hasStartedLoading, setHasStartedLoading] = useState(false);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setHasStartedLoading(true);
                } else {
                    // Pause video when out of view to save CPU/GPU
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            {
                threshold: 0.01,
                rootMargin: "400px" // Load well before entering viewport
            }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Handle play/pause based on intersection
    useEffect(() => {
        if (isIntersecting && videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play might be blocked
                });
            }
        } else if (!isIntersecting && videoRef.current) {
            videoRef.current.pause();
        }
    }, [isIntersecting]);

    return (
        <div
            ref={containerRef}
            className={`${isLandscape ? "pfLandscapeFrame" : "pfInstaFrame"} ${className}`}
        >
            {hasStartedLoading ? (
                <video
                    ref={videoRef}
                    src={src}
                    controls
                    muted
                    loop
                    playsInline
                    className="pfVideo"
                    preload="metadata" // ✅ Allows browser to fetch dimensions/first frame without full download
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            ) : (
                <div className="pfSkeleton" style={{ width: "100%", height: "100%" }} />
            )}
            {reach && <div className="pfReachBadge">{reach} Reach</div>}
        </div>
    );
}


// const localVideos = [Video, Video1, Video2, Video3];


const websites = [
    {
        name: "Clever Youngsters",
        url: "https://cleveryoungsters.in/",
        img: website8
    },
    {
        name: "Nirmaan TMT",
        url: "https://www.nirmaantmt.com/",
        img: website9
    },
    {
        name: "SPRN",
        url: "https://sprn.in/",
        img: website10
    },
    {
        name: "ColdFist Fitness",
        url: "https://coldfistfitnessclub.in/",
        img: website11
    },
    {
        name: "Dr. Chitra Endocare",
        url: "https://drchitraendocare.com/",
        img: website12
    },
    {
        name: "Muraad Construction",
        url: "https://muraadconstruction.com/",
        img: website13
    },
    { name: "Mahesh Ventures", url: "https://maheshventures.in/", img: Img2 },
    { name: "Land Bazar", url: "https://landbazar.in/", img: Img },
    { name: "Sambhav Sansthan", url: "https://sambhavsansthan.org/", img: website3 },
    { name: "Laafi Foods", url: "https://www.laafifoods.com/", img: website4 },
    { name: "Aarogya Hospital", url: "https://aarogyahospitalraipur.com/", img: website5 },
    { name: "SSGT Group", url: "https://ssgtgroup.com/", img: website6 },
    { name: "Pradeep Maheshwari", url: "https://www.thepradeepmaheshwari.com/", img: website7 },
    { name: "Ias Veda", url: "https://iasveda.in/", img: website14 }
];


/* =========================
   LazyImage
   ========================= */
function LazyImage({ src, alt, className, fit = "contain" }) {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{ objectFit: fit }}
            loading="lazy"
        />
    );
}


/* =========================
   Marquee Section
   (All cards same size now)
   ========================= */
function MarqueeSection({
    title,
    subtitle,
    items,
    speed = 70,
    reverse = false,
    fit = "contain",
}) {
    const [hasEntered, setHasEntered] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pfSection" ref={ref}>
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div
                className={`pfMarquee ${reverse ? "pfMarquee--reverse" : ""}`}
                style={{ "--pfMarqueeDur": `${speed}s` }}
            >
                {hasEntered && (
                    <div className="pfMarquee__track">
                        <div className="pfMarquee__group">
                            {items.map((src, idx) => (
                                <div className="pfMarquee__item" key={`${src}-${idx}`}>
                                    <LazyImage src={src} alt={title} className="pfItemImg" fit={fit} />
                                </div>
                            ))}
                        </div>

                        <div className="pfMarquee__group" aria-hidden="true">
                            {items.map((src, idx) => (
                                <div className="pfMarquee__item" key={`${src}-dup-${idx}`}>
                                    <LazyImage src={src} alt={title} className="pfItemImg" fit={fit} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* =========================
   Website Marquee
   ========================= */
function WebsiteMarquee({ title, subtitle, items, speed = 115 }) {
    const [hasEntered, setHasEntered] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pfSection" ref={ref}>
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfWebMarquee" style={{ "--pfWebDur": `${speed}s` }}>
                {hasEntered && (
                    <div className="pfWebMarquee__track">
                        <div className="pfWebMarquee__group">
                            {items.map((w) => (
                                <a
                                    key={w.url}
                                    className="pfWebMCard"
                                    href={w.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={w.name}
                                >
                                    <div className="pfWebMImg">
                                        <LazyImage src={w.img} alt={w.name} fit="contain" />
                                        <div className="pfWebMOverlay">
                                            <span>Visit website →</span>
                                        </div>
                                    </div>
                                    <div className="pfWebMTitle">{w.name}</div>
                                </a>
                            ))}
                        </div>

                        <div className="pfWebMarquee__group" aria-hidden="true">
                            {items.map((w) => (
                                <a
                                    key={`${w.url}-dup`}
                                    className="pfWebMCard"
                                    href={w.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={w.name}
                                >
                                    <div className="pfWebMImg">
                                        <LazyImage src={w.img} alt={w.name} fit="contain" />
                                        <div className="pfWebMOverlay">
                                            <span>Visit website →</span>
                                        </div>
                                    </div>

                                    <div className="pfWebMTitle">{w.name}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* =========================
   Mixed Media Marquee (Images + Videos)
   ========================= */
function MixedMediaMarquee({ title, subtitle, items, speed = 80, isLandscape = false }) {
    const [hasEntered, setHasEntered] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const isVideo = (src) => {
        if (typeof src !== 'string') return false;
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    };

    return (
        <section className="pfSection" ref={ref}>
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfMarquee" style={{ "--pfMarqueeDur": `${speed}s` }}>
                {hasEntered && (
                    <div className="pfMarquee__track">
                        <div className="pfMarquee__group">
                            {items.map((src, idx) => (
                                <div className={`pfMarquee__item ${isLandscape ? "pfMarquee__item--landscape" : ""}`} key={`mixed-${idx}`}>
                                    {isVideo(src) ? (
                                        <OptimizedVideo src={src} className="pfItemVideo" isLandscape={isLandscape} />
                                    ) : (
                                        <LazyImage src={src} alt={title} className="pfItemImg" fit="contain" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="pfMarquee__group" aria-hidden="true">
                            {items.map((src, idx) => (
                                <div className={`pfMarquee__item ${isLandscape ? "pfMarquee__item--landscape" : ""}`} key={`mixed-dup-${idx}`}>
                                    {isVideo(src) ? (
                                        <OptimizedVideo src={src} className="pfItemVideo" isLandscape={isLandscape} />
                                    ) : (
                                        <LazyImage src={src} alt={title} className="pfItemImg" fit="contain" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* =========================
   Instagram Style Video Marquee
   ========================= */

function InstaVideoMarquee({ title, subtitle, items, speed = 80 }) {
    const [hasEntered, setHasEntered] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pfSection" ref={ref}>
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfYtMarquee" style={{ "--pfYtDur": `${speed}s` }}>
                {hasEntered && (
                    <div className="pfYtMarquee__track">
                        <div className="pfYtMarquee__group">
                            {items.map((item, idx) => {
                                const src = item.src || item;
                                const reach = item.reach;
                                return (
                                    <div className="pfInstaCard" key={`insta-${idx}`}>
                                        <OptimizedVideo src={src} reach={reach} />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pfYtMarquee__group" aria-hidden="true">
                            {items.map((item, idx) => {
                                const src = item.src || item;
                                const reach = item.reach;
                                return (
                                    <div className="pfInstaCard" key={`insta-dup-${idx}`}>
                                        <OptimizedVideo src={src} reach={reach} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* =========================
   Landscape Video Marquee
   ========================= */
function LandscapeVideoMarquee({ title, subtitle, items, speed = 80 }) {
    const [hasEntered, setHasEntered] = useState(false);
    const ref = React.useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasEntered(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="pfSection" ref={ref}>
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfYtMarquee" style={{ "--pfYtDur": `${speed}s` }}>
                {hasEntered && (
                    <div className="pfYtMarquee__track">
                        <div className="pfYtMarquee__group">
                            {items.map((item, idx) => {
                                const src = item.src || item;
                                const reach = item.reach;
                                return (
                                    <div className="pfLandscapeCard" key={`land-${idx}`}>
                                        <OptimizedVideo src={src} reach={reach} isLandscape />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="pfYtMarquee__group" aria-hidden="true">
                            {items.map((item, idx) => {
                                const src = item.src || item;
                                const reach = item.reach;
                                return (
                                    <div className="pfLandscapeCard" key={`land-dup-${idx}`}>
                                        <OptimizedVideo src={src} reach={reach} isLandscape />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

/* =========================
   Local Video Marquee (Standard)
   ========================= */
function LocalVideoMarquee({ title, subtitle, items, speed = 80 }) {
    return (
        <section className="pfSection">
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfYtMarquee" style={{ "--pfYtDur": `${speed}s` }}>
                <div className="pfYtMarquee__track">
                    <div className="pfYtMarquee__group">
                        {items.map((src, idx) => (
                            <div className="pfYtCard" key={`vid-${idx}`}>
                                <OptimizedVideo src={src} isLandscape />
                            </div>
                        ))}
                    </div>

                    <div className="pfYtMarquee__group" aria-hidden="true">
                        {items.map((src, idx) => (
                            <div className="pfYtCard" key={`vid-dup-${idx}`}>
                                <OptimizedVideo src={src} isLandscape />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


/* =========================
   YouTube Marquee
   ========================= */
function YoutubeMarquee({ title, subtitle, items, speed = 115 }) {
    // Component remains defined but we will comment out its call below
    return (
        <section className="pfSection">
            <div className="pfHead pfHead--center">
                <h2>{title}</h2>
                {subtitle ? <p>{subtitle}</p> : null}
            </div>

            <div className="pfYtMarquee" style={{ "--pfYtDur": `${speed}s` }}>
                <div className="pfYtMarquee__track">
                    <div className="pfYtMarquee__group">
                        {items.map((src, idx) => (
                            <div className="pfYtCard" key={`${src}-${idx}`}>
                                <div className="pfYtFrame">
                                    <iframe
                                        loading="lazy"
                                        src={src}
                                        title={`YouTube video ${idx + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pfYtMarquee__group" aria-hidden="true">
                        {items.map((src, idx) => (
                            <div className="pfYtCard" key={`${src}-dup-${idx}`}>
                                <div className="pfYtFrame">
                                    <iframe
                                        loading="lazy"
                                        src={src}
                                        title={`YouTube dup ${idx + 1}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


/* =========================
   PAGE
   ========================= */
export default function PortfolioNew() {
    useEffect(() => { }, []);

    return (
        <div className="pfPage">
            <style>{`
/* ============================================================
   PORTFOLIO CSS — Premium Rewrite
   ============================================================ */

:root {
  --p-goldA:  #f3d27a;
  --p-goldB:  #c89b3c;
  --p-gold:   #e8c876;
  --p-navy:   #0B1B3B;
  --p-navyLight: #1a2f5a;
  --p-ink:    #0B1B3B;
  --p-text:   #3D4F6B;
  --p-muted:  #7a8ba8;
  --p-line:   rgba(200, 155, 60, 0.2);
  --p-card-bg:rgba(255, 252, 240, 0.92);
  --p-font:   'Inter', system-ui, -apple-system, Segoe UI, sans-serif;
  --p-radius: 20px;
  --p-shadow: 0 4px 20px rgba(11, 27, 59, 0.08);
}

/* ============================================================
   RESET / BASE
   ============================================================ */
.pfPage *,
.pfPage *::before,
.pfPage *::after {
  box-sizing: border-box;
}

.pfPage {
  font-family: var(--p-font);
  color: var(--p-text);
  background: #FFFDF7;
  background-image: linear-gradient(180deg, #FFFDF7 0%, #FEF9EC 45%, #FFFCF0 100%);
  min-height: 100vh;
}

.pfContainer {
  width: min(1280px, 94%);
  margin: 0 auto;
}

/* ============================================================
   HERO
   ============================================================ */
.pfHero {
  background: transparent;
  padding: 180px 0 80px;
  position: relative;
  overflow: hidden;
}

.pfHero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c89b3c' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
}

.pfHero__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.pfKicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  padding: 5px 14px;
  border-radius: 100px;
  background: rgba(200,155,60,0.08);
  border: 1px solid rgba(200,155,60,0.3);
  color: var(--p-goldB);
  letter-spacing: .14em;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  backdrop-filter: blur(6px);
}

.pfHero h1 {
  margin: 0 0 16px;
  color: var(--p-navy);
  font-size: clamp(32px, 4.5vw, 56px);
  line-height: 1.08;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.pfHero__text {
  margin: 0;
  color: var(--p-text);
  font-size: 18px;
  line-height: 1.75;
  max-width: 600px;
}

.pfHero__cta {
  margin-top: 28px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ---- Buttons ---- */
.pfBtn {
  height: 50px;
  padding: 0 24px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  border: 1.5px solid transparent;
  font-size: 15px;
  font-weight: 600;
  font-family: var(--p-font);
  transition: all .2s ease;
  cursor: pointer;
}

.pfBtn:active { transform: translateY(1px); }

.pfBtn--primary {
  color: var(--p-gold);
  background: linear-gradient(135deg, var(--p-navy) 0%, var(--p-navyLight) 100%);
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(11,27,59,0.3);
}

.pfBtn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(11,27,59,0.4);
}

.pfBtn--ghost {
  color: var(--p-navy);
  background: linear-gradient(135deg, var(--p-goldB) 0%, var(--p-gold) 100%);
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(200,155,60,0.2);
}

.pfBtn--ghost:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(200,155,60,0.3);
}

/* ---- Hero image ---- */
.pfHero__right {
  display: flex;
  justify-content: flex-end;
}

.pfHero__media {
  width: min(500px, 100%);
  padding: 10px;
  border-radius: 24px;
  background: rgba(255,253,245,0.8);
  border: 1px solid rgba(200,155,60,0.18);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px rgba(0,0,0,0.25);
}

.pfHero__media img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 18px;
  display: block;
}

/* Hero animation */
.pfHero__anim { animation: pfHeroIn 700ms ease both; }

@keyframes pfHeroIn {
  from { opacity: 0; transform: translateY(-16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ============================================================
   SECTION + HEADING
   ============================================================ */
.pfSection { padding: 60px 0 0; }

.pfHead {
  text-align: center;
  margin-bottom: 20px;
  padding: 0 16px;
}

.pfHead h2 {
  margin: 0 0 6px;
  font-size: clamp(22px, 2.4vw, 34px);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.15;
  background: linear-gradient(90deg, #c89b3c 0%, #e8c876 50%, #f3d27a 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.pfHead h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3.5px;
  margin: 10px auto 0;
  border-radius: 99px;
  background: linear-gradient(90deg, #c89b3c, #e8c876);
}

.pfHead p {
  margin: 12px auto 0;
  max-width: 800px;
  color: var(--p-muted);
  font-size: 15px;
  line-height: 1.75;
}

/* ============================================================
   SKELETON / LOADING STATES
   ============================================================ */
.pfSkeleton {
  background: linear-gradient(90deg, rgba(200,155,60,0.04) 0%, rgba(200,155,60,0.12) 40%, rgba(200,155,60,0.04) 80%);
  background-size: 200% 100%;
  animation: pfShimmer 1.2s linear infinite;
  width: 100%;
  height: 100%;
}

@keyframes pfShimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ============================================================
   IMAGE MARQUEE — Uniform Cards ✅
   Every card: same width, same aspect-ratio → no tall/short gaps
   ============================================================ */
.pfMarquee {
  --pfMarqueeDur: 75s;
  overflow: hidden;
  border-radius: var(--p-radius);
  border: 1px solid var(--p-line);
  background: var(--p-card-bg);
  padding: 12px 0;
  box-shadow: var(--p-shadow);
  backdrop-filter: blur(8px);
}

.pfMarquee__track {
  display: flex;
  gap: 14px;
  width: max-content;
  padding: 0 14px;
  animation: pfMarqueeMove var(--pfMarqueeDur) linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  align-items: stretch; /* all items same height */
}

.pfMarquee--reverse .pfMarquee__track {
  animation-direction: reverse;
}

.pfMarquee:hover .pfMarquee__track {
  animation-play-state: paused;
}

.pfMarquee__group {
  display: flex;
  gap: 14px;
}

/* ✅ UNIFORM CARD — Fixed width + fixed aspect-ratio = same size everywhere */
.pfMarquee__item {
  flex: 0 0 auto;
  width: 380px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--p-line);
  background: rgba(255,253,245,0.85);
  box-shadow: 0 6px 20px rgba(11, 27, 59, 0.06);
  transition: box-shadow .2s ease, transform .2s ease;
}

.pfMarquee__item:hover {
  box-shadow: 0 12px 32px rgba(232, 200, 118, 0.14);
}

/* ✅ ALL images: same box, same ratio — no more tall/short */
.pfItemImg {
  display: block;
  width: 100%;
  height: 260px;      /* fixed height */
  object-fit: contain;
  background: transparent;
}

/* landscape variant */
.pfMarquee__item--landscape {
  width: 520px;
}

.pfMarquee__item--landscape .pfItemImg {
  height: 290px;
  object-fit: contain;
}

/* video inside marquee */
.pfItemVideo {
  display: block;
  width: 100%;
  height: 260px;
  object-fit: cover;
  background: #000;
}

@keyframes pfMarqueeMove {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* ============================================================
   WEBSITE MARQUEE — Wide cards
   ============================================================ */
.pfWebMarquee {
  --pfWebDur: 115s;
  overflow: hidden;
  border-radius: var(--p-radius);
  border: 1px solid var(--p-line);
  background: var(--p-card-bg);
  padding: 14px 0;
  box-shadow: var(--p-shadow);
  backdrop-filter: blur(8px);
}

.pfWebMarquee__track {
  display: flex;
  gap: 18px;
  width: max-content;
  padding: 0 16px;
  animation: pfWebMove var(--pfWebDur) linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.pfWebMarquee:hover .pfWebMarquee__track {
  animation-play-state: paused;
}

.pfWebMarquee__group {
  display: flex;
  gap: 18px;
}

.pfWebMCard {
  flex: 0 0 auto;
  width: 680px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--p-line);
  background: rgba(255,253,245,0.85);
  text-decoration: none;
  color: inherit;
  box-shadow: 0 6px 20px rgba(11,27,59,0.06);
  transition: box-shadow .2s, transform .2s;
}

.pfWebMCard:hover {
  box-shadow: 0 12px 36px rgba(200, 155, 60, 0.14);
  transform: translateY(-3px);
}

.pfWebMImg {
  position: relative;
  width: 100%;
  height: 320px;
  background: #fff;
  overflow: hidden;
}

.pfWebMImg img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: transparent;
}

.pfWebMOverlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(11, 27, 59, 0.85);
  opacity: 0;
  transition: opacity .18s ease;
  color: var(--p-gold);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .02em;
}

.pfWebMCard:hover .pfWebMOverlay { opacity: 1; }

.pfWebMTitle {
  padding: 14px 16px;
  color: var(--p-navy);
  font-size: 15px;
  font-weight: 700;
  border-top: 1px solid var(--p-line);
}

@keyframes pfWebMove {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* ============================================================
   YOUTUBE / VIDEO MARQUEE (common track)
   ============================================================ */
.pfYtMarquee {
  --pfYtDur: 115s;
  overflow: hidden;
  border-radius: var(--p-radius);
  border: 1px solid var(--p-line);
  background: var(--p-card-bg);
  padding: 14px 0;
  box-shadow: 0 8px 32px rgba(11,27,59,0.08);
  backdrop-filter: blur(8px);
}

.pfYtMarquee__track {
  display: flex;
  gap: 18px;
  width: max-content;
  padding: 0 16px;
  animation: pfYtMove var(--pfYtDur) linear infinite;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  align-items: flex-start;
}

.pfYtMarquee:hover .pfYtMarquee__track {
  animation-play-state: paused;
}

.pfYtMarquee__group {
  display: flex;
  gap: 18px;
  align-items: flex-start;
}

/* YouTube iframe card */
.pfYtCard {
  flex: 0 0 auto;
  width: 600px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(200,155,60,0.18);
  background: #000;
  box-shadow: 0 6px 20px rgba(11,27,59,0.06);
}

.pfYtFrame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
}

.pfYtFrame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}

@keyframes pfYtMove {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* ============================================================
   INSTAGRAM PORTRAIT CARDS (Social Reach)
   ============================================================ */
.pfInstaCard {
  flex: 0 0 auto;
  width: 300px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(200,155,60,0.18);
  background: #000;
  box-shadow: 0 16px 40px rgba(11,27,59,0.12);
  transition: transform .25s ease, box-shadow .25s ease;
}

.pfInstaCard:hover {
  transform: scale(1.025);
  box-shadow: 0 24px 56px rgba(200, 155, 60, 0.20);
}

.pfInstaFrame {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  background: #000;
  overflow: hidden;
}

.pfVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.pfReachBadge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(232, 200, 118, 0.90);
  color: #07071a;
  padding: 5px 12px;
  border-radius: 50px;
  font-size: 12.5px;
  font-weight: 700;
  font-family: var(--p-font);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255,255,255,0.25);
  z-index: 5;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
}

/* ============================================================
   LANDSCAPE VIDEO CARDS (Promo videos)
   ============================================================ */
.pfLandscapeCard {
  flex: 0 0 auto;
  width: 560px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  background: #000;
  box-shadow: 0 12px 36px rgba(0,0,0,0.24);
  transition: transform .25s ease, box-shadow .25s ease;
}

.pfLandscapeCard:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 50px rgba(232, 200, 118, 0.20);
}

.pfLandscapeFrame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  overflow: hidden;
}

.pfLandscapeFrame video,
.pfLandscapeFrame .pfVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ============================================================
   CTA SECTION
   ============================================================ */
.pfCta {
  padding: 70px 0 80px;
}

.pfCta__box {
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(232,200,118,0.06) 0%, rgba(243,210,122,0.08) 100%);
  border: 1px solid rgba(232, 200, 118, 0.18);
  padding: 56px 32px;
  text-align: center;
  box-shadow: 0 8px 40px rgba(232, 200, 118, 0.08);
}

.pfCta__box h2 {
  margin: 0 0 12px;
  color: var(--p-ink);
  font-size: clamp(22px, 2.8vw, 36px);
  font-weight: 800;
  letter-spacing: -0.01em;
}

.pfCta__box p {
  margin: 0 auto 24px;
  max-width: 680px;
  color: var(--p-text);
  line-height: 1.80;
  font-size: 16px;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 980px) {
  .pfHero__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .pfHero__right {
    justify-content: flex-start;
  }

  .pfHero { padding: 100px 0 60px; }

  .pfHero__media img { height: 220px; }

  .pfMarquee__item {
    width: 300px;
  }

  .pfItemImg { height: 200px; }

  .pfWebMCard { width: 500px; }
  .pfWebMImg  { height: 240px; }

  .pfYtCard   { width: 480px; }

  .pfLandscapeCard { width: 440px; }
  .pfInstaCard     { width: 260px; }
}

@media (max-width: 640px) {
  .pfHero { padding: 90px 0 50px; }

  .pfSection { padding: 40px 0 0; }

  .pfMarquee__item { width: 260px; }
  .pfItemImg { height: 170px; }

  .pfMarquee__item--landscape { width: 320px; }

  .pfWebMCard  { width: 320px; }
  .pfWebMImg   { height: 180px; }

  .pfYtCard    { width: 320px; }

  .pfLandscapeCard { width: 320px; }
  .pfInstaCard     { width: 230px; }

  .pfCta__box  { padding: 36px 18px; }
}

/* ============================================================
   REDUCED MOTION
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  .pfMarquee__track,
  .pfWebMarquee__track,
  .pfYtMarquee__track {
    animation: none !important;
  }

  .pfHero__anim { animation: none; }
}
      `}</style>
            <Helmet>
                <title>Portfolio </title>
                <meta
                    name="description"
                    content="Explore Trishul Media Network’s portfolio: Outdoor Advertising, Digital Marketing, Creative Designs, Print Media, Events, and Websites."
                />
            </Helmet>

            <header className="pfHero">
                <div className="pfContainer pfHero__grid pfHero__anim">
                    <div className="pfHero__left">
                        <p className="pfKicker">PORTFOLIO</p>
                        <h1>Explore Our Success Stories</h1>
                        <p className="pfHero__text">
                            We take pride in showcasing a diverse range of projects that have driven success for our valued clients.
                        </p>

                        <div className="pfHero__cta">
                            <Link className="pfBtn pfBtn--primary" to="/Contact">
                                Enquire Now <FiArrowRight />
                            </Link>
                            <a className="pfBtn pfBtn--ghost" href="#work">
                                View Work
                            </a>
                        </div>
                    </div>

                    <div className="pfHero__right">
                        <div className="pfHero__media">
                            <img src={heroImg} alt="Portfolio" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="pfContainer" id="work">
                {/* ✅ Now all sections use SAME card size + contain (no crop) */}
                <MarqueeSection title="Outdoor Advertising" items={outdoor} speed={25} fit="contain" />

                <MarqueeSection title="Digital Marketing" items={digital} speed={22} reverse fit="contain" />

                <LandscapeVideoMarquee title="Social Media Videos" items={promoVideos} speed={40} />

                <MarqueeSection title="Creative Designs" items={creativeAll} speed={28} fit="contain" />

                <MarqueeSection title="Print Media" items={printMedia} speed={18} reverse fit="contain" />

                <MarqueeSection title="In-Shop Branding" items={inShop} speed={22} fit="contain" />

                <MarqueeSection title="Event Promotion" items={eventsAll} speed={22} reverse fit="contain" />

                <WebsiteMarquee title="Website Development" items={websites} speed={40} />

                <MarqueeSection title="Google Ads" items={googleAds} speed={15} fit="contain" />

                <MarqueeSection title="Lead Generation Campaigns" items={leadGen} speed={20} fit="contain" />

                <MixedMediaMarquee
                    title="SEO Optimization & Results"
                    items={seoItems}
                    speed={50}
                    isLandscape={true}
                />

                <InstaVideoMarquee title="Social Media Reach" items={reachVideos} speed={40} />


                <section className="pfCta">

                </section>
            </main>
        </div>
    );
}
