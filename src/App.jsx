import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero.jsx";
import Experties from "./components/Expertise/Experties.jsx";
import About from "./components/About/About.jsx";
import AiServices from "./components/Services/Ai services.jsx";
import OutdoorAdvertising from "./components/Services/Outdoor services.jsx";
import DigitalMarketing from "./components/Services/Digital Marketing.jsx";
import PersonalBranding from "./components/Services/Personal branding.jsx";
import DesigningServices from "./components/Services/Desiging services.jsx";
import AudioVisuals from "./components/Services/Audiovisual.jsx";
import BrandStrategy from "./components/Services/Brandstrategy services.jsx";
import Print from "./components/Services/Print.jsx";
import Event from "./components/Services/Event.jsx";
import Clients from "./components/Clients/Clients.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import Casestudy from "./components/Casestudy/Casestudy.jsx"
import Contact from "./components/Contact/Contact.jsx";
import Why from "./components/Why/Why.jsx";
import Footer from "./components/Footer/Footer.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* ─── Home page: Hero + Expertise section ─── */
const HomePage = () => (
  <>
    <Hero />
    <Experties />
    <Why />
    <Clients />

  </>
);

export default function App() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <ScrollToTop />
      <Header />

      {/* pt-20 to offset fixed header */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Portfolio & Case Studies */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies" element={<Casestudy />} />
          <Route path="/contact" element={<Contact />} />

          {/* Services */}
          <Route path="/services/ai-services"         element={<AiServices />} />
          <Route path="/services/outdoor-advertising" element={<OutdoorAdvertising />} />
          <Route path="/services/digital-marketing"   element={<DigitalMarketing />} />
          <Route path="/services/personal-branding"   element={<PersonalBranding />} />
          <Route path="/services/designing"           element={<DesigningServices />} />
          <Route path="/services/audio-visuals"       element={<AudioVisuals />} />
          <Route path="/services/branding-strategy"   element={<BrandStrategy />} />
          <Route path="/services/print-media"         element={<Print />} />
          <Route path="/services/event-promotion"     element={<Event />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
