// ── Province / City data for China Decoder ──────────────────────────────────

export interface ProvinceInfo {
  id: string;
  nameZh: string;
  nameEn: string;
  tagline: string;
  description: string;
  image: string;
  featuredCities: string[];
  highlights: string[];
}

export interface Attraction {
  name: string;
  nameEn: string;
  tag: string;
  description: string;
  tip: string;
}

export interface TransportItem {
  mode: string;
  details: string;
}

export interface FoodItem {
  name: string;
  nameEn: string;
  description: string;
  must: boolean;
}

export interface CheckinSpot {
  name: string;
  nameEn: string;
  vibe: string;
  tip: string;
}

export interface CityInfo {
  id: string;
  nameZh: string;
  nameEn: string;
  province: string;
  provinceZh: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  attractions: Attraction[];
  transport: TransportItem[];
  food: FoodItem[];
  checkin: CheckinSpot[];
}

// ── Province → GeoJSON name mapping ─────────────────────────────────────────
export const PROVINCE_ID_MAP: Record<string, string> = {
  "北京市": "beijing",
  "天津市": "tianjin",
  "上海市": "shanghai",
  "重庆市": "chongqing",
  "河北省": "hebei",
  "山西省": "shanxi",
  "辽宁省": "liaoning",
  "吉林省": "jilin",
  "黑龙江省": "heilongjiang",
  "江苏省": "jiangsu",
  "浙江省": "zhejiang",
  "安徽省": "anhui",
  "福建省": "fujian",
  "江西省": "jiangxi",
  "山东省": "shandong",
  "河南省": "henan",
  "湖北省": "hubei",
  "湖南省": "hunan",
  "广东省": "guangdong",
  "海南省": "hainan",
  "四川省": "sichuan",
  "贵州省": "guizhou",
  "云南省": "yunnan",
  "陕西省": "shaanxi",
  "甘肃省": "gansu",
  "青海省": "qinghai",
  "内蒙古自治区": "neimenggu",
  "广西壮族自治区": "guangxi",
  "西藏自治区": "xizang",
  "宁夏回族自治区": "ningxia",
  "新疆维吾尔自治区": "xinjiang",
};

export const EXCLUDED_REGIONS = ["香港特别行政区", "澳门特别行政区", "台湾省"];

