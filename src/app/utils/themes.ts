// ── Destination Theme System ───────────────────────────────────────────────────
// Maps cities and provinces to one of four thematic sub-worlds.
// The returned ThemeId drives which CSS class (.theme-*) is applied to the page.

export type ThemeId = "nature" | "future" | "classical" | "silkroad" | "base";

// ── City → theme ──────────────────────────────────────────────────────────────
// Keyed by the city IDs used in CITY_DETAILS / CITIES.

const CITY_THEME_MAP: Record<string, ThemeId> = {
  // Nature China ── mist mountains, rivers, villages, slow travel
  guilin:          "nature",
  yangshuo:        "nature",
  nanning:         "nature",
  beihai:          "nature",
  lijiang:         "nature",
  dali:            "nature",
  kunming:         "nature",
  xishuangbanna:   "nature",
  shangrila:       "nature",
  jiuzhaigou:      "nature",
  daocheng:        "nature",
  leshan:          "nature",
  emeishan:        "nature",
  zhangjiajie:     "nature",
  huangshan:       "nature",
  wuyuan:          "nature",
  fenghuang:       "nature",
  zhangjiajie_city:"nature",
  zhouzhuang:      "nature",
  xitang:          "nature",
  wuzhen:          "nature",

  // Future China ── smart cities, high-speed rail, innovation
  shanghai_city:   "future",
  shenzhen:        "future",
  guangzhou:       "future",
  chongqing:       "future",
  chongqing_city:  "future",
  hangzhou_tech:   "future",   // tech/Alibaba side of Hangzhou
  zhuhai:          "future",

  // Classical China ── imperial capitals, heritage, gardens, temples
  beijing_city:    "classical",
  yanqing:         "classical",
  xian:            "classical",
  suzhou:          "classical",
  hangzhou:        "classical",  // West Lake / heritage side
  nanjing:         "classical",
  luoyang:         "classical",
  datong:          "classical",
  pingyao:         "classical",
  kaifeng:         "classical",

  // Silk Road China ── deserts, grottoes, oases, frontier
  dunhuang:        "silkroad",
  zhangye:         "silkroad",
  jiayuguan:       "silkroad",
  turpan:          "silkroad",
  kashgar:         "silkroad",
  urumqi:          "silkroad",
  xining:          "silkroad",
  yinchuan:        "silkroad",
  hohhot:          "silkroad",
  labrang:         "silkroad",
};

// ── Province → theme ──────────────────────────────────────────────────────────
// Used on ProvincePage to colour the whole province guide.

const PROVINCE_THEME_MAP: Record<string, ThemeId> = {
  // Nature China
  guangxi:   "nature",
  yunnan:    "nature",
  hunan:     "nature",
  guizhou:   "nature",
  anhui:     "nature",
  sichuan:   "nature",   // mostly nature (Jiuzhaigou, Emei)
  fujian:    "nature",
  jiangxi:   "nature",
  hainan:    "nature",

  // Future China
  guangdong: "future",
  shanghai:  "future",
  chongqing: "future",

  // Classical China
  beijing:   "classical",
  shaanxi:   "classical",
  jiangsu:   "classical",
  zhejiang:  "classical",
  henan:     "classical",
  shanxi:    "classical",
  hebei:     "classical",
  shandong:  "classical",
  liaoning:  "classical",
  jilin:     "classical",

  // Silk Road China
  gansu:     "silkroad",
  xinjiang:  "silkroad",
  qinghai:   "silkroad",
  ningxia:   "silkroad",
  neimenggu: "silkroad",
  xizang:    "silkroad",
  heilongjiang: "silkroad",  // frontier, vast landscape
};

// ── Public API ────────────────────────────────────────────────────────────────

/** Returns the theme for a given city ID. Falls back to "base" if unmapped. */
export function getCityTheme(cityId: string): ThemeId {
  return CITY_THEME_MAP[cityId] ?? "base";
}

/** Returns the theme for a given province ID. Falls back to "base" if unmapped. */
export function getProvinceTheme(provinceId: string): ThemeId {
  return PROVINCE_THEME_MAP[provinceId] ?? "base";
}

/**
 * Returns the CSS class name to apply to the page wrapper element.
 * "base" returns an empty string (no theme override applied).
 */
export function themeClass(theme: ThemeId): string {
  return theme === "base" ? "" : `theme-${theme}`;
}

/**
 * Returns a human-readable theme name for display / alt text.
 */
export function themeName(theme: ThemeId): string {
  const labels: Record<ThemeId, string> = {
    nature:    "Nature China",
    future:    "Future China",
    classical: "Classical China",
    silkroad:  "Silk Road China",
    base:      "China",
  };
  return labels[theme];
}
