import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import {
  Menu, X, ArrowRight, Shield, CreditCard, Train, Smartphone,
  Wifi, FileText, Utensils, MessageSquare, BookOpen, Users, Bot,
  Globe, Star, GraduationCap, Briefcase, Lock,
  CheckCircle, Sparkles, Plane, ChevronRight, MapPin, Mail,
} from "lucide-react";
import ChinaMap from "./components/ChinaMap";
import ProvincePage from "./pages/ProvincePage";
import CityPage from "./pages/CityPage";
import { CITIES, HOT_CITIES } from "./data/chinaData";

// ── Static data ──────────────────────────────────────────────────────────────

const personas = [
  { icon: Plane, title: "First-Time Visitors", subtitle: "From Europe & North America", description: "You want to understand how daily life actually works in China before you land — payments, transport, local apps, and cultural expectations.", bullets: ["WeChat Pay & Alipay for foreigners", "Getting a SIM card on arrival", "Visa & border entry"], color: "bg-primary/8 text-primary" },
  { icon: Briefcase, title: "Business Travelers", subtitle: "Corporate & conference visits", description: "You need to navigate professional settings efficiently, understand business customs, stay connected through the Great Firewall, and move fast.", bullets: ["Business etiquette & card exchange", "VPN setup before arrival", "Corporate transport guide"], color: "bg-amber-50 text-amber-700" },
  { icon: GraduationCap, title: "International Students", subtitle: "Arriving to study in China", description: "You're settling in for months, not days. You need to build a real local life quickly — registering with authorities, finding affordable food, and navigating campuses.", bullets: ["Residence registration steps", "Affordable daily-life apps", "Student transport discounts"], color: "bg-emerald-50 text-emerald-700" },
];

const essentials = [
  { icon: FileText, title: "Visa & Entry", description: "Understand the visa types that apply to your nationality, step-by-step application guidance, and what to expect at the border.", tag: "Start here", tagColor: "bg-primary/10 text-primary" },
  { icon: CreditCard, title: "Payments", description: "China runs on WeChat Pay and Alipay. Learn exactly how foreigners can now link international cards to both apps before and after arrival.", tag: "Essential", tagColor: "bg-primary/10 text-primary" },
  { icon: Train, title: "Transport", description: "High-speed rail, city metro, and DiDi ride-hailing — the fastest and most affordable ways to move around China, explained clearly.", tag: "Everyday", tagColor: "bg-secondary text-muted-foreground" },
  { icon: Smartphone, title: "Apps in China", description: "Google, Uber, and WhatsApp don't work here. Here's the exact list of what to download before you land, and what replaces each app.", tag: "Must-read", tagColor: "bg-primary/10 text-primary" },
  { icon: Wifi, title: "Internet & SIM", description: "How to buy a local SIM card at the airport, configure a reliable VPN, and stay connected to the rest of the world during your trip.", tag: "Prepare ahead", tagColor: "bg-amber-50 text-amber-700" },
  { icon: Shield, title: "Safety & Emergency", description: "Emergency numbers, navigating a hospital when you don't speak Mandarin, travel insurance essentials, and staying safe day-to-day.", tag: "Important", tagColor: "bg-secondary text-muted-foreground" },
];

const foodCards = [
  { icon: Utensils, title: "Chinese Food Guide", description: "Regional cuisines demystified — from Peking Duck in Beijing to Mapo Tofu in Chengdu. How to order without Mandarin, allergy phrases, and must-try dishes by city.", tag: "8 cuisines covered" },
  { icon: Users, title: "Dining Etiquette", description: "How to behave at a Chinese table: sharing dishes, the art of toasting with baijiu, refusing food graciously, and what signals respect to your hosts.", tag: "Social skills" },
  { icon: BookOpen, title: "Local Customs", description: "Gift-giving rules, temple behaviour, bargaining etiquette, and everyday gestures that mean something very different in China than at home.", tag: "Cultural context" },
  { icon: MessageSquare, title: "Useful Phrases", description: "50 essential Mandarin phrases with pinyin pronunciation guides. Covers food ordering, transport, shopping, emergencies, and daily courtesy.", tag: "50 phrases" },
];

