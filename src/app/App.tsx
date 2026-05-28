import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import {
  Menu, X, ArrowRight, Shield, CreditCard, Train, Smartphone,
  Wifi, FileText, ChevronRight, MapPin, Mail, CheckCircle, Clock,
} from "lucide-react";
import ChinaMap from "./components/ChinaMap";
import ProvincePage from "./pages/ProvincePage";
import CityPage from "./pages/CityPage";
import { Logo } from "./components/Logo";
import { CITIES, HOT_CITIES, PROVINCES } from "./data/chinaData";
import { CITY_DETAILS } from "./data/cities";

// ── Navigation ────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Destinations", href: "#map" },
  { label: "Essentials",   href: "#essentials" },
  { label: "Itineraries",  href: "#itineraries" },
  { label: "Guides",       href: "#guides" },
];

// ── Trust bar ─────────────────────────────────────────────────────────────────

const trustItems = [
  "31 provinces covered",
  "Independent, non-sponsored",
  "Updated 2025",
  "Free to read",
  "Written for international visitors",
];

// ── First-time essentials ─────────────────────────────────────────────────────

const essentials = [
  {
    icon: FileText,
    title: "Visa & Entry",
    category: "Before You Go",
    description: "Understand which visa applies to your nationality, how to apply, and what to expect at Chinese immigration — including the 144-hour transit exemption.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    category: "Money",
    description: "China runs almost entirely on WeChat Pay and Alipay. Learn exactly how foreign visitors can link international cards to both apps before and after arriving.",
  },
  {
    icon: Train,
    title: "Getting Around",
    category: "Transport",
    description: "High-speed rail between cities, metro within them, and DiDi for everything else. A clear guide to booking, riding, and navigating without Mandarin.",
  },
  {
    icon: Smartphone,
    title: "Essential Apps",
    category: "Technology",
    description: "Google, WhatsApp, and most Western apps are blocked in China. Here is the exact list of what to download before you land — and what replaces each one.",
  },
  {
    icon: Wifi,
    title: "Internet & SIM",
    category: "Technology",
    description: "How to buy a local SIM card at the airport, configure a reliable VPN before departure, and stay connected throughout your trip.",
  },
  {
    icon: Shield,
    title: "Health & Safety",
    category: "Safety",
    description: "Emergency numbers, navigating a hospital when you don't speak Mandarin, travel insurance requirements, and day-to-day safety in Chinese cities.",
  },
];

// ── Four Ways to Experience China ─────────────────────────────────────────────

interface ThemeWay {
  id: string;
  num: string;
  title: string;
  tagline: string;
  highlights: string[];
  image: string;
  overlayFrom: string;
  accentColor: string;
}

const FOUR_WAYS: ThemeWay[] = [
  {
    id: "nature",
    num: "01",
    title: "Nature China",
    tagline: "Mist-wrapped peaks and river valleys that gave birth to ink-wash painting — experienced in person.",
    highlights: [
      "Guilin's Li River karst valleys",
      "Zhangjiajie's floating pillar mountains",
      "Yunnan's highland minority villages",
    ],
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=920&fit=crop&auto=format",
    overlayFrom: "rgba(15,30,20,0.94)",
    accentColor: "#7aaa84",
  },
  {
    id: "future",
    title: "Future China",
    num: "02",
    tagline: "Bullet trains at 350 km/h, megacity skylines, and urban ambition on a scale built nowhere else on earth.",
    highlights: [
      "Shanghai's Pudong financial district",
      "The Maglev from Pudong airport",
      "Shenzhen — a fishing village forty years ago",
    ],
    image: "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=600&h=920&fit=crop&auto=format",
    overlayFrom: "rgba(8,16,32,0.94)",
    accentColor: "#6ab8c8",
  },
  {
    id: "classical",
    title: "Classical China",
    num: "03",
    tagline: "Imperial capitals, dynastic gardens, and the accumulated weight of five thousand years of continuous civilisation.",
    highlights: [
      "The Forbidden City, Beijing",
      "The Terracotta Army, Xi'an",
      "Suzhou's private classical gardens",
    ],
    image: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=600&h=920&fit=crop&auto=format",
    overlayFrom: "rgba(28,10,6,0.94)",
    accentColor: "#B89A5E",
  },
  {
    id: "silkroad",
    title: "Silk Road China",
    num: "04",
    tagline: "Dunhuang's painted grottoes, the Taklamakan, and the oasis cities where East met West for two millennia.",
    highlights: [
      "Mogao Caves, Dunhuang",
      "Zhangye's Rainbow Mountains",
      "Kashgar's old city bazaar",
    ],
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=920&fit=crop&auto=format",
    overlayFrom: "rgba(36,16,6,0.94)",
    accentColor: "#C8A84A",
  },
];

