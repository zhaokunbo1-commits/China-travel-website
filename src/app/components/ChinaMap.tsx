import { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { MapPin } from "lucide-react";
import { PROVINCE_ID_MAP, EXCLUDED_REGIONS, PROVINCES } from "../data/chinaData";

interface GeoFeature {
  type: "Feature";
  properties: {
    name: string;
    adcode: number;
    center?: [number, number];
    centroid?: [number, number];
  };
  geometry: {
    type: string;
    coordinates: unknown[];
  };
}

interface GeoData {
  type: "FeatureCollection";
  features: GeoFeature[];
}

const W = 900;
const H = 680;

const CENTER_LON = 106;
const CENTER_LAT = 36;
const SCALE = 750;
const TX = W / 2;
const TY = H / 2 - 30;

function projectPoint(lon: number, lat: number): [number, number] {
  const x = SCALE * (lon - CENTER_LON) * (Math.PI / 180) + TX;
  const centerY = Math.log(Math.tan(Math.PI / 4 + (CENTER_LAT * Math.PI) / 360));
  const pointY = Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
  const y = -(SCALE * (pointY - centerY)) + TY;
  return [x, y];
}

function ringToPath(ring: number[][]): string {
  const pts = ring.map(([lon, lat]) => projectPoint(lon, lat));
  if (pts.length < 2) return "";
  const [x0, y0] = pts[0];
  let d = `M${x0.toFixed(2)},${y0.toFixed(2)}`;
  for (let i = 1; i < pts.length; i++) {
    const [x, y] = pts[i];
    d += `L${x.toFixed(2)},${y.toFixed(2)}`;
  }
  d += "Z";
  return d;
}

function geometryToPath(geometry: GeoFeature["geometry"]): string {
  const parts: string[] = [];
  if (geometry.type === "Polygon") {
    const coords = geometry.coordinates as number[][][];
    for (const ring of coords) {
      const p = ringToPath(ring);
      if (p) parts.push(p);
    }
  } else if (geometry.type === "MultiPolygon") {
    const coords = geometry.coordinates as number[][][][];
    for (const polygon of coords) {
      for (const ring of polygon) {
        const p = ringToPath(ring);
        if (p) parts.push(p);
      }
    }
  }
  return parts.join(" ");
}

function computeCentroid(geometry: GeoFeature["geometry"]): [number, number] {
  let sumX = 0, sumY = 0, count = 0;
  const processRing = (ring: number[][]) => {
    for (const [lon, lat] of ring) {
      const [x, y] = projectPoint(lon, lat);
      if (x >= 0 && x <= W && y >= 0 && y <= H) {
        sumX += x; sumY += y; count++;
      }
    }
  };
  if (geometry.type === "Polygon") {
    (geometry.coordinates as number[][][]).forEach(processRing);
  } else if (geometry.type === "MultiPolygon") {
    for (const poly of geometry.coordinates as number[][][][]) {
      processRing(poly[0]);
    }
  }
  return count > 0 ? [sumX / count, sumY / count] : [0, 0];
}

function shortName(full: string): string {
  return full
    .replace("省", "")
    .replace("市", "")
    .replace("壮族自治区", "")
    .replace("维吾尔自治区", "")
    .replace("回族自治区", "")
    .replace("自治区", "");
}

function hasContent(id: string | undefined): boolean {
  if (!id) return false;
  const p = PROVINCES[id];
  return !!(p && p.featuredCities.length > 0);
}

// ── Hover card ────────────────────────────────────────────────────────────────
interface HoverCardProps {
  provinceName: string;
  mouseX: number;
  mouseY: number;
  containerW: number;
  containerH: number;
}

function ProvinceHoverCard({
  provinceName,
  mouseX,
  mouseY,
  containerW,
  containerH,
}: HoverCardProps) {
  const id = PROVINCE_ID_MAP[provinceName];
  const province = id ? PROVINCES[id] : null;
  if (!province) return null;

  const CARD_W = 220;
  const CARD_H = 168;
  const GAP = 18;

  // Horizontal: prefer right; flip left if overflows
  const flipX = mouseX + GAP + CARD_W > containerW - 8;
  const left = flipX ? mouseX - GAP - CARD_W : mouseX + GAP;

  // Vertical: centre on cursor; clamp within container
  let top = mouseY - CARD_H / 2;
  top = Math.max(8, Math.min(top, containerH - CARD_H - 8));

  const highlights = (province.highlights ?? []).slice(0, 3);

  return (
    <div
      className="pointer-events-none absolute z-50"
      style={{
        left,
        top,
        width: CARD_W,
        animation: "fadeSlideIn 0.18s ease forwards",
      }}
    >
      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-white/30"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        {/* Image */}
        <div className="relative h-24 overflow-hidden">
          <img
            src={province.image}
            alt={province.nameZh}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.45) 100%)",
            }}
          />
          {/* Province name on image */}
          <div className="absolute bottom-2 left-3 right-3">
            <p className="text-white font-semibold text-sm leading-tight drop-shadow">
              {province.nameZh}
            </p>
            <p
              className="text-white/80 text-[10px] leading-tight"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {province.nameEn}
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="px-3 py-2.5">
          <p
            className="text-[10px] text-muted-foreground mb-1"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            ⭐ 代表景点
          </p>
          {highlights.length > 0 ? (
            <p className="text-[11px] text-foreground font-medium leading-relaxed">
              {highlights.join(" · ")}
            </p>
          ) : (
            <p className="text-[11px] text-muted-foreground italic">敬请期待</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ChinaMap() {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ w: 800, h: 600 });
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/china-geo.json")
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.json();
      })
      .then((data: GeoData) => {
        setGeoData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Track container dimensions for smart card positioning
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({
          w: entry.contentRect.width,
          h: entry.contentRect.height,
        });
      }
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const provinces = useMemo(() => {
    if (!geoData) return [];
    return geoData.features.filter(
      (f) =>
        !EXCLUDED_REGIONS.includes(f.properties.name) &&
        f.properties.name !== ""
    );
  }, [geoData]);

  if (loading) {
    return (
      <div className="w-full h-[520px] flex flex-col items-center justify-center gap-3 bg-[#f5f0e8] rounded-2xl">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground font-['DM_Mono'] tracking-wide">
          加载地图中…
        </p>
      </div>
    );
  }

  if (error || !geoData) {
    return (
      <div className="w-full h-[520px] flex flex-col items-center justify-center gap-3 bg-[#f5f0e8] rounded-2xl">
        <MapPin size={32} className="text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          地图加载失败，请检查网络连接
        </p>
      </div>
    );
  }

  return (
    <>
      {/* keyframe injected once */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative w-full select-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <defs>
            <clipPath id="mapClip">
              <rect x="0" y="0" width={W} height={H} rx="16" />
            </clipPath>

            {/* Shadow filter for resting state */}
            <filter id="shadow-rest" x="-5%" y="-5%" width="110%" height="115%">
              <feDropShadow
                dx="0" dy="2" stdDeviation="3"
                floodColor="rgba(0,0,0,0.18)"
              />
            </filter>

            {/* Deeper shadow for hovered state */}
            <filter id="shadow-hover" x="-8%" y="-8%" width="116%" height="120%">
              <feDropShadow
                dx="0" dy="6" stdDeviation="8"
                floodColor="rgba(0,0,0,0.32)"
              />
            </filter>
          </defs>

          {/* Ocean background */}
          <rect x="0" y="0" width={W} height={H} fill="#b8d4ea" rx="16" />

          {/* Province paths — NOT clipped so shadows aren't cut off */}
          <g clipPath="url(#mapClip)">
            {provinces.map((feature) => {
              const name = feature.properties.name;
              const id = PROVINCE_ID_MAP[name];
              const isHovered = hovered === name;
              const clickable = !!id;
              const isActive = hasContent(id);

              const pathD = geometryToPath(feature.geometry);
              if (!pathD) return null;

              const [cx, cy] = computeCentroid(feature.geometry);

              const fill = isHovered && clickable
                ? "#c1281b"
                : isActive
                ? "#c8a96e"
                : "#e8e0d2";

              return (
                <g
                  key={name}
                  style={{
                    cursor: clickable ? "pointer" : "default",
                    // ── 3D lift on hover ──────────────────────────────────
                    transform: isHovered && clickable
                      ? `translateY(-4px)`
                      : `translateY(0px)`,
                    transformOrigin: `${cx.toFixed(1)}px ${cy.toFixed(1)}px`,
                    // ── Drop shadow ───────────────────────────────────────
                    filter: isHovered && clickable
                      ? "url(#shadow-hover)"
                      : isActive
                      ? "url(#shadow-rest)"
                      : "none",
                    // ── Smooth animation ──────────────────────────────────
                    transition: "transform 0.25s ease, filter 0.25s ease",
                  }}
                  onMouseEnter={() => clickable && setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    if (id) navigate(`/province/${id}`);
                  }}
                >
                  <path
                    d={pathD}
                    fill={fill}
                    stroke="white"
                    strokeWidth={0.8}
                    fillRule="evenodd"
                    style={{ transition: "fill 0.2s ease" }}
                  />

                  {/* Province label */}
                  {cx > 20 && cy > 20 && cx < W - 20 && cy < H - 20 && (
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize={isHovered ? 10 : 8.5}
                      fontWeight={isHovered ? "600" : "400"}
                      fill={isHovered ? "white" : "#555"}
                      style={{
                        pointerEvents: "none",
                        userSelect: "none",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {shortName(name)}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        </svg>

        {/* ── Hover province card ───────────────────────────────────────────── */}
        {hovered && (
          <ProvinceHoverCard
            provinceName={hovered}
            mouseX={mousePos.x}
            mouseY={mousePos.y}
            containerW={containerSize.w}
            containerH={containerSize.h}
          />
        )}

        {/* ── Legend ───────────────────────────────────────────────────────── */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2 flex flex-col gap-1.5 text-[10px] font-['DM_Mono'] text-muted-foreground shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#c8a96e] flex-shrink-0" />
            有攻略
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-[#e8e0d2] flex-shrink-0" />
            即将上线
          </div>
        </div>
      </div>
    </>
  );
}
