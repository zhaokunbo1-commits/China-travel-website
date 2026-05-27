import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import {
  ArrowLeft, ChevronRight, MapPin, Camera, Train,
  Utensils, Star, ArrowRight, CheckCircle,
} from "lucide-react";
import { CITIES } from "../data/chinaData";

const TABS = [
  { id: "attractions", label: "景点", icon: Camera },
  { id: "transport", label: "交通", icon: Train },
  { id: "food", label: "美食", icon: Utensils },
  { id: "checkin", label: "打卡地", icon: Star },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function CityPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>("attractions");

  const city = id ? CITIES[id] : null;

  if (!city) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <MapPin size={40} className="text-muted-foreground" />
        <p className="text-muted-foreground">未找到该城市的信息</p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          返回首页
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-['Plus_Jakarta_Sans']">
      {/* ── Nav ────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <button
            onClick={() => navigate(`/province/${city.province}`)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} /> {city.provinceZh}
          </button>
          <span className="text-border">|</span>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              China Decoder
            </Link>
            <ChevronRight size={12} />
            <Link
              to={`/province/${city.province}`}
              className="hover:text-foreground"
            >
              {city.provinceZh.replace("省", "").replace("市", "").replace("自治区", "")}
            </Link>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium">{city.nameZh}</span>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <div className="pt-14">
        <div className="h-[340px] sm:h-[420px] relative overflow-hidden">
          <img
            src={city.heroImage}
            alt={city.nameEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6">
            <p className="font-['DM_Mono'] text-white/60 text-[11px] tracking-[0.3em] uppercase mb-2">
              {city.nameEn} · {city.provinceZh}
            </p>
            <h1 className="font-['Instrument_Serif'] text-5xl sm:text-6xl text-white leading-none mb-2">
              {city.nameZh}
            </h1>
            <p className="text-white/75 text-base">{city.tagline}</p>
          </div>
        </div>
      </div>

      {/* ── Description ────────────────────────────────────────── */}
      <div className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
            {city.description}
          </p>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────────────────── */}
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

      {/* ── Tab content ────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* ATTRACTIONS */}
        {activeTab === "attractions" && (
          <div className="space-y-4">
            <SectionHeader
              label="必游景点"
              title={`${city.nameZh} 最值得去的地方`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {city.attractions.map((a, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground text-base">
                        {a.name}
                      </h3>
                      <p className="text-muted-foreground text-xs font-['DM_Mono']">
                        {a.nameEn}
                      </p>
                    </div>
                    <span className="text-[10px] font-['DM_Mono'] tracking-wide bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      {a.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {a.description}
                  </p>
                  <div className="flex items-start gap-2 bg-primary/5 rounded-lg px-3 py-2">
                    <CheckCircle size={13} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      <span className="font-medium text-primary">实用提示：</span>{" "}
                      {a.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TRANSPORT */}
        {activeTab === "transport" && (
          <div>
            <SectionHeader
              label="抵达与出行"
              title={`如何前往 ${city.nameZh}`}
            />
            <div className="space-y-3 mt-6">
              {city.transport.map((t, i) => (
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

        {/* FOOD */}
        {activeTab === "food" && (
          <div>
            <SectionHeader
              label="必吃美食"
              title={`${city.nameZh} 的味道`}
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
                        {f.nameEn}
                      </p>
                    </div>
                    {f.must && (
                      <span className="text-[10px] font-['DM_Mono'] bg-amber-50 text-amber-700 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        必吃
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

        {/* CHECK-IN */}
        {activeTab === "checkin" && (
          <div>
            <SectionHeader
              label="网红打卡地"
              title={`${city.nameZh} 最值得打卡的地方`}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {city.checkin.map((c, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <h3 className="font-semibold text-foreground text-base mb-0.5">
                    {c.name}
                  </h3>
                  <p className="text-muted-foreground text-xs font-['DM_Mono'] mb-2">
                    {c.nameEn}
                  </p>
                  <span className="text-[10px] font-['DM_Mono'] bg-secondary text-muted-foreground px-2 py-1 rounded-full inline-block mb-3">
                    {c.vibe}
                  </span>
                  <div className="flex items-start gap-2 bg-primary/5 rounded-lg px-3 py-2">
                    <CheckCircle size={13} className="text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/80 leading-relaxed">
                      {c.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back to province CTA */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              还想探索 {city.provinceZh.replace("省", "").replace("市", "")} 的其他城市？
            </p>
          </div>
          <Link
            to={`/province/${city.province}`}
            className="flex items-center gap-1.5 bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            查看更多城市 <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <p className="font-['DM_Mono'] text-primary text-[11px] tracking-[0.3em] uppercase mb-2">
        {label}
      </p>
      <h2 className="font-['Instrument_Serif'] text-3xl text-foreground">
        {title}
      </h2>
    </div>
  );
}
