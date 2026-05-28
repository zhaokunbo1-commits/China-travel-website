import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ChevronRight, MapPin, Clock, ArrowRight } from "lucide-react";
import { PROVINCES, CITIES, type ProvinceInfo } from "../data/chinaData";
import { CITY_DETAILS } from "../data/cities";

// Minimal shape needed to render a city card (shared by CityDetail & legacy CityInfo)
type CityCardData = {
  id: string;
  nameZh: string;
  nameEn: string;
  tagline: string;
  description: string;
  image: string;
};

// ── Province hero: static image base + video fade-in on ready ────────────────
function ProvinceHeroMedia({ province }: { province: ProvinceInfo }) {
  const [videoReady, setVideoReady] = useState(false);
  const FADE = "opacity 1s cubic-bezier(0.4,0,0.2,1)";

  return (
    <>
      {/* Base image — always visible instantly */}
      <img
        src={province.image}
        alt={province.nameEn}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
      {/* Video — fades in once buffered */}
      {province.heroVideo && (
        <video
          src={province.heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            opacity: videoReady ? 1 : 0,
            transition: videoReady ? FADE : "none",
            zIndex: 1,
          }}
        />
      )}
    </>
  );
}

export default function ProvincePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const province = id ? PROVINCES[id] : null;

  if (!province) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-4">
        <MapPin size={40} className="text-muted-foreground" />
        <p className="text-muted-foreground">Province not found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Read from cities.ts first, fall back to legacy chinaData.ts
  const featuredCities = province.featuredCities
    .map((cid): CityCardData | null => {
      const d = CITY_DETAILS[cid];
      if (d) return d;
      const c = CITIES[cid];
      if (c) return c as CityCardData;
      return null;
    })
    .filter((c): c is CityCardData => c !== null);

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">

      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> Back to map
          </button>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              China Travel Compass
            </Link>
            <ChevronRight size={13} />
            <span className="text-foreground font-medium">{province.nameEn}</span>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <div className="pt-14 relative overflow-hidden">
        <div className="h-[320px] sm:h-[400px] relative overflow-hidden">
          <ProvinceHeroMedia province={province} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" style={{ zIndex: 10 }} />
          <div className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6" style={{ zIndex: 11 }}>
            <p className="font-['DM_Mono'] text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">
              {province.nameEn} · China
            </p>
            <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-white leading-tight mb-2">
              {province.nameZh}
            </h1>
            <p className="text-white/75 text-sm sm:text-base italic">
              {province.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* ── Province description ──────────────────────────────── */}
        <div className="max-w-2xl mb-12">
          <p className="text-muted-foreground text-base leading-relaxed">
            {province.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {province.highlights.map((h) => (
              <span
                key={h}
                className="text-xs font-['DM_Mono'] bg-secondary text-muted-foreground px-3 py-1 rounded-full"
              >
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* ── City grid ─────────────────────────────────────────── */}
        <div>
          <div className="mb-8">
            <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-2">
              Destinations
            </p>
            <h2 className="font-['Instrument_Serif'] text-3xl text-foreground">
              Cities in {province.nameEn}
            </h2>
          </div>

          {featuredCities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredCities.map((city) => (
                <Link
                  key={city.id}
                  to={`/city/${city.id}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 block"
                >
                  <div className="aspect-[16/9] overflow-hidden relative bg-muted">
                    <img
                      src={city.image}
                      alt={city.nameEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <p className="font-['Instrument_Serif'] text-white text-xl leading-tight">
                        {city.nameZh}
                      </p>
                      <p className="text-white/65 text-[11px] font-['DM_Mono'] tracking-wide mt-0.5">
                        {city.nameEn}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-primary text-xs font-['DM_Mono'] mb-2 italic">
                      {city.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                      {city.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium">
                      Full travel guide <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}

              {/* Coming soon placeholder */}
              <div className="bg-card border border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center min-h-[200px] opacity-50">
                <Clock size={20} className="text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">
                  More cities coming soon
                </p>
                <p className="text-xs text-muted-foreground font-['DM_Mono']">
                  Guides added regularly
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-secondary/50 rounded-xl p-12 text-center border border-border">
              <Clock size={28} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                {province.nameEn} guide coming soon
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                We're working on in-depth travel guides for {province.nameEn}.
                Check back soon.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg mt-5 hover:bg-primary/90 transition-colors"
              >
                Explore other provinces <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