// ── Season filter ─────────────────────────────────────────────────────────────

interface SeasonMeta {
  id: string;
  label: string;
  subtitle: string;
  provinceIds: string[];
}

const SEASONS: SeasonMeta[] = [
  {
    id: "spring", label: "Spring", subtitle: "Best in spring",
    provinceIds: ["yunnan", "sichuan", "zhejiang", "jiangxi", "anhui", "guizhou", "guangxi", "fujian", "hunan", "jiangsu"],
  },
  {
    id: "summer", label: "Summer", subtitle: "Best in summer",
    provinceIds: ["heilongjiang", "neimenggu", "xinjiang", "qinghai", "xizang", "jilin", "liaoning", "shandong", "zhejiang", "fujian"],
  },
  {
    id: "autumn", label: "Autumn", subtitle: "Best in autumn",
    provinceIds: ["beijing", "xinjiang", "neimenggu", "sichuan", "xizang", "shanxi", "jilin", "heilongjiang", "yunnan", "hebei", "gansu"],
  },
  {
    id: "winter", label: "Winter", subtitle: "Best in winter",
    provinceIds: ["heilongjiang", "yunnan", "hainan", "guangdong", "fujian", "guangxi", "chongqing"],
  },
];

// ── Itineraries ───────────────────────────────────────────────────────────────

const ITINERARIES = [
  {
    title: "The Classic Route",
    subtitle: "Beijing · Xi'an · Shanghai",
    duration: "10 days",
    type: "First-time visitors",
    description: "Three cities that collectively represent China's imperial past, ancient heartland, and global ambition. The essential first-time itinerary.",
    image: "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=720&h=460&fit=crop&auto=format",
    stops: ["Forbidden City & Great Wall", "Terracotta Army, Huaqing Palace", "The Bund, Yu Garden, Xintiandi"],
  },
  {
    title: "Natural Wonders",
    subtitle: "Guilin · Zhangjiajie · Yunnan",
    duration: "12 days",
    type: "Nature & landscape",
    description: "The landscapes that defined Chinese ink-wash painting — visited in person. Limestone karst, floating sandstone pillars, and highland villages.",
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=720&h=460&fit=crop&auto=format",
    stops: ["Li River cruise, Guilin", "Zhangjiajie National Forest Park", "Dali & Lijiang old towns"],
  },
  {
    title: "The Silk Road",
    subtitle: "Xi'an · Zhangye · Dunhuang",
    duration: "14 days",
    type: "History & frontier",
    description: "Follow the ancient trade route west from the Tang dynasty capital to China's desert frontier — past painted grottoes and rainbow-striped mountains.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=720&h=460&fit=crop&auto=format",
    stops: ["Terracotta Army & city walls, Xi'an", "Zhangye Danxia Rainbow Mountains", "Mogao Caves & Crescent Lake, Dunhuang"],
  },
];

// ── Hot-city travel metadata ───────────────────────────────────────────────────

const HOT_CITY_META: Record<string, { bestFor: string; duration: string }> = {
  beijing_city: { bestFor: "First-time visitors", duration: "3–5 days" },
  shanghai_city: { bestFor: "City & culture lovers", duration: "3–4 days" },
  guangzhou:     { bestFor: "Food enthusiasts",       duration: "2–3 days" },
  shenzhen:      { bestFor: "Tech & urban explorers", duration: "2–3 days" },
  chengdu:       { bestFor: "Nature & food lovers",   duration: "4–6 days" },
  xian:          { bestFor: "History enthusiasts",    duration: "2–3 days" },
  lijiang:       { bestFor: "Scenery & heritage",     duration: "3–4 days" },
  guilin:        { bestFor: "Landscape lovers",       duration: "3–4 days" },
};

