import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, LineChart, Line, ComposedChart
} from 'recharts';
import {
  Target, Zap, Activity, TrendingUp, Users, Building,
  MousePointerClick, CalendarDays, Eye, ImageIcon, Presentation,
  ArrowRight, Sparkles, ChevronDown
} from 'lucide-react';

import raghavImg1 from "../Portfolio Images/raghavcasestudy.png";
import raghavImg2 from "../Portfolio Images/raghavcasestudy1.png";
import dbImg1 from "../Portfolio Images/db1.png";
import dbImg2 from "../Portfolio Images/db2.png";
import irefImg from "../Portfolio Images/iref.jpeg";
import vbImg from "../Portfolio Images/vb.jpeg";
import irefLogo from "../Portfolio Images/iref logo.png";
import vbLogo from "../Portfolio Images/vbtower logo.jpg";
import dbFoodLogo from "../Portfolio Images/fest logo.png";
import dbPropLogo from "../Portfolio Images/expo logo.jpeg";
import raghavLogo from "../Portfolio Images/raghav logo.png";
import maheshLogo from "../Portfolio Images/maheshventures logo.png";
import aarogyaLogo from "../Portfolio Images/aarogya logo.png";
import maheshImg1 from "../Portfolio Images/maheshcase.png";
import aarogyaImg1 from "../Portfolio Images/aarogyacase.png";
import aarogyaImg2 from "../Portfolio Images/aarogyacase2.png";
import raisInfinityLogo from "../Portfolio Images/raisinfinity logo.png";
import classicCastleLogo from "../Portfolio Images/classiccastle logo.png";
import godrejPropertyLogo from "../Portfolio Images/godrej property.png";

// Premium Gold + Dark Navy Luxury Theme
const BRAND = {
  bg: "#FFFDF7",
  bgGradient: "linear-gradient(180deg, #FFFDF7 0%, #FEF9EC 45%, #FFFCF0 100%)",
  cardBg: "rgba(255, 252, 240, 0.92)",
  cardBorder: "rgba(200, 155, 60, 0.2)",
  cardHoverBorder: "rgba(200, 155, 60, 0.5)",
  navy: "#0B1B3B",
  navyLight: "#1a2f5a",
  goldPrimary: "#c89b3c",
  goldSecondary: "#e8c876",
  goldLight: "#f3d27a",
  goldDeep: "#D4AF37",
  textPrimary: "#0B1B3B",
  textSecondary: "#3D4F6B",
  textMuted: "#7a8ba8"
};

const TOOLTIP_STYLE = {
  borderRadius: '12px',
  border: `1px solid rgba(200,155,60,0.3)`,
  boxShadow: '0 8px 32px rgba(11,27,59,0.12)',
  background: 'rgba(255,252,240,0.98)',
  backdropFilter: 'blur(12px)',
  fontSize: '0.82rem',
  color: '#0B1B3B',
  fontFamily: 'Inter, sans-serif',
};

const TICK_STYLE = { fill: '#7a8ba8', fontSize: 11 };

