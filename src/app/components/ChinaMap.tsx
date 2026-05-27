import { useState, useEffect, useMemo } from "react";
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

// Manual Mercator projection (avoids d3-geo sphere-aware clip issues)
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

// Build SVG path string from a polygon ring (array of [lon, lat] pairs)
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

// Build combined SVG path from a GeoJSON Polygon or MultiPolygon
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

// Compute centroid from projected points of all rings
function computeCentroid(geometry: GeoFeature["geometry"]): [number, number] {
  let sumX = 0, sumY = 0, count = 0;

  const processRing = (ring: number[][]) => {
    for (const [lon, lat] of ring) {
      const [x, y] = projectPoint(lon, lat);
      // Only use points within the viewbox area
      if (x >= 0 && x <= W && y >= 0 && y <= H) {
        sumX += x; sumY += y; count++;
      }
    }
  };

  if (geometry.type === "Polygon") {
    (geometry.coordinates as number[][][]).forEach(processRing);
  } else if (geometry.type === "MultiPolygon") {
    for (const poly of geometry.coordinates as number[][][][]) {
      processRing(poly[0]); // only exterior ring for centroid
    }
  }

  return count > 0 ? [sumX / count, sumY / count] : [0, 0];
}

// Short display name for province label
function shortName(full: string): string {
  return full
    .replace("省", "")
    .replace("市", "")
    .replace("壮族自治区", "")
    .replace("维吾尔自治区", "")
    .replace("回族自治区", "")
    .replace("自治区", "");
}

// Whether this province has featured city content
function hasContent(id: string | undefined): boolean {
  if (!id) return false;
  const p = PROVINCES[id];
  return !!(p && p.featuredCities.length > 0);
}

export default function ChinaMap() {
  const [geoData, setGeoData] = useState<GeoData | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
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

  const provinces = useMemo(() => {
    if (!geoData) return [];
    return geoData.features.filter(
      (f) =>
        !EXCLUDED_REGIONS.includes(f.properties.name) &&
        f.properties.name !== "" // exclude unnamed (nine-dash line) feature
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
    <div className="relative w-full select-none">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Clip all map content to viewBox */}
        <defs>
          <clipPath id="mapClip">
            <rect x="0" y="0" width={W} height={H} rx="16" />
          </clipPath>
        </defs>

        {/* Ocean background */}
        <rect x="0" y="0" width={W} height={H} fill="#b8d4ea" rx="16" />

        {/* Province paths */}
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
              <g key={name}>
                <path
                  d={pathD}
                  fill={fill}
                  stroke="white"
                  strokeWidth={0.8}
                  fillRule="evenodd"
                  style={{
                    cursor: clickable ? "pointer" : "default",
                    transition: "fill 0.15s ease",
                  }}
                  onMouseEnter={() => clickable && setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    if (id) navigate(`/province/${id}`);
                  }}
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
                      transition: "all 0.15s ease",
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

      {/* Hover tooltip */}
      {hovered && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-['DM_Mono'] px-3 py-1.5 rounded-full shadow-lg pointer-events-none whitespace-nowrap">
          <span className="text-primary">→ </span>
          {hovered.replace("省", "").replace("市", "")} · 点击查看攻略
        </div>
      )}

      {/* Legend */}
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
  );
}