const tools = [
  { icon: Bot, title: "Ask China AI", description: "An AI assistant trained on China travel knowledge — ask anything from visa edge cases to what to eat in a Sichuan restaurant.", featured: true },
  { icon: Utensils, title: "Menu Decoder", description: "Point your phone at any Chinese menu for instant English translations with dish descriptions and allergy flags.", featured: false },
  { icon: Train, title: "Train Ticket Guide", description: "Step-by-step walkthrough for booking high-speed rail on 12306, the official Chinese booking platform.", featured: false },
  { icon: Globe, title: "Place Name Translator", description: "Convert English place names to Chinese characters and pinyin — so your taxi driver knows exactly where to go.", featured: false },
  { icon: Star, title: "Local Review Digest", description: "English summaries of Dianping (China's Yelp) reviews, so you eat and stay where locals actually recommend.", featured: false },
];

const packs = [
  { icon: MapPin, title: "Shanghai Starter Pack", subtitle: "Your first 72 hours", description: "Everything you need to land in Pudong, reach your hotel, get a SIM, set up payments, and confidently explore the city in three days.", includes: ["Arrival checklist", "SIM & payment setup guide", "Day 1–3 itinerary", "Key phrases for Shanghai"], dark: false },
  { icon: Globe, title: "China Essentials Pack", subtitle: "Complete first-timer guide", description: "The definitive resource for first-time visitors. Covers every practical need from visa application to leaving the country.", includes: ["Full visa walkthrough", "All 6 travel essentials", "3-city suggested itinerary", "Emergency contacts sheet"], dark: true },
  { icon: Briefcase, title: "Business Visitor Pack", subtitle: "For professional trips", description: "Tailored for corporate visitors. Business card etiquette, meeting customs, WeChat for professionals, and where to stay in each city.", includes: ["Business etiquette guide", "Corporate transport tips", "VPN & connectivity setup", "Professional dining guide"], dark: false },
];

const navLinks = [
  { label: "Explore Map", href: "#map" },
  { label: "Essentials", href: "#essentials" },
  { label: "Food & Culture", href: "#food" },
  { label: "Tools", href: "#tools" },
  { label: "Packs", href: "#packs" },
];