// ── Latest guides (city IDs pulled from data) ────────────────────────────────

const LATEST_GUIDE_IDS = ["shanghai_city", "chengdu", "lijiang", "xian"];

// ── Province side panel ───────────────────────────────────────────────────────

function categoryTag(cat: string): string {
  const c = cat.toLowerCase();
  if (c.includes("natur") || c.includes("mountain") || c.includes("lake") || c.includes("forest") || c.includes("scenic")) return "Nature";
  if (c.includes("cultur") || c.includes("histor") || c.includes("heritage") || c.includes("temple") || c.includes("ancient")) return "Culture";
  return "Experience";
}

function tagColor(tag: string) {
  if (tag === "Nature") return "bg-emerald-50 text-emerald-700";
  if (tag === "Culture") return "bg-amber-50 text-amber-700";
  return "bg-blue-50 text-blue-700";
}

interface ProvincePanelProps {
  provinceId: string;
  onClose: () => void;
}

function ProvincePanel({ provinceId, onClose }: ProvincePanelProps) {
  const navigate = useNavigate();
  const province = PROVINCES[provinceId];
  if (!province) return null;

  const cities = province.featuredCities
    .map((id) => CITY_DETAILS[id])
    .filter(Boolean);

  return (
    <div
      className="absolute right-0 top-0 h-full z-30 flex flex-col"
      style={{
        width: "clamp(260px, 32%, 320px)",
        animation: "panelSlideIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards",
      }}
    >
      <style>{`
        @keyframes panelSlideIn {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <div
        className="flex-1 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/40"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Hero */}
        <div className="relative h-28 flex-shrink-0 overflow-hidden">
          <img src={province.image} alt={province.nameZh} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)" }} />
          <button
            onClick={onClose}
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/30 hover:bg-black/50 transition-colors flex items-center justify-center"
          >
            <X size={13} className="text-white" />
          </button>
          <div className="absolute bottom-2.5 left-3 right-10">
            <p className="text-white font-semibold text-sm leading-tight drop-shadow">{province.nameZh}</p>
            <p className="text-white/75 text-[10px] font-['DM_Mono']">{province.nameEn}</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          <p className="text-[10px] font-['DM_Mono'] text-muted-foreground tracking-widest uppercase mb-2.5">
            Top Attractions
          </p>
          {cities.length > 0 ? (
            <div className="flex flex-col gap-2">
              {cities.map((city) => {
                const firstCat = city.attractions?.[0]?.category ?? "";
                const tag = categoryTag(firstCat);
                return (
                  <button
                    key={city.id}
                    onClick={() => navigate(`/city/${city.id}`)}
                    className="flex items-center gap-2.5 w-full text-left rounded-xl overflow-hidden bg-secondary/50 hover:bg-secondary transition-colors group p-2"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={city.image} alt={city.nameZh} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-[12px] leading-tight truncate">{city.nameZh}</p>
                      <p className="text-muted-foreground text-[10px] font-['DM_Mono'] truncate">{city.nameEn}</p>
                      <span className={`inline-block mt-1 text-[9px] font-['DM_Mono'] px-1.5 py-0.5 rounded-full ${tagColor(tag)}`}>{tag}</span>
                    </div>
                    <ChevronRight size={13} className="text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="text-[11px] text-muted-foreground italic text-center py-4">Coming soon</p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="px-3 pb-3 pt-1 flex-shrink-0">
          <button
            onClick={() => navigate(`/province/${provinceId}`)}
            className="w-full flex items-center justify-center gap-1.5 bg-primary text-white text-xs font-medium py-2.5 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Full Province Guide <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Home page ─────────────────────────────────────────────────────────────────

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [activeSeason, setActiveSeason] = useState<string | null>(null);

  const activeSeasonMeta = SEASONS.find((s) => s.id === activeSeason) ?? null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const hotCities = HOT_CITIES.map((id) => CITIES[id]).filter(Boolean);
  const latestGuides = LATEST_GUIDE_IDS.map((id) => CITIES[id]).filter(Boolean);

  return (
    <div className="bg-background text-foreground min-h-screen font-['Plus_Jakarta_Sans']">

      {/* ── Navigation ──────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          <a href="#" className="flex-shrink-0">
            <Logo variant="nav" className={scrolled ? "" : "brightness-[10]"} />
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 tracking-wide ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#newsletter"
            className={`hidden md:inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex-shrink-0 ${
              scrolled
                ? "border border-border text-foreground hover:bg-secondary"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Get Updates
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-1.5 rounded-md transition-colors ${scrolled ? "hover:bg-secondary" : "hover:bg-white/10"}`}
            aria-label="Toggle navigation"
          >
            {menuOpen
              ? <X size={20} className={scrolled ? "" : "text-white"} />
              : <Menu size={20} className={scrolled ? "" : "text-white"} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground text-base py-3 px-2 rounded-lg hover:bg-secondary transition-colors flex items-center justify-between"
              >
                {link.label}
                <ChevronRight size={16} className="text-muted-foreground" />
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1920&h=1080&fit=crop&auto=format"
          alt="China landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient: dark bottom for text, translucent top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

        {/* Content — anchored to bottom */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 w-full">
          <p className="font-['DM_Mono'] text-white/50 text-[10px] tracking-[0.4em] uppercase mb-5">
            China Travel Compass — The Independent Guide
          </p>
          <h1 className="font-['Instrument_Serif'] text-5xl sm:text-6xl lg:text-[5.5rem] text-white leading-[1.02] tracking-tight mb-6 max-w-3xl">
            One country.<br />
            <span style={{ color: "#B89A5E" }}>Four worlds.</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            An independent guide to China's ancient capitals, mountain landscapes, future cities, and Silk Road frontier — written for first-time international visitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#map"
              className="inline-flex items-center gap-2 bg-primary text-white font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Explore Destinations <ArrowRight size={15} />
            </a>
            <a
              href="#essentials"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-white/18 transition-colors"
            >
              First-Time Essentials
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          <p className="font-['DM_Mono'] text-white text-[8px] tracking-[0.3em] uppercase rotate-90 origin-center translate-x-5">Scroll</p>
        </div>
      </section>

      {/* ── Trust bar ───────────────────────────────────────────── */}
      <div className="bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
          {trustItems.map((item, i) => (
            <span key={item} className="flex items-center gap-4 text-[10px] font-['DM_Mono'] tracking-[0.2em] uppercase text-background/60">
              {i > 0 && <span className="w-px h-3 bg-background/20 flex-shrink-0" />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── First-Time Essentials ────────────────────────────────── */}
      <section id="essentials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
                Before You Go
              </p>
              <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight mb-4">
                What every first-time visitor needs to know
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Six practical guides covering payments, transport, connectivity, and safety — the things guidebooks skip.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {essentials.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-card border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/25 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="font-['DM_Mono'] text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="font-['DM_Mono'] text-primary text-[9px] tracking-[0.2em] uppercase mb-2">{item.category}</p>
                  <h3 className="font-semibold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                  <div className="flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read the guide <ArrowRight size={11} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Four Ways to Experience China ────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="font-['DM_Mono'] text-white/40 text-[10px] tracking-[0.35em] uppercase mb-4">
              Ways to Travel
            </p>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-white leading-tight mb-4">
              Four ways to experience China
            </h2>
            <p className="text-white/55 text-base leading-relaxed">
              China defies a single narrative. No two trips look the same — choose the version that speaks to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FOUR_WAYS.map((way) => (
              <a
                key={way.id}
                href="#map"
                className="relative rounded-2xl overflow-hidden group cursor-pointer block"
                style={{ minHeight: 500 }}
              >
                {/* Background image */}
                <img
                  src={way.image}
                  alt={way.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${way.overlayFrom} 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.1) 100%)`,
                  }}
                />
                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5" style={{ minHeight: 500 }}>
                  <p
                    className="font-['DM_Mono'] text-[10px] tracking-[0.3em] uppercase mb-3 opacity-80"
                    style={{ color: way.accentColor }}
                  >
                    {way.num}
                  </p>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-white leading-tight mb-2">
                    {way.title}
                  </h3>
                  <p className="text-white/60 text-[13px] leading-relaxed mb-4">
                    {way.tagline}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {way.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-[11px] font-['DM_Mono'] leading-relaxed"
                        style={{ color: way.accentColor }}
                      >
                        — {h}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center gap-1.5 text-[12px] font-medium transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: way.accentColor }}
                  >
                    Explore <ArrowRight size={11} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore China by Map ─────────────────────────────────── */}
      <section id="map" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
                Interactive Map
              </p>
              <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight">
                Explore China by region
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Click any province to see cities, highlights, and full travel guides.
            </p>
          </div>

          {/* Season filter */}
          <div className="mb-5 space-y-3">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveSeason(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  activeSeason === null
                    ? "bg-foreground text-background border-foreground"
                    : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                All Seasons
              </button>
              {SEASONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSeason((prev) => (prev === s.id ? null : s.id))}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    activeSeason === s.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {activeSeasonMeta && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-muted-foreground font-['DM_Mono'] whitespace-nowrap">
                  {activeSeasonMeta.subtitle} —
                </span>
                {activeSeasonMeta.provinceIds
                  .filter((id, i, arr) => arr.indexOf(id) === i)
                  .map((id) => {
                    const prov = PROVINCES[id];
                    if (!prov) return null;
                    const hasCoverage = prov.featuredCities.length > 0;
                    return (
                      <span
                        key={id}
                        className={`text-[11px] px-2.5 py-0.5 rounded-full border font-['DM_Mono'] ${
                          hasCoverage
                            ? "bg-primary/8 text-primary border-primary/20"
                            : "bg-secondary text-muted-foreground border-border"
                        }`}
                      >
                        {prov.nameEn}
                      </span>
                    );
                  })}
              </div>
            )}
          </div>

          {/* Map */}
          <div className="relative bg-[#EFE7D8] rounded-2xl overflow-hidden border border-border">
            <ChinaMap
              onProvinceSelect={(id) => setSelectedProvince((prev) => (prev === id ? null : id))}
              selectedProvinceId={selectedProvince}
              seasonFilter={activeSeasonMeta ? { season: activeSeasonMeta.id, provinceIds: activeSeasonMeta.provinceIds } : null}
            />
            {selectedProvince && (
              <ProvincePanel
                provinceId={selectedProvince}
                onClose={() => setSelectedProvince(null)}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── Popular First-Time Stops ─────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
                Featured destinations
              </p>
              <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight">
                Popular first-time stops
              </h2>
            </div>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
            {hotCities.map((city) => {
              const meta = HOT_CITY_META[city.id];
              return (
                <a
                  key={city.id}
                  href={`/city/${city.id}`}
                  onClick={(e) => { e.preventDefault(); window.location.href = `/city/${city.id}`; }}
                  className="flex-shrink-0 snap-start w-[78vw] sm:w-[46vw] lg:w-[23%] rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300 block group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={city.image}
                      alt={city.nameEn}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="font-['DM_Mono'] text-white/60 text-[10px] tracking-widest">{city.nameZh}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-['Instrument_Serif'] text-foreground text-xl leading-tight mb-1.5">{city.nameEn}</p>
                    <p className="text-muted-foreground text-[13px] leading-relaxed mb-4 line-clamp-2">{city.tagline}</p>
                    {meta && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-['DM_Mono'] text-primary bg-primary/8 px-2.5 py-1 rounded-full border border-primary/15">
                          {meta.bestFor}
                        </span>
                        <span className="text-[10px] font-['DM_Mono'] text-muted-foreground flex items-center gap-1">
                          <Clock size={9} /> {meta.duration}
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Suggested Itineraries ────────────────────────────────── */}
      <section id="itineraries" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
              Suggested Itineraries
            </p>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight mb-4">
              Three ways to spend your time
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Structured routes built around what first-time visitors most want to see, with enough flexibility to make each your own.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ITINERARIES.map((itin, i) => (
              <div
                key={itin.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={itin.image}
                    alt={itin.title}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-3 left-4">
                    <span className="font-['DM_Mono'] text-white/70 text-[9px] tracking-[0.3em] uppercase">{itin.type}</span>
                  </div>
                  <div className="absolute bottom-3 right-4">
                    <span className="font-['DM_Mono'] text-white text-xs bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                      {itin.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="font-['DM_Mono'] text-primary text-[9px] tracking-[0.25em] uppercase mb-2">
                    {itin.subtitle}
                  </p>
                  <h3 className="font-['Instrument_Serif'] text-2xl text-foreground mb-3 leading-tight">
                    {itin.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {itin.description}
                  </p>
                  {/* Stops */}
                  <div className="space-y-2 border-t border-border pt-4">
                    {itin.stops.map((stop, j) => (
                      <div key={stop} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['DM_Mono'] text-primary text-[8px] font-bold">{j + 1}</span>
                        </span>
                        <p className="text-foreground/80 text-xs leading-snug">{stop}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Travel Guides ─────────────────────────────────── */}
      <section id="guides" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
                Travel Guides
              </p>
              <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight">
                Latest city guides
              </h2>
            </div>
            <a
              href="#map"
              className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              All destinations <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestGuides.map((city, i) => (
              <a
                key={city.id}
                href={`/city/${city.id}`}
                onClick={(e) => { e.preventDefault(); window.location.href = `/city/${city.id}`; }}
                className="group block rounded-2xl overflow-hidden border border-border bg-background hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden relative">
                  <img
                    src={city.image}
                    alt={city.nameEn}
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="font-['DM_Mono'] text-[9px] tracking-[0.2em] uppercase text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      City Guide
                    </span>
                  </div>
                </div>
                {/* Text */}
                <div className="p-4">
                  <p className="font-['DM_Mono'] text-muted-foreground text-[9px] tracking-widest uppercase mb-1.5">
                    {city.provinceZh.replace("省","").replace("市","")} · {city.nameZh}
                  </p>
                  <h4 className="font-['Instrument_Serif'] text-lg text-foreground leading-tight mb-1.5">
                    {city.nameEn}
                  </h4>
                  <p className="text-muted-foreground text-[12px] leading-relaxed line-clamp-2">
                    {city.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-primary text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read guide <ArrowRight size={10} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────────── */}
      <section id="newsletter" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-lg">
            <p className="font-['DM_Mono'] text-primary text-[10px] tracking-[0.35em] uppercase mb-4">
              Stay Informed
            </p>
            <h2 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-foreground leading-tight mb-4">
              New guides, delivered.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              We publish new city guides and seasonal travel updates. No marketing, no spam — just useful information for people planning a trip to China.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 bg-card border border-primary/20 rounded-2xl px-5 py-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">You're on the list.</p>
                  <p className="text-muted-foreground text-xs mt-0.5">We'll be in touch when new guides are published.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3.5 bg-card border border-border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary text-white font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
            <p className="text-muted-foreground text-[11px] mt-3 font-['DM_Mono']">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
            <a href="#">
              <Logo variant="footer" className="brightness-[10]" />
            </a>
            <div className="flex flex-wrap gap-x-7 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/50 hover:text-background/90 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-['DM_Mono'] text-[10px] tracking-wide text-background/35 uppercase">
              © 2025 China Travel Compass · Free to use
            </p>
            <p className="text-[11px] text-background/30 max-w-sm leading-relaxed">
              Information is provided for guidance only. Always verify visa and entry requirements with official sources.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Root app ──────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/province/:id" element={<ProvincePage />} />
        <Route path="/city/:id" element={<CityPage />} />
      </Routes>
    </BrowserRouter>
  );
}