/* ── Scroll-triggered fade hook ── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('opacity-100', 'translate-y-0'); el.classList.remove('opacity-0', 'translate-y-8'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, delay = 0 }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const CASE_STUDIES = [
  {
    id: 'iref',
    logo: irefLogo,
    title: 'IREF – Institute of Real Estate & Finance',
    requirements: [
      "Target: 200 verified leads within 1 month",
      "Delivered: 250+ qualified leads in just 30 days"
    ],
    whatWeDid: [
      "Meta Ads – Lead Form & Conversion Campaigns",
      "High-Quality Lead Generation Strategy",
      "Social Media Marketing (Facebook + Instagram)",
      "New Website Design + Pixel Tracking Setup",
      "AI-Powered Audience Targeting & Optimization",
      "Branding & Full Marketing Strategy",
      "Telecalling for Lead Verification",
      "Strategic Webinar Arrangement"
    ],
    process: [
      "Competitive Analysis + Audience Research",
      "Website & Landing Page Setup",
      "Meta Campaign Setup & Launch",
      "Influencer Marketing Campaign",
      "Monthly Optimization & Reporting"
    ],
    images: [{ src: irefImg, badge: null }],
    results: [
      "200+ verified leads generated in 30 days",
      "High-quality admissions across all programs",
      "Improved brand visibility citywide"
    ],
    stats: [
      { label: "Leads", icon: <Users size={14}/>, value: 250, suffix: "+" },
      { label: "Duration", icon: <CalendarDays size={14}/>, value: "30 Days", isText: true },
      { label: "Conv. Ratio", icon: <MousePointerClick size={14}/>, value: 10, suffix: "%+" }
    ],
    chartData: [
      { name: 'Target', count: 200 },
      { name: 'Achieved', count: 250 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={44}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="count" fill="url(#goldGradient)" radius={[8,8,0,0]} name="Leads" />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Leads: Target vs. Achieved"
  },
  {
    id: 'vb',
    logo: vbLogo,
    title: 'VB Tower – Commercial Complex',
    requirements: [
      "Generate high-intent commercial property enquiries",
      "Increase site visits & improve investor trust",
      "Strengthen local visibility through digital + on-ground branding"
    ],
    whatWeDid: [
      "Meta Ads (Lead Generation + Messages)",
      "Outdoor Hoardings & Society Branding",
      "Full Branding & Marketing Strategy",
      "Influencer Marketing Campaign",
      "Telecalling Support for Verification"
    ],
    process: [
      "Property Photos, Videos & Brochure Design",
      "Lead Generation Campaign Setup",
      "Hyperlocal Targeting for Investors",
      "Site-Visit Push via Reminders & Follow-Ups",
      "Regular Optimization + Broker Coordination"
    ],
    images: [{ src: vbImg, badge: null }],
    results: [
      "High-quality commercial property enquiries delivered",
      "Stronger site visits and bookings recorded",
      "Better brand visibility and investor trust built"
    ],
    stats: [
      { label: "Outcome", icon: <Building size={14}/>, value: "Site Visits", isText: true },
      { label: "Status", icon: <Activity size={14}/>, value: "Growing", isText: true },
      { label: "Conv.", icon: <MousePointerClick size={14}/>, value: "2–3%", isText: true }
    ],
    chartData: [
      { name: 'Week 1', visits: 5 },
      { name: 'Week 2', visits: 15 },
      { name: 'Week 3', visits: 30 },
      { name: 'Week 4', visits: 40 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={BRAND.goldPrimary} stopOpacity={0.4} />
              <stop offset="95%" stopColor={BRAND.goldPrimary} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Area type="monotone" dataKey="visits" stroke={BRAND.goldPrimary} strokeWidth={2.5} fill="url(#areaGold)" dot={{ r: 4, fill: BRAND.goldPrimary, strokeWidth: 2, stroke: '#fff' }} name="Site Visits" />
        </AreaChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Site Visits Growth Over Time"
  },
  {
    id: 'rais',
    logo: raisInfinityLogo,
    title: 'Rais Infinity',
    requirements: [
      "Drive highly qualified leads for property sales",
      "Maximize conversion rate from digital platforms",
      "Generate site visits and positive responses efficiently",
      "50 leads in a month"
    ],
    whatWeDid: [
      "Targeted Meta Ads for Lead Generation",
      "Strategic follow-up & retargeting framework",
      "Audience segmentation for higher intent quality leads",
      "Performance monitoring to focus on site visits & bookings"
    ],
    images: [],
    results: [
      "Delivered strong, high-intent leads",
      "Consistent flow of positive responses",
      "Successful site visits converted into bookings"
    ],
    stats: [
      { label: "Leads", icon: <Users size={14}/>, value: 60, suffix: "+" },
      { label: "Responses", icon: <Activity size={14}/>, value: 20, suffix: "+" },
      { label: "Visits", icon: <Building size={14}/>, value: 20, suffix: "+" },
      { label: "Bookings", icon: <Presentation size={14}/>, value: 2, suffix: "" }
    ],
    chartData: [
      { stage: 'Leads', count: 60 },
      { stage: 'Responses', count: 20 },
      { stage: 'Visits', count: 20 },
      { stage: 'Bookings', count: 2 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="stage" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="count" fill="url(#goldGradient)" radius={[6,6,0,0]} name="Count" />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Lead Generation Funnel"
  },
  {
    id: 'classic',
    logo: classicCastleLogo,
    title: 'Classic Castle',
    requirements: [
      "Drive highly qualified leads for property sales",
      "Maximize conversion rate from digital platforms",
      "Generate site visits and bookings efficiently"
    ],
    whatWeDid: [
      "Targeted Meta Ads for Lead Generation",
      "Strategic follow-up & retargeting framework",
      "Audience segmentation for higher intent quality leads",
      "Performance monitoring to focus on site visits & bookings"
    ],
    images: [],
    results: [
      "Delivered strong, high-intent leads",
      "Consistent flow of positive responses",
      "Successful site visits converted into bookings"
    ],
    stats: [
      { label: "Leads", icon: <Users size={14}/>, value: 60, suffix: "+" },
      { label: "Visits", icon: <Building size={14}/>, value: 25, suffix: "+" },
      { label: "Bookings", icon: <Presentation size={14}/>, value: 3, suffix: "" }
    ],
    chartData: [
      { stage: 'Leads', count: 60 },
      { stage: 'Visits', count: 25 },
      { stage: 'Bookings', count: 3 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="stage" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="count" fill="url(#goldGradient)" radius={[6,6,0,0]} name="Count" />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Lead Generation Funnel"
  },
  {
    id: 'godrej',
    logo: godrejPropertyLogo,
    title: 'Godrej Property',
    requirements: [
      "Drive highly qualified leads for premium property sales",
      "Maximize conversion rate from digital platforms",
      "Generate site visits from interested buyers"
    ],
    whatWeDid: [
      "Targeted Meta Ads for Lead Generation",
      "Strategic follow-up & retargeting framework",
      "Audience segmentation for higher intent quality leads",
      "Performance monitoring to focus on site visits"
    ],
    images: [],
    results: [
      "Delivered strong, high-intent leads",
      "Successful site visits from potential buyers"
    ],
    stats: [
      { label: "Leads", icon: <Users size={14}/>, value: 55, suffix: "+" },
      { label: "Visits", icon: <Building size={14}/>, value: 5, suffix: "+" }
    ],
    chartData: [
      { stage: 'Leads', count: 55 },
      { stage: 'Visits', count: 5 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="stage" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="count" fill="url(#goldGradient)" radius={[6,6,0,0]} name="Count" />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Lead Generation Funnel"
  },
  {
    id: 'food',
    logo: dbFoodLogo,
    title: 'DB Mega Food Expo',
    requirements: [
      "Build a strong social media presence for the event",
      "Create hype before the expo in Raipur market",
      "Promote participating vendors & food brands",
      "Drive visitor registrations and inquiries",
      "Execute influencer marketing to expand local reach"
    ],
    whatWeDid: [
      "Complete social media strategy & content plan",
      "High-engagement reels, carousel posts & promos",
      "Visited vendors and captured byte videos on-site",
      "Collaborated with local food influencers in Raipur",
      "Executed targeted Meta ad campaigns (awareness + conversion)",
      "Delivered live event coverage & real-time updates"
    ],
    images: [],
    results: [
      "250+ organic followers gained within 20 days",
      "110K+ video views generated in 20 days",
      "185K+ reach achieved within the campaign period",
      "10,000+ footfall achieved during DB Food Fest"
    ],
    stats: [
      { label: "Video Views", icon: <Eye size={14}/>, value: 110, suffix: "K+" },
      { label: "Reach", icon: <Users size={14}/>, value: 185, suffix: "K+" },
      { label: "Footfall", icon: <Building size={14}/>, value: 10000, suffix: "+" },
      { label: "Timeline", icon: <CalendarDays size={14}/>, value: "20 Days", isText: true }
    ],
    chartData: [
      { day: 'D5',  reach: 30,  views: 15 },
      { day: 'D10', reach: 80,  views: 40 },
      { day: 'D15', reach: 140, views: 80 },
      { day: 'D20', reach: 185, views: 110 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaGold2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={BRAND.goldSecondary} stopOpacity={0.4} />
              <stop offset="95%" stopColor={BRAND.goldSecondary} stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="areaGoldPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor={BRAND.goldPrimary} stopOpacity={0.4} />
              <stop offset="95%" stopColor={BRAND.goldPrimary} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Area type="monotone" dataKey="reach" stroke={BRAND.goldSecondary} fill="url(#areaGold2)" strokeWidth={2.5} name="Reach (K)" />
          <Area type="monotone" dataKey="views" stroke={BRAND.goldPrimary} fill="url(#areaGoldPrimary)" strokeWidth={2.5} name="Views (K)" />
        </AreaChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Campaign Reach & Views Growth (in Thousands)"
  },
  {
    id: 'prop',
    logo: dbPropLogo,
    title: 'DB Mega Property Expo',
    requirements: [
      "Establish a strong digital presence for the property expo",
      "Create pre-event buzz in the Raipur real estate market",
      "Promote participating builders, developers & projects",
      "Drive visitor registrations, site visit inquiries & walk-ins",
      "Leverage local influencers to build trust and reach"
    ],
    whatWeDid: [
      "Result-oriented social media strategy with clear content calendar",
      "High-impact reels, carousel posts & promotional videos",
      "Highlighted builders, projects, offers & USPs through content",
      "Collaborated with Raipur-based real estate influencers",
      "Targeted Meta ad campaigns (Awareness + Lead Generation)",
      "Live event coverage and real-time expo updates"
    ],
    images: [
      { src: dbImg1, badge: "25K+ Reach" },
      { src: dbImg2, badge: "70K+ Reach" }
    ],
    results: [
      "Strong and consistent social media presence built",
      "Significant increase in organic followers within campaign duration",
      "Massive footfall during the property expo",
      "Increased visibility for participating builders & projects"
    ],
    stats: [
      { label: "Video Views", icon: <Eye size={14}/>, value: 100, suffix: "K+" },
      { label: "Reach", icon: <Users size={14}/>, value: 180, suffix: "K+" },
      { label: "Footfall", icon: <Building size={14}/>, value: 10000, suffix: "+" },
      { label: "Timeline", icon: <CalendarDays size={14}/>, value: "20 Days", isText: true }
    ],
    chartData: [
      { day: 'D5',  reach: 45,  views: 20 },
      { day: 'D10', reach: 90,  views: 45 },
      { day: 'D15', reach: 145, views: 75 },
      { day: 'D20', reach: 180, views: 100 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4} barSize={18}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="day" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="reach" fill="url(#goldGradient)" radius={[6,6,0,0]} name="Reach (K)" />
          <Bar dataKey="views" fill={BRAND.goldSecondary} radius={[6,6,0,0]} name="Views (K)" />
        </BarChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Campaign Growth Over 20 Days (in Thousands)"
  },
  {
    id: 'raghav',
    logo: raghavLogo,
    title: 'Raghav Public School',
    requirements: [
      "Establish a strong digital presence for the school",
      "Increase admission inquiries through digital platforms",
      "Build trust and awareness among local audiences",
      "Improve online visibility through SEO and social media",
      "Create a modern and credible brand image"
    ],
    whatWeDid: [
      "Strategic Digital Marketing Planning",
      "Targeted Lead Generation Campaigns via Meta",
      "Search Engine Optimization (SEO) & Google Profile",
      "Social Media Marketing across Instagram & Facebook",
      "Professional Photoshoot & Video Production",
      "Creative Content (Reels, Carousels, Promo Videos)",
      "Brand Building & Online Presence Enhancement"
    ],
    images: [
      { src: raghavImg1, badge: null },
      { src: raghavImg2, badge: null }
    ],
    results: [
      "Strong and professional digital presence established",
      "Significant increase in admission inquiries",
      "Improved local search visibility (Top of Google SERP)",
      "Increased parent trust through professional branding",
      "Consistent growth in online interactions and inquiries"
    ],
    stats: [
      { label: "Video Views", icon: <Eye size={14}/>, value: 300, suffix: "K+" },
      { label: "Leads", icon: <Users size={14}/>, value: 200, suffix: "+" },
      { label: "Duration", icon: <CalendarDays size={14}/>, value: "3 Months", isText: true }
    ],
    chartData: [
      { month: 'Mo 1', views: 75 },
      { month: 'Mo 2', views: 185 },
      { month: 'Mo 3', views: 300 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="month" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="views" fill="url(#goldGradient)" radius={[8,8,0,0]} barSize={40} name="Views (K)" />
          <Line type="monotone" dataKey="views" stroke={BRAND.goldSecondary} strokeWidth={2.5} dot={{ r: 5, fill: BRAND.goldSecondary, stroke: BRAND.bg, strokeWidth: 2 }} />
        </ComposedChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Cumulative Video Views (in Thousands)"
  },
  {
    id: 'mahesh',
    logo: maheshLogo,
    title: 'Mahesh Ventures',
    requirements: [
      "Establish a strong digital presence in the local real estate market",
      "Generate high-quality property inquiries through digital platforms",
      "Streamline lead management and follow-up processes",
      "Increase brand awareness and trust among potential buyers & investors",
      "Build a professional and scalable sales ecosystem"
    ],
    whatWeDid: [
      "Strategic Social Media Management & Content Planning",
      "Targeted Lead Generation Campaigns via Meta Ads",
      "Property-Focused Creative Design & Content Creation",
      "Reels, Property Walkthroughs & Video Marketing",
      "Brand Positioning & Online Presence Enhancement",
      "Custom CRM Development for Lead Management",
      "Lead Tracking, Follow-up & Sales Pipeline Setup",
      "Campaign Performance Monitoring & Optimization"
    ],
    images: [{ src: maheshImg1, badge: null }],
    results: [
      "Strong and professional digital presence established",
      "Consistent generation of qualified property inquiries",
      "Centralized lead management through a custom CRM",
      "Faster lead response and improved follow-up efficiency",
      "Increased brand visibility among local buyers and investors",
      "Higher engagement across social media platforms",
      "Enhanced trust and credibility through professional branding"
    ],
    stats: [
      { label: "Video Views", icon: <Eye size={14}/>, value: 300, suffix: "K+" },
      { label: "Qualified Leads", icon: <Users size={14}/>, value: 200, suffix: "+" },
      { label: "Properties", icon: <Building size={14}/>, value: 20, suffix: "+" }
    ],
    chartData: [
      { month: 'Mo 1', leads: 40, views: 60 },
      { month: 'Mo 2', leads: 90, views: 150 },
      { month: 'Mo 3', leads: 160, views: 230 },
      { month: 'Mo 4', leads: 200, views: 300 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={220}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="month" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip cursor={{ fill: 'rgba(200,155,60,0.1)' }} contentStyle={TOOLTIP_STYLE} />
          <Bar dataKey="leads" fill="url(#goldGradient)" radius={[6,6,0,0]} barSize={28} name="Qualified Leads" />
          <Line type="monotone" dataKey="views" stroke={BRAND.goldSecondary} strokeWidth={2.5} dot={{ r: 4, fill: BRAND.goldSecondary, stroke: BRAND.bg, strokeWidth: 2 }} name="Video Views (K)" />
        </ComposedChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Qualified Leads & Video Views Growth"
  },
  {
    id: 'aarogya',
    logo: aarogyaLogo,
    title: 'Aarogya Hospital',
    requirements: [
      "Establish a strong digital presence for the hospital",
      "Increase patient inquiries and appointment bookings through digital channels",
      "Build trust and credibility among patients and local communities",
      "Improve online visibility through SEO and search rankings",
      "Create a professional and user-friendly online experience",
      "Strengthen the hospital's brand image across digital platforms"
    ],
    whatWeDid: [
      "Strategic Digital Marketing Planning",
      "Social Media Management across Facebook & Instagram",
      "Targeted Meta Ads Campaigns for Patient Lead Generation",
      "Search Engine Optimization (SEO) for Higher Google Rankings",
      "Website Design & Development",
      "Content Creation (Health Awareness Posts, Reels & Creatives)",
      "Google Business Profile Optimization",
      "Performance Tracking & Campaign Optimization",
      "Brand Building & Online Presence Enhancement"
    ],
    images: [
      { src: aarogyaImg1, badge: "30K+ Views" },
      { src: aarogyaImg2, badge: "40K+ Views" }
    ],
    results: [
      "Professional and trustworthy digital presence established",
      "Significant increase in patient inquiries and appointment requests",
      "Improved website visibility on Google search results",
      "Higher engagement across social media platforms",
      "Enhanced patient trust through consistent online branding",
      "Increased website traffic and local search reach",
      "Improved patient experience through a modern and informative website"
    ],
    stats: [
      { label: "Patient Inquiries", icon: <Users size={14}/>, value: 200, suffix: "+" },
      { label: "Website Visitors", icon: <Eye size={14}/>, value: 10, suffix: "K+" },
      { label: "Organic Growth", icon: <TrendingUp size={14}/>, value: 150, suffix: "%+" },
      { label: "Video Views", icon: <Activity size={14}/>, value: 250, suffix: "K+" }
    ],
    chartData: [
      { month: 'Mo 1', inquiries: 40, traffic: 2000 },
      { month: 'Mo 2', inquiries: 90, traffic: 5000 },
      { month: 'Mo 3', inquiries: 150, traffic: 8000 },
      { month: 'Mo 4', inquiries: 200, traffic: 10000 },
    ],
    renderChart: (data) => (
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="areaGoldPrimary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={BRAND.goldPrimary} stopOpacity={0.35} />
              <stop offset="95%" stopColor={BRAND.goldPrimary} stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="areaGoldSecondary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={BRAND.goldSecondary} stopOpacity={0.3} />
              <stop offset="95%" stopColor={BRAND.goldSecondary} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="month" tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <YAxis tick={TICK_STYLE} tickLine={false} axisLine={false} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Area type="monotone" dataKey="inquiries" stroke={BRAND.goldSecondary} fill="url(#areaGoldSecondary)" strokeWidth={2.5} name="Patient Inquiries" />
          <Area type="monotone" dataKey="traffic" stroke={BRAND.goldPrimary} fill="url(#areaGoldPrimary)" strokeWidth={2.5} name="Website Visitors" />
        </AreaChart>
      </ResponsiveContainer>
    ),
    chartCaption: "Patient Inquiries & Website Traffic Growth"
  }
];

export default function CaseStudy() {
  const contactUrl = "/contact";
  const [modalImg, setModalImg] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const renderModal = () => {
    if (!modalImg) return null;
    return (
      <div 
        className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-5 transition-opacity" 
        onClick={() => setModalImg(null)}
      >
        <div className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl scale-100 transition-transform" onClick={e => e.stopPropagation()}>
          <button 
            className="absolute top-4 right-4 bg-white/10 border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:bg-white/20 hover:scale-110 transition-all z-10" 
            onClick={() => setModalImg(null)}
          >
            &times;
          </button>
          <img src={modalImg} alt="Enlarged snapshot" className="block max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-[#c89b3c] selection:text-[#0B1B3B]" style={{ background: BRAND.bgGradient }}>
      
      {/* Global SVG Gradients for Charts */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.goldSecondary} />
            <stop offset="100%" stopColor={BRAND.goldPrimary} />
          </linearGradient>
          <linearGradient id="navyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={BRAND.navyLight} />
            <stop offset="100%" stopColor={BRAND.navy} />
          </linearGradient>
        </defs>
      </svg>

      {renderModal()}

      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(200,155,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,0.06) 1px, transparent 1px)`,
          backgroundSize: '52px 52px'
        }} 
      />

      {/* Ambient blobs */}
      <div className="fixed -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
      <div className="fixed -bottom-[150px] -right-[150px] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(11,27,59,0.07) 0%, transparent 70%)' }} />

      {/* Hero Section */}
      <header className="relative overflow-hidden text-center pt-[150px] pb-[100px] mb-5 lg:pt-[190px] lg:pb-[120px] bg-transparent">
        <div className="absolute top-8 left-1/2 -translate-x-[60%] w-[500px] h-[300px] rounded-full blur-[60px] pointer-events-none" style={{ background: `radial-gradient(ellipse, rgba(200,155,60,0.18) 0%, transparent 70%)` }} />
        <div className="absolute top-20 left-[60%] w-[300px] h-[200px] rounded-full blur-[50px] pointer-events-none" style={{ background: `radial-gradient(ellipse, rgba(11,27,59,0.08) 0%, transparent 70%)` }} />
        
        <div className="max-w-[1240px] mx-auto px-5 relative z-10">
          <div className="max-w-[820px] mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6 border" style={{ background: 'rgba(200,155,60,0.08)', borderColor: 'rgba(200,155,60,0.3)', color: BRAND.goldPrimary, backdropFilter: 'blur(8px)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: BRAND.goldPrimary, boxShadow: `0 0 8px ${BRAND.goldPrimary}` }} />
              Performance-Driven Results
            </div>
            
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight text-center" style={{ color: BRAND.navy }}>
              Real Campaigns.{" "}
              <span className="inline-block text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(120deg, ${BRAND.goldDeep} 0%, ${BRAND.goldSecondary} 55%, ${BRAND.goldLight} 100%)` }}>
                Extraordinary Results.
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-center max-w-[660px] leading-relaxed" style={{ color: BRAND.textSecondary }}>
              Explore how we've helped businesses scale their digital presence, multiply leads,
              and drive explosive growth through precision-engineered marketing solutions.
            </p>
            
            <div className="flex gap-4 flex-wrap justify-center mt-9">
              <a href={contactUrl} className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-bold text-[0.95rem] tracking-wide transition-all duration-300 hover:-translate-y-1" style={{ background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.navyLight} 100%)`, color: BRAND.goldSecondary, boxShadow: `0 8px 24px rgba(11,27,59,0.3)` }}>
                <Sparkles size={16} /> Request Proposal
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Case Studies Container */}
      <div className="max-w-[1240px] mx-auto px-5 pb-20 grid gap-10 relative z-10">
        {CASE_STUDIES.map((study, idx) => {
          const isExpanded = expandedCard === study.id;
          
          return (
            <FadeIn delay={idx * 60} key={study.id}>
              <section className={`relative rounded-3xl p-7 lg:p-9 transition-all duration-400 ease-out border overflow-hidden ${isExpanded ? 'shadow-2xl' : 'hover:-translate-y-1 hover:shadow-xl'}`}
                style={{ 
                  background: BRAND.cardBg, 
                  backdropFilter: 'blur(24px)', 
                  borderColor: isExpanded ? BRAND.cardHoverBorder : BRAND.cardBorder,
                  boxShadow: isExpanded 
                    ? `0 4px 6px -1px rgba(11,27,59,0.06), 0 28px 56px -12px rgba(200,155,60,0.18), 0 0 0 1px rgba(200,155,60,0.1), inset 0 1px 0 rgba(255,255,255,0.95)`
                    : `0 4px 6px -1px rgba(11,27,59,0.04), 0 20px 40px -10px rgba(200,155,60,0.1), inset 0 1px 0 rgba(255,255,255,0.9)`
                }}
              >
                {/* Gold Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl" style={{ background: `linear-gradient(90deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary}, ${BRAND.goldLight})` }} />
                
                {/* Gold Glow Blob */}
                <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full blur-[40px] pointer-events-none transition-opacity duration-400" style={{ background: `radial-gradient(circle, rgba(200,155,60,0.12) 0%, transparent 70%)`, opacity: isExpanded ? 1 : 0.4 }} />

                {/* Header (Clickable) */}
                <div className="flex items-center justify-between gap-4 cursor-pointer select-none pb-0" onClick={() => toggleCard(study.id)}>
                  <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                    <img src={study.logo} alt={`${study.title} Logo`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-white rounded-2xl p-2 shrink-0 border" style={{ boxShadow: '0 2px 8px rgba(11,27,59,0.08), 0 8px 20px rgba(200,155,60,0.12)', borderColor: 'rgba(200,155,60,0.25)' }} />
                    <div className="flex flex-col justify-center items-start gap-1 flex-1 min-w-0">
                      <h2 className="font-bold text-lg sm:text-xl lg:text-2xl leading-snug break-words hyphens-auto w-full" style={{ color: BRAND.navy }}>{study.title}</h2>
                    </div>
                  </div>
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-400 border ${isExpanded ? 'rotate-180' : ''}`}
                    style={{ 
                      background: isExpanded ? `linear-gradient(135deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary})` : 'rgba(200,155,60,0.08)',
                      borderColor: isExpanded ? 'transparent' : 'rgba(200,155,60,0.3)',
                      color: isExpanded ? BRAND.navy : BRAND.goldPrimary,
                      boxShadow: isExpanded ? `0 4px 16px rgba(200,155,60,0.35)` : 'none'
                    }}
                  >
                    <ChevronDown size={24} />
                  </div>
                </div>

                {/* Collapsible Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[5000px] opacity-100 pt-7' : 'max-h-0 opacity-0 pt-0'}`}>
                  {isExpanded && <div className="h-[1px] w-full mb-7 rounded-full" style={{ background: `linear-gradient(90deg, rgba(200,155,60,0.4) 0%, rgba(212,175,55,0.15) 60%, transparent 100%)` }} />}
                  
                  <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                    
                    {/* Left Column */}
                    <div className="grid gap-5">
                      {/* Requirements */}
                      <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.06), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                        <h3 className="flex items-center gap-2 font-semibold text-[0.95rem] mb-3.5 tracking-wide" style={{ color: BRAND.navy }}><Target size={16} style={{ color: BRAND.goldPrimary }} /> Requirements</h3>
                        <ul className="space-y-2">
                          {study.requirements.map((req, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-[0.92rem] leading-relaxed" style={{ color: BRAND.textSecondary }}>
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: `linear-gradient(135deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary})`, boxShadow: `0 0 0 3px rgba(200,155,60,0.15)` }} />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* What We Did */}
                      <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.06), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                        <h3 className="flex items-center gap-2 font-semibold text-[0.95rem] mb-3.5 tracking-wide" style={{ color: BRAND.navy }}><Zap size={16} style={{ color: BRAND.goldPrimary }} /> What We Did</h3>
                        <ul className="space-y-2">
                          {study.whatWeDid.map((task, i) => (
                            <li key={i} className="relative pl-7 text-[0.92rem] leading-relaxed" style={{ color: BRAND.textSecondary }}>
                              <span className="absolute left-0 top-0.5 w-4 h-4 rounded-[4px] flex items-center justify-center font-black text-[0.65rem]" style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.navyLight})`, color: BRAND.goldSecondary }}>✓</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process (if available) */}
                      {study.process && (
                        <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.06), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                          <h3 className="flex items-center gap-2 font-semibold text-[0.95rem] mb-3.5 tracking-wide" style={{ color: BRAND.navy }}><Activity size={16} style={{ color: BRAND.goldPrimary }} /> Process</h3>
                          <ol className="space-y-2">
                            {study.process.map((step, i) => (
                              <li key={i} className="relative pl-8 text-[0.92rem] leading-relaxed" style={{ color: BRAND.textSecondary }}>
                                <span className="absolute left-0 top-0 w-5 h-5 rounded-[6px] flex items-center justify-center font-bold text-[0.7rem]" style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.navyLight})`, color: BRAND.goldSecondary, boxShadow: '0 4px 12px rgba(11,27,59,0.2)' }}>{i + 1}</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Images (if available) */}
                      {study.images && study.images.length > 0 && (
                        <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.06), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                          <h3 className="flex items-center gap-2 font-semibold text-[0.95rem] mb-3.5 tracking-wide" style={{ color: BRAND.navy }}><ImageIcon size={16} style={{ color: BRAND.goldPrimary }} /> Campaign Snapshots</h3>
                          <div className={`grid gap-3.5 mt-3.5 ${study.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                            {study.images.map((img, i) => (
                              <div key={i} className={`relative rounded-xl overflow-hidden border cursor-pointer group transition-all duration-300 hover:scale-[1.02] ${study.images.length === 1 ? 'h-auto max-h-[500px]' : 'h-[200px]'}`} style={{ borderColor: 'rgba(200,155,60,0.25)', boxShadow: '0 4px 16px rgba(11,27,59,0.08)' }} onClick={() => setModalImg(img.src)}>
                                {img.badge && (
                                  <div className="absolute top-2.5 left-2.5 text-xs font-bold px-3 py-1 rounded-full z-10 tracking-wide" style={{ background: `linear-gradient(135deg, ${BRAND.navy}, ${BRAND.navyLight})`, color: BRAND.goldSecondary, boxShadow: `0 4px 12px rgba(11,27,59,0.35)` }}>
                                    {img.badge}
                                  </div>
                                )}
                                <img src={img.src} alt="Snapshot" className={`w-full h-full block transition-transform duration-400 group-hover:scale-105 ${study.images.length === 1 ? 'object-contain bg-amber-50' : 'object-cover'}`} />
                                <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 transition-opacity duration-250 group-hover:opacity-100" style={{ background: `linear-gradient(180deg, transparent 40%, rgba(11,27,59,0.75) 100%)` }}>
                                  <span className="text-xs font-bold tracking-wider px-3.5 py-1 rounded-full border backdrop-blur-md" style={{ color: BRAND.goldSecondary, borderColor: 'rgba(200,155,60,0.4)', background: 'rgba(11,27,59,0.5)' }}>Click to Enlarge</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Right Column */}
                    <div className="grid gap-5 content-start">
                      {/* Results */}
                      <div className="rounded-2xl p-5 sm:p-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.8)', backdropFilter: 'blur(12px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.06), inset 0 1px 0 rgba(255,255,255,0.9)' }}>
                        <h3 className="flex items-center gap-2 font-semibold text-[0.95rem] mb-3.5 tracking-wide" style={{ color: BRAND.navy }}><TrendingUp size={16} style={{ color: BRAND.goldPrimary }} /> Results Achieved</h3>
                        <ul className="space-y-2 mb-5">
                          {study.results.map((res, i) => (
                            <li key={i} className="flex gap-2.5 items-start text-[0.92rem] leading-relaxed" style={{ color: BRAND.textSecondary }}>
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: `linear-gradient(135deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary})`, boxShadow: `0 0 0 3px rgba(200,155,60,0.15)` }} />
                              {res}
                            </li>
                          ))}
                        </ul>

                        {/* Stats Grid */}
                        <div className={`grid gap-3 ${study.stats.length === 4 ? 'grid-cols-2 sm:grid-cols-2 xl:grid-cols-4' : 'grid-cols-2 sm:grid-cols-3'}`}>
                          {study.stats.map((stat, i) => (
                            <div key={i} className="relative overflow-hidden rounded-xl p-3.5 sm:p-4 flex flex-col gap-1 transition-all duration-250 hover:-translate-y-0.5 group border" style={{ background: 'rgba(255,255,255,0.95)', borderColor: 'rgba(200,155,60,0.2)', boxShadow: '0 4px 16px rgba(200,155,60,0.08)' }}>
                              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-250 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary})` }} />
                              <div className="flex items-center gap-1.5 text-[0.8rem] font-medium tracking-wide" style={{ color: BRAND.textMuted }}>
                                <span style={{ color: BRAND.goldPrimary }}>{stat.icon}</span> {stat.label}
                              </div>
                              <div className="font-extrabold text-xl sm:text-2xl leading-tight tracking-tight" style={{ color: BRAND.navy }}>
                                {stat.isText ? stat.value : <CountUp end={Number(stat.value)} duration={2.5} enableScrollSpy scrollSpyOnce />}{stat.suffix}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Chart */}
                      {study.chartData && study.renderChart && (
                        <div className="relative overflow-hidden rounded-2xl p-4 sm:p-5 pt-6 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: 'rgba(255,253,245,0.85)', backdropFilter: 'blur(8px)', borderColor: 'rgba(200,155,60,0.18)', boxShadow: '0 4px 20px rgba(200,155,60,0.08)' }}>
                          <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${BRAND.goldPrimary}, ${BRAND.goldSecondary}, ${BRAND.goldLight})` }} />
                          {study.renderChart(study.chartData)}
                          <p className="text-center text-[0.8rem] mt-2.5 font-medium tracking-wide" style={{ color: BRAND.textMuted }}>{study.chartCaption}</p>
                        </div>
                      )}

                      {/* CTA Button */}
                      <div className="mt-2">
                        <a href={contactUrl} className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-[0.95rem] tracking-wide transition-all duration-300 hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${BRAND.navy} 0%, ${BRAND.navyLight} 100%)`, color: BRAND.goldSecondary, boxShadow: `0 8px 24px rgba(11,27,59,0.3)` }}>
                          Start Your Campaign <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}