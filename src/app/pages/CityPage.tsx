import { useState, useRef, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  ArrowLeft, ChevronRight, MapPin, Camera, Train,
  Utensils, Lightbulb, CheckCircle, ArrowRight, CalendarDays, Hotel, Compass,
} from "lucide-react";
import { CITY_DETAILS, type CityDetail } from "../data/cities";
import { CITIES } from "../data/chinaData";

// ── Tab config ───────────────────────────────────────────────────────────────
const TABS = [
  { id: "attractions",  label: "Attractions",   icon: Camera },
  { id: "transport",    label: "Getting There", icon: Train },
  { id: "food",         label: "Food & Drink",  icon: Utensils },
  { id: "plan",         label: "Plan Your Trip",icon: Lightbulb },
  { id: "daytrips",     label: "Day Trips",     icon: Compass },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ── Adapter: convert legacy CityInfo → CityDetail ───────────────────────────
function adaptLegacyCity(city: (typeof CITIES)[string]): CityDetail {
  return {
    id: city.id,
    nameZh: city.nameZh,
    nameEn: city.nameEn,
    province: city.province,
    provinceZh: city.provinceZh,
    tagline: city.tagline,
    description: city.description,
    image: city.image,
    heroImage: city.heroImage,
    highlights: [],
    attractions: city.attractions.map((a) => ({
      name: a.nameEn,
      description: a.description,
      category: a.tag,
    })),
    food: city.food.map((f) => ({
      name: f.nameEn,
      nameZh: f.name,
      description: f.description,
      must: f.must,
    })),
    transportation: city.transport,
    bestSeason: "",
    accommodation: "",
    travelTips: [],
  };
}

// ── HeroMedia ────────────────────────────────────────────────────────────────
// Layer order (bottom → top):
//   0. heroImage  — always visible, acts as seamless placeholder while video buffers
//   1. video(s)   — fade in over the image once canplay fires; crossfade between clips
//   2. gradient + text (managed by parent, zIndex 10/11)
type VideoPhase = "v1" | "crossfade" | "v2";

const FADE_IN  = "opacity 0.8s cubic-bezier(0.4,0,0.2,1)";
const FADE_X   = "opacity 1.4s cubic-bezier(0.4,0,0.2,1)";

function HeroMedia({ city }: { city: CityDetail }) {
  const videos = city.heroVideos ?? [];

  // Whether video 1 has buffered enough to show
  const [v1Ready, setV1Ready] = useState(false);
  // Whether video 2 has buffered enough to show
  const [v2Ready, setV2Ready] = useState(false);
  // Sequence phase
  const [phase, setPhase] = useState<VideoPhase>("v1");

  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);

  // v1 finished → crossfade to v2
  const handleV1Ended = useCallback(() => {
    if (videos.length < 2) return;
    const v2 = vid2Ref.current;
    if (v2) { v2.currentTime = 0; v2.play().catch(() => {}); }
    setPhase("crossfade");
    setTimeout(() => setPhase("v2"), 1400);
  }, [videos.length]);

  // Base image is always the bottom layer
  const baseImage = (
    <img
      src={city.heroImage}
      alt={city.nameEn}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
    />
  );

  // ── No video ──────────────────────────────────────────────────────────────
  if (videos.length === 0) return baseImage;

  // ── Single video ──────────────────────────────────────────────────────────
  if (videos.length === 1) {
    return (
      <>
        {baseImage}
        <video
          src={videos[0]}
          autoPlay loop muted playsInline
          preload="auto"
          onCanPlay={() => setV1Ready(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: v1Ready ? 1 : 0,
            transition: v1Ready ? FADE_IN : "none",
            zIndex: 1,
          }}
        />
      </>
    );
  }

  // ── Multi-video crossfade sequence ────────────────────────────────────────
  return (
    <>
      {baseImage}

      {/* Video 1 — plays once, fades in on canplay, fades out at end */}
      <video
        ref={vid1Ref}
        src={videos[0]}
        autoPlay muted playsInline
        preload="auto"
        onCanPlay={() => setV1Ready(true)}
        onEnded={handleV1Ended}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          // fade-in when ready; fade-out during crossfade
          opacity: !v1Ready ? 0 : phase === "v2" ? 0 : 1,
          transition: !v1Ready
            ? "none"
            : phase === "crossfade"
            ? FADE_X
            : FADE_IN,
          zIndex: 1,
        }}
      />

      {/* Video 2 — pre-loaded silently; fades in during crossfade, then loops */}
      <video
        ref={vid2Ref}
        src={videos[1]}
        muted playsInline loop
        preload="auto"
        onCanPlay={() => setV2Ready(true)}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover",
          opacity: phase === "v1" || !v2Ready ? 0 : 1,
          transition: phase === "crossfade" ? FADE_X : "none",
          zIndex: phase === "v2" ? 2 : 1,
        }}
      />
    </>
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export default function CityPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("attractions");

  // Primary source: cities.ts — fallback: legacy chinaData.ts
  const raw = id ? (CITY_DETAILS[id] ?? (CITIES[id] ? adaptLegacyCity(CITIES[id]) : null)) : null;
  const city: CityDetail | null = raw;

  if (!city) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <MapPin size={40} className="text-muted-foreground" />
        <p className="text-muted-foreground">City information not found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(`/province/${city.province}`)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            {city.provinceZh}
          </button>
          <span className="text-border">|</span>
          {(() => {
            // Strip suffixes to get the bare province name (e.g. "北京市" → "北京")
            const provinceShort = city.provinceZh
              .replace("省", "").replace("市", "")
              .replace("壮族自治区", "").replace("维吾尔自治区", "")
              .replace("回族自治区", "").replace("自治区", "");
            // For municipalities the city IS the province — skip the duplicate middle level
            const isMunicipality = city.nameZh === provinceShort;
            return (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Link to="/" className="hover:text-foreground">China Decoder</Link>
                {!isMunicipality && (
                  <>
                    <ChevronRight size={12} />
                    <Link to={`/province/${city.province}`} className="hover:text-foreground">
                      {provinceShort}
                    </Link>
                  </>
                )}
                <ChevronRight size={12} />
                <span className="text-foreground font-medium">
                  {city.nameZh}{isMunicipality ? "" : ` · ${city.nameEn}`}
                </span>
              </div>
            );
          })()}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="pt-14">
        <div className="h-[340px] sm:h-[420px] relative overflow-hidden">
          {/* Video / image layer */}
          <HeroMedia city={city} />

          {/* Gradient overlay — sits above video(s) */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
            style={{ zIndex: 10 }}
          />

          {/* Text — sits above gradient */}
          <div
            className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6"
            style={{ zIndex: 11 }}
          >
            <p className="font-['DM_Mono'] text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">
              {city.nameEn} · {city.provinceZh}
            </p>
            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-6xl text-white leading-none mb-2">
              {city.nameZh}
            </h1>
            <p className="text-white/75 text-base italic">{city.tagline}</p>
          </div>
        </div>
      </div>

      {/* ── Description + highlights ────────────────────────────────────── */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row gap-8">
          <p className="text-muted-foreground text-base leading-relaxed md:max-w-xl">
            {city.description}
          </p>
          {city.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 md:ml-auto md:self-start">
              {city.highlights.map((h) => (
                <span
                  key={h}
                  className="text-xs font-['DM_Mono'] bg-primary/8 text-primary border border-primary/20 px-3 py-1.5 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Tabs ────────────────────────────────────────────────────────── */}
      <div className="sticky top-14 z-40 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab content ─────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ATTRACTIONS */}
        {activeTab === "attractions" && (
          <div className="space-y-4">
            <SectionHeader
              label="Must-See Sights"
              title={`Top attractions in ${city.nameEn}`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.attractions.map((a, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-foreground text-base leading-snug">
                      {a.name}
                    </h3>
                    <span className="text-[10px] font-['DM_Mono'] tracking-wide bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {a.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GETTING THERE */}
        {activeTab === "transport" && (
          <div>
            <SectionHeader
              label="Getting There & Around"
              title={`How to reach ${city.nameEn}`}
            />
            <div className="space-y-3 mt-6">
              {city.transportation.map((t, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl px-6 py-5 flex items-start gap-4"
                >
                  <div className="text-2xl flex-shrink-0">{t.mode.split(" ")[0]}</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {t.mode.replace(/^[^\s]+\s/, "")}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FOOD & DRINK */}
        {activeTab === "food" && (
          <div>
            <SectionHeader
              label="Food & Drink"
              title={`What to eat in ${city.nameEn}`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {city.food.map((f, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground text-base">
                        {f.name}
                      </h3>
                      <p className="text-muted-foreground text-xs font-['DM_Mono']">
                        {f.nameZh}
                      </p>
                    </div>
                    {f.must && (
                      <span className="text-[10px] font-['DM_Mono'] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        Must Try
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PLAN YOUR TRIP */}
        {activeTab === "plan" && (
          <div className="space-y-8">
            <SectionHeader
              label="Plan Your Trip"
              title={`Everything you need to know about ${city.nameEn}`}
            />

            {/* Best season */}
            {city.bestSeason && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CalendarDays size={16} className="text-primary" />
                  <h3 className="font-semibold text-foreground text-sm tracking-wide uppercase font-['DM_Mono']">
                    Best Time to Visit
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {city.bestSeason}
                </p>
              </div>
            )}

            {/* Accommodation */}
            {city.accommodation && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Hotel size={16} className="text-primary" />
                  <h3 className="font-semibold text-foreground text-sm tracking-wide uppercase font-['DM_Mono']">
                    Where to Stay
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {city.accommodation}
                </p>
              </div>
            )}

            {/* Travel tips */}
            {city.travelTips.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb size={16} className="text-primary" />
                  <h3 className="font-semibold text-foreground text-sm tracking-wide uppercase font-['DM_Mono']">
                    Insider Tips
                  </h3>
                </div>
                <div className="space-y-3">
                  {city.travelTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback for legacy cities without plan data */}
            {!city.bestSeason && !city.accommodation && city.travelTips.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <Lightbulb size={32} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">Detailed travel tips coming soon.</p>
              </div>
            )}
          </div>
        )}

        {/* DAY TRIPS */}
        {activeTab === "daytrips" && (
          <div>
            <SectionHeader
              label="Beyond the City"
              title={`Day trips from ${city.nameEn}`}
            />
            {city.dayTrips && city.dayTrips.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {city.dayTrips.map((trip, i) => (
                  <div
                    key={i}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground text-base leading-snug">
                          {trip.name}
                        </h3>
                        <p className="text-muted-foreground text-xs font-['DM_Mono'] mt-0.5">
                          {trip.nameZh}
                        </p>
                      </div>
                      <span className="text-[10px] font-['DM_Mono'] tracking-wide bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {trip.distance}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {trip.description}
                    </p>
                    <p className="text-primary text-sm font-medium italic">
                      ✦ {trip.whyGo}
                    </p>
                    {trip.adminNote && (
                      <div className="mt-3 pt-3 border-t border-border">
                        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 leading-relaxed">
                          📍 {trip.adminNote}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 text-muted-foreground">
                <Compass size={32} className="mx-auto mb-3 opacity-40" />
                <p className="text-sm">Day trip suggestions coming soon.</p>
              </div>
            )}
          </div>
        )}

        {/* ── Footer CTA ──────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Explore more cities in{" "}
            {city.provinceZh.replace("省", "").replace("市", "").replace("自治区", "")}
          </p>
          <Link
            to={`/province/${city.province}`}
            className="flex items-center gap-1.5 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            View province guide <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Shared sub-component ─────────────────────────────────────────────────────
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-2">
        {label}
      </p>
      <h2 className="font-['Instrument_Serif'] text-3xl text-foreground">{title}</h2>
    </div>
  );
}