// ── Province data ────────────────────────────────────────────────────────────
export const PROVINCES: Record<string, ProvinceInfo> = {
  fujian: {
    id: "fujian",
    nameZh: "福建",
    nameEn: "Fujian",
    tagline: "Mountains, sea & southern charm",
    description:
      "A coastal province of extraordinary contrasts — ancient Hakka earthen buildings hidden in the mountains, the piano-filled lanes of Gulangyu Island, and a cuisine that shaped food culture from Taipei to Singapore. Fujian rewards visitors who venture beyond the obvious.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["xiamen", "fuzhou"],
    highlights: ["Gulangyu Island", "Hakka Tulou", "Tea culture", "Coastal seafood"],
  },
  yunnan: {
    id: "yunnan",
    nameZh: "云南",
    nameEn: "Yunnan",
    tagline: "Where China meets Southeast Asia",
    description:
      "China's most biodiverse province, home to ancient Naxi kingdoms in Lijiang, Bai architecture in Dali, and rice terraces that glow gold at sunrise. Yunnan is best explored slowly, by train and bicycle.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["lijiang", "dali", "kunming", "xishuangbanna"],
    highlights: ["Lijiang Old Town", "Jade Dragon Snow Mountain", "Tiger Leaping Gorge", "Yunnan cuisine"],
  },
  sichuan: {
    id: "sichuan",
    nameZh: "四川",
    nameEn: "Sichuan",
    tagline: "Pandas, spice & slow living",
    description:
      "Home to the Giant Panda Breeding Research Base, the river-facing Leshan Giant Buddha, and one of the world's most celebrated cuisines. Chengdu's teahouse culture slows time down.",
    image:
      "https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["chengdu", "leshan", "emeishan", "jiuzhaigou"],
    highlights: ["Giant Pandas", "Sichuan hotpot", "Jiuzhaigou", "Leshan Giant Buddha"],
  },
  guangdong: {
    id: "guangdong",
    nameZh: "广东",
    nameEn: "Guangdong",
    tagline: "Cantonese culture at its finest",
    description:
      "China's most economically dynamic province. Guangzhou invented dim sum as a lifestyle, while Shenzhen reinvented what a city can become in a single generation. The Pearl River Delta has more to offer than most people realise.",
    image:
      "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["guangzhou", "shenzhen", "zhuhai", "chaozhou"],
    highlights: ["Dim sum culture", "Canton Tower", "Shenzhen tech parks", "Pearl River Delta"],
  },
  guangxi: {
    id: "guangxi",
    nameZh: "广西",
    nameEn: "Guangxi",
    tagline: "Karst mountains & Li River dreams",
    description:
      "The iconic karst limestone peaks rising from the Li River make Guilin one of China's most painted landscapes. Yangshuo offers cycling through rice paddies between tower-like peaks.",
    image:
      "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf7?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["guilin", "nanning", "beihai"],
    highlights: ["Li River cruise", "Yangshuo", "Reed Flute Cave", "Longji Rice Terraces"],
  },
  zhejiang: {
    id: "zhejiang",
    nameZh: "浙江",
    nameEn: "Zhejiang",
    tagline: "Heaven on Earth",
    description:
      "Marco Polo called it the finest city in the world. West Lake in Hangzhou, the canals of Wuzhen, and Dragon Well tea plantations make Zhejiang a perennial favourite for domestic and international visitors alike.",
    image:
      "https://images.unsplash.com/photo-1567536814655-fec50bb5e69f?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["hangzhou", "ningbo", "shaoxing", "zhoushan"],
    highlights: ["West Lake", "Dragon Well tea", "Wuzhen Water Town", "Lingyin Temple"],
  },
  jiangsu: {
    id: "jiangsu",
    nameZh: "江苏",
    nameEn: "Jiangsu",
    tagline: "Classical gardens & ancient capitals",
    description:
      "Suzhou's UNESCO-listed classical gardens, Nanjing's Ming dynasty walls, and the Grand Canal weaving through it all. Jiangsu is China's most refined province.",
    image:
      "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["nanjing", "suzhou", "yangzhou", "wuxi"],
    highlights: ["Suzhou Classical Gardens", "Nanjing City Wall", "Grand Canal", "Suzhou cuisine"],
  },
  shaanxi: {
    id: "shaanxi",
    nameZh: "陕西",
    nameEn: "Shaanxi",
    tagline: "Where the Silk Road began",
    description:
      "The Terracotta Warriors, a beautifully preserved Tang dynasty city wall, and the vibrant Muslim Quarter make Xi'an one of the most rewarding cities for first-time visitors wanting to go deeper into Chinese history.",
    image:
      "https://images.unsplash.com/photo-1577706881850-bf7c7d8906a5?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["xian", "yanan", "hanzhong"],
    highlights: ["Terracotta Warriors", "Ancient City Wall", "Muslim Quarter", "Tang Dynasty history"],
  },
  hainan: {
    id: "hainan",
    nameZh: "海南",
    nameEn: "Hainan",
    tagline: "China's tropical island escape",
    description:
      "China's southernmost province is a tropical island with beaches, palm forests, and the healing warmth of Wenchang chicken and coconut-based cuisine. Sanya is the go-to winter escape.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["sanya", "haikou"],
    highlights: ["Yalong Bay", "Nanshan Temple", "Tropical beaches", "Coconut cuisine"],
  },
  beijing: {
    id: "beijing",
    nameZh: "北京",
    nameEn: "Beijing",
    tagline: "Five thousand years, one capital",
    description:
      "The political, cultural, and historical heart of China. Imperial palaces, ancient hutong alleys, and world-class museums — all connected by one of the finest metro systems in the world.",
    image:
      "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["beijing_city"],
    highlights: ["Forbidden City", "Great Wall", "Temple of Heaven", "Hutong culture"],
  },
  shanghai: {
    id: "shanghai",
    nameZh: "上海",
    nameEn: "Shanghai",
    tagline: "China's global city",
    description:
      "A city of extraordinary contrasts — Art Deco buildings beside glass towers, world-class dining on every corner, and the easiest entry point for first-time visitors to China.",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&h=500&fit=crop&auto=format",
    featuredCities: ["shanghai_city"],
    highlights: ["The Bund", "Yu Garden", "French Concession", "Pudong skyline"],
  },
  // Minimal data for remaining provinces
  hebei: { id: "hebei", nameZh: "河北", nameEn: "Hebei", tagline: "Gateway to the north", description: "Surrounding Beijing, Hebei offers the Great Wall at Chengde, the port city of Qinhuangdao, and the imperial summer retreats of the Qing dynasty.", image: "https://images.unsplash.com/photo-1525038083052-41b3b8c91e55?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Chengde Mountain Resort", "Shanhaiguan Pass", "Baiyangdian Lake"] },
  shanxi: { id: "shanxi", nameZh: "山西", nameEn: "Shanxi", tagline: "Ancient temples & coal country", description: "One of the cradles of Chinese civilisation, with remarkable Buddhist cave temples at Yungang and the ornate Pingyao ancient city.", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Pingyao Ancient City", "Yungang Grottoes", "Hanging Temple"] },
  liaoning: { id: "liaoning", nameZh: "辽宁", nameEn: "Liaoning", tagline: "Old industry meets coastal beauty", description: "The gateway to northeast China, with the Shenyang Imperial Palace rivalling Beijing's Forbidden City, and the old Japanese architecture of Dalian.", image: "https://images.unsplash.com/photo-1509629179375-1c38ad17e47c?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Shenyang Imperial Palace", "Dalian coastline", "Bingyu Valley"] },
  jilin: { id: "jilin", nameZh: "吉林", nameEn: "Jilin", tagline: "Ice forests & volcanic lakes", description: "Home to China's spectacular winter wonderland — the ice-rimed trees of Jilin city, and the volcanic crater lake of Changbai Mountain.", image: "https://images.unsplash.com/photo-1601766994656-00d5c8b89f71?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Changbai Mountain", "Tianchi Lake", "Jilin rime ice forest"] },
  heilongjiang: { id: "heilongjiang", nameZh: "黑龙江", nameEn: "Heilongjiang", tagline: "China's winter capital", description: "The Harbin International Ice and Snow Sculpture Festival is one of the world's great spectacles. In summer, Zhalong Nature Reserve is alive with red-crowned cranes.", image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Harbin Ice Festival", "Siberian Tiger Park", "Saint Sophia Cathedral"] },
  anhui: { id: "anhui", nameZh: "安徽", nameEn: "Anhui", tagline: "Ink-wash paintings come to life", description: "The mist-wrapped peaks of Huangshan inspired a thousand Chinese paintings, and the UNESCO-listed Hongcun village looks exactly like one of them.", image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&h=500&fit=crop", featuredCities: ["huangshan", "hongcun", "hefei", "wuyuan_an"], highlights: ["Huangshan (Yellow Mountain)", "Hongcun Village", "Xidi Village"] },
  jiangxi: { id: "jiangxi", nameZh: "江西", nameEn: "Jiangxi", tagline: "Porcelain & mountain pilgrimage", description: "Jingdezhen has produced China's finest porcelain for over a thousand years. Wuyuan's golden rapeseed fields each spring are among China's most photographed landscapes.", image: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Jingdezhen porcelain", "Mount Lu", "Wuyuan countryside"] },
  shandong: { id: "shandong", nameZh: "山东", nameEn: "Shandong", tagline: "Confucius, Taishan & seafood", description: "The birthplace of Confucius, the sacred Mount Tai, and the German-influenced seaside city of Qingdao where China's favourite beer is brewed.", image: "https://images.unsplash.com/photo-1590002949416-e42f6e80e8b1?w=800&h=500&fit=crop", featuredCities: ["qingdao", "taishan", "qufu", "jinan"], highlights: ["Mount Tai", "Qufu Confucius Temple", "Qingdao coastline"] },
  henan: { id: "henan", nameZh: "河南", nameEn: "Henan", tagline: "The cradle of Chinese civilisation", description: "Luoyang's Longmen Grottoes, the Shaolin Monastery where kung fu was born, and Kaifeng's Song dynasty street food culture.", image: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=800&h=500&fit=crop", featuredCities: ["luoyang", "kaifeng", "dengfeng"], highlights: ["Longmen Grottoes", "Shaolin Temple", "White Horse Temple"] },
  hubei: { id: "hubei", nameZh: "湖北", nameEn: "Hubei", tagline: "The heart of China", description: "Wuhan is one of China's great unsung cities — hot dry noodles for breakfast, cherry blossoms in spring, and the historic Yangtze river crossing that defined the country.", image: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Yellow Crane Tower", "Wuhan hot dry noodles", "Three Gorges"] },
  hunan: { id: "hunan", nameZh: "湖南", nameEn: "Hunan", tagline: "Avatar mountains & fiery food", description: "The otherworldly sandstone pillars of Zhangjiajie inspired Avatar's Hallelujah Mountains. Changsha is one of China's most exciting food and nightlife cities.", image: "https://images.unsplash.com/photo-1555737785-3b6a6f9cd8f5?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Zhangjiajie National Park", "Fenghuang Old Town", "Hunan cuisine"] },
  guizhou: { id: "guizhou", nameZh: "贵州", nameEn: "Guizhou", tagline: "Waterfalls & minority culture", description: "Huangguoshu Waterfall, the largest in Asia, and villages of the Miao and Dong minorities with their elaborate silver headdresses and drum towers.", image: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Huangguoshu Waterfall", "Miao minority villages", "Maotai baijiu"] },
  tianjin: { id: "tianjin", nameZh: "天津", nameEn: "Tianjin", tagline: "European streets beside the Hai River", description: "An hour from Beijing by high-speed rail, Tianjin has Italian, French, and British colonial architecture alongside Goubuli steamed buns and traditional Chinese folk art.", image: "https://images.unsplash.com/photo-1568895706332-28c5e023adcc?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Wudadao European Quarter", "Ancient Culture Street", "Goubuli dumplings"] },
  chongqing: { id: "chongqing", nameZh: "重庆", nameEn: "Chongqing", tagline: "Mountain city of fog & fire", description: "China's most dramatic city, built on cliffs above two rivers. Spicy Chongqing hotpot fuels a nightlife scene that rivals Shanghai, on a fraction of the budget.", image: "https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?w=800&h=500&fit=crop", featuredCities: ["chongqing"], highlights: ["Jiefangbei district", "Chongqing hotpot", "Three Gorges cruise", "Ciqikou Old Town"] },
  gansu: { id: "gansu", nameZh: "甘肃", nameEn: "Gansu", tagline: "Where the Silk Road lives", description: "The Mogao Grottoes at Dunhuang hold 1,600 years of Buddhist art, the Rainbow Mountains of Zhangye glow in the evening light, and the last section of the Great Wall watches over it all.", image: "https://images.unsplash.com/photo-1565128939960-1ec0a5e46e93?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Dunhuang Mogao Caves", "Zhangye Rainbow Mountains", "Jiayuguan Fort"] },
  qinghai: { id: "qinghai", nameZh: "青海", nameEn: "Qinghai", tagline: "The roof of China's roof", description: "Qinghai Lake is the largest lake in China, ringed by yellow rapeseed in summer. The Tibetan town of Tongren is a living centre of Tibetan Buddhist thangka painting.", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Qinghai Lake", "Ta'er Monastery", "Tongren Tibetan art"] },
  neimenggu: { id: "neimenggu", nameZh: "内蒙古", nameEn: "Inner Mongolia", tagline: "Grasslands, yurts & starry skies", description: "Hulunbuir's grasslands are among the most pristine in the world. Sleeping in a yurt, watching the Milky Way, and riding horses at sunrise — Inner Mongolia delivers an experience China rarely talks about.", image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Hulunbuir Grasslands", "Gegentala Sky Camp", "Resonant Sand Gorge"] },
  xizang: { id: "xizang", nameZh: "西藏", nameEn: "Tibet", tagline: "Roof of the world", description: "The Potala Palace, sacred Jokhang Temple, and monasteries dotting the Tibetan plateau. Tibet requires advance permits and is best visited with a guided tour.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Potala Palace", "Jokhang Temple", "Namtso Lake", "Everest Base Camp"] },
  xinjiang: { id: "xinjiang", nameZh: "新疆", nameEn: "Xinjiang", tagline: "Central Asia meets China", description: "Kashgar's Sunday market, the turquoise Karakul Lake, and Grape Valley in Turpan. Xinjiang is China's largest province and its most Central Asian in character.", image: "https://images.unsplash.com/photo-1567634698-89e6da2e8c6d?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Kashgar Old City", "Heavenly Lake", "Grape Valley", "Kuqa Grand Canyon"] },
  ningxia: { id: "ningxia", nameZh: "宁夏", nameEn: "Ningxia", tagline: "Desert, stars & Halal cuisine", description: "The Western Xia Imperial Tombs echo the pyramids, the Shapotou Desert meets the Yellow River in a single view, and Ningxia's Halal lamb is some of the best in China.", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop", featuredCities: [], highlights: ["Western Xia Imperial Tombs", "Shapotou Desert", "Yellow River scenery"] },
};

// ── City data ────────────────────────────────────────────────────────────────
export const CITIES: Record<string, CityInfo> = {
  xiamen: {
    id: "xiamen",
    nameZh: "厦门",
    nameEn: "Xiamen",
    province: "fujian",
    provinceZh: "福建省",
    tagline: "Garden on the Sea",
    description:
      "A coastal city of rare elegance — bougainvillea-draped colonial mansions on Gulangyu Island, wide seaside boulevards lined with banyan trees, and a vibrant food scene that blends Hokkien street food with specialty coffee culture.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "鼓浪屿", nameEn: "Gulangyu Island", tag: "UNESCO Heritage", description: "A car-free island just 5 minutes by ferry, packed with colonial architecture, piano museums, art galleries, and sea-view cafes. Allow a full day to explore properly.", tip: "Take the public ferry (not the tourist ferry) — it's cheaper and departs from the same pier." },
      { name: "南普陀寺", nameEn: "Nanputuo Temple", tag: "Temple", description: "An active Buddhist temple dating to the Tang Dynasty, nestled against Wulao mountain. The vegetarian restaurant inside is excellent and very affordable.", tip: "Visit early morning (before 8am) for a peaceful experience without crowds." },
      { name: "厦门大学", nameEn: "Xiamen University", tag: "Iconic Campus", description: "One of China's most beautiful universities — a mix of traditional and Western architecture on the seafront. The芙蓉 lake and cherry blossom avenue are iconic.", tip: "Entry is free. Show your passport at the gate and register as a visitor." },
      { name: "胡里山炮台", nameEn: "Hulishan Fort", tag: "Historic Site", description: "A Qing dynasty coastal fort housing the Krupp cannon — at the time of its installation in 1893, one of the largest in the world.", tip: "Combine with a walk along the Binhai Road seaside path — one of China's most pleasant urban walks." },
      { name: "曾厝垵", nameEn: "Zengcuoan Village", tag: "Art Village", description: "Once a humble fishing village, now a lively mix of boutique hostels, art studios, night market stalls, and local food. Authentic and relaxed.", tip: "Best visited in the evening when the night market comes alive." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Xiamen Gaoqi International Airport (XMN) — 30 minutes to city centre by metro (Line 3). Taxis cost around ¥80. No airport express bus needed." },
      { mode: "🚄 High-speed rail", details: "Xiamen North Station (厦门北站) connects to Shanghai (4h), Beijing (8h), Guangzhou (2h), Fuzhou (1h). Xiamen station is smaller and more central for short trips." },
      { mode: "🚇 Metro", details: "3 metro lines cover the main areas. Line 1 runs from Xiamen North Station through the city centre to the ferry terminal. Single trips cost ¥2–6." },
      { mode: "🚢 Ferry to Gulangyu", details: "Public ferry: ¥35 round-trip from the Ferry Terminal near the waterfront (includes return). Runs every 30 minutes. Tourist ferry from Dongdu is more expensive and less convenient." },
      { mode: "🛵 Shared bikes", details: "Hello Bike, Meituan, and DiDi Bike are everywhere. Download the apps before arrival. Most rides cost ¥1.5 for 30 minutes. Perfect for the seaside boulevard." },
    ],
    food: [
      { name: "沙茶面", nameEn: "Shacha Noodles", description: "Xiamen's signature dish — thick wheat noodles in a rich, slightly spicy peanut and seafood broth topped with pig intestine, shrimp, and bloodcake. Essential.", must: true },
      { name: "海蛎煎", nameEn: "Oyster Omelette", description: "Crispy egg omelette packed with fresh oysters and spring onions, served with a sweet chili sauce. A street food staple across Fujian and Taiwan.", must: true },
      { name: "薄饼", nameEn: "Spring Roll (Báo Bǐng)", description: "Unlike fried spring rolls, these are soft rice-flour crepes filled with stir-fried turnip, pork, egg, and peanut powder. Lunar New Year staple now sold year-round.", must: false },
      { name: "沙爹牛肉", nameEn: "Satay Beef", description: "Thinly sliced beef in a fragrant satay sauce — a legacy of Xiamen's historical connection with Southeast Asia.", must: false },
      { name: "土笋冻", nameEn: "Tǔ Sǔn Jelly", description: "A local delicacy — sea worm jelly served cold with vinegar, mustard, and sweet sauce. Adventurous but worth trying at least once.", must: false },
    ],
    checkin: [
      { name: "鼓浪屿龙头路", nameEn: "Longtou Road, Gulangyu", vibe: "Picturesque colonial lane", tip: "Walk up from the ferry pier — the light is best in early morning and golden hour." },
      { name: "环岛路海边", nameEn: "Huandao Road Seaside", vibe: "Scenic coastal boulevard", tip: "Rent a bike and cycle from Zengcuoan to Guanyinshan — about 8km of sea views." },
      { name: "八市海鲜市场", nameEn: "Bashi Seafood Market", vibe: "Local wet market", tip: "Go early (before 9am) for the freshest seafood. Nearby cooked-seafood stalls are great for breakfast." },
      { name: "中山路步行街", nameEn: "Zhongshan Road Pedestrian Street", vibe: "Shopping & local snacks", tip: "Best in the evening. Try the small side alleys — that's where the real food stalls are." },
    ],
  },

  fuzhou: {
    id: "fuzhou",
    nameZh: "福州",
    nameEn: "Fuzhou",
    province: "fujian",
    provinceZh: "福建省",
    tagline: "Ancient banyan city",
    description:
      "Fujian's capital is a city of ancient banyan trees, renovated historical neighbourhoods, and three-lane-seven-alley streets preserved from the Tang dynasty. Slower and more authentic than Xiamen.",
    image:
      "https://images.unsplash.com/photo-1568894604429-4e3df6c476ef?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1568894604429-4e3df6c476ef?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "三坊七巷", nameEn: "Three Lanes and Seven Alleys", tag: "Historic District", description: "A UNESCO-nominated neighbourhood of beautifully preserved Tang and Song dynasty architecture. The best preserved historic district in all of southeastern China.", tip: "Rent a bike to explore the outer alleys — most tourists only walk the central lane." },
      { name: "鼓山", nameEn: "Gushan Mountain", tag: "Nature & Temple", description: "A wooded mountain above the city with the Yongquan Temple, thousand-year-old Buddhist carvings in the cliff face, and panoramic views over Fuzhou.", tip: "Take the cable car up (¥20), then walk back down through the forest." },
    ],
    transport: [
      { mode: "🚄 High-speed rail", details: "Fuzhou station and Fuzhou South station both connect to the national HSR network. Fuzhou to Xiamen takes about 1 hour." },
      { mode: "🚇 Metro", details: "5 metro lines. Line 1 and Line 2 cover most tourist areas including Three Lanes Seven Alleys and the train station." },
    ],
    food: [
      { name: "佛跳墙", nameEn: "Buddha Jumps Over the Wall", description: "Fuzhou's most famous dish — a rich, slow-cooked stew of abalone, sea cucumber, scallops, pork, and mushrooms. A special-occasion meal.", must: true },
      { name: "锅边糊", nameEn: "Guobian Hu (Rice Crepe Soup)", description: "Thin rice crepe shredded into a savoury broth with shrimp, mushrooms, and vegetables. The quintessential Fuzhou breakfast.", must: true },
    ],
    checkin: [
      { name: "三坊七巷", nameEn: "Three Lanes Seven Alleys", vibe: "Historic lane architecture", tip: "Visit on a weekday morning to avoid weekend crowds. The lanes are free to enter." },
    ],
  },

  lijiang: {
    id: "lijiang",
    nameZh: "丽江",
    nameEn: "Lijiang",
    province: "yunnan",
    provinceZh: "云南省",
    tagline: "Ancient Naxi Kingdom",
    description:
      "A UNESCO World Heritage city perched at 2,400m in the foothills of Jade Dragon Snow Mountain. The cobbled streets of the Old Town are the best-preserved example of Naxi minority architecture, and the surrounding scenery is simply extraordinary.",
    image:
      "https://images.unsplash.com/photo-1677922069750-944be2b9ad20?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1677922069750-944be2b9ad20?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "丽江古城", nameEn: "Lijiang Old Town", tag: "UNESCO Heritage", description: "A maze of cobbled streets, wooden Naxi houses, and clear mountain streams flowing through the town. Most beautiful at dawn and dusk when the day-trippers have gone.", tip: "Stay inside the old town — the experience at night (lanterns glowing, music from the bars) is completely different from day visits." },
      { name: "玉龙雪山", nameEn: "Jade Dragon Snow Mountain", tag: "Mountain", description: "The sacred mountain of the Naxi rises to 5,596m. The cable car takes you to 4,506m — expect cold, thin air, and extraordinary views.", tip: "Buy cable car tickets online the night before — they sell out early. Bring warm clothes even in summer." },
      { name: "泸沽湖", nameEn: "Lugu Lake", tag: "Scenic Lake", description: "A remote, high-altitude lake shared between Yunnan and Sichuan, home to the Mosuo matriarchal minority culture. A full day trip from Lijiang.", tip: "Rent a bicycle to circle the lake — about 37km of mostly flat riding with stunning views." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Lijiang Sanyi Airport (LJG) — 30km from the Old Town. Taxi to old town costs about ¥80-100. Shuttle buses also available." },
      { mode: "🚄 Slow train", details: "The scenic slow train from Kunming takes about 9 hours and is a beautiful journey through mountain terrain." },
    ],
    food: [
      { name: "丽江粑粑", nameEn: "Lijiang Baba", description: "A traditional Naxi flatbread baked on a griddle — savoury or sweet, crispy on the outside and soft inside. The perfect walking snack.", must: true },
      { name: "鸡豆凉粉", nameEn: "Chickpea Jelly", description: "Cool, wobbly chickpea jelly served with vinegar, chili, garlic and spring onions. Incredibly refreshing in the mountain heat.", must: false },
    ],
    checkin: [
      { name: "四方街", nameEn: "Sifang Square", vibe: "Heart of the Old Town", tip: "Go at 6am — you'll see local Naxi women doing their morning exercises. Completely different from the tourist scene by 10am." },
      { name: "束河古镇", nameEn: "Shuhe Ancient Town", vibe: "Quieter old town", tip: "Less crowded alternative to Lijiang Old Town — same cobbled streets, far fewer tourists." },
    ],
  },

  dali: {
    id: "dali",
    nameZh: "大理",
    nameEn: "Dali",
    province: "yunnan",
    provinceZh: "云南省",
    tagline: "Bai culture & Erhai Lake",
    description:
      "Dali's old walled city sits between the Cangshan mountains and Erhai Lake — a geography so dramatic that the Bai people built a civilisation around it for over 1,300 years. The pace here is slower than Lijiang, the scene younger and more creative.",
    image:
      "https://images.unsplash.com/photo-1569849988854-d7f43b3cc9de?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1569849988854-d7f43b3cc9de?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "洱海", nameEn: "Erhai Lake", tag: "Scenic Lake", description: "Yunnan's second-largest lake, ringed by Bai villages, flower fields, and the snow-capped Cangshan range in the background. Best explored by cycling the 130km perimeter road.", tip: "Rent an e-bike in Dali Old Town (¥50/day) for the full loop — allow 2 days to enjoy it properly." },
      { name: "三塔寺", nameEn: "Three Pagodas", tag: "Historic Monument", description: "Three Tang dynasty pagodas that have stood for over 1,200 years, perfectly reflected in a lotus pond below. One of Yunnan's most photographed landmarks.", tip: "Visit at sunset for the best reflections. Entry ¥75 but the view from outside the gate is nearly as good for free." },
    ],
    transport: [
      { mode: "🚄 High-speed rail", details: "Dali Station connects to Kunming (2h) and Lijiang (30min) by high-speed rail. Kunming is the main hub for connections to the rest of China." },
    ],
    food: [
      { name: "乳扇", nameEn: "Rushan (Yunnan Cheese)", description: "Thin fried cheese curds from Bai milk — served on a stick, crispy outside, chewy inside, sometimes dipped in sweet sauce.", must: true },
    ],
    checkin: [
      { name: "人民路", nameEn: "Renmin Road", vibe: "Backpacker & indie café street", tip: "Best explored on foot in the evening — small bars, craft coffee shops, and live music mix with local restaurants." },
    ],
  },

  chengdu: {
    id: "chengdu",
    nameZh: "成都",
    nameEn: "Chengdu",
    province: "sichuan",
    provinceZh: "四川省",
    tagline: "Pandas, teahouses & slow living",
    description:
      "The capital of Sichuan is one of China's most liveable cities — extraordinarily good food, a laid-back pace that stands in contrast to every other major Chinese city, and the world's best pandas just 30 minutes from the centre.",
    image:
      "https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "大熊猫繁育研究基地", nameEn: "Giant Panda Breeding Research Base", tag: "Wildlife", description: "Home to over 50 giant pandas and dozens of red pandas. The best place on earth to see pandas up close, in large natural enclosures.", tip: "Arrive as early as possible (opens at 7:30am). Pandas are most active in the morning when they're being fed. By noon they're asleep." },
      { name: "锦里古街", nameEn: "Jinli Ancient Street", tag: "Cultural Street", description: "A recreated Tang and Song dynasty commercial street with handicraft shops, local snack stalls, and traditional performers. Touristy but genuinely fun.", tip: "Go at night when the red lanterns are lit — that's when the atmosphere really comes alive." },
      { name: "宽窄巷子", nameEn: "Wide and Narrow Alleys", tag: "Historic Quarter", description: "Three Qing dynasty lanes preserved between modern Chengdu — boutique hotels, tea houses, galleries, and some of the city's best restaurants.", tip: "Enter through Narrow Alley (窄巷子) which is slightly less crowded than the Wide Alley entrance." },
      { name: "青城山", nameEn: "Mount Qingcheng", tag: "Taoist Mountain", description: "The birthplace of Chinese Taoism, a forested mountain with Taoist temples, mist-draped stairways, and ancient cypress trees.", tip: "Combine with Dujiangyan Irrigation System on the same day — both are on the same metro line from Chengdu." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Chengdu Tianfu International Airport (TFU, opened 2021) is 60km from downtown — metro Line 18 runs direct in ~40min. Old Shuangliu Airport (CTU) is closer for some airlines." },
      { mode: "🚄 High-speed rail", details: "Chengdu is a major HSR hub. Chengdu East and Chengdu South stations both connect to Beijing (8h), Shanghai (11h), Chongqing (1h), and Xi'an (3.5h)." },
      { mode: "🚇 Metro", details: "8 metro lines. Line 3 goes to the Panda Base (get off at Panda Avenue). Line 4 covers the historic centre. Clean, modern, and cheap." },
    ],
    food: [
      { name: "火锅", nameEn: "Sichuan Hotpot", description: "The definitive Chengdu dining experience. Order the divided pot (鸳鸯锅) for one spicy, one mild broth. Key ingredients: tripe (毛肚), duck intestine (鸭肠), beef (牛肉). Dip in sesame oil.", must: true },
      { name: "夫妻肺片", nameEn: "Husband and Wife Beef Slices", description: "Thinly sliced beef and offal in a numbing, spicy sauce of chili oil, Sichuan peppercorn, and sesame. A cold dish that showcases Sichuan flavour at its most precise.", must: true },
      { name: "担担面", nameEn: "Dandan Noodles", description: "Thin noodles with a sauce of sesame paste, chili oil, minced pork, and ya cai preserved vegetables. The Sichuan noodle dish that conquered the world.", must: true },
      { name: "钟水饺", nameEn: "Zhong Dumplings", description: "Silky boiled dumplings served with a sweet-spicy sauce of chili oil, garlic, and sugar. Very different from northern Chinese dumplings.", must: false },
    ],
    checkin: [
      { name: "太古里", nameEn: "Taikoo Li", vibe: "Open-air lifestyle mall", tip: "Walk through the Buddhist Daci Temple at the centre — it's genuinely ancient and sits surreally among the luxury shops." },
      { name: "玉林路", nameEn: "Yulin Road", vibe: "Neighbourhood bar street", tip: "Skip the tourist areas and head to Yulin Road for where Chengdu locals actually drink and eat at night." },
    ],
  },

  guilin: {
    id: "guilin",
    nameZh: "桂林",
    nameEn: "Guilin",
    province: "guangxi",
    provinceZh: "广西壮族自治区",
    tagline: "Karst peaks & the Li River",
    description:
      "The karst limestone peaks that line the Li River have inspired Chinese painters and poets for over two thousand years. Guilin is genuinely as beautiful as the landscape paintings suggest.",
    image:
      "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf7?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf7?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "漓江游船", nameEn: "Li River Cruise", tag: "Scenic Cruise", description: "The 4.5-hour boat trip from Guilin to Yangshuo passes the most dramatic karst scenery in China. The 20 RMB note features one of the bends in the river.", tip: "Book the early morning cruise (8am departure) for better light and fewer tour groups. Official price is ¥210." },
      { name: "阳朔", nameEn: "Yangshuo", tag: "Scenic Town", description: "The end point of the Li River cruise — a charming town surrounded by karst peaks. Rent a bicycle and cycle into the countryside.", tip: "Base yourself in Yangshuo, not Guilin. It has a better atmosphere and the scenery is on your doorstep." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Guilin Liangjiang International Airport (KWL) — 30km from city centre. Shuttle bus to downtown ¥20." },
      { mode: "🚄 High-speed rail", details: "Guilin North station connects to Guangzhou (2h), Changsha (2.5h), Guiyang (2h). Good connections via high-speed rail." },
    ],
    food: [
      { name: "桂林米粉", nameEn: "Guilin Rice Noodles", description: "The city's soul food — rice noodles in a rich pork bone broth, topped with braised meat, peanuts, and pickled vegetables. Eaten for breakfast.", must: true },
      { name: "啤酒鱼", nameEn: "Beer Fish", description: "Fresh river fish cooked in local Guilin beer with pickled peppers and tomatoes. A Yangshuo specialty that every restaurant serves.", must: true },
    ],
    checkin: [
      { name: "西街", nameEn: "West Street, Yangshuo", vibe: "International backpacker street", tip: "Avoid if you want local atmosphere — instead explore the smaller villages by bike." },
      { name: "遇龙河", nameEn: "Yulong River", vibe: "Bamboo raft & rural scenery", tip: "Hire a local guide with a bamboo raft on the Yulong River — less crowded than the Li River and just as beautiful." },
    ],
  },

  hangzhou: {
    id: "hangzhou",
    nameZh: "杭州",
    nameEn: "Hangzhou",
    province: "zhejiang",
    provinceZh: "浙江省",
    tagline: "Heaven on Earth",
    description:
      "For centuries the most prosperous city in China, Hangzhou's West Lake is the centrepiece of a city that still manages to feel serene despite being one of China's tech capitals. Dragon Well tea, silk, and Su Dongpo's legendary pork ribs are still here.",
    image:
      "https://images.unsplash.com/photo-1567536814655-fec50bb5e69f?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1567536814655-fec50bb5e69f?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "西湖", nameEn: "West Lake", tag: "UNESCO Heritage", description: "China's most romanticised lake, ringed by temples, pagodas, tea gardens, and weeping willows. Walk the Bai Causeway and Su Causeway, or rent a wooden boat.", tip: "Rent a bicycle (¥5/30min from Meituan bikes) and cycle the entire 15km lakeshore at sunset." },
      { name: "灵隐寺", nameEn: "Lingyin Temple", tag: "Buddhist Temple", description: "One of China's largest and wealthiest Buddhist temples, set in a forested hillside with 5th-century stone carvings in the adjacent Feilai Feng gorge.", tip: "Buy the combination ticket (temple + Feilai Feng) ¥65 — the carved grottos are the highlight." },
    ],
    transport: [
      { mode: "🚄 High-speed rail", details: "Hangzhou East station — 1 hour from Shanghai, 5 hours from Beijing. One of the best-connected cities in China." },
      { mode: "🚇 Metro", details: "6 metro lines. Line 1 runs from the train station through the city centre. West Lake is best reached by metro Line 1 or buses along the lakeshore." },
    ],
    food: [
      { name: "西湖醋鱼", nameEn: "West Lake Vinegar Fish", description: "The city's signature dish — steamed freshwater fish from the lake served in a sweet-sour ginger vinegar sauce. Elegant and delicate.", must: true },
      { name: "龙井茶", nameEn: "Dragon Well Tea", description: "China's most celebrated green tea, grown on the hillsides above West Lake. The best leaves are picked before the Qingming festival in April.", must: false },
    ],
    checkin: [
      { name: "南宋御街", nameEn: "Southern Song Imperial Street", vibe: "Historic shopping street", tip: "Walk the full length (1.5km) for a mix of street food, silk shops, and Song dynasty architecture." },
    ],
  },

  xian: {
    id: "xian",
    nameZh: "西安",
    nameEn: "Xi'an",
    province: "shaanxi",
    provinceZh: "陕西省",
    tagline: "Where the Silk Road began",
    description:
      "China's best-preserved ancient capital. The Terracotta Warriors, a beautifully intact Ming city wall, and the Muslim Quarter's night market make Xi'an one of the most rewarding cities for first-time visitors who want to go deeper.",
    image:
      "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "兵马俑", nameEn: "Terracotta Warriors", tag: "World Wonder", description: "Over 8,000 life-size clay soldiers buried with the First Emperor in 210 BC. Pit 1 is the main hall — the scale is overwhelming.", tip: "Book tickets in advance at www.bmy.com.cn. Hire an audio guide — the context is essential. Allow 3 hours minimum." },
      { name: "古城墙", nameEn: "Ancient City Wall", tag: "Historic Monument", description: "The best-preserved Ming dynasty city wall in China — 13.7km long, wide enough to drive a car on top. Rent a bike and cycle the full circuit.", tip: "Cycling the wall takes about 1.5 hours at a comfortable pace. Electric bikes available for ¥45/hour if walking is too much." },
      { name: "回民街", nameEn: "Muslim Quarter", tag: "Street Food", description: "A 1km lane of street food, tea houses, and Islamic architecture in Xi'an's Hui Muslim neighbourhood. The night market scene is excellent.", tip: "Go hungry in the evening. Must-try: roujiamo (肉夹馍 — pork burger in flatbread), biangbiang noodles, persimmon cake." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Xi'an Xianyang International Airport (XIY) — Metro Line 14 to city centre (40min, ¥7), or shuttle bus (¥25)." },
      { mode: "🚄 High-speed rail", details: "Xi'an North Station — Beijing (4.5h), Chengdu (3.5h), Shanghai (6h), Zhengzhou (2h). Excellent rail connections." },
      { mode: "🚇 Metro", details: "7 metro lines. Lines 1-4 cover the main tourist areas. Line 14 serves the airport." },
    ],
    food: [
      { name: "肉夹馍", nameEn: "Rou Jia Mo (Chinese Burger)", description: "Braised pork (or lamb) stuffed into a freshly baked flatbread. The original street burger, perfected over two thousand years. Essential.", must: true },
      { name: "Biáng Biáng面", nameEn: "Biangbiang Noodles", description: "Extra-wide, belt-like wheat noodles (each as wide as your hand) with chili oil, garlic, vinegar, and vegetables poured over. Intensely satisfying.", must: true },
      { name: "羊肉泡馍", nameEn: "Lamb Soup with Bread", description: "Crumble your own flatbread into a bowl, hand it to the kitchen, they cook it into a rich lamb and bread stew. A full meal in a bowl.", must: false },
    ],
    checkin: [
      { name: "大唐不夜城", nameEn: "Tang Dynasty No-Night City", vibe: "Tang dynasty entertainment street", tip: "Visit after dark for the full spectacle of lights, performers in Tang dress, and interactive shows." },
      { name: "永兴坊", nameEn: "Yongxing Fang", vibe: "Food market", tip: "The best place to try regional Shaanxi specialties all in one place. Less touristy than Muslim Quarter." },
    ],
  },

  beijing_city: {
    id: "beijing_city",
    nameZh: "北京",
    nameEn: "Beijing",
    province: "beijing",
    provinceZh: "北京市",
    tagline: "Five thousand years, one capital",
    description:
      "The political, cultural, and historical heart of China. Imperial palaces, ancient hutong alleys, and world-class museums — all connected by one of the finest metro systems in the world.",
    image:
      "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "故宫", nameEn: "Forbidden City", tag: "UNESCO Heritage", description: "The world's largest palace complex — 980 buildings across 72 hectares, home to 24 emperors across five centuries.", tip: "Book tickets online at least 1 day in advance (ticdata.dpm.org.cn). Tickets often sell out. Audio guide strongly recommended." },
      { name: "长城（慕田峪段）", nameEn: "Great Wall (Mutianyu)", tag: "World Wonder", description: "The most spectacular restored section of the Great Wall — steep, dramatic, and less crowded than the more-famous Badaling.", tip: "Take the cable car up (saves 1.5km of steps) and toboggan down. Allow 3-4 hours. Bus 916 from Dongzhimen station." },
      { name: "天坛", nameEn: "Temple of Heaven", tag: "UNESCO Heritage", description: "A remarkable 15th-century complex where emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is architecturally perfect.", tip: "Go early morning to see elderly Beijingers practising tai chi, playing erhu, and flying kites in the park." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Beijing Capital (PEK) or Daxing International (PKX). Both connect to the city by metro. Capital Airport Express (¥25) takes 20 mins to Dongzhimen." },
      { mode: "🚇 Metro", details: "27 metro lines. Most comprehensive metro in China. Single journeys ¥2–6. Get a Beijing Tong card for tap-in convenience." },
    ],
    food: [
      { name: "北京烤鸭", nameEn: "Peking Duck", description: "The definitive Beijing dish — lacquered crispy duck skin and meat sliced tableside, wrapped in thin pancakes with plum sauce, spring onion, and cucumber.", must: true },
      { name: "炸酱面", nameEn: "Zhajiang Mian", description: "Thick wheat noodles topped with a fermented soybean paste and ground pork sauce, served with julienned cucumber, radish, and soybean sprouts.", must: true },
    ],
    checkin: [
      { name: "南锣鼓巷", nameEn: "Nanluogu Xiang", vibe: "Hutong alley", tip: "Walk the side alleys, not just the main lane. The best cafes, bars, and boutiques are tucked down the smaller hutongs." },
      { name: "798艺术区", nameEn: "798 Art District", vibe: "Contemporary art & design", tip: "Go on a weekday — the galleries are quieter and staff are more willing to talk about the work." },
    ],
  },

  shanghai_city: {
    id: "shanghai_city",
    nameZh: "上海",
    nameEn: "Shanghai",
    province: "shanghai",
    provinceZh: "上海市",
    tagline: "China's global city",
    description:
      "A city of extraordinary contrasts — Art Deco buildings beside glass towers, world-class dining on every corner, and the easiest entry point for first-time visitors to China. Shanghai rewards both speed and depth.",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "外滩", nameEn: "The Bund", tag: "Iconic Waterfront", description: "The most famous waterfront in Asia — 1km of restored 1920s–30s buildings on one side, the futuristic Pudong skyline across the river.", tip: "Walk the Bund at night for the skyline view, but visit during the day too for the building facades and architectural detail." },
      { name: "豫园", nameEn: "Yu Garden", tag: "Classical Garden", description: "A Ming dynasty private garden in the heart of the old city — pools, rockeries, zigzag bridges, and pavilions designed to create perfect views at every turn.", tip: "Visit on a weekday morning. The adjacent Yuyuan Bazaar (touristy but good for xiaolongbao) is best at 9am." },
      { name: "田子坊", nameEn: "Tianzifang", tag: "Art Quarter", description: "A warren of converted 1930s lane houses turned into galleries, boutiques, cafes and craft studios in the French Concession.", tip: "Explore the inner alleys — the real gems are the studios and boutiques on the quieter lanes off the main path." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Pudong (PVG) — Maglev to Longyang Rd then metro (¥50, 8 mins), or metro Line 2 direct (¥8, 45 mins). Hongqiao (SHA) — metro Lines 2 and 10." },
      { mode: "🚇 Metro", details: "20 metro lines, the world's longest network. Single journey ¥3–8. Get a Shanghai Public Transport Card at any station." },
    ],
    food: [
      { name: "小笼包", nameEn: "Xiaolongbao (Soup Dumplings)", description: "Delicate pork dumplings with hot soup inside — the defining Shanghai dish. Din Tai Fung is reliable; Jia Jia Tang Bao and Fu Chun are local favourites.", must: true },
      { name: "生煎包", nameEn: "Shengjian Bao (Pan-Fried Dumplings)", description: "Fried pork dumplings with crispy bottoms and a soupy filling. Shallot-topped and sesame-dusted. A Shanghai breakfast staple.", must: true },
    ],
    checkin: [
      { name: "新天地", nameEn: "Xintiandi", vibe: "Upscale heritage district", tip: "Go for the architecture (restored shikumen lane houses) and a coffee, not for the prices — restaurants are expensive. The history museum inside is free." },
      { name: "武康路", nameEn: "Wukang Road", vibe: "Most beautiful street in Shanghai", tip: "Walk the full length for the best French Concession architecture, boutique shops, and sidewalk cafes." },
    ],
  },

  sanya: {
    id: "sanya",
    nameZh: "三亚",
    nameEn: "Sanya",
    province: "hainan",
    provinceZh: "海南省",
    tagline: "China's tropical beach escape",
    description:
      "China's premier beach destination on the southernmost tip of Hainan Island. Warm turquoise water, fresh coconuts, and seafood at every meal.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "亚龙湾", nameEn: "Yalong Bay", tag: "Beach", description: "The finest beach in Sanya — 7km of white sand with calm, clear water. The most upscale of the three main bays.", tip: "The public beach at the east end is just as good as the hotel-front section. Look for the local fishermen's boats at sunrise." },
      { name: "南山文化旅游区", nameEn: "Nanshan Cultural Tourism Zone", tag: "Buddhist Site", description: "Home to a 108m-tall Guanyin statue standing in the sea. Whether or not you're religious, the scale is impressive.", tip: "Allow 3 hours. Comfortable shoes essential — there's a lot of walking in the heat." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Sanya Phoenix International Airport (SYX) — 15km from the city. Shuttle buses to main hotels (¥15–25). Taxis cost about ¥60 to Sanya Bay." },
      { mode: "🚄 High-speed rail", details: "High-speed rail connects Sanya to Haikou (1.5h). Island loop line also reaches other coastal towns." },
    ],
    food: [
      { name: "文昌鸡", nameEn: "Wenchang Chicken", description: "Hainan's most famous dish — free-range chicken poached to perfect tenderness, served with rice cooked in chicken fat and a dipping sauce of ginger and chili.", must: true },
      { name: "椰子饭", nameEn: "Coconut Rice", description: "Sticky rice steamed inside a fresh coconut shell, absorbing the natural coconut milk as it cooks. Sweet, fragrant, and uniquely Hainanese.", must: false },
    ],
    checkin: [
      { name: "大东海", nameEn: "Dadonghai Beach", vibe: "Lively beach for swimming", tip: "The most popular local beach — restaurants line the promenade and the water is calm for swimming." },
    ],
  },

  guangzhou: {
    id: "guangzhou",
    nameZh: "广州",
    nameEn: "Guangzhou",
    province: "guangdong",
    provinceZh: "广东省",
    tagline: "Cantonese food capital of the world",
    description:
      "If there is one city in China where food is the entire reason to visit, it is Guangzhou. Dim sum (yum cha) as a daily institution, roast meats hanging in every window, and an enthusiasm for eating that is unmatched anywhere else.",
    image:
      "https://images.unsplash.com/photo-1693304396147-5d8bffcaf6fa?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1693304396147-5d8bffcaf6fa?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "广州塔", nameEn: "Canton Tower", tag: "Iconic Landmark", description: "The striking 600m TV tower with observation decks and a sky walk at the top — good views over the entire Pearl River Delta.", tip: "The view from the ground around Haixin Sha Island at night is just as dramatic as the view from the tower, and it's free." },
      { name: "陈家祠", nameEn: "Chen Clan Ancestral Hall", tag: "Architecture", description: "A stunning 1890s complex of 19 buildings covered in intricate Guangdong folk art — sculpted rooflines, woodwork, and ceramic friezes.", tip: "Allow 2 hours. The ceramics and stone carvings on the roof are extraordinary up close — look for the miniature landscapes." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Guangzhou Baiyun International Airport (CAN) — Metro Line 3 direct to city centre in 40 minutes (¥11)." },
      { mode: "🚇 Metro", details: "14 metro lines. One of the most comprehensive metro systems in China outside Beijing and Shanghai." },
    ],
    food: [
      { name: "早茶（饮茶）", nameEn: "Dim Sum (Yum Cha)", description: "Not just a meal, but a social institution in Guangzhou. Morning tea service with carts of har gow, siu mai, char siu bao, and egg tarts. Essential.", must: true },
      { name: "烧鸭", nameEn: "Roast Duck", description: "Cantonese roast duck has a crispier, more savoury glaze than Peking duck. Served over rice with plum sauce.", must: true },
    ],
    checkin: [
      { name: "上下九步行街", nameEn: "Shangxia Jiu Pedestrian Street", vibe: "Traditional Guangzhou street life", tip: "Explore the side alleys for authentic Cantonese snack stalls that predate the tourist-facing main lane." },
    ],
  },

  shenzhen: {
    id: "shenzhen",
    nameZh: "深圳",
    nameEn: "Shenzhen",
    province: "guangdong",
    provinceZh: "广东省",
    tagline: "The city that reinvented itself",
    description:
      "Forty years ago, a fishing village. Today, a metropolis of 17 million and the hardware capital of the world. Shenzhen's energy is electric — startups, street art, outstanding Cantonese food, and direct access to Hong Kong.",
    image:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "华强北电子市场", nameEn: "Huaqiangbei Electronics Market", tag: "Tech Market", description: "The world's largest electronics market — over a million products across dozens of buildings. Fascinating whether you're buying or just browsing.", tip: "Bring a local if you can. Prices are negotiable for bulk orders; less so for individual items. Great for phone accessories, gadgets, and components." },
      { name: "大鹏所城", nameEn: "Dapeng Fortress", tag: "Historic Site", description: "A remarkably well-preserved Ming dynasty fortress from 1394, now a living village with traditional architecture and a weekend market.", tip: "Best visited on a Sunday when the market is active. Combine with a visit to the adjacent Xichong beach." },
    ],
    transport: [
      { mode: "✈️ Flying in", details: "Shenzhen Bao'an International Airport (SZX) — Metro Line 11 to city centre in 45 minutes (¥18)." },
      { mode: "🛳️ To Hong Kong", details: "Ferry from Shekou or Futian checkpoint to various HK ports. Luohu crossing is the simplest overland border — walk across after metro Line 1." },
    ],
    food: [
      { name: "沙井蚝", nameEn: "Shajing Oysters", description: "Freshwater oysters from the Shajing estuary — grilled, steamed, or eaten raw with chili sauce. A Shenzhen speciality.", must: true },
    ],
    checkin: [
      { name: "南头古城", nameEn: "Nantou Ancient City", vibe: "Urban village meets contemporary art", tip: "The juxtaposition of 1,700-year-old walls and contemporary design studios is uniquely Shenzhen. Good for street photography." },
    ],
  },

  nanjing: {
    id: "nanjing",
    nameZh: "南京",
    nameEn: "Nanjing",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "Ancient capital of six dynasties",
    description: "One of China's most historically layered cities — the capital of six dynasties, a city that endured its darkest chapter in 1937, and a place that continues to honour memory with unusual thoughtfulness.",
    image: "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "中山陵", nameEn: "Sun Yat-sen Mausoleum", tag: "Historic Monument", description: "A magnificent mausoleum on Zijin Mountain — 392 steps up through pine forest to the blue-tiled memorial hall.", tip: "Combine with the adjacent Linggu Temple and Ming Xiaoling Mausoleum for a full day in Zijin Mountain." },
    ],
    transport: [
      { mode: "🚄 High-speed rail", details: "Nanjing South Station — 1h to Shanghai, 3.5h to Beijing. One of the best-connected cities on the Beijing-Shanghai corridor." },
    ],
    food: [
      { name: "盐水鸭", nameEn: "Salted Duck", description: "Nanjing's most famous product — duck cured in brine with star anise and other spices, then poached. Sold at every street corner in the old city.", must: true },
    ],
    checkin: [
      { name: "夫子庙", nameEn: "Confucius Temple", vibe: "Historic riverside district", tip: "The Qinhuai River cruise at night is one of the most beautiful things to do in Nanjing." },
    ],
  },

  suzhou: {
    id: "suzhou",
    nameZh: "苏州",
    nameEn: "Suzhou",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "Classical gardens & silk",
    description: "China's garden city — nine UNESCO World Heritage classical gardens, ancient canals, and the finest silk production in the country. Just 30 minutes from Shanghai by high-speed rail.",
    image: "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=1200&h=600&fit=crop&auto=format",
    attractions: [
      { name: "拙政园", nameEn: "Humble Administrator's Garden", tag: "UNESCO Heritage", description: "The largest and most celebrated of Suzhou's classical gardens — winding paths, pavilions over water, lotus ponds, and bamboo groves.", tip: "Visit early morning (gates open at 7:30am) before the tour groups arrive. Allow 2 hours." },
    ],
    transport: [
      { mode: "🚄 High-speed rail", details: "Suzhou is just 30 minutes from Shanghai by G-train. Perfect for a day trip, though an overnight is better." },
    ],
    food: [
      { name: "松鼠鳜鱼", nameEn: "Squirrel-Shaped Mandarin Fish", description: "A signature Suzhou dish — fried fish carved into a squirrel shape, served in a sweet and sour sauce that recreates the squirrel's tail.", must: true },
    ],
    checkin: [
      { name: "平江路", nameEn: "Pingjiang Road", vibe: "Canal-side historic lane", tip: "Walk the full length of Pingjiang Road for the best canal views, tea houses, and silk shops." },
    ],
  },
};

// Helper: get all provinces as array
export const PROVINCE_LIST = Object.values(PROVINCES);

// Hot cities for homepage (shown below the map)
export const HOT_CITIES = ["beijing_city", "shanghai_city", "guangzhou", "shenzhen", "chengdu", "xian", "lijiang", "guilin"];
