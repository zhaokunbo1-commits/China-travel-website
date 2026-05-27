import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, ChevronRight, MapPin, Lock, ArrowRight } from "lucide-react";
import { PROVINCES, CITIES } from "../data/chinaData";

export default function ProvincePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const province = id ? PROVINCES[id] : null;

  if (!province) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center flex-col gap-4">
        <MapPin size={40} className="text-muted-foreground" />
        <p className="text-muted-foreground">未找到该省份的信息</p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/90"
        >
          返回首页
        </button>
      </div>
    );
  }

  const featuredCities = province.featuredCities
    .map((cid) => CITIES[cid])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">
      {/* ── Nav ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> 返回地图
          </button>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              China Decoder
            </Link>
            <ChevronRight size={13} />
            <span className="text-foreground font-medium">{province.nameZh}</span>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────── */}
      <div className="pt-14 relative overflow-hidden">
        <div className="h-[320px] sm:h-[400px] relative">
          <img
            src={province.image}
            alt={province.nameEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6">
            <p className="font-['DM_Mono'] text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">
              {province.nameEn} · 中国
            </p>
            <h1 className="font-['Instrument_Serif'] text-4xl sm:text-5xl text-white leading-tight mb-2">
              {province.nameZh}
            </h1>
            <p className="text-white/75 text-sm sm:text-base">
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

        {/* ── Featured cities ───────────────────────────────────── */}
        <div>
          <div className="mb-8">
            <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-2">
              热门目的地
            </p>
            <h2 className="font-['Instrument_Serif'] text-3xl text-foreground">
              探索 {province.nameZh} 的城市
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="font-['Instrument_Serif'] text-white text-xl">
                        {city.nameZh}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-primary text-xs font-['DM_Mono'] mb-2">
                      {city.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                      {city.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium">
                      查看完整攻略 <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              ))}

              {/* Coming soon placeholder */}
              <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center text-center aspect-auto min-h-[200px] opacity-60">
                <Lock size={20} className="text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">
                  更多城市即将上线
                </p>
                <p className="text-xs text-muted-foreground font-['DM_Mono']">
                  持续更新中…
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-secondary/50 rounded-xl p-12 text-center border border-border">
              <Lock size={28} className="text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">
                {province.nameZh} 攻略即将上线
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                我们正在撰写 {province.nameZh} 的详细旅行攻略。加入候补名单，第一时间获得通知。
              </p>
              <Link
                to="/#waitlist"
                className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg mt-5 hover:bg-primary/90 transition-colors"
              >
                加入候补名单 <ArrowRight size={13} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