// ── Home page ────────────────────────────────────────────────────────────────

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const hotCities = HOT_CITIES.map((id) => CITIES[id]).filter(Boolean);

  return (
    <div className="bg-background text-foreground min-h-screen font-['Plus_Jakarta_Sans']">

      {/* ── Navigation ─────────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="font-['Instrument_Serif'] text-white text-base leading-none select-none">解</span>
            </span>
            <span className="font-semibold text-foreground text-base tracking-tight">China Decoder</span>
          </a>
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
            ))}
          </div>
          <a href="#waitlist" className="hidden md:inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex-shrink-0">
            Join Early Access
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5 rounded-md hover:bg-secondary transition-colors" aria-label="Toggle navigation">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-border px-4 pt-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-foreground text-base py-3 px-2 rounded-lg hover:bg-secondary transition-colors flex items-center justify-between">
                {link.label}
                <ChevronRight size={16} className="text-muted-foreground" />
              </a>
            ))}
            <a href="#waitlist" onClick={() => setMenuOpen(false)} className="mt-3 bg-primary text-white font-medium text-sm px-4 py-3.5 rounded-lg text-center hover:bg-primary/90 transition-colors">
              Join Early Access
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero + Map ─────────────────────────────────────────────── */}
      <section id="map" className="pt-20 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/8 text-primary text-xs font-['DM_Mono'] tracking-wider px-3 py-1.5 rounded-full mb-4 border border-primary/12">
              <Sparkles size={11} />
              点击省份探索旅行攻略
            </div>
            <h1 className="font-['Instrument_Serif'] text-[2.6rem] sm:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-3">
              探索<em className="text-primary not-italic">中国</em>的每一个角落
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              点击地图上的省份，获取当地旅行攻略 — 景点、交通、美食，一应俱全。
            </p>
          </div>

          {/* Interactive map */}
          <div className="bg-[#ddeeff] rounded-2xl overflow-hidden shadow-sm border border-border/50 mb-2">
            <ChinaMap />
          </div>
          <p className="text-center text-xs font-['DM_Mono'] text-muted-foreground mt-2 mb-8">
            深色省份已有完整攻略 · 点击即可查看
          </p>

          {/* ── Hot cities ─────────────────────────────────────────── */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-1">热门目的地</p>
                <h2 className="font-['Instrument_Serif'] text-2xl sm:text-3xl text-foreground">外国旅客最爱的城市</h2>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: "none" }}>
              {hotCities.map((city) => (
                <a
                  key={city.id}
                  href={`/city/${city.id}`}
                  onClick={(e) => { e.preventDefault(); window.location.href = `/city/${city.id}`; }}
                  className="flex-shrink-0 snap-start w-[72vw] sm:w-[44vw] lg:w-[22%] rounded-xl overflow-hidden relative bg-muted block group"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={city.image} alt={city.nameEn} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="font-['Instrument_Serif'] text-white text-lg leading-tight">{city.nameZh}</p>
                      <p className="text-white/60 text-[10px] font-['DM_Mono'] tracking-wider mt-0.5">{city.nameEn} · {city.provinceZh.replace("省","").replace("市","")}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who This Is For ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-3">Who this is for</p>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-foreground">Built for every kind of first-timer.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personas.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/25 transition-colors duration-200">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${p.color}`}><Icon size={18} /></div>
                  <h3 className="font-semibold text-foreground text-base mb-0.5">{p.title}</h3>
                  <p className="text-muted-foreground text-xs font-['DM_Mono'] tracking-wide mb-3">{p.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="space-y-2">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle size={13} className="text-primary flex-shrink-0 mt-0.5" />{b}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Travel Essentials ──────────────────────────────────────── */}
      <section id="essentials" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-3">Before you go</p>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-foreground">Travel Essentials</h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">Six things every visitor must know before arriving in China.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {essentials.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center flex-shrink-0"><Icon size={18} className="text-primary" /></div>
                    <span className={`text-[10px] font-['DM_Mono'] tracking-wide px-2 py-1 rounded-full ${item.tagColor}`}>{item.tag}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read guide <ArrowRight size={12} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food & Culture ─────────────────────────────────────────── */}
      <section id="food" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-3">Eat & understand</p>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-foreground">Food & Culture</h2>
            </div>
            <div className="lg:max-w-xs rounded-xl overflow-hidden h-24 relative bg-muted flex-shrink-0 w-full lg:w-auto hidden sm:block">
              <img src="https://images.unsplash.com/photo-1767629135874-308377aaf542?w=400&h=160&fit=crop&auto=format" alt="Chinese market" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center px-4">
                <p className="text-white text-sm font-medium">Navigate local life with confidence.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foodCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-primary/8 rounded-lg flex items-center justify-center"><Icon size={18} className="text-primary" /></div>
                    <span className="text-[10px] font-['DM_Mono'] tracking-wide text-muted-foreground bg-secondary px-2 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Read guide <ArrowRight size={12} /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tools ──────────────────────────────────────────────────── */}
      <section id="tools" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-3">Coming soon</p>
              <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-background">Tools for Smarter Travel</h2>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-['DM_Mono'] text-background/50 border border-background/20 px-3 py-1.5 rounded-full self-start sm:self-auto">
              <Sparkles size={10} />AI-powered tools in development
            </span>
          </div>
          <div className="bg-primary rounded-xl p-6 sm:p-8 mb-4 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0"><Bot size={22} className="text-white" /></div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-white text-lg">Ask China AI</h3>
                <span className="text-[9px] font-['DM_Mono'] tracking-wider bg-white/20 text-white px-2 py-0.5 rounded-full uppercase">Featured tool</span>
              </div>
              <p className="text-white/75 text-sm leading-relaxed">An AI assistant trained on China travel knowledge — ask anything from visa edge cases to what to eat at a Sichuan restaurant.</p>
            </div>
            <a href="#waitlist" className="flex-shrink-0 inline-flex items-center gap-1.5 bg-white text-primary font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap">
              Join waitlist <ArrowRight size={13} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {tools.slice(1).map((tool) => {
              const Icon = tool.icon;
              return (
                <div key={tool.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/8 transition-colors">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center mb-4"><Icon size={16} className="text-background/70" /></div>
                  <h3 className="font-semibold text-background text-sm mb-1.5">{tool.title}</h3>
                  <p className="text-background/50 text-xs leading-relaxed">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Travel Packs ───────────────────────────────────────────── */}
      <section id="packs" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-3">Curated resources</p>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-foreground mb-2">Travel Packs</h2>
            <p className="text-muted-foreground text-sm max-w-md">Everything for your trip type, bundled in one place.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {packs.map((pack) => {
              const Icon = pack.icon;
              return (
                <div key={pack.title} className={`rounded-xl p-6 flex flex-col border transition-all duration-200 ${pack.dark ? "bg-foreground text-background border-transparent" : "bg-card text-foreground border-border hover:shadow-md hover:border-primary/20"}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${pack.dark ? "bg-white/10" : "bg-primary/8"}`}>
                    <Icon size={18} className={pack.dark ? "text-background/80" : "text-primary"} />
                  </div>
                  <div className="mb-4">
                    <p className={`text-[10px] font-['DM_Mono'] tracking-wider uppercase mb-1 ${pack.dark ? "text-background/50" : "text-muted-foreground"}`}>{pack.subtitle}</p>
                    <h3 className={`font-semibold text-lg mb-2 ${pack.dark ? "text-background" : "text-foreground"}`}>{pack.title}</h3>
                    <p className={`text-sm leading-relaxed ${pack.dark ? "text-background/65" : "text-muted-foreground"}`}>{pack.description}</p>
                  </div>
                  <div className="space-y-2 mb-6 flex-1">
                    {pack.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle size={13} className="flex-shrink-0 mt-0.5 text-primary" />
                        <span className={`text-xs ${pack.dark ? "text-background/70" : "text-muted-foreground"}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#waitlist" className={`w-full text-center text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-1.5 ${pack.dark ? "bg-primary text-white hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"}`}>
                    Get early access <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Waitlist ───────────────────────────────────────────────── */}
      <section id="waitlist" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-4">Early access</p>
            <h2 className="font-['Instrument_Serif'] text-3xl sm:text-4xl text-foreground mb-4 leading-tight">Planning your first trip to China?</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">Join early access and help shape China Decoder. Be first to get new city guides, tools, and travel packs — plus a direct line to tell us what you actually need.</p>
            {submitted ? (
              <div className="flex items-center gap-3 bg-card border border-primary/20 rounded-xl px-5 py-4">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"><CheckCircle size={18} className="text-primary" /></div>
                <div>
                  <p className="font-medium text-foreground text-sm">You're on the list!</p>
                  <p className="text-muted-foreground text-xs mt-0.5">We'll be in touch soon. Thank you for joining early.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="w-full pl-10 pr-4 py-3.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <button type="submit" className="bg-primary text-white font-medium text-sm px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                  Join Early Access <ArrowRight size={14} />
                </button>
              </form>
            )}
            <p className="text-muted-foreground text-xs mt-3 font-['DM_Mono']">No spam. Unsubscribe any time. We respect your privacy.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <a href="#" className="flex items-center gap-2.5">
              <span className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
                <span className="font-['Instrument_Serif'] text-white text-sm leading-none select-none">解</span>
              </span>
              <span className="font-semibold text-foreground text-sm">China Decoder</span>
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs font-['DM_Mono'] text-muted-foreground">© 2025 China Decoder · Free to use</p>
            <p className="text-xs text-muted-foreground">Information is provided for guidance only. Always verify visa and entry requirements with official sources.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ── Root app with routing ────────────────────────────────────────────────────

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
