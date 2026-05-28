// ── Detailed city data for China Decoder ─────────────────────────────────────
// 10 priority cities — content in English for international travellers

export interface AttractionDetail {
  name: string;
  description: string;
  category: string;
}

export interface FoodDetail {
  name: string;
  nameZh: string;
  description: string;
  must: boolean;
}

export interface TransportDetail {
  mode: string;
  details: string;
}

export interface DayTrip {
  name: string;
  nameZh: string;
  distance: string;
  description: string;
  whyGo: string;
  adminNote?: string;
}

export interface CityDetail {
  id: string;
  nameZh: string;
  nameEn: string;
  province: string;
  provinceZh: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  /** Optional video sequence. First item plays once; last item loops indefinitely.
   *  Multiple items crossfade between each other. */
  heroVideos?: string[];
  highlights: string[];
  attractions: AttractionDetail[];
  food: FoodDetail[];
  bestSeason: string;
  transportation: TransportDetail[];
  accommodation: string;
  travelTips: string[];
  dayTrips?: DayTrip[];
}

export const CITY_DETAILS: Record<string, CityDetail> = {

  // ── 1. Beijing ───────────────────────────────────────────────────────────────
  beijing_city: {
    id: "beijing_city",
    nameZh: "北京",
    nameEn: "Beijing",
    province: "beijing",
    provinceZh: "北京市",
    tagline: "Five thousand years, one capital",
    description:
      "The political, cultural, and historical heart of China. Imperial palaces, ancient hutong alleys, and world-class museums — all woven together by one of the finest metro systems in the world. Whether it's your first visit or your fifth, Beijing always has more to reveal.",
    image:
      "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1590301729964-23833732ee04?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Imperial palace complex", "The Great Wall", "Hutong alley culture", "World-class museums", "Peking duck"],
    attractions: [
      {
        name: "Forbidden City (Palace Museum)",
        description:
          "The world's largest palace complex — 980 buildings across 72 hectares, home to 24 emperors across five centuries. The Meridian Gate, Hall of Supreme Harmony, and the Treasure Gallery are unmissable. Book tickets online well in advance; they frequently sell out.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Great Wall — Mutianyu Section",
        description:
          "The most spectacular restored section of the Great Wall — steep, dramatic, and far less crowded than Badaling. Take the cable car up and toboggan down. Winter snow transforms it into something extraordinary.",
        category: "World Wonder",
      },
      {
        name: "Temple of Heaven",
        description:
          "A magnificent 15th-century complex where emperors prayed for good harvests. The circular Hall of Prayer for Good Harvests is architecturally perfect. Visit early morning to find elderly Beijingers practising tai chi, flying kites, and playing erhu in the surrounding park.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Nanluogu Xiang (Hutong Quarter)",
        description:
          "Beijing's best-preserved hutong neighbourhood, with 700 years of history in its grid of narrow lanes. The main alley is lined with cafés and boutiques; the real reward is wandering the quieter side lanes to glimpse authentic courtyard life.",
        category: "Historic Quarter",
      },
      {
        name: "Summer Palace",
        description:
          "China's finest surviving imperial garden — Kunming Lake and Longevity Hill form a landscape of pavilions, bridges, and covered walkways. The 728-metre Long Corridor is painted with over 14,000 scenes. Spring blossom and autumn foliage are both spectacular.",
        category: "UNESCO World Heritage",
      },
      {
        name: "798 Art District",
        description:
          "A former Bauhaus-style munitions factory turned contemporary art hub — dozens of galleries, design studios, and cafés spread across raw industrial architecture. Go on a weekday when the galleries are quieter and staff have time to talk about the work.",
        category: "Contemporary Art",
      },
      {
        name: "National Museum of China",
        description:
          "One of the world's most-visited museums, with a collection of over 1.4 million artefacts spanning Chinese civilisation from the Neolithic to the present day. Free entry, but advance online registration is required.",
        category: "Museum",
      },
    ],
    food: [
      {
        name: "Peking Duck",
        nameZh: "北京烤鸭",
        description:
          "The definitive Beijing dish — lacquered crispy duck, sliced tableside, wrapped in thin pancakes with plum sauce, spring onion, and cucumber. Quanjude and Da Dong are the historic standards; book ahead for dinner.",
        must: true,
      },
      {
        name: "Zhajiang Mian",
        nameZh: "炸酱面",
        description:
          "Hand-pulled wheat noodles topped with a fermented soybean paste and minced pork sauce, served with julienned cucumber, radish, and soybean sprouts. The everyday noodle dish of Beijing households.",
        must: true,
      },
      {
        name: "Luzhu Huoshao",
        nameZh: "卤煮火烧",
        description:
          "Flatbread slow-cooked together with pork offal, tofu, and intestines in a rich soy broth. An acquired taste and a true test of local commitment — best found in the old southern districts.",
        must: false,
      },
      {
        name: "Douzhir with Jiaoquan",
        nameZh: "豆汁儿配焦圈",
        description:
          "A fermented mung-bean drink with a distinctly sour, earthy flavour, served alongside crispy fried dough rings. The definitive Beijing taste test — locals swear by it; visitors are divided.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) and autumn (September–November) are ideal. Spring brings blossom to the parks; autumn offers clear skies and the famous red foliage at Fragrant Hill in late October. Summer (July–August) is hot and humid with occasional heavy rain — go early to the Wall to beat the heat. Winter (December–February) is cold but far less crowded, and a snow-dusted Forbidden City is unforgettable.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Capital International Airport (PEK): Airport Express train, ¥25, 20 minutes to Dongzhimen. Daxing International Airport (PKX): metro to city centre in about 40 minutes, ¥35.",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Beijing South Station connects to the national HSR network: Shanghai 4.5 hours, Xi'an 4.5 hours, Guangzhou 8 hours. Beijing Station and Beijing West serve some conventional lines.",
      },
      {
        mode: "🚇 City metro",
        details:
          "27 metro lines cover every major sight. Single journeys ¥3–6. Get a Beijing Tong card for tap-in convenience. The metro beats taxis in almost every scenario — traffic in Beijing is severe.",
      },
    ],
    accommodation:
      "Wangfujing / Dongcheng is the best base for first-time visitors — walking distance to the Forbidden City and Tiananmen. Sanlitun / Chaoyang suits travellers who want nightlife and international restaurants. Boutique courtyard hotels around Nanluogu Xiang offer an authentic old-Beijing feel (¥500–1,500/night). Budget hostels cluster near Nanluogu Xiang and Gulou from around ¥80–150/bed.",
    travelTips: [
      "Forbidden City and Mutianyu Great Wall tickets must be booked online in advance — they sell out days ahead in peak season.",
      "Air quality in Beijing can vary significantly. Download an AQI monitor app (e.g. AirVisual) and save indoor museum visits for high-pollution days.",
      "Cycling hutongs is one of the best ways to explore the old city. Meituan and Hello bikes cost about ¥1.5 per 30 minutes — no deposit required.",
      "Always use a metered taxi or Didi (China's Uber equivalent) — Didi supports international payment cards and is more reliable than flagging down a cab.",
      "Most major Beijing museums are free or low-cost, but require advance registration on their official apps. Don't skip the National Museum — the collection is extraordinary.",
    ],
  },

  // ── 2. Shanghai ──────────────────────────────────────────────────────────────
  shanghai_city: {
    id: "shanghai_city",
    nameZh: "上海",
    nameEn: "Shanghai",
    province: "shanghai",
    provinceZh: "上海市",
    tagline: "China's global city",
    description:
      "A city of extraordinary contrasts — Art Deco buildings beside glass towers, Michelin restaurants a street away from soup dumpling breakfast stalls. Shanghai is China's most internationally fluent city and the easiest entry point for first-time visitors. The Bund skyline at night is one of the world's great urban views.",
    image:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1200&h=600&fit=crop&auto=format",
    heroVideos: [
      "https://videos.pexels.com/video-files/31776600/13536901_2560_1440_30fps.mp4",
      "https://videos.pexels.com/video-files/34048014/14440639_2560_1440_60fps.mp4",
    ],
    highlights: ["Art Deco Bund waterfront", "Soup dumplings (xiaolongbao)", "French Concession tree-lined streets", "Lujiazui skyline", "World-class contemporary art"],
    attractions: [
      {
        name: "The Bund",
        description:
          "Asia's most famous waterfront — 1km of restored 1920s–30s buildings on one side, the futuristic Pudong skyline shimmering across the Huangpu River on the other. Walk it at night for the full spectacle, but come back in the day to appreciate the architectural detail of the buildings.",
        category: "Iconic Landmark",
      },
      {
        name: "Yu Garden",
        description:
          "A Ming dynasty private garden in the heart of the old city — rockeries, zigzag bridges, koi ponds, and pavilions engineered to frame perfect views at every turn. The adjacent Yuyuan Bazaar is touristy but reliable for soup dumplings — best at 9am before the crowds arrive.",
        category: "Classical Garden",
      },
      {
        name: "Tianzifang",
        description:
          "A warren of converted 1930s lane houses in the French Concession, turned into galleries, boutiques, cafés, and craft studios. Skip the main lane and lose yourself in the inner alleys — that's where the real gems are.",
        category: "Arts Quarter",
      },
      {
        name: "Wukang Road",
        description:
          "Widely considered Shanghai's most beautiful street — a kilometre of French Concession architecture shaded by plane trees, with independent boutiques and pavement cafés. The curved Wukang Mansion at the north end is the most-photographed building in the city.",
        category: "Historic Street",
      },
      {
        name: "Shanghai Museum (People's Square)",
        description:
          "One of China's finest museums, built in the shape of a bronze ding cauldron. The bronzeware, ceramics, and Chinese painting galleries are world-class. Free entry with advance online registration.",
        category: "Museum",
      },
      {
        name: "Zhujiajiao Water Town",
        description:
          "A 1,700-year-old canal town about an hour from central Shanghai, with stone arch bridges, whitewashed walls, and far fewer tour groups than Wuzhen or Zhouzhuang. A perfect half-day escape from the city.",
        category: "Canal Town",
      },
      {
        name: "M50 Creative Park",
        description:
          "A cluster of former textile factories along Suzhou Creek, now home to over 100 galleries and art institutions. Opening shows are often free and happen most weekends. One of the best spots in Shanghai for contemporary Chinese art.",
        category: "Contemporary Art",
      },
    ],
    food: [
      {
        name: "Xiaolongbao (Soup Dumplings)",
        nameZh: "小笼包",
        description:
          "Delicate pork dumplings with hot soup sealed inside — bite a small hole first, sip the broth, then eat the whole thing. Jia Jia Tang Bao and Fu Chun are beloved local institutions; Din Tai Fung is the reliable international standard.",
        must: true,
      },
      {
        name: "Shengjian Bao (Pan-Fried Dumplings)",
        nameZh: "生煎包",
        description:
          "Fried pork dumplings with crispy, caramelised bottoms and a juicy filling, topped with sesame seeds and spring onions. Da Hu Chun and Xiao Yang Shengjian are the classic addresses. A Shanghai breakfast staple.",
        must: true,
      },
      {
        name: "Red-Braised Pork Belly",
        nameZh: "本帮红烧肉",
        description:
          "The signature of Shanghainese home cooking — pork belly slow-braised in soy sauce, Shaoxing wine, and rock sugar until the skin is silky and the meat yields at a touch. Sweet, savoury, and deeply satisfying.",
        must: true,
      },
      {
        name: "Crab Roe Soup Dumplings",
        nameZh: "蟹粉小笼",
        description:
          "A seasonal autumn treat (September–November) — xiaolongbao filled with fresh hairy crab roe and meat. Three to five times the price of regular dumplings, but the flavour is incomparable. Worth every yuan.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) brings new-green plane trees and comfortable temperatures. Autumn (September–November) is clear and mild, with hairy crab season in full swing. Summer (June–August) is hot and humid but the city stays lively around the clock. Winter (December–February) is grey and damp, but the Bund is beautifully decorated in the run-up to Spring Festival.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Pudong International Airport (PVG): Maglev to Longyang Road then metro (¥50, 8 min), or metro Line 2 direct (¥8, 45 min). Hongqiao Airport (SHA): metro Lines 2 and 10 direct to the city centre.",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Hongqiao Station is the Yangtze Delta HSR hub: Hangzhou 45 minutes, Nanjing 70 minutes, Beijing 4.5 hours. Most interprovincial trains use Shanghai Station or Shanghai South.",
      },
      {
        mode: "🚇 City metro",
        details:
          "20 metro lines — the world's longest network. Single journeys ¥3–8. Get a Shanghai Public Transport Card at any station, or use Alipay/WeChat Pay to tap in directly.",
      },
    ],
    accommodation:
      "The Bund / Huangpu District is the classic base — close to everything and ideal for the nightly skyline ritual. The French Concession (Hengshan Road, Huaihai Road) is the most characterful area, with boutique hotels from ¥600–2,000/night. Mid-range hotels around People's Square offer great value and excellent transport links. Budget travellers will find hostels near Nanjing Road and Hongqiao from ¥100–180/bed.",
    travelTips: [
      "Shanghai's metro is so good that there's almost no reason to take a taxi. Didi is available if you need a car — fares start at around ¥15.",
      "Alipay International (the tourist version) now works without a Chinese bank account — set it up before you arrive. It's accepted almost everywhere.",
      "French Concession restaurants get booked out fast on weekends. If you have a target restaurant, reserve 1–2 days ahead.",
      "The Shanghai Museum, Yuz Museum, and Long Museum are all world-class. Check their websites for free-entry days and advance booking requirements.",
      "Hairy crab season (September–November) is one of the best reasons to visit Shanghai in autumn. Look for the certified Yangcheng Lake label — counterfeits are common.",
    ],
  },

  // ── 3. Xi'an ─────────────────────────────────────────────────────────────────
  xian: {
    id: "xian",
    nameZh: "西安",
    nameEn: "Xi'an",
    province: "shaanxi",
    provinceZh: "陕西省",
    tagline: "Where the Silk Road began",
    description:
      "China's best-preserved ancient capital and the eastern terminus of the Silk Road. The Terracotta Warriors, a fully intact Ming city wall, and the Muslim Quarter's night market form a trio that makes Xi'an one of the most rewarding cities for first-time visitors to China who want to go deep into history.",
    image:
      "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1523946963389-207478f6cb2e?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Terracotta Army", "Complete Ming city wall", "Muslim Quarter night market", "Classic Shaanxi street food", "Silk Road history"],
    attractions: [
      {
        name: "Terracotta Army",
        description:
          "Over 8,000 life-size clay soldiers buried with the First Emperor in 210 BC. Pit 1 is the size of an aircraft hangar — the scale is genuinely overwhelming. Pit 2 shows the variety of troop types; Pit 3 is the command headquarters. No photograph prepares you for being there.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Ancient City Wall",
        description:
          "The best-preserved Ming dynasty city wall in China — 13.7km long, wide enough to drive a car on top. Rent a bicycle and cycle the full circuit for the finest overview of old and new Xi'an side by side.",
        category: "Historic Monument",
      },
      {
        name: "Muslim Quarter (Huimin Jie)",
        description:
          "Xi'an's Hui Muslim neighbourhood — a 1km corridor of street food stalls, tea houses, and mosque architecture. Roujiamo (pork in flatbread), biangbiang noodles, and persimmon cakes line every alley. Busiest and best after 6pm.",
        category: "Food & Culture",
      },
      {
        name: "Big Wild Goose Pagoda",
        description:
          "A 64-metre Tang dynasty pagoda built to house Buddhist scriptures brought back from India by the monk Xuanzang. The plaza in front hosts Asia's largest musical fountain show every evening.",
        category: "Tang Dynasty Heritage",
      },
      {
        name: "Shaanxi History Museum",
        description:
          "One of China's most important regional museums, with 1.7 million artefacts. The Tang dynasty gold and silverware gallery and the tomb mural collection are highlights. Free entry but advance reservation required — slots fill days ahead.",
        category: "Museum",
      },
      {
        name: "Huaqing Hot Spring Palace",
        description:
          "The Tang imperial hot spring resort where Emperor Xuanzong entertained his famous concubine Yang Guifei. The same hillside was also the site of the 1936 Xi'an Incident. History layers upon history.",
        category: "Historic Site",
      },
    ],
    food: [
      {
        name: "Rou Jia Mo (Chinese Burger)",
        nameZh: "肉夹馍",
        description:
          "Braised pork or lamb stuffed into a freshly baked flatbread — crispy on the outside, tender and intensely savoury inside. This is one of the world's oldest street foods, perfected over two thousand years. Non-negotiable.",
        must: true,
      },
      {
        name: "Biangbiang Noodles",
        nameZh: "Biáng Biáng面",
        description:
          "Extra-wide, belt-like hand-pulled wheat noodles — each as wide as your hand — dressed with chilli oil, vinegar, garlic, and hot oil poured tableside over dried spices. Fiercely satisfying.",
        must: true,
      },
      {
        name: "Yangrou Paomo",
        nameZh: "羊肉泡馍",
        description:
          "You tear your own flatbread into tiny pieces, hand the bowl to the kitchen, and they slow-cook it into a rich lamb broth with glass noodles and wood ear mushrooms. The process is part of the experience.",
        must: true,
      },
      {
        name: "Liangpi (Cold Skin Noodles)",
        nameZh: "凉皮",
        description:
          "Chilled rice or wheat noodles dressed with sesame paste, chilli oil, vinegar, and cucumber — a refreshing counterpoint to Xi'an's heavier dishes. Found at street stalls everywhere, especially in summer.",
        must: false,
      },
    ],
    bestSeason:
      "Autumn (September–November) is the best time — cool air, clear skies, and comfortable conditions for walking the city wall and touring the Terracotta Warriors. Spring (March–May) is pleasant with occasional sandstorms. Summer (June–August) is hot but the Muslim Quarter night market is at its most electric. Winter (December–February) is cold but quiet, and indoor museums are the logical focus.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Xi'an Xianyang International Airport (XIY): Metro Line 14 to the city centre in 40 minutes (¥7), or airport shuttle bus to Bell Tower area (¥25).",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Xi'an North Station: Beijing 4.5 hours, Chengdu 3.5 hours, Shanghai 6 hours, Zhengzhou 2 hours. Excellent connections across the national HSR network.",
      },
      {
        mode: "🚇 City metro",
        details:
          "7 metro lines covering the main urban area. Bell Tower station (Lines 2 & 3) is the central hub. Metro Line 9 now runs to the Terracotta Warriors — alight at Terracotta Warriors Station and walk 1km.",
      },
    ],
    accommodation:
      "The Bell Tower / Drum Tower area is the best base — walking distance to the city wall, Muslim Quarter, and the History Museum. Boutique hotels near the South Gate offer a strong sense of place (¥300–800/night). For the Terracotta Warriors, a night in Lintong District puts the site on your doorstep and lets you arrive before the tour buses. Budget hostels cluster around Jiefang Road and East Pass Street (¥80–150/bed).",
    travelTips: [
      "The Shaanxi History Museum requires advance booking via its official WeChat mini-programme — slots fill 3–5 days ahead. Don't arrive without a reservation.",
      "Terracotta Warriors tickets must be bought online at bmy.com.cn in advance. Peak season often sells out; long on-site queues await those who haven't pre-booked.",
      "Cycling the city wall is one of Xi'an's best experiences — allow 1.5 hours at a relaxed pace. Bike rental is ¥45/hour; electric bikes available for ¥60/hour.",
      "The Muslim Quarter is at its best after 6pm when the stalls light up and the crowds arrive. Coming in the afternoon is better for photography without the crowds.",
      "The Tang Paradise (大唐不夜城) pedestrian street is worth visiting after dark for the light displays and performers in Tang dynasty costumes.",
    ],
  },

  // ── 4. Chengdu ───────────────────────────────────────────────────────────────
  chengdu: {
    id: "chengdu",
    nameZh: "成都",
    nameEn: "Chengdu",
    province: "sichuan",
    provinceZh: "四川省",
    tagline: "Pandas, teahouses & slow living",
    description:
      "The capital of Sichuan is one of China's most liveable cities — outrageously good food, a laid-back pace that defies every other major Chinese city, and the world's best pandas just 30 minutes from the centre. Chengdu rewards travellers who slow down and stay a little longer than planned.",
    image:
      "https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1526716173434-a1b560f2065d?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Giant Panda Breeding Base", "Sichuan hotpot", "Wide and Narrow Alleys teahouses", "Taoist mountains", "Sanxingdui ancient civilisation"],
    attractions: [
      {
        name: "Giant Panda Breeding Research Base",
        description:
          "The world's finest place to see giant pandas — over 50 animals in large, naturalistic enclosures, with red pandas roaming freely nearby. Arrive at opening time (7:30am) when feeding happens and the pandas are most active. By noon they're asleep.",
        category: "Wildlife",
      },
      {
        name: "Wide and Narrow Alleys",
        description:
          "Three preserved Qing dynasty lanes — Kuan Alley, Zhai Alley, and Jing Alley — lined with boutique hotels, teahouses, design studios, and excellent restaurants. The best of Chengdu's heritage streets, especially beautiful when the red lanterns are lit at dusk.",
        category: "Historic Quarter",
      },
      {
        name: "Jinli Ancient Street",
        description:
          "A recreated Tang–Song dynasty commercial street adjacent to the Wuhou Shrine, lively with craftspeople, street food vendors, and Sichuan opera performers. Touristy by day, genuinely atmospheric at night when the lanterns come on.",
        category: "Cultural Street",
      },
      {
        name: "Wuhou Shrine",
        description:
          "China's only shrine combining a ruler and his prime minister — dedicated to the Kingdom of Shu and strategist Zhuge Liang of Three Kingdoms fame. Ancient cypresses, moss-covered stone steles, and a remarkable Tang dynasty inscription.",
        category: "Historic Site",
      },
      {
        name: "Mount Qingcheng",
        description:
          "The birthplace of Chinese Taoism — a forested mountain of Taoist temples, bamboo groves, misty stairways, and ancient cypress trees. The 2–3 hour ascent can be combined with the nearby Dujiangyan Irrigation System on the same day.",
        category: "Taoist Mountain",
      },
      {
        name: "Sanxingdui Museum",
        description:
          "About 45 minutes from Chengdu, the Sanxingdui site preserves a 3,000-year-old Bronze Age civilisation with no parallel in Chinese history. The enormous bronze masks and standing figures are genuinely alien — unlike anything else you'll see in China.",
        category: "Archaeological Museum",
      },
    ],
    food: [
      {
        name: "Sichuan Hotpot",
        nameZh: "四川火锅",
        description:
          "The defining Chengdu experience — a bubbling cauldron of beef tallow, dried chillies, and Sichuan peppercorns. Order the split pot (one spicy, one mild) if you're heat-sensitive. Key items: tripe (máodù), duck intestine (yācháng), beef. Dip everything in a sesame oil bowl.",
        must: true,
      },
      {
        name: "Husband and Wife Beef Slices",
        nameZh: "夫妻肺片",
        description:
          "Thinly sliced beef and offal in a numbing, complex sauce of chilli oil, Sichuan peppercorn, sesame, and peanuts. A cold dish that showcases the full spectrum of Sichuan flavour in a single bowl. The name has nothing to do with lung — it refers to the couple who invented it.",
        must: true,
      },
      {
        name: "Dandan Noodles",
        nameZh: "担担面",
        description:
          "Thin wheat noodles with a sauce of sesame paste, chilli oil, minced pork, and preserved Yibin mustard greens. Served in a small bowl — the Sichuan street snack that conquered the world. Order two.",
        must: true,
      },
      {
        name: "Zhong Dumplings",
        nameZh: "钟水饺",
        description:
          "Silky boiled dumplings served in a sweet-savoury sauce of chilli oil, garlic, and a touch of sugar — very different from northern Chinese dumplings. The original Zhong Dumplings shop on Tidu Street has been operating since 1931.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) is ideal — mild temperatures, blooming flora, and a city in full outdoor-living mode. Autumn (September–November) is the other great season — clear days and the best conditions for day trips into the mountains. Chengdu is mild year-round; even winter is rarely severe, and pandas are often more active in cool weather. Summer (June–August) is hot and humid, but hotpot after midnight is a Chengdu institution.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Tianfu International Airport (TFU, opened 2021): Metro Line 18 to the city centre in about 40 minutes. Old Shuangliu Airport (CTU) is still active for some carriers — Metro Line 10, about 30 minutes.",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Chengdu East and Chengdu South stations connect the HSR network: Xi'an 3.5 hours, Chongqing 1 hour, Beijing 8 hours, Kunming 3 hours.",
      },
      {
        mode: "🚇 City metro",
        details:
          "8 metro lines. Line 3 goes to Panda Avenue (Daxiongmao station, about 3km from the Panda Base). Line 4 covers the historic centre. Line 18 serves Tianfu Airport.",
      },
    ],
    accommodation:
      "Chunxi Road / Jinjiang District is the most popular base — walking distance to Taikoo Li, the IFS mall, and close to most sights. Boutique hotels near Wide and Narrow Alleys offer the best atmosphere (¥400–1,200/night). Budget hostels cluster around Yulin Road and near Jinli (¥80–150/bed). For Sanxingdui, a night in Guanghan City saves the round trip and lets you visit at opening time.",
    travelTips: [
      "The Panda Base must be visited right at opening (7:30am). By 9am most pandas have eaten and gone to sleep — a late start dramatically reduces the experience.",
      "Sichuan hotpot is rich and oily. Using a sesame oil dipping bowl (māyóu dié) helps coat the food and cuts through the spice. For first-timers, order the split pot — one spicy broth, one mild.",
      "The teahouse experience in Wide and Narrow Alleys is essential Chengdu — order a gaiwan (lidded bowl) of tea, sit back, and commit to doing nothing for at least an hour.",
      "Sanxingdui Museum is highly recommended. Book tickets in advance online and plan it as a separate day from Dujiangyan/Qingcheng — both deserve proper time.",
      "Chengdu taxis are cheap (metered from ¥8), but Didi is more convenient and more reliable in the evenings near the popular restaurant strips.",
    ],
    dayTrips: [
      {
        name: "Leshan Giant Buddha",
        nameZh: "乐山大佛",
        distance: "~1.5h south by high-speed rail",
        description: "The world's tallest stone Buddha (71m), carved from a cliff at the confluence of three rivers. The full scale is only visible from a boat on the water — the river cruise is essential.",
        whyGo: "One of humanity's most extraordinary stone sculptures, and a UNESCO World Heritage site you can reach before lunch.",
      },
      {
        name: "Mount Emei",
        nameZh: "峨眉山",
        distance: "~2h south by high-speed rail",
        description: "One of China's four sacred Buddhist mountains — summit temples in clouds, Tibetan macaques on the trails, and sea-of-cloud views from the Golden Summit. Two days is ideal; one long day is possible by cable car.",
        whyGo: "The combination of misty mountain scenery and 2,000-year-old Buddhist temples is unlike anything else in Sichuan.",
      },
      {
        name: "Mount Siguniang",
        nameZh: "四姑娘山",
        distance: "~3.5h northwest by bus",
        description: "Four-peaked alpine massif reaching 6,250m — glacial valleys, horse treks, and day hikes in Shuangqiao Valley. Scenery that looks more Swiss Alps than China.",
        whyGo: "The most dramatic alpine scenery reachable from Chengdu without a flight.",
        adminNote: "Located in Aba Tibetan & Qiang Autonomous Prefecture — a longer drive but absolutely worth it for mountain scenery unlike anywhere else in Sichuan.",
      },
    ],
  },

  // ── 5. Hangzhou ──────────────────────────────────────────────────────────────
  hangzhou: {
    id: "hangzhou",
    nameZh: "杭州",
    nameEn: "Hangzhou",
    province: "zhejiang",
    provinceZh: "浙江省",
    tagline: "Heaven on Earth",
    description:
      "For centuries the most prosperous city in China, Hangzhou still wears its beauty lightly. West Lake is the centrepiece of a city that somehow remains serene despite being one of China's tech capitals. Dragon Well tea, world-class silk, and Su Dongpo's legendary braised pork — the old pleasures are all still here.",
    image:
      "https://images.unsplash.com/photo-1567536814655-fec50bb5e69f?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1567536814655-fec50bb5e69f?w=1200&h=600&fit=crop&auto=format",
    highlights: ["West Lake's Ten Scenes", "Dragon Well green tea", "Lingyin Temple", "Canal town day trips", "Song dynasty heritage"],
    attractions: [
      {
        name: "West Lake",
        description:
          "China's most romanticised lake — Su Causeway and Bai Causeway cross the water, Three Pools Mirroring the Moon glitters at its centre, and willows sweep the bank on all sides. Rent a bicycle and circle the entire 15km shoreline at dusk for the finest possible introduction to Hangzhou.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Lingyin Temple & Feilai Feng",
        description:
          "One of China's largest and wealthiest Buddhist temples, set against a forested hillside. The adjacent Feilai Feng gorge contains over 300 carved stone Buddhist figures dating from the Five Dynasties to the Song — the largest collection of rock carvings in southern China.",
        category: "Buddhist Site",
      },
      {
        name: "Dragon Well Tea Plantations",
        description:
          "The hillside tea gardens above West Lake produce Longjing (Dragon Well) — arguably China's most celebrated green tea. In early April, visitors can pick and hand-roast their own leaves at farms in the Longjing Village area.",
        category: "Tea Culture",
      },
      {
        name: "Hefang Street & Southern Song Imperial Street",
        description:
          "Hangzhou's best-preserved historic district, retaining the streetscape from the Qing dynasty. Hu Qingyu Tang Traditional Chinese Medicine Museum and Zhang Xiaoquan Scissors Shop are among the century-old institutions lining the 1.5km route.",
        category: "Historic Quarter",
      },
      {
        name: "Wuzhen (West Precinct)",
        description:
          "About 1.5 hours from Hangzhou, this UNESCO-protected canal town is best experienced by staying overnight — arrive in the late afternoon, wander the lantern-lit waterways after dinner, and walk the empty lanes at dawn before the day-trippers arrive.",
        category: "Canal Town",
      },
      {
        name: "Xixi Wetland National Park",
        description:
          "A rare urban wetland just 20 minutes from the city centre, with reed beds, persimmon orchards, and winding waterways. Autumn (October–November) is spectacular — crimson persimmons against white reeds, a favourite of Chinese photographers.",
        category: "Nature",
      },
    ],
    food: [
      {
        name: "West Lake Vinegar Fish",
        nameZh: "西湖醋鱼",
        description:
          "Hangzhou's signature dish — grass carp steamed and glazed with a ginger and sweet-sour vinegar sauce. Delicate and elegant, nothing like the heavier fish dishes of other Chinese regions. Louwailou Restaurant on the lakeside is the classic address, though pricey.",
        must: true,
      },
      {
        name: "Dongpo Pork",
        nameZh: "东坡肉",
        description:
          "Named after the Song dynasty poet Su Dongpo, who allegedly invented it — pork belly slow-braised in Shaoxing wine, soy sauce, and rock sugar until silky and yielding. Served in a small clay pot with steamed lotus-leaf buns.",
        must: true,
      },
      {
        name: "Dragon Well Tea Shrimp",
        nameZh: "龙井虾仁",
        description:
          "Seasonal spring dish (best around Qingming, early April) — freshwater shrimps stir-fried with first-flush Dragon Well tea leaves. The shrimps are white and translucent; the tea adds a clean, grassy fragrance.",
        must: false,
      },
      {
        name: "Pian'er Chuan Noodles",
        nameZh: "片儿川面",
        description:
          "Hangzhou's most beloved breakfast noodle — fresh noodles in a clear, flavourful broth with pork slices, bamboo shoots, and pickled mustard greens. Find it at any local noodle shop early in the morning.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–April) is the most celebrated season — West Lake's willows and peach blossoms are at their best, and Dragon Well's new-season tea is just being picked. Autumn (October–November) brings clear skies, Xixi's persimmons and reeds, and the best conditions for a Wuzhen overnight. The rainy season in June has a misty atmosphere that West Lake was made for. Winter snow on Broken Bridge is one of the famous Ten Scenes — a rare but unforgettable sight.",
    transportation: [
      {
        mode: "🚄 By high-speed rail",
        details:
          "Hangzhou East Station: Shanghai 45 minutes, Nanjing 70 minutes, Beijing 5 hours, Chengdu 8 hours. One of the best-connected cities in eastern China.",
      },
      {
        mode: "✈️ By air",
        details:
          "Hangzhou Xiaoshan International Airport (HGH): Metro Line 1 or airport express bus to the city centre in about 50 minutes (¥15–25).",
      },
      {
        mode: "🚇 City metro",
        details:
          "6 metro lines. Line 1 runs from the rail station through the city centre. Lonxianqiao station is the closest metro stop to West Lake — about a 10-minute walk to the lakeside.",
      },
    ],
    accommodation:
      "The lakeside Binjiang / Hubin Road area is the most desirable location — morning walks to the lake are the best way to start the day. Lake-view rooms carry a significant premium (¥500–1,500/night). Mid-range business hotels along Jiefang Road offer excellent value and metro access (¥300–600/night). For budget travellers, hostels near Lonxianqiao station are a 10-minute walk from West Lake (¥100–180/bed).",
    travelTips: [
      "Hangzhou's public bicycle system (Hangzhou Public Bikes) is the most developed in China. Use Alipay to rent — about ¥1/hour. Cycling the full lakeshore is the single best activity in the city.",
      "Dragon Well tea: always buy from a certified farmer in Longjing Village or a reputable brand. Market-stall tea sold at tourist sites is frequently a lower-grade substitute.",
      "Wuzhen's West Precinct (¥150 ticket, includes night access) is best experienced with an overnight stay. Check in by 3pm to settle in before the day-trippers leave.",
      "The Lingyin Temple combination ticket (temple + Feilai Feng, ¥65) is essential — the rock carvings in the gorge are the highlight. Don't buy only the temple-only ticket (¥30).",
      "Hangzhounese food tends toward sweetness. If your palate runs savoury, you can ask restaurants for 少糖 (shǎo táng — less sugar). West Lake Vinegar Fish prices vary hugely by restaurant — compare before you sit down.",
    ],
    dayTrips: [
      {
        name: "Wuzhen Water Town",
        nameZh: "乌镇",
        distance: "~1.5h by bus from Hangzhou North Bus Station",
        description: "The most photogenic canal town in China — lantern-lit waterways, 1930s architecture, and a pace of life that Hangzhou abandoned a century ago. The West Precinct has ticketed entry (¥150) and is best with an overnight stay.",
        whyGo: "The most atmospheric water town in the Yangtze Delta, and far better preserved than Zhouzhuang or Tongli.",
      },
      {
        name: "Moganshan",
        nameZh: "莫干山",
        distance: "~1.5h northwest by bus",
        description: "A forested ridge of colonial-era summer villas and boutique hotels in bamboo groves — the weekend escape of choice for Shanghai and Hangzhou residents since the 1920s.",
        whyGo: "The freshest mountain air in eastern China, with some of the most charming boutique accommodation in the country.",
      },
      {
        name: "Putuoshan Sacred Island",
        nameZh: "普陀山",
        distance: "~3h by bus to Ningbo then ferry",
        description: "One of China's four sacred Buddhist islands — ancient sea caves, temple bells at dawn, and a monastic pace of life entirely different from the mainland. Overnight strongly recommended.",
        whyGo: "A genuinely spiritual island experience unlike anything you'll find on the mainland.",
        adminNote: "Located in Zhoushan, Zhejiang — a half-day journey each way, so an overnight on the island is strongly recommended.",
      },
    ],
  },

  // ── 6. Nanjing ───────────────────────────────────────────────────────────────
  nanjing: {
    id: "nanjing",
    nameZh: "南京",
    nameEn: "Nanjing",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "Ancient capital of six dynasties",
    description:
      "One of China's most historically layered cities — capital of six dynasties, seat of the early Ming Empire, and a city that endured its darkest chapter in 1937 with unusual thoughtfulness and dignity. Nanjing rewards travellers who go beyond the surface; almost every tree-lined boulevard conceals a deeper story.",
    image:
      "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1543039717-99b47e99a6bc?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Six dynasties of history", "Sun Yat-sen Mausoleum", "Qinhuai River night scenes", "Republic-era architecture", "Salted duck"],
    attractions: [
      {
        name: "Sun Yat-sen Mausoleum",
        description:
          "The magnificent hilltop tomb of the father of modern China — 392 steps climb through pine forest to the blue-glazed memorial hall. The combination of civic grandeur and natural setting is unlike anything else in the country. Combine with the nearby Ming Xiaoling and Linggu Temple for a full day on Purple Mountain.",
        category: "Historic Monument",
      },
      {
        name: "Confucius Temple & Qinhuai River",
        description:
          "Nanjing's most atmospheric historic district — a Confucian temple, examination halls, and a lantern-lit river all within walking distance of each other. The evening boat cruise on the Qinhuai River, past painted pavilions and the old pleasure-quarter buildings, is one of the most beautiful things to do in the city.",
        category: "Historic Quarter",
      },
      {
        name: "Memorial Hall of the Nanjing Massacre",
        description:
          "A sobering and essential memorial to the 300,000 civilians killed in 1937. The design is restrained and powerful; the exhibitions rely on physical evidence and survivor testimony. Visiting changes your understanding of the city permanently. Free entry; advance booking required.",
        category: "Memorial Museum",
      },
      {
        name: "Ming Xiaoling Mausoleum",
        description:
          "The tomb of the Hongwu Emperor, founder of the Ming dynasty — approached via a Sacred Way lined with pairs of stone animals and guardians. In the same purple mountain park as Sun Yat-sen's mausoleum; a joint visit makes for one of the best day-trips in eastern China.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Nanjing City Wall",
        description:
          "The world's longest surviving brick city wall, originally 35km long (about 25km still standing). The Zhonghua Gate fortress is the largest extant city gate on earth, with an intricate tunnel system for trapping invading forces inside.",
        category: "Historic Monument",
      },
      {
        name: "Laomendong Historic Quarter",
        description:
          "Nanjing's most intact traditional neighbourhood — Ming–Qing lanes that have been carefully restored rather than demolished. A more considered alternative to the commercial Confucius Temple area, with craft shops, artisan food stalls, and boutique guesthouses.",
        category: "Historic Quarter",
      },
    ],
    food: [
      {
        name: "Nanjing Salted Duck",
        nameZh: "盐水鸭",
        description:
          "The city's most famous product — duck cured in brine with star anise and spices, then poached until the skin is white and the meat is tender and clean-flavoured. Sold at virtually every corner of the old city. Guilin Duck is the well-known brand, but market stalls sell it by the cut at a fraction of the price.",
        must: true,
      },
      {
        name: "Duck Blood Vermicelli Soup",
        nameZh: "鸭血粉丝汤",
        description:
          "Nanjing's signature breakfast — duck blood, intestines, and liver with glass noodles in a clear duck bone broth, topped with coriander and chilli oil. Warming, deeply savoury, and available at street stalls from 6am.",
        must: true,
      },
      {
        name: "Steamed Beef Dumplings",
        nameZh: "汤包",
        description:
          "Nanjing's style of soup dumpling is larger and thicker-skinned than Shanghai's xiaolongbao, with a crab roe filling common in autumn. Less delicate but more robust.",
        must: false,
      },
      {
        name: "Red Bean Tangyuan",
        nameZh: "赤豆元宵",
        description:
          "Soft glutinous rice balls filled with sweet red bean paste, served in a warm syrup. A traditional snack from the Confucius Temple area's old teahouses — simple, seasonal, and comforting.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) is Nanjing's finest season — the city's legendary plane tree canopies burst into leaf, and Plum Blossom Hill (late February to March) draws visitors from across China. Autumn (September–November) is equally good for Purple Mountain with cool temperatures and foliage. The Plum Blossom Festival (late February) is one of the city's great annual events. Summer (June–August) is intensely hot — Nanjing is famously one of China's 'Three Furnace' cities.",
    transportation: [
      {
        mode: "🚄 By high-speed rail",
        details:
          "Nanjing South Station: Shanghai 70 minutes, Beijing 3.5 hours, Hangzhou 70 minutes, Xi'an 5 hours. One of the most convenient HSR hubs in the Yangtze Delta.",
      },
      {
        mode: "✈️ By air",
        details:
          "Nanjing Lukou International Airport (NKG): Metro Line S1 to the city centre in about 40 minutes (¥22).",
      },
      {
        mode: "🚇 City metro",
        details:
          "11 metro lines. Line 1 connects the main north–south axis; Line 2 links Confucius Temple, Xinjiekou (the main commercial hub), and the New District.",
      },
    ],
    accommodation:
      "Xinjiekou is the most central base — well-connected and full of hotels at every price point (¥200–1,000/night). The Confucius Temple / Laomendong area is more atmospheric, with boutique guesthouses along the Qinhuai River (¥400–900/night). Purple Mountain hotels are ideal for those focusing on the mausoleum complex. Budget travellers will find hostels near Gulou and Shanxi Road (¥80–150/bed).",
    travelTips: [
      "The Memorial Hall of the Nanjing Massacre requires advance booking online, is free to enter, and asks visitors to dress appropriately. Photography is restricted inside; allow 1.5–2 hours.",
      "The Purple Mountain (Zhongshan) scenic area combines Sun Yat-sen's Mausoleum, Ming Xiaoling, and Linggu Temple — buy the combined ticket (¥80) and use the mini-train to connect them. A full day is needed.",
      "Plum Blossom Hill is one of the great spring spectacles in eastern China. Visit on a weekday during the festival (mid-February to mid-March) — weekends are extremely crowded.",
      "Salted duck is sold vacuum-packed at most supermarkets and makes an excellent edible souvenir. For the real experience, buy it freshly sliced from a street vendor in the old city.",
      "The Qinhuai River evening cruise runs from the Confucius Temple piers and lasts about an hour (¥70–100). The view of the lit pavilions and old quarter from the water is Nanjing's most beautiful evening experience.",
    ],
    dayTrips: [
      {
        name: "Yangzhou",
        nameZh: "扬州",
        distance: "~1h by high-speed rail",
        description: "The most elegant of China's Grand Canal cities — Slender West Lake, classical Ge Garden, and a breakfast tea culture that is arguably the finest in the country. Start the day with a dim-sum breakfast at Fuchun Tea House.",
        whyGo: "A slower, more refined side of Jiangsu that most visitors to Nanjing never discover.",
      },
      {
        name: "Zhenjiang",
        nameZh: "镇江",
        distance: "~45min by high-speed rail",
        description: "Where the Yangtze River meets the Grand Canal — Jinshan Temple rises from what was once an island in the river, and the Jiaoshan Scenic Area sits across the water. The original setting of the Legend of the White Snake.",
        whyGo: "A compact, beautiful city where two of China's greatest waterways meet, completely free of tourist crowds.",
      },
    ],
  },

  // ── 7. Suzhou ────────────────────────────────────────────────────────────────
  suzhou: {
    id: "suzhou",
    nameZh: "苏州",
    nameEn: "Suzhou",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "Classical gardens & silk",
    description:
      "Nine UNESCO World Heritage classical gardens, 2,500 years of canal streets, and the finest silk production in China — all just 30 minutes from Shanghai by high-speed rail. Suzhou operates at a completely different pace from its neighbour, and that's entirely the point.",
    image:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&h=600&fit=crop&auto=format",
    highlights: ["9 UNESCO classical gardens", "Pingjiang Road canal lanes", "Suzhou embroidery & silk", "Birthplace of Kunqu opera", "Taihu Lake freshwater cuisine"],
    attractions: [
      {
        name: "Humble Administrator's Garden",
        description:
          "Suzhou's largest and most celebrated classical garden — the entire design centres on water, with pavilions, walkways, and rockeries reflected in lotus ponds and winding channels. Begun in the early 16th century; visit early morning (gates open 7:30am) before the tour groups arrive.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Lingering Garden",
        description:
          "A masterclass in Chinese spatial design — the approach through narrow, compressed corridors deliberately builds anticipation before the central courtyard opens in front of you. The Guanyun Peak, a 6.5-metre limestone scholar's rock, is one of the three most celebrated garden stones in China.",
        category: "UNESCO World Heritage",
      },
      {
        name: "Pingjiang Road Historic District",
        description:
          "Suzhou's best-preserved ancient street — 1.6km along a canal, with stone bridges, punted wooden boats, teahouses with Pingtan (ballad-singing) performances, and silk shops. Walk the full length at dusk for the most complete picture of old Suzhou.",
        category: "Historic Quarter",
      },
      {
        name: "Tiger Hill",
        description:
          "Suzhou's most famous hilltop — the 1,000-year-old Cloud Rock Pagoda leans 2.3 degrees off vertical, rivalling Pisa. The hill itself is said to be the burial mound of King Helü of Wu; archaeologists have never dug to confirm. A spring of exceptionally pure water at the base has been famous since the Tang dynasty.",
        category: "Historic Landmark",
      },
      {
        name: "Suzhou Museum (I.M. Pei Design)",
        description:
          "Designed by Suzhou-born architect I.M. Pei as his farewell gift to his hometown — a new museum that speaks the same language of whitewashed walls, water, and rock as the classical gardens next door, but entirely in a modern architectural vocabulary. The collection of paintings and bronzeware is also excellent.",
        category: "Museum & Architecture",
      },
      {
        name: "Tongli Water Town",
        description:
          "About 20km from Suzhou, Tongli is a quieter alternative to Wuzhen — a living town of 49 stone bridges, interconnected canals, and the exquisite Tuisi Garden (UNESCO Heritage). Fewer tourists than the more famous water towns, and the food is outstanding.",
        category: "Canal Town",
      },
    ],
    food: [
      {
        name: "Squirrel-Shaped Mandarin Fish",
        nameZh: "松鼠鳜鱼",
        description:
          "A Suzhou showpiece — mandarin fish carved and fried into the shape of a squirrel, then doused in a glistening sweet-and-sour tomato sauce. Elaborately theatrical, genuinely delicious, and the defining Suzhou restaurant experience.",
        must: true,
      },
      {
        name: "Suzhou-Style Noodles",
        nameZh: "苏式汤面",
        description:
          "A clear, amber-coloured broth (simmered for hours from pig bones and dried shrimp) topped with red-braised pork, smoked fish, or braised offal. Zhu Hongxing Noodle House is the century-old standard. Gates open at 5:30am and the best cuts sell out early.",
        must: true,
      },
      {
        name: "Biluochun Tea",
        nameZh: "碧螺春茶",
        description:
          "One of China's ten famous teas, grown on Dongting Mountain in Taihu Lake. The tightly rolled leaves unfurl in hot water to produce a delicate, fruity green tea. Pre-Qingming (early April) harvest is the most prized.",
        must: false,
      },
      {
        name: "Taihu Lake Three Whites",
        nameZh: "太湖三白",
        description:
          "White fish, white shrimp, and whitebait — the trio of freshwater delicacies from Taihu Lake, best prepared simply by steaming or blanching in salted water. At their finest in autumn and winter when the flesh is most flavoursome.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) is the classic time — the gardens are in full bloom, peony season peaks in late April, and new-season Biluochun tea is being harvested. Autumn (September–November) brings Taihu crab season and clear skies. The Suzhou International Tourism Festival in mid-April coincides with peak garden beauty. The rainy season in June, when mist hangs over the canals, has its own quiet charm.",
    transportation: [
      {
        mode: "🚄 By high-speed rail",
        details:
          "Suzhou Station or Suzhou North Station: Shanghai 30 minutes (G-train), Nanjing 45 minutes, Hangzhou 55 minutes. The ultimate day trip from Shanghai, though an overnight stay is far better.",
      },
      {
        mode: "🚇 City metro",
        details:
          "5 metro lines. Line 1 connects the main rail station to Pingjiang Road, Guanqian Street, and the garden district. Line 2 serves Suzhou North (high-speed rail) station.",
      },
      {
        mode: "🚲 Cycling",
        details:
          "The historic old city is compact and flat — cycling is the ideal way to move between gardens. Meituan and Hello bikes are available throughout. Most garden-to-garden distances take 15–30 minutes by bicycle.",
      },
    ],
    accommodation:
      "Pingjiang Road is the most atmospheric place to stay — converted canalside guesthouses offer a genuinely Suzhou experience (¥400–1,200/night). Mid-range business hotels near Guanqian Street offer excellent value and central access (¥200–500/night). For those focused on the garden district, hotels near the Humble Administrator's Garden allow early morning walks before the crowds. A Shanghai base with a Suzhou day trip is a popular option; overnight stays are genuinely better.",
    travelTips: [
      "Split your garden visits across two days to avoid museum fatigue. Day 1: Humble Administrator's Garden (morning) + Suzhou Museum (afternoon). Day 2: Lingering Garden + Pingjiang Road. One-day garden marathons tend to blur into each other.",
      "The Humble Administrator's Garden is best visited before 9am on a weekday. On peak-season weekends, consider the smaller, less-visited gardens such as the Master of Nets Garden or Canglang Pavilion instead.",
      "Suzhou silk: authenticity is hard to verify at market stalls. Buy from the Suzhou Silk Museum shop or an established brand like Wenshu Silk. Low-priced 'silk' in tourist markets is usually synthetic.",
      "Pingtan (Suzhou ballad-singing) is one of China's oldest performing arts — teahouses along Pingjiang Road hold regular evening performances (usually 7–9pm, ¥50–100). An unmissable local cultural experience.",
      "Day trips to Tongli and other water towns depart from Suzhou North Bus Station. Tongli is the best for avoiding crowds; Wuzhen is best done from Shanghai or Hangzhou directly.",
    ],
    dayTrips: [
      {
        name: "Tongli Water Town",
        nameZh: "同里",
        distance: "~30min by bus from Suzhou North Bus Station",
        description: "The most intimate of the Jiangnan water towns — 49 stone bridges, quiet canal lanes, and the UNESCO-listed Tuisi Garden. Far less commercialised than Wuzhen or Zhouzhuang.",
        whyGo: "The only water town where you can still find a quiet alley at midday — a genuine slice of old Jiangnan.",
      },
      {
        name: "Zhouzhuang",
        nameZh: "周庄",
        distance: "~50min by bus",
        description: "China's most famous water town — the twin bridges of Zhouzhuang are one of the most reproduced images in Chinese art. Go at first light or stay the night to experience it without the tour groups.",
        whyGo: "The twin bridges at dawn are one of the most beautiful views in the Yangtze Delta.",
      },
    ],
  },

  // ── 8. Guilin ────────────────────────────────────────────────────────────────
  guilin: {
    id: "guilin",
    nameZh: "桂林",
    nameEn: "Guilin",
    province: "guangxi",
    provinceZh: "广西壮族自治区",
    tagline: "Karst peaks & the Li River",
    description:
      "The karst limestone peaks that line the Li River have inspired Chinese painters and poets for over two thousand years. Guilin is not overhyped — the landscape genuinely looks like a classical ink painting, especially on a misty spring morning when the peaks dissolve into the low clouds.",
    image:
      "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf7?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1519567770579-c2fc5436bcf7?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Li River karst scenery", "Yangshuo cycling & Yulong River", "Dragon's Backbone Rice Terraces", "Guilin rice noodle breakfast", "The 20 RMB note landscape"],
    attractions: [
      {
        name: "Li River Cruise (Guilin to Yangshuo)",
        description:
          "The 4.5-hour boat journey along 83km of karst scenery is one of the great river journeys in the world. The bend depicted on China's 20 RMB note (at Huangbu Beach) appears about two hours into the cruise. Book the morning departure for better light.",
        category: "Scenic Cruise",
      },
      {
        name: "Yangshuo & Yulong River",
        description:
          "The Li River cruise's endpoint — a relaxed town encircled by karst peaks. Hire a bicycle and cycle into the countryside past Moon Hill, the Butterfly Cave, and the villages along the Yulong River. The Yulong itself is better for bamboo raft drifting than the Li — quieter and more intimate.",
        category: "Town & Countryside",
      },
      {
        name: "Dragon's Backbone Rice Terraces",
        description:
          "About 2 hours from Guilin, the terraces of the Zhuang and Yao minorities climb to over 1,000 metres above sea level. Spring (flooded, mirror-like), summer (lush green), and autumn (gold) each provide a completely different and equally beautiful scene. Stay overnight in a village guesthouse to see the sunrise.",
        category: "Cultural Landscape",
      },
      {
        name: "Elephant Trunk Hill",
        description:
          "Guilin's city symbol — a limestone hill whose trunk-like formation dips into the Li River as though drinking. Located within the city and easily walkable, it provides the essential introduction to Guilin's karst landscape without leaving the urban area.",
        category: "City Landmark",
      },
      {
        name: "Reed Flute Cave",
        description:
          "A large limestone cavern 5km from the city centre, its stalactites and stalagmites illuminated by coloured lighting. About 1 hour to walk through. The best rainy-day option in Guilin — the formations are genuinely impressive.",
        category: "Natural Cave",
      },
    ],
    food: [
      {
        name: "Guilin Rice Noodles",
        nameZh: "桂林米粉",
        description:
          "The soul of Guilin's food culture — smooth rice noodles in a slow-cooked pork bone and spice broth, with a selection of braised meats, peanuts, pickled vegetables, and chilli on the side. Eaten for breakfast. Locals eat it twice a day and don't apologise.",
        must: true,
      },
      {
        name: "Beer Fish",
        nameZh: "啤酒鱼",
        description:
          "Yangshuo's signature dish — fresh river fish braised in local Lijiang Beer with pickled chillies and tomatoes until the broth is tangy and deeply savoury. Every restaurant in Yangshuo West Street serves it; the best are in the lanes off the main road.",
        must: true,
      },
      {
        name: "Lipu Taro Pork",
        nameZh: "荔浦芋扣肉",
        description:
          "Layers of Lipu taro (a local variety, much larger and earthier than regular taro) and pork belly pressed into a bowl and steamed until the taro absorbs all the pork fat and soy. A Guangxi comfort classic.",
        must: false,
      },
      {
        name: "Gongcheng Oil Tea",
        nameZh: "恭城油茶",
        description:
          "A Yao minority speciality — tea leaves, ginger, garlic, and peanuts pounded and cooked with oil in a cast-iron pan, then boiled with water into a thick, bitter-savoury broth. Served with puffed rice or sticky cake. An acquired taste worth acquiring.",
        must: false,
      },
    ],
    bestSeason:
      "Spring (March–May) is the classic season — misty rain hangs over the karst peaks, the Li River is high, and the scenery looks exactly like the ink paintings. Autumn (September–November) brings clear skies and the golden terraces at Dragon's Backbone. Summer (June–August) is lush and green but occasional heavy rain can suspend river cruises. Winter (December–February) has the fewest tourists, the cheapest prices, and occasional morning mist that is spectacular if you're lucky.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Guilin Liangjiang International Airport (KWL): 30km from the city centre. Airport shuttle bus to downtown (¥20); taxi about ¥80–100.",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Guilin North Station: Guangzhou 2 hours, Guiyang 2 hours, Changsha 2.5 hours, Nanning 1.5 hours. The Guiguang and Nanguang HSR lines intersect here.",
      },
      {
        mode: "🚌 Guilin to Yangshuo",
        details:
          "Bus from Guilin Qintan Bus Station: ¥25, about 1.5 hours. High-speed rail (toward Hezhou) stops at Yangshuo in 25 minutes. In Yangshuo, electric bikes rent for ¥30/day — the essential way to explore the countryside.",
      },
    ],
    accommodation:
      "Use Yangshuo as your base rather than Guilin city — the scenery is on your doorstep, prices are lower, and the atmosphere is far more relaxed. Boutique guesthouses along the Li River and in the Yangshuo countryside are the best option (¥300–800/night). Yangshuo West Street has budget hostels from ¥80–150/bed. For Dragon's Backbone Terraces, stay in one of the hillside village guesthouses to experience sunrise over the terraces — entirely worth it. Guilin city hotels work well as a transit base.",
    travelTips: [
      "Li River cruise tickets (official price ¥210) sell out 3–5 days ahead in peak season (April–October). Book in advance through your hotel or the official tourism platform.",
      "Yangshuo is a far better base than Guilin city: the natural scenery is immediate, accommodation is cheaper and more characterful, and the Li River cruise ends here anyway.",
      "Cycling is the definitive Yangshuo experience. Rent a bike (¥15–20/day) or electric bike (¥25–35/day) from West Street and follow the river road south through the villages toward Moon Hill.",
      "Dragon's Backbone Terraces require a full day from Guilin. Hiring a car (¥300–400 return) is much more efficient than public transport. Staying overnight on the hillside for sunrise and sunset is the ideal plan.",
      "The Li River can run low in dry season (November–February), sometimes requiring a transfer to a smaller boat mid-cruise. Check current conditions before booking — this doesn't ruin the trip but good to know.",
    ],
  },

  // ── 9. Sanya ─────────────────────────────────────────────────────────────────
  sanya: {
    id: "sanya",
    nameZh: "三亚",
    nameEn: "Sanya",
    province: "hainan",
    provinceZh: "海南省",
    tagline: "China's tropical beach escape",
    description:
      "China's premier beach destination, at the southernmost tip of Hainan Island. Warm, clear South China Sea water, fresh coconuts, extraordinary seafood, and over 300 sunny days a year. Sanya is the closest thing to Southeast Asian beach culture within China's borders — without needing a visa change.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Yalong Bay white sand beach", "Fresh tropical seafood", "Nanshan 108m Guanyin statue", "Wuzhizhou Island diving", "Year-round warm weather"],
    attractions: [
      {
        name: "Yalong Bay",
        description:
          "Sanya's finest beach — 7km of white sand with calm, clear water averaging 25°C year-round. Dominated by upscale resort hotels, but the public beach at the eastern end is just as beautiful as the hotel frontage and completely free.",
        category: "Beach",
      },
      {
        name: "Wuzhizhou Island",
        description:
          "A coral island 2.7km offshore from Haitang Bay — the best diving and snorkelling conditions on Hainan. Glass-bottomed boat tours, jet skiing, and rock climbing are also available. Day-trip ferry from the mainland pier.",
        category: "Island & Diving",
      },
      {
        name: "Nanshan Cultural Tourism Zone",
        description:
          "Home to a 108-metre Guanyin statue standing in the South China Sea — one of the tallest religious statues in the world. The Nanshan Temple itself has a long history, and the site is an important Buddhist pilgrimage destination. Allow 3 hours.",
        category: "Buddhist Site",
      },
      {
        name: "Dadonghai Beach",
        description:
          "The most accessible beach from Sanya's city centre — popular with both locals and tourists, with restaurants and bars lining the promenade. Water is calm and suitable for swimming, and accommodation costs significantly less than Yalong Bay.",
        category: "City Beach",
      },
      {
        name: "Yanoda Rainforest Cultural Tourism Zone",
        description:
          "One of China's best-preserved tropical rainforests — boardwalk trails through jungle, waterfalls, and pools, with canopy walks and rainforest music performances. A good half-day from the beach heat.",
        category: "Tropical Nature",
      },
    ],
    food: [
      {
        name: "Wenchang Chicken",
        nameZh: "文昌鸡",
        description:
          "Hainan's most famous dish — free-range chicken poached to perfect tenderness, served with rice cooked in chicken fat and a trio of dipping sauces (ginger, spring onion, and chilli). The definitive Hainanese meal. The quality of the chicken and the fat rice is what separates the great from the mediocre.",
        must: true,
      },
      {
        name: "Fresh Seafood at the First Market",
        nameZh: "第一市场海鲜",
        description:
          "Buy live lobster, crab, scallops, or fish directly from the dockside vendors at Sanya's First Market, then take your haul to an adjacent restaurant to have it cooked (¥20–40 per kg, cooking fee). Half the price of a seafood restaurant, twice the freshness.",
        must: true,
      },
      {
        name: "Qingbu Liang",
        nameZh: "清补凉",
        description:
          "Hainan's essential cold drink — a coconut milk base loaded with up to a dozen toppings: red beans, lotus seeds, taro, sweet potato, grass jelly, and more. Found on every street corner; a perfect antidote to tropical heat.",
        must: true,
      },
      {
        name: "Coconut Rice",
        nameZh: "椰子饭",
        description:
          "Glutinous rice steamed inside a fresh coconut shell so it absorbs the natural coconut milk as it cooks — sweet, fragrant, and uniquely Hainanese. A common breakfast or afternoon snack.",
        must: false,
      },
    ],
    bestSeason:
      "November to April is peak season — sunshine, low rainfall, and the clearest water. Chinese New Year and national holidays see hotel prices spike 2–3x; book many weeks in advance. May to October is the rainy season with occasional typhoons (July–September are highest risk). The shoulder months (May, October) can offer great value with decent weather. Diving visibility is best in winter and early spring.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Sanya Phoenix International Airport (SYX): 15km from the city. Airport shuttle buses serve the main hotels and bays (¥15–25); taxis cost about ¥50–70 to the city centre.",
      },
      {
        mode: "🚄 High-speed rail (island circuit)",
        details:
          "Hainan's island-circuit high-speed rail connects Sanya to Haikou in 1.5 hours (about ¥100). The eastern and western lines serve coastal towns including Wenchang, Qionghai, and Dongfang.",
      },
      {
        mode: "🚗 Local transport",
        details:
          "Sanya's sights are spread across several bays. Didi (ride-hailing) is the most practical option for moving between beaches and attractions. Within Yalong Bay, a free electric shuttle connects the resorts.",
      },
    ],
    accommodation:
      "Yalong Bay is the luxury resort base — international 5-star brands with private beaches (¥1,500–5,000/night). Haitang Bay is newer, slightly cheaper, and next to the duty-free mall. Dadonghai has the best mid-range options (¥400–900/night) with easy beach and restaurant access. Sanya Bay (Coconut Dream Corridor) offers the densest concentration of affordable hotels (¥200–500/night) with a long public beach right outside.",
    travelTips: [
      "Book Sanya hotels for Chinese New Year and the October Golden Week at least 4–6 weeks ahead. Many resorts require a minimum 3-night stay during peak periods.",
      "At the First Market seafood vendors, always agree on the price per kg before choosing your seafood, and confirm the cooking fee with the restaurant separately. Misunderstandings are common.",
      "Wuzhizhou Island diving: only book through operators with certified PADI instructors. Do not go with unlicensed vendors — safety standards vary significantly.",
      "Sunscreen is essential: UV intensity in Sanya is extreme. SPF 50+ and a long-sleeve rash guard for water activities are strongly recommended. Avoid beach time between 10am and 3pm on hot days.",
      "Haitang Bay duty-free shopping: China's Hainan Free Trade Port offers some of the best duty-free allowances in Asia (electronics, cosmetics, and luxury goods at 20–40% savings). Bring your passport.",
    ],
  },

  // ── 10. Chongqing ────────────────────────────────────────────────────────────
  chongqing: {
    id: "chongqing",
    nameZh: "重庆",
    nameEn: "Chongqing",
    province: "chongqing",
    provinceZh: "重庆市",
    tagline: "Mountain city of fog & fire",
    description:
      "China's most dramatic city, built on cliffs above two rivers. A metro line passes through the middle of a residential tower block. Entire neighbourhoods are connected by staircase streets that climb through multiple altitude levels. And Chongqing hotpot — the spiciest, most intense version in China — fuels a nightlife scene that rivals any city in the country.",
    image:
      "https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?w=700&h=460&fit=crop&auto=format",
    heroImage:
      "https://images.unsplash.com/photo-1558704164-ab7a0016c1f3?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Vertical mountain city architecture", "Chongqing spicy hotpot", "Hongyadong night lights", "Three Gorges cruise embarkation", "Cyberpunk urban aesthetics"],
    attractions: [
      {
        name: "Hongyadong",
        description:
          "An 11-storey stilted building complex clinging to the cliff above the Jialing River — lit up at night in red and gold, it's the image of Chongqing the world knows. The resemblance to the bathhouse in Miyazaki's Spirited Away is not accidental. Best viewed from across the river after dark.",
        category: "City Landmark",
      },
      {
        name: "Jiefangbei (Liberation Monument) District",
        description:
          "The beating commercial heart of Chongqing — a WWII victory monument standing at the intersection of the city's densest cluster of restaurants, brand flagships, and street food stalls. The underground shopping city beneath it is a labyrinth worth getting lost in.",
        category: "City Centre",
      },
      {
        name: "Liziba Light Rail Station",
        description:
          "Metro Line 2 passes directly through floors 6–8 of a 30-storey apartment block — one of the most surreal urban spectacles in China. Stand on the viewing platform opposite the station to photograph the train entering the building. Trains run every 5–10 minutes.",
        category: "Urban Wonder",
      },
      {
        name: "Ciqikou Ancient Town",
        description:
          "A preserved Ming–Qing riverside settlement on the Jialing River — cobblestone lanes, wooden teahouses, and Chongqing street food (mahua twisted dough is the local specialty). Busy on weekends; considerably more atmospheric on a quiet weekday morning.",
        category: "Old Town",
      },
      {
        name: "Wulong Karst Geological Park",
        description:
          "About 2.5 hours from the city, Wulong is a UNESCO-listed karst landscape of extraordinary scale — the Three Natural Bridges, each larger than the Arc de Triomphe, were the filming location for parts of Curse of the Golden Flower. A spectacular day trip.",
        category: "UNESCO Natural Heritage",
      },
      {
        name: "Chaotianmen Dock",
        description:
          "The confluence of the Yangtze and Jialing Rivers — the symbolic heart of the city, and the departure point for Yangtze River cruises through the Three Gorges. The evening cruise on a river ferry along the Jialing is one of the best ways to see Chongqing's illuminated hillsides from the water.",
        category: "City Waterfront",
      },
    ],
    food: [
      {
        name: "Chongqing Hotpot",
        nameZh: "重庆火锅",
        description:
          "The original and most intense version of Chinese hotpot — a deep red beef tallow broth with more dried chillies and Sichuan peppercorns than you think possible, delivering a numbing, fiery heat that's addictive rather than just painful. Tripe, duck intestine, and brain (optional) are the local staples. The sesame oil dipping bowl is non-negotiable.",
        must: true,
      },
      {
        name: "Chongqing Xiaomian",
        nameZh: "小面",
        description:
          "Thin wheat noodles dressed with chilli oil, Sichuan peppercorn, spring onions, and preserved mustard greens — Chongqing's everyday breakfast, available from street stalls from 6am. A bowl costs ¥8–12. Locals are as particular about their preferred noodle shop as Neapolitans are about pizza.",
        must: true,
      },
      {
        name: "Sour and Spicy Vermicelli",
        nameZh: "酸辣粉",
        description:
          "Sweet potato noodles in a tangy, chilli-laced broth topped with peanuts, pickled vegetables, and spring onions — an appetising, lip-pursing street snack that originated in Chongqing before becoming a national chain phenomenon. The original is still the best.",
        must: false,
      },
      {
        name: "Jianghu Cuisine",
        nameZh: "江湖菜",
        description:
          "The umbrella term for Chongqing's rustic, unapologetically bold folk cooking — pickled chilli frog, taro chicken, and dry-fried spicy chicken pieces. Found in small neighbourhood restaurants in the Nan'an District, where the food is honest and the prices are low.",
        must: false,
      },
    ],
    bestSeason:
      "Autumn (September–November) offers the most clear days and best visibility for the city's famous night views — the peak season for photographers. Spring (March–May) is mild and pleasant. Chongqing is famous as one of China's 'Three Furnaces' — summer (June–August) can reach 40°C, but the city's hotpot culture paradoxically peaks in the heat. Winter fog gives the mountain city a mysterious quality; clear days are rare but stunning when they occur.",
    transportation: [
      {
        mode: "✈️ By air",
        details:
          "Chongqing Jiangbei International Airport (CKG): Metro Line 10 to city centre in about 40 minutes (¥7). Taxis cost ¥60–80 to Jiefangbei.",
      },
      {
        mode: "🚄 By high-speed rail",
        details:
          "Chongqing North and Chongqing West stations: Chengdu 1 hour, Xi'an 3.5 hours, Beijing 8 hours, Guiyang 1.5 hours, Wuhan 3.5 hours.",
      },
      {
        mode: "🚇 City metro & light rail",
        details:
          "12 rail transit lines (including light rail). Jiefangbei area is served by Liangshuiwan, Xiaoshizi, and Jiefangbei stations — all within walking distance. Line 2 (passing through the building at Liziba) is a must-ride.",
      },
    ],
    accommodation:
      "Jiefangbei / Jiangbei District is the most practical base — the densest concentration of transport links, restaurants, and departure points for city excursions (¥200–800/night). The Nan'an District along the south riverbank is increasingly popular with design-minded travellers — converted warehouse hotels with two-river views (¥400–1,000/night). Budget travellers will find hostels near Guanyinqiao and Daping (¥80–150/bed). Avoid hotels around the airport unless you have a very early flight.",
    travelTips: [
      "Chongqing is a vertical city — comfortable, flat-soled shoes are essential. The city's staircase streets, hillside escalators, and level-jumping underpasses are part of the experience, but they add up over a day of walking.",
      "The best Hongyadong photo is taken from the Qiansi Men Bridge or the riverside promenade across the Jialing River — not from inside the complex itself. Go 30 minutes after sunset for the best light.",
      "The Liziba light rail trick: exit Liziba Station, follow the signs to the outdoor viewing platform, and wait for a train on Line 2. They run every 5–10 minutes. The whole spectacle takes about 20 minutes.",
      "Chongqing hotpot is intensely spicy — far more so than Chengdu. Always order a sesame oil dipping bowl (¥5) to coat and cool the food before eating. The split pot (yuānyang guō) is a sensible first-timer's order.",
      "Yangtze River Three Gorges cruises (Chongqing to Yichang, 3 nights/4 days) need to be booked 1–2 months ahead in peak season. Use only official cruise operators — quality varies significantly between companies.",
    ],
  },

  // ── SICHUAN ──────────────────────────────────────────────────────────────────

  leshan: {
    id: "leshan",
    nameZh: "乐山",
    nameEn: "Leshan",
    province: "sichuan",
    provinceZh: "四川省",
    tagline: "The Buddha who has watched rivers for 1,300 years",
    description:
      "Leshan's single claim to fame is one of humanity's most extraordinary creations — a 71-metre seated Buddha carved from a living cliff at the confluence of three rivers. But the city around him rewards lingering: a charming historic old quarter, excellent Sichuan river fish cooking, and easy access to Mount Emei make Leshan the natural base for two of Sichuan's UNESCO World Heritage sites.",
    image: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=1200&h=600&fit=crop&auto=format",
    highlights: ["World's largest stone Buddha", "Three rivers confluence", "UNESCO World Heritage", "Sichuan river fish cuisine", "Mount Emei gateway"],
    attractions: [
      {
        name: "Leshan Giant Buddha (乐山大佛)",
        description: "Carved 713–803 AD at the confluence of the Min, Qingyi, and Dadu rivers. Standing 71m tall, the Buddha is only truly comprehensible in scale from a river boat below — the boat cruise is essential. Climb the Lingyun Cliffside path for the head-level view and descend the steep staircase to river level.",
        category: "UNESCO Heritage",
      },
      {
        name: "River Boat Cruise",
        description: "The only way to see the full scale of the Giant Buddha. Both public ferries (¥70) and smaller private boats circle the statue. Aim for morning light and a clear day. The 15-minute crossing from the opposite bank offers the widest-angle view.",
        category: "Scenic",
      },
      {
        name: "Wuyou Temple (乌尤寺)",
        description: "An ancient Buddhist monastery on a tiny island in the Min River, connected by a pedestrian bridge. Peaceful and often overlooked by day-trippers focused entirely on the Giant Buddha. The temple complex dates to the Tang dynasty and has fine river views.",
        category: "Temple",
      },
      {
        name: "Leshan Old Town (乐山老城)",
        description: "Qing-era commercial streets near the dock with teahouses, street food stalls, and traditional architecture largely untouched by tourism. The Jiading Ancient City wall section near the confluence is particularly atmospheric in the evening.",
        category: "Historic Quarter",
      },
      {
        name: "Dafo Temple Complex",
        description: "The cliff-side temple buildings adjacent to the Giant Buddha, best explored at opening time (7:30am) before the main crowds arrive via the south entrance. The multi-level path along the cliff face reveals different perspectives of the statue.",
        category: "Temple",
      },
    ],
    food: [
      {
        name: "Bowl Chicken (钵钵鸡)",
        nameZh: "钵钵鸡",
        description: "Leshan's signature street food — cold chicken strips, vegetables, and tofu skewers soaked in a numbing sesame-chilli broth, served in a clay bowl. Found at every street corner in the old town. The Leshan version is notably more fragrant than Chengdu's.",
        must: true,
      },
      {
        name: "Mapo Tofu (麻婆豆腐)",
        nameZh: "麻婆豆腐",
        description: "Leshan claims its own version of this Sichuan classic, with a slightly thicker sauce and more doubanjiang (fermented bean paste) than the Chengdu style. Eaten with white rice as a lunch staple.",
        must: false,
      },
      {
        name: "Fresh River Fish in Sichuan Bean Sauce",
        nameZh: "豆瓣鱼",
        description: "The three-river confluence makes Leshan famous for fresh river fish. Douban fish (thick doubanjiang sauce) and steamed grass carp are the most-ordered dishes at riverside restaurants near the old dock.",
        must: true,
      },
      {
        name: "Cold Noodles (凉面)",
        nameZh: "凉面",
        description: "A Leshan breakfast staple — springy noodles dressed in sesame paste, chilli oil, and peanuts. Eaten cold at room temperature. Every local noodle shop has its own version; the flavours vary significantly from stall to stall.",
        must: false,
      },
    ],
    bestSeason: "Autumn (September–November) for the clearest views of the Buddha and pleasant temperatures. Spring (March–May) for lush greenery. Avoid summer flood season (July–August) when river water levels can partially submerge the Buddha's feet — the lower viewing platforms may be closed.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Chengdu",
        details: "Chengdu East to Leshan Station: ~1.5 hours (¥50–70). Leshan to Emeishan Station: ~30 minutes — making a combined Leshan + Mount Emei itinerary straightforward.",
      },
      {
        mode: "🚌 Bus from Chengdu",
        details: "Xinnanmen Bus Station to Leshan: ~2 hours (¥45). Several daily departures. The bus drops you closer to the Giant Buddha entrance than the train station.",
      },
      {
        mode: "🚢 River access",
        details: "Once in Leshan, the Giant Buddha is reachable by public bus (Line 13 from Leshan Bus Station) or taxi (¥20–30). The boat cruise departs from the dock below Wuyou Temple.",
      },
    ],
    accommodation: "Most visitors treat Leshan as a day trip from Chengdu, but an overnight stay allows you to see the Buddha in evening light and visit Mount Emei the next morning. Hotels cluster near the Giant Buddha scenic area and in the old town (¥150–500/night). Emeishan City, 30km north, has accommodation closer to the Mount Emei cable car if that is your priority.",
    travelTips: [
      "Book boat cruise tickets online or at the dock early — the most popular morning departures sell out. The full circuit cruise (¥70) gives the best views; the quick crossing ferry is adequate for photos but less atmospheric.",
      "The cliffside staircase down to the Buddha's feet has over 200 steps and is very steep — take your time descending and allow extra time going back up. The queue for the stairs can be 30–60 minutes on weekends.",
      "Combine Leshan with Mount Emei in a two-day trip from Chengdu: Day 1 Leshan Giant Buddha + Leshan old town, Day 2 Mount Emei by cable car to the Golden Summit.",
      "Leshan's old town teahouses are excellent for a slow afternoon. Ask for 峨眉雪芽 (Emei Snow Bud) green tea, grown on the mountain just north of the city.",
    ],
    dayTrips: [
      {
        name: "Mount Emei",
        nameZh: "峨眉山",
        distance: "~30min north by high-speed rail",
        description: "One of China's four sacred Buddhist mountains with summit temples in the clouds and Tibetan macaques on the trails. The Golden Summit cable car makes it accessible in half a day.",
        whyGo: "Leshan and Emei share a UNESCO designation — visiting both in one trip is the natural pairing.",
      },
    ],
  },

  emeishan: {
    id: "emeishan",
    nameZh: "峨眉山",
    nameEn: "Mount Emei",
    province: "sichuan",
    provinceZh: "四川省",
    tagline: "Sacred summit above the clouds",
    description:
      "One of China's four sacred Buddhist mountains, Mount Emei has drawn pilgrims and travellers for over 2,000 years. The Golden Summit, at 3,077m, floats above a sea of clouds most mornings. Tibetan macaques patrol the mid-mountain trails. Ancient monasteries cling to the forested slopes. Two days gives you the time to do it properly — one by cable car is also possible and spectacular.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Sacred Buddhist mountain", "Sea of clouds at the summit", "Tibetan macaques", "Ancient mountain monasteries", "UNESCO World Heritage"],
    attractions: [
      {
        name: "Golden Summit (金顶)",
        description: "The 3,077m summit is crowned by a spectacular 48m golden Buddha statue and several ancient temples. On clear mornings the sea of clouds below is one of the great sights in China. The cable car from Leidongping takes 8 minutes and saves 3–4 hours of hiking.",
        category: "Summit",
      },
      {
        name: "Wannian Temple (万年寺)",
        description: "The oldest and most important temple on the mountain, dating to the 4th century. Houses a magnificent bronze statue of Samantabhadra Bodhisattva on a white elephant, cast in 980 AD. A cable car connects from the park entrance.",
        category: "Temple",
      },
      {
        name: "Qingyin Pavilion (清音阁)",
        description: "A mid-mountain pavilion at the confluence of two streams — the Black Dragon River and White Dragon River. The sound of the water against the rocks gives the pavilion its name ('Clear Sound'). A peaceful midpoint on any ascent or descent route.",
        category: "Scenic",
      },
      {
        name: "Tibetan Macaques",
        description: "Semi-wild macaques inhabit the Hongchunping and Qingyin Pavilion areas (800–1,500m altitude). They are bold and occasionally aggressive around food — keep bags closed and do not feed them. The wildlife encounter is part of the mountain experience.",
        category: "Wildlife",
      },
      {
        name: "Baoguo Temple (报国寺)",
        description: "The main entrance temple at the mountain's base, a Ming dynasty complex with four halls and a famous 7m tall, 62-tonne bronze bell. The starting point for all ascent routes and a calm place to acclimatise before the climb.",
        category: "Temple",
      },
    ],
    food: [
      {
        name: "Mount Emei Tofu",
        nameZh: "峨眉豆腐",
        description: "The mountain water produces exceptionally smooth tofu — a mountain monastery staple for centuries. Available in multiple preparations at guesthouses and restaurants on the mountain trails. The stinky tofu version is a popular trail snack.",
        must: true,
      },
      {
        name: "Emei Snow Bud Tea (峨眉雪芽)",
        nameZh: "峨眉雪芽",
        description: "Green tea grown in the misty lower slopes of Emei — delicate, slightly sweet, and one of China's premium teas. Buy directly from the mountain tea shops; tourist area prices are negotiable.",
        must: true,
      },
      {
        name: "Mountain Mushroom Hotpot",
        nameZh: "山珍火锅",
        description: "A milder, mushroom-heavy alternative to Chengdu hotpot, using wild fungi foraged from Emei's slopes. Guesthouses along the hiking trails serve a simple version perfect for warming up after a cold summit visit.",
        must: false,
      },
      {
        name: "Xueya Cake (雪芽糕)",
        nameZh: "雪芽糕",
        description: "A mountain speciality sweet made with green tea powder, glutinous rice, and red bean — shaped to resemble a tea bud. Sold at mountain temple gift shops and the Baoguo Temple area.",
        must: false,
      },
    ],
    bestSeason: "October to November for clear summit views and autumn foliage — the best combination of visibility and scenery. Spring (March–May) for wildflowers on the lower slopes. Winter (December–February) offers dramatic snow-covered temples and fewer crowds, but the Golden Summit can be icy. Summer is the most popular season but brings frequent cloud and rain at the summit.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Chengdu",
        details: "Chengdu East to Emeishan Station: ~1.5 hours (¥55–75). From Emeishan Station, buses and taxis run to the park entrance (Baoguo Temple) in 15–20 minutes.",
      },
      {
        mode: "🚄 Combined with Leshan",
        details: "Leshan Station to Emeishan Station: ~30 minutes. The natural two-day itinerary pairs Leshan Giant Buddha (Day 1) with Mount Emei (Day 2).",
      },
      {
        mode: "🚡 Mountain cable cars",
        details: "Two cable cars operate on the mountain: Wannian Cable Car (mid-mountain, ¥65 one-way) and Jinding Cable Car (summit, ¥65 one-way). Both are essential for saving several hours of hiking. Book tickets at the base stations or online.",
      },
    ],
    accommodation: "Most visitors stay at the base (Baoguo Temple area, ¥200–600/night) and take the cable car up each day. For the truly memorable experience, stay at a mid-mountain monastery guesthouse (Hongchunping or Xianfeng — ¥150–350/bed including breakfast) and wake at 5am for the summit sunrise above the clouds. Book mountain accommodation several weeks ahead for weekends and holidays.",
    travelTips: [
      "The Jinding (summit) cable car frequently has long queues — arrive at Leidongping cable car base before 8am or buy advance tickets online. The queue can be 1–2 hours on peak days.",
      "Summit temperatures are 10–15°C cooler than the base even in summer. Bring a jacket regardless of the weather in Chengdu.",
      "Do not feed the macaques. They bite and can snatch bags — keep food zipped inside your pack when walking through monkey zones (Hongchunping and Qingyin Pavilion areas).",
      "The full hiking ascent (Wannian to Golden Summit) takes 6–8 hours each way and is only recommended for fit, experienced hikers. The cable car combination (Wannian up, Leidongping down) is the smart approach for most visitors.",
      "Monastery guesthouse meals (斋饭, vegetarian) are included with accommodation at some mountain temples — simple but fresh, and part of the pilgrim experience.",
    ],
    dayTrips: [
      {
        name: "Leshan Giant Buddha",
        nameZh: "乐山大佛",
        distance: "~30min south by high-speed rail",
        description: "The world's tallest stone Buddha, carved at the confluence of three rivers. The river boat cruise below the statue is essential for appreciating its true scale.",
        whyGo: "Emei and Leshan share a UNESCO designation and are natural companions on the same multi-day trip.",
      },
    ],
  },

  jiuzhaigou: {
    id: "jiuzhaigou",
    nameZh: "九寨沟",
    nameEn: "Jiuzhaigou Valley",
    province: "sichuan",
    provinceZh: "四川省",
    tagline: "Where the lakes are too blue to believe",
    description:
      "Jiuzhaigou is one of those rare places where every photograph looks edited — because the turquoise, emerald, and sapphire lakes really are that colour. Located in a Tibetan valley in northern Sichuan, this UNESCO World Heritage valley holds 118 lakes, dozens of waterfalls, and dense forests that explode in gold and crimson each autumn. The most visually spectacular natural scenery in China.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Turquoise terraced lakes", "UNESCO World Heritage", "Tibetan minority culture", "Autumn foliage spectacle", "Remote Sichuan wilderness"],
    attractions: [
      {
        name: "Five Flower Lake (五花海)",
        description: "The most photographed lake in Jiuzhaigou — a shallow, completely transparent pool with a submerged ancient forest visible through five layers of differently-coloured algae and mineral deposits. The vivid colour ranges from turquoise to green to gold depending on the light.",
        category: "Natural Wonder",
      },
      {
        name: "Nuorilang Waterfall (诺日朗瀑布)",
        description: "China's widest high-altitude waterfall, 270m wide and 20m tall, spanning the full width of the valley. The viewing platform puts you level with the spray. In autumn it is framed by golden larch trees; in winter it partially freezes.",
        category: "Natural Wonder",
      },
      {
        name: "Long Lake (长海)",
        description: "The largest and highest lake in Jiuzhaigou, at 3,100m altitude. Deep blue-green and often edged with snow even in early autumn. The high altitude makes it noticeably colder than the valley floor — bring an extra layer.",
        category: "Scenic Lake",
      },
      {
        name: "Shuzheng Terraced Lakes (树正群海)",
        description: "A series of 19 interconnected terraced lakes stepping down the valley floor, connected by wooden boardwalks. The turquoise water cascades between them in a continuous series of small falls. The most accessible section of the park, and often the most beautiful.",
        category: "Scenic Area",
      },
      {
        name: "Zechawa Tibetan Village",
        description: "One of the nine original Tibetan villages that give Jiuzhaigou its name (meaning Nine Village Valley). Traditional wooden houses, prayer flags, and mani stone walls. Some villages have been preserved as cultural sites within the park.",
        category: "Cultural",
      },
    ],
    food: [
      {
        name: "Yak Butter Tea (酥油茶)",
        nameZh: "酥油茶",
        description: "The essential Tibetan drink — hot tea churned with yak butter and salt. Warming and caloric at altitude. Served at Tibetan guesthouses and teahouses throughout the valley. The acquired taste is part of the cultural experience.",
        must: true,
      },
      {
        name: "Tsampa (糌粑)",
        nameZh: "糌粑",
        description: "Roasted barley flour — the Tibetan staple food, mixed with butter tea into a dough and eaten as a meal. Try it at a Tibetan home guesthouse for the most authentic experience.",
        must: false,
      },
      {
        name: "Tibetan Hotpot",
        nameZh: "藏族火锅",
        description: "A milder, yak-meat-based hotpot common in the restaurants of Jiuzhaigou township. Less fiery than Chengdu hotpot; the broth is enriched with local mushrooms and highland vegetables.",
        must: false,
      },
      {
        name: "Songpan Fried Beef",
        nameZh: "松潘炒牛肉",
        description: "From the Tibetan town of Songpan (near the park entrance), dry-fried yak beef with peppers and local spices. Robust and intensely flavoured — a popular lunch dish at restaurants in the Jiuzhaigou township.",
        must: false,
      },
    ],
    bestSeason: "Autumn (late September to early November) is peak season — golden and crimson foliage against the turquoise lakes creates the most spectacular scenery in China. Spring (April–May) for waterfalls swollen by snowmelt. Winter (December–February) for frozen falls and fewer crowds — the lakes remain vivid even in snow. Summer is the busiest period and can see afternoon thunderstorms.",
    transportation: [
      {
        mode: "✈️ By air (recommended)",
        details: "Jiuzhai Huanglong Airport (JZH) receives flights from Chengdu (45 min), Chongqing, Beijing, and Shanghai. The airport is at 3,448m altitude — take it slow on arrival. Shuttle buses run to the park gate (40 min, ¥45).",
      },
      {
        mode: "🚌 By bus from Chengdu",
        details: "Xinnanmen Bus Station to Jiuzhaigou: 7–9 hours by direct coach (¥200–270). An overnight sleeper bus is also available. Not recommended in winter when mountain roads may be closed.",
      },
      {
        mode: "🎫 Park entry & internal transport",
        details: "Park tickets: ¥169 (low season) to ¥220 (peak autumn). Internal shuttles cover all trail sections. The boardwalk system is mostly flat and accessible. Book tickets online at least 2–3 weeks ahead for autumn peak dates.",
      },
    ],
    accommodation: "Jiuzhaigou township (just outside the park gate) has a full range of hotels (¥200–1,200/night). Staying inside the park is no longer permitted. For the best experience, arrive the afternoon before, rest to acclimatise, and enter the park at opening (8am) — the early light on the lakes is exceptional. Zhangzha Town has more budget options (¥100–300/night).",
    travelTips: [
      "Book park tickets weeks ahead for the autumn peak (late September to late October) — daily visitor numbers are capped and tickets frequently sell out online. The Jiuzhaigou official ticketing website is the only reliable booking channel.",
      "Altitude is a genuine consideration: the valley floor sits at 2,000–2,500m and Long Lake is at 3,100m. Take the first day slowly; avoid strenuous hiking on arrival day if you are sensitive to altitude.",
      "The park is large — plan your route using the official park map. The Y-shaped valley has three main branches (Shuzheng, Zechawa, Rize). Most visitors cover two branches per day. The internal shuttle buses are free with your ticket.",
      "Autumn colour peaks in mid-October — the single best week to visit Jiuzhaigou. The park is at its most crowded but also most spectacular. Arrive on a weekday if possible.",
      "Photography: the colours are real and need no editing. For the best reflections, visit lakes in the morning before any wind picks up. Five Flower Lake is most vivid on sunny days with high-angle light (10am–2pm).",
    ],
  },

  // ── ZHEJIANG ─────────────────────────────────────────────────────────────────

  ningbo: {
    id: "ningbo",
    nameZh: "宁波",
    nameEn: "Ningbo",
    province: "zhejiang",
    provinceZh: "浙江省",
    tagline: "Ancient port, modern energy",
    description:
      "One of China's oldest maritime cities, Ningbo has been a major trading port since the Tang dynasty. The Tianyi Library — the oldest private library in Asia — stands in the old city alongside a perfectly preserved Qing dynasty commercial street. Putuoshan Sacred Island is an easy ferry trip from the coast. And beneath the modern city, a remarkable Bronze Age culture left its mark at Hemudu — 7,000 years before Marco Polo arrived.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Oldest private library in Asia", "Putuoshan Sacred Island gateway", "7,000-year-old Hemudu culture", "Preserved Qing dynasty streetscape", "Zhoushan seafood"],
    attractions: [
      {
        name: "Tianyi Library (天一阁)",
        description: "Built in 1561 and the oldest surviving private library in Asia, housing over 300,000 volumes including rare Ming dynasty books. The garden surrounding the library complex — with its carefully positioned rocks and water features — is one of the finest in Zhejiang. Allow 2 hours.",
        category: "Historic Site",
      },
      {
        name: "Laowaitan (老外滩)",
        description: "Ningbo's historic bund — a riverside stretch of colonial-era buildings along the Yong River dating from the 1840s when Ningbo was one of China's five treaty ports. The buildings now house restaurants and bars; the waterfront walk at dusk is one of Ningbo's most pleasant experiences.",
        category: "Historic District",
      },
      {
        name: "Hemudu Site Museum (河姆渡遗址)",
        description: "A 7,000-year-old Neolithic settlement discovered in 1973 that rewrote the history of Chinese civilisation — among the world's earliest evidence of rice cultivation, wooden architecture, and sophisticated pottery. The on-site museum is thoughtfully presented.",
        category: "Museum",
      },
      {
        name: "Yue Lake (月湖)",
        description: "A scenic lake district in the heart of the old city, surrounded by classical gardens, ancestral halls, and well-preserved residential lanes. Less commercialised than comparable areas in Hangzhou or Suzhou — a genuine neighbourhood lake enjoyed by locals.",
        category: "Scenic Area",
      },
      {
        name: "Asoka Temple (阿育王寺)",
        description: "A famous Buddhist monastery 20km east of the city, said to contain a relic of the historical Buddha brought from India in 282 AD. One of the five great Buddhist monasteries in China — quieter and more atmospheric than the tourist-heavy temples closer to the city.",
        category: "Temple",
      },
    ],
    food: [
      {
        name: "Ningbo Tang Yuan (宁波汤圆)",
        nameZh: "宁波汤圆",
        description: "Glutinous rice balls filled with black sesame paste and lard — the original Tang Yuan, which the rest of China has been imitating for centuries. Eaten year-round but especially at the Lantern Festival. Rich, sweet, and deeply satisfying.",
        must: true,
      },
      {
        name: "Stinky Tofu with Aged Brine (臭冬瓜)",
        nameZh: "臭冬瓜",
        description: "Ningbo's most distinctive fermented flavour — winter melon and tofu preserved in a traditional brine that produces a very pungent but flavourful result. More complex and less harsh than Changsha stinky tofu; a local obsession.",
        must: false,
      },
      {
        name: "Zhoushan Crab (舟山大闸蟹)",
        nameZh: "舟山螃蟹",
        description: "The Zhoushan archipelago produces superb sea crab and hairy crab. Ningbo seafood restaurants source fresh catch daily — steamed whole crab with Zhejiang vinegar and ginger is the correct approach.",
        must: true,
      },
      {
        name: "Rice Cake (宁波年糕)",
        nameZh: "宁波年糕",
        description: "Ningbo claims China's finest sticky rice cake — dense, chewy, and used in both sweet and savoury preparations. Stir-fried with pork and vegetables (炒年糕) is the local comfort food; eaten for breakfast with fermented tofu (臭豆腐) on the side.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) and Autumn (September–November) are ideal — mild temperatures, lower humidity, and the best conditions for the boat crossing to Putuoshan. Summer brings Zhoushan seafood at its freshest but is hot and humid. Winter is mild by northern China standards.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Hangzhou",
        details: "Hangzhou East to Ningbo: ~1.5 hours (¥55–80). From Shanghai Hongqiao: ~1.5 hours direct. From Nanjing South: ~2.5 hours.",
      },
      {
        mode: "✈️ Ningbo Lishe International Airport (NGB)",
        details: "Connected to all major Chinese cities and several international destinations. Metro Line 2 connects the airport to the city centre in 35 minutes.",
      },
      {
        mode: "⛴️ Ferry to Putuoshan",
        details: "Regular ferries from Ningbo Beilun Port or Zhoushan to Putuoshan island (1–2 hours, ¥80–130 depending on vessel). Check schedules online — high season sees more frequent sailings.",
      },
    ],
    accommodation: "The Tianyi Square / old city area is the most convenient base (¥250–700/night). Laowaitan has a growing number of boutique hotels in converted colonial buildings (¥400–1,000/night). Budget options are available near Ningbo Station and in the university district.",
    travelTips: [
      "Putuoshan Sacred Island requires a separate ferry ticket and park entry fee (¥160). Plan for an overnight on the island if possible — the dawn and dusk atmosphere is incomparably more peaceful than a day trip.",
      "Tianyi Library has a daily visitor cap — arrive early or book online. The adjacent Tianyi Square commercial district has good Ningbo breakfast options.",
      "Ningbo Museum (designed by Wang Shu, 2008 Pritzker Prize winner) is architecturally extraordinary — the bamboo-template concrete and recycled brick facade is worth a visit even without interest in the exhibits.",
      "The Hemudu Site Museum is in Yuyao, about 30km southwest — easiest by taxi or private car (¥60–80). Allow half a day.",
    ],
    dayTrips: [
      {
        name: "Putuoshan Sacred Island",
        nameZh: "普陀山",
        distance: "~2h by bus to port, then ferry",
        description: "One of China's four sacred Buddhist islands — ancient sea caves, temple bells at dawn, and a monastic pace of life entirely different from the mainland. An overnight stay is strongly recommended.",
        whyGo: "The most spiritually atmospheric island in China, and Ningbo is the closest major city to the ferry.",
        adminNote: "Located in Zhoushan Municipality — a separate ferry crossing from Ningbo's port. Worth every minute of the journey.",
      },
    ],
  },

  shaoxing: {
    id: "shaoxing",
    nameZh: "绍兴",
    nameEn: "Shaoxing",
    province: "zhejiang",
    provinceZh: "浙江省",
    tagline: "Canal city of scholars and wine",
    description:
      "Shaoxing is the most literary city in China — birthplace of Lu Xun, greatest writer of the 20th century, and home to the Orchid Pavilion where the calligrapher Wang Xizhi composed China's most famous preface in 353 AD. The old city's black-awning canal boats, whitewashed walls, and preserved Ming and Qing architecture create the authentic Jiangnan streetscape that other cities spend millions trying to recreate. And then there is the wine — Shaoxing yellow rice wine is as fundamental to Chinese cooking as salt.",
    image: "https://images.unsplash.com/photo-1570041423292-1ac47a9b0c19?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1570041423292-1ac47a9b0c19?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Birthplace of Lu Xun", "Ancient Orchid Pavilion", "Traditional black-awning canal boats", "Shaoxing yellow rice wine", "Preserved Ming-Qing streetscape"],
    attractions: [
      {
        name: "Lu Xun's Former Residence (鲁迅故里)",
        description: "The well-preserved birthplace and childhood neighbourhood of Lu Xun, China's most celebrated modern writer. The complex includes his family home, the Three-Flavour Study (Sanwei Shuwu) where he studied as a child, and the Hundred Grass Garden. One of the most thoughtfully presented literary heritage sites in China.",
        category: "Historic Site",
      },
      {
        name: "Orchid Pavilion (兰亭)",
        description: "The site where Wang Xizhi wrote the Preface to the Poems of Orchid Pavilion in 353 AD — Chinese calligraphy's most sacred text. The scenic garden in the hills southwest of the city reconstructs the setting of the famous gathering. A pilgrimage site for calligraphy enthusiasts worldwide.",
        category: "Cultural Heritage",
      },
      {
        name: "Ancient Canal Boat Ride",
        description: "Black-awning wooden boats (乌篷船) have carried people through Shaoxing's canals for centuries. A 30-minute canal ride is one of the most atmospheric ways to see the old city — book at the dock near the Lu Xun neighbourhood. Morning departures offer the calmest water.",
        category: "Scenic",
      },
      {
        name: "Cangqiao Historic District (仓桥直街)",
        description: "A 6km preserved canal street in the old city, lined with Ming and Qing dynasty merchant houses, carved stone bridges, and wine shops. The least touristy and most authentic of Shaoxing's old areas — walk from Guangning Bridge to Bianmen in either direction.",
        category: "Historic District",
      },
      {
        name: "Dayu Mausoleum (大禹陵)",
        description: "The legendary tomb of Yu the Great — the hero who tamed China's floods 4,000 years ago and founded the Xia dynasty. An important symbolic site in Chinese civilisation, with a vast ceremonial complex. Significant for Chinese visitors; the surrounding mountain scenery is beautiful.",
        category: "Historic Site",
      },
    ],
    food: [
      {
        name: "Shaoxing Yellow Rice Wine (绍兴黄酒)",
        nameZh: "绍兴黄酒",
        description: "The most famous cooking wine in Chinese cuisine, but also a serious drinking wine. The Jianhu water gives it a unique character — amber-coloured, mildly sweet, and earthy. Drink warm in winter, chilled in summer. Tour the Kuaiji Mountain winery for a tasting.",
        must: true,
      },
      {
        name: "Stinky Tofu (绍兴臭豆腐)",
        nameZh: "绍兴臭豆腐",
        description: "Shaoxing's iconic street snack — soft tofu fermented in brine until pungent, then deep-fried until crispy outside and custardy inside. Served with chilli sauce. The smell is confronting; the taste is addictive.",
        must: true,
      },
      {
        name: "Dried Tofu with Yellow Wine (腐乳)",
        nameZh: "腐乳",
        description: "Shaoxing red fermented tofu (腐乳) is one of the most complex preserved foods in Chinese cooking — used as a condiment, cooking ingredient, and breakfast spread on congee. The Shaoxing version is distinctly more complex than the nationally common brand.",
        must: false,
      },
      {
        name: "Brine-Cured Duck (糟鸭)",
        nameZh: "糟鸭",
        description: "Duck marinated in Shaoxing wine lees (酒糟) — a cooling summer dish with a rich, winey aroma. Eaten cold as an appetiser. The wine flavour penetrates deeply into the meat over the 24-hour curing process.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) for mild weather and the full green of the canal district. Autumn (September–October) is also excellent. Summer is hot and humid but the wine culture means cool indoor tastings at any time of year. Avoid major Chinese holidays when the Lu Xun area becomes very crowded.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Hangzhou",
        details: "Hangzhou East to Shaoxing North: ~25 minutes (¥25–35). From Shanghai Hongqiao: ~1 hour. Shaoxing North Station is in the new city — take a taxi or bus to the old city (20 min, ¥20–30).",
      },
      {
        mode: "🚌 Bus from Hangzhou",
        details: "Buses run frequently between Hangzhou and Shaoxing old city bus station (~50 min, ¥20–30), dropping closer to the Lu Xun area than the HSR station.",
      },
    ],
    accommodation: "The Lu Xun / Cangqiao area in the old city is the most atmospheric location — guesthouses in converted canal-front houses (¥200–600/night). The new city near Shaoxing North Station has more modern options (¥150–400/night). Shaoxing is easily done as a day trip from Hangzhou (25 min by HSR) or Shanghai (1 hour).",
    travelTips: [
      "Lu Xun's neighbourhood is free to enter but some interior buildings have a small fee. The whole complex takes 2–3 hours; allow time for the Three-Flavour Study and the Hundred Grass Garden separately.",
      "Canal boat rides need to be booked at the dock on the day — arrive early at peak season as capacity is limited. The short 30-minute circuit is sufficient; the longer 90-minute tour goes through more of the old canals.",
      "Buy Shaoxing yellow rice wine directly from a winery or established shop, not from tourist souvenir stands. Kuaiji Mountain (会稽山) and Guyue Longshan (古越龙山) are the most respected brands.",
      "Shaoxing's old city is compact enough to explore entirely on foot or by rented bicycle. The canal paths between the Lu Xun area and Cangqiao Street are the best cycling route.",
    ],
    dayTrips: [
      {
        name: "Hangzhou",
        nameZh: "杭州",
        distance: "~25min by high-speed rail",
        description: "Shaoxing and Hangzhou are natural companions — the former preserves old Jiangnan culture, the latter surrounds it with West Lake's natural beauty. Many travellers combine both in a single day or two-day trip.",
        whyGo: "The closest major city, and a completely different but complementary Jiangnan experience.",
      },
    ],
  },

  zhoushan: {
    id: "zhoushan",
    nameZh: "舟山",
    nameEn: "Zhoushan",
    province: "zhejiang",
    provinceZh: "浙江省",
    tagline: "China's sacred island and seafood capital",
    description:
      "An archipelago of 1,390 islands off the Zhejiang coast, Zhoushan is most famous as the gateway to Putuoshan — one of China's four sacred Buddhist islands. But the rest of the archipelago deserves equal attention: Zhoushan is China's largest fishing port, and the seafood here is incomparably fresh. The main island's Dinghai Old Town is a well-preserved historic district that most visitors to Putuoshan never discover.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Putuoshan Sacred Island", "China's largest fishing port", "Freshest seafood in eastern China", "Dinghai Historic District", "Island ferry network"],
    attractions: [
      {
        name: "Putuoshan Sacred Island (普陀山)",
        description: "One of China's four sacred Buddhist islands, dedicated to Guanyin (Goddess of Mercy). Ancient sea caves, centuries-old temples perched on cliff edges, and a dawn atmosphere that feels genuinely otherworldly. The Chaoyangdong Cave and Fayu Temple are the highlights. Ferries run from Zhoushan main island.",
        category: "Sacred Island",
      },
      {
        name: "Shenjiamen Fishing Harbour (沈家门渔港)",
        description: "China's largest fishing harbour and one of Asia's greatest seafood markets — thousands of fishing boats moored along 6km of docks. The nightly seafood night market (7pm–midnight) is extraordinary: fresh catches laid out on ice, grilled on-site, with plastic tables and cheap beer. An unmissable experience.",
        category: "Market",
      },
      {
        name: "Dinghai Old Town (定海古城)",
        description: "A largely intact Qing dynasty town on Zhoushan's main island, with traditional streets, memorial archways, and historic buildings around the Changguo Temple. Far less visited than comparable old towns on the mainland — a genuine find.",
        category: "Historic District",
      },
      {
        name: "Zhujiajian Island (朱家尖岛)",
        description: "Connected to the main island by a bridge, Zhujiajian has excellent beaches (Nansha Beach is the finest) and is the departure point for Putuoshan ferries. The island has a laid-back character completely different from the mainand.",
        category: "Island",
      },
    ],
    food: [
      {
        name: "Shenjiamen Grilled Seafood",
        nameZh: "沈家门海鲜烧烤",
        description: "The night market at Shenjiamen harbour is the definitive Zhoushan food experience — buy fresh seafood from the stalls, hand it to a nearby grill, and eat at plastic tables on the dock. Squid, razor clams, scallops with garlic, and sea snails are the staples.",
        must: true,
      },
      {
        name: "Zhoushan Yellow Croaker (舟山黄鱼)",
        nameZh: "舟山黄鱼",
        description: "Large yellow croaker is Zhoushan's most prized fish — braised with soy sauce and ginger, or simply steamed. The wild-caught fish from the East China Sea have a firmer, more complex flavour than farmed versions available elsewhere.",
        must: true,
      },
      {
        name: "Sea Urchin Rice (海胆饭)",
        nameZh: "海胆饭",
        description: "Fresh sea urchin roe served over warm white rice — a simple preparation that showcases the briny sweetness of urchins from the Zhoushan waters. Available at dockside restaurants near Shenjiamen.",
        must: false,
      },
      {
        name: "Seafood Congee (海鲜粥)",
        nameZh: "海鲜粥",
        description: "A Zhoushan breakfast staple — rice porridge cooked with fresh clams, shrimp, and yellow croaker. Far more complex than mainland congee due to the quality of the seafood. Available at small breakfast stalls near the fishing harbour from 6am.",
        must: false,
      },
    ],
    bestSeason: "Autumn (September–November) is the peak fishing season and the best time for seafood. Spring (April–May) is excellent for Putuoshan with smaller crowds. Summer (June–August) is the main tourist season but typhoons can disrupt ferry services — check weather before booking. Winter sees the freshest crab.",
    transportation: [
      {
        mode: "🚄 + 🚌 From Hangzhou",
        details: "Hangzhou to Zhoushan: high-speed rail to Ningbo (~1.5h), then bus to Zhoushan (~1.5h). Total ~3 hours. Direct buses from Hangzhou also run (3.5 hours).",
      },
      {
        mode: "🚌 From Ningbo",
        details: "Frequent buses from Ningbo to Zhoushan Shenjiamen (1.5 hours, ¥35). The fastest connection from the mainland.",
      },
      {
        mode: "⛴️ Ferry to Putuoshan",
        details: "Ferries to Putuoshan depart from Zhujiajian Port on Zhoushan's main island (30 min, ¥35) and from Ningbo Beilun Port (2h, ¥80). Buy tickets online or at port — weekends and holidays sell out.",
      },
    ],
    accommodation: "Shenjiamen area on the main island is the best base for the seafood experience (¥200–600/night). Putuoshan island has its own guesthouses and mid-range hotels (¥300–800/night) — staying on the island overnight is strongly recommended for the dawn atmosphere. Zhujiajian has beach resorts (¥400–1,200/night).",
    travelTips: [
      "The Shenjiamen night market is best on weekdays — weekends are extremely crowded. Arrive by 7:30pm to secure a good table. Prices are roughly fixed; some haggling is accepted at unfamiliar stalls.",
      "Putuoshan ferries are cancelled during typhoons and rough weather — always have a flexible return plan. Check the ferry app (普陀山轮渡) or hotel front desk for real-time status.",
      "Putuoshan entry ticket (¥160) includes access to all major temples but not the cable car. The island is only 12km² and walkable, but renting a golf cart (¥80–120) for half a day saves significant time.",
      "For the freshest fish at the best prices, follow the locals to the small seafood restaurants behind the Shenjiamen market rather than eating at the prominently signed tourist-facing restaurants on the main road.",
    ],
    dayTrips: [
      {
        name: "Putuoshan Sacred Island",
        nameZh: "普陀山",
        distance: "30min by ferry from Zhujiajian Port",
        description: "One of China's four sacred Buddhist islands — the main reason most people visit Zhoushan. Ancient temples, sea caves, and an atmosphere of genuine sanctity.",
        whyGo: "Putuoshan is Zhoushan's crown jewel, and the ferry is the only way to reach it.",
      },
    ],
  },

  // ── JIANGSU ──────────────────────────────────────────────────────────────────

  yangzhou: {
    id: "yangzhou",
    nameZh: "扬州",
    nameEn: "Yangzhou",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "The most elegant city on the Grand Canal",
    description:
      "Yangzhou was the wealthiest city in China during the Tang dynasty, and it still carries that refinement in everything it does. Slender West Lake is more intimate and more graceful than Hangzhou's West Lake. The breakfast culture — dim sum teahouses where meals last two hours — is unmatched anywhere in China. Ge Garden's layered stone rockeries are among the finest classical garden work in the country. And the city has given Chinese cooking some of its most subtle, nuanced dishes.",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Slender West Lake", "China's finest breakfast culture", "Ge Garden classical rockeries", "Grand Canal history", "Huaiyang cuisine birthplace"],
    attractions: [
      {
        name: "Slender West Lake (瘦西湖)",
        description: "A narrow, winding lake connecting a series of classical pavilions, bridges, and garden islands — more intimate and perhaps more beautiful than Hangzhou's West Lake. The Five Pavilion Bridge (五亭桥) is the most photographed structure in Yangzhou. The 24-bridge promenade is especially beautiful in spring when the willows are out.",
        category: "Scenic Area",
      },
      {
        name: "Ge Garden (个园)",
        description: "One of the four most famous private gardens in China — celebrated for its extraordinary layered rockeries representing the four seasons in a single space. The bamboo plantings that inspired the garden's name are equally remarkable. Built in 1818 by a salt merchant, it epitomises Yangzhou's Tang and Qing dynasty wealth.",
        category: "Classical Garden",
      },
      {
        name: "He Garden (何园)",
        description: "A late Qing dynasty garden (1883) combining Chinese classical design with Western architectural elements — double-deck corridors, European cast-iron balustrades, and a central stage that could be viewed from every angle. One of China's best-preserved Qing era private gardens.",
        category: "Classical Garden",
      },
      {
        name: "Dongguan Historic Street (东关街)",
        description: "Yangzhou's best-preserved traditional commercial street — 1,122m of Ming and Qing dynasty shopfronts, ancient wooden facades, and heritage residences. Morning is best: breakfast shops open early and the street food culture is at its most authentic before the tour groups arrive.",
        category: "Historic District",
      },
      {
        name: "Daming Temple (大明寺)",
        description: "A Tang dynasty temple on Shuhui Hill, famous as the monastery of the monk Jianzhen who sailed to Japan in 753 AD and established Japanese Buddhism. The Jianzheng Memorial Hall houses a replica of Jianzhen's portrait, a national treasure in both China and Japan.",
        category: "Temple",
      },
    ],
    food: [
      {
        name: "Yangzhou Fried Rice (扬州炒饭)",
        nameZh: "扬州炒饭",
        description: "The most imitated rice dish in the world. The Yangzhou original uses fresh shrimp, egg, ham, and spring onions — each ingredient cooked separately and combined at the last moment. The texture should be dry, the egg fragrant, and each grain separate. A proper version at Fuchun Tea House is a revelation compared to the global imitation.",
        must: true,
      },
      {
        name: "Fuchun Dim Sum Breakfast (富春茶社)",
        nameZh: "富春茶社早茶",
        description: "The Yangzhou dim sum breakfast (早茶, morning tea) is a cultural institution — delicate steamed buns, shrimp dumplings, glutinous rice, and pastries eaten over 2–3 hours in a teahouse setting. Fuchun Tea House (est. 1885) is the classic address. Book ahead; locals arrive at 6am.",
        must: true,
      },
      {
        name: "Lion's Head Meatball (清炖狮子头)",
        nameZh: "清炖狮子头",
        description: "Large pork meatballs braised in a clear stock with Chinese cabbage — the definitive Huaiyang dish. The meat-to-fat ratio is precise (7:3), the texture impossibly tender. Found at traditional Huaiyang restaurants throughout the old city.",
        must: true,
      },
      {
        name: "Beef and Noodle Soup (淮扬汤面)",
        nameZh: "淮扬汤面",
        description: "Yangzhou's noodle soups are famously refined — the broth is clear, intensely flavoured, and built over 8–12 hours from chicken and pork bone. Topping options include shredded braised beef, soft-boiled egg, and blanched greens. Available at breakfast noodle shops from 6am.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) when willows and peach blossoms frame Slender West Lake — the most photographed season in Yangzhou. Autumn (October–November) for clear skies and garden colours. The breakfast culture is excellent year-round.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Nanjing",
        details: "Nanjing South to Yangzhou (via Zhenjiang): ~45 minutes. Direct from Shanghai Hongqiao: ~1.5 hours. Yangzhou East Station is in the new city — taxi to the old city area takes ~20 minutes (¥25–35).",
      },
      {
        mode: "🚌 Bus from Nanjing",
        details: "Buses run from Nanjing's long-distance bus stations to Yangzhou old city in ~1.5 hours. More convenient than the HSR station for accessing the historic core.",
      },
    ],
    accommodation: "The Slender West Lake / Dongguan Street area is the most atmospheric location (¥300–800/night). Mid-range business hotels cluster near the city centre (¥200–500/night). Yangzhou is convenient as a day trip from Nanjing (45 min by HSR) or Shanghai (1.5 hours), but an overnight allows you to experience the legendary breakfast culture properly.",
    travelTips: [
      "The breakfast culture is the main reason to stay overnight in Yangzhou. Fuchun Tea House (open from 6am) has queues by 7am on weekends — book a table online if possible. The breakfast experience alone justifies the trip from Nanjing or Shanghai.",
      "Slender West Lake is largest and most beautiful in the morning before the tour groups arrive. Buy tickets online (¥150) and enter at opening time (7:30am).",
      "Ge Garden requires patience with the stone rockeries — find a quiet corner and sit for 20 minutes. The garden is designed to be experienced slowly, not photographed quickly.",
      "Yangzhou cookery classes are available through some hotels and cooking schools — Huaiyang cuisine is one of China's Eight Regional Cuisines and a serious culinary tradition worth engaging with.",
    ],
    dayTrips: [
      {
        name: "Nanjing",
        nameZh: "南京",
        distance: "~45min by high-speed rail",
        description: "The closest major city — Yangzhou and Nanjing make an excellent two-day pairing, with Yangzhou's refined canal culture complementing Nanjing's dynastic history.",
        whyGo: "The natural pairing for Yangzhou: a larger, historically richer city just 45 minutes away.",
      },
    ],
  },

  wuxi: {
    id: "wuxi",
    nameZh: "无锡",
    nameEn: "Wuxi",
    province: "jiangsu",
    provinceZh: "江苏省",
    tagline: "Taihu Lake and the flavour of old Jiangnan",
    description:
      "Wuxi sits on the northern shore of Lake Tai — one of China's three great freshwater lakes — and has been a prosperous silk and textile centre since the Ming dynasty. The old town's canal district, the sweeping lake views from Turtle Head Isle, and the surprisingly good cuisine (Wuxi spareribs braised in sweet red sauce are a national dish) make it a thoroughly satisfying stop. And for anyone interested in classical Chinese architecture, Jichang Garden is among the finest examples in existence.",
    image: "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Taihu Lake panoramas", "Jichang Garden (UNESCO)", "Wuxi spareribs", "Grand Canal old town", "Jiangnan silk heritage"],
    attractions: [
      {
        name: "Turtle Head Isle (鼋头渚)",
        description: "A promontory jutting into Lake Tai with sweeping 270-degree views of the lake — dotted with cherry trees that explode in pink blossoms each spring (late March to mid-April). The scenic area also has historical gardens and an islet ferry connection. Spring blossom season is extraordinary.",
        category: "Scenic Area",
      },
      {
        name: "Jichang Garden (寄畅园)",
        description: "One of China's oldest surviving private gardens (Ming dynasty, 1506), widely considered the masterpiece of the Jiangnan garden tradition. The Qing emperors Kangxi and Qianlong both visited repeatedly, and Qianlong commissioned a replica for the Summer Palace in Beijing. Intimate, sophisticated, and never crowded.",
        category: "Classical Garden",
      },
      {
        name: "Nanchan Temple District (南禅寺)",
        description: "Wuxi's old commercial and temple district — a seven-storey pagoda anchoring a complex of Ming dynasty temple buildings surrounded by traditional shopping streets and tea houses. Liangxi Road nearby is the best street for local food.",
        category: "Historic District",
      },
      {
        name: "Huishan Ancient Town (惠山古镇)",
        description: "A Tang dynasty settlement at the foot of Huishan Hill, known for its remarkable concentration of ancestral halls (祠堂) — over 100 from various family lineages, spanning 700 years of memorial architecture. The clay figurines (惠山泥人) made here since the Ming dynasty are Wuxi's most famous craft.",
        category: "Historic Town",
      },
      {
        name: "Grand Canal Waterfront (古运河)",
        description: "The Wuxi section of the Grand Canal, with a preserved historical promenade along the west bank. The area around Qingming Bridge (清名桥) is the most atmospheric — old warehouses, stone bridges, and traditional residences reflected in the water.",
        category: "Scenic Area",
      },
    ],
    food: [
      {
        name: "Wuxi Spareribs (无锡排骨)",
        nameZh: "无锡排骨",
        description: "Pork ribs braised in Shaoxing wine, soy sauce, rock sugar, and five-spice until they are fall-off-the-bone tender and glazed a deep mahogany red. One of China's ten most famous dishes — the original is still best at traditional restaurants in Wuxi itself.",
        must: true,
      },
      {
        name: "Taihu White Shrimp (太湖白虾)",
        nameZh: "太湖白虾",
        description: "Tiny, translucent freshwater shrimp from Lake Tai — blanched and eaten with vinegar, or fried with salt. Supremely fresh, with a sweetness only possible from lake-to-table cooking. Available at lakeside restaurants near Turtle Head Isle.",
        must: true,
      },
      {
        name: "Taihu Three Whites (太湖三白)",
        nameZh: "太湖三白",
        description: "The legendary three white foods of Taihu Lake: white shrimp, whitebait (银鱼), and white carp (白鱼). Usually ordered as a set at lakeside restaurants — each prepared simply to highlight the delicate freshness of the lake catch.",
        must: true,
      },
      {
        name: "Wuxi Small Cage Buns (无锡小笼包)",
        nameZh: "无锡小笼包",
        description: "Wuxi's steamed buns are sweeter than Shanghai's xiaolongbao — the pork filling uses a touch of sugar and the soup inside is noticeably richer. A small but meaningful regional variation on one of China's most beloved dim sum dishes.",
        must: false,
      },
    ],
    bestSeason: "Spring (late March to mid-April) for the cherry blossom at Turtle Head Isle — one of the great seasonal spectacles of Jiangnan. Autumn (October–November) for clear Taihu Lake views. Summer brings fresh lake seafood but is hot and humid. Winter is mild and the gardens are uncrowded.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Shanghai",
        details: "Shanghai Hongqiao to Wuxi: ~30 minutes (¥40–60). From Nanjing South: ~30 minutes. From Hangzhou: ~1 hour. One of the best-connected cities in the Yangtze Delta.",
      },
      {
        mode: "🚇 Wuxi Metro",
        details: "Lines 1 and 2 cover the main tourist areas. Turtle Head Isle is best reached by taxi (¥30–40 from Wuxi Station) or the scenic area shuttle. Huishan Ancient Town is on Metro Line 3.",
      },
    ],
    accommodation: "The canal district near Nanchan Temple and Qingming Bridge is the most atmospheric location (¥300–700/night). The area near Wuxi Station has good mid-range options (¥200–500/night). Wuxi is frequently done as a day trip from Shanghai (30 min) or Nanjing, but an overnight gives you time for Taihu Lake at both sunset and sunrise.",
    travelTips: [
      "Cherry blossom at Turtle Head Isle (late March to mid-April) is extraordinarily popular — arrive at opening time (7:30am) and buy tickets online at least 3–5 days ahead during blossom peak. The ¥105 ticket includes a lake ferry.",
      "Jichang Garden has a daily visitor limit and is best enjoyed on weekday mornings. The garden is small — move slowly and sit in the pavilions rather than rushing through.",
      "Taihu Three Whites can only be guaranteed at licensed lake restaurants. Ask the restaurant to confirm the fish is from Lake Tai (太湖本地捕捞) rather than farmed elsewhere.",
      "Huishan clay figurines are one of China's most distinctive folk crafts — the workshop area in Huishan Ancient Town has artisans demonstrating the traditional technique. Good quality pieces cost ¥80–300.",
    ],
    dayTrips: [
      {
        name: "Suzhou",
        nameZh: "苏州",
        distance: "~20min by high-speed rail",
        description: "Suzhou's UNESCO gardens and Pingjiang Road canal district are just 20 minutes away — Wuxi and Suzhou make the ideal two-day Jiangsu pairing.",
        whyGo: "Two of the Yangtze Delta's most refined cities, close enough to combine in a single trip.",
      },
    ],
  },

  // ── SHANDONG ─────────────────────────────────────────────────────────────────

  qingdao: {
    id: "qingdao",
    nameZh: "青岛",
    nameEn: "Qingdao",
    province: "shandong",
    provinceZh: "山东省",
    tagline: "Germany's legacy on the Yellow Sea",
    description:
      "Once a German colonial port, Qingdao is one of China's most architecturally distinctive cities — red-roofed villas, Gothic churches, and cobblestone streets climbing the hills above a stunning bay. It is also the home of Tsingtao Beer, brewed here since 1903 with German methods and local spring water. Add world-class seafood, two of northern China's best beaches, and excellent rail connections, and you have the most liveable city on China's eastern seaboard.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200&h=600&fit=crop&auto=format",
    highlights: ["German colonial architecture", "Tsingtao Beer birthplace", "Yellow Sea beaches", "Fresh seafood", "Laoshan mountain coast"],
    attractions: [
      {
        name: "Zhanqiao Pier (栈桥)",
        description: "Qingdao's most iconic landmark — a 440m iron pier extending into the bay, built in 1891 and later extended with a pavilion at its tip. The view back toward the red rooftops and green hills of the old German city is the definitive Qingdao image. Best photographed at sunrise from the beach.",
        category: "Historic Landmark",
      },
      {
        name: "German Colonial Quarter (八大关 & 老城区)",
        description: "Two adjoining areas of exceptional colonial architecture. The Eight Passes (八大关) villa district has European summer houses from a dozen different national styles — German, British, French, Russian — set among pine and maple trees. The adjacent old town has Gothic churches, consulate buildings, and the Governor's Residence (now a museum).",
        category: "Historic District",
      },
      {
        name: "Tsingtao Brewery Museum (青岛啤酒博物馆)",
        description: "The original 1903 brewery converted into a museum tracing the full history of China's most famous beer. The tour ends in an underground tasting room with fresh draught beer from the original copper vats. Book tickets online; weekend queues can be long.",
        category: "Museum",
      },
      {
        name: "Laoshan Scenic Area (崂山风景区)",
        description: "A dramatic coastal mountain rising directly from the Yellow Sea — the highest peak on China's eastern seaboard at sea level. Taoist temples cling to the granite cliffs; spring water here is bottled and used in the local baijiu. The East Water Village trail has the best combination of sea views and ancient temples.",
        category: "Nature",
      },
      {
        name: "Fushan Bay Beaches (第一、第二海水浴场)",
        description: "Qingdao's First and Second Beaches are two of the best urban beaches in northern China — clean yellow sand, calm water, and mountain backdrops. The First Beach is larger and more famous; the Second is quieter. Both are free to enter and open from May to October.",
        category: "Beach",
      },
    ],
    food: [
      {
        name: "Qingdao Draught Beer (扎啤)",
        nameZh: "青岛扎啤",
        description: "Fresh, unfiltered Tsingtao draught beer served in clear plastic bags (a Qingdao tradition) or large pitchers at sidewalk seafood restaurants. Incomparably fresher than the bottled version sold elsewhere. Pair with grilled clams at any beach-adjacent restaurant.",
        must: true,
      },
      {
        name: "Grilled Shellfish (烤海鲜)",
        nameZh: "烤海鲜",
        description: "Qingdao's seafood night market culture centres on grilled razor clams, scallops with garlic and glass noodles, sea snails, and oysters — eaten at outdoor tables with cold beer. The Liuting Seafood Market and the streets behind the First Beach are the best hunting grounds.",
        must: true,
      },
      {
        name: "Qingdao Sea Cucumber (海参捞饭)",
        nameZh: "海参捞饭",
        description: "Yellow Sea sea cucumbers braised in a rich soy and oyster sauce, served over white rice. A Shandong luxury ingredient — sea cucumbers from this coast are considered the finest in China. Available at mid-range and upscale restaurants in the old city.",
        must: false,
      },
      {
        name: "Jiaodong Dumplings (胶东水饺)",
        nameZh: "胶东水饺",
        description: "Qingdao-style dumplings stuffed with fresh seafood — shrimp and pork, crab meat, or yellow croaker. The skins are thinner than Beijing-style jiaozi and the filling is noticeably juicier. A Shandong Peninsula speciality worth seeking out.",
        must: false,
      },
    ],
    bestSeason: "May–June and September–October are ideal — cool sea breezes, blue skies, and lower tourist volume. July–August is peak beach season but extremely crowded and expensive. The International Beer Festival runs in August. Winters are cold but the city is beautiful under snow, with virtually no tourists.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Beijing South to Qingdao: ~4.5 hours. Shanghai Hongqiao to Qingdao: ~4 hours. Jinan to Qingdao: ~1.5 hours. Qingdao North Station is the main HSR hub.",
      },
      {
        mode: "✈️ Qingdao Jiaodong International Airport (TAO)",
        details: "Opened 2021, 55km from the city centre. Metro Line 8 connects to the city in ~1 hour. International flights to Korea, Japan, and Southeast Asia.",
      },
      {
        mode: "🚇 City transport",
        details: "Metro Lines 2, 3, 11, and 13 cover the main tourist areas. The old German district and beaches are best explored on foot. Line 11 runs along the coast to Laoshan.",
      },
    ],
    accommodation: "The old German quarter (Shinan District near Zhanqiao and the First Beach) is the most atmospheric location — boutique hotels in converted colonial villas (¥400–1,500/night). Mid-range options cluster near Qingdao Station (¥200–500/night). For beaches, hotels along Fushan Bay are convenient. Avoid the airport area unless you have an early flight.",
    travelTips: [
      "The best Qingdao beer experience is not the Tsingtao Museum — it is sitting at a plastic table outside a seafood shack near the First Beach with a bag of draught beer and a pile of grilled clams. The museum is interesting, but prioritise the real thing.",
      "Laoshan requires a full day and the cable cars are essential — hiking all the way down is very tiring. Buy the combination ticket (¥130–160) that includes both the scenic area and the main cable car.",
      "The German Quarter's streets are best explored without a map — simply walk uphill from Zhanqiao and get lost in the red-roofed residential lanes. The Governor's Residence Museum (¥15) is excellent.",
      "Seafood prices near major tourist sites are significantly higher than at local restaurants just a few streets away. Walk two streets back from the beach to find local prices.",
    ],
    dayTrips: [
      {
        name: "Mount Tai (Tai'an)",
        nameZh: "泰山（泰安）",
        distance: "~2.5h west by high-speed rail",
        description: "China's most sacred mountain and the first peak emperors climbed to announce Heaven's mandate. The sunrise from the summit is one of China's great natural spectacles.",
        whyGo: "The most culturally significant mountain in China, and an easy rail trip from Qingdao.",
      },
    ],
  },

  taishan: {
    id: "taishan",
    nameZh: "泰山",
    nameEn: "Mount Tai",
    province: "shandong",
    provinceZh: "山东省",
    tagline: "The mountain that defines China's soul",
    description:
      "For 3,000 years, emperors climbed Mount Tai to announce their mandate from Heaven. Confucius climbed it and declared the world small. Today millions of ordinary people make the same ascent — on foot through 6,293 ancient stone steps, or by cable car — to watch the sunrise from the summit. Mount Tai is not the highest mountain in China, nor the most dramatic, but it is the most sacred, and standing on the summit at dawn, you understand exactly why.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=600&fit=crop&auto=format",
    highlights: ["China's most sacred mountain", "6,293 ancient stone steps", "Emperor worship site", "UNESCO World Heritage", "Sunrise above the clouds"],
    attractions: [
      {
        name: "Sunrise from the Summit (日出)",
        description: "The definitive Mount Tai experience — watching the sun rise above the clouds from the 1,545m Jade Emperor Peak. To see it, you must either hike through the night (starting from the Red Gate at midnight) or stay overnight at the summit. The colour progression from deep purple to gold is extraordinary.",
        category: "Natural Spectacle",
      },
      {
        name: "The Stone Steps (十八盘)",
        description: "The final 1,827 steps of the central route, carved directly up a near-vertical cliff face — the most dramatic section of the ascent. Known as the Eighteen Bends (十八盘), they are steep enough that porters use shoulder poles to carry supplies for summit hotels. Allow 2–3 hours for this section.",
        category: "Historic Trail",
      },
      {
        name: "Dai Temple (岱庙)",
        description: "The main imperial temple at the mountain's base — the largest Taoist temple complex in China and one of the best-preserved examples of ancient Chinese palace architecture. Emperors conducted elaborate rituals here before beginning the ascent. The ancient cypresses in the courtyard are over 2,000 years old.",
        category: "Temple",
      },
      {
        name: "Red Gate Palace (红门宫)",
        description: "The traditional starting point of the central ascent route — a Ming dynasty temple marking the beginning of the stone steps. The 1,500+ stone steps from the Red Gate to the Zhongtian Gate mid-mountain station take 2–3 hours at a steady pace.",
        category: "Historic Site",
      },
      {
        name: "Jade Emperor Temple (玉皇顶)",
        description: "The summit temple — the holiest point on the mountain and the symbolic centre of Chinese cosmology. Stone inscriptions carved into the rock face nearby record imperial visits spanning 2,000 years. The views on a clear day extend to the Yellow Sea.",
        category: "Temple",
      },
    ],
    food: [
      {
        name: "Tai'an Tofu (泰安豆腐)",
        nameZh: "泰安豆腐",
        description: "Tai'an's spring water produces exceptionally silky tofu — a local saying puts it alongside the mountain and the river as the three wonders of Tai'an. Braised tofu with local herbs is the essential dish at restaurants in the city below the mountain.",
        must: true,
      },
      {
        name: "Shandong Pancake (煎饼)",
        nameZh: "煎饼",
        description: "The Shandong staple — a large, thin, crispy buckwheat or millet crepe spread with fermented bean paste and filled with green onion. Porters on the mountain eat them for energy; hikers eat them at trail-side stalls. More substantial and complex than it looks.",
        must: true,
      },
      {
        name: "Summit Instant Noodles (山顶泡面)",
        nameZh: "山顶泡面",
        description: "A Mount Tai rite of passage — instant noodles at a summit teahouse at 3am, after the overnight climb and before the sunrise. The extreme markup (¥30–50 for a cup) is forgiven because nothing has ever tasted so good after 6,000 steps.",
        must: false,
      },
      {
        name: "Red Dates (泰山红枣)",
        nameZh: "泰山红枣",
        description: "Dried red dates from the Tai'an area — sold in bags at every level of the mountain ascent. Sweet, chewy, and a traditional energy food for pilgrims. Buy from vendors at the Dai Temple rather than at the summit where prices double.",
        must: false,
      },
    ],
    bestSeason: "Autumn (September–November) for the clearest skies and the best chance of a cloud-sea sunrise. Spring (April–May) for pleasant temperatures and fewer crowds. Summer is the most popular but cloud cover frequently obscures the sunrise. Winter ascents are dramatic but the steps become icy — crampons available for rent.",
    transportation: [
      {
        mode: "🚄 High-speed rail to Tai'an",
        details: "Beijing South to Tai'an: ~2 hours (¥180–250). Shanghai Hongqiao to Tai'an: ~3.5 hours. Jinan to Tai'an: ~30 minutes. Tai'an Station is 3km from the mountain base — taxi ¥15–20.",
      },
      {
        mode: "🚡 Mountain cable cars",
        details: "Three cable cars operate: Zhongtian Gate to the summit (¥100 one-way, recommended for descent); Taohua Valley cable car (east route, ¥100); and Tianzhu Peak cable car. Buy online to avoid queues.",
      },
      {
        mode: "🥾 On foot",
        details: "The central route (Red Gate → summit) takes 4–5 hours ascending, 3–4 hours descending. The overnight ascent (midnight start) for sunrise requires a head torch and warm layers even in summer. The Taohua Valley east route is less crowded.",
      },
    ],
    accommodation: "Summit hotels (¥400–1,500/night) are the key to seeing the sunrise without a midnight hike — but book 4–6 weeks ahead for weekends and peak autumn season. The Shenqi Hotel and Zhongtian Gate hotels are the main options. Tai'an city has comfortable mid-range hotels (¥200–500/night) for those doing the midnight ascent.",
    travelTips: [
      "To see the sunrise without hiking through the night: take the last afternoon cable car up, check into a summit hotel, and watch the sunrise comfortably in the morning. This is the approach most Chinese visitors use.",
      "The overnight hike is genuinely atmospheric — thousands of people with head torches ascending in darkness, arriving at the summit in the cold before dawn. Bring layers: summit temperatures in autumn are 10–15°C colder than the base.",
      "The central route is always the most crowded. The Taohua Valley east route and the west route are significantly quieter and have more natural scenery. Both converge at the summit.",
      "Tai'an city below the mountain has excellent accommodation and the Dai Temple — worth an afternoon before or after the ascent. The old city lanes near the Dai Temple have the best local restaurants.",
    ],
    dayTrips: [
      {
        name: "Qufu — Confucius Hometown",
        nameZh: "曲阜",
        distance: "~30min south by high-speed rail",
        description: "The birthplace of Confucius and the spiritual home of Chinese civilisation — the Temple, Cemetery, and Mansion are a UNESCO World Heritage complex of extraordinary scale.",
        whyGo: "Mount Tai and Qufu are the two most historically significant sites in Shandong — combining them in one trip is the obvious itinerary.",
      },
    ],
  },

  qufu: {
    id: "qufu",
    nameZh: "曲阜",
    nameEn: "Qufu",
    province: "shandong",
    provinceZh: "山东省",
    tagline: "Birthplace of Confucius, cradle of Chinese thought",
    description:
      "For 2,500 years, Qufu has been the spiritual home of Chinese civilisation. The Temple of Confucius is one of the most architecturally impressive complexes in China — second in scale only to the Forbidden City. The adjacent Confucius Mansion housed 77 generations of his direct descendants, making it the longest-running aristocratic family home in world history. The Confucius Cemetery, where the sage and his descendants are buried across 200 hectares of ancient forest, is one of the most peaceful and moving places in China.",
    image: "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1531219432768-9f540ce91ef3?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Temple of Confucius (UNESCO)", "77 generations of descendants", "Confucius Cemetery ancient forest", "Chinese civilisation's epicentre", "Kong family cuisine"],
    attractions: [
      {
        name: "Temple of Confucius (孔庙)",
        description: "Built on the site of Confucius's home after his death in 479 BC and expanded over 2,500 years into a 22-hectare complex of 466 rooms across nine courtyards. The Dacheng Hall rivals the Forbidden City's Taihe Hall in scale and grandeur. Over 2,100 ancient stone stelae record imperial edicts and memorials. Allow 3 hours.",
        category: "UNESCO Heritage",
      },
      {
        name: "Confucius Cemetery (孔林)",
        description: "A 200-hectare ancient cemetery containing the graves of Confucius, his son, and over 100,000 of his descendants — making it the world's largest continuously used cemetery. The sacred forest of ancient cypress and pine trees, some over 1,000 years old, creates an atmosphere of deep tranquility. Confucius's tomb is marked simply with a low earthen mound.",
        category: "UNESCO Heritage",
      },
      {
        name: "Confucius Mansion (孔府)",
        description: "The official residence of the Duke of Yansheng — the eldest male descendant of Confucius in each generation. 77 generations of the Kong family lived here from the Song dynasty until the Republic era. Over 480 rooms preserve the living conditions of China's most privileged scholarly family. The private garden is particularly fine.",
        category: "UNESCO Heritage",
      },
      {
        name: "Confucius Research Institute",
        description: "A modern museum dedicated to the life, teachings, and global influence of Confucius. Well-curated English-language exhibits make this the best starting point for visitors unfamiliar with Confucian thought before entering the historic complex.",
        category: "Museum",
      },
    ],
    food: [
      {
        name: "Kong Family Cuisine (孔府菜)",
        nameZh: "孔府菜",
        description: "One of China's eight regional cuisines, developed over centuries to serve imperial visitors to the Confucius Temple. Elegant, refined, and mild — braised shark's fin soup, oven-roasted duck, and delicate vegetable preparations. Queli Hotel and Confucius Restaurant serve the most authentic versions.",
        must: true,
      },
      {
        name: "Shandong Pancake with Spring Onion (大葱煎饼)",
        nameZh: "大葱煎饼",
        description: "A Shandong classic — thin buckwheat crepe spread with sweet bean paste and wrapped around a large segment of raw spring onion. The Shandong spring onion is famously pungent and sweet. Available from street vendors near the main temple gate.",
        must: true,
      },
      {
        name: "Braised Intestines (九转大肠)",
        nameZh: "九转大肠",
        description: "A Shandong classic — pork intestines braised in nine-stage process with soy, vinegar, and aromatics until silky and intensely flavoured. One of the most famous dishes in Chinese regional cooking, and much better than it sounds.",
        must: false,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (September–November) — the ancient forest in the Cemetery is particularly beautiful with autumn foliage. The Confucius Cultural Festival in late September draws large crowds but is a unique cultural event. Summer is hot; winter is cold but the complex is empty.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Qufu East Station: Beijing South ~2 hours, Shanghai ~3.5 hours, Tai'an ~30 minutes. Qufu East is 15km from the city centre — shuttle buses and taxis run to the historic core (¥15–25).",
      },
      {
        mode: "🚌 Local transport",
        details: "The three main heritage sites (Temple, Mansion, Cemetery) are within walking distance of each other. Electric golf carts serve the Cemetery's internal paths. Qufu is a very compact city — most visitors walk everywhere.",
      },
    ],
    accommodation: "Hotels cluster near the South Gate of the Confucius Temple (¥250–700/night). The Queli Hotel, in a courtyard adjacent to the Temple complex, is the most atmospheric option. Qufu is manageable as a day trip from Jinan or Tai'an, but a night allows you to experience the atmospheric dawn at the Cemetery.",
    travelTips: [
      "Buy the combined three-site ticket (孔庙孔府孔林联票, ¥150) rather than individual tickets. Visit the Cemetery last — it is the most emotionally resonant site and benefits from the context of the Temple and Mansion.",
      "The Cemetery closes at sunset and is at its most beautiful in the early morning light filtering through the ancient trees. If you stay overnight in Qufu, visit at 7am before any tour groups arrive.",
      "The Temple complex is vast — a guided tour (available in English, ¥100–200) dramatically improves the experience by identifying the key halls and explaining the significance of the stelae inscriptions.",
      "Qufu's rickshaw drivers outside the main gate will offer tours — agree the price before getting in, and confirm that the Cemetery is included (some drivers charge separately for the 2km ride there).",
    ],
    dayTrips: [
      {
        name: "Mount Tai",
        nameZh: "泰山",
        distance: "~30min north by high-speed rail",
        description: "China's most sacred mountain, where emperors announced their mandate from Heaven. The sunrise from the 1,545m summit is the great natural spectacle of Shandong.",
        whyGo: "Qufu and Mount Tai are the spiritual heart of Shandong — covering both in one trip is essential.",
      },
    ],
  },

  jinan: {
    id: "jinan",
    nameZh: "济南",
    nameEn: "Jinan",
    province: "shandong",
    provinceZh: "山东省",
    tagline: "The City of Springs",
    description:
      "Jinan has been called the City of Springs for 2,700 years — 72 named springs bubble up through the limestone beneath the city, and the largest, Baotu Spring, has been flowing since at least the 7th century BC. The natural spring water feeds a network of canals and lakes that give Jinan its distinctive character: willow trees trailing over clear spring-fed pools, ancient stone bridges, and the unexpected serenity of a provincial capital that most foreign visitors bypass entirely.",
    image: "https://images.unsplash.com/photo-1576788369575-6c610b7a33fb?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1576788369575-6c610b7a33fb?w=1200&h=600&fit=crop&auto=format",
    highlights: ["72 named artesian springs", "Baotu Spring — flowing since 700 BC", "Daming Lake classical gardens", "Shandong provincial capital", "Gateway to Mount Tai and Qufu"],
    attractions: [
      {
        name: "Baotu Spring Park (趵突泉公园)",
        description: "The most famous spring in China and Jinan's defining landmark — three bubbling jets of water rising from a pool that has been flowing continuously for at least 2,700 years. The surrounding park contains 30+ more springs, classical pavilions, and the Fan Zhongyan Memorial. Beautiful in every season, exceptional in winter when steam rises from the warm water.",
        category: "Natural Landmark",
      },
      {
        name: "Daming Lake (大明湖)",
        description: "A large natural lake fed by Jinan's spring water, ringed by willow trees, classical pavilions, and lotus gardens. The historic district around the lake's north shore has been meticulously restored and includes the North Water Gate — an ancient sluice that once regulated water flow from the lake to the Grand Canal.",
        category: "Scenic Area",
      },
      {
        name: "Five Dragon Pool (五龙潭公园)",
        description: "A cluster of five large springs in a classical garden setting — less visited than Baotu but more atmospheric. The springs here are particularly active after heavy rain, and the garden has some of the finest stone bridges in the city.",
        category: "Scenic Area",
      },
      {
        name: "Thousand Buddha Mountain (千佛山)",
        description: "A hill on Jinan's southern edge with rock-carved Buddhist figures dating to the Sui dynasty (581–618 AD). The climb to the summit takes about an hour and offers panoramic views over the city's spring-fed plain. The cable car makes it accessible for all ages.",
        category: "Historic Site",
      },
    ],
    food: [
      {
        name: "Jinan Braised Intestines (济南九转大肠)",
        nameZh: "九转大肠",
        description: "The definitive Shandong dish, invented in Jinan — pork intestines cleaned, boiled, then braised through nine stages with soy, vinegar, sugar, and five-spice until caramelised and deeply savoury. A national classic that must be tried at its source.",
        must: true,
      },
      {
        name: "Cong Shao Haimian (葱烧海参)",
        nameZh: "葱烧海参",
        description: "Shandong's most prestigious dish — sea cucumber braised with Shandong spring onions in a rich, dark sauce. A luxury preparation that showcases the central role of the spring onion in Shandong cooking. Available at upscale Lu cuisine restaurants.",
        must: false,
      },
      {
        name: "Sugar-Crisp Lotus Root (糖醋藕)",
        nameZh: "糖醋藕",
        description: "Daming Lake lotus roots cooked in a sweet-and-sour glaze — a seasonal Jinan speciality available in summer and autumn when the lake's lotus harvest is at its peak. Light, crunchy, and delicate.",
        must: true,
      },
      {
        name: "Jinan Baozi (济南包子)",
        nameZh: "济南包子",
        description: "Steamed buns filled with pork and spring onion, characterised by the use of Jinan spring water in the dough — producing an unusually soft, pillowy texture. Available at breakfast stalls throughout the city from 6am.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) and Autumn (September–November) are ideal. The springs are most spectacular after summer rains (August–September) when flow rates reach their peak. Winter is beautiful — steam rising from the warm springs in cold air creates an ethereal atmosphere.",
    transportation: [
      {
        mode: "🚄 High-speed rail hub",
        details: "Jinan West is one of the busiest HSR hubs in eastern China: Beijing South ~1.5 hours, Shanghai ~3 hours, Qingdao ~1.5 hours, Tai'an ~30 minutes. An excellent base for exploring all of Shandong.",
      },
      {
        mode: "🚇 Jinan Metro",
        details: "Lines 1–4 cover the main tourist areas. Baotu Spring is served by Line 3 (Wuying Shan Station). Daming Lake is a 10-minute walk from the old city metro stops.",
      },
    ],
    accommodation: "The old city area near Baotu Spring and Daming Lake is the most atmospheric location (¥250–700/night). Mid-range business hotels cluster near Jinan West Station (¥200–450/night). Jinan is an excellent overnight base for day trips to Mount Tai (30 min) and Qufu (45 min).",
    travelTips: [
      "Baotu Spring is best visited at opening time (6:30am) — in the early morning the park is filled with locals doing tai chi beside the bubbling water, creating the most authentic Jinan experience.",
      "The spring flow rate varies significantly with rainfall. The springs are most impressive from August to October after summer rains; in severe drought years some springs may slow to a trickle.",
      "Jinan's spring water has a distinctive sweet mineral taste — buy a bottle from a local shop rather than standard commercial brands to notice the difference.",
      "Use Jinan as a base for Shandong's highlights: Mount Tai (30 min), Qufu (45 min), and Qingdao (1.5 hours) are all within HSR day-trip range.",
    ],
    dayTrips: [
      {
        name: "Mount Tai",
        nameZh: "泰山",
        distance: "~30min south by high-speed rail",
        description: "China's most sacred mountain, with 6,293 ancient stone steps leading to a summit where emperors announced their heavenly mandate for 3,000 years.",
        whyGo: "The most important day trip from Jinan — China's holiest mountain is practically next door.",
      },
      {
        name: "Qufu",
        nameZh: "曲阜",
        distance: "~45min south by high-speed rail",
        description: "The birthplace of Confucius — a UNESCO-listed complex of temple, mansion, and cemetery spanning 2,500 years of Chinese civilisation.",
        whyGo: "The spiritual counterpart to Mount Tai, and a natural complement to any visit to Shandong.",
      },
    ],
  },

  // ── HENAN ────────────────────────────────────────────────────────────────────

  luoyang: {
    id: "luoyang",
    nameZh: "洛阳",
    nameEn: "Luoyang",
    province: "henan",
    provinceZh: "河南省",
    tagline: "Thirteen dynasties, one city",
    description:
      "For most of Chinese history, Luoyang was the capital of the world. Thirteen dynasties ruled from here over 1,500 years, including the Han, Wei, Sui, and Tang. The legacy is extraordinary: the Longmen Grottoes are one of China's three great Buddhist cave temple complexes, the White Horse Temple is the oldest Buddhist temple in China, and the city's peony culture — cultivated for the imperial court since the Tang dynasty — produces the most spectacular flower festival in the country every April.",
    image: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Longmen Grottoes (UNESCO)", "China's oldest Buddhist temple", "Peony Festival capital", "13 dynasty capital city", "Luoyang water banquet cuisine"],
    attractions: [
      {
        name: "Longmen Grottoes (龙门石窟)",
        description: "Over 100,000 Buddhist figures carved into limestone cliffs along the Yi River — begun in 493 AD and continued for 400 years across 2,345 caves. The centrepiece is the 17m Vairocana Buddha in the Fengxian Temple, commissioned by Empress Wu Zetian and considered the masterpiece of Tang dynasty sculpture. The evening light on the river-facing cliff is exceptional. Book tickets online.",
        category: "UNESCO Heritage",
      },
      {
        name: "White Horse Temple (白马寺)",
        description: "Founded in 68 AD, the White Horse Temple is the oldest Buddhist temple in China — built to house the two Indian monks who arrived on white horses carrying the first Buddhist sutras to reach China. The mix of Han dynasty architecture and modern international Buddhist halls (Indian, Burmese, Thai pavilions added later) makes it historically fascinating.",
        category: "Temple",
      },
      {
        name: "Luoyang Museum (洛阳博物馆)",
        description: "One of the finest provincial museums in China — 400,000 artefacts spanning the full 5,000-year span of Luoyang's history, including extraordinary Tang dynasty tri-colour glazed pottery (唐三彩), jade burial suits, and bronze ceremonial vessels. The Tang and Han dynasty galleries alone justify the visit.",
        category: "Museum",
      },
      {
        name: "Old Town & Lijingmen (洛阳老城 & 丽景门)",
        description: "The Song dynasty-era old town around Zhongzhou Middle Road preserves the street grid and some architecture of medieval Luoyang. The Lijingmen gate complex (reconstructed) marks the western entrance to the historic core. The antique market and night food street in the old town are excellent.",
        category: "Historic District",
      },
      {
        name: "National Peony Garden (国家牡丹园)",
        description: "Home to over 1,000 cultivars of peony covering 70 hectares — the finest peony garden in China and the centrepiece of the Luoyang Peony Festival (mid-April to early May). Outside festival season the garden is open year-round; the trees are particularly beautiful in late summer.",
        category: "Garden",
      },
    ],
    food: [
      {
        name: "Luoyang Water Banquet (洛阳水席)",
        nameZh: "洛阳水席",
        description: "China's oldest surviving banquet format — 24 dishes served in a precise sequence, with a soup or liquid component in every dish. Dating from the Tang dynasty and associated with Empress Wu Zetian, it is the most historically significant meal in Luoyang. Try it at Zhenbutong Restaurant (真不同, est. 1895).",
        must: true,
      },
      {
        name: "Luoyang Toasted Bun Soup (不翻汤)",
        nameZh: "不翻汤",
        description: "A Luoyang breakfast staple for over 200 years — a thin millet pancake that is not flipped (不翻) floated in a fragrant broth with vermicelli, wood ear mushroom, and dried shrimp. Found at street stalls throughout the old town from early morning.",
        must: true,
      },
      {
        name: "Mutton Soup (羊肉汤)",
        nameZh: "洛阳羊肉汤",
        description: "Milky-white mutton bone broth, simmered for 8+ hours until the collagen creates a rich, creamy consistency. Served with sliced mutton and a flat bread for dipping. A Luoyang breakfast tradition — locals say a bowl at dawn sets you up for the whole day.",
        must: false,
      },
      {
        name: "Tang Tri-colour Candy (唐三彩糕)",
        nameZh: "唐三彩糕",
        description: "A novelty souvenir food modelled on the famous Tang dynasty tri-colour pottery glaze — layered sweet rice cakes in the three classic colours (green, amber, white). More interesting as a cultural reference than a great food, but worth trying.",
        must: false,
      },
    ],
    bestSeason: "Mid-April to early May for the Peony Festival — Luoyang transforms into a city of flowers, with peonies in bloom at every park, temple, and street corner. This is the most popular and most expensive time. Autumn (October–November) is excellent for the Longmen Grottoes without the crowds. Spring and autumn are both far better than summer.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Zhengzhou East to Luoyang Longmen: ~45 minutes. Beijing West to Luoyang Longmen: ~2.5 hours. Xi'an North to Luoyang Longmen: ~1.5 hours. The Longmen HSR station is 7km from the grottoes — taxi ¥20.",
      },
      {
        mode: "🚌 Local buses",
        details: "Bus 81 connects the main rail station to the Longmen Grottoes. Bus 56 runs to the White Horse Temple. The old town is best explored on foot or by shared electric bike.",
      },
    ],
    accommodation: "The old town area near Lijingmen is the most atmospheric base (¥250–700/night). Mid-range hotels cluster near Luoyang Train Station (¥150–400/night). During the Peony Festival, accommodation prices triple — book 2–3 months ahead. Luoyang is a good base for day trips to the Shaolin Temple (1.5 hours).",
    travelTips: [
      "Book Longmen Grottoes tickets online at the official website (¥100). Arrive at opening (8am) — by 10am tour groups dominate the narrow cliff-side path. The south bank walk takes about 2 hours; add 1 hour for the main cave complex.",
      "Luoyang Water Banquet at a good restaurant takes 2+ hours — book in advance and do not rush it. The sequence of dishes is intentional and part of the experience.",
      "The Peony Festival (mid-April to early May) is extraordinary but accommodation prices triple and the city is at maximum capacity. Visit on a weekday if possible and book flights and hotels months ahead.",
      "The evening light on the Longmen cliff face across the Yi River (from the east bank pavilion) is the best photography opportunity — golden hour turns the limestone sculptures into something magical.",
    ],
    dayTrips: [
      {
        name: "Shaolin Temple",
        nameZh: "少林寺",
        distance: "~1.5h east by bus or car",
        description: "The birthplace of Chan (Zen) Buddhism and Chinese kung fu — a monastery complex in the Song Mountains that has trained warrior monks for 1,500 years. Live kung fu demonstrations run daily.",
        whyGo: "The most famous temple in China, and close enough for a comfortable day trip from Luoyang.",
        adminNote: "Located in Dengfeng, Zhengzhou's jurisdiction — about 80km east of Luoyang.",
      },
    ],
  },

  kaifeng: {
    id: "kaifeng",
    nameZh: "开封",
    nameEn: "Kaifeng",
    province: "henan",
    provinceZh: "河南省",
    tagline: "The Song dynasty city that never left",
    description:
      "In the 11th century, Kaifeng was the largest city on earth — the capital of the Northern Song dynasty, a metropolis of a million people with the world's first paper money, first gunpowder weapons, and first moveable-type printing press. The famous painting Along the River During the Qingming Festival depicts this city at its peak. Today Kaifeng is a quiet provincial city, but its historic core and extraordinary street food culture preserve the flavour of dynastic China more authentically than almost anywhere else.",
    image: "https://images.unsplash.com/photo-1572704728900-2f6bf04e2f57?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1572704728900-2f6bf04e2f57?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Northern Song dynasty capital", "Night market culture", "Iron Pagoda (Song dynasty)", "Millennium City theme park", "Jewish heritage site"],
    attractions: [
      {
        name: "Millennium City Cultural Park (清明上河园)",
        description: "A large-scale recreation of the Song dynasty cityscape depicted in the Qingming Festival scroll — the most ambitious historical theme park in China. Daily performances of Song-era court music, acrobatics, jousting, and market life. Best visited in the late afternoon when evening performances begin. More authentic than most Chinese theme parks.",
        category: "Cultural Park",
      },
      {
        name: "Iron Pagoda (铁塔)",
        description: "An 11th-century Song dynasty pagoda clad in brown-glazed tiles that give it the appearance of cast iron. One of the best-preserved structures from the Northern Song period, standing 54m tall with a spectacular interior staircase. The 13-storey pagoda leans slightly from centuries of soil subsidence — part of its character.",
        category: "Historic Monument",
      },
      {
        name: "Kaifeng Night Market (夜市)",
        description: "One of the greatest street food markets in China — operating every night in the old city, with hundreds of stalls selling Henan specialities alongside Song dynasty-inspired preparations. The busiest section runs along Sihou Street and Gulou Night Market. Arrive hungry at 7pm.",
        category: "Market",
      },
      {
        name: "Xiangguosi Temple (相国寺)",
        description: "A Tang dynasty Buddhist temple that was the largest in China during the Northern Song period. Rebuilt multiple times, the current structure dates to the Qing dynasty but preserves the enormous scale of the original. The octagonal glazed tile hall houses a 1,000-arm Guanyin carved from a single gingko tree.",
        category: "Temple",
      },
      {
        name: "Kaifeng Jewish Heritage Site (犹太人遗址)",
        description: "Kaifeng had a Jewish community, the Kaifeng Jews, from the Northern Song dynasty onwards — one of the world's most isolated Jewish communities, now almost entirely assimilated. The site of the original synagogue (destroyed in a flood) and a small museum document their remarkable 1,000-year presence.",
        category: "Historic Site",
      },
    ],
    food: [
      {
        name: "Steamed Stuffed Buns (灌汤包)",
        nameZh: "灌汤包",
        description: "Kaifeng's most famous food — soup-filled steamed buns served in a bamboo steamer, eaten through a straw to drink the hot soup before biting in. The best version has 18 folds in the wrapper and a skin thin enough to see the soup through. Try at the Kaifeng No. 1 Guantang Baozi shop near Gulou Square.",
        must: true,
      },
      {
        name: "Kaifeng Bucket Chicken (桶子鸡)",
        nameZh: "桶子鸡",
        description: "A Kaifeng speciality — whole chicken marinated in soy and five-spice, then aged in a crock pot that accumulates flavour over years. The skin is golden, crackling, and intensely seasoned; the meat is tender and fragrant. Sold in portions at traditional shops near the night market.",
        must: true,
      },
      {
        name: "Lamb Bao (羊肉包子)",
        nameZh: "羊肉包子",
        description: "Henan-style large steamed buns filled with minced lamb and spring onion — a hearty breakfast or lunch staple. The lamb filling is spiced with cumin, a Central Asian influence that reached Henan via the ancient Silk Road trade routes.",
        must: false,
      },
      {
        name: "Cold Noodles in Sesame Sauce (凉面)",
        nameZh: "凉面",
        description: "Kaifeng's version of cold sesame noodles — springy wheat noodles dressed with sesame paste, chilli oil, garlic, and cucumber. A summer street food staple available at nearly every night market stall.",
        must: false,
      },
    ],
    bestSeason: "Spring (April–May) for the peony season (shared with nearby Luoyang) and pleasant weather. Autumn (October–November) for clear skies and cooler temperatures ideal for the night market. Summer is hot but the evening night market culture is at its peak. Winter is cold but the city is beautifully uncrowded.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Zhengzhou",
        details: "Zhengzhou East to Kaifeng North: ~20 minutes (¥30). From Beijing: ~2.5 hours via Zhengzhou. Kaifeng North Station is in the new city — bus or taxi to the historic core (20 min, ¥20–30).",
      },
      {
        mode: "🚌 Bus from Zhengzhou",
        details: "Frequent intercity buses from Zhengzhou to Kaifeng old city bus station (~1 hour, ¥20). More convenient than the HSR for direct access to the historic area.",
      },
    ],
    accommodation: "The historic core area near Gulou Square and the night market is the most convenient and atmospheric location (¥200–500/night). Kaifeng is easily visited as a day trip from Zhengzhou (20 min) or Luoyang (1.5 hours), but staying the night allows you to experience the full night market culture properly.",
    travelTips: [
      "The night market is the main reason to stay overnight. Arrive at 7pm, work your way through the stalls, and plan to still be eating at 10pm. The atmosphere peaks around 8:30–9pm.",
      "Guantang Baozi (soup dumplings) must be eaten immediately after steaming — they cool and collapse quickly. Ask the server to demonstrate the 'straw first' eating technique.",
      "The Millennium City Park is best visited in the late afternoon (4pm entry) to catch both the daytime exhibits and the evening Song dynasty performance shows, which are the highlight.",
      "Kaifeng has a significant Muslim community with its own mosques and halal food culture — the area around Shudian Street has excellent halal lamb dishes.",
    ],
    dayTrips: [
      {
        name: "Luoyang",
        nameZh: "洛阳",
        distance: "~1.5h west by high-speed rail",
        description: "The Longmen Grottoes — 100,000 Tang dynasty Buddhist sculptures carved into riverside cliffs — are an hour and a half away. Kaifeng and Luoyang together cover 2,000 years of Chinese imperial history.",
        whyGo: "The two greatest historical cities in Henan complement each other perfectly.",
      },
    ],
  },

  dengfeng: {
    id: "dengfeng",
    nameZh: "登封",
    nameEn: "Dengfeng (Shaolin)",
    province: "henan",
    provinceZh: "河南省",
    tagline: "Where kung fu was born",
    description:
      "Dengfeng sits at the foot of Song Shan — the most central of China's Five Sacred Mountains — and is home to the Shaolin Temple, birthplace of both Chan (Zen) Buddhism and Chinese martial arts. For 1,500 years, Shaolin monks have combined Buddhist meditation with a unique system of fighting techniques that spread across East Asia and, eventually, the world. The spectacle of hundreds of students in martial arts uniforms training in the mountain mist is unlike anything else in China.",
    image: "https://images.unsplash.com/photo-1600267185393-1bdea06a2b8b?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1600267185393-1bdea06a2b8b?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Birthplace of kung fu", "Chan Buddhism origin", "Song Shan Sacred Mountain", "UNESCO World Heritage", "Live kung fu performances"],
    attractions: [
      {
        name: "Shaolin Temple (少林寺)",
        description: "Founded in 495 AD, the Shaolin Temple is the most famous Buddhist monastery in China and the origin of martial arts culture worldwide. The main complex includes the Thousand Buddha Hall with floor-worn training pits, the Pagoda Forest (the largest such collection in China), and the Dharma Cave where Bodhidharma meditated for 9 years. Live kung fu demonstrations daily at 10am and 3pm.",
        category: "UNESCO Heritage",
      },
      {
        name: "Pagoda Forest (塔林)",
        description: "Over 240 stone pagodas built between the Tang and Qing dynasties as memorials to eminent Shaolin abbots — the largest and most complete collection of Buddhist pagodas in China. Each pagoda's size and style reflects the status of the monk it commemorates. Walk through early morning for the best light and atmosphere.",
        category: "UNESCO Heritage",
      },
      {
        name: "Song Shan Scenic Area (嵩山风景区)",
        description: "The mountain ridge above the Shaolin Temple has excellent hiking trails through ancient forest to the 1,512m summit. The Zhongyue Temple (中岳庙) at the mountain's base is the largest Taoist temple complex in Henan. The cable car makes the summit accessible.",
        category: "Nature & Hiking",
      },
      {
        name: "Dengfeng Observatory (登封观星台)",
        description: "Built in 1276 AD, this is the oldest surviving astronomical observatory in China — used to measure solar time with extraordinary accuracy. A UNESCO World Heritage site, it demonstrates the sophistication of Chinese scientific knowledge in the Yuan dynasty.",
        category: "UNESCO Heritage",
      },
      {
        name: "Kung Fu Schools",
        description: "Dozens of private martial arts academies cluster in the valley below Shaolin — training facilities for both domestic students and international martial arts enthusiasts. Several schools accept short-term international students for 1-week to 3-month programmes. The sight of thousands of students training in unison on open-air fields is remarkable.",
        category: "Cultural",
      },
    ],
    food: [
      {
        name: "Shaolin Vegetarian Feast (少林素斋)",
        nameZh: "少林素斋",
        description: "Buddhist vegetarian cooking prepared by monastery cooks — simple, fresh, and deeply satisfying. Mock meat preparations using wheat gluten and tofu. Available at the monastery refectory or the specialist vegetarian restaurants near the temple gate.",
        must: true,
      },
      {
        name: "Song Shan Wild Mushroom (嵩山山蘑)",
        nameZh: "嵩山山蘑",
        description: "Wild mushrooms foraged from Song Shan's forests — stir-fried simply with garlic and ginger. The earthy, intense flavour of mountain mushrooms in season (September–October) is far superior to farmed varieties.",
        must: false,
      },
      {
        name: "Henan Braised Noodles (烩面)",
        nameZh: "烩面",
        description: "Henan's most beloved noodle dish — thick, hand-pulled wheat noodles in a rich mutton or lamb broth with wood ear mushroom, tofu skin, and coriander. Available at noodle shops throughout Dengfeng town.",
        must: true,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (September–November) for pleasant hiking weather and the best visibility on Song Shan. Summer is green but hot; winter sees occasional snow on the mountain which is dramatic but makes hiking difficult. The Shaolin Temple itself is worth visiting year-round.",
    transportation: [
      {
        mode: "🚌 Bus from Zhengzhou",
        details: "Zhengzhou Keyun Station to Dengfeng: ~1.5 hours by direct bus (¥25–35). From Luoyang: ~1.5 hours. No direct high-speed rail to Dengfeng — bus is the standard approach.",
      },
      {
        mode: "🚕 Taxi from Zhengzhou",
        details: "A taxi or hired car from Zhengzhou to Dengfeng takes ~1 hour and costs ¥150–250 one-way — more practical for groups or those with limited time. Round-trip car hire for the day (¥300–400) is a popular option.",
      },
    ],
    accommodation: "Most visitors come as a day trip from Zhengzhou or Luoyang. If staying, hotels cluster near the Shaolin Scenic Area entrance (¥150–450/night). Staying the night allows you to visit the temple at opening time (7:30am) before day-trippers arrive — the early morning atmosphere with monks and students training is exceptional.",
    travelTips: [
      "Buy the Shaolin Scenic Area ticket online (¥100) — it includes the main temple complex, Pagoda Forest, and Dharma Cave. The kung fu performance (¥120 extra) is worth adding — the 1-hour show runs twice daily and features genuine Shaolin monks.",
      "The martial arts schools outside the main scenic area offer a more authentic view of Shaolin training culture than the polished performances inside — watch students training in the open fields at dawn (6–8am).",
      "Song Shan hiking: the cable car to Junji Peak (¥75) is useful for the upper section. The full Shaolin → Zhongyue Temple route takes 5–6 hours and requires good footwear.",
      "Dengfeng is easily combined with Luoyang (Longmen Grottoes) in a two-day Henan itinerary — Dengfeng by day trip from Luoyang or Zhengzhou.",
    ],
    dayTrips: [
      {
        name: "Luoyang & Longmen Grottoes",
        nameZh: "洛阳龙门石窟",
        distance: "~1.5h west by bus",
        description: "100,000 Tang dynasty Buddhist carvings in riverside cliffs — a perfect complement to the Buddhist heritage of Shaolin on the same day trip.",
        whyGo: "Dengfeng and Luoyang together cover 1,500 years of Buddhist heritage in Henan in a single trip.",
      },
    ],
  },

  // ── ANHUI ────────────────────────────────────────────────────────────────────

  huangshan: {
    id: "huangshan",
    nameZh: "黄山",
    nameEn: "Huangshan (Yellow Mountain)",
    province: "anhui",
    provinceZh: "安徽省",
    tagline: "The mountain that taught China to paint",
    description:
      "Huangshan is the mountain that every Chinese ink painting is drawn from — twisted granite peaks emerging from white sea-clouds, ancient pine trees clinging to sheer cliffs, and hot springs at the base. It inspired an entire school of Chinese painting, and standing on the summit among the cloud-wrapped peaks, you see exactly why. The UNESCO listing is almost incidental: Huangshan is simply one of the most beautiful places on Earth.",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Sea of clouds above the peaks", "Ancient twisted pine trees", "UNESCO World Heritage", "Ink painting inspiration", "Hot springs at the base"],
    attractions: [
      {
        name: "Sea of Clouds (云海)",
        description: "Huangshan's most celebrated spectacle — a white sea of cloud filling the valleys between the granite peaks, with the summits floating above like islands. Occurs most frequently in spring and after rain. The West Sea Grand Canyon viewpoint and Bright Summit (光明顶) offer the most expansive views.",
        category: "Natural Spectacle",
      },
      {
        name: "Ying Ke Pine (迎客松)",
        description: "The most photographed tree in China — a 1,300-year-old Huangshan pine growing horizontally from a sheer cliff face, with one branch extended as if welcoming visitors. The tree has its own dedicated guardian (changed annually) and is reproduced on everything from the Anhui province emblem to hotel wallpaper.",
        category: "Natural Landmark",
      },
      {
        name: "West Sea Grand Canyon (西海大峡谷)",
        description: "A spectacular gorge on the western face of the mountain — a 6km loop trail descending into the canyon via a series of wooden boardwalks, suspended walkways, and stone steps carved from sheer cliffs. The canyon bottom reaches into a cloud layer separate from the summit, creating an eerie, enclosed world.",
        category: "Hiking Trail",
      },
      {
        name: "Bright Summit (光明顶)",
        description: "The second-highest peak at 1,841m — the best panoramic viewpoint on the mountain, with views in all four directions. Reached by cable car (from Yungu Station) or by the longer Tiandu Peak trail. A meteorological station has operated here since 1955.",
        category: "Summit",
      },
      {
        name: "Huangshan Hot Springs (温泉)",
        description: "Natural mineral springs at the mountain's base (650m altitude) — an excellent way to relax sore legs after the descent. The Peach Blossom Spring hotel complex has the most developed facilities. Water temperature is 42°C year-round.",
        category: "Relaxation",
      },
    ],
    food: [
      {
        name: "Huizhou Stinky Mandarin Fish (臭鳜鱼)",
        nameZh: "臭鳜鱼",
        description: "The signature dish of Huizhou cuisine — mandarin fish fermented for several days until it develops a distinctive pungent smell but becomes extraordinarily tender and flavourful when braised. Confronting aroma, unforgettable taste. Available at traditional Huizhou restaurants in Tunxi (the gateway city) and on the mountain.",
        must: true,
      },
      {
        name: "Mao Tofu (毛豆腐)",
        nameZh: "毛豆腐",
        description: "Tofu coated in a white mould (similar to brie), then pan-fried until golden and served with chilli sauce. A Huizhou village food that has become the region's most distinctive snack. Available at roadside stalls throughout the Huangshan area.",
        must: true,
      },
      {
        name: "Bamboo Shoot Braised Pork (笋干烧肉)",
        nameZh: "笋干烧肉",
        description: "Slow-braised pork belly with dried bamboo shoots in soy and rice wine — a Huizhou household staple. The dried bamboo absorbs the rich pork fat over the long cooking time, creating a complexity that fresh bamboo cannot match.",
        must: false,
      },
      {
        name: "Yellow Mountain Honey Tea (黄山蜜茶)",
        nameZh: "黄山蜜茶",
        description: "Keemun black tea from the Huangshan area, brewed strong and sweetened with local wildflower honey. The Keemun is one of China's most internationally known teas — it forms the base of many English breakfast tea blends. Buy loose-leaf directly from mountain tea shops.",
        must: false,
      },
    ],
    bestSeason: "March–April for blooming azaleas and frequent sea-of-clouds; July–August for lush greenery (but more rain and crowds); November–December for snow-capped peaks and rime ice — spectacular but requires warm gear. Spring and autumn are both excellent. Avoid the May Golden Week and October National Holiday when the mountain is at maximum capacity.",
    transportation: [
      {
        mode: "🚄 High-speed rail to Huangshan North",
        details: "Shanghai Hongqiao to Huangshan North: ~2 hours. Nanjing South to Huangshan North: ~2.5 hours. Hangzhou to Huangshan North: ~1.5 hours. Huangshan North Station is in Tunxi — the gateway city 60km from the mountain base.",
      },
      {
        mode: "🚌 Shuttle from Tunxi",
        details: "Buses run from Tunxi (Huangshan City) to the mountain scenic area entrance in ~1 hour. Taxis cost ¥80–100. The Tangkou village at the mountain base has the main cable car stations.",
      },
      {
        mode: "🚡 Mountain cable cars",
        details: "Three cable cars: Yungu (east route, ¥90 up/¥80 down), Yuping (south route, ¥90/¥80), and Taiping (north route). Buy cable car tickets online — peak season queues can be 1–2 hours without advance purchase.",
      },
    ],
    accommodation: "Summit hotels are essential for seeing sea-of-clouds at dawn — Beihai Hotel and Paiyun Lou Hotel (both ~¥600–1,500/night) need to be booked 1–2 months ahead for weekends and peak season. Base village (Tangkou) has budget guesthouses (¥150–400/night). Tunxi city (60km) has the widest range of accommodation (¥200–700/night) and the Huizhou old street.",
    travelTips: [
      "For sea-of-clouds, stay on the summit for two nights — this doubles your chances of catching the phenomenon at dawn. The cloud sea is most frequent in spring after rain and in winter after snowfall.",
      "The cable car queues at peak times (May, October) can exceed 2 hours — buy tickets on the official app (黄山风景区) in advance. The morning Yungu cable car is usually the least crowded.",
      "Porters carry supplies to summit hotels on shoulder poles along trails not accessible to vehicles. Pay them respect — the weight and altitude make this extraordinary labour.",
      "Tunxi Old Street (屯溪老街) in Huangshan City is the best place to buy Huizhou crafts, Keemun tea, and smoked meats at reasonable prices. Spend the afternoon there before or after the mountain.",
    ],
    dayTrips: [
      {
        name: "Hongcun Village",
        nameZh: "宏村",
        distance: "~1h northwest by bus or taxi",
        description: "A UNESCO-listed Ming and Qing village with whitewashed walls, grey tile roofs, and a moon-shaped pond that perfectly reflects the surrounding mountains. The most photogenic village in China.",
        whyGo: "The quintessential Huizhou village, and the natural complement to any Huangshan visit.",
        adminNote: "Located in Yi County, Huangshan City — easy to combine with a Huangshan trip in a 2-day itinerary.",
      },
    ],
  },

  hongcun: {
    id: "hongcun",
    nameZh: "宏村",
    nameEn: "Hongcun Village",
    province: "anhui",
    provinceZh: "安徽省",
    tagline: "The ink-wash painting you can walk inside",
    description:
      "Hongcun is one of those rare places that actually looks exactly like its photographs. A UNESCO-listed village built entirely in Huizhou style — whitewashed walls, grey tile roofs, carved wooden screens, and a perfect half-moon pond at its centre that mirrors the surrounding mountains. Built in the 12th century by the Wang family and designed according to a bull-shaped feng shui plan, with canals as the 'veins' running through every courtyard. Walking through it before sunrise, when the mist is still on the water, is one of the great quiet pleasures of China.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&auto=format",
    highlights: ["UNESCO World Heritage village", "Moon Pond reflections", "Huizhou architecture", "Crouching Tiger filming location", "Ancient Huizhou canal system"],
    attractions: [
      {
        name: "South Lake & Moon Pond (南湖 & 月沼)",
        description: "The two water bodies that define Hongcun's character. The Moon Pond (half-moon shaped) is at the village centre — the classic Hongcun reflection photo is taken here at dawn. South Lake (弦月形) is outside the main gate and gives the widest-angle view of the village. Both are best before 8am.",
        category: "Scenic",
      },
      {
        name: "Chengzhi Hall (承志堂)",
        description: "The grandest surviving merchant mansion in Hongcun — built in 1855 by a wealthy salt merchant. 60 rooms, 136 pillars, and extraordinary carved wood panels depicting historical scenes and auspicious motifs. The craftsmanship represents the apex of Huizhou woodcarving.",
        category: "Historic Building",
      },
      {
        name: "Jingyi Hall & Canal System",
        description: "Hongcun's ingenious Ming dynasty water system — canals run through every household courtyard, originally carrying drinking water and providing fire prevention. The Jingyi Hall courtyard (敬义堂) shows the canal flowing directly under the living rooms.",
        category: "Historic Engineering",
      },
      {
        name: "Xidi Village (西递村)",
        description: "Hongcun's sister UNESCO village, 10km southwest — similar Huizhou architecture but more formal in character, with memorial archways (牌坊) as its distinguishing feature. Slightly less photographed than Hongcun but equally well preserved. The two villages are usually visited together.",
        category: "UNESCO Village",
      },
      {
        name: "Art Students' Corner",
        description: "Hongcun is the most painted village in China — art students from across the country set up easels around the Moon Pond and South Lake daily. Watching artists work while sitting by the water is one of the village's unexpected pleasures.",
        category: "Cultural",
      },
    ],
    food: [
      {
        name: "Stinky Mandarin Fish (臭鳜鱼)",
        nameZh: "臭鳜鱼",
        description: "The king of Huizhou cuisine — fermented mandarin fish braised in a thick, fragrant sauce with ginger and Shaoxing wine. Every guesthouse restaurant in Hongcun serves a version; quality varies enormously. Ask for a recommendation from your host.",
        must: true,
      },
      {
        name: "Mao Tofu (毛豆腐)",
        nameZh: "毛豆腐",
        description: "White-mould tofu pan-fried until golden — the most distinctive Huizhou street snack. Sold from street stalls near the village entrance at ¥5–8 per piece. The texture is like a warm, slightly tangy brie inside a crispy crust.",
        must: true,
      },
      {
        name: "Huizhou Glutinous Rice Cake (徽州粿)",
        nameZh: "徽州粿",
        description: "Dense rice cakes filled with savoury mixtures of pork, spring onion, and dried vegetables — a Huizhou village staple and popular breakfast food. Made fresh daily by guesthouse cooks.",
        must: false,
      },
      {
        name: "Stone-Pot Tofu (石锅豆腐)",
        nameZh: "石锅豆腐",
        description: "Local mountain spring water tofu cooked in a stone pot with pickled vegetables and dried mushrooms — a simple, deeply satisfying village dish. The spring water quality makes the tofu notably silky.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–April) for misty mornings and rapeseed flowers in the surrounding fields — the most atmospheric season. Autumn (October–November) for clear reflections in the pond and golden foliage. Avoid May and October Golden Week holidays when the village becomes severely crowded. Weekday mornings year-round are always better than weekends.",
    transportation: [
      {
        mode: "🚄 + 🚌 From Shanghai/Hangzhou",
        details: "High-speed rail to Huangshan North (2 hours from Shanghai, 1.5 hours from Hangzhou), then bus to Yi County (40 min, ¥10) and taxi/bus to Hongcun (20 min, ¥5–15). Total ~2.5–3 hours from Shanghai.",
      },
      {
        mode: "🚕 Taxi from Tunxi/Huangshan City",
        details: "Taxi from Tunxi (Huangshan City) to Hongcun: ~1 hour (¥80–120). A round-trip car hire for Hongcun + Xidi + Huangshan in 2–3 days is the most flexible option.",
      },
    ],
    accommodation: "Staying inside the village in a converted Huizhou courtyard guesthouse is by far the best option (¥200–600/night). Book at least 2 weeks ahead for weekends. The Moon Pond-facing rooms are the most sought-after. Staying the night allows you to have the village entirely to yourself before 7:30am, when day-trippers arrive.",
    travelTips: [
      "The village is at its most magical before 7:30am — wake before sunrise and walk to the Moon Pond. The morning light on the whitewashed walls and the stillness of the water are transformative.",
      "Village entry ticket is ¥104 (includes Xidi). Buy online. The ticket office opens at 7:30am; staying at a village guesthouse gives you free access to the paths throughout the day and evening.",
      "Xidi and Hongcun are 10km apart — most visitors rent an electric scooter or hire a taxi (¥30 round trip) to see both in one day. Xidi is quieter and has the finest memorial archways.",
      "Art supply shops near the village entrance sell good-quality sketch paper and watercolours — consider sketching or watercolouring the pond scene as a hands-on way to engage with the village's artistic tradition.",
    ],
    dayTrips: [
      {
        name: "Huangshan (Yellow Mountain)",
        nameZh: "黄山",
        distance: "~1h southeast by bus or taxi",
        description: "The UNESCO mountain that inspired a thousand Chinese paintings — twisted peaks, sea-of-clouds, and ancient pine trees clinging to sheer cliffs.",
        whyGo: "Hongcun and Huangshan are the natural two-day pairing in Anhui — village culture one day, mountain scenery the next.",
      },
    ],
  },

  hefei: {
    id: "hefei",
    nameZh: "合肥",
    nameEn: "Hefei",
    province: "anhui",
    provinceZh: "安徽省",
    tagline: "China's science city with an ancient heart",
    description:
      "Hefei is one of China's fastest-growing cities and a centre of quantum computing, AI research, and advanced manufacturing — but it also guards the tomb of Cao Cao's general Zhang Liao, preserves one of China's finest Li Hongzhang ancestral halls, and hosts Bao Gong Memorial Garden honouring China's most famous judge. The city's lakefront Chao Lake (one of China's five great freshwater lakes) and the surrounding Anhui countryside make it a useful base for the province.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Bao Gong — China's most famous judge", "Li Hongzhang ancestral hall", "Chao Lake (one of China's five great lakes)", "Quantum technology research hub", "Gateway to Huangshan and Hongcun"],
    attractions: [
      {
        name: "Bao Gong Memorial Garden (包公园)",
        description: "A large lakeside memorial complex honouring Bao Zheng (999–1062 AD) — the Northern Song official celebrated throughout Chinese culture as the paragon of honest, impartial judgement. His tomb, reconstructed memorial hall, and bronze statues are set in a classical garden on Baohe Lake. One of China's most visited memorial sites.",
        category: "Memorial",
      },
      {
        name: "Li Hongzhang Residence (李鸿章故居)",
        description: "The preserved residence of Li Hongzhang (1823–1901), the most powerful official of the late Qing dynasty and the man who modernised China's army, navy, and diplomatic corps. The complex is beautifully maintained, with exhibits documenting his complex legacy and the turbulent final decades of the Qing.",
        category: "Historic Site",
      },
      {
        name: "Anhui Provincial Museum (安徽省博物馆)",
        description: "An excellent museum with a strong collection of Huizhou woodcarving, ancient bronzes, and exhibits on Anhui's history from the Neolithic to the Republican era. The ceramics gallery includes fine examples of Song dynasty Ding ware and Yuan dynasty blue-and-white porcelain.",
        category: "Museum",
      },
      {
        name: "Xiaoyaojin Park (逍遥津公园)",
        description: "A public park built on the site of the famous Battle of Xiaoyaojin (215 AD) where Zhang Liao's 800 soldiers routed Sun Quan's 100,000-strong army — one of the most celebrated victories in Chinese military history. The park preserves memorial halls and bronze statues amid a pleasant lakeside setting.",
        category: "Historic Park",
      },
    ],
    food: [
      {
        name: "Hefei Li Hongzhang Hodgepodge (李鸿章大杂烩)",
        nameZh: "李鸿章大杂烩",
        description: "A dish of legendary origin — allegedly created when Li Hongzhang hosted American guests and the chef, running low on ingredients, combined the evening's leftovers into a rich, complex stew. Now a Hefei signature dish: chicken, sea cucumber, ham, bamboo shoots, and bean curd skin in a clear broth.",
        must: true,
      },
      {
        name: "Hefei Smoked Dried Tofu (庐州烤鸭)",
        nameZh: "庐州烤鸭",
        description: "Luzhou (Hefei's old name) roast duck — the local alternative to Peking duck, with a crispier skin and a marinade that uses Anhui rice wine and local five-spice. Sold whole or by portion at specialist shops throughout the city.",
        must: false,
      },
      {
        name: "Anhui Braised Noodles (安徽板面)",
        nameZh: "安徽板面",
        description: "Hand-pulled flat noodles in a spicy lamb or pork broth — a street food beloved across Anhui and now popular throughout China. The broth is rich with chilli, fermented bean paste, and warm spices. Available at small noodle shops throughout Hefei from early morning.",
        must: true,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (October–November). Hefei is primarily a transit and business city — most travellers pass through en route to Huangshan or Hongcun. Any season works for the city's museums and parks.",
    transportation: [
      {
        mode: "🚄 Major HSR hub",
        details: "Hefei South Station: Beijing South ~3.5 hours, Shanghai Hongqiao ~2 hours, Wuhan ~1.5 hours. Hefei is an important crossroads city — all Anhui HSR routes pass through it.",
      },
      {
        mode: "🚄 To Huangshan",
        details: "Hefei to Huangshan North: ~2 hours by high-speed rail. The most convenient HSR gateway to the Huangshan area from Beijing, central China, and the northwest.",
      },
    ],
    accommodation: "Hefei is primarily a transit city for most tourists. Mid-range business hotels near Hefei South Station (¥200–500/night) are the most practical. The Baohe District near Bao Gong Park has more atmospheric options.",
    travelTips: [
      "Hefei is best treated as a transit hub for Anhui's highlights rather than a destination in itself. Use it for the night before or after Huangshan — the HSR connection is fast and convenient.",
      "Bao Gong Memorial Garden is free to enter and excellent. The exhibit on Song dynasty judicial culture and Bao Zheng's legendary cases is well presented and surprisingly engaging.",
      "The Li Hongzhang Residence (¥35) is one of the finest examples of a high Qing official's private residence in China — worth 2 hours even for visitors without a specific interest in Qing history.",
    ],
    dayTrips: [
      {
        name: "Huangshan (Yellow Mountain)",
        nameZh: "黄山",
        distance: "~2h south by high-speed rail",
        description: "The most famous mountain in China — twisted granite peaks emerging from sea-clouds, UNESCO-listed and breathtakingly beautiful.",
        whyGo: "Hefei is the natural HSR gateway to Huangshan from northern China and the west.",
      },
      {
        name: "Hongcun Village",
        nameZh: "宏村",
        distance: "~2.5h south by HSR + bus",
        description: "The most photogenic village in China — whitewashed Huizhou courtyard houses reflected in a perfect moon-shaped pond.",
        whyGo: "The quintessential Anhui village experience, easily combined with Huangshan in a 2-day trip.",
      },
    ],
  },

  wuyuan_an: {
    id: "wuyuan_an",
    nameZh: "婺源",
    nameEn: "Wuyuan",
    province: "jiangxi",
    provinceZh: "江西省",
    tagline: "China's most beautiful countryside",
    description:
      "Wuyuan is repeatedly voted the most beautiful rural county in China — a patchwork of white Huizhou villages, ancient covered bridges, terraced fields, and rivers that flood yellow each spring when the rapeseed flowers bloom. Technically part of Jiangxi province administratively, Wuyuan is culturally and architecturally pure Huizhou — the same whitewashed walls and grey tile roofs as Hongcun and Xidi, but spread across an entire county of countryside rather than a single preserved village.",
    image: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Spring rapeseed flower season", "Ancient covered bridges", "Huizhou village clusters", "Crested ibis bird reserve", "China's most rural beauty"],
    attractions: [
      {
        name: "Jiangling Rapeseed Terraces (江岭梯田)",
        description: "The most photographed rapeseed landscape in China — thousands of terraced fields descending a hillside, exploding in golden yellow in late March and early April. The dawn light from the Jiangling viewpoint, with villages nestled in the folds of the hill, is the defining image of spring in China.",
        category: "Scenic Area",
      },
      {
        name: "Likeng Ancient Village (李坑)",
        description: "One of Wuyuan's best-preserved villages — a stream running through the centre with stone bridges, waterside pavilions, and 80+ ancient residences. The resident population still uses the traditional water system. The morning atmosphere before 8am is remarkably peaceful.",
        category: "Ancient Village",
      },
      {
        name: "Qinghua Covered Bridge (清华彩虹桥)",
        description: "A 900-year-old roofed bridge over the Zheshu River — one of the oldest and most beautiful covered bridges in China. The Song dynasty structure combines a functional river crossing with pavilions for resting travellers. The reflection in the clear river below is exceptional.",
        category: "Historic Bridge",
      },
      {
        name: "Wangkou Ancient Town (汪口古镇)",
        description: "A well-preserved Ming dynasty village that served as a major inland port on the Le'an River. The Yu Qing Tang ancestral hall has the finest example of Huizhou woodcarving in the region — every beam and bracket is carved with scenes from classical literature.",
        category: "Ancient Town",
      },
    ],
    food: [
      {
        name: "Wuyuan Bun (荷包红鲤鱼)",
        nameZh: "荷包红鲤鱼",
        description: "A unique Wuyuan speciality — a round red carp bred only in Wuyuan's mountain streams for centuries, considered a symbol of good luck. Braised or steamed whole, the flesh is sweeter and more delicate than river carp. Served at guesthouses throughout the county.",
        must: true,
      },
      {
        name: "Stinky Tofu & Mao Tofu",
        nameZh: "毛豆腐 & 臭豆腐",
        description: "Both Huizhou fermented tofu varieties are excellent in Wuyuan — the village guesthouse versions are often superior to restaurant versions, made with mountain spring water and traditional methods.",
        must: true,
      },
      {
        name: "Wild Mountain Fern (野生蕨菜)",
        nameZh: "野生蕨菜",
        description: "Stir-fried wild fiddlehead ferns foraged from Wuyuan's forested hillsides — a seasonal spring speciality with a slightly bitter, earthy flavour. Available from March to May at local restaurants.",
        must: false,
      },
    ],
    bestSeason: "Late March to early April for the rapeseed flower season — the single most spectacular natural event in Anhui. The exact peak varies by year; check local tourism reports 2 weeks before travelling. Autumn (October–November) for clear skies and village colours. Avoid the rapeseed peak on weekends — the Jiangling viewpoint becomes impossibly crowded.",
    transportation: [
      {
        mode: "🚄 + 🚌 From Huangshan",
        details: "Huangshan North to Wuyuan Station (Jiangxi border): ~30 minutes by high-speed rail. Then bus or taxi to the main villages. Wuyuan is the best addition to a Huangshan trip.",
      },
      {
        mode: "🚄 From Hangzhou/Shanghai",
        details: "Hangzhou to Wuyuan: ~2.5 hours by high-speed rail via Huangshan. The entire Huangshan–Hongcun–Wuyuan circuit is easily done in 4–5 days from Shanghai.",
      },
    ],
    accommodation: "Village guesthouses throughout the county (¥150–450/night) are the best option — staying in a converted Huizhou courtyard house rather than a hotel is the authentic Wuyuan experience. Book 2–3 weeks ahead for the rapeseed peak season. Wuyuan town has mid-range hotels (¥200–500/night) for a more conventional base.",
    travelTips: [
      "During rapeseed season, wake before 5am to reach the Jiangling viewpoint before sunrise — the first light is the most beautiful, and the overlook becomes crowded by 8am. Arrange transport with your guesthouse the night before.",
      "Wuyuan is best explored by hired car (¥300–500/day) rather than public buses — the villages are spread across the county and bus connections between them are infrequent.",
      "The rapeseed peak varies by 1–2 weeks each year depending on temperature. Follow the Wuyuan Tourism official WeChat account for real-time bloom updates.",
      "Administratively, Wuyuan belongs to Jiangxi Province — but culturally and architecturally it is pure Huizhou (Anhui). This causes no practical inconvenience for travellers.",
    ],
    dayTrips: [
      {
        name: "Huangshan (Yellow Mountain)",
        nameZh: "黄山",
        distance: "~30min north by high-speed rail",
        description: "The most famous mountain in China is just 30 minutes away. The Huangshan–Hongcun–Wuyuan circuit is the classic Anhui itinerary.",
        whyGo: "Wuyuan and Huangshan are the perfect pairing — countryside beauty and mountain grandeur in the same trip.",
      },
    ],
  },

  // ── HUBEI ─────────────────────────────────────────────────────────────────────

  wuhan: {
    id: "wuhan",
    nameZh: "武汉",
    nameEn: "Wuhan",
    province: "hubei",
    provinceZh: "湖北省",
    tagline: "Where the great rivers cross",
    description:
      "Wuhan is the great underrated city of China — a metropolis of 12 million at the confluence of the Yangtze and Han rivers, with a street food culture that rivals any city in the country, cherry blossoms in spring that draw visitors from across Asia, and a history that includes the revolution that ended 2,000 years of imperial rule. Hot dry noodles for breakfast, Yellow Crane Tower at sunset, and a night market that runs until 3am: Wuhan rewards the traveller who arrives without expectations.",
    image: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Yellow Crane Tower", "Wuchang Uprising 1911", "Cherry blossom capital", "Hot dry noodles", "Yangtze River crossing"],
    attractions: [
      {
        name: "Yellow Crane Tower (黄鹤楼)",
        description: "The most celebrated tower in China — rebuilt repeatedly over 1,700 years, the current Tang-dynasty-style structure stands on Snake Hill above the Yangtze. The view from the top deck takes in the full width of the river, the Wuhan bridges, and the skyline of three cities merging. Immortalised in a Tang dynasty poem by Cui Hao that has been memorised by every Chinese school child for 1,300 years.",
        category: "Historic Landmark",
      },
      {
        name: "Wuhan University Cherry Blossoms (武汉大学樱花)",
        description: "The most famous cherry blossom site in China outside Japan — Wuhan University's campus has 1,000+ cherry trees planted by Japanese forces during WWII occupation, now creating one of the most beautiful spring spectacles in Asia. The two-week peak (usually mid-March) draws 500,000 visitors. Book campus entry tickets weeks in advance.",
        category: "Seasonal Spectacle",
      },
      {
        name: "Hubei Provincial Museum (湖北省博物馆)",
        description: "One of China's ten best provincial museums — home to the extraordinary Marquis Yi of Zeng tomb collection (433 BC): a 65-piece bronze bell set (编钟) that is the most sophisticated musical instrument in the ancient world, plus lacquerware, bronze vessels, and jade of exceptional quality. The bell concert performance daily at 11am is essential.",
        category: "Museum",
      },
      {
        name: "Wuchang Uprising Site (辛亥革命武昌起义纪念馆)",
        description: "The headquarters building of the Hubei Military Government — the site where the 1911 Wuchang Uprising began the revolution that ended the Qing dynasty and 2,000 years of imperial rule. The Red Building (红楼) is beautifully preserved as a museum documenting the most significant political event of modern Chinese history.",
        category: "Historic Site",
      },
      {
        name: "East Lake (东湖)",
        description: "China's largest urban lake — twice the size of Hangzhou's West Lake — with 100km of shoreline, cycling paths, and classical Chinese gardens. The Moshan Botanical Garden on the lake's south shore has extraordinary seasonal displays: cherry blossoms in spring, lotus in summer, chrysanthemums in autumn.",
        category: "Scenic Area",
      },
    ],
    food: [
      {
        name: "Hot Dry Noodles (热干面)",
        nameZh: "热干面",
        description: "Wuhan's defining dish — alkaline wheat noodles blanched, drained, and dressed with sesame paste, sesame oil, soy, vinegar, and pickled radish. Eaten standing at a street stall at 7am. The noodles are chewy, the sesame paste rich and nutty, and the whole thing is consumed in under three minutes. Nothing else tastes like it.",
        must: true,
      },
      {
        name: "Duck Neck (鸭脖子)",
        nameZh: "鸭脖子",
        description: "Wuhan-style spiced duck neck — braised in a complex mix of Sichuan pepper, star anise, chilli, and over a dozen other spices until fall-off-the-bone tender. A night market staple eaten with cold beer. Zhou Hei Ya is the commercial brand; local shops near Jianghan Road are better.",
        must: true,
      },
      {
        name: "Four-Delicacy Soup Dumplings (四季美汤包)",
        nameZh: "四季美汤包",
        description: "Wuhan's version of soup dumplings — slightly larger than Shanghai's xiaolongbao, with a fuller, more gelatinous broth inside and a thicker skin. The 100-year-old Four Seasons Beauty shop near Zhongshan Avenue is the classic address.",
        must: false,
      },
      {
        name: "Bean Skin (豆皮)",
        nameZh: "豆皮",
        description: "A Wuhan breakfast invention — a crispy mung bean and egg crepe filled with glutinous rice, diced pork, and dried mushrooms, then pan-fried until golden. Heavy, satisfying, and uniquely Wuhan. The Lao Tongcheng restaurant near the old city is considered the benchmark.",
        must: true,
      },
    ],
    bestSeason: "Spring (March–April) for cherry blossoms — the single best reason to visit Wuhan. Autumn (October–November) for comfortable temperatures and vibrant East Lake colours. Summer is notoriously hot and humid (Wuhan is one of China's 'three furnaces'). Winter is cold but the city functions year-round.",
    transportation: [
      {
        mode: "🚄 Major HSR hub",
        details: "Wuhan Station: Beijing West ~4 hours, Shanghai Hongqiao ~5 hours, Guangzhou South ~3.5 hours, Chengdu ~4 hours, Xi'an ~3 hours. One of China's most connected HSR nodes — nearly everywhere is reachable the same day.",
      },
      {
        mode: "🚇 Wuhan Metro",
        details: "12 metro lines. Yellow Crane Tower: Line 4 (Wuchang Station). East Lake: Lines 8/11. Hubei Museum: Line 2 (Donghu Road). Wuhan University: Line 8 (Wuhan University Station). Metro covers the three urban areas (Wuchang, Hankou, Hanyang) very effectively.",
      },
      {
        mode: "⛴️ Yangtze Ferry",
        details: "Public ferries cross the Yangtze between Wuchang and Hankou (¥2). The crossing takes 15 minutes and provides the best view of the Yellow Crane Tower from the water.",
      },
    ],
    accommodation: "Hankou (the north bank) has the widest hotel range and the most active nightlife (¥200–800/night). Wuchang (south bank) is closer to the Yellow Crane Tower, Hubei Museum, and Wuhan University (¥250–700/night). The Jianghan Road pedestrian area in Hankou is the best base for first-time visitors.",
    travelTips: [
      "Cherry blossom at Wuhan University requires advance tickets purchased on the university's WeChat booking system — the campus limits daily visitors. The gate opens at 7:30am and the light is best before 9am.",
      "Eat hot dry noodles at a street stall, not at a sit-down restaurant. The ritual is to stand at the counter, dress the noodles yourself with the provided condiments, and eat quickly. Most stalls are open 6–10am only.",
      "The Hubei Museum bell concert (Marquis Yi's bronze bells) runs daily at 11am and 3pm — arrive 20 minutes early. The bells produce a complete chromatic scale and were used to play Western baroque music when first tested by musicologists.",
      "Wuhan's three towns (Wuchang, Hankou, Hanyang) each have distinct characters — Hankou for colonial history and food, Wuchang for universities and culture, Hanyang for industry and the ancient Guqin Tai site.",
    ],
    dayTrips: [
      {
        name: "Wudang Mountain",
        nameZh: "武当山",
        distance: "~2.5h west by high-speed rail",
        description: "The sacred Taoist mountain where Tai Chi was born — ancient cliff-face temples, misty forest trails, and Taoist martial arts schools in an extraordinary mountain setting.",
        whyGo: "The most spectacular Taoist mountain in China, and an easy day trip from Wuhan.",
      },
      {
        name: "Three Gorges (Yichang)",
        nameZh: "三峡（宜昌）",
        distance: "~1.5h west by high-speed rail",
        description: "The starting point for Three Gorges cruises and the gateway to the Yangtze's most dramatic scenery — plus the world's largest hydroelectric dam.",
        whyGo: "The Three Gorges remain spectacular even after the dam raised water levels — a must for any Yangtze journey.",
      },
    ],
  },

  wudangshan: {
    id: "wudangshan",
    nameZh: "武当山",
    nameEn: "Wudang Mountain",
    province: "hubei",
    provinceZh: "湖北省",
    tagline: "Where Taoism meets the clouds",
    description:
      "Wudang Mountain is the holiest site in Chinese Taoism and the birthplace of Tai Chi — a complex of ancient cliff-face temples, misty forested peaks, and Taoist martial arts schools spread across 70km of mountain terrain. Built primarily during the Ming dynasty under the patronage of the Yongle Emperor (the same ruler who built the Forbidden City), the 72 peaks and 36 cliff-face temples form a UNESCO World Heritage landscape unlike anywhere else in China.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&h=600&fit=crop&auto=format",
    highlights: ["UNESCO Taoist temple complex", "Birthplace of Tai Chi", "Golden Summit cliffside palace", "Ming dynasty architecture in mist", "Taoist martial arts schools"],
    attractions: [
      {
        name: "Golden Summit (金顶)",
        description: "The 1,612m summit crowned by the Golden Hall — a bronze temple gilded entirely in gold, built in 1416 by the Yongle Emperor. The hall stands on a granite cliff with 360-degree views over mist-filled valleys. The engineering feat of constructing it at this altitude in the 15th century is staggering. Best seen at dawn when cloud layers form below the peak.",
        category: "UNESCO Heritage",
      },
      {
        name: "Purple Cloud Temple (紫霄宫)",
        description: "The best-preserved of Wudang's main temple complexes — a sequence of halls ascending the mountain slope, built in 1413 and still used by resident Taoist monks. The incense smoke, chanting, and mountain mist combine into an atmosphere of genuine spiritual weight. Morning prayers (5–7am) are open to visitors.",
        category: "Temple",
      },
      {
        name: "South Cliff Palace (南岩宫)",
        description: "One of Wudang's most dramatic sites — temple buildings built directly into a sheer cliff face, accessible via a narrow path carved from the rock. The Dragon Head Rock (龙头香) is a stone incense burner projecting 2.9m from the cliff edge, where pilgrims once balanced to offer incense.",
        category: "Temple",
      },
      {
        name: "Taoist Martial Arts Demonstration",
        description: "Several schools on the mountain offer daily demonstrations of Wudang-style Tai Chi and sword forms — more meditative and fluid than Shaolin kung fu, emphasising internal energy (qi) over external power. The Wudang Kung Fu Academy near the mountain entrance offers morning and evening classes for visitors.",
        category: "Cultural",
      },
      {
        name: "Yuzhen Palace (玉虚宫)",
        description: "The largest temple complex at the mountain's base — partially ruined but evocative, with enormous courtyard walls and ancient cypress trees. The foundation stones give a sense of the original vast scale that made Wudang the foremost Taoist sacred site in Ming dynasty China.",
        category: "Historic Ruins",
      },
    ],
    food: [
      {
        name: "Wudang Vegetarian Mountain Cuisine (武当素斋)",
        nameZh: "武当素斋",
        description: "Taoist vegetarian cooking using only mountain-foraged ingredients — wild mushrooms, mountain ferns, bamboo shoots, and tofu prepared with minimal processing to honour the Taoist principle of natural simplicity. Available at monastery guesthouses and restaurants near the mountain temples.",
        must: true,
      },
      {
        name: "Danjiangkou Fish (丹江口鱼)",
        nameZh: "丹江口鱼",
        description: "Fresh fish from Danjiangkou Reservoir — the clear water of the reservoir (now part of the South-North Water Transfer Project) produces exceptionally clean-tasting fish. Braised silver carp and pan-fried perch are the local specialities at restaurants in Wudang town.",
        must: true,
      },
      {
        name: "Wild Mountain Herbs Tea (武当道茶)",
        nameZh: "武当道茶",
        description: "A blend of herbs foraged from Wudang's slopes — chrysanthemum, wolfberry, and various Taoist medicinal plants — brewed into a fragrant restorative tea. Served at every temple teahouse and sold in packets as a souvenir.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) for wildflowers and misty cloud-sea views. Autumn (October–November) for crystal clear summit panoramas. Winter brings snow on the temple roofs — dramatically beautiful but cable cars may suspend. Summer is the most crowded season. The morning cloud sea is most frequent in spring and early summer after overnight rain.",
    transportation: [
      {
        mode: "🚄 High-speed rail to Wudangshan Station",
        details: "Wuhan to Wudangshan: ~2.5 hours. Xi'an to Wudangshan: ~2 hours. The high-speed station is at the mountain base — taxis and shuttle buses run to the scenic area entrance (15 min, ¥15–30).",
      },
      {
        mode: "🚡 Mountain cable cars",
        details: "Two cable cars serve the upper mountain: Qiongtai cable car (mid-mountain, ¥65) and Tianmen cable car to the Golden Summit area (¥65). The full hike from base to summit takes 5–6 hours each way.",
      },
    ],
    accommodation: "Wudang town at the mountain base has a range of hotels (¥150–500/night). For the summit sunrise, stay at the mid-mountain Nanyan Hotel or Taizi Po guesthouse (¥300–700/night) — book weeks ahead for peak season. Some monastery guesthouses offer simple accommodation with morning prayers included.",
    travelTips: [
      "The Golden Summit sunrise requires either an overnight stay on the mountain or a 3am start from the base — the cable car doesn't operate before 7am. The sunrise cloud sea is worth every effort.",
      "Tai Chi classes at the mountain schools accept short-term students (1-day to multi-week). Morning group practice on the mountain terraces at 6am is free to observe and often open to participants.",
      "The temple complex stretches across 70km — focus your visit on the central axis (Yuzhen Palace → Purple Cloud Temple → South Cliff → Golden Summit) and use cable cars to save energy.",
      "Wudang's mist is part of the atmosphere but can obscure views — if the first day is overcast, the mountain often clears by afternoon or the following morning. Build flexibility into your schedule.",
    ],
    dayTrips: [
      {
        name: "Wuhan",
        nameZh: "武汉",
        distance: "~2.5h east by high-speed rail",
        description: "Hubei's great city — Yellow Crane Tower, Hubei Museum's extraordinary bronze bell collection, and the best street food in central China.",
        whyGo: "The natural base city for a Wudang trip, with world-class museums and food culture.",
      },
    ],
  },

  enshi: {
    id: "enshi",
    nameZh: "恩施",
    nameEn: "Enshi",
    province: "hubei",
    provinceZh: "湖北省",
    tagline: "The Grand Canyon of China",
    description:
      "Enshi is one of China's best-kept secrets — a remote Tujia and Miao minority region in western Hubei where the Qingjiang River has carved one of the most dramatic canyon landscapes in Asia. The Enshi Grand Canyon rivals anything in Zhangjiajie for sheer cliff faces and knife-edge ridges, while the Tusi Royal City ruins and traditional Tujia stilted houses (diaojiaolou) offer a window into a distinct culture that remained largely independent of the Chinese imperial system for centuries.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Enshi Grand Canyon", "Tujia minority culture", "Stilted houses (吊脚楼)", "Tusi Royal City ruins", "One of China's greenest areas"],
    attractions: [
      {
        name: "Enshi Grand Canyon (恩施大峡谷)",
        description: "A 108km canyon system with sheer limestone walls reaching 1,000m — needle-shaped stone pillars, cave systems, and river gorges. The Qiyue Mountain section has the most dramatic scenery, with a glass-bottomed skywalk over the canyon edge. Less visited than Zhangjiajie but equally spectacular.",
        category: "Natural Wonder",
      },
      {
        name: "Tusi City Ruins (唐崖土司城址)",
        description: "UNESCO-listed ruins of the Tang'ai Tusi (local chieftain) domain — a 400-year-old walled city demonstrating the unique governance system where ethnic minority chiefs maintained semi-independence under imperial Chinese rule. The stone archways and ceremonial structures are extraordinarily well preserved.",
        category: "UNESCO Heritage",
      },
      {
        name: "Nüer City (女儿城)",
        description: "A reconstructed Tujia ethnic minority cultural village in Enshi town — traditional stilted wooden houses, folk performances, and excellent Tujia food. More commercial than the authentic villages further into the mountains, but a good introduction to Tujia culture.",
        category: "Cultural Village",
      },
      {
        name: "Qingjiang River Valley (清江画廊)",
        description: "A 100km river cruise through the flooded canyon — emerald green water reflecting the forested limestone cliffs. The valley has been called China's most beautiful river landscape. Day cruises run from Enshi city.",
        category: "Scenic Cruise",
      },
      {
        name: "Xuan'en Tujia Village (宣恩伍家台贡茶村)",
        description: "An authentic Tujia tea-farming village above Xuan'en County — traditional stilted houses on hillside terraces surrounded by tea gardens. The village produces Enshi Yulu, one of China's finest green teas, and has been designated a UNESCO Tea Route heritage village.",
        category: "Village",
      },
    ],
    food: [
      {
        name: "Enshi Yulu Tea (恩施玉露)",
        nameZh: "恩施玉露",
        description: "One of China's ten most famous green teas — a needle-shaped steamed green tea with a distinctively fresh, seaweed-like aroma. The last surviving Chinese steamed green tea, using a method that influenced Japanese tea processing. Buy directly from farmers in Xuan'en County.",
        must: true,
      },
      {
        name: "Tujia Pork Preserved in Rice Wine (土家腊肉)",
        nameZh: "土家腊肉",
        description: "Pork belly cured in salt, rice wine, and five-spice then smoked over hardwood for weeks — the definitive Tujia preserved meat. Eaten stir-fried with garlic shoots or dried chillies. Every family in Enshi makes its own version; the best is bought directly from mountain households.",
        must: true,
      },
      {
        name: "Mugwort Rice Cake (蒿子粑粑)",
        nameZh: "蒿子粑粑",
        description: "Glutinous rice cakes made with fresh mugwort (艾草) — bright green, fragrant, and slightly bitter. A Qingming Festival specialty now eaten year-round. Pan-fried until crispy outside and chewy inside.",
        must: false,
      },
      {
        name: "Tujia Sour Fish (酸鱼)",
        nameZh: "土家酸鱼",
        description: "Fish fermented in brine and rice for months until tangy and deeply flavoured — a traditional Tujia preservation technique. Eaten cold as an appetiser or pan-fried. An acquired taste with a genuinely complex flavour profile.",
        must: false,
      },
    ],
    bestSeason: "Spring (April–May) for lush greenery and waterfalls at peak flow. Autumn (September–October) for clear canyon views and harvest festivals in Tujia villages. Summer is green but very humid. Winter brings occasional snow that makes the canyon scenery dramatic.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Wuhan",
        details: "Wuhan to Enshi: ~3 hours by high-speed rail. From Chongqing: ~2 hours. Enshi Station is the gateway — the Grand Canyon is 75km from the city (1.5 hours by bus or taxi).",
      },
      {
        mode: "🚌 Local transport",
        details: "Buses from Enshi city to the Grand Canyon scenic area run several times daily (¥30, ~1.5 hours). Taxis (¥150–200 one-way) are more flexible. A hired driver for the day (¥300–400) is the best option for combining multiple sites.",
      },
    ],
    accommodation: "Enshi city has mid-range hotels (¥150–450/night). For the canyon experience, guesthouses in Qiyue Mountain township (¥150–350/night) allow early-morning access before day-trippers arrive. Tujia-style stilted guesthouses in traditional villages offer the most atmospheric stays.",
    travelTips: [
      "The Enshi Grand Canyon glass skywalk has a daily visitor cap — buy tickets online at least 3 days ahead for weekends. The best photography is in the early morning before mist clears.",
      "Enshi Yulu tea is best bought in Xuan'en County (1.5 hours south) directly from farming households — prices are a fraction of tourist shops and quality is far higher.",
      "Combine with Zhangjiajie for a Hubei-Hunan canyon circuit: both areas are within a few hours of each other and offer complementary scenery.",
      "The Tusi City ruins are undervisited and absorbing — allow a full morning with an audio guide (available in English at the ticket office).",
    ],
    dayTrips: [
      {
        name: "Zhangjiajie",
        nameZh: "张家界",
        distance: "~3h east by bus or car",
        description: "The Avatar sandstone pillars of Zhangjiajie National Forest Park are just three hours away — making an Enshi–Zhangjiajie circuit one of the most dramatic nature itineraries in central China.",
        whyGo: "Two of China's most spectacular canyon landscapes, close enough to combine in a 4-day trip.",
        adminNote: "Zhangjiajie is in Hunan Province — the route crosses the Hubei–Hunan border.",
      },
    ],
  },

  yichang: {
    id: "yichang",
    nameZh: "宜昌",
    nameEn: "Yichang",
    province: "hubei",
    provinceZh: "湖北省",
    tagline: "Gateway to the Three Gorges",
    description:
      "Yichang sits at the eastern entrance to the Three Gorges — where the Yangtze emerges from the mountains and spreads onto the plain. The Three Gorges Dam, the world's largest hydroelectric project, is 40km upstream. The gorges themselves — Qutang, Wu, and Xiling — remain among the most dramatic river scenery on earth despite the raised water level. Yichang is also the point where most Three Gorges cruises begin or end, and the city's own riverside scenery and Xiling Gorge views are worth a half-day.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Three Gorges cruise start point", "Three Gorges Dam", "Xiling Gorge scenery", "Yangtze River", "Gezhouba Dam"],
    attractions: [
      {
        name: "Three Gorges Dam (三峡大坝)",
        description: "The world's largest hydroelectric dam — 2,335m wide, 185m tall, with a total capacity of 22,500 MW. The visitor centre and dam-top walkway are genuinely impressive. The ship lift (升船机), completed in 2016, raises vessels 113m in a giant water-filled tank — one of the most extraordinary pieces of engineering on earth.",
        category: "Engineering Marvel",
      },
      {
        name: "Xiling Gorge (西陵峡)",
        description: "The easternmost and longest of the Three Gorges, beginning just west of Yichang. The gorge walls rise 200–500m from the river and remain dramatic even after the reservoir raised the water level 80m. Day boat tours operate from Yichang's Taoping Dock.",
        category: "Scenic Gorge",
      },
      {
        name: "Three Gorges Cruise Departure",
        description: "Yichang is the eastern terminus of upstream Chongqing-to-Yichang Three Gorges cruises (3–5 days) and the starting point for downstream Yichang-to-Chongqing cruises. Several cruise operators dock here. The Victoria Cruises and Century Cruises are the most established.",
        category: "Cruise",
      },
      {
        name: "Yichang Three Gorges Museum (宜昌博物馆)",
        description: "A well-curated museum on the cultural and natural history of the Three Gorges region — particularly valuable for understanding what was submerged when the reservoir was filled: ancient cliff face carvings, Ba kingdom bronzes, and relocating villages.",
        category: "Museum",
      },
    ],
    food: [
      {
        name: "Three Gorges River Fish (峡江鱼)",
        nameZh: "峡江鱼",
        description: "Wild Yangtze River fish prepared in the local style — braised with chilli bean paste and ginger, or steamed simply with soy and spring onion. The river fish from this stretch of the Yangtze have a particular clean flavour from the cold mountain-fed water.",
        must: true,
      },
      {
        name: "Yichang Sour-Spicy Noodles (宜昌凉面)",
        nameZh: "宜昌凉面",
        description: "Thin wheat noodles in a tangy sour-spicy broth with peanuts, cucumber, and fermented vegetables — a refreshing summer street food staple. Found at noodle shops throughout the old city.",
        must: false,
      },
      {
        name: "Gezhouba Crayfish (葛洲坝小龙虾)",
        nameZh: "小龙虾",
        description: "Yichang is famous for spiced crayfish — braised in a complex chilli-and-garlic sauce and eaten at outdoor tables along the riverside. Summer evenings along Binjiang Road are the best setting.",
        must: true,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (September–October) for the most comfortable river cruising conditions. The Three Gorges Dam is most dramatic when the reservoir is at maximum level (late spring / early summer). Summer brings increased river flow and impressive dam water discharge.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Wuhan",
        details: "Wuhan to Yichang East: ~1.5 hours (¥100–140). From Chongqing: ~2 hours. Yichang East Station is 30km from the city — shuttle buses connect to the city centre (45 min, ¥15).",
      },
      {
        mode: "🚌 To Three Gorges Dam",
        details: "Buses from Yichang Yemingzhu Bus Station to the Three Gorges Dam scenic area: ~1 hour (¥15–20, several daily). Taxis cost ¥80–100 one-way.",
      },
    ],
    accommodation: "Most visitors stay one night at most, using Yichang as a cruise start/end point. Hotels cluster near the cruise terminal and city centre (¥200–600/night). The Riverside hotels along Binjiang Road have Yangtze views.",
    travelTips: [
      "Book Three Gorges cruises 1–3 months ahead for peak season (May and September–October). Chongqing to Yichang (downstream, 3 days/2 nights) is more scenic than the reverse — the gorges are entered at their most dramatic when travelling downstream.",
      "The Three Gorges Dam visit combines best with a half-day Xiling Gorge boat tour — book both on the same day trip from Yichang city.",
      "For budget travellers, the high-speed ferry (快艇) through Xiling Gorge to Zigui County (birthplace of the poet Qu Yuan) is a cheaper alternative to a full cruise.",
    ],
    dayTrips: [
      {
        name: "Shennongjia Nature Reserve",
        nameZh: "神农架",
        distance: "~2.5h north by bus",
        description: "One of China's most primeval forests — subtropical wildlife, ancient medicinal herb culture, and the mysterious legend of the Chinese Bigfoot (野人). A UNESCO World Heritage and biosphere reserve.",
        whyGo: "China's most biodiverse forest reserve, and accessible from Yichang without a flight.",
        adminNote: "Located in Shennongjia Forestry District — a separate administrative unit within Hubei. Requires entry permits bought in advance.",
      },
    ],
  },

  // ── HUNAN ─────────────────────────────────────────────────────────────────────

  zhangjiajie: {
    id: "zhangjiajie",
    nameZh: "张家界",
    nameEn: "Zhangjiajie",
    province: "hunan",
    provinceZh: "湖南省",
    tagline: "The mountains that inspired Avatar",
    description:
      "Zhangjiajie is where geology became cinema. The 3,000 sandstone pillars rising from the forest floor of Wulingyuan — some over 200m tall and covered in hanging vegetation — were the direct inspiration for the floating Hallelujah Mountains in Avatar. But the reality is more impressive than the film: standing at the canyon rim at dawn, watching the mist roll through the pillar forest below, you are in the most otherworldly landscape on Earth.",
    image: "https://images.unsplash.com/photo-1555737785-3b6a6f9cd8f5?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1555737785-3b6a6f9cd8f5?w=1200&h=600&fit=crop&auto=format",
    highlights: ["3,000 sandstone pillars", "Avatar filming inspiration", "World's longest cable car", "Glass Bridge & Sky Walk", "UNESCO World Heritage"],
    attractions: [
      {
        name: "Avatar Hallelujah Mountain (乾坤柱)",
        description: "The specific pillar renamed in 2010 to honour the Avatar connection — a 150m sandstone column with a pine tree growing from its summit. The Southern Sky Column viewpoint at Yuanjiajie gives the best angle for the floating mountain effect. Best photographed in the morning mist.",
        category: "Natural Landmark",
      },
      {
        name: "Tianmen Mountain & Glass Skywalk (天门山)",
        description: "A separate mountain from Wulingyuan with three world records: the world's longest cable car (7.5km), a 100m glass walkway cantilevered over a sheer cliff, and the Heaven's Gate Arch — a natural opening in the cliff face. The mountain road of 99 hairpin bends is one of the most dramatic drives in China.",
        category: "Scenic Area",
      },
      {
        name: "Bailong Elevator (百龙天梯)",
        description: "The world's tallest outdoor elevator — 326m of glass-sided lift ascending a sheer cliff face in Wulingyuan. The 2-minute ride from valley floor to mid-mountain plateau is vertiginous and spectacular. Queue times can reach 2 hours on busy days — buy tickets online.",
        category: "Engineering Attraction",
      },
      {
        name: "Yuanjiajie Scenic Area (袁家界)",
        description: "The plateau section of Wulingyuan with the best Avatar-landscape views — the cliff-edge walkway overlooking the pillar forest is the definitive Zhangjiajie experience. The Hallelujah Mountain viewpoint and the First Bridge Under Heaven (天下第一桥) connecting two pillars are here.",
        category: "Scenic Area",
      },
      {
        name: "Zhangjiajie Grand Canyon Glass Bridge (大峡谷玻璃桥)",
        description: "The world's highest and longest glass-bottomed bridge — 430m long, spanning a 300m-deep canyon. The bridge and canyon below have independent hiking trails. Separate from the Wulingyuan park area, 40km south of the city.",
        category: "Engineering Attraction",
      },
    ],
    food: [
      {
        name: "Tujia Three-Layers Meat (三下锅)",
        nameZh: "三下锅",
        description: "Zhangjiajie's signature dish — fatty pork belly, tripe, and blood curd cooked together in a spicy broth. A Tujia ethnic minority dish traditionally eaten at festivals. More refined than it sounds: the fat renders slowly and the textures contrast beautifully.",
        must: true,
      },
      {
        name: "Ge Powder Noodles (葛粉面条)",
        nameZh: "葛粉面条",
        description: "Noodles made from kudzu root starch — distinctive grey-green colour, slightly chewy texture, and a clean herbal flavour. Served in clear broth with local mushrooms and pork. A Zhangjiajie health food staple with a uniquely local character.",
        must: true,
      },
      {
        name: "Smoked Wild Boar (腊野猪肉)",
        nameZh: "腊野猪肉",
        description: "Wild boar from the surrounding forest, cured in salt and smoked over hardwood — a rich, gamey alternative to regular cured pork. Available at mountain guesthouses and specialty shops in the city.",
        must: false,
      },
      {
        name: "Yuanling Orange (沅陵椪柑)",
        nameZh: "沅陵椪柑",
        description: "The tangerines grown in the Zhangjiajie mountain valleys are among the sweetest in China — thin-skinned, extremely juicy, and available from October to March. Sold by vendors at every entrance to the scenic areas.",
        must: false,
      },
    ],
    bestSeason: "Autumn (October–November) for clear skies and peak foliage — the pillar forest in autumn colour is extraordinary. Spring (April–May) for waterfalls at maximum flow. Winter (December–February) for snow on the pillars — a completely different and equally stunning landscape. Summer is the most crowded season and has more rain but the mist adds atmosphere.",
    transportation: [
      {
        mode: "✈️ Zhangjiajie Hehua Airport (DYG)",
        details: "Direct flights from Beijing, Shanghai, Guangzhou, Chengdu, and Shenzhen. The airport is 5km from the city centre — taxi ¥15–20.",
      },
      {
        mode: "🚄 High-speed rail",
        details: "Zhangjiajie West Station: Changsha South ~2 hours, Wuhan ~3.5 hours. The new HSR connection (opened 2021) makes Zhangjiajie far more accessible than before.",
      },
      {
        mode: "🎫 Park access",
        details: "Wulingyuan scenic area ticket: ¥245 (valid 4 days, includes unlimited internal shuttle buses). Tianmen Mountain: separate ¥258 ticket includes cable car and sky walk. Buy online. The park's shuttle bus system is excellent.",
      },
    ],
    accommodation: "Zhangjiajie city (Yongding District) has the widest choice (¥150–600/night). Hotels inside the Wulingyuan scenic area allow early-morning access before day visitors arrive — worth the premium for the golden-hour landscapes (¥300–800/night). The Tianmen Mountain area has its own cluster of hotels.",
    travelTips: [
      "The Bailong Elevator queue is worst 9am–11am and 2pm–4pm. Take the elevator up first thing in the morning and hike down via the Golden Whip Stream trail (5.7km, 2–3 hours) through the canyon floor.",
      "Three full days minimum for Wulingyuan — one day for Yuanjiajie plateau and Hallelujah Mountain, one day for Golden Whip Stream canyon floor and Tianzi Mountain, one day for Tianmen Mountain.",
      "The glass skywalk and glass bridge are more spectacular in person than in photos. Wear socks — shoe covers are provided over the glass panels but bare feet are not permitted.",
      "Zhangjiajie's mist is part of the experience but can limit views. Build flexibility into your schedule — if the first day is completely socked in, reschedule your plateau visit for the second or third morning.",
    ],
    dayTrips: [
      {
        name: "Fenghuang Ancient Town",
        nameZh: "凤凰古城",
        distance: "~3h south by bus",
        description: "The most beautiful ancient town in Hunan — stilted houses on the Tuojiang River, Miao minority culture, and a perfectly preserved riverside streetscape that inspired the painter Shen Congwen.",
        whyGo: "Zhangjiajie and Fenghuang make the ideal Hunan pairing — natural spectacle and human heritage in the same trip.",
      },
    ],
  },

  changsha: {
    id: "changsha",
    nameZh: "长沙",
    nameEn: "Changsha",
    province: "hunan",
    provinceZh: "湖南省",
    tagline: "China's most delicious city",
    description:
      "Changsha has become the most talked-about food and nightlife city in China — a place where young people queue for two hours for a cup of dirty coffee, where the night market on Jiefang West Road runs until 4am, and where the local cuisine (fiery, funky, and fiercely proud) is considered by many food writers to be the most exciting in the country. Add Mao Zedong's birthplace, one of the world's greatest Han dynasty archaeology collections, and an island in the middle of the Xiang River, and Changsha rewards more than a single day.",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&h=600&fit=crop&auto=format",
    highlights: ["China's food and nightlife capital", "Han dynasty Lady Dai mummy", "Mao Zedong hometown nearby", "Jiefang West Road night market", "Orange Isle"],
    attractions: [
      {
        name: "Hunan Provincial Museum (湖南省博物馆)",
        description: "Home to one of the greatest archaeological finds of the 20th century — the tomb of Lady Dai (辛追夫人, died c. 168 BC), whose body was so perfectly preserved in 2,000-year-old burial fluid that her skin was still elastic when discovered in 1972. The display of her actual body and the extraordinary lacquerware, silk garments, and food offerings buried with her is unforgettable. Free entry; reserve tickets online.",
        category: "Museum",
      },
      {
        name: "Jiefang West Road (解放西路)",
        description: "Changsha's most famous entertainment street — a 1km strip of bars, restaurants, street food stalls, and live music venues that peaks around midnight and runs to dawn. Hunan cuisine restaurants, Taiwanese bubble tea chains with 2-hour queues, and a carnival atmosphere that has made this China's most photographed nightlife street.",
        category: "Nightlife & Food",
      },
      {
        name: "Orange Isle (橘子洲)",
        description: "A 5km island in the middle of the Xiang River, with a 32m-tall stone sculpture of the young Mao Zedong facing north. The island's southern tip is the original site described in Mao's 1925 poem 'Changsha.' The riverside parks are pleasant for cycling and the fireworks show over the island (weekends, weather permitting) is spectacular.",
        category: "Scenic Area",
      },
      {
        name: "Yuelu Academy (岳麓书院)",
        description: "One of China's four great ancient academies, founded in 976 AD on the forested slopes of Yuelu Mountain — still functioning as part of Hunan University. The restored lecture halls, gardens, and stone pavilions preserve the physical setting of 1,000 years of Chinese scholarly thought.",
        category: "Historic Site",
      },
      {
        name: "Tianxin Pavilion (天心阁)",
        description: "A 1,400-year-old city watchtower preserved within Changsha's remaining section of ancient city wall — the only surviving section of the original Ming dynasty defensive walls. The elevated pavilion has sweeping views over the old city and the Xiang River.",
        category: "Historic Landmark",
      },
    ],
    food: [
      {
        name: "Stinky Tofu (长沙臭豆腐)",
        nameZh: "长沙臭豆腐",
        description: "The most famous street food in Changsha — black-brine fermented tofu, deep-fried until puffed and crispy, served in a paper cone with chilli sauce and pickled cabbage. The Huogongdian (火宫殿) restaurant near Tianxin Pavilion has the most famous version; Mao Zedong reportedly ate it here as a student.",
        must: true,
      },
      {
        name: "Steamed Fish Head with Chilli (剁椒鱼头)",
        nameZh: "剁椒鱼头",
        description: "The definitive Hunan dish — a large silver carp head blanketed in chopped red and green chillies, fermented black beans, and garlic, then steamed until the flesh falls from the bone. The heat level is extreme; the flavour is layered, complex, and deeply satisfying.",
        must: true,
      },
      {
        name: "Pork Ribs in Brown Sauce (糖醋排骨)",
        nameZh: "毛氏红烧肉",
        description: "Mao's braised pork — a Changsha classic named after the city's most famous son. Pork belly braised in Mao-style with soy, rice wine, sugar, and star anise until caramelised and glossy. Said to have been Mao Zedong's favourite dish, and available at restaurants throughout the city.",
        must: false,
      },
      {
        name: "Changsha Dirty Coffee (茶颜悦色)",
        nameZh: "茶颜悦色",
        description: "Changsha's homegrown tea-latte chain — cold brew tea layered with whipped cream, condensed milk, and nuts. Cha Yan Yue Se (Tea Face Pleased) has queues of 1–2 hours at popular branches and operates only in Changsha. The osmanthus oolong version is the most popular.",
        must: true,
      },
    ],
    bestSeason: "Autumn (September–November) for the most comfortable temperatures. Spring (March–April) for the Yuelu Mountain forest in fresh green. Summer is hot and very humid but the nightlife and food scene peak in the heat. Changsha rewards a visit in any season — the indoor food culture is year-round.",
    transportation: [
      {
        mode: "🚄 High-speed rail hub",
        details: "Changsha South Station: Beijing ~5 hours, Shanghai ~4.5 hours, Guangzhou South ~2 hours, Zhangjiajie ~2 hours, Guiyang ~2.5 hours. One of the most connected HSR hubs in south-central China.",
      },
      {
        mode: "🚇 Changsha Metro",
        details: "9 metro lines covering the main tourist areas. Hunan Museum: Line 4 (Shaoshan South Station). Jiefang West Road: Lines 4/5 (Wuyi Square). Orange Isle: Line 4 (Juzizhou Station).",
      },
    ],
    accommodation: "The Wuyi Square / Jiefang West Road area is the epicentre of food and nightlife (¥250–800/night). The Yuelu Mountain / Hunan University area is quieter and more scenic (¥200–600/night). Book well ahead for the National Day Golden Week holiday in October.",
    travelTips: [
      "The Hunan Provincial Museum is free but requires online reservation 3–7 days ahead — do this before your trip. Lady Dai's display is in the basement permanent gallery; allow 2.5 hours for the full museum.",
      "Jiefang West Road peaks after 10pm and runs until 4am. Eat dinner at a Hunan restaurant at 7pm, then come to the street at 10pm when it reaches full energy.",
      "Cha Yan Yue Se queue strategy: avoid flagship stores in Wuyi Square and try smaller branches in the Tianxin or Furong Districts — queues of 20 minutes rather than 2 hours.",
      "Warning: Hunan food is genuinely very spicy — more chilli-forward than Sichuan. If heat-sensitive, specify 'slightly spicy' (微辣) when ordering; 'not spicy' (不辣) at many restaurants simply means less spicy.",
    ],
    dayTrips: [
      {
        name: "Shaoshan — Mao's Birthplace",
        nameZh: "韶山",
        distance: "~45min by high-speed rail",
        description: "The village where Mao Zedong was born in 1893 — his childhood home, early school, and a large memorial complex. One of China's most visited heritage sites and an insight into Chinese political culture.",
        whyGo: "The most significant political pilgrimage site in modern China, and a fascinating cultural experience regardless of political interest.",
      },
      {
        name: "Zhangjiajie",
        nameZh: "张家界",
        distance: "~2h by high-speed rail",
        description: "The Avatar sandstone pillar landscape — 3,000 columns rising from the forest floor. The most otherworldly natural scenery in China.",
        whyGo: "Changsha is the natural gateway to Zhangjiajie, making it the ideal first stop on a Hunan itinerary.",
      },
    ],
  },

  fenghuang: {
    id: "fenghuang",
    nameZh: "凤凰",
    nameEn: "Fenghuang Ancient Town",
    province: "hunan",
    provinceZh: "湖南省",
    tagline: "The most beautiful ancient town in China",
    description:
      "Fenghuang (Phoenix) is the most beautiful ancient town in China — and it knows it. The Tuojiang River bends through a gorge lined with centuries-old wooden stilted houses (diaojiaolou), red lanterns reflect in the dark water, and the ancient city walls rise above the riverbank as they have since the Tang dynasty. Home to the Miao and Tujia minorities and the birthplace of the great writer Shen Congwen, Fenghuang has been inspiring Chinese artists and poets for 300 years. The trick is to arrive at dawn and leave before the afternoon crowds.",
    image: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Stilted houses over the Tuojiang River", "Miao and Tujia minority culture", "Shen Congwen's hometown", "Ancient city walls", "Red lantern river reflections"],
    attractions: [
      {
        name: "Riverside Stilted Houses (吊脚楼)",
        description: "The defining image of Fenghuang — traditional wooden houses built on stilts directly over the Tuojiang River, connected by narrow lanes and stone bridges. The stretch along the North City Wall is the most photogenic. The reflected red lanterns in the still water at dusk are one of the most photographed scenes in China.",
        category: "Historic Architecture",
      },
      {
        name: "Shen Congwen Memorial Museum (沈从文故居)",
        description: "The childhood home of Shen Congwen (1902–1988), widely considered the greatest Chinese prose writer of the 20th century and a recurring Nobel Prize contender. His writing is deeply rooted in Fenghuang's landscape and Miao culture. The museum and his simple tomb by the river are quietly moving.",
        category: "Literary Heritage",
      },
      {
        name: "Ancient North Gate (北城门楼)",
        description: "The best-preserved section of Fenghuang's ancient city walls — a Tang dynasty fortified tower rising directly from the river bank. The view from the top along the river and toward the stilted houses is the classic Fenghuang panorama. Best photographed at the golden hour.",
        category: "Historic Site",
      },
      {
        name: "Rainbow Bridge (虹桥)",
        description: "A 400-year-old covered bridge across the Tuojiang — the commercial and social heart of Fenghuang for centuries. The bridge's second floor houses small shops; the lower level has the best river views.",
        category: "Historic Bridge",
      },
      {
        name: "Miao Silver Craft Workshops",
        description: "Fenghuang's Miao minority artisans are famous for intricate silver jewellery — headdresses, necklaces, and belts used in festivals. Several working workshops in the old town allow visitors to watch the hammering, filigree, and stone-setting processes. Purchase directly from the artisan for authenticity.",
        category: "Craft",
      },
    ],
    food: [
      {
        name: "Fenghuang Sour Pork (酸肉)",
        nameZh: "凤凰酸肉",
        description: "Pork marinated in sour brine and roasted until the exterior is crispy and caramelised — a Miao festival food, now available year-round. The sourness penetrates the meat during a week-long fermentation, creating a complex tang beneath the smoky exterior.",
        must: true,
      },
      {
        name: "Rice Tofu (米豆腐)",
        nameZh: "米豆腐",
        description: "A unique Fenghuang street food — rice cooked into a thick paste, then cooled into firm blocks and cut into noodles. Served cold in a bowl of sour, spicy broth with pickled vegetables and chilli oil. Light, refreshing, and nothing like regular tofu.",
        must: true,
      },
      {
        name: "Miao Sour Fish Soup (苗族酸汤鱼)",
        nameZh: "苗族酸汤鱼",
        description: "River fish simmered in a fermented tomato and wild herb broth — the signature dish of Miao minority cooking. The broth is sour, slightly spicy, and deeply herbal. Available at Miao-run guesthouses throughout the old town.",
        must: false,
      },
      {
        name: "Blood Duck (血鸭)",
        nameZh: "凤凰血鸭",
        description: "Stir-fried duck finished with fresh duck blood — a Fenghuang speciality that sounds alarming but produces an extraordinarily rich, thick sauce. A genuinely local dish not found outside western Hunan.",
        must: false,
      },
    ],
    bestSeason: "Autumn (October–November) for clear skies and the most comfortable temperatures — the lantern reflections in the clear autumn river are at their best. Spring (April–May) for lush greenery and waterfall flows in the surrounding mountains. Avoid Chinese national holidays when the town is impossibly crowded. Visit on weekdays if possible — the weekend crowd overwhelms the narrow lanes.",
    transportation: [
      {
        mode: "🚌 Bus from Changsha",
        details: "Changsha South Bus Station to Fenghuang: ~4 hours (¥100). Express coaches leave regularly. A new high-speed rail connection is under construction — check current status before travelling.",
      },
      {
        mode: "🚌 Bus from Zhangjiajie",
        details: "Zhangjiajie city to Fenghuang: ~3 hours by bus (¥70–90). The natural pairing for a Hunan nature + culture itinerary.",
      },
      {
        mode: "🚕 Car hire",
        details: "Hiring a car from Changsha or Zhangjiajie for a multi-day Hunan circuit is the most flexible option — Fenghuang, Zhangjiajie, and Enshi (Hubei) form a natural triangle.",
      },
    ],
    accommodation: "Staying inside the ancient town in a river-view stilted guesthouse is the essential Fenghuang experience (¥200–600/night). The best rooms hang directly over the river — the sound of the water at night is remarkable. Book 2–3 weeks ahead for weekends. Arriving the night before peak days allows the dawn experience before day-trippers arrive.",
    travelTips: [
      "The town entry ticket (¥148) is required to access the main historic sites — buy online. The ticket is valid for 2 days, so staying the night makes it good value.",
      "Dawn (6–8am) is when Fenghuang is at its finest — fishermen on bamboo rafts, locals doing morning chores by the river, and no tour groups. This alone justifies an overnight stay.",
      "River boat tours (竹筏漂流, ¥50–80) run from the old ferry dock. The 30-minute upstream paddle and drift back through the gorge gives the best angle on the stilted houses.",
      "Miao silver jewellery is Fenghuang's finest souvenir. Distinguish real silver (纯银, 925 or 990 stamped) from the zinc alloy imitations sold at tourist stalls — real silver is heavier, has a slight warmth, and turns your skin grey when wet.",
    ],
    dayTrips: [
      {
        name: "Zhangjiajie",
        nameZh: "张家界",
        distance: "~3h north by bus",
        description: "The Avatar mountain landscape — 3,000 sandstone pillars rising from the forest floor. The natural complement to Fenghuang's cultural heritage.",
        whyGo: "Fenghuang and Zhangjiajie are the two great reasons to visit Hunan — combining them is the obvious itinerary.",
      },
    ],
  },

  yueyang: {
    id: "yueyang",
    nameZh: "岳阳",
    nameEn: "Yueyang",
    province: "hunan",
    provinceZh: "湖南省",
    tagline: "Where the Yangtze meets Dongting Lake",
    description:
      "Yueyang sits at the point where the Yangtze River meets Dongting Lake — China's second-largest freshwater lake and one of the great wildfowl habitats in Asia. The Yueyang Tower, built 1,700 years ago and the subject of one of the most famous essays in Chinese literature, surveys this junction from a cliff above the water. Yueyang is often bypassed en route to Changsha or Wuhan, but it rewards a half-day stop with genuine historical depth and one of China's finest lake settings.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Yueyang Tower (1,700 years)", "Dongting Lake — China's 2nd largest", "Junshan Island silver tip tea", "Yangtze-Dongting confluence", "Wild whooper swans in winter"],
    attractions: [
      {
        name: "Yueyang Tower (岳阳楼)",
        description: "One of China's three great ancient towers, built in 220 AD and rebuilt in 1044 AD during the Northern Song dynasty. Fan Zhongyan's essay 'On Yueyang Tower' — written in 1046 and memorised by generations of Chinese school children — immortalised the view across Dongting Lake and articulated the Confucian ideal of public service over private gain. The three-storey wooden tower is one of the finest examples of ancient Chinese wooden architecture.",
        category: "Historic Landmark",
      },
      {
        name: "Dongting Lake (洞庭湖)",
        description: "China's second-largest freshwater lake — historically the largest until extensive land reclamation reduced its area. The lake is a major stopover for migratory birds: winter brings thousands of whooper swans, geese, and cranes to the Dongting wetlands. Boat tours from Yueyang cross to Junshan Island.",
        category: "Natural Wonder",
      },
      {
        name: "Junshan Island (君山岛)",
        description: "A small island in Dongting Lake famous as the source of Junshan Silver Tip tea — the finest yellow tea in China, produced only in tiny quantities from the island's tea bushes. The island also has ancient Taoist temples and the tomb of the legendary Emperor Shun. A 30-minute boat ride from Yueyang.",
        category: "Island & Tea",
      },
    ],
    food: [
      {
        name: "Junshan Silver Tip Tea (君山银针)",
        nameZh: "君山银针",
        description: "One of China's top ten teas and the only yellow tea on the list — buds only, harvested for just a few days each spring from Junshan Island. When brewed, the upright buds float like a forest of needles. Extraordinarily delicate and sweet. Genuine Junshan Silver Tip is rare and expensive — buy only with certification.",
        must: true,
      },
      {
        name: "Yueyang Steamed Fish (岳阳蒸鱼)",
        nameZh: "岳阳蒸鱼",
        description: "Freshwater fish from Dongting Lake — silver carp, mandarin fish, and bream — steamed with Hunan-style chilli and fermented black beans. The lake fish have a clean, sweet flavour distinct from sea fish or farmed freshwater species.",
        must: true,
      },
    ],
    bestSeason: "Winter (November–February) for migratory birds on Dongting Lake — tens of thousands of swans and geese create extraordinary wildlife spectacles. Spring (April–May) for the Junshan Silver Tip tea harvest (and tasting). Autumn for clear lake views.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Yueyang East Station: Changsha South ~30 minutes, Wuhan ~1 hour. Yueyang is perfectly positioned as a 3-hour stop between Changsha and Wuhan on the HSR.",
      },
    ],
    accommodation: "Most visitors stop for half a day en route between Changsha and Wuhan. If staying, mid-range hotels near Yueyang Tower (¥200–500/night) have Dongting Lake views.",
    travelTips: [
      "Yueyang is ideal as a half-day HSR stop between Changsha and Wuhan — leave luggage at the station, take a taxi to Yueyang Tower and Junshan Island boat, then continue by HSR in the afternoon.",
      "The Junshan Island boat (¥40 return) runs from the Nanhu dock, 10 minutes from Yueyang Tower by taxi. Allow 2 hours for the island visit.",
    ],
  },

  // ── GUIZHOU ───────────────────────────────────────────────────────────────────

  guiyang: {
    id: "guiyang",
    nameZh: "贵阳",
    nameEn: "Guiyang",
    province: "guizhou",
    provinceZh: "贵州省",
    tagline: "The sour and spicy capital of the southwest",
    description:
      "Guiyang is the capital of China's most underrated province — a cool-climate plateau city surrounded by karst mountains, with a street food culture built on sour, spicy, and funky flavours unlike anywhere else in China. The Guizhou 'four treasures' (spicy chicken, sour fish soup, fermented tofu, and maotai baijiu) are the foundation of a culinary tradition that has burst onto China's food scene in the past decade. The Qianling Mountain karst park in the city centre and the Qingyan Ancient Town 30km south make Guiyang more than just a transit hub.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Guizhou sour-spicy cuisine", "Qianling Mountain in the city", "Qingyan Ancient Town", "Maotai baijiu culture", "Cool summer climate"],
    attractions: [
      {
        name: "Qianling Mountain Park (黔灵山公园)",
        description: "A forested karst mountain rising from the heart of the city — hiking trails through ancient banyan trees, a large lake, and the Hongfu Temple (弘福寺) founded in 1672. The resident macaques are bold and photogenic. The park is packed with locals at dawn and dusk doing tai chi and socialising.",
        category: "Nature Park",
      },
      {
        name: "Qingyan Ancient Town (青岩古镇)",
        description: "A 600-year-old walled Ming dynasty town 30km south of Guiyang — cobblestone streets, stone archways, ancestral halls, and a remarkable mix of Buddhist, Taoist, Confucian, and Catholic religious buildings within a small area. Far less commercialised than comparable ancient towns in Yunnan or Anhui.",
        category: "Ancient Town",
      },
      {
        name: "Jiaxiu Pavilion (甲秀楼)",
        description: "Guiyang's most iconic landmark — a Ming dynasty pavilion built on a natural rock bridge over the Nanming River. The pavilion has been the symbol of the city since 1598. The riverside walk and the carved stone bridge are pleasant for an evening stroll.",
        category: "Historic Landmark",
      },
      {
        name: "Guizhou Provincial Museum (贵州省博物馆)",
        description: "An excellent museum focused on Guizhou's extraordinary ethnic minority heritage — Miao, Dong, Buyi, Yi, and Zhuang cultures, with displays of silver jewellery, embroidery, batik, and musical instruments. The Miao silver headdress collection is the finest in China.",
        category: "Museum",
      },
    ],
    food: [
      {
        name: "Guizhou Sour Soup Fish (酸汤鱼)",
        nameZh: "酸汤鱼",
        description: "Fish poached in a vibrant red broth made from fermented wild tomatoes, chilli, and local sour vegetables — the signature dish of Guizhou and particularly the Miao minority. The broth is simultaneously sour, spicy, and rich. Found at restaurants throughout Guiyang; the best versions use wild river fish.",
        must: true,
      },
      {
        name: "Si娃娃 Spicy Chicken (辣子鸡)",
        nameZh: "花溪辣子鸡",
        description: "Huaxi District spicy chicken — fried until crispy, then tossed in a mountain of dried chillies, Sichuan pepper, and garlic. The chillies are not all meant to be eaten (too hot), but the chicken pieces within are supremely flavourful. One of the dishes that put Guizhou food on China's national radar.",
        must: true,
      },
      {
        name: "Changwang Noodles (肠旺面)",
        nameZh: "肠旺面",
        description: "Guiyang's signature breakfast noodle — springy red noodles (coloured with chilli) in a rich pork broth, topped with pork intestine, blood curd, and crispy fried pork crackling. A confronting combination that becomes addictive after the first bowl.",
        must: true,
      },
      {
        name: "Maotai Baijiu (茅台酒)",
        nameZh: "茅台酒",
        description: "China's most prestigious liquor, produced in Maotai Town (仁怀市, 3 hours from Guiyang) from sorghum and local spring water through a 12-step, year-long fermentation process. Available at specialist shops throughout Guiyang at significantly lower prices than outside the province. Buy in the dedicated Maotai store rather than tourist shops.",
        must: false,
      },
    ],
    bestSeason: "Year-round — Guiyang's high-altitude plateau climate (1,100m) keeps temperatures pleasant in all seasons. Summers never exceed 28°C (vs. 40°C in Chongqing or Wuhan), making it one of China's best summer destinations. Spring (April–May) has the fullest waterfalls for day trips. Winter is mild but occasionally foggy.",
    transportation: [
      {
        mode: "🚄 High-speed rail hub",
        details: "Guiyang North Station: Changsha ~2.5 hours, Chongqing ~1.5 hours, Kunming ~2 hours, Guangzhou ~4 hours. Guizhou is now superbly connected by HSR through its famous high-bridge viaducts.",
      },
      {
        mode: "✈️ Guiyang Longdongbao Airport (KWE)",
        details: "Well-connected to all major Chinese cities. Metro Line 1 connects the airport to the city centre in 30 minutes.",
      },
    ],
    accommodation: "The Guanshanhu District and Yunyan District near Jiaxiu Pavilion have the best hotel range (¥200–700/night). Guiyang is a compact city — most attractions are reachable by metro. Budget options cluster near Guiyang Station.",
    travelTips: [
      "Guiyang is best used as a base for Guizhou day trips: Huangguoshu Waterfall (1.5 hours), Zhenyuan Ancient Town (1.5 hours), and Kaili Miao minority region (2 hours) are all accessible by HSR or bus.",
      "Changwang noodles are a Guiyang breakfast institution — find them at street stalls from 6–10am. The intestine and blood curd are optional toppings; the noodles and broth alone are excellent.",
      "Qingyan Ancient Town is 30 minutes by taxi or bus from the city centre — visit on a weekday morning for the quietest experience. The tofu products and rose candy sold here are the best local souvenirs.",
      "Guizhou's summer climate is its secret weapon — if visiting China in July–August, Guiyang is one of the few major cities where being outdoors during the day is genuinely pleasant.",
    ],
    dayTrips: [
      {
        name: "Huangguoshu Waterfall",
        nameZh: "黄果树瀑布",
        distance: "~1.5h south by bus or HSR",
        description: "Asia's largest waterfall — 77m wide and 74m tall, with the unique Water Curtain Cave allowing visitors to walk behind the falls.",
        whyGo: "The most dramatic waterfall in China, and the most-visited natural sight in Guizhou.",
      },
      {
        name: "Zhenyuan Ancient Town",
        nameZh: "镇远古镇",
        distance: "~1.5h east by high-speed rail",
        description: "A 2,000-year-old river town where the S-shaped Wuyang River wraps around ancient city walls and stilted Ming dynasty houses — one of China's most beautifully positioned ancient towns.",
        whyGo: "The most architecturally striking ancient town in Guizhou, and an easy day trip from Guiyang.",
      },
    ],
  },

  kaili: {
    id: "kaili",
    nameZh: "凯里",
    nameEn: "Kaili",
    province: "guizhou",
    provinceZh: "贵州省",
    tagline: "The silver and drum towers of the Miao world",
    description:
      "Kaili is the gateway to Qiandongnan — the southeastern Guizhou prefecture that has the highest concentration of Miao and Dong minority villages in China. Within an hour of Kaili in any direction, you can reach villages where women still wear full traditional silver headdresses daily, where Dong drum towers and wind-rain bridges have stood for 800 years, and where festivals involving hundreds of people in full ethnic costume take place throughout the year. There is nowhere else in China with this density of living ethnic minority culture.",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Miao silver headdress culture", "Dong drum towers & wind-rain bridges", "Living ethnic minority festivals", "Thousand-person rice field singing", "Batik and embroidery craft"],
    attractions: [
      {
        name: "Xijiang Thousand-Family Miao Village (西江千户苗寨)",
        description: "The largest Miao village in China — 1,300 stilted wooden houses cascading down the hillside of a mountain valley. The evening performance of Miao song and dance in the central plaza is extraordinary. Stay the night to experience the village before day-trippers arrive; the morning mist over the rooftops is magical.",
        category: "Ethnic Village",
      },
      {
        name: "Zhaoxing Dong Village (肇兴侗寨)",
        description: "A village of 800+ families with five drum towers (鼓楼) — each representing a different clan — and five wind-rain bridges (花桥). The Dong grand choir (侗族大歌) UNESCO-listed polyphonic singing tradition is performed here regularly. The most architecturally complete Dong village accessible to visitors.",
        category: "UNESCO Cultural Heritage",
      },
      {
        name: "Langde Miao Village (朗德上寨)",
        description: "A model heritage village 28km from Kaili — 400-year-old silver smithing workshops, rice terraces, and traditional drum-and-lusheng (bamboo pipe) music performances for visitors. Less crowded than Xijiang but more authentic in atmosphere.",
        category: "Ethnic Village",
      },
      {
        name: "Kaili Miao and Dong Museum (凯里苗侗风情博物馆)",
        description: "The best museum in Guizhou for understanding Miao and Dong material culture — silverwork, batik fabric, embroidery panels, and musical instruments collected from villages across Qiandongnan. Excellent context before visiting the villages.",
        category: "Museum",
      },
      {
        name: "Shiqiao Handmade Paper Village (石桥古法造纸)",
        description: "A remote village (2 hours from Kaili) preserving the 2,000-year-old craft of handmade bark paper using ancient Tang dynasty techniques. Artisans still produce decorative paper embedded with flowers and leaves using the original stone vats. One of the most extraordinary living craft traditions in China.",
        category: "Craft Heritage",
      },
    ],
    food: [
      {
        name: "Miao Sour Soup Fish (酸汤鱼)",
        nameZh: "苗族酸汤鱼",
        description: "The original Miao version — fish poached in a broth of fermented wild tomato (毛辣果) and local herbs. The sourness is more complex and less sharp than the Guiyang restaurant version. Village guesthouses in Xijiang serve the most authentic preparation.",
        must: true,
      },
      {
        name: "Glutinous Rice (糯米饭)",
        nameZh: "苗族糯米饭",
        description: "Miao-style sticky rice cooked in bamboo tubes or banana leaves, coloured with plant dyes in red, yellow, black, and purple. Served with pickled vegetables and fermented tofu at village festivals. Also available at Kaili market stalls daily.",
        must: true,
      },
      {
        name: "Dog Meat Hot Pot (狗肉火锅)",
        nameZh: "狗肉火锅",
        description: "A Kaili local speciality that divides visitors — dog meat is a traditional food in Miao culture, particularly at festivals. Available at specific restaurants in Kaili city. Not for everyone, but culturally significant to the region.",
        must: false,
      },
      {
        name: "Kaili Sour Vegetable Noodles (凯里酸汤粉)",
        nameZh: "凯里酸汤粉",
        description: "Rice noodles in the signature Kaili sour broth with pickled vegetables, crispy tofu, and spring onion. The ubiquitous Kaili breakfast — available at noodle shops from 6am for ¥8–12.",
        must: false,
      },
    ],
    bestSeason: "March–June for the most festivals (Miao New Year, Lusheng festivals, Sisters' Meal festival). September–October for clear skies and comfortable temperatures. The Sisters' Meal Festival (苗族姊妹节, 3rd month of the lunar calendar) is the most spectacular Miao cultural event in China — young women in full silver headdress exchange coloured sticky rice as a courtship ritual.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Guiyang",
        details: "Guiyang North to Kaili South: ~40 minutes (¥45). The HSR line continues through to Zhenyuan and beyond — making Kaili an easy day trip or base from Guiyang.",
      },
      {
        mode: "🚌 Local buses to villages",
        details: "Buses from Kaili to Xijiang: ~1.5 hours. To Zhaoxing: ~3 hours. Hiring a private car in Kaili (¥300–500/day) covers more villages with greater flexibility.",
      },
    ],
    accommodation: "Kaili city has mid-range hotels (¥150–400/night). Staying in a village guesthouse in Xijiang or Zhaoxing (¥100–350/night) is the more atmospheric option — village stays allow dawn and evening access that day-trippers miss entirely. Book ahead for festival periods.",
    travelTips: [
      "Festival dates follow the lunar calendar and change each year — check the Qiandongnan Tourism Bureau's annual festival calendar before booking. Attending even a small village festival is the most culturally immersive experience available in China.",
      "Silver jewellery in Xijiang: distinguish real silver (纯银, hallmarked) from zinc alloy (白铜, copper-silver) at tourist stalls. Buy from a workshop where you can watch the artisan working, and ask for the silver purity certificate.",
      "Zhaoxing Dong Village is more remote than Xijiang but more authentic — the five drum towers are extraordinary and the village sees fewer day-trippers. Overnight stays here are exceptional.",
      "Hire a local guide in Kaili (available through hotels, ¥200–400/day) for village visits — Miao and Dong cultural context transforms the experience from sightseeing to understanding.",
    ],
    dayTrips: [
      {
        name: "Guiyang",
        nameZh: "贵阳",
        distance: "~40min by high-speed rail",
        description: "Guizhou's capital city — great base for arriving, with good food, easy onward connections, and the Guizhou Provincial Museum's excellent Miao and Dong collection.",
        whyGo: "Kaili and Guiyang are natural partners — the capital provides context, Kaili provides the living culture.",
      },
    ],
  },

  zhenyuan: {
    id: "zhenyuan",
    nameZh: "镇远",
    nameEn: "Zhenyuan",
    province: "guizhou",
    provinceZh: "贵州省",
    tagline: "Where the river writes the letter S",
    description:
      "Zhenyuan is one of China's most beautifully positioned ancient towns — a 2,000-year-old settlement where the Wuyang River makes a dramatic S-bend between two hills, with the ancient city walls and stilted houses climbing both banks. The ancient town has been continuously inhabited since the Han dynasty, and its remarkably well-preserved streets — stone paving worn smooth over centuries, traditional wooden shophouses, and Ming dynasty temple complexes — feel genuinely lived-in rather than reconstructed for tourism.",
    image: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=1200&h=600&fit=crop&auto=format",
    highlights: ["S-shaped river through ancient walls", "2,000 years of continuous habitation", "Stilted houses over the Wuyang River", "Qinglong Cave temple complex", "Genuinely lived-in old town"],
    attractions: [
      {
        name: "Qinglong Cave Complex (青龙洞古建筑群)",
        description: "A remarkable multi-religious complex clinging to a sheer karst cliff above the Wuyang River — Buddhist, Taoist, and Confucian temples built at different levels into the cliff face over 500 years. The view of the S-bend river below from the upper pavilions is the finest in Zhenyuan.",
        category: "Historic Temple Complex",
      },
      {
        name: "Ancient Town South Street (和平街 & 卫城古城)",
        description: "The most intact section of Zhenyuan's ancient commercial street — Ming and Qing dynasty wooden shophouses, traditional inns, and teahouses preserved in a streetscape that has changed little in 300 years. The street is still fully inhabited; laundry hangs between the eaves and locals play mahjong on the stoops.",
        category: "Historic Street",
      },
      {
        name: "Wuyang River Boat Tour (舞阳河游船)",
        description: "A river cruise through the S-bend gorge — the Wuyang River's clear green water reflects the limestone cliffs and ancient walls above. The 2-hour cruise passes through the most dramatic section of the gorge and gives the best views of the Qinglong Cave cliff complex.",
        category: "Scenic Cruise",
      },
      {
        name: "Ancient Pontoon Bridge (浮桥)",
        description: "A working pontoon bridge of linked boats spanning the Wuyang River — used daily by locals crossing between the north and south banks. The bounce underfoot and the river views make crossing it a minor adventure.",
        category: "Historic Structure",
      },
    ],
    food: [
      {
        name: "Zhenyuan Sour Soup (镇远酸汤)",
        nameZh: "镇远酸汤",
        description: "A local variant of the Guizhou sour broth tradition — lighter and more herbal than the Guiyang version, using the mineral-rich Wuyang River water. Fish and tofu are the standard accompaniments. Found at riverside restaurants along the south bank.",
        must: true,
      },
      {
        name: "Zhenyuan Pork Intestine Powder (猪大肠米粉)",
        nameZh: "猪大肠米粉",
        description: "Rice noodles in a rich pork and intestine broth — a Zhenyuan morning staple sold at stalls near the old town gates from 6am. Simple, hearty, and intensely local.",
        must: false,
      },
      {
        name: "Wuyang River Fish (舞阳河鱼)",
        nameZh: "舞阳河鱼",
        description: "Wild river fish from the Wuyang — braised with pickled chilli and ginger at riverside restaurants. The clean mountain water produces fish with a delicate, sweet flavour.",
        must: true,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (October–November) for clear river water and comfortable temperatures. The lantern festival on the Wuyang River (15th day of the first lunar month) is Zhenyuan's most atmospheric cultural event. Avoid national holidays when the narrow old town lanes become severely crowded.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Guiyang",
        details: "Guiyang North to Zhenyuan: ~1.5 hours. From Kaili South: ~45 minutes. The station is 3km from the old town — taxi ¥10–15.",
      },
    ],
    accommodation: "Staying in a riverside guesthouse inside the old town is the essential Zhenyuan experience (¥150–400/night). The best rooms overlook the Wuyang River and the Qinglong Cave cliff. Book ahead for weekends — the town is small and good rooms sell out.",
    travelTips: [
      "Climb to the upper pavilion of Qinglong Cave at sunset for the finest view of the S-bend river and the silhouette of the ancient walls. The climb takes 20 minutes and the view justifies every step.",
      "Zhenyuan is best visited as an overnight stop between Guiyang and Kaili on the Guizhou HSR line — the town is small enough to see in an afternoon and morning, and the overnight atmosphere is excellent.",
      "The pontoon bridge sways noticeably under foot traffic — cross it early in the morning when only locals are using it.",
    ],
    dayTrips: [
      {
        name: "Kaili Miao Villages",
        nameZh: "凯里苗族村寨",
        distance: "~45min west by high-speed rail",
        description: "The Xijiang Thousand-Family Miao Village and surrounding ethnic minority villages — the richest concentration of living Miao culture in China.",
        whyGo: "Zhenyuan and Kaili together cover the full spectrum of Guizhou's cultural heritage — ancient town plus living minority culture.",
      },
    ],
  },

  huangguoshu: {
    id: "huangguoshu",
    nameZh: "黄果树",
    nameEn: "Huangguoshu",
    province: "guizhou",
    provinceZh: "贵州省",
    tagline: "Asia's greatest waterfall",
    description:
      "Huangguoshu Waterfall is the largest waterfall in Asia — 77m wide and 74m tall, fed by the Baishui River as it drops off the Guizhou Plateau. Unlike most great waterfalls, Huangguoshu has a Water Curtain Cave (水帘洞) behind the main falls — 134m of cavern carved by millennia of erosion, allowing visitors to stand inside the waterfall and look out through the curtain of water. The surrounding area has an entire waterfall scenic zone with 18 additional falls.",
    image: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Asia's largest waterfall", "Walk-behind Water Curtain Cave", "Baishui River cascade zone", "18 waterfalls in one scenic area", "Buyi minority villages"],
    attractions: [
      {
        name: "Huangguoshu Main Falls (黄果树大瀑布)",
        description: "The centrepiece — 77m wide, 74m tall, the largest waterfall in Asia by volume. Most dramatic during summer flood season (June–September) when the Baishui River is running at peak flow. The viewing platform puts you 50m from the main curtain of water. Rain gear is recommended — the spray soaks everything within 100m.",
        category: "Natural Wonder",
      },
      {
        name: "Water Curtain Cave (水帘洞)",
        description: "A 134m cavern carved behind the main falls by millennia of erosion — six windows and four balconies look out through the falling water from inside. The roar and spray inside the cave are extraordinary. Included in the main ticket; the cave path is slippery — wear waterproof shoes.",
        category: "Natural Cave",
      },
      {
        name: "Doupotang Falls (斗波塘瀑布)",
        description: "A secondary waterfall 500m downstream — only 12m tall but 105m wide, making it among the widest in China. The green pool at its base and the walking trail around the rim are excellent for photography. Often more photogenic than the main falls.",
        category: "Waterfall",
      },
      {
        name: "Buyi Minority Village (布依族村寨)",
        description: "Several traditional Buyi minority villages dot the valley below the falls. The Buyi (or Bouyei) people have lived here for centuries — distinctive stone-slab houses, indigo-dyed batik fabric, and a unique bridge-building tradition. The village of Shitou Zhai (石头寨) is the best preserved and most accessible.",
        category: "Ethnic Village",
      },
    ],
    food: [
      {
        name: "Buyi Five-Colour Glutinous Rice (五色糯米饭)",
        nameZh: "五色糯米饭",
        description: "Sticky rice coloured in five natural colours (black, red, yellow, white, purple) using plant dyes — a Buyi festival food now sold year-round at village stalls near the waterfall. Eaten with pickled vegetables and fermented tofu.",
        must: true,
      },
      {
        name: "Grilled River Fish (炭烤溪鱼)",
        nameZh: "炭烤溪鱼",
        description: "Small river fish from the Baishui River, skewered and grilled over charcoal with chilli salt and cumin. Sold by Buyi vendors at the scenic area entrance. Crispy, intensely flavourful, and the ideal light meal before exploring the falls.",
        must: true,
      },
      {
        name: "Huangguoshu Goat Hotpot (黄果树羊肉火锅)",
        nameZh: "黄果树羊肉火锅",
        description: "Mountain-pastured goat braised in a clear broth with local herbs and chilli — available at restaurants in Huangguoshu town. The altitude and mountain pasture produce noticeably sweeter, less gamey meat than lowland goat.",
        must: false,
      },
    ],
    bestSeason: "Summer (June–September) for the waterfall at maximum volume — the most spectacular and most dramatic season. Spring (April–May) has good flow and fewer crowds. Autumn is also excellent. Winter reduces the falls significantly but the crowds disappear and the surrounding forest is serene.",
    transportation: [
      {
        mode: "🚄 + 🚌 From Guiyang",
        details: "Guiyang North to Anshun West: ~40 minutes by high-speed rail (¥40). Then bus or taxi from Anshun to Huangguoshu scenic area: ~30 minutes (¥10–15 bus, ¥50 taxi). Total ~1.5 hours from Guiyang.",
      },
      {
        mode: "🚌 Direct bus from Guiyang",
        details: "Direct buses from Guiyang Jinyang Bus Station to Huangguoshu: ~2 hours (¥45–60, several daily departures). More convenient for direct access without a transfer.",
      },
    ],
    accommodation: "Most visitors come as a day trip from Guiyang. If staying, hotels in Huangguoshu town (¥150–400/night) allow early-morning access to the falls before tour groups arrive — the mist at dawn is particularly beautiful. Anshun city (30km) has a wider range of accommodation.",
    travelTips: [
      "Visit the main falls first thing in the morning (8am opening) before tour groups arrive at 10am. The cascade zone (18 falls walk) is best in the afternoon when day-trippers have mostly moved on.",
      "Bring a waterproof jacket and waterproof bag — the spray from the main falls soaks visitors within 50m and the Water Curtain Cave interior is extremely wet.",
      "The scenic area is large (walking ~5km). The electric cart service (¥25) connects the major viewpoints and saves significant time between the main falls, Doupotang, and Tianxing Bridge sections.",
      "Combine with Anshun's Longgong Caves (龙宫, 25km east) — an underground river cave system considered one of the most beautiful in China — for a full Guizhou nature day.",
    ],
    dayTrips: [
      {
        name: "Guiyang",
        nameZh: "贵阳",
        distance: "~1.5h north by bus or HSR+bus",
        description: "Guizhou's capital — the natural base for a Huangguoshu day trip, with great food, onward HSR connections, and Qingyan Ancient Town nearby.",
        whyGo: "Guiyang is the closest major city and the most convenient base for exploring Huangguoshu.",
      },
    ],
  },

  // ── JIANGXI ───────────────────────────────────────────────────────────────────

  jingdezhen: {
    id: "jingdezhen",
    nameZh: "景德镇",
    nameEn: "Jingdezhen",
    province: "jiangxi",
    provinceZh: "江西省",
    tagline: "1,000 years of porcelain, still firing",
    description:
      "For over a thousand years, Jingdezhen has been the porcelain capital of the world — the city that invented blue-and-white, perfected eggshell porcelain, and supplied the imperial courts of China, Europe, and the Middle East with their finest tableware. Today it is experiencing a remarkable renaissance: a new generation of independent ceramicists from across China and the world has moved here, turning the old factory districts into a living creative community. Jingdezhen is simultaneously a UNESCO heritage site and one of China's most vibrant contemporary art cities.",
    image: "https://images.unsplash.com/photo-1565117831274-87f73abdcc30?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1565117831274-87f73abdcc30?w=1200&h=600&fit=crop&auto=format",
    highlights: ["1,000 years of imperial porcelain", "Blue-and-white ceramic birthplace", "Living ceramics community", "Antique market & kiln ruins", "Sunday Pottery Market"],
    attractions: [
      {
        name: "Imperial Kiln Museum (御窑博物馆)",
        description: "A world-class museum built directly over the excavated ruins of the Ming and Qing dynasty imperial kilns — the source of all official court porcelain for 600 years. The barrel-vaulted brick architecture by Zhu Pei is extraordinary, and the artefact collection (including deliberately smashed imperial rejects) is unique. One of the finest new museums in China.",
        category: "Museum",
      },
      {
        name: "Tao Xi Chuan Art District (陶溪川)",
        description: "A 1950s state porcelain factory converted into one of China's most successful creative districts — workshops, galleries, restaurants, and boutiques in the original factory buildings. The Sunday Pottery Market (周末集市) draws hundreds of independent ceramicists selling work from simple stalls. The Friday and Saturday night market is excellent.",
        category: "Creative District",
      },
      {
        name: "Ancient Kiln Folk Custom Museum (古窑民俗博览区)",
        description: "A living museum of traditional Jingdezhen ceramic techniques — artisans demonstrate the 72 traditional steps of porcelain production in original Qing dynasty kiln workshops. The wood-fired dragon kiln (柴窑) firing demonstrations are extraordinary.",
        category: "Living Museum",
      },
      {
        name: "Antique Porcelain Market (鬼市 & 瓷器街)",
        description: "Jingdezhen's legendary antique ceramics market begins before dawn (4–7am) at the 'ghost market' near the old city — dealers spread porcelain on cloths by torchlight. Genuine antiques, high-quality reproductions, and outright fakes exist side by side. Bring knowledge or a trusted local guide.",
        category: "Market",
      },
      {
        name: "San Bao International Ceramic Village (三宝国际陶艺村)",
        description: "A rural ceramics community 7km from the city — workshops, studios, and gallery spaces run by international and Chinese ceramicists in a forested valley. Visiting artist residencies make this one of the world's most active ceramic art centres.",
        category: "Artist Village",
      },
    ],
    food: [
      {
        name: "Cold Noodles with Chilli Oil (冷粉)",
        nameZh: "冷粉",
        description: "Jingdezhen's signature street food — rice or sweet potato noodles served cold in a tangy, spicy broth with pickled vegetables and peanuts. Available at street stalls throughout the old city from morning to midnight.",
        must: true,
      },
      {
        name: "Braised Pork Rice (卤肉饭)",
        nameZh: "景德镇卤肉饭",
        description: "Jiangxi-style braised pork belly over white rice — slow-cooked until the fat is completely soft and the sauce is dark and glossy. The Jingdezhen version uses local rice wine in the braise. A canteen staple at ceramics workshops.",
        must: false,
      },
      {
        name: "Jiangxi Rice Noodle Soup (瓦罐汤)",
        nameZh: "瓦罐汤",
        description: "Slow-cooked soup in individual ceramic crocks (瓦罐) — pork bone, lotus root, and herbs simmered for 4+ hours. The ceramic vessels are placed directly in hot ash and cook overnight. A Nanchang tradition that Jingdezhen appropriately serves in its own distinctive local crocks.",
        must: true,
      },
      {
        name: "Kiln Worker's Breakfast (窑工早点)",
        nameZh: "窑工早点",
        description: "The traditional ceramics-worker breakfast eaten before a long kiln shift — rice porridge with pickled vegetables, fried dough sticks, and strong tea. Available at old-school breakfast shops near the Imperial Kiln site from 6am.",
        must: false,
      },
    ],
    bestSeason: "Spring (April–May) and Autumn (October–November) for pleasant temperatures. The Sunday Pottery Market runs year-round. The International Ceramic Art Festival (October) brings ceramicists from 50+ countries. Summer is hot but the kiln workshops and creative district are fully active.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Jingdezhen North Station: Nanchang ~1 hour, Hangzhou ~2.5 hours, Shanghai ~3 hours. The station is 20km from the city centre — taxi ¥40–60 or shuttle bus.",
      },
      {
        mode: "✈️ Jingdezhen Luojia Airport (JDZ)",
        details: "Small airport with connections to Beijing, Shanghai, Guangzhou, and Chengdu. The airport is 8km from the city — taxi ¥20–30.",
      },
    ],
    accommodation: "The Tao Xi Chuan creative district has boutique hotels in converted factory buildings (¥300–800/night). The old city near the Imperial Kiln has guesthouses in traditional lane houses (¥200–500/night). Staying in the Tao Xi Chuan area gives the best access to the Sunday Market and night market.",
    travelTips: [
      "The Sunday Pottery Market (陶溪川周末集市) is the best reason to time your visit for a weekend — hundreds of independent potters sell work at every price point from ¥20 to ¥5,000. Arrive at 9am when it opens for the best selection.",
      "The ghost market antique ceramics auction (4–7am near Lianhu Road) is a genuine experience — bring a torch and don't buy anything expensive without expert verification. The atmosphere alone is worth the early start.",
      "Ceramics workshops throughout Jingdezhen offer throwing and hand-building classes (¥100–300 for 2–3 hours, includes firing and shipping). Book through your hotel or the Tao Xi Chuan visitor centre.",
      "The Imperial Kiln Museum requires timed entry tickets — book online at least 2 days ahead for weekends.",
    ],
    dayTrips: [
      {
        name: "Wuyuan Rapeseed Fields",
        nameZh: "婺源油菜花",
        distance: "~1h northeast by bus",
        description: "The most beautiful rural countryside in Jiangxi — Huizhou villages surrounded by terraced rapeseed fields that turn golden yellow in late March and early April.",
        whyGo: "Jingdezhen and Wuyuan are natural partners — ceramic culture and pastoral landscape in the same day trip.",
      },
    ],
  },

  lushan: {
    id: "lushan",
    nameZh: "庐山",
    nameEn: "Mount Lu",
    province: "jiangxi",
    provinceZh: "江西省",
    tagline: "The mountain of poets, painters and philosophers",
    description:
      "Mount Lu has been China's most culturally significant mountain for 1,600 years — not for religious reasons (though it has those too), but as the retreat of poets, painters, calligraphers, and philosophers who found in its mist-wrapped peaks the ideal setting for contemplation. Su Dongpo wrote here. Tao Yuanming farmed here. White Deer Grotto Academy educated China's greatest Neo-Confucian scholars. In the 20th century, colonial-era villas in Guling town made Lu Shan the summer retreat of republican-era leaders — and the site of Mao's fateful 1959 conference. It is a mountain uniquely layered with history.",
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&h=600&fit=crop&auto=format",
    highlights: ["UNESCO World Heritage", "1,600 years of literary history", "Colonial-era Guling village", "White Deer Grotto Academy", "Sea of clouds & waterfalls"],
    attractions: [
      {
        name: "Guling Town (牯岭镇)",
        description: "A complete colonial-era hill station at 1,167m — over 600 European and American villas built by missionaries, diplomats, and businesspeople from the 1890s to 1930s. The stone-paved lanes, stone churches, and villas in varying states of preservation create an uncanny atmospheric blend of Jiangxi mountains and European resort culture.",
        category: "Historic District",
      },
      {
        name: "Three-Step Waterfall (三叠泉瀑布)",
        description: "Lu Shan's most famous waterfall — 155m total drop in three cascades, reached after a 45-minute descent into a valley gorge. The Chinese saying holds that anyone who has not seen Three-Step Falls has not truly visited Lu Shan. The cable car from Haihuiyuan makes the descent easier; the return is steep.",
        category: "Waterfall",
      },
      {
        name: "White Deer Grotto Academy (白鹿洞书院)",
        description: "One of China's four great ancient academies, founded in 940 AD and made famous by the Neo-Confucian philosopher Zhu Xi in 1179. The serene forest setting at the foot of the mountain preserves the original lecture halls, pavilions, and Zhu Xi's restored study. One of the most important educational sites in Chinese history.",
        category: "Historic Academy",
      },
      {
        name: "Flower Path (花径)",
        description: "A forested walking trail associated with the Tang dynasty poet Bai Juyi, who served as prefect of nearby Jiujiang and spent summers on the mountain. The path winds past a lake and pavilions to the site described in his famous poem about finding plum blossoms in the snow.",
        category: "Scenic Trail",
      },
      {
        name: "Lu Lin Lake & Five Old Man Peaks (芦林湖 & 五老峰)",
        description: "Lu Lin Lake's mirror-still surface reflects the Five Old Man Peaks (1,358m) — the ridge most associated with the mountain's sea-of-clouds phenomenon. The Five Old Man trail is 4–5 hours round trip with outstanding views over Poyang Lake.",
        category: "Scenic Area",
      },
    ],
    food: [
      {
        name: "Lu Shan Cloud Mist Tea (庐山云雾茶)",
        nameZh: "庐山云雾茶",
        description: "One of China's ten famous teas — a green tea grown in the mist zone above 800m, with a distinctive orchid fragrance and slightly sweet, brisk flavour. Buy directly from mountain tea shops in Guling; avoid roadside stalls at the base. The spring harvest (April) is the finest.",
        must: true,
      },
      {
        name: "Shi Er Dao Noodles (十二道菜)",
        nameZh: "庐山十二道菜",
        description: "The traditional Lu Shan banquet format — twelve dishes including stone ear fungus (石耳, foraged from the mountain cliffs), fresh river fish from Poyang Lake, and mountain-foraged vegetables. Available at traditional restaurants in Guling town.",
        must: true,
      },
      {
        name: "Poyang Lake Crab (鄱阳湖大闸蟹)",
        nameZh: "鄱阳湖大闸蟹",
        description: "Hairy crabs from Poyang Lake — China's largest freshwater lake, visible from the Five Old Man Peaks. Available at the base of the mountain in Jiujiang city from September to November. Considered a worthy alternative to the more famous Yangcheng Lake variety.",
        must: false,
      },
    ],
    bestSeason: "Spring (March–May) for the Flower Path and wildflowers. Summer (June–August) — Lu Shan is a famous 'cool mountain' and 15°C cooler than the Yangtze plains, historically making it a popular escape from the heat. Autumn (October–November) for the clearest views and best Three-Step Falls photography. Winter brings snow and ice — beautiful but cold.",
    transportation: [
      {
        mode: "🚄 + 🚌 From Nanchang",
        details: "Nanchang to Jiujiang by high-speed rail: ~35 minutes. Then bus from Jiujiang to Lu Shan Scenic Area gate: ~40 minutes (¥15). Total from Nanchang ~1.5 hours.",
      },
      {
        mode: "🚌 From Jiujiang city",
        details: "Jiujiang has the closest accommodation and transport hub. Buses to Lu Shan run frequently. Jiujiang itself is worth an evening for Poyang Lake views.",
      },
      {
        mode: "🚡 Mountain cable cars",
        details: "Several cable cars operate within the scenic area: Haihuiyuan cable car for Three-Step Falls access (¥75), and Lu Shan Botanical Garden cable car. The mountain road (盘山公路) winds up 36 hairpin bends — scenic by minibus from the gate.",
      },
    ],
    accommodation: "Guling town on the mountain plateau has the best range — from budget guesthouses in lane houses (¥150–350/night) to colonial villa hotels (¥500–1,500/night). The Lulin Lake area has several resort hotels (¥400–1,000/night). Staying on the mountain means immediate access to morning mist and the most atmospheric evenings.",
    travelTips: [
      "Lu Shan's mist is famous — and persistent. Build 2 nights into your stay to have a good chance of at least one clear morning for the sea-of-clouds and Poyang Lake views from the Five Old Man Peaks.",
      "Three-Step Falls requires a significant descent and climb — start early (before 8am) and allow 3 hours total. The cable car (¥75) makes the descent faster; most people take it down and hike back up.",
      "White Deer Grotto Academy is at the mountain's base (separate from the main scenic area ticket) — visit it on arrival or departure rather than making a special trip from Guling.",
      "The colonial villas in Guling are best explored on foot in the evening when the tour groups have gone. The Meilu Villa (美庐别墅, Chiang Kai-shek's summer residence, ¥30) is the most interesting interior to visit.",
    ],
    dayTrips: [
      {
        name: "Jingdezhen",
        nameZh: "景德镇",
        distance: "~2h southeast by bus or car",
        description: "The porcelain capital of the world — imperial kiln ruins, living ceramics workshops, and China's most vibrant contemporary ceramics scene.",
        whyGo: "Lu Shan and Jingdezhen are the two great reasons to visit Jiangxi — combining them in a 3-day trip is the natural itinerary.",
      },
    ],
  },

  nanchang: {
    id: "nanchang",
    nameZh: "南昌",
    nameEn: "Nanchang",
    province: "jiangxi",
    provinceZh: "江西省",
    tagline: "Where the revolution began",
    description:
      "Nanchang is the capital of Jiangxi and one of China's most historically significant cities — the 1927 Nanchang Uprising, led by Communist forces against the Nationalist government, is officially considered the founding moment of the People's Liberation Army. Beyond its revolutionary heritage, Nanchang is a fast-growing city with a lively food culture, excellent access to Poyang Lake (China's largest freshwater lake and a major bird migration stopover), and a convenient base for Jingdezhen and Lu Shan.",
    image: "https://images.unsplash.com/photo-1576788369575-6c610b7a33fb?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1576788369575-6c610b7a33fb?w=1200&h=600&fit=crop&auto=format",
    highlights: ["1927 Nanchang Uprising site", "Tengwang Pavilion (Tang dynasty)", "Poyang Lake bird migration", "Jiangxi regional cuisine", "HSR gateway to Jiangxi"],
    attractions: [
      {
        name: "August 1st Nanchang Uprising Memorial (八一起义纪念馆)",
        description: "The former Jiangxi Hotel where the Communist uprising of August 1, 1927 was planned and launched — now a comprehensive museum documenting the event that led to the formation of the Red Army. One of the most important revolutionary heritage sites in China, visited by millions of Chinese each year.",
        category: "Historic Site",
      },
      {
        name: "Tengwang Pavilion (滕王阁)",
        description: "One of China's three great ancient towers, originally built in 653 AD by the Tang prince Teng Wang. Wang Bo's preface written at the tower's inaugural banquet is considered the finest parallel prose in Chinese literature. The current reconstruction (1989) is faithful to the Tang original and has sweeping views over the Gan River.",
        category: "Historic Landmark",
      },
      {
        name: "Poyang Lake (鄱阳湖)",
        description: "China's largest freshwater lake — 60km from Nanchang. Each winter (November–March) it becomes the world's most important stopover for migratory birds: over 600,000 white cranes, geese, and storks. The Wucheng wetland nature reserve has the best viewing infrastructure.",
        category: "Nature Reserve",
      },
      {
        name: "Bayi Square (八一广场)",
        description: "One of the largest public squares in China — the political and social heart of Nanchang, anchored by a tall Monument to the August 1st Uprising. The surrounding area has good restaurants and the city's main commercial streets.",
        category: "Urban Square",
      },
    ],
    food: [
      {
        name: "Nanchang Mixed Rice Noodles (南昌拌粉)",
        nameZh: "南昌拌粉",
        description: "Thin, chewy rice noodles dressed with chilli oil, soy, vinegar, pickled vegetables, and spring onion — eaten dry rather than in soup. The definitive Nanchang breakfast, consumed at street stalls with a bowl of broth on the side. Every stall has a slightly different balance of flavours.",
        must: true,
      },
      {
        name: "Ceramic Crock Soup (瓦罐煨汤)",
        nameZh: "瓦罐煨汤",
        description: "Nanchang's most famous dish — pork, chicken, or lotus root simmered for 6–8 hours in individual ceramic crocks sealed with ash paste. The long, slow cooking produces a soup of exceptional depth. Lao Cang Fang (老仓坊) on Shengdu Road is the classic address.",
        must: true,
      },
      {
        name: "Three Cups Chicken (三杯鸡)",
        nameZh: "三杯鸡",
        description: "A Jiangxi classic — chicken braised in equal parts soy sauce, sesame oil, and rice wine (the 'three cups') until the sauce caramelises and the chicken is deeply glazed. Often finished with fresh Thai basil. Widely imitated across China but best in Jiangxi.",
        must: true,
      },
    ],
    bestSeason: "Autumn (October–November) for Poyang Lake bird migration beginning and pleasant temperatures. Winter (November–March) for peak bird watching at Poyang Lake. Spring is also good. Summer is hot and humid.",
    transportation: [
      {
        mode: "🚄 Major HSR hub",
        details: "Nanchang West Station: Shanghai ~3.5 hours, Beijing ~5 hours, Guangzhou ~3 hours, Wuhan ~1.5 hours. Nanchang is the main HSR gateway to Jiangxi — all regional rail routes connect here.",
      },
      {
        mode: "🚄 To Jingdezhen",
        details: "Nanchang to Jingdezhen North: ~1 hour. The fastest connection to the porcelain city.",
      },
    ],
    accommodation: "Business hotels cluster near Nanchang West Station and Bayi Square (¥200–600/night). The old city near Tengwang Pavilion has more atmospheric options. Nanchang is primarily a transit hub for Jiangxi rather than a destination in itself.",
    travelTips: [
      "Nanchang is best used as a base for Jiangxi day trips — Jingdezhen (1 hour), Lu Shan (1.5 hours), and Poyang Lake (1 hour) are all within easy HSR or bus range.",
      "For Poyang Lake birds: hire a local guide through Wucheng Town wetland reserve (November–March). The cranes arrive in November and peak in December–January.",
      "Tengwang Pavilion is free to enter on several national holidays. The 5pm closing time is strictly enforced — arrive by 3pm to allow adequate time.",
    ],
    dayTrips: [
      {
        name: "Jingdezhen",
        nameZh: "景德镇",
        distance: "~1h by high-speed rail",
        description: "The porcelain capital — imperial kiln museum, living ceramics workshops, and the Sunday Pottery Market.",
        whyGo: "Nanchang is the closest major HSR hub to Jingdezhen, making it the natural base for a Jiangxi ceramics trip.",
      },
      {
        name: "Mount Lu",
        nameZh: "庐山",
        distance: "~1.5h by HSR + bus",
        description: "A UNESCO mountain of poets and philosophers — colonial villas, sea-of-clouds, and the Three-Step Falls waterfall.",
        whyGo: "Lu Shan is one of China's most culturally layered mountains and very accessible from Nanchang.",
      },
    ],
  },

  // ── TIBET (XIZANG) ────────────────────────────────────────────────────────────

  lhasa: {
    id: "lhasa",
    nameZh: "拉萨",
    nameEn: "Lhasa",
    province: "xizang",
    provinceZh: "西藏自治区",
    tagline: "The Forbidden City of the Himalayas",
    description:
      "Lhasa is one of the world's great cities — a place of genuine spiritual weight, extraordinary architecture, and landscapes of immense drama. The Potala Palace, rising 13 stories from a rocky outcrop above the Lhasa Valley, is among the most imposing buildings ever constructed. The Jokhang Temple is the most sacred site in Tibetan Buddhism. The Barkhor circuit around the Jokhang has been walked by pilgrims for 1,400 years. And behind everything looms the Tibetan plateau — 4,500m of sky and silence.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Potala Palace", "Jokhang Temple (most sacred in Tibet)", "Barkhor pilgrim circuit", "3,650m altitude", "Sera Monastery monk debates"],
    attractions: [
      {
        name: "Potala Palace (布达拉宫)",
        description: "The defining monument of Tibet — a 13-storey, 1,000-room palace-monastery rising 117m from Marpo Ri hill. Built from the 7th century and expanded to its current form by the 5th Dalai Lama in 1645. The Red Palace contains the jewelled tombs of eight Dalai Lamas. Daily visitors are strictly capped at 2,300 — book tickets online at least 3–7 days ahead.",
        category: "UNESCO Heritage",
      },
      {
        name: "Jokhang Temple (大昭寺)",
        description: "The most sacred temple in Tibetan Buddhism — built in 647 AD to house a gold statue of the young Sakyamuni Buddha brought from Tang dynasty China as a princess's dowry. The Jowo Rinpoche statue inside is Tibet's most venerated object. The rooftop gilded figures and the view over the Barkhor pilgrim circuit are extraordinary. Free entry to the square; temple interior ¥85.",
        category: "Sacred Temple",
      },
      {
        name: "Barkhor Circuit (八廓街)",
        description: "A 800m pilgrim circuit around the Jokhang Temple — walked clockwise by Tibetan pilgrims in an unending stream from dawn to dusk. Prayer wheels, prostrating devotees, incense smoke, and the smells of yak butter and spiced meat create an atmosphere unlike anywhere else on earth. The surrounding market has the best Tibetan handicrafts at fair prices.",
        category: "Cultural Circuit",
      },
      {
        name: "Sera Monastery Monk Debates (色拉寺辩经)",
        description: "Every afternoon at 3pm (except Sundays), the monks of Sera Monastery gather in a courtyard to debate Buddhist philosophy — a 600-year-old tradition involving vigorous clapping, pointing, and shouted arguments. Free to observe. One of the most vivid and accessible windows into living Tibetan Buddhism.",
        category: "Living Tradition",
      },
      {
        name: "Drepung Monastery (哲蚌寺)",
        description: "Once the world's largest monastery, housing 10,000 monks at its peak. The whitewashed labyrinth of chapels, assembly halls, and monk quarters climbing the hillside is extraordinary to explore. The annual Shoton Festival (butter sculpture festival) display is held here in late August.",
        category: "Monastery",
      },
    ],
    food: [
      {
        name: "Tsampa (糌粑)",
        nameZh: "糌粑",
        description: "Roasted barley flour — the foundation of the Tibetan diet for millennia. Mixed with yak butter tea and sometimes dried cheese into a dough ball and eaten as a staple meal. The taste is nutty, slightly smoky, and deeply satisfying at altitude.",
        must: true,
      },
      {
        name: "Yak Butter Tea (酥油茶)",
        nameZh: "酥油茶",
        description: "Churned tea with yak butter, salt, and sometimes milk — creamy, rich, and deeply warming at 3,650m. The taste is savory and fatty, unlike any other tea in the world. Served in a long wooden churn and poured into bowls. Tibetan hospitality requires you drink at least one cup when offered.",
        must: true,
      },
      {
        name: "Momos (藏式饺子)",
        nameZh: "藏式饺子",
        description: "Tibetan dumplings — yak meat, vegetable, or cheese fillings in thick dough wrappers, steamed or fried. The yak beef version with wild mountain herbs is the most distinctively Tibetan. Available at every restaurant in the Barkhor area.",
        must: true,
      },
      {
        name: "Thukpa (藏面)",
        nameZh: "藏面",
        description: "Tibetan noodle soup — hand-pulled noodles in a yak bone broth with vegetables and sometimes dried meat. A warming staple at altitude, available at small Tibetan eateries throughout Lhasa.",
        must: false,
      },
    ],
    bestSeason: "May–October for the clearest skies and most accessible roads. April and May have mild temperatures and fewer tourists. The Saga Dawa Festival (4th lunar month) and Shoton Festival (late August) are the most spectacular cultural events. October–November is still good with golden light and lower crowds. Winter (December–March) is cold but peaceful and eerily beautiful.",
    transportation: [
      {
        mode: "✈️ Lhasa Gonggar Airport (LXA)",
        details: "Direct flights from Chengdu (~2 hours), Beijing (~5 hours), Chongqing, Xi'an, and Guangzhou. The airport is 65km from Lhasa city — airport bus ¥25, taxi ¥200.",
      },
      {
        mode: "🚂 Qinghai–Tibet Railway",
        details: "The world's highest railway — Xining to Lhasa (21 hours, ¥800–1,500 soft sleeper). The overnight journey crosses the Tanggula Pass at 5,072m and offers extraordinary plateau scenery. Book months ahead for peak season.",
      },
      {
        mode: "📋 Tibet Travel Permit (REQUIRED)",
        details: "All foreign visitors must obtain a Tibet Travel Permit (TTB) through a registered Tibetan travel agency BEFORE entering Tibet. Cannot be obtained independently. Cost: ¥200–400 plus agency fee. Apply at least 2–3 weeks ahead. The agency arranges guided tours, which are mandatory for foreign visitors.",
      },
    ],
    accommodation: "The Barkhor area in the old city is the most atmospheric location — traditional Tibetan-style guesthouses and hotels (¥200–800/night) within walking distance of all major sights. Modern hotels near Potala Palace offer comfort and views (¥400–1,200/night). Book through your tour agency as part of the Tibet permit package.",
    travelTips: [
      "Altitude sickness is real and serious at 3,650m. Plan 2 full rest days upon arrival before any physical activity. Stay hydrated, avoid alcohol for the first 48 hours, and ascend gradually. Diamox (acetazolamide) can help — consult a doctor before your trip.",
      "Potala Palace tickets are strictly capped at 2,300/day and sell out weeks ahead in peak season. Your tour agency should book them as part of your permit package.",
      "The Barkhor market is excellent for Tibetan handicrafts — thangka paintings, prayer flags, silver jewellery, and singing bowls. Negotiate calmly; initial prices are typically 3–5x the fair price.",
      "Photography restrictions apply inside all major temples — no photos of the main sacred statues or monks in prayer. Outside the temples and on the Barkhor circuit, photography is generally fine.",
      "Tibet travel requires a licensed guide at all times — this is not a hardship. Good guides transform the experience, providing context and access that independent travellers cannot get.",
    ],
    dayTrips: [
      {
        name: "Namtso Lake",
        nameZh: "纳木错",
        distance: "~4h north by car",
        description: "One of the world's highest saltwater lakes at 4,718m — the turquoise water against snow-capped mountains and enormous skies is one of Tibet's greatest spectacles. An overnight stay is strongly recommended.",
        whyGo: "The most accessible of Tibet's great sacred lakes from Lhasa — and one of the most beautiful places on Earth.",
        adminNote: "At 4,718m altitude, acclimatise in Lhasa for at least 3 days before visiting Namtso.",
      },
      {
        name: "Shigatse & Tashilhunpo",
        nameZh: "日喀则 & 扎什伦布寺",
        distance: "~3h west by car or bus",
        description: "The second city of Tibet and home to Tashilhunpo Monastery — the seat of the Panchen Lama and one of Tibet's greatest and most intact monastery complexes.",
        whyGo: "The natural extension of a Lhasa trip — offering a different and equally remarkable chapter of Tibetan Buddhist culture.",
      },
    ],
  },

  shigatse: {
    id: "shigatse",
    nameZh: "日喀则",
    nameEn: "Shigatse",
    province: "xizang",
    provinceZh: "西藏自治区",
    tagline: "Seat of the Panchen Lama",
    description:
      "Tibet's second city sits at 3,836m in the Tsangpo River valley, surrounded by the highest mountain ranges on earth. Shigatse is dominated by Tashilhunpo Monastery — one of Tibet's six great Gelugpa monasteries and the traditional seat of the Panchen Lama. The city is the gateway to Mount Everest Base Camp and the jumping-off point for the legendary Friendship Highway to Nepal. The old Shigatse Dzong (fortress) above the city echoes the Potala on a smaller scale.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Tashilhunpo Monastery", "Gateway to Everest Base Camp", "Friendship Highway to Nepal", "Panchen Lama's seat", "Himalayan panoramas"],
    attractions: [
      {
        name: "Tashilhunpo Monastery (扎什伦布寺)",
        description: "Founded in 1447 by the First Dalai Lama and the traditional seat of the Panchen Lama — one of Tibet's most intact and active monastery complexes. The Chapel of Maitreya houses a 26m-tall gilded statue of the future Buddha, the largest gilded statue in the world. The monastery city houses several hundred monks and is genuinely vibrant with religious activity.",
        category: "Monastery",
      },
      {
        name: "Shigatse Dzong (日喀则宗山)",
        description: "The reconstructed hilltop fortress above the city — modelled on the Potala but on a smaller scale. The views over the Shigatse valley and toward the Himalayas from the fortress walls are excellent, particularly at golden hour.",
        category: "Historic Fortress",
      },
      {
        name: "Everest Base Camp Route",
        description: "Shigatse is the main staging point for drives to the Tibet-side Everest Base Camp (5,200m) — a full day's drive through remote Himalayan landscapes via Gyantse. The views of Everest and the surrounding peaks from the Rongbuk Monastery area are incomparable.",
        category: "Adventure",
      },
      {
        name: "Shigatse Market",
        description: "A traditional Tibetan bazaar near the monastery — vegetables, dried meats, yak butter, thangka paintings, and handicrafts in a market atmosphere that has changed little in centuries.",
        category: "Market",
      },
    ],
    food: [
      {
        name: "Shigatse Tsampa Bread (糌粑饼)",
        nameZh: "糌粑饼",
        description: "A local variant of tsampa formed into flatbreads and cooked over dried yak dung — slightly denser and more flavourful than the standard tsampa porridge. Eaten with yak butter and salt.",
        must: true,
      },
      {
        name: "Yak Meat Skewers (牦牛肉串)",
        nameZh: "牦牛肉串",
        description: "Dried or fresh yak meat skewered and grilled — the flavour is lean, intense, and slightly gamey, with a mineral richness from the high-altitude pasture diet. Available at the night market near the monastery.",
        must: true,
      },
    ],
    bestSeason: "May–October for the clearest mountain views and best road conditions to Everest. The Tibet Travel Permit and a licensed guide are mandatory (same requirements as Lhasa).",
    transportation: [
      {
        mode: "🚌 Bus or car from Lhasa",
        details: "Lhasa to Shigatse: ~3 hours by bus (¥50) or hired car (¥400–600). Most visitors come as part of a Lhasa-Shigatse-Gyantse circuit with a licensed tour agency.",
      },
      {
        mode: "🚂 Lhasa–Shigatse Railway",
        details: "A short railway line connects Lhasa to Shigatse (3 hours, ~¥100). Scenic but slower than the road.",
      },
    ],
    accommodation: "Mid-range hotels near Tashilhunpo Monastery (¥200–600/night). Most visitors stay 1 night as part of a wider Tibet circuit. Your tour agency will arrange accommodation.",
    travelTips: [
      "Tashilhunpo is best visited in the morning when morning prayers and monks going about their duties create the most authentic atmosphere. Arrive at 9am and allow 3 hours.",
      "The Everest Base Camp route from Shigatse requires an additional Alien's Travel Permit beyond the standard Tibet permit — arrange through your tour agency before departure from Lhasa.",
      "At 3,836m, Shigatse is slightly lower than Lhasa — acclimatise in Lhasa for at least 3 days before visiting.",
    ],
    dayTrips: [
      {
        name: "Everest Base Camp",
        nameZh: "珠峰大本营",
        distance: "~5h south by car",
        description: "The Tibet-side base camp at 5,200m — the closest most people will ever get to the world's highest peak. The Rongbuk Monastery below the camp is the world's highest monastery.",
        whyGo: "Standing in the shadow of Everest on the Tibetan plateau is one of the defining travel experiences on Earth.",
        adminNote: "Requires an additional Alien's Travel Permit beyond the standard Tibet permit. Altitude (5,200m) requires careful acclimatisation — do not attempt without 5+ days of plateau acclimatisation.",
      },
    ],
  },

  nyingchi: {
    id: "nyingchi",
    nameZh: "林芝",
    nameEn: "Nyingchi",
    province: "xizang",
    provinceZh: "西藏自治区",
    tagline: "Tibet's secret garden",
    description:
      "Nyingchi is the green paradox of Tibet — while most of the plateau is a vast treeless expanse at 4,000m+, Nyingchi's deep Yarlung Tsangpo River gorges create a moist, forested microclimate at only 2,900m. The result is the deepest canyon on Earth (the Yarlung Tsangpo Grand Canyon, deeper than the Grand Canyon), Himalayan peach blossom forests that explode pink each March, and a landscape that looks more like Norway or Bhutan than the Tibetan plateau most people imagine.",
    image: "https://images.unsplash.com/photo-1522205408450-add114ad53fe?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1522205408450-add114ad53fe?w=1200&h=600&fit=crop&auto=format",
    highlights: ["World's deepest canyon", "Himalayan peach blossom season", "Lowest altitude in Tibet (2,900m)", "Primeval cypress forests", "Yarlung Tsangpo River"],
    attractions: [
      {
        name: "Peach Blossom Valley (桃花沟)",
        description: "Every March, the Yarlung Tsangpo valley below Nyingchi transforms into a sea of pink and white peach blossoms — Himalayan wild peach trees flowering against snowcapped mountains. The Bomi and Medog county areas have the most spectacular displays. The annual Nyingchi Peach Blossom Festival (mid-March) draws thousands of visitors.",
        category: "Seasonal Spectacle",
      },
      {
        name: "Yarlung Tsangpo Grand Canyon (雅鲁藏布大峡谷)",
        description: "The world's deepest canyon — 504km long, with a maximum depth of 6,009m measured from the surrounding peaks to the river below. The inner gorge is still largely inaccessible but the outer canyon walls and viewpoints near Pai Town offer extraordinary perspectives. The river here drops 2,200m in 200km — among the most powerful river sections on Earth.",
        category: "Natural Wonder",
      },
      {
        name: "Basum Tso Lake (巴松错)",
        description: "A jewel-green glacial lake surrounded by snow mountains and cypress forest, with a small island temple connected by a chain bridge — one of the most beautiful lake settings in Tibet. The lakeside walk and boat tours are popular with Chinese tourists but the scenery justifies the crowds.",
        category: "Scenic Lake",
      },
      {
        name: "Ancient Cypress Forest (古柏林)",
        description: "A grove of ancient Tibetan cypress trees, some over 3,000 years old — one of the oldest and most intact temperate forest groves in Asia. The atmospheric quality of walking beneath 30m trees draped in moss at 3,000m altitude is unlike anywhere else.",
        category: "Nature",
      },
    ],
    food: [
      {
        name: "Nyingchi Highland Barley Beer (青稞啤酒)",
        nameZh: "青稞啤酒",
        description: "Beer brewed from highland barley grown in the Nyingchi valley — a modern commercial product unique to this region, with a slightly nutty, wheaty flavour distinct from lowland beers. The Nyingchi Glacier Beer (尼洋啤酒) is the local brand.",
        must: false,
      },
      {
        name: "Gyalmo Rice (工布江达米饭)",
        nameZh: "工布江达米饭",
        description: "Nyingchi is one of the only parts of Tibet warm enough to grow rice — the short-grain rice from the lower valleys has a distinctive flavour and is prized throughout Tibet. Served alongside yak stews at local restaurants.",
        must: true,
      },
      {
        name: "Sichuan Hot Pot (川式火锅)",
        nameZh: "川式火锅",
        description: "A Nyingchi paradox — the town has a large Sichuan migrant community, and excellent Sichuan hot pot is widely available at low prices. A warm, spicy meal after hiking in the canyon is intensely satisfying.",
        must: false,
      },
    ],
    bestSeason: "March for the spectacular peach blossom — the single most beautiful seasonal event in Tibet. October–November for golden autumn foliage along the canyon. Summer (June–August) is lush and green. Tibet Travel Permit required year-round.",
    transportation: [
      {
        mode: "✈️ Nyingchi Mainling Airport (LZY)",
        details: "Direct flights from Chengdu (~1.5 hours), Lhasa (~30 minutes), and a few other cities. The airport is 50km from Nyingchi town — shuttle bus ¥25.",
      },
      {
        mode: "🚌 From Lhasa",
        details: "Lhasa to Nyingchi: ~4 hours by highway (with tunnel). Most visitors come as part of a Lhasa–Nyingchi loop with a licensed tour agency.",
      },
    ],
    accommodation: "Nyingchi town has comfortable mid-range hotels (¥250–700/night). The Basum Tso lake area has resort hotels (¥400–1,200/night). Tibet Travel Permit required.",
    travelTips: [
      "Nyingchi's lower altitude (2,900m vs. 3,650m in Lhasa) makes it a gentler introduction to the Tibetan plateau — many itineraries fly into Nyingchi first, acclimatise for 2 days, then proceed to Lhasa.",
      "Peach blossom season timing: typically the second and third weeks of March, but varies by up to 2 weeks each year. The Tibet Tourism Bureau publishes annual bloom forecasts.",
      "The Yarlung Tsangpo Grand Canyon outer rim viewpoints are accessible by car. The inner gorge is a multi-day expedition requiring special permits.",
    ],
  },

  namtso: {
    id: "namtso",
    nameZh: "纳木错",
    nameEn: "Namtso Lake",
    province: "xizang",
    provinceZh: "西藏自治区",
    tagline: "The Heavenly Lake at the roof of the world",
    description:
      "Namtso — 'Heavenly Lake' in Tibetan — is one of the world's highest and most sacred saltwater lakes, sitting at 4,718m on the Changtang plateau north of Lhasa. The turquoise water against the backdrop of the Nyenchen Tanglha mountain range (peaks above 7,000m) and the enormous Tibetan sky creates a landscape of almost hallucinatory beauty. Tibetan pilgrims circumambulate the 70km shoreline. Nomadic herders still graze their yaks on the surrounding grassland. It is as close as you will get to the edge of the world.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?w=1200&h=600&fit=crop&auto=format",
    highlights: ["4,718m altitude", "World's highest saltwater lake", "Nyenchen Tanglha mountain backdrop", "Tibetan nomad culture", "Milky Way above the plateau"],
    attractions: [
      {
        name: "Lake Shoreline at Tashi Peninsula",
        description: "The Tashi Dor peninsula on the eastern shore is the main access point — ancient rock carvings, a small monastery, and the best panoramic lake views. The peninsula's prayer flag forests and meditation caves used by Milarepa (Tibet's most celebrated yogi) make this a genuine pilgrimage site.",
        category: "Sacred Site",
      },
      {
        name: "Sunrise & Milky Way",
        description: "Namtso's high altitude and remoteness mean almost zero light pollution. Overnight stays allow two extraordinary celestial events: the pre-dawn Milky Way blazing directly over the lake surface, and the sunrise turning the Nyenchen Tanglha peaks gold while the lake shifts from silver to cobalt.",
        category: "Natural Spectacle",
      },
      {
        name: "Yak Nomad Encounters",
        description: "The Changtang grasslands around Namtso are home to Tibetan nomadic herders who move seasonally between pastures. With a guide, it is possible to visit a nomad camp, drink fresh yak milk, and learn about a way of life virtually unchanged for centuries.",
        category: "Cultural Experience",
      },
    ],
    food: [
      {
        name: "Freshly Churned Yak Butter Tea",
        nameZh: "现打酥油茶",
        description: "At the lakeside guesthouses, yak butter is still churned fresh each morning — the resulting tea is incomparably richer than the mass-produced version sold in Lhasa. Accept every cup offered.",
        must: true,
      },
      {
        name: "Instant Noodles at Altitude",
        nameZh: "高原泡面",
        description: "A Namtso rite of passage — instant noodles at 4,718m in a canvas guesthouse, cold, slightly altitude-sick, and enormously grateful for something hot. Guesthouses near the peninsula sell basic supplies.",
        must: false,
      },
    ],
    bestSeason: "June–September when the road is reliably passable and temperatures are above freezing at night. The lake is completely frozen and the road often closed November–May. An overnight stay is strongly recommended — the dawn light and night sky justify the extra time and cost. Tibet Travel Permit required.",
    transportation: [
      {
        mode: "🚗 Car from Lhasa",
        details: "Lhasa to Namtso: ~4 hours by hired car over the Nyenchen Tanglha pass (4,950m). Most tour agencies offer a 2-day Namtso excursion from Lhasa (¥800–1,500 per person including transport, guide, and basic accommodation).",
      },
    ],
    accommodation: "Basic canvas guesthouses and yurt camps on the Tashi Peninsula (¥50–150/bed). Facilities are minimal — bring warm sleeping clothes, even in summer. The experience is the point.",
    travelTips: [
      "Acclimatise in Lhasa for a minimum of 3 days before visiting Namtso. The 1,000m elevation gain from Lhasa to the lake crosses a high pass — altitude sickness at 4,718m is a real risk even for visitors who feel fine in Lhasa.",
      "Bring warm layers regardless of the season — temperatures drop to near freezing after sunset even in summer. Wind is constant and intense.",
      "The Nyenchen Tanglha pass en route (4,950m) has its own spectacular views — ask your driver to stop for photographs.",
    ],
  },

  // ── XINJIANG ──────────────────────────────────────────────────────────────────

  kashgar: {
    id: "kashgar",
    nameZh: "喀什",
    nameEn: "Kashgar",
    province: "xinjiang",
    provinceZh: "新疆维吾尔自治区",
    tagline: "Where the Silk Road converged",
    description:
      "Kashgar is the most Central Asian city in China — a Uyghur cultural heartland at the foot of the Pamir Mountains where China, Central Asia, Afghanistan, and Pakistan converge. For 2,000 years it was the most important trading post on the Silk Road, where merchants from east and west exchanged silk, spices, jade, and horses. The Old City — a dense warren of mud-brick lanes, domed bazaars, and carved wooden doorways — preserves the physical character of that world. The Sunday livestock market is the largest in Central Asia.",
    image: "https://images.unsplash.com/photo-1567634698-89e6da2e8c6d?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1567634698-89e6da2e8c6d?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Silk Road crossroads", "Old City mud-brick lanes", "Sunday livestock market", "Id Kah Mosque", "Karakul Lake day trip"],
    attractions: [
      {
        name: "Kashgar Old City (喀什老城)",
        description: "A UNESCO-recommended historic district of 200,000+ people living in a largely intact Central Asian mud-brick city — winding lanes barely wide enough for two people, carved wooden doors, domed ovens, and craftsmen working in the same workshops their families have occupied for centuries. The most authentic surviving Silk Road urban environment in China.",
        category: "Historic District",
      },
      {
        name: "Id Kah Mosque (艾提尕尔清真寺)",
        description: "The largest mosque in China — a magnificent yellow-and-white building that can hold 20,000 worshippers. Built in 1442 and expanded repeatedly, it is the spiritual centre of Kashgar. Non-Muslim visitors may enter outside prayer times (¥25). The Friday prayer gathering draws thousands from the surrounding countryside.",
        category: "Sacred Site",
      },
      {
        name: "Sunday Livestock Market (牲畜大巴扎)",
        description: "The largest livestock market in Central Asia — held every Sunday morning on the outskirts of the city. Thousands of animals (horses, sheep, cattle, yaks, donkeys) are bought and sold by Uyghur, Kyrgyz, and Tajik herders. The colour, chaos, and trading energy are extraordinary. Best arrived at 8am.",
        category: "Market",
      },
      {
        name: "Abakh Khoja Mausoleum (香妃墓)",
        description: "An extraordinary 17th-century Uyghur-style mausoleum with brilliant blue tile domes — the most impressive Islamic architectural monument in China. The five-domed main chamber contains the tombs of the Khoja family, including the woman later romanticised as the 'Fragrant Concubine' of the Qianlong Emperor.",
        category: "Historic Monument",
      },
      {
        name: "Karakul Lake (卡拉库里湖)",
        description: "A high-altitude lake (3,600m) 200km west of Kashgar at the foot of Muztagh Ata (7,546m) — the turquoise water perfectly reflects the surrounding Pamir peaks. Kyrgyz nomads graze yaks and camels on the shoreline. One of the most dramatic landscapes in western China.",
        category: "Scenic Lake",
      },
    ],
    food: [
      {
        name: "Hand-Pulled Laghman (拉条子)",
        nameZh: "拉条子",
        description: "The quintessential Uyghur noodle — thick, chewy, hand-pulled strands tossed with stir-fried lamb, peppers, tomatoes, and cumin. The Kashgar version is richer and more fragrant with Central Asian spices than the Xinjiang versions found elsewhere in China.",
        must: true,
      },
      {
        name: "Polo Rice (抓饭)",
        nameZh: "抓饭",
        description: "Uyghur pilaf — lamb, carrots, and long-grain rice cooked together in a large pot, eaten by hand (traditionally) from a communal dish. The lamb fat renders into the rice and the carrots add sweetness. The definitive Central Asian rice preparation.",
        must: true,
      },
      {
        name: "Uyghur Nang Bread (馕)",
        nameZh: "馕",
        description: "Central Asian flatbread baked in a tandoor oven — dimpled, sesame-studded, and slightly charred at the edges. Eaten with everything, sold warm from the oven at bakeries throughout the old city. The sesame nang is the most flavourful variety.",
        must: true,
      },
      {
        name: "Roast Lamb (烤全羊)",
        nameZh: "烤全羊",
        description: "Whole lamb slow-roasted on a spit over coal — the skin crisped and fragrant with cumin and chilli. The best versions in Kashgar come from small restaurants near the livestock market. Order ahead — a whole lamb takes 3–4 hours.",
        must: false,
      },
    ],
    bestSeason: "April–May and September–October for mild temperatures and the best conditions for Karakul Lake. Summer (June–August) is hot and the fruit markets peak with melons and grapes. Winters are cold but the Old City is uncrowded. The Friday prayer at Id Kah Mosque is a weekly spectacle worth building an itinerary around.",
    transportation: [
      {
        mode: "✈️ Kashgar Airport (KHG)",
        details: "Direct flights from Urumqi (~2 hours daily), Beijing (~5.5 hours), and several other cities. The airport is 15km from the old city — taxi ¥30–40.",
      },
      {
        mode: "🚄 High-speed rail from Urumqi",
        details: "Urumqi to Kashgar by new HSR: ~5.5 hours (opened 2024). Previously a 24-hour overnight train journey — the HSR has transformed accessibility.",
      },
    ],
    accommodation: "Old City guesthouses in traditional courtyard houses are the most atmospheric option (¥200–500/night). Modern hotels near the Renmin Square area (¥200–600/night). Staying in the Old City is essential for the dawn and evening atmosphere.",
    travelTips: [
      "The Sunday livestock market starts at 7am and winds down by 11am — arrive early for the full trading energy. Wear shoes you don't mind getting muddy.",
      "Old City exploration is best at dawn (6–8am) and after 5pm — the midday heat and tour groups make the lanes uncomfortable in between.",
      "Karakul Lake day trip: hire a car in Kashgar (¥400–600 for a full day including waiting time). The drive itself through the Pamirs is spectacular — allow 8–10 hours total.",
      "Respect Muslim customs: dress modestly in the Old City and mosques (cover shoulders and knees), avoid photography during prayers, and be discreet about food and drink during Ramadan.",
    ],
    dayTrips: [
      {
        name: "Karakul Lake & Muztagh Ata",
        nameZh: "卡拉库里湖 & 慕士塔格峰",
        distance: "~3h west by car (Karakoram Highway)",
        description: "A high-altitude lake at 3,600m with the 7,546m Muztagh Ata reflected in its surface — one of the most dramatic mountain lake settings in the world.",
        whyGo: "The Karakoram Highway drive and Karakul Lake together form the most spectacular day trip from Kashgar.",
      },
    ],
  },

  urumqi: {
    id: "urumqi",
    nameZh: "乌鲁木齐",
    nameEn: "Urumqi",
    province: "xinjiang",
    provinceZh: "新疆维吾尔自治区",
    tagline: "The world's most continental city",
    description:
      "Urumqi holds a geographical record that few cities can claim: it is the city furthest from any ocean on Earth — 2,250km from the nearest coastline. The capital of Xinjiang, it is China's most ethnically diverse city, with Uyghur, Han, Kazakh, Hui, and dozens of other communities creating a unique cultural mix. The Xinjiang Regional Museum holds one of the world's most extraordinary collections of ancient mummies — including the 3,800-year-old 'Beauty of Loulan.' And Heavenly Lake, 110km to the east, is one of the most beautiful alpine lakes in Asia.",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94815b6?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1573408301185-9519f94815b6?w=1200&h=600&fit=crop&auto=format",
    highlights: ["World's most continental city", "Xinjiang mummies collection", "Heavenly Lake alpine scenery", "Grand Bazaar of Xinjiang", "Kazakh nomad culture"],
    attractions: [
      {
        name: "Xinjiang Regional Museum (新疆维吾尔自治区博物馆)",
        description: "One of China's most extraordinary regional museums — the centrepiece is a collection of exceptionally preserved 2,000–4,000 year-old mummies from the Tarim Basin, including the 'Beauty of Loulan' (3,800 years old) and the 'Cherchen Man' (3,000 years old). Their Caucasian features, intact clothing, and excellent preservation make them among the most remarkable archaeological finds in Asia.",
        category: "Museum",
      },
      {
        name: "Heavenly Lake (天山天池)",
        description: "A pristine alpine lake at 1,910m on the slopes of Bogda Peak (5,445m) — deep blue water surrounded by spruce forest and snow-capped peaks. A day trip from Urumqi by bus (~2 hours). The lake has been sacred to local people for centuries; Kazakh nomads graze horses on the surrounding meadows.",
        category: "Natural Wonder",
      },
      {
        name: "International Grand Bazaar (国际大巴扎)",
        description: "The largest bazaar in Central Asia — a purpose-built shopping complex in traditional Central Asian style, with 100+ shops selling Uyghur food, spices, silk, carpets, and handicrafts. The Uyghur restaurant quarter on the upper floors serves the best laghman and polo in the city.",
        category: "Market",
      },
      {
        name: "Erlaoying Bazaar (二道桥大巴扎)",
        description: "The authentic local bazaar district east of the Grand Bazaar — more chaotic, more local, and more interesting than the tourist bazaar. The dried fruit and nut shops alone are worth the visit: dozens of varieties of raisins, walnuts, dried apricots, and figs from across Xinjiang.",
        category: "Market",
      },
    ],
    food: [
      {
        name: "Big Plate Chicken (大盘鸡)",
        nameZh: "大盘鸡",
        description: "Xinjiang's most famous dish — a massive platter of braised chicken, potatoes, green and red peppers in a spicy, fragrant sauce, served over thick hand-pulled noodles. The dish is enormous (designed for 3–4 people) and the noodles at the bottom absorb all the braising liquid.",
        must: true,
      },
      {
        name: "Xinjiang Lamb Skewers (羊肉串)",
        nameZh: "羊肉串",
        description: "The original chuanr — Xinjiang-style lamb skewers grilled over charcoal with cumin and dried chilli. The lamb from Xinjiang's pastured sheep is markedly sweeter and less gamey than elsewhere. Eaten standing at a street grill, the whole experience of ordering by the handful is part of the pleasure.",
        must: true,
      },
      {
        name: "Dried Fruit & Nuts",
        nameZh: "新疆干果",
        description: "Xinjiang produces 95% of China's dried fruit and nut output — the raisins (especially Turpan green and black), walnuts, figs, apricots, and Hami melons are incomparably fresh and sweet when bought from Urumqi's bazaars directly. Buy in bulk; prices are a fraction of what the same products cost elsewhere in China.",
        must: true,
      },
      {
        name: "Sanzi (散子)",
        nameZh: "散子",
        description: "Deep-fried twisted noodle snacks — crispy, savoury, and eaten as a snack throughout the day. A Xinjiang street staple found at every bazaar, in two varieties: fine (细) and coarse (粗).",
        must: false,
      },
    ],
    bestSeason: "May–September for the best temperatures and the Heavenly Lake visit. Winter is bitterly cold (down to −20°C) but the city functions year-round. June–August for Xinjiang's spectacular fruit season — street stalls overflow with watermelons, Hami melons, and peaches.",
    transportation: [
      {
        mode: "✈️ Urumqi Diwopu International Airport (URC)",
        details: "Well-connected to Beijing (~4 hours), Shanghai (~5 hours), Chengdu, and Central Asian cities. The main international gateway to Xinjiang.",
      },
      {
        mode: "🚄 High-speed rail hub",
        details: "Urumqi is the eastern endpoint of the Xinjiang HSR network — connections to Kashgar (~5.5 hours), Yining/Ili (~3.5 hours), and Turpan (~40 minutes).",
      },
    ],
    accommodation: "Hotels cluster near the International Grand Bazaar and Renmin Square areas (¥200–700/night). The bazaar district has the best food access; Renmin Square is more central.",
    travelTips: [
      "Urumqi operates on Beijing Standard Time (GMT+8) despite being geographically 2 time zones west — effectively, the city's solar noon is at 3pm. Xinjiang locals often informally use 'Xinjiang time' (2 hours behind Beijing) for daily life. Restaurants open for dinner at 9–10pm Beijing time.",
      "The Xinjiang Museum mummies are in the east wing — free to enter, highly recommended. Allow 2 hours for the full museum.",
      "Heavenly Lake day trip: official buses run from Urumqi's long-distance bus station (¥65 return, ~2 hours each way). The park ticket (¥60) is separate. Arrive by 9am to beat the afternoon coach crowds.",
      "Dried fruit and nuts: buy at Erlaoying Bazaar rather than the Grand Bazaar — prices are 30–50% lower for the same quality. Sample before buying; vendors encourage tasting.",
    ],
    dayTrips: [
      {
        name: "Turpan",
        nameZh: "吐鲁番",
        distance: "~40min by high-speed rail",
        description: "The hottest inhabited place in China — ancient ruins, the world's finest raisins, and an ingenious 2,000-year-old underground irrigation system.",
        whyGo: "Turpan is one of China's most historically rich and geographically extreme destinations, and just 40 minutes away.",
      },
    ],
  },

  turpan: {
    id: "turpan",
    nameZh: "吐鲁番",
    nameEn: "Turpan",
    province: "xinjiang",
    provinceZh: "新疆维吾尔自治区",
    tagline: "Ruins, raisins, and 50°C summer heat",
    description:
      "Turpan is one of the most extreme places on Earth — the hottest inhabited location in China, sitting in a depression 154m below sea level where summer temperatures exceed 50°C. Yet this desert basin has been continuously inhabited for 2,000 years, sustained by the karez — an underground irrigation system of over 5,000km of hand-dug channels drawing snowmelt from the Tian Shan mountains. The result: an oasis of vineyards, melons, and ancient ruins in the middle of the Gobi Desert. The Jiaohe and Gaochang ruins are among the best-preserved ancient cities in Asia.",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Jiaohe ancient city ruins", "Karez underground irrigation system", "Grape Valley vineyards", "154m below sea level", "Flaming Mountains"],
    attractions: [
      {
        name: "Jiaohe Ruins (交河故城)",
        description: "One of the best-preserved ancient cities in the world — built entirely from rammed earth on a teardrop-shaped plateau between two rivers, inhabited from 200 BC to the 14th century AD. The 1,650m-long city preserves streets, temples, government buildings, and residential quarters in extraordinary condition. UNESCO nominated. The late afternoon light turns the ruins gold.",
        category: "Ancient Ruins",
      },
      {
        name: "Flaming Mountains (火焰山)",
        description: "The bare red sandstone ridges immortalised in the 16th century novel Journey to the West as a wall of supernatural fire blocking the pilgrims' path. In summer the rock surface reaches 70°C. The corrugated red cliffs do look exactly like flames in the heat shimmer. The roadside thermometer installation is both a tourist attraction and a genuine thermometer.",
        category: "Scenic Area",
      },
      {
        name: "Grape Valley (葡萄沟)",
        description: "A lush valley of vineyards running through the red sandstone ridges — producing the finest raisins and fresh grapes in China, cultivated for 2,000 years using karez irrigation. The grape drying racks (风干房) are beautiful latticed structures that double as architectural landmarks. Visit July–September for fresh grapes.",
        category: "Scenic Valley",
      },
      {
        name: "Karez Irrigation System (坎儿井)",
        description: "2,000 years of hydraulic engineering — over 5,000km of hand-dug underground channels tapping Tian Shan snowmelt below the desert surface, creating an oasis without evaporation losses. The Karez Cultural Park demonstrates the construction methods and scale of this remarkable feat.",
        category: "Historic Engineering",
      },
      {
        name: "Gaochang Ruins (高昌故城)",
        description: "The capital of the Gaochang Kingdom (273–640 AD) and later a Tang dynasty garrison city — a vast rammed-earth complex covering 4km², containing a royal palace, Buddhist temples, and a mint. Electric golf carts carry visitors through the enormous site.",
        category: "Ancient Ruins",
      },
    ],
    food: [
      {
        name: "Turpan Grape (吐鲁番葡萄)",
        nameZh: "吐鲁番葡萄",
        description: "The sweetest grapes in China — the combination of intense desert heat, cool nights, and karez irrigation produces extraordinary sugar content. The Seedless White (无核白), Black Muscat (黑加仑), and Flame (火焰红) varieties are the most prized. Available fresh July–September, dried year-round.",
        must: true,
      },
      {
        name: "Nan Bing Roast Mutton (馕包肉)",
        nameZh: "馕包肉",
        description: "Slow-roasted lamb pieces stuffed inside a hollow nang bread and baked together — the lamb fat soaks into the bread as it cooks. A Turpan speciality that combines the two staples of the Uyghur diet into one extraordinary dish.",
        must: true,
      },
      {
        name: "Hami Melon (哈密瓜)",
        nameZh: "哈密瓜",
        description: "The most famous melon in China — waxy yellow skin, intensely sweet flesh, produced by the same desert sun and karez water as the grapes. The best Hami melons come from the Hami area (3 hours east) but are sold throughout Turpan in summer at ¥5–15 per melon.",
        must: true,
      },
    ],
    bestSeason: "April–May and September–October for bearable temperatures (30–35°C). Summer (June–August) sees temperatures above 45°C — only visit if you embrace extreme heat experiences. Winter (November–March) is cold but uncrowded.",
    transportation: [
      {
        mode: "🚄 High-speed rail from Urumqi",
        details: "Urumqi to Turpan North: ~40 minutes (¥40–60). The most accessible major Xinjiang destination from Urumqi.",
      },
      {
        mode: "🚕 Local transport",
        details: "Turpan's sights are spread over 30km — hire a car or taxi for the day (¥250–400) rather than relying on infrequent buses. Drivers who speak some English can be found at the train station.",
      },
    ],
    accommodation: "Mid-range hotels in Turpan city (¥150–400/night). The Grape Valley area has resort accommodation with vineyard views (¥300–700/night). Turpan is frequently done as a day trip from Urumqi (40 min by HSR).",
    travelTips: [
      "Summer visits require extreme heat preparation — SPF50+ sunscreen, a full-coverage hat, and 3+ litres of water per person. The ruins are exposed with no shade. Visit sites before 10am and after 4pm.",
      "The Jiaohe ruins are more impressive and better preserved than Gaochang — if choosing one, choose Jiaohe. The late afternoon golden light on the rammed earth walls is exceptional.",
      "Raisin buying: buy directly from the Grape Valley drying racks rather than from tourist shops. Prices are lower and the quality is higher. The seedless white raisin is the finest variety.",
    ],
    dayTrips: [
      {
        name: "Urumqi",
        nameZh: "乌鲁木齐",
        distance: "~40min by high-speed rail",
        description: "Xinjiang's capital — the Grand Bazaar, Xinjiang Museum's ancient mummies, and the gateway to Heavenly Lake.",
        whyGo: "Turpan and Urumqi make the natural Xinjiang city pairing — desert ruins and plateau lakes in the same trip.",
      },
    ],
  },

  ili: {
    id: "ili",
    nameZh: "伊犁",
    nameEn: "Ili Valley (Yining)",
    province: "xinjiang",
    provinceZh: "新疆维吾尔自治区",
    tagline: "Lavender fields on the roof of Central Asia",
    description:
      "The Ili Valley in northwestern Xinjiang is China's best-kept secret — a fertile green valley between the Tian Shan mountains, with the most diverse ethnic culture in Xinjiang (Kazakh, Uyghur, Russian, Mongolian, and Han communities), lavender fields that blanket the hillsides purple each June, and some of the most dramatic horseback riding landscapes in Asia. Yining (伊宁) is the valley's main city — a leafy, relaxed provincial town with an extraordinary multicultural character.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Lavender fields (June)", "Sayram Lake alpine scenery", "Kazakh nomad culture", "Narat Grasslands", "Multicultural Yining city"],
    attractions: [
      {
        name: "Sayram Lake (赛里木湖)",
        description: "The highest lake in Xinjiang at 2,073m — brilliant blue-green water surrounded by snow peaks, with Kazakh yurt camps on the shoreline. The most photographed lake in Xinjiang, and accessible as a day trip from Yining.",
        category: "Scenic Lake",
      },
      {
        name: "Narat Scenic Area (那拉提风景区)",
        description: "A vast alpine meadow at 2,000m — the most beautiful grassland landscape in the Tian Shan, with wildflowers, spruce forests, river valleys, and Kazakh nomad camps. Horseback riding through the meadows is the essential activity.",
        category: "Nature & Riding",
      },
      {
        name: "Lavender Fields (薰衣草基地)",
        description: "Ili Valley produces 95% of China's lavender — the purple hillsides near Huocheng County peak in late June, attracting visitors from across the country. The Ili Lavender Festival runs each June with music, food, and farm stays.",
        category: "Seasonal Spectacle",
      },
      {
        name: "Yining Old City (伊宁老城)",
        description: "Yining's old neighbourhoods preserve a remarkable multicultural streetscape — Russian Orthodox churches, Tatar mosques, Kazakh markets, and Uyghur teahouses within a few blocks of each other. The stroll along Jiefang Road and the old Russian residential district is fascinating.",
        category: "Historic District",
      },
    ],
    food: [
      {
        name: "Kazakh Beshbarmak (哈萨克手抓肉)",
        nameZh: "哈萨克手抓肉",
        description: "The ceremonial Kazakh feast dish — boiled lamb or horse served over flat noodles, eaten by hand from a communal platter. The name means 'five fingers.' Reserved for guests and celebrations; arrange through a Kazakh host or cultural tourism operator.",
        must: true,
      },
      {
        name: "Kumiss (马奶酒)",
        nameZh: "马奶酒",
        description: "Fermented mare's milk — a traditional Kazakh beverage, mildly alcoholic, slightly fizzy, and intensely nutritious. Available at yurt camps in summer. An acquired taste that most visitors grow to appreciate over a few cups.",
        must: false,
      },
      {
        name: "Ili Apple (伊犁苹果)",
        nameZh: "伊犁苹果",
        description: "The wild apple forests of the Ili Valley are the genetic origin of all domestic apples in the world — the valley where apples were first cultivated by humans. Local wild and semi-wild apple varieties available September–October have a complexity and tartness distinct from commercial varieties.",
        must: true,
      },
    ],
    bestSeason: "June for lavender; July–August for Narat grassland wildflowers and Kazakh summer festivals; September–October for apple harvest and autumn foliage in the Tian Shan.",
    transportation: [
      {
        mode: "✈️ Yining Airport (YIN)",
        details: "Direct flights from Urumqi (~1 hour), Beijing (~4.5 hours), and Chengdu.",
      },
      {
        mode: "🚄 High-speed rail from Urumqi",
        details: "Urumqi to Yining: ~3.5 hours by new HSR (opened 2024). Transformed access to the valley.",
      },
    ],
    accommodation: "Mid-range hotels in Yining city (¥200–500/night). Kazakh yurt camps in Narat and near Sayram Lake offer the most immersive accommodation (¥150–400/night with meals).",
    travelTips: [
      "Lavender peak timing varies by 2 weeks each year — check the Huocheng County tourism bureau WeChat for real-time bloom updates before booking travel in June.",
      "Narat horseback riding: arrange through the official scenic area (¥100–300/hour) or directly with Kazakh families for a more authentic experience. Half-day and full-day rides are both available.",
      "Yining's multicultural character is best experienced by simply walking the old residential neighborhoods — do not rush the old city exploration.",
    ],
  },

  // ── QINGHAI ───────────────────────────────────────────────────────────────────

  xining: {
    id: "xining",
    nameZh: "西宁",
    nameEn: "Xining",
    province: "qinghai",
    provinceZh: "青海省",
    tagline: "Gateway to the Tibetan plateau",
    description:
      "Xining is the highest provincial capital in China at 2,275m — a crossroads city where the Silk Road met the Tibetan plateau, where Han, Tibetan, Hui Muslim, and Tu minority cultures have coexisted for centuries. The Ta'er Monastery (Kumbum), 25km south, is one of the six great Gelugpa monasteries and the birthplace of Tsongkhapa, founder of Tibetan Buddhism's most influential school. Qinghai Lake — the largest lake in China — is 3 hours west. And the Qinghai–Tibet Railway, the world's highest, departs from Xining.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Ta'er Monastery (birthplace of Tsongkhapa)", "Gateway to Qinghai Lake", "Qinghai-Tibet Railway start", "Hui Muslim food culture", "2,275m plateau city"],
    attractions: [
      {
        name: "Ta'er Monastery (塔尔寺 / 佛教格鲁派圣地)",
        description: "One of the six great Gelugpa Buddhist monasteries — built on the birthplace of Tsongkhapa (1357–1419), the reformer who founded the Yellow Hat sect that produced the Dalai Lamas. The monastery complex of 52 temples covers 450,000m² with extraordinary butter sculpture art (酥油花), yak-butter lamp halls, and resident monks from across the Tibetan plateau. 25km south of Xining; bus or taxi.",
        category: "Sacred Monastery",
      },
      {
        name: "Dongguan Mosque (东关清真大寺)",
        description: "One of the largest mosques in northwest China — a magnificent Tang dynasty-style mosque (despite its Islamic function) that can hold 13,000 worshippers. The building's Chinese-Islamic architectural fusion is remarkable. Xining has a large Hui Muslim population and the mosque is very much a living place of worship.",
        category: "Mosque",
      },
      {
        name: "Qinghai Provincial Museum (青海省博物馆)",
        description: "A good museum covering Qinghai's extraordinary diversity — Tibetan, Hui, Tu, and Mongolian culture alongside neolithic painted pottery and silk road artefacts. Free entry.",
        category: "Museum",
      },
      {
        name: "Huangzhong Wetlands & Xining Night Market",
        description: "Xining's night market along Shengli Road is one of the finest in northwest China — Hui Muslim grilled meats, Tibetan yak butter tea stalls, and Tu minority snacks in a bustling evening street.",
        category: "Food & Culture",
      },
    ],
    food: [
      {
        name: "Niuroumian — Lanzhou Beef Noodle (兰州牛肉面)",
        nameZh: "兰州牛肉面",
        description: "Northwest China's most important noodle — clear beef broth with hand-pulled noodles, thinly sliced beef, radish, and chilli oil. The Xining versions use Qinghai highland beef with a noticeably cleaner, more mineral broth than lowland versions.",
        must: true,
      },
      {
        name: "Roast Whole Lamb (烤全羊)",
        nameZh: "烤全羊",
        description: "Hui Muslim whole lamb roasted on a spit — the Qinghai highland sheep (fed on wild herbs at altitude) produces meat of exceptional quality. Available at Muslim restaurants in the city and especially at the night market.",
        must: true,
      },
      {
        name: "Tsampa Butter Tea (糌粑酥油茶)",
        nameZh: "糌粑酥油茶",
        description: "The Tibetan staple in its Xining form — available at Tibetan restaurants near the Ta'er Monastery. A warming introduction to Tibetan food culture before venturing further onto the plateau.",
        must: false,
      },
      {
        name: "Qinghai Yoghurt (老酸奶)",
        nameZh: "老酸奶",
        description: "Thick, set yoghurt made from yak milk — sold in clay pots at markets and cafes throughout Xining. Much denser and more sour than commercial yoghurt, eaten with honey or preserved fruit.",
        must: true,
      },
    ],
    bestSeason: "May–September for Qinghai Lake rapeseed and pleasant temperatures. The Ta'er Monastery Butter Sculpture Festival (15th day of the first lunar month) is the most spectacular Tibetan art event in the region. Summer is warm and ideal for plateau travel.",
    transportation: [
      {
        mode: "🚄 High-speed rail",
        details: "Xining to Lanzhou: ~1.5 hours. To Xi'an: ~4 hours. To Beijing: ~8 hours. Good HSR connections eastward.",
      },
      {
        mode: "🚂 Qinghai–Tibet Railway",
        details: "The world's highest railway departs Xining for Lhasa (21 hours, crossing 5,072m Tanggula Pass). The overnight journey is one of China's great train experiences — book sleeper tickets 2+ months ahead.",
      },
      {
        mode: "✈️ Xining Caojiabao Airport (XNN)",
        details: "Connections to Beijing, Shanghai, Chengdu, Guangzhou, and several other cities. The airport is 30km from the city — shuttle bus ¥20.",
      },
    ],
    accommodation: "The city centre near Dongguan Mosque and the train station has good mid-range options (¥200–600/night). The Ta'er Monastery area has guesthouses for early morning access to the monastery.",
    travelTips: [
      "Ta'er Monastery is best visited on weekday mornings — weekends attract large Chinese tour groups. The earliest monks' prayer ceremonies begin at 6am; the monastery is atmospherically active until 10am.",
      "The Qinghai–Tibet Railway is one of China's great travel experiences — book the hard sleeper or soft sleeper 2–3 months ahead in peak season. The sunrise over the plateau (around the Kunlun Pass section) is spectacular.",
      "Xining is a good acclimatisation stop before Tibet — spend 2 nights here before boarding the train or flying to Lhasa.",
      "The night market (Shengli Road, 7pm–midnight) is one of northwest China's finest — the combination of Hui Muslim grilled lamb, Tibetan dried meats, and local snacks in one street is unique to Xining.",
    ],
    dayTrips: [
      {
        name: "Qinghai Lake",
        nameZh: "青海湖",
        distance: "~2.5h west by bus or car",
        description: "China's largest lake — brilliant blue-green water ringed by golden rapeseed fields in summer and snow-capped mountains. One of China's most photographed landscapes.",
        whyGo: "The most beautiful natural sight in Qinghai and very accessible from Xining.",
      },
      {
        name: "Ta'er Monastery",
        nameZh: "塔尔寺",
        distance: "~30min south by bus or taxi",
        description: "One of the six great Gelugpa monasteries and the birthplace of Tsongkhapa — extraordinary butter sculpture art and an active monastic community.",
        whyGo: "The most important Tibetan Buddhist site accessible without a Tibet permit, and just outside Xining.",
      },
    ],
  },

  qinghai_lake: {
    id: "qinghai_lake",
    nameZh: "青海湖",
    nameEn: "Qinghai Lake",
    province: "qinghai",
    provinceZh: "青海省",
    tagline: "China's largest lake under an infinite sky",
    description:
      "Qinghai Lake is China's largest lake — a 4,317km² saltwater body at 3,196m altitude, ringed by snow-capped mountains and the vast Tibetan plateau. Each summer, the surrounding hills turn gold with rapeseed flowers, the lake shimmers an intense turquoise-blue under high-altitude light, and migratory birds by the millions gather on the islands. In winter the lake freezes solid and the surrounding grasslands become a pristine white wilderness. It is one of the most visually overwhelming natural landscapes in China.",
    image: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1509099652299-1734748ece27?w=1200&h=600&fit=crop&auto=format",
    highlights: ["China's largest lake", "Summer rapeseed & blue water contrast", "Bird Island (100,000+ waterbirds)", "Cycling the lake circuit", "3,196m plateau altitude"],
    attractions: [
      {
        name: "South Lake Shore Rapeseed Fields",
        description: "The most photogenic section of the lake circuit — golden rapeseed fields in full bloom (late June to mid-July) with the blue lake and snow peaks behind. The viewpoints near Er Lang Jian (二郎剑) on the south shore offer the widest panoramas. The contrast of yellow, blue, and white is extraordinary.",
        category: "Scenic Area",
      },
      {
        name: "Bird Island (鸟岛)",
        description: "A national nature reserve on the lake's western shore where over 100,000 migratory birds — cormorants, bar-headed geese, black-necked cranes, and gulls — nest each spring and summer. The bar-headed goose (斑头雁) migrates directly over the Himalayas each year — one of the world's great avian feats.",
        category: "Nature Reserve",
      },
      {
        name: "Lake Circuit Cycling",
        description: "A 360km cycling route around the entire lake — a bucket-list route for Chinese cyclists, offering 4–5 days of high-altitude riding with minimal traffic, unlimited plateau scenery, and Tibetan nomad camps along the way. Shorter sections of the south shore are cycleable as a day trip.",
        category: "Adventure",
      },
      {
        name: "Rubber Island (橡皮山景区)",
        description: "A viewpoint on the eastern shore with the most complete view of the lake — all four surrounding mountain ranges visible on a clear day, the lake surface changing colour through the afternoon from grey-blue to green-turquoise to deep cobalt at sunset.",
        category: "Viewpoint",
      },
    ],
    food: [
      {
        name: "Qinghai Lake Naked Carp (湟鱼)",
        nameZh: "湟鱼",
        description: "The naked carp (湟鱼) is the endemic fish of Qinghai Lake, sacred to Tibetan Buddhism and now legally protected — it is NOT available to eat. Restaurants near the lake that claim to serve it are selling farmed alternatives or operating illegally. The most common dishes at lake-side restaurants are yak meat and plateau mushrooms.",
        must: false,
      },
      {
        name: "Tibetan Yak Hotpot (牦牛火锅)",
        nameZh: "牦牛火锅",
        description: "A warming plateau staple at lakeside guesthouses — yak meat, highland vegetables, and mushrooms in a mild bone broth. Perfect after a day of cycling or hiking at altitude.",
        must: true,
      },
      {
        name: "Plateau Mushroom Dishes (高原菌菇)",
        nameZh: "高原菌菇",
        description: "Wild mushrooms from the Qinghai grasslands — stir-fried or added to soups. The matsutake and porcini varieties from high altitude have a particularly intense, earthy flavour.",
        must: false,
      },
    ],
    bestSeason: "Late June to mid-July for the peak rapeseed bloom and warmest temperatures. July–August for Bird Island nesting season. September for clearer skies and fewer crowds — the lake is beautiful well into autumn. Avoid the May–June Chinese tourism peak if possible.",
    transportation: [
      {
        mode: "🚌 Bus or car from Xining",
        details: "Xining to the lake's east shore (Er Lang Jian): ~2.5 hours by bus (¥40–60) or 2 hours by car. Most visitors hire a car in Xining for a day trip (¥400–600) or join a group tour.",
      },
      {
        mode: "🚗 Lake circuit driving",
        details: "A complete circuit of the lake by car takes 1 full day (360km). The south shore (Xining → Er Lang Jian → Haiyan) has the best scenery. The north shore route passes Bird Island.",
      },
    ],
    accommodation: "The Er Lang Jian area on the south shore has the best guesthouses (¥150–450/night). Staying one night allows sunset and sunrise over the lake — the golden hour light on the water and surrounding peaks is extraordinary.",
    travelTips: [
      "The rapeseed bloom is the most sought-after experience — timing typically late June to mid-July but varies by 2 weeks. Check the Qinghai Tourism Bureau reports before booking.",
      "Altitude: the lake is at 3,196m. Acclimatise in Xining (2,275m) for 1–2 nights before visiting. Take it slow on the first day.",
      "A full lake circuit by car in one day is possible but tiring. A more satisfying approach: focus on the south shore viewpoints, Bird Island, and one overnight stay on the north shore.",
      "The naked carp (湟鱼) is protected — do not order it even if offered. Its population was near extinction due to overfishing and is now recovering under protection.",
    ],
    dayTrips: [
      {
        name: "Xining",
        nameZh: "西宁",
        distance: "~2.5h east by car",
        description: "Qinghai's capital — the natural base for a Qinghai Lake trip, with the Ta'er Monastery, Hui Muslim food culture, and the Qinghai-Tibet Railway.",
        whyGo: "Xining is the closest major city and the only practical way to reach Qinghai Lake.",
      },
    ],
  },

  tongren_qh: {
    id: "tongren_qh",
    nameZh: "同仁（热贡）",
    nameEn: "Tongren (Rebkong)",
    province: "qinghai",
    provinceZh: "青海省",
    tagline: "The living capital of Tibetan sacred art",
    description:
      "Tongren — known in Tibetan as Rebkong (热贡) — is the most important centre of Tibetan Buddhist thangka painting and sculpture in the world. Over 10,000 artisans in the surrounding villages practice thangka, embroidery, clay sculpture, and muralism, continuing a tradition that dates to the 13th century. UNESCO has inscribed the Regong Arts on its Intangible Cultural Heritage list. Visiting the workshops where monks and laypeople paint intricate thangkas by hand for months at a time is one of the most absorbing cultural experiences in Qinghai.",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&h=600&fit=crop&auto=format",
    highlights: ["UNESCO thangka painting capital", "Longwu Monastery", "Living Tibetan art workshops", "Tibetan New Year festival", "Tu minority culture"],
    attractions: [
      {
        name: "Longwu Monastery (隆务寺)",
        description: "The dominant monastery of Tongren — a large Gelugpa complex founded in 1301, with golden roof pavilions, an enormous assembly hall, and active monk populations. The monastery is the spiritual anchor of the Rebkong art tradition. Morning prayers and the monk debate courtyard are accessible to visitors.",
        category: "Monastery",
      },
      {
        name: "Thangka Painting Workshops",
        description: "The villages of Wutun (吾屯) and Jahyer (尕沙日) around Tongren are where the thangka workshops are concentrated — studios where artisans paint with mineral pigments on silk, some working on a single piece for 6–18 months. Visitors can observe the work and purchase directly from artisans at far lower prices than Beijing or Lhasa galleries.",
        category: "Craft Heritage",
      },
      {
        name: "Regong Arts Museum (热贡艺术博物馆)",
        description: "A well-curated museum of Regong art — thangka paintings, clay sculptures, embroidered tangkas, and mural fragments explaining the iconography and tradition of Tibetan sacred art. A useful introduction before visiting the working workshops.",
        category: "Museum",
      },
    ],
    food: [
      {
        name: "Tu Minority Wheel Cake (土族油炸果)",
        nameZh: "土族油炸果",
        description: "Fried dough wheels traditionally made by the Tu minority (土族) — crispy, lightly sweetened, and eaten at festivals. The Tu minority is unique to the Qinghai-Gansu borderland and Tongren is one of their cultural heartlands.",
        must: true,
      },
      {
        name: "Highland Barley Wine (青稞酒)",
        nameZh: "青稞酒",
        description: "Fermented barley wine produced by Tibetan households throughout the Tongren area — milder and more complex than the commercial grain spirits, with a slightly sour, earthy flavour. Offered at guesthouses and artisan workshops as hospitality.",
        must: false,
      },
    ],
    bestSeason: "June–September for pleasant temperatures. The Tibetan New Year festival (Losar, January–February) and Monkey Festival (6th lunar month) are the most extraordinary cultural events — festivals involving thousands of costumed participants and centuries-old ritual performances.",
    transportation: [
      {
        mode: "🚌 Bus from Xining",
        details: "Xining to Tongren: ~3 hours by bus (¥45–60). Direct buses from Xining South Bus Station. Tongren is also accessible from Linxia (Gansu) for a cross-provincial cultural circuit.",
      },
    ],
    accommodation: "Small guesthouses in Tongren town (¥120–300/night). Staying near the Longwu Monastery area allows morning temple access.",
    travelTips: [
      "Purchase thangka directly from workshop artisans in Wutun village rather than from Tongren town shops — prices are 40–60% lower and the provenance is guaranteed. Negotiate respectfully.",
      "Photography inside thangka workshops requires permission — always ask first. Most artisans are happy to be photographed and welcome genuine interest in their work.",
      "The Monkey Festival (6th lunar month, usually July) in nearby villages involves extraordinary multi-day ritualistic performances — check dates with Tongren Tourism Bureau.",
    ],
  },

  golmud: {
    id: "golmud",
    nameZh: "格尔木",
    nameEn: "Golmud",
    province: "qinghai",
    provinceZh: "青海省",
    tagline: "Gateway to the Tibetan plateau's edge",
    description:
      "Golmud is a remote but strategically vital city on the edge of the Tibetan plateau — the starting point of the old road to Lhasa before the Qinghai–Tibet Railway was built, and the gateway to the Kunlun Mountains and Chaidamu Basin. The Chaidamu (Qaidam) salt lake complex near Golmud produces extraordinary visual landscapes — vast white salt flats, coloured mineral ponds, and reflective surfaces that create the mirage-like 'Qinghai Mars Base' scenery that has made the area famous among Chinese landscape photographers.",
    image: "https://images.unsplash.com/photo-1573408301185-9519f94815b6?w=700&h=460&fit=crop&auto=format",
    heroImage: "https://images.unsplash.com/photo-1573408301185-9519f94815b6?w=1200&h=600&fit=crop&auto=format",
    highlights: ["Chaidamu salt lake landscape", "'Qinghai Mars' coloured ponds", "Kunlun Mountain gateway", "Qinghai-Tibet Railway transit", "Remote plateau atmosphere"],
    attractions: [
      {
        name: "Chaidamu Basin Salt Lakes (柴达木盐湖)",
        description: "A vast salt lake complex producing extraordinary visual landscapes — white salt flats reflecting the sky, multicoloured mineral ponds (red, green, blue, orange from different algae and minerals), and hexagonal salt crystal formations. The Da Qaidam salt lake (大柴旦翡翠湖) is the most photographed.",
        category: "Natural Landscape",
      },
      {
        name: "Kunlun Mountain Pass (昆仑山口)",
        description: "The 4,767m Kunlun pass on the road south to Lhasa — a desolate, magnificent gateway to the world's roof, with mani stone cairns and prayer flags marking the traditional pilgrimage route. The views of the plateau stretching south are immense.",
        category: "Mountain Pass",
      },
    ],
    food: [
      {
        name: "Plateau Lamb Hot Pot (高原手抓羊肉)",
        nameZh: "高原手抓羊肉",
        description: "Boiled whole lamb from the highland grasslands, eaten by hand with salt and cumin — a simple, filling plateau meal. The quality of the meat in Golmud's restaurants reflects the excellent highland pasture.",
        must: true,
      },
    ],
    bestSeason: "May–September. Golmud is primarily a transit city — most visitors pass through on the way to Lhasa by rail or road.",
    transportation: [
      {
        mode: "🚂 Qinghai–Tibet Railway",
        details: "Xining to Golmud: ~5 hours. Golmud to Lhasa: ~16 hours (through the night over Tanggula Pass). Golmud is the mid-point of the world's highest railway.",
      },
      {
        mode: "🚄 High-speed rail from Xining",
        details: "Xining to Golmud: ~3 hours by new HSR. Opens the salt lake landscapes to easy day trips.",
      },
    ],
    accommodation: "Mid-range hotels near the train station (¥150–400/night). Primarily used as a transit overnight stop.",
    travelTips: [
      "The Chaidamu salt lake landscapes (Da Qaidam emerald lake) are the main reason to stop in Golmud rather than transiting — hire a car for the day (¥300–400) to cover the key viewpoints.",
      "If taking the Qinghai–Tibet Railway through Golmud, the most dramatic scenery (Tanggula Pass, Chumahe wetlands) occurs in the early morning hours — reserve a lower berth for the view.",
    ],
  },

  // ── YUNNAN ────────────────────────────────────────────────────────────────
  kunming: {
    id: "kunming", nameZh: "昆明", nameEn: "Kunming",
    province: "yunnan", provinceZh: "云南",
    tagline: "The Eternal Spring City",
    description: "Blessed with the best climate in China, Kunming is a city of flowers, lakes, and ethnic diversity. The Stone Forest outside the city is one of nature's great sculptures — a labyrinth of grey limestone pinnacles rising from the red earth.",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1600&h=900&fit=crop",
    highlights: ["Stone Forest (Shilin)", "Dianchi Lake", "Green Lake Park", "Yunnan ethnic markets"],
    bestSeason: "Year-round — Kunming has no real bad season. March–May brings the most flowers; October–November has the clearest skies.",
    attractions: [
      { name: "Stone Forest (Shilin)", nameZh: "石林", type: "Nature", duration: "Full day", description: "A UNESCO World Heritage site — 400 sq km of karst limestone pillars, some 30 metres tall, formed 270 million years ago. The Yi minority hold their annual Torch Festival here each July.", tips: "Go early (before 9am) to beat tour groups. The inner scenic area is the most dramatic — skip the outer loops if time is short." },
      { name: "Dianchi Lake", nameZh: "滇池", type: "Nature", duration: "Half day", description: "The 'Pearl of the Plateau' — a vast highland lake at 1,886m elevation ringed by mountains. In winter (Nov–Feb) red-headed gulls arrive from Siberia and flock the lakeside promenade in huge numbers.", tips: "Haigeng Park on the north shore is the best place to see the gulls. The west shore villages (Guishan) have a quieter, local atmosphere." },
      { name: "Green Lake Park", nameZh: "翠湖公园", type: "Park", duration: "2 hours", description: "The beating heart of old Kunming — a willow-fringed lake surrounded by tea houses, musicians, and retirees practising calligraphy with water brushes. More atmospheric than any formal attraction.", tips: "Best visited in the morning when locals gather for music and dancing. Free entry." },
      { name: "Yunnan Provincial Museum", nameZh: "云南省博物馆", type: "Culture", duration: "3 hours", description: "The finest overview of Yunnan's 26 ethnic minorities, with dazzling bronze drums from the ancient Dian Kingdom, and Buddhist treasures from Nanzhao.", tips: "Free on Mondays (closed). Allow at least 2.5 hours for the ethnic minority galleries." },
    ],
    food: [
      { name: "Cross-Bridge Rice Noodles", nameZh: "过桥米线", description: "Yunnan's most famous dish — a large bowl of piping-hot broth with raw ingredients on the side that you slide in to cook tableside.", mustTry: true, where: "Jianxin Yuan (建新园) on Renmin Zhonglu" },
      { name: "Steam Pot Chicken", nameZh: "汽锅鸡", description: "Chicken steamed in a special clay pot with a central chimney. The steam condenses into a pure, clean broth without a drop of added water.", mustTry: true, where: "Pei Jia Yin (培家银) near Green Lake Park" },
      { name: "Erkuai Rice Cake", nameZh: "饵块", description: "Thick rice cakes grilled on charcoal then smeared with chilli paste, fermented soybean, and sesame. Kunming's great street breakfast.", mustTry: false, where: "Any street stall in the old quarter near South Gate" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Changshui International Airport (KMG) — 30km east, connected to the city by metro Line 6 in ~45 min (¥6). Direct flights to most major Chinese cities and Southeast Asia." },
      { mode: "🚄 High-speed rail", details: "Kunming South Station on the HSR network. Chengdu 3.5h, Guiyang 2h, Shanghai 8h. International trains to Vientiane (Laos) now run daily — 3h30min, a spectacular ride." },
    ],
    accommodation: "French Quarter around Wenlin Jie for boutique hostels (¥80–200). Mid-range options cluster around Green Lake (¥300–600). International brands at the Mixc or Golden Eagle malls.",
    travelTips: [
      "Altitude is only 1,891m — no acclimatisation needed, unlike Lijiang or Shangri-La.",
      "The Yunnan ethnic minority market at Dounan Flower Market (4am–8am) is the largest fresh-cut flower market in Asia. Remarkable to walk through even if you don't buy.",
      "Rent a shared e-bike (¥10–20/day) via apps to get between Green Lake, Wenlin Jie, and the old city — perfect distances for cycling.",
    ],
    dayTrips: [
      { name: "Stone Forest", nameZh: "石林", distance: "90km · 1.5h by bus/taxi", description: "Dramatic karst limestone pillars, some 30m tall — a UNESCO heritage landscape shared with Yi minority villages.", whyGo: "One of China's most distinctive geological formations, far more impressive than photos suggest." },
      { name: "Jiuxiang Caves", nameZh: "九乡", distance: "90km · 1.5h", description: "The largest cave system in Yunnan — boat rides through underground gorges and illuminated stalagmite chambers.", whyGo: "Often skipped in favour of Stone Forest but arguably more spectacular underground." },
    ],
  },

  lijiang: {
    id: "lijiang", nameZh: "丽江", nameEn: "Lijiang",
    province: "yunnan", provinceZh: "云南",
    tagline: "Naxi canals & jade-capped peaks",
    description: "The Old Town of Lijiang is one of the great historic streetscapes of China — cobblestone lanes, red lanterns, and rushing canal water beneath the snowline of Jade Dragon Snow Mountain. The Naxi minority have preserved their Dongba script, the world's only living pictographic writing system.",
    image: "https://images.unsplash.com/photo-1509233725247-49e657319b32?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509233725247-49e657319b32?w=1600&h=900&fit=crop",
    highlights: ["Lijiang Old Town (UNESCO)", "Jade Dragon Snow Mountain", "Tiger Leaping Gorge", "Dongba culture"],
    bestSeason: "Apr–Jun and Sep–Nov for clear mountain views and comfortable temperatures. July–August is peak season and can be crowded. Winter is cold but photogenic with snow on the peaks.",
    attractions: [
      { name: "Lijiang Old Town (Dayan)", nameZh: "丽江古城", type: "Culture", duration: "Half day to full day", description: "A UNESCO World Heritage Site — 860 years old, threaded by 354 cobblestone bridges over clear canals fed by Black Dragon Pool. Evening is transformed by red lantern light.", tips: "Enter from the south (Xinyi Jie side) in the morning to get ahead of tour groups. The northwest corner of the old town near Wuyi Jie is the quietest and most residential." },
      { name: "Jade Dragon Snow Mountain", nameZh: "玉龙雪山", type: "Nature", duration: "Full day", description: "A sacred Naxi mountain with 13 peaks, the highest reaching 5,596m. Cable car to the glacier platform at 4,506m gives dramatic views of perpetual snow.", tips: "Book cable car tickets online well in advance — they sell out. Altitude sickness is common above 3,500m; rent oxygen canisters at the base (¥15–20). Wear layers — it's sub-zero at the top." },
      { name: "Black Dragon Pool Park", nameZh: "黑龙潭公园", type: "Nature", duration: "2 hours", description: "The iconic postcard view of Lijiang — a jade-green pool perfectly reflecting the snowy peak of Jade Dragon behind the Moon-Embracing Pavilion.", tips: "Best photographed in the morning with clear skies. Free entry, open early." },
    ],
    food: [
      { name: "Naxi Baba", nameZh: "纳西粑粑", description: "Crispy wheat flatbread stuffed with ham, herbs, or sweet bean paste — the Naxi answer to pizza, cooked over a wood fire.", mustTry: true, where: "Old Town bakeries on Xinyi Jie" },
      { name: "Lijiang Black Pork", nameZh: "黑猪肉", description: "Free-range Yunnan black pig, cured and air-dried in the mountain air. Sliced thin over rice noodles.", mustTry: true, where: "Mishi Alley (迷室巷) restaurants" },
      { name: "Yunnan Coffee", nameZh: "云南咖啡", description: "Yunnan produces most of China's coffee — light, fruity, and distinctly un-Chinese. Lijiang's cafés serve excellent pourover in romantic courtyard settings.", mustTry: false, where: "Cafes along Wuyi Jie and Xinhua Jie" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Lijiang Sanyi Airport (LJG) — 25km from Old Town, taxi ¥50–80 (30 min). Direct flights from Beijing, Shanghai, Chengdu, Guangzhou." },
      { mode: "🚌 Bus from Kunming", details: "Regular buses from Kunming South Bus Station — ~4.5h. Express tourist bus also available." },
      { mode: "🚄 Rail", details: "Standard rail to Lijiang station, then taxi to Old Town (15 min, ¥25). High-speed rail extension is under construction." },
    ],
    accommodation: "Stay inside the Old Town for atmosphere — courtyard guesthouses (纳西院子) ¥250–600. Sifang Square area is convenient but noisy at night. For peace, choose the northwest quarter near Wuyi Jie.",
    travelTips: [
      "Altitude is 2,400m — take it slow the first day. Mild headaches and fatigue are normal.",
      "The ¥80 Old Town maintenance fee is charged at some entrances — technically compulsory but enforcement is patchy.",
      "Sunrise over Jade Dragon Snow Mountain from Shuhe or Baisha is less crowded and equally beautiful to views from the Old Town.",
      "Naxi Ancient Music concerts (8pm nightly, ~¥160) are one of the few genuine cultural experiences — an old ensemble preserves Tang dynasty court music that disappeared everywhere else in China.",
    ],
    dayTrips: [
      { name: "Tiger Leaping Gorge", nameZh: "虎跳峡", distance: "60km · 1.5h by bus", description: "One of the world's deepest gorges — 3,900m from the Yangtze to the mountain summit. The two-day High Trail hike is among China's most spectacular walks.", whyGo: "A must for hikers — the High Trail passes through Tibetan hamlets with views that rival Nepal." },
      { name: "Shuhe Old Town", nameZh: "束河古镇", distance: "4km · 15 min by taxi", description: "A quieter, less commercial version of Lijiang — cobbled lanes, craftspeople, and Naxi homesteads. Perfect afternoon escape from the crowds.", whyGo: "The atmosphere here in the morning is what Lijiang's Old Town used to feel like." },
    ],
  },

  dali: {
    id: "dali", nameZh: "大理", nameEn: "Dali",
    province: "yunnan", provinceZh: "云南",
    tagline: "The Bai heartland beside Erhai Lake",
    description: "Backed by the Cangshan mountains and fronted by the luminous Erhai Lake, Dali was the capital of the ancient Nanzhao and Dali Kingdoms. The Bai minority's white-walled architecture, Three Pagodas, and thriving creative community make it one of Yunnan's most liveable cities.",
    image: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=1600&h=900&fit=crop",
    highlights: ["Three Pagodas", "Erhai Lake", "Bai minority villages", "Cangshan Mountains"],
    bestSeason: "Mar–May and Sep–Nov — mild, clear skies and the lake is at its best. June–August brings the Torch Festival (brilliant) but also monsoon rains. Winter is crisp and quiet.",
    attractions: [
      { name: "Three Pagodas of Chongsheng Temple", nameZh: "崇圣寺三塔", type: "Culture", duration: "2 hours", description: "Three Tang dynasty pagodas (850–900 AD) reflected in a still pool — the symbol of Dali. The tallest reaches 69m and has survived 30+ earthquakes.", tips: "The classic reflection photo is best in the early morning. The interior of the Chongsheng Temple complex is extensive and worth an extra hour." },
      { name: "Erhai Lake", nameZh: "洱海", type: "Nature", duration: "Half day to full day", description: "A vast highland lake (250 sq km) at 1,972m altitude, ringed by Bai fishing villages, fields of rape blossom, and mountains. Cycling the lakeside path is the definitive Dali experience.", tips: "Rent an e-bike from Dali Old Town (¥50–80/day) and cycle the east shore loop (about 70km full circle, or do the north section for the best scenery). Avoid the tourist cruise boats — overpriced." },
      { name: "Dali Old Town", nameZh: "大理古城", type: "Culture", duration: "Half day", description: "A well-preserved Ming dynasty walled town with marble-paved streets, tie-dye textile stalls, and cafés that feel straight out of the 1990s backpacker era (in the best way).", tips: "The north part of the Old Town (around Renmin Lu and Fuxing Lu) is the liveliest. The Yu'er Lu food street is good for evening snacks." },
    ],
    food: [
      { name: "Rubing Cheese", nameZh: "乳饼", description: "Bai fresh cheese grilled on a stick — squeaky, slightly salty, with chilli sauce. Yunnan is one of the only places in China with a cheese tradition.", mustTry: true, where: "Street vendors throughout Dali Old Town" },
      { name: "Bai Three-Course Tea", nameZh: "三道茶", description: "A traditional ceremony: first bitter, then sweet, then a savoury third cup. An experience as much as a drink.", mustTry: true, where: "Bai family homestays in lakeside villages (Xizhou, Zhoucheng)" },
      { name: "Dali Beef Noodles", nameZh: "大理牛肉米线", description: "Clear broth with springy rice noodles and thinly sliced beef — simpler than Kunming's cross-bridge version but deeply satisfying.", mustTry: false, where: "Local noodle shops on Huguo Lu" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Dali Huangcaoba Airport (DLU) — 15km from Old Town. Flights from Kunming (35 min) and Chengdu. Taxi to town ¥40." },
      { mode: "🚄 High-speed rail", details: "Dali Railway Station on the Dali–Lijiang intercity rail. Kunming to Dali: 2h by HSR. Dali to Lijiang: 1.5h." },
    ],
    accommodation: "Stay in Dali Old Town for atmosphere — boutique inns (¥200–500). For lakeside peace, Xizhou village (north Erhai) has excellent Bai architecture guesthouses. Shuanglang on the east shore is loved by long-stay travellers.",
    travelTips: [
      "Xizhou and Zhoucheng villages north of the lake are UNESCO-quality Bai architecture — far less visited than Old Town and well worth a half-day.",
      "The 'Foreigners' Street' (Yangren Jie) is touristy but the cafés serve good coffee and the bookshops are surprisingly good.",
      "If cycling Erhai, the north and east shores (Shuanglang to Xizhou) have the best scenery and the fewest crowds.",
    ],
    dayTrips: [
      { name: "Shaxi Ancient Town", nameZh: "沙溪古镇", distance: "100km north · 2h by bus", description: "A near-perfectly preserved Silk Road market town on the Tea Horse Road — one stone square, one temple, one theatre, and almost no tourists.", whyGo: "The most authentic ancient town in Yunnan — Lijiang as it was 30 years ago." },
      { name: "Cangshan Mountain", nameZh: "苍山", distance: "5km · Cable car from Old Town", description: "Nineteen peaks above 4,000m with alpine meadows, waterfalls, and Buddhist temples reachable by cable car or hiking trail.", whyGo: "Incredible views over Erhai Lake and the Yunnan plateau." },
    ],
  },

  xishuangbanna: {
    id: "xishuangbanna", nameZh: "西双版纳", nameEn: "Xishuangbanna",
    province: "yunnan", provinceZh: "云南",
    tagline: "Tropical rainforest & Dai village life",
    description: "On the Mekong River at China's southern tip, Xishuangbanna feels entirely unlike the rest of the country — tropical rainforest, Buddhist pagodas, Dai minority culture, and wild Asian elephants. The regional capital Jinghong has the largest elephant sanctuary in Asia.",
    image: "https://images.unsplash.com/photo-1542382257-80dedb725088?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1542382257-80dedb725088?w=1600&h=900&fit=crop",
    highlights: ["Yunnan Elephant Sanctuary", "Dai minority villages", "Mekong River", "Tropical rainforest"],
    bestSeason: "Nov–Apr — dry season with clear skies and comfortable warmth (~25°C). Avoid June–Sep (heavy monsoon). The Dai Water-Splashing Festival (mid-April) is extraordinary but extremely crowded.",
    attractions: [
      { name: "Yunnan Asian Elephant Research Centre", nameZh: "亚洲象研究中心", type: "Nature", duration: "Half day", description: "Home to rescued wild Asian elephants — the population here has grown from 170 to 300+ in recent decades. The best ethical elephant experience in Asia — watching, not riding.", tips: "Book in advance. Morning feeding sessions (8–10am) are the highlight. The sanctuary asks visitors not to post real-time location data to protect the elephants." },
      { name: "Menglun Tropical Botanical Garden", nameZh: "中科院西双版纳热带植物园", type: "Nature", duration: "Full day", description: "The most biodiverse garden in China — 13,000+ plant species across 900 hectares on a loop of the Luosuo River. Canopy walkways, orchid houses, and a Dai ethnobotany section.", tips: "The garden is too large to cover on foot — rent an electric cart (¥30) or e-bike. Enter before 9am to see morning mist in the forest." },
      { name: "Dai Minority Park (Ganlanba)", nameZh: "傣族园", type: "Culture", duration: "Half day", description: "Five Dai villages on the banks of the Mekong where the traditional way of life continues — stilt houses, temple ceremonies, and the daily water-blessing ritual at 11am.", tips: "Stay overnight in a genuine Dai stilt-house homestay (¥80–150) rather than doing a day trip — the mornings in the villages are the best part." },
    ],
    food: [
      { name: "Pineapple Rice", nameZh: "菠萝饭", description: "Glutinous rice steamed inside a pineapple with coconut milk — fragrant, sweet, and entirely unique to Yunnan's Dai cuisine.", mustTry: true, where: "Night markets in Jinghong city centre" },
      { name: "Dai Roast Fish", nameZh: "傣味烤鱼", description: "Fresh river fish stuffed with lemongrass, galangal, and chilli, then grilled over banana leaves. The flavour is closer to Thai food than Chinese.", mustTry: true, where: "Dai restaurants along Jinghong's Manting Road" },
      { name: "Stir-fried Wild Vegetables", nameZh: "野菜", description: "Jungle greens — banana flower, fiddlehead fern, bamboo shoot — stir-fried with fresh chilli and fermented soybean paste.", mustTry: false, where: "Any local market restaurant" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Xishuangbanna Gasa Airport (JHG) — 5km from Jinghong centre. Frequent flights to Kunming (45 min), Chengdu, Guangzhou, Shanghai, Bangkok." },
      { mode: "🚌 Overland to Southeast Asia", details: "Buses from Jinghong to the Mohan border crossing for Laos — 3.5h (¥100). The Boten–Vientiane railway then connects to Laos and Thailand." },
    ],
    accommodation: "Jinghong city centre (Manting Road area) for mid-range hotels (¥200–500). Ganlanba riverside homestays (¥80–150) for cultural immersion. Rainforest resort lodges exist north of the city (¥800–2,000).",
    travelTips: [
      "Download the 'Xishuangbanna Tourist' app — trail maps and elephant tracking zones are updated in real time.",
      "The Mekong (Lancang River here) boat cruise from Jinghong to Guanlei is a peaceful afternoon — rent a longtail for ¥200–300.",
      "Don't miss Menghai Tea Market — Pu-er tea is produced here, and the wet-market atmosphere is intense and photogenic.",
    ],
    dayTrips: [
      { name: "Menghai & Bulang Mountain Tea Villages", nameZh: "勐海·布朗山", distance: "60km · 1h", description: "Ancient Pu-er tea trees, some 800 years old, and Bulang minority villages where traditional tea processing is still done by hand.", whyGo: "The origin of the world's most prized aged tea — a journey into the culture behind the leaves." },
    ],
  },

  // ── GUANGDONG ──────────────────────────────────────────────────────────────
  guangzhou: {
    id: "guangzhou", nameZh: "广州", nameEn: "Guangzhou",
    province: "guangdong", provinceZh: "广东",
    tagline: "Cantonese cuisine & the Pearl River delta",
    description: "China's third city may lack the glamour of Beijing and Shanghai, but no city in the country eats better. Guangzhou is the birthplace of dim sum, Cantonese opera, and the 2,000-year-old morning tea culture of yum cha. The Pearl River glistens under the Canton Tower — Asia's second tallest structure.",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&h=900&fit=crop",
    highlights: ["Cantonese dim sum culture", "Canton Tower", "Shamian Island", "Chen Clan Academy"],
    bestSeason: "Oct–Mar — cool, dry, and pleasant. April–September brings humidity and typhoons. The spring Canton Fair (April and October) doubles hotel prices.",
    attractions: [
      { name: "Chen Clan Academy", nameZh: "陈家祠", type: "Culture", duration: "2 hours", description: "The finest example of Lingnan architecture in China — 19 grey-brick halls crammed with 300 ceramic friezes, wood carvings, and iron castings representing Cantonese folk mythology. Built in 1894 as a clan temple.", tips: "Go in the morning to avoid tour groups. The roofline ceramic figures are extraordinary — photograph from the courtyard with a wide lens." },
      { name: "Canton Tower", nameZh: "广州塔", type: "Landmark", duration: "2 hours", description: "The wasp-waisted 600m tower is Asia's second tallest. The observation deck at 488m has a glass floor; the 'Bubble Tram' creeps around the exterior. Best viewed from the opposite riverbank at night.", tips: "Viewing from the pedestrian promenade below is free and photogenic. Inner-deck ticket (¥150) is optional." },
      { name: "Shamian Island", nameZh: "沙面岛", type: "Culture", duration: "2 hours", description: "A quiet Franco-British colonial enclave — 1.5km long, lined with 19th-century European-style buildings shaded by 150-year-old banyan trees. A complete architectural contrast to the rest of the city.", tips: "Great for photography any time. A coffee or drink at one of the canal-side cafés rounds it off nicely. Free entry." },
      { name: "Yuexiu Park & Nanyue Museum", nameZh: "越秀公园·南越王博物馆", type: "Culture", duration: "3 hours", description: "Guangzhou's central park contains the Five-Ram Statue (city symbol) and the Ming dynasty Zhenhai Tower. Below the park, the excellent Nanyue King's Tomb museum has 2,000-year-old Han burial treasures.", tips: "The Nanyue museum (¥15) is underrated — the tomb itself is in situ under the exhibition hall." },
    ],
    food: [
      { name: "Dim Sum (Yum Cha)", nameZh: "饮茶点心", description: "The definitive Guangzhou experience — cart after cart of har gau, siu mai, char siu bao, egg tarts, and rice rolls in a cavernous teahouse. Go at 7–9am with the locals.", mustTry: true, where: "Lianxianglou (莲香楼) or Guangzhou Restaurant (广州酒家) — both century-old institutions. Expect queues." },
      { name: "White-Cut Chicken", nameZh: "白切鸡", description: "Silken poached chicken, barely cooked to just-past-pink, served cold with ginger-scallion oil. The Cantonese benchmark for fresh ingredients.", mustTry: true, where: "Wanliu Chicken (万柳鸡) in Tianhe" },
      { name: "Shrimp Wontons in Soup", nameZh: "虾饺云吞汤", description: "Tissue-thin dumpling wrappers around whole fresh prawns in clear pork bone broth — the wonton here bears no resemblance to the frozen kind.", mustTry: false, where: "Old Street Wonton (老街云吞) near Beijing Road" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Baiyun International Airport (CAN) — one of China's busiest, 28km north. Metro Line 3 and Line 18 connect to city centre in 35–45 min (¥8)." },
      { mode: "🚄 High-speed rail", details: "Guangzhou South Station — major HSR hub. Hong Kong West Kowloon: 48 min. Shenzhen North: 30 min. Beijing: 8h. Shanghai Hongqiao: 4.5h." },
    ],
    accommodation: "Tianhe district for modern comfort (¥400–900). Shamian Island for boutique colonial feel (¥300–600). Budget options cluster around Beijing Road and Haizhu Square (¥150–280).",
    travelTips: [
      "The Canton Fair (April 15–May 5 and Oct 15–Nov 4) brings 200,000+ trade visitors — book hotels 3 months in advance and expect 3× normal prices.",
      "Guangzhou's subway is excellent and goes almost everywhere — get a Yangcheng Tong transit card from any station.",
      "The morning tea (早茶) ritual starts at 6am — Guangzhou elders are at the teahouse by 6:30am. Joining them is one of the great urban experiences in China.",
    ],
    dayTrips: [
      { name: "Foshan — Ancestral Temple", nameZh: "佛山·祖庙", distance: "30km · 30 min by metro", description: "A magnificent Ming dynasty temple complex — also the birthplace of Bruce Lee's Wing Chun kung fu tradition. The ceremonial furnaces and lion dance culture are extraordinary.", whyGo: "One of South China's finest Ming temples, completely overshadowed by Guangzhou but well worth the half-day." },
      { name: "Kaiping Diaolou", nameZh: "开平碉楼", distance: "130km · 2h by bus", description: "UNESCO-listed watchtower villages — hundreds of incongruous European-Chinese fortress towers built by returned Overseas Chinese emigrants in the early 1900s.", whyGo: "Like stumbling into a parallel history — the fascinating result of Cantonese diaspora wealth meeting village security concerns." },
    ],
  },

  shenzhen: {
    id: "shenzhen", nameZh: "深圳", nameEn: "Shenzhen",
    province: "guangdong", provinceZh: "广东",
    tagline: "China's tech capital & urban innovation lab",
    description: "Forty years ago, Shenzhen was a fishing village. Today it is a 15-million-person megalopolis and the innovation engine of China — home to Huawei, Tencent, DJI, and BYD. Beyond the tech campuses, Shenzhen has excellent contemporary art, the best hiking in the Pearl River Delta, and a food scene driven by migrants from every province.",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1600&h=900&fit=crop",
    highlights: ["OCT-LOFT contemporary art", "Ping'an Finance Centre views", "Dafen Oil Painting Village", "Coastal hiking"],
    bestSeason: "Oct–Mar — comfortable 20–25°C. The summer (June–September) is hot, humid, and typhoon season. CNY (Jan/Feb) is quieter as migrants return home.",
    attractions: [
      { name: "OCT-LOFT Creative Culture Park", nameZh: "华侨城创意文化园", type: "Culture", duration: "3 hours", description: "The art district that established Shenzhen's creative reputation — former factory buildings converted into galleries, design studios, concept stores, and excellent cafés.", tips: "Most galleries are closed Mondays. The Tuesday night art markets (monthly) are vibrant. OCAT Shenzhen within the complex is a serious contemporary art institution." },
      { name: "Ping'an Finance Centre Observation Deck", nameZh: "平安金融中心观光层", type: "Landmark", duration: "1.5 hours", description: "The world's 4th tallest building (599m) has an observation deck at 541m — the highest accessible viewpoint in Guangdong, with Shenzhen's skyline and the Pearl River delta stretching to the horizon.", tips: "Book tickets online (¥180). Best visited at dusk when the transition from day to night city views is dramatic." },
      { name: "Dafen Oil Painting Village", nameZh: "大芬油画村", type: "Culture", duration: "2 hours", description: "The world's largest oil painting reproduction centre — an entire village of studios producing high-quality copies of Van Gogh, Monet, and Klimt for export. Fascinating and strangely artistic.", tips: "Original local artists also show alongside the copy studios. Bargain respectfully — quoted prices are typically 3× the eventual selling price." },
      { name: "Wutong Mountain", nameZh: "梧桐山", type: "Nature", duration: "Half day", description: "The highest peak in Shenzhen (944m) with hiking trails through subtropical forest to city panoramas — one of the great surprises for a city of its density.", tips: "The east-face trail from Xiantong Temple to the summit (2.5h return) offers the best views." },
    ],
    food: [
      { name: "Shenzhen Mixed Noodles", nameZh: "深圳捞面", description: "Shenzhen's defining dish doesn't exist — the city's food culture is a democratic mix of every province. The best restaurants are in the migrant worker neighbourhoods.", mustTry: false, where: "Hubei Street (湖北街) in Luohu for provincial diversity" },
      { name: "Sea Bass Hot Pot", nameZh: "生猛海鲜火锅", description: "Live seafood hotpot — choose your fish, clams, and prawns from the tank. Shenzhen's proximity to Hong Kong means the seafood quality is exceptional.", mustTry: true, where: "East Sea Fishing Port (东海渔港) in Futian" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Shenzhen Bao'an International Airport (SZX) — connected by metro Line 11 to Futian/Luohu in 30–40 min. Direct flights to all major Chinese cities and international routes." },
      { mode: "🚄 High-speed rail", details: "Shenzhen North Station — Hong Kong (WKL): 14 min. Guangzhou: 30 min. Fast connections to the entire national HSR network." },
      { mode: "🛳️ Ferry to Hong Kong", details: "High-speed ferry from Shekou or Airport Ferry Terminal to Hong Kong airport, Kowloon, or Central — 30–60 min. Ideal if continuing to HK." },
    ],
    accommodation: "Futian CBD for business hotels (¥400–900). Nanshan (near OCT-LOFT and tech campuses) for creative boutiques (¥350–700). Budget options in Luohu near the Lo Wu border crossing (¥200–350).",
    travelTips: [
      "Shenzhen has the most cashless city infrastructure in China — Alipay and WeChat Pay are virtually universal. Carry almost no cash.",
      "The Shenzhen–Hong Kong border (Lo Wu or Futian) is open around the clock. Day trips to Hong Kong are straightforward with an HK visa.",
      "The Huaqiangbei electronics market (华强北) is the world's largest electronics bazaar — everything from components to phones to VR headsets.",
    ],
    dayTrips: [
      { name: "Guangzhou", nameZh: "广州", distance: "130km · 30 min by HSR", description: "Cantonese dim sum, Shamian colonial island, and the Chen Clan Academy — a full cultural contrast to Shenzhen's modernity.", whyGo: "The HSR makes Guangzhou an easy half-day — perfect for a dim sum morning." },
    ],
  },

  // ── FUJIAN ─────────────────────────────────────────────────────────────────
  xiamen: {
    id: "xiamen", nameZh: "厦门", nameEn: "Xiamen",
    province: "fujian", provinceZh: "福建",
    tagline: "Colonial island, seafood & Min culture",
    description: "Xiamen is consistently voted one of China's most liveable cities — a clean, small-scale port with a European colonial heritage on Gulangyu Island, extraordinary seafood, and the warmest winters in eastern China. The piano-filled island is a UNESCO Heritage site where no cars are allowed.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1600&h=900&fit=crop",
    highlights: ["Gulangyu Island (UNESCO)", "Southputuo Temple", "Min Nan food culture", "Hulishan Cannon Fort"],
    bestSeason: "Oct–Apr — Xiamen's winter is mild (15–20°C) and clear. Summer (Jun–Sep) is hot, humid, and typhoon-prone. The March cherry blossoms at Xiamen University are spectacular.",
    attractions: [
      { name: "Gulangyu Island", nameZh: "鼓浪屿", type: "Culture", duration: "Full day", description: "A tiny pedestrian island (1.88 sq km) 10 minutes by ferry from the mainland — 1,000+ colonial-era mansions, piano museums, and some of China's best small-restaurant dining. Designated UNESCO Heritage in 2017.", tips: "Take the early ferry (before 8am) to beat the tourist crowds. The west and south parts of the island are quieter. Avoid the designated 'tourist path' — get lost in the alleys instead." },
      { name: "Southputuo Temple", nameZh: "南普陀寺", type: "Culture", duration: "2 hours", description: "One of South China's most atmospheric Buddhist temples — four halls rising up the Wulao Mountain slope, always busy with incense smoke and pilgrims. The Buddhist vegetarian restaurant here is famous.", tips: "The temple is free to enter. The vegetarian restaurant behind the main hall serves creative Buddhist cuisine (¥15–30 per dish) — extremely popular, queue early for lunch." },
      { name: "Xiamen University Campus", nameZh: "厦门大学", type: "Landmark", duration: "1.5 hours", description: "One of China's most beautiful university campuses — Lujiang-style architecture, a central lake, and a seafront promenade. Particularly spectacular when cherry blossoms bloom in March.", tips: "Entrance is controlled; register with ID at the gate. The back gate near Zengcuoan fishing village is a nice entry point." },
    ],
    food: [
      { name: "Oyster Omelette", nameZh: "蚵仔煎", description: "Fat Fujian oysters fried with sweet potato starch and egg in a sticky-crispy omelette — the defining street snack of Min Nan coastal culture.", mustTry: true, where: "Zhongshan Road Pedestrian Street stalls" },
      { name: "Peanut Tang Yuan", nameZh: "花生汤圆", description: "Soft glutinous rice balls filled with crushed peanut and lard, served in sweet soup — one of Xiamen's most beloved breakfast items.", mustTry: true, where: "Huang Zehe Peanut Soup (黄则和花生汤) — a 70-year institution" },
      { name: "Sha Cha Noodles", nameZh: "沙茶面", description: "Rice noodles in a thick peanut-satay broth with assorted toppings — prawn, cuttlefish, tofu, pork intestine. The Xiamen-specific version is much richer than the Southeast Asian original.", mustTry: true, where: "Old Town noodle shops — look for lines of locals" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Xiamen Gaoqi International Airport (XMN) — 10km from city centre, metro Line 1 connects directly (20 min, ¥4)." },
      { mode: "🚄 High-speed rail", details: "Xiamen North Station on the Fuzhou-Xiamen HSR. Fuzhou: 1h. Shanghai Hongqiao: 3h30min. Guangzhou South: 2h30min. Take metro Line 1 or Line 3 to the city centre from Xiamen North." },
    ],
    accommodation: "Gulangyu Island guesthouses for romance (¥400–900, book well ahead). Zhongshan Road area on the mainland for convenience (¥200–500). Zengcuoan fishing village for quiet boutiques (¥300–600).",
    travelTips: [
      "Gulangyu ferry tickets (¥35 roundtrip for tourists) must be purchased at the Dongdu or Lundu piers — not from touts.",
      "The Xiamen metro is clean, cheap, and connects all major sites. Get a transit card.",
      "Zengcuoan (曾厝垵) fishing village behind Xiamen University has been transformed into the best bar and café street in the city — far more atmospheric than Zhongshan Road.",
    ],
    dayTrips: [
      { name: "Tulou Earthen Fortresses", nameZh: "土楼", distance: "70km · 1.5h", description: "Hakka clan fortresses — circular earthen buildings 5 stories tall housing entire villages. Yongding's Tianluokeng cluster (UNESCO) is the most photogenic.", whyGo: "One of China's architectural wonders — nowhere else in the world looks quite like this." },
    ],
  },

  wuyishan: {
    id: "wuyishan", nameZh: "武夷山", nameEn: "Wuyi Mountain",
    province: "fujian", provinceZh: "福建",
    tagline: "UNESCO biosphere, red cliffs & oolong tea",
    description: "Wuyi Mountain is simultaneously a UNESCO World Heritage Natural Site and the birthplace of the world's finest oolong teas — Da Hong Pao (Big Red Robe) grows on the cliffs here. The Jiuqu (Nine-Bend) Stream bamboo raft float through red sandstone gorges is the journey of a lifetime.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    highlights: ["Jiuqu Stream bamboo raft", "Da Hong Pao tea garden", "Tianyou Peak hike", "Song dynasty city ruins"],
    bestSeason: "Mar–May and Sep–Nov — clear skies for mountain views. Spring brings new tea flush; autumn is ideal for hiking. June–August is hot and rainy. Winter mists are beautiful but trails can be slippery.",
    attractions: [
      { name: "Jiuqu Stream Raft Tour", nameZh: "九曲溪竹筏漂流", type: "Nature", duration: "2 hours", description: "A drift on bamboo rafts through nine dramatic bends of clear mountain water, past 36 named peaks and 99 rock formations. The views framed by red-weathered cliffs are breathtaking.", tips: "Book at least a day in advance (especially weekends). Early morning (8–9am) rafts have the most dramatic light and fewer tourists. The float goes one direction only — buses return you to start." },
      { name: "Da Hong Pao Tea Cliffs", nameZh: "大红袍母树", type: "Culture", duration: "2 hours", description: "The six original mother plants of Da Hong Pao oolong, growing on a vertical cliff-face and now protected by state order (the last official harvest was in 2006). The canyon walk is as good as the tea.", tips: "A small box of certified Da Hong Pao costs ¥50–150 from the official shop near the site. Anything priced higher is tourist markup." },
      { name: "Tianyou Peak", nameZh: "天游峰", type: "Nature", duration: "3 hours", description: "The highest accessible peak in the scenic area — 408m summit with panoramic views over the Nine-Bend stream valley below. The trail up is steep but very manageable.", tips: "Go early or after 3pm to avoid crowds and haze. The descent via the east trail offers different views." },
    ],
    food: [
      { name: "Wuyi Rock Tea", nameZh: "武夷岩茶", description: "The mineral-rich 'rock tea' oolongs — Da Hong Pao, Rou Gui, Shui Xian — are among the world's most complex teas. Visiting a local tea farmer for a gongfu tea session is essential.", mustTry: true, where: "Tea houses in Wuyi Mountain town or village tea farms in Xingcun" },
      { name: "Smoked Duck", nameZh: "熏鸭", description: "Duck smoked over local tea wood and pine — the tea gives the skin a uniquely fragrant, mineral smokiness.", mustTry: true, where: "Restaurants along Wuyi Gong plaza" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Wuyishan Airport (WUS) — 12km from scenic area. Flights from Shanghai, Beijing, Guangzhou, Xiamen." },
      { mode: "🚄 High-speed rail", details: "Wuyishan North Station on the Fuzhou-Nanchang HSR. Fuzhou: 1.5h. Nanchang: 1.5h. Shanghai: 4h." },
    ],
    accommodation: "Stay in Wuyi Mountain town rather than inside the scenic area. Boutique tea-culture inns near Wuyi Gong plaza (¥300–700). For serious tea travellers, village homestays in Xingcun or Tongmu offer farmhouse stays (¥150–300) with access to tea farms.",
    travelTips: [
      "Buy a 2-day scenic area pass (¥150) rather than individual tickets if visiting Jiuqu Stream raft + Tianyou Peak.",
      "The Tongmu village area (Zhengshan Lapsang Souchong origin) north of the scenic area is a beautiful half-day add-on for tea enthusiasts.",
    ],
    dayTrips: [
      { name: "Shangrao & Wuyuan", nameZh: "上饶·婺源", distance: "60km east · 1h by HSR", description: "Jiangxi's Wuyuan county — the most beautiful rural scenery in eastern China, with white-walled Huizhou villages set in seas of yellow rapeseed (best in March–April).", whyGo: "One of China's most photographed rural landscapes, easily combined with Wuyi Mountain on a multi-day trip.", adminNote: "Wuyuan is administratively part of Jiangxi province, not Fujian — cross-province day trip." },
    ],
  },

  // ── GUANGXI ────────────────────────────────────────────────────────────────
  nanning: {
    id: "nanning", nameZh: "南宁", nameEn: "Nanning",
    province: "guangxi", provinceZh: "广西",
    tagline: "Green city & gateway to Southeast Asia",
    description: "The subtropical capital of Guangxi is China's greenest city — lush year-round, with the Zhuang minority culture at its heart. Nanning is also the main land gateway to Vietnam and the hub for exploring rural Guangxi's spectacular karst landscapes.",
    image: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555217851-6141535bd771?w=1600&h=900&fit=crop",
    highlights: ["Qingxiu Mountain", "Guangxi Museum", "Zhuang minority culture", "Detian Waterfall"],
    bestSeason: "Oct–Apr — pleasant and dry at 15–25°C. May–September is hot and rainy but the city remains green.",
    attractions: [
      { name: "Qingxiu Mountain", nameZh: "青秀山", type: "Nature", duration: "3 hours", description: "Nanning's forested urban lung — tropical gardens, dragon boat lake, and a soaring pagoda with city views. The orchid garden is one of the finest in South China.", tips: "Best in the morning; free entry. The Zhuang minority cultural garden within the park is worth seeking out." },
      { name: "Guangxi Ethnic Culture Park", nameZh: "广西民族文化公园", type: "Culture", duration: "3 hours", description: "Immersive park covering all 12 of Guangxi's ethnic minorities — authentic architecture, folk performances, and the best Zhuang textile collection in the region.", tips: "Check the daily performance schedule online. Evening shows include bronze drum ceremonies and Song of Happiness (刘三姐 folk opera tradition)." },
    ],
    food: [
      { name: "Lao You Fen (Snail Rice Noodles)", nameZh: "老友粉", description: "Nanning's signature dish — vermicelli in a sour, spicy broth with fermented black beans, chilli, and pork. An acquired taste that becomes deeply addictive.", mustTry: true, where: "Any Old Friend Noodles (老友面) shop — chain or independent" },
      { name: "Lipu Taro Duck", nameZh: "荔浦芋头扣鸭", description: "Braised duck layered with sliced taro from Lipu county — a Guangxi banquet classic that is fatty, fragrant, and deeply comforting.", mustTry: false, where: "Guangxi cuisine restaurants throughout the city" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Nanning Wuxu International Airport (NNG) — 35km south, connected by airport bus (¥20, 60 min) or taxi (¥120)." },
      { mode: "🚄 High-speed rail", details: "Nanning East Station is the main HSR hub. Guilin: 2h. Guiyang: 3h. Guangzhou: 3h. International: Nanning–Hanoi international train takes ~11h (overnight sleeper)." },
    ],
    accommodation: "City centre near Chaoyang Square (¥200–500). Business hotels cluster in Qingxiu district (¥350–700).",
    travelTips: [
      "Nanning to Hanoi by overnight train is a beautiful border crossing — sleeper berth, jungle hills, and minimal border hassle with the right visa.",
      "The Zhongshan Road Night Market (中山路夜市) runs until 2am and is one of the best street food streets in Guangxi.",
    ],
    dayTrips: [
      { name: "Detian Transboundary Waterfall", nameZh: "德天跨国瀑布", distance: "230km · 3h", description: "Asia's largest transboundary waterfall — the Guichun River drops over a series of tiers on the Vietnam border, with the Vietnamese village visible from the viewing platform.", whyGo: "Surreal to stand at the border as the falls thunder down — one of Asia's most dramatic and least-visited natural spectacles." },
    ],
  },

  yangshuo: {
    id: "yangshuo", nameZh: "阳朔", nameEn: "Yangshuo",
    province: "guangxi", provinceZh: "广西",
    tagline: "Karst peaks, Li River rafts & rice paddies",
    description: "The karst mountains that make the Li River famous reach their crescendo at Yangshuo, where sugar-loaf peaks erupt from flat fields along every road. Cyclists and backpackers discovered it in the 1980s; the countryside around it — Moon Hill, the Yulong River, and the Longji rice terraces — remains one of the most beautiful in China.",
    image: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=1600&h=900&fit=crop",
    highlights: ["Li River cruise from Guilin", "Yulong River bamboo rafting", "Moon Hill arch", "Longji Rice Terraces"],
    bestSeason: "Apr–May and Sep–Oct — clear skies, moderate temperatures, and water levels ideal for rafting. Spring has low mist for atmospheric photos. Summer (Jun–Aug) is very crowded.",
    attractions: [
      { name: "Yulong River Bamboo Rafting", nameZh: "遇龙河竹筏漂流", type: "Nature", duration: "3 hours", description: "A quieter, more intimate alternative to the Li River — bamboo rafts pole slowly through karst scenery on a crystal-clear jade river, passing ancient stone bridges.", tips: "Start from Jiuxian Village (九仙) and end at Gongnong Bridge for the best stretch. Hire a private raft (¥200–300) rather than joining a group tour." },
      { name: "Moon Hill", nameZh: "月亮山", type: "Nature", duration: "2 hours", description: "A single 380m karst peak with a perfect circular arch near the summit — the archetype image of Yangshuo's landscape. The climb is steep (30 min) but the view from the arch is unforgettable.", tips: "Go at sunrise or sunset for the best light. The base of the hill has rental bikes; cycle the surrounding countryside for an hour after coming down." },
      { name: "Li River Cruise", nameZh: "漓江游船", type: "Nature", duration: "4 hours", description: "The classic 83km cruise from Guilin to Yangshuo passes the karst scenery depicted on the 20-yuan banknote. The Xingping section (the final 20km) is the most dramatic.", tips: "The ¥213 tourist cruise is fine but the scenery is the point, not the boat. If coming from Guilin, buy a return bus ticket to Guilin before boarding at Yangshuo — they sell out." },
    ],
    food: [
      { name: "Beer Fish", nameZh: "啤酒鱼", description: "Fresh Li River fish braised in local Guilin beer with tomatoes and chilli — Yangshuo's signature dish.", mustTry: true, where: "Restaurants on West Street (西街) — Lijiang Restaurant is the most celebrated" },
      { name: "Stuffed Li River Snails", nameZh: "螺蛳粉", description: "River snails stuffed with minced pork and herbs, braised in a fragrant broth — the local version of the Guangxi snail obsession.", mustTry: false, where: "Market street restaurants in the old town" },
    ],
    transportation: [
      { mode: "🚌 From Guilin", details: "Buses from Guilin train station (south exit) every 20 min, 1.5h, ¥25. Or take the Li River cruise (4h, ¥213)." },
      { mode: "🚄 Rail", details: "Yangshuo Station (new HSR) — Guilin: 20 min. Guangzhou: 2h. Nanning: 1.5h. A taxi from Yangshuo station to town is ¥30." },
    ],
    accommodation: "West Street area for sociable hostels and budget guesthouses (¥60–200). Countryside inns (民宿) near the Yulong River are the best experience (¥200–500). Book ahead for weekends.",
    travelTips: [
      "Rent a bicycle or e-bike from town (¥30–60/day) — the best way to explore the surrounding countryside independently.",
      "The light for photography is best in early morning (low mist) and golden hour (around 5pm in summer). Late afternoon is ideal for cycling.",
      "West Street (西街) is heavily touristy — eat one meal there for the atmosphere, then find local restaurants on the streets behind it.",
    ],
    dayTrips: [
      { name: "Longji Rice Terraces", nameZh: "龙脊梯田", distance: "80km north · 2h by bus", description: "Dragon's Backbone rice terraces — Zhuang and Yao minority villages at 1,000m elevation surrounded by swooping tier after tier of carved terraces. Brilliant in May (water-filled) and Oct–Nov (golden harvest).", whyGo: "Among the most photographed landscapes in China — the minority villages make it a cultural experience as much as a visual one.", adminNote: "Longji terraces are technically in Longsheng County, 80km north of Yangshuo — budget a full day." },
    ],
  },

  // ── SHANXI ─────────────────────────────────────────────────────────────────
  datong: {
    id: "datong", nameZh: "大同", nameEn: "Datong",
    province: "shanxi", provinceZh: "山西",
    tagline: "Buddhist grottoes & the Hanging Temple",
    description: "Datong is one of China's great underrated ancient cities — the Northern Wei dynasty capital, where the Yungang Grottoes carved 51,000 Buddhist figures into the sandstone cliffs in the 5th century. The Hanging Temple, wedged horizontally into a vertical cliff-face, defies gravity and engineering logic equally.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop",
    highlights: ["Yungang Grottoes (UNESCO)", "Hanging Temple", "Ancient City Walls", "Nine Dragon Screen"],
    bestSeason: "Apr–Jun and Sep–Oct — clear, dry, and cool. Winters are harsh (−10°C) but dramatic; summers are hot but fine. The city is dusty in spring.",
    attractions: [
      { name: "Yungang Grottoes", nameZh: "云冈石窟", type: "Culture", duration: "3 hours", description: "A UNESCO World Heritage masterpiece — 252 caves carved between 460 and 525 AD, containing 51,000 Buddhist statues. The 17m seated Sakyamuni in Cave 20 is the icon of the Northern Wei dynasty.", tips: "Caves 5 and 6 have the most intricate interiors; Cave 20 is the most dramatic exterior. Go in the morning for the best light on the west-facing entrance facades." },
      { name: "Hanging Temple (Xuankong Si)", nameZh: "悬空寺", type: "Culture", duration: "2 hours", description: "Built into a vertical granite cliff-face 75m above the Jinlong Gorge floor — 40 wooden halls connected by walkways that cling to the rock. Over 1,400 years old. Three religions (Buddhism, Taoism, Confucianism) coexist inside.", tips: "Visits are timed and short (30 min on the structure). Book tickets online. The pre-dawn light view of the temple from the valley road is worth a detour." },
      { name: "Datong Ancient City", nameZh: "大同古城", type: "Culture", duration: "2 hours", description: "The recently restored Ming-era city walls (7km circuit) enclose the largest urban conservation project in modern China. The drum tower, shadow theatre district, and Nine Dragon Screen (the finest wall in China) are inside.", tips: "The restored walls can be walked by bicycle — rent at the south gate (¥30/2h). The Nine Dragon Screen (九龙壁, free) is more intact than the one in Beijing's Beihai Park." },
    ],
    food: [
      { name: "Knife-Cut Noodles (Dao Xiao Mian)", nameZh: "刀削面", description: "The defining noodle of Shanxi — dough shaved directly from a block into boiling water with a curved blade, creating rough, chewy ribbons that hold sauce brilliantly.", mustTry: true, where: "Street restaurants throughout the city — Tongle Noodle Shop (同乐面馆) is a local institution" },
      { name: "Datong Cold Noodles", nameZh: "大同凉面", description: "Cold wheat noodles dressed with sesame paste, vinegar, chilli oil, and cucumber strips — a summer staple in Shanxi.", mustTry: false, where: "Any noodle shop in the city" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Datong-Hunyuan Station (under construction) or Datong Station. Beijing: 2h30min by high-speed. Taiyuan: 1h30min." },
      { mode: "🚌 Bus to Hanging Temple", details: "Direct tourist bus from Yungang Grottoes area to Hanging Temple — 1.5h. Or join a day tour from Datong (¥150–200 per person incl. transport)." },
    ],
    accommodation: "City centre near the ancient walls (¥200–450). Hotel clusters have developed around the Yungang Grottoes entrance (¥250–500) for early visits.",
    travelTips: [
      "Combine Datong with a day-trip to Wutai Mountain (3.5h by bus) — both UNESCO sites within reach.",
      "The Yungang Grottoes site is enormous — sturdy shoes essential, allow a full 3 hours minimum.",
    ],
    dayTrips: [
      { name: "Wutai Mountain", nameZh: "五台山", distance: "160km · 3h by bus", description: "China's most sacred Buddhist mountain — five flat peaks (台) encircling a valley of 53 monasteries, some dating back 2,000 years. A living pilgrimage site.", whyGo: "The density of ancient temples and the Tibetan-Han Buddhist mixture make Wutai Mountain incomparable among China's sacred mountains." },
    ],
  },

  pingyao: {
    id: "pingyao", nameZh: "平遥", nameEn: "Pingyao",
    province: "shanxi", provinceZh: "山西",
    tagline: "The best-preserved Ming dynasty city in China",
    description: "Pingyao's city walls have stood for 2,700 years. Inside them, a complete Ming and Qing dynasty city — streets of black-wood shopfronts, courtyard mansions of Shanxi banking dynasties, and temple complexes that time forgot. It is the gold standard of ancient Chinese urban preservation.",
    image: "https://images.unsplash.com/photo-1574236170880-0b0b8071b726?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1574236170880-0b0b8071b726?w=1600&h=900&fit=crop",
    highlights: ["Ancient City Walls (UNESCO)", "Rishengchang Exchange House", "Shuanglin Temple", "Qingxu Taoist Temple"],
    bestSeason: "Apr–Jun and Sep–Nov — cool, dry weather ideal for walking the streets and walls. Summers are hot; winters cold but atmospheric with fewer tourists. Avoid CNY Golden Week (booked out months ahead).",
    attractions: [
      { name: "Pingyao Ancient City Walls", nameZh: "平遥古城墙", type: "Culture", duration: "2 hours", description: "The most complete pre-modern city wall in China — 6.4km circuit, 12m tall, with 72 watchtowers. You can walk the entire top in under 2 hours.", tips: "Entry is included in the combined ticket (¥145). The south wall section at sunset offers the best light over the roofscape below." },
      { name: "Rishengchang Exchange House", nameZh: "日升昌票号", type: "Culture", duration: "1.5 hours", description: "Founded in 1823, this was the world's first bank using paper draft transfers — the invention of the Shanxi merchants that connected trade from Beijing to Shanghai without carrying cash across bandits.", tips: "The explanatory panels are excellent — the story of Shanxi banking (晋商) is one of the most fascinating in Chinese business history." },
      { name: "Shuanglin Temple", nameZh: "双林寺", type: "Culture", duration: "2 hours", description: "Outside the city walls — 2,000 painted clay sculptures from the Song, Yuan, Ming, and Qing dynasties fill 10 halls. The figures are among the finest examples of devotional sculpture anywhere in Asia.", tips: "3km southwest of city walls; taxi ¥20 or bicycle rental. Far less visited than the ancient city — a genuine hidden gem." },
    ],
    food: [
      { name: "Pingyao Beef", nameZh: "平遥牛肉", description: "Air-dried braised beef — deep mahogany brown, intensely flavoured with local spices including astragalus root. Vacuum-packed for carry-on; the best food souvenir in Shanxi.", mustTry: true, where: "Any shop on Nan Dajie main street — Tongtianyuan (同天源) is the most reputable brand" },
      { name: "Shanxi Noodles with Vinegar", nameZh: "醋溜面条", description: "Any noodle dish dressed with Shanxi's famed aged rice vinegar (陈醋) — the sourness here is complex and wine-like, nothing like regular vinegar.", mustTry: true, where: "Guesthouses that include breakfast, or Xianyuecheng (咸鱼成) restaurant" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Pingyao Ancient City Station — right outside the city walls. Taiyuan: 30 min. Xi'an North: 2h. Beijing West: 3.5h." },
    ],
    accommodation: "Inside the ancient city walls for full immersion — traditional courtyard inns (四合院客栈) ¥200–600. The best ones are on Ming Qing Jie side streets, not on the main tourist thoroughfares. Book ahead for weekends.",
    travelTips: [
      "Buy the combined ticket (¥145) which covers all major sites — individual ticket prices add up quickly.",
      "The city is very walkable — everything is within 15 minutes on foot. Hire a bicycle for ¥20/day to reach Shuanglin Temple.",
      "Evening in Pingyao (after 5pm when day-trippers leave) is magical — lanterns glow, the crowds thin, and local life returns to the streets.",
    ],
    dayTrips: [
      { name: "Qiao Family Compound", nameZh: "乔家大院", distance: "50km · 1h by bus", description: "The most elaborate Shanxi merchant mansion — six courtyards and 313 rooms built in 1756. Made famous by Zhang Yimou's 'Raise the Red Lantern'.", whyGo: "The architectural detail and scale dwarf even Pingyao's grandest courtyards — a remarkable testament to Shanxi merchant wealth." },
    ],
  },

  // ── GANSU ──────────────────────────────────────────────────────────────────
  dunhuang: {
    id: "dunhuang", nameZh: "敦煌", nameEn: "Dunhuang",
    province: "gansu", provinceZh: "甘肃",
    tagline: "Silk Road oasis & 1,600 years of Buddhist art",
    description: "At the edge of the Gobi Desert where the Silk Road split into northern and southern branches, Dunhuang accumulated the world's greatest collection of Buddhist cave art — the Mogao Grottoes — over 1,600 years of pilgrimage and patronage. The Crescent Moon Spring oasis, surrounded by singing sand dunes, is one of China's most surreal landscapes.",
    image: "https://images.unsplash.com/photo-1565128939960-1ec0a5e46e93?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1565128939960-1ec0a5e46e93?w=1600&h=900&fit=crop",
    highlights: ["Mogao Grottoes (UNESCO)", "Crescent Moon Spring", "Singing Sand Dunes", "Dunhuang Night Market"],
    bestSeason: "May–Oct — desert summers are hot but dry. September is ideal: post-monsoon clarity, moderate heat, fewer tourists. Avoid winter (−15°C nights). Spring sandstorms can close sites.",
    attractions: [
      { name: "Mogao Grottoes", nameZh: "莫高窟", type: "Culture", duration: "Full day", description: "492 painted caves carved between 366 and 1400 AD — 45,000 sq m of murals, 2,000 painted sculptures, and manuscript treasures that include the world's oldest printed book. The scale and quality are unmatched.", tips: "Book online months in advance — daily visitor numbers are strictly limited. The 'regular' ticket (¥238) covers 8 caves and a film. Upgrade to 'special caves' (¥238 extra per cave) to see the finest interiors. No photography inside any cave." },
      { name: "Crescent Moon Spring & Singing Sand Dunes", nameZh: "月牙泉·鸣沙山", type: "Nature", duration: "Half day", description: "A pristine crescent-shaped oasis lake, held in place for centuries by Gobi Desert dunes on all sides — an inexplicable natural paradox that has survived 2,000 years. At dusk the dunes emit a low hum (the 'singing') from sand movement.", tips: "Rent a camel (¥100) to ascend the main dune ridge at sunset — the silhouette views are extraordinary. Entrance ¥110. Arrive by 3pm for best light." },
      { name: "Dunhuang Museum", nameZh: "敦煌博物馆", type: "Culture", duration: "2 hours", description: "Excellently curated overview of the Silk Road — manuscripts from the Mogao Library Cave (discovered in 1900), Tang dynasty textiles, and scale models of key caves.", tips: "Free entry. A morning here before the Mogao Grottoes visit contextualises everything you'll see in the caves." },
    ],
    food: [
      { name: "Donkey Yellow Noodles", nameZh: "驴肉黄面", description: "Hand-pulled yellow alkaline noodles served with spiced braised donkey meat — Dunhuang's most distinctive culinary pairing.", mustTry: true, where: "Night market stalls on Shazhou Night Market (沙洲夜市)" },
      { name: "Camel Milk Yoghurt", nameZh: "驼奶酸奶", description: "Rich, slightly funky yoghurt from Bactrian camels — only available in northwest China's desert oases.", mustTry: false, where: "Shazhou Night Market stalls" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Dunhuang Mogao International Airport (DNH) — 13km from city, frequent flights from Lanzhou, Xi'an, Urumqi, Beijing." },
      { mode: "🚄 High-speed rail", details: "Dunhuang Station on the Lanzhou-Xinjiang HSR line. Lanzhou: 4h. Jiayuguan: 1.5h. Urumqi: 5h." },
    ],
    accommodation: "City centre guesthouses and mid-range hotels (¥200–500). Splurge option: Silk Road Dunhuang Hotel (丝路花雨敦煌庄园) — gorgeous courtyard resort (¥800–2,000).",
    travelTips: [
      "Book Mogao Grottoes tickets at least 3 weeks ahead (earlier in summer). The website is in Chinese — use a third-party English booking service if needed.",
      "The Dunhuang Research Academy's digital app recreates cave interiors in VR — download before visiting.",
    ],
    dayTrips: [
      { name: "Yumen Pass & Han Great Wall", nameZh: "玉门关·汉长城", distance: "80km west · 1.5h", description: "The western terminus of the Han dynasty Great Wall — a solitary beacon tower surrounded by nothing but flat Gobi. The Wall here is made of straw and mud, still 4m tall after 2,000 years.", whyGo: "One of the most desolate and historically resonant landscapes in China — the absolute edge of the ancient empire." },
    ],
  },

  zhangye: {
    id: "zhangye", nameZh: "张掖", nameEn: "Zhangye",
    province: "gansu", provinceZh: "甘肃",
    tagline: "Rainbow mountains & the Silk Road crossroads",
    description: "The Zhangye Danxia Geopark is China's most vivid geological spectacle — layered red, yellow, purple, and green striped mountains formed by 24 million years of oxidised mineral deposits. Marco Polo passed through what he called 'the most splendid city in the world' in 1271.",
    image: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=1600&h=900&fit=crop",
    highlights: ["Zhangye Danxia Rainbow Mountains", "Giant Buddha Temple", "Mati Temple", "Shandan Ranch"],
    bestSeason: "June–October — the colours are most vivid after summer rain. July–August is busiest. Morning and evening light intensifies the hues dramatically.",
    attractions: [
      { name: "Zhangye Danxia National Geopark", nameZh: "张掖丹霞国家地质公园", type: "Nature", duration: "Half day to full day", description: "Viewing platforms overlook the striped mountains — each viewpoint reveals a different colour palette. Area 4 (彩色丘陵) is the most intensely coloured; Area 2 has the best elevated perspectives.", tips: "Arrive at the first bus (7:30am, ¥30 shuttle inside park) to get viewpoints before tour groups. The light at sunrise and 1 hour before sunset is extraordinary. Bring sunglasses and water." },
      { name: "Giant Buddha Temple (Dafo Si)", nameZh: "大佛寺", type: "Culture", duration: "1.5 hours", description: "A 34m reclining Buddha in a wooden hall — the largest surviving indoor wooden statue in China, built in 1098. The serene face and the sheer scale of the hall are striking.", tips: "Combine with the Zhangye Museum nearby for a half-day culture block. Entrance ¥40." },
    ],
    food: [
      { name: "Xiaoban Duck Blood Noodles", nameZh: "小板鸭血粉丝", description: "A Zhangye street breakfast — rice noodles in duck blood broth with glass noodles and braised offal.", mustTry: false, where: "Old quarter morning markets" },
      { name: "Zhangye Lamb Skewers", nameZh: "张掖烤串", description: "Corridor lamb from the Shandan racecourse grassland — grazed at high altitude and notably leaner and cleaner-tasting than most Chinese kebab lamb.", mustTry: true, where: "Night market on Minzhu Xilu" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Zhangye West Station on the Lanzhou-Xinjiang HSR. Lanzhou: 2h. Jiayuguan: 40 min. Dunhuang: 1.5h. Xining: 2h." },
    ],
    accommodation: "City centre hotels (¥180–400). A small cluster of guesthouses has developed near the Danxia park entrance (¥200–350).",
    travelTips: [
      "The Danxia park and city centre are 40km apart — plan transport in advance. Taxis (¥80) and tour buses from the train station (¥30/day) are options.",
      "Combine Zhangye with Jiayuguan (40 min by HSR) for a two-night Silk Road leg.",
    ],
    dayTrips: [
      { name: "Jiayuguan Fort", nameZh: "嘉峪关长城", distance: "40 min by HSR", description: "The western terminus of the Ming dynasty Great Wall — a magnificent three-tiered fortress where the Wall meets the Gobi Desert, with the Qilian Mountains as a backdrop.", whyGo: "The western end of the Great Wall — as iconic as Badaling but visited by a fraction of the crowds." },
    ],
  },

  // ── LIAONING ───────────────────────────────────────────────────────────────
  shenyang: {
    id: "shenyang", nameZh: "沈阳", nameEn: "Shenyang",
    province: "liaoning", provinceZh: "辽宁",
    tagline: "The Manchu capital & gateway to the Northeast",
    description: "Shenyang was the original Manchu capital before the Qing dynasty conquered China in 1644. Its Imperial Palace rivals Beijing's Forbidden City in historical importance, and the city's industrial heritage and rich Northeast cuisine (dongbei cai) make it an authentic counterpoint to polished tourist cities.",
    image: "https://images.unsplash.com/photo-1509629179375-1c38ad17e47c?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509629179375-1c38ad17e47c?w=1600&h=900&fit=crop",
    highlights: ["Shenyang Imperial Palace (UNESCO)", "Zhang Xueliang Former Residence", "9·18 Historical Museum", "Dongtai Street food market"],
    bestSeason: "May–Sep — warm and green. Autumn (Sep–Oct) has crisp clear air and beautiful foliage. Winters are very cold (−15°C) but the city embraces snow.",
    attractions: [
      { name: "Shenyang Imperial Palace (Mukden Palace)", nameZh: "沈阳故宫", type: "Culture", duration: "2.5 hours", description: "A UNESCO World Heritage site — the Manchu palace complex built between 1625 and 1636, before Beijing's Forbidden City was expanded. Smaller than Beijing's but with a distinctive Manchu architectural character the Beijing palace lacks.", tips: "Entrance ¥60 (combined with adjacent museums ¥100). Far less crowded than Beijing's Forbidden City — you can actually linger in the courtyards." },
      { name: "9·18 Historical Museum", nameZh: "九一八历史博物馆", type: "Culture", duration: "2 hours", description: "A serious, unflinching museum marking the 1931 Japanese Manchurian Incident that began 14 years of occupation. The outdoor calendar-shaped building and the intact 1931 railway bomb site are harrowing.", tips: "Free entry. Allow 2 hours; the exhibits are dense and emotionally heavy." },
      { name: "Zhang Xueliang Former Residence", nameZh: "张学良旧居", type: "Culture", duration: "1.5 hours", description: "The mansion of the 'Young Marshal' who kidnapped Chiang Kai-shek in the Xi'an Incident of 1936 — a pivotal moment that forced the Nationalist-Communist alliance against Japan.", tips: "The main building is a beautiful fusion of Chinese and Western architecture. The Marshal's personal history is told through excellent exhibits." },
    ],
    food: [
      { name: "Dongbei Pork Stew & Sauerkraut (Xue Cai)", nameZh: "猪肉炖酸菜", description: "Northeast China's winter classic — pork belly and glass noodles simmered with fermented Chinese sauerkraut in a clay pot until falling-apart tender.", mustTry: true, where: "Any dongbei home-cooking restaurant — try Lao Bian Dumpling (老边饺子) area near Shenyang Palace" },
      { name: "Shenyang Old Bian Dumplings", nameZh: "老边饺子", description: "Founded in 1829, these pan-fried pork and cabbage dumplings (guotie) are Shenyang's most famous food institution.", mustTry: true, where: "Lao Bian Dumpling Restaurant — multiple locations, original on Zhongyang Dajie" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Shenyang Taoxian International Airport (SHE) — 21km from city, metro Line 2 extension connects (30 min)." },
      { mode: "🚄 High-speed rail", details: "Shenyang North Station. Beijing: 3h. Dalian: 1h30min. Changchun: 1h20min. Harbin: 2h." },
    ],
    accommodation: "City centre near the Imperial Palace (¥200–500). Business hotels cluster in Heping district (¥350–700).",
    travelTips: [
      "The Dongtai Street Antique Market is one of the Northeast's best — every Sunday from 6am, with Qing dynasty furniture, jade, and Cultural Revolution memorabilia.",
      "Shenyang's winter street food (roasted sweet potato, maize, lamb skewers on a bed of coal embers) is some of the most atmospheric in northern China.",
    ],
    dayTrips: [
      { name: "Benxi Water Cave", nameZh: "本溪水洞", distance: "70km · 1.5h", description: "One of Asia's longest underground waterways — 2.8km of illuminated cave ceilings above a navigable underground river. Boat rides through the stalactites.", whyGo: "A geological wonder that is significantly undervisited outside Northeast China." },
    ],
  },

  dalian: {
    id: "dalian", nameZh: "大连", nameEn: "Dalian",
    province: "liaoning", provinceZh: "辽宁",
    tagline: "Coastal cliffs, seafood & a Russian legacy",
    description: "China's most beautiful port city — Dalian has broad Russian and Japanese colonial boulevards, dramatic Yellow Sea coastline, fresh seafood from the Bo Hai, and a cleanliness and urban planning that outclasses almost any city its size in China.",
    image: "https://images.unsplash.com/photo-1562604898-a539ca4e17dd?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1562604898-a539ca4e17dd?w=1600&h=900&fit=crop",
    highlights: ["Golden Pebble Beach", "Xinghai Square & Bay", "Bingyugou Valley", "Fresh seafood markets"],
    bestSeason: "Jun–Oct — warm, coastal and sunny. Avoid July–August peak (very crowded beaches). Spring has fog but is pleasant. Winters are cold but significantly milder than inland Northeast.",
    attractions: [
      { name: "Golden Pebble Beach", nameZh: "金石滩", type: "Nature", duration: "Half day", description: "The finest coastal geology in northeast China — smooth golden pebble beaches and dramatic headlands, with 600-million-year-old rock formations sculpted by the Yellow Sea.", tips: "15km from downtown; take the metro or taxi. The headland walk (Dinosaur Footprint area) is free and spectacular." },
      { name: "Xinghai Square & Bay", nameZh: "星海广场·星海湾", type: "Landmark", duration: "2 hours", description: "One of the world's largest public squares (176 ha) built on reclaimed land — broad promenades, the Dalian Shell Museum, and views back to the city skyline.", tips: "The night walk along Xinghai Bay is a Dalian institution. The seafood restaurant strip east of the square is ideal for dinner." },
      { name: "Dalian Forest Zoo", nameZh: "大连森林动物园", type: "Nature", duration: "3 hours", description: "One of China's best zoos — open-air enclosures on Tiger Mountain, with cable-car views. The wild cat enclosures are the highlight.", tips: "The safari area (¥30 extra) uses open-top buses through lion and tiger enclosures — worthwhile." },
    ],
    food: [
      { name: "Sea Urchin (Hai Dan)", nameZh: "海胆", description: "Dalian sea urchin from the Bo Hai is among the sweetest in Asia — eaten raw over rice or sashimi-style. The season is June–September.", mustTry: true, where: "Seafood wholesale market at Shuishichang early morning (7–9am)" },
      { name: "Abalone Porridge", nameZh: "鲍鱼粥", description: "Slow-cooked rice porridge with whole Bo Hai abalone — delicate, oceanic, and the ultimate Dalian breakfast.", mustTry: true, where: "Seafood restaurants around the port area" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Dalian Zhoushuizi International Airport (DLC) — 12km from city, metro Line 2 (20 min)." },
      { mode: "🚄 High-speed rail", details: "Dalian Station or Dalian North. Shenyang: 1h30min. Beijing: 5h. Ferry also available: Yantai (Shandong) — overnight ferry across Bo Hai." },
    ],
    accommodation: "Zhongshan Square area for colonial-era hotel grandeur (¥350–800). Xinghai Bay for beach access (¥300–600). Budget guesthouses near the port (¥150–300).",
    travelTips: [
      "Dalian is one of the few Chinese cities where you can walk comfortably — the grid of Russian-designed roundabouts makes navigation intuitive.",
      "The overnight ferry to Yantai (山东) is a great way to continue a coastal China journey without backtracking.",
    ],
  },

  // ── JILIN ──────────────────────────────────────────────────────────────────
  changbaishan: {
    id: "changbaishan", nameZh: "长白山", nameEn: "Changbai Mountain",
    province: "jilin", provinceZh: "吉林",
    tagline: "Volcanic crater lake on the Korea border",
    description: "Changbai Mountain is Northeast China's crown jewel — a vast volcanic complex straddling the China-North Korea border, topped by Tianchi, the world's deepest volcanic crater lake at 373m depth. The surrounding boreal forest, hot spring rivers, and Manchu sacred site mythology make it unlike anywhere else in China.",
    image: "https://images.unsplash.com/photo-1601766994656-00d5c8b89f71?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1601766994656-00d5c8b89f71?w=1600&h=900&fit=crop",
    highlights: ["Tianchi Crater Lake", "Changbai Waterfall", "Underground Forest", "Hot spring valley"],
    bestSeason: "Jun–Sep for Tianchi views (cloud-free windows are rare — summer has the best odds). Ski season Dec–Mar is excellent. Autumn (Sep–Oct) has brilliant foliage.",
    attractions: [
      { name: "Tianchi Crater Lake", nameZh: "天池", type: "Nature", duration: "3 hours", description: "A perfectly round volcanic caldera lake at 2,189m altitude — the deepest in China, fed by snowmelt and volcanic springs. On clear days, the surface mirror-reflects the surrounding cone.", tips: "The north slope bus to the crater (¥80) is the main access. Pack warm layers — even in July the crater rim can be below 5°C and windy. Clear views are genuinely unpredictable; 3 days minimum gives you a better chance." },
      { name: "Changbai Waterfall", nameZh: "长白瀑布", type: "Nature", duration: "1 hour", description: "The Tianchi outflow cascades 68m down the volcanic cone wall — the highest waterfall in northeast China, framed by dark basalt columns.", tips: "15 min walk from the crater rim viewpoint on the north slope. The angle of the falls from below is the most dramatic view." },
      { name: "Hot Spring Valley", nameZh: "温泉区", type: "Nature", duration: "1 hour", description: "A valley of boiling volcanic springs at the mountain base, some reaching 82°C. You can hard-boil eggs in the pools (sold at the entrance). The steam in winter creates a fairy-tale atmosphere.", tips: "Free to walk; eggs cost ¥15 a batch. Combine with the Underground Forest on the south slope." },
    ],
    food: [
      { name: "Wild Mushroom Hotpot", nameZh: "野生菌火锅", description: "Changbai Mountain produces extraordinary wild mushrooms — pine, chanterelle, black fungus, matsutake. Hotpot with mountain mushroom broth is the definitive meal here.", mustTry: true, where: "Restaurants in Erdao Baihe town (the main base)" },
      { name: "Cold Noodles (Lengmian)", nameZh: "冷面", description: "Korean-style cold buckwheat noodles in icy beef broth with pickled vegetables — the ethnic Korean (Chaoxianzu) community around Changbai makes the best version outside Korea.", mustTry: true, where: "Yanji city (朝鲜族冷面) if transiting" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Changchun or Yanji airports are the nearest. From Changchun: 4h by road or bus to Erdao Baihe base town. From Yanji: 2h by road." },
      { mode: "🚄 Rail", details: "High-speed rail to Baihe (白河) — Changchun to Baihe: 3.5h. Then 30-min shuttle to scenic area entrance." },
    ],
    accommodation: "Erdao Baihe town has hotels (¥200–500) and guesthouses. Inside the scenic area: Changbai Mountain Resort (¥600–1,500). Ski season accommodation fills months in advance.",
    travelTips: [
      "Cloud cover at Tianchi is common — check the scenic area's weather webcam before ascending. Early mornings (7–9am) tend to have the clearest windows.",
      "The north slope (北坡) is the most scenic access route; the west slope (西坡) offers a longer wilderness hike with fewer crowds.",
    ],
  },

  harbin: {
    id: "harbin", nameZh: "哈尔滨", nameEn: "Harbin",
    province: "heilongjiang", provinceZh: "黑龙江",
    tagline: "China's winter capital & ice sculpture city",
    description: "Harbin is one of the great cold-weather cities of the world — built by Russian railway engineers in 1898, it has Saint Sophia Cathedral, tree-lined Art Nouveau boulevards, and the annual International Ice and Snow Sculpture Festival: a surreal city of 10-storey ice castles illuminated in neon colour that draws two million visitors each January.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&h=900&fit=crop",
    highlights: ["Ice & Snow Festival (January)", "Saint Sophia Cathedral", "Central Avenue (Zhongyang Dajie)", "Siberian Tiger Park"],
    bestSeason: "Dec–Feb for the Ice Festival — bitterly cold (−25°C) but extraordinary. June–August is warm and pleasant for a normal city visit. Avoid shoulder seasons (March, November).",
    attractions: [
      { name: "Harbin Ice & Snow World", nameZh: "哈尔滨冰雪大世界", type: "Culture", duration: "3 hours (evening)", description: "A 600,000 sq m park of ice sculptures — towers, castles, and replicas of world landmarks carved from blocks of Songhua River ice, illuminated at night in electric colour. Only open December–February.", tips: "Visit after dark (6–9pm) when the LED illumination is activated. Rent padded suits (¥30) at the entrance — proper clothing is essential at −20°C. Buy tickets online." },
      { name: "Saint Sophia Cathedral", nameZh: "圣索菲亚大教堂", type: "Culture", duration: "1.5 hours", description: "A magnificent Russian Orthodox cathedral built in 1907 — Byzantine green domes rise above the surrounding Harbin streetscape. Now a museum of Harbin's Russian colonial history.", tips: "The interior murals are partially restored. Best photographed at dusk when the exterior is lit. Entrance ¥20." },
      { name: "Central Avenue (Zhongyang Dajie)", nameZh: "中央大街", type: "Culture", duration: "2 hours", description: "A 1.4km pedestrian boulevard paved with granite cobbles — lined with Russian, Baroque, Gothic, and Art Nouveau buildings from the 1898–1932 period. The most atmospheric street in Northeast China.", tips: "Walk the full length from the river end (Flood Control Monument) southward. The Madier Hotel and Department stores are architecturally significant. Best at night when lit." },
    ],
    food: [
      { name: "Harbin Red Sausage", nameZh: "哈尔滨红肠", description: "A smoked garlic pork sausage with Russian origins — the most famous food souvenir in Northeast China, sold vacuum-packed for easy travel.", mustTry: true, where: "Qiulin Department Store (秋林公司) — the original brand since 1900" },
      { name: "Di San Xian (Three Fresh Stir-fry)", nameZh: "地三鲜", description: "Aubergine, potato, and green pepper stir-fried together with garlic — the definitive dongbei vegetable dish, eaten everywhere in Northeast China.", mustTry: true, where: "Dongbei (northeast) home-cooking restaurants throughout the city" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Harbin Taiping International Airport (HRB) — 33km west, metro Line 3 (40 min)." },
      { mode: "🚄 High-speed rail", details: "Harbin West Station. Shenyang: 2h. Beijing: 6.5h. Mudanjiang: 1.5h. Changchun: 45 min." },
    ],
    accommodation: "Central Avenue area for Russian-era atmosphere (¥300–700). Ice Festival season (Jan): book 3 months ahead and expect 2× normal prices. Budget hostels in Daoli district (¥120–250).",
    travelTips: [
      "The January temperature regularly drops to −30°C. Layers are essential: thermal base, down mid-layer, wind-blocking outer. Ear protection is critical.",
      "Harbin Central Avenue's Russian pastry shops (like Dongfang Qiaokelike) sell chocolate and European pastries — delicious and reasonable.",
      "The Songhua River freezes solid enough to drive cars across in winter — the riverbank winter market is a free spectacle.",
    ],
    dayTrips: [
      { name: "China Snow Town (Xuexiang)", nameZh: "中国雪乡", distance: "280km south · 4h", description: "A remote mountain logging village that receives the heaviest snowfall in China — houses buried to the eaves, forest trails, and ski terrain. Peak season: December–February.", whyGo: "The most photogenic winter village in China — the fairytale snow accumulation is something you can barely believe is real." },
    ],
  },

  // ── NINGXIA ────────────────────────────────────────────────────────────────
  yinchuan: {
    id: "yinchuan", nameZh: "银川", nameEn: "Yinchuan",
    province: "ningxia", provinceZh: "宁夏",
    tagline: "Western Xia pyramids & Halal heartland",
    description: "Yinchuan was the capital of the Tangut Western Xia Kingdom (1038–1227 AD), a vanished civilisation that created its own script, art, and architecture before being annihilated by Genghis Khan. The Western Xia Imperial Tombs — 9 pyramid-mounds in the desert — are among China's most evocative forgotten ruins.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop",
    highlights: ["Western Xia Imperial Tombs", "Helan Mountain Rock Art", "Ningxia Halal cuisine", "Yellow River wetlands"],
    bestSeason: "Apr–Jun and Sep–Oct — warm and dry. Summers are hot (35°C) but low humidity. Winters are cold but the desert scenery is stark and beautiful.",
    attractions: [
      { name: "Western Xia Imperial Tombs", nameZh: "西夏王陵", type: "Culture", duration: "3 hours", description: "Nine earth-mound mausoleums and 250 subsidiary tombs spread across a 53 sq km desert plain — an entire dynasty's burial ground. The scale and desolation are haunting.", tips: "Entrance ¥75. The on-site museum explains the extraordinary Western Xia script and civilisation. Go in the late afternoon when the low sun casts long shadows across the mounds." },
      { name: "Helan Mountain Rock Art", nameZh: "贺兰山岩画", type: "Culture", duration: "2 hours", description: "Over 3,000 prehistoric petroglyphs carved into the Helan Mountain cliff-faces — human figures, animals, sun symbols, and abstract patterns dating back 10,000 years.", tips: "Combined with the adjacent Su Yu Kou scenic valley, this is a half-day well spent. The Visitor Centre has excellent 3D replicas of the most significant panels." },
    ],
    food: [
      { name: "Lamb Stuffed Flatbread (Tianshui Mingjia)", nameZh: "手抓羊肉", description: "Hand-pulled lamb — boiled in a large pot and served whole to the table, eaten by hand with salt and cumin. The Hui Muslim preparation of Ningxia Tan sheep is the finest in China.", mustTry: true, where: "Halal restaurants in the Xincheng district" },
      { name: "Wolfberry Wine & Dishes", nameZh: "枸杞", description: "Ningxia produces 70% of China's wolfberries (goji) — used in teas, wines, and stewed dishes. The fresh season (August) is the best time to try them.", mustTry: false, where: "Supermarkets and specialty food shops" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Yinchuan Hedong International Airport (INC) — 20km east, taxi ¥60." },
      { mode: "🚄 High-speed rail", details: "Yinchuan Station. Lanzhou: 3h. Xi'an: 4h. Zhongwei: 45 min. Connection to the national HSR network at Zhongwei." },
    ],
    accommodation: "City centre near Gulou (¥200–450). New district hotels near the convention centre (¥300–600).",
    travelTips: [
      "Friday noon prayers at Nanguan Mosque (南关清真寺) — one of China's largest mosques — are open to respectful non-Muslim observers.",
      "The Shapotou sand dunes are 1.5h south by bus — combine with Zhongwei on a multi-day loop.",
    ],
    dayTrips: [
      { name: "Shapotou Desert", nameZh: "沙坡头", distance: "100km · 1.5h", description: "Where the singing sand dunes of the Tengger Desert meet the Yellow River — one of the most dramatic landscape contrasts in China. Zip-lining, camel riding, and sand sledging.", whyGo: "The Yellow River bending through desert dunes is a landscape that looks implausible until you're standing in front of it." },
    ],
  },

  // ── INNER MONGOLIA ─────────────────────────────────────────────────────────
  hohhot: {
    id: "hohhot", nameZh: "呼和浩特", nameEn: "Hohhot",
    province: "neimenggu", provinceZh: "内蒙古",
    tagline: "Mongolian culture & the gateway to the grasslands",
    description: "The capital of Inner Mongolia, Hohhot ('Blue City' in Mongolian) is the cultural centre of Chinese Mongolian identity — with the Da Zhao Temple, Mongolian script everywhere, and dairy products on every corner. It is also the departure point for the grassland experiences that make Inner Mongolia famous.",
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=1600&h=900&fit=crop",
    highlights: ["Da Zhao Temple", "Inner Mongolia Museum", "Xilamuren Grassland", "Mongolian dairy culture"],
    bestSeason: "Jun–Sep — warm days, cool nights on the grassland. Naadam Festival (late July) is spectacular. Winter is −20°C but the grassland in snow is remarkable for photography.",
    attractions: [
      { name: "Da Zhao Temple (Wuliang Temple)", nameZh: "大召无量寺", type: "Culture", duration: "1.5 hours", description: "A 16th-century Tibetan Buddhist temple — the oldest and grandest in Hohhot, famous for its silver Buddha, dragon sculptures, and the mural of Kangxi's visit.", tips: "Free entry. Morning prayer ceremonies (8–9am) are open to visitors — deeply atmospheric." },
      { name: "Inner Mongolia Museum", nameZh: "内蒙古博物院", type: "Culture", duration: "3 hours", description: "The finest collection of Mongolian cultural artefacts in China — dinosaur fossils (Inner Mongolia has the world's richest deposits), imperial-era saddles, and an entire floor on nomadic life.", tips: "Free entry. Allow at least 2.5 hours. The new building (2008) has dramatic architecture shaped like a horse and traditional patterns." },
    ],
    food: [
      { name: "Hand-Pulled Mutton (Shou Zhua Rou)", nameZh: "手抓肉", description: "Mongolian hand-pulled lamb — boiled whole in large pots, served directly to the table and eaten with salt. The grassland lamb flavour is completely different from southern China's.", mustTry: true, where: "Mongolian restaurants throughout the city — Grassland Lamb (草原羊肉) chains are reliable" },
      { name: "Mongolian Milk Tea (Nai Cha)", nameZh: "奶茶", description: "Salted milk tea brewed with roasted millet — the traditional Mongolian drink that sustains life on the grassland. Served in a large bowl.", mustTry: true, where: "Traditional Mongolian teahouses in the old city" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Hohhot Baita International Airport (HET) — 15km east, taxi ¥40." },
      { mode: "🚄 High-speed rail", details: "Hohhot East Station. Beijing: 2.5h. Datong: 1.5h. Yinchuan: 3h." },
    ],
    accommodation: "City centre near Xinhua Square (¥180–450). Grassland camp stays (蒙古包) available 100km north via tour operators — book packages from Hohhot (¥400–800/night including meals and activities).",
    travelTips: [
      "Grassland trips (Xilamuren or Gegentala, 100km north) are best booked as 2-day packages including yurt accommodation and sunset/sunrise horse riding.",
      "The Naadam Festival (七月节) in late July features traditional Mongolian wrestling, archery, and horse racing — one of China's most colourful minority festivals.",
    ],
    dayTrips: [
      { name: "Xilamuren Grassland", nameZh: "希拉穆仁草原", distance: "100km north · 1.5h", description: "The closest accessible Inner Mongolian grassland to Hohhot — yurt camps, horse riding, eagle shows, and overnight stays under Milky Way skies.", whyGo: "The open grassland horizon, horse culture, and star-filled nights are an antidote to every Chinese city." },
    ],
  },

  hulunbuir: {
    id: "hulunbuir", nameZh: "呼伦贝尔", nameEn: "Hulunbuir",
    province: "neimenggu", provinceZh: "内蒙古",
    tagline: "The world's finest grassland & primeval forest",
    description: "Hulunbuir grassland is consistently rated the most pristine and beautiful in the world — 93,000 sq km of rolling green steppe where the Evenki, Oroqen, and Mongolian peoples have herded for millennia. The primeval forest of the Greater Khingan Range to the north, and the Russian-influenced city of Manzhouli on the Mongolian border, make this a destination for adventurous travellers.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=900&fit=crop",
    highlights: ["Hulunbuir Grassland", "Manzhouli border city", "Greater Khingan forest", "Evenki reindeer herders"],
    bestSeason: "Jun–Aug — the grassland is green and lush. Mid-July is peak green. Winter (Dec–Feb) has a stark beauty but is bitterly cold (−30°C). Autumn (Sep) has golden tones and clear air.",
    attractions: [
      { name: "Root River Wetlands", nameZh: "根河湿地", type: "Nature", duration: "Full day", description: "The Mooergen and Root Rivers meander through pristine boreal wetlands in endless oxbow loops — views from the observation tower rank among China's most extraordinary landscapes.", tips: "Hire a private car from Genhe city (¥300–500/day) to access the viewpoints. The sunset over the meanders is world-class." },
      { name: "Manzhouli", nameZh: "满洲里", type: "Culture", duration: "Half day to full day", description: "A surreal border city on the Russia-Mongolia-China frontier — Russian Matryoshka dolls the size of buildings, Russian-language signage everywhere, and the busiest land port between China and Russia.", tips: "The Matryoshka Doll Square and the Lake Hulun wetland viewpoints are the highlights. Russian food restaurants are excellent and cheap." },
    ],
    food: [
      { name: "Roast Whole Lamb", nameZh: "烤全羊", description: "A ceremonial whole lamb roasted over wood — Mongolian hospitality's highest expression. Ordered in advance for groups.", mustTry: true, where: "Grassland camp restaurants or traditional restaurants in Hailar city" },
      { name: "Reindeer Milk Products", nameZh: "驯鹿奶", description: "The Evenki herding community around Genhe makes fresh reindeer milk yoghurt and cheese — rare and extraordinary.", mustTry: false, where: "Aoluguya Evenki village near Genhe" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Hailar Dongshan Airport (HLD) — in the main city. Flights to Beijing (2.5h), Shenyang, and Harbin." },
      { mode: "🚄 Rail", details: "Train from Harbin to Hailar: 6h (no HSR yet for this route). Night train options available." },
    ],
    accommodation: "Hailar city for comfortable hotels (¥200–450). Grassland yurt camps (蒙古包) offer full-immersion stays including meals and horse activities (¥400–700/night).",
    travelTips: [
      "July is peak tourism — book accommodation and camp stays 2 months ahead.",
      "Rent a car in Hailar for the Root River wetland loop (400km) — public transport doesn't reach the key viewpoints.",
      "The Evenki reindeer village (鄂温克族自治旗) north of Hailar is a genuine cultural encounter — the community still migrates seasonally with their deer.",
    ],
  },

  // ── HAINAN ─────────────────────────────────────────────────────────────────
  haikou: {
    id: "haikou", nameZh: "海口", nameEn: "Haikou",
    province: "hainan", provinceZh: "海南",
    tagline: "Tropical old town & gateway to Hainan Island",
    description: "The capital of China's tropical island province has one of the best-preserved Chinese colonial streetscapes — the Qilou arcaded buildings of Haikou's old town echo the Overseas Chinese shophouse architecture of Singapore and Penang. Fresh seafood, Hainanese chicken rice, and year-round warmth make it the perfect winter base.",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1600&h=900&fit=crop",
    highlights: ["Qilou Old Street", "Evergreen Park", "Hainanese seafood", "Volcanic Rock Park"],
    bestSeason: "Oct–Apr — dry season with warm days (25–30°C). May–September brings typhoons and heavy rains. Haikou is notably more authentic and less developed than Sanya.",
    attractions: [
      { name: "Qilou Old Street", nameZh: "骑楼老街", type: "Culture", duration: "2 hours", description: "A mile of arcade shophouses built in the 1920s–30s by returning Overseas Chinese — the arcaded walkways, green shutters, and carved facades are perfectly preserved. The best historic street in tropical China.", tips: "Best explored in the evening when hawker stalls emerge and the lights come on. Zhongshan Road and Xinhua Road are the heart of it." },
      { name: "Volcanic Rock Park (Leiqiong)", nameZh: "雷琼世界地质公园", type: "Nature", duration: "3 hours", description: "Haikou was built on ancient lava flows — the park contains dozens of extinct volcanic craters, cave tunnels, and basalt stone fields, along with a 2,000-year-old village built entirely of volcanic rock.", tips: "Rent a bicycle inside the park (¥30) — the lava field circuit is 8km. The Madao Cinder Cone is the most accessible volcanic viewpoint." },
    ],
    food: [
      { name: "Hainanese Chicken Rice", nameZh: "文昌鸡饭", description: "The original Hainanese chicken rice — poached Wenchang chicken over fragrant rice with ginger-scallion sauce. The dish that Singapore made world-famous was created by Hainanese emigrants.", mustTry: true, where: "Fucheng Restaurant (福城文昌鸡) on Heping South Road" },
      { name: "Hele Crab", nameZh: "和乐蟹", description: "Hele crabs from the east coast of Hainan — steamed or stir-fried with ginger, slightly sweet and dense with roe. One of the best freshwater crabs in China.", mustTry: true, where: "Seafood restaurants around Haikou Port or the night markets" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Haikou Meilan International Airport (HAK) — 25km east, metro Line 1 (30 min)." },
      { mode: "🚄 High-speed rail (island loop)", details: "Hainan Eastern Ring HSR connects Haikou to Sanya in 1.5h. The Western Ring HSR completes the loop. Both routes offer spectacular coastal and highland scenery." },
    ],
    accommodation: "Qilou Old Street area for colonial atmosphere (¥200–450). International hotels in Guomao district (¥400–800). Boneyard Surf Camp near Qionghai (¥250–400) for surfers.",
    travelTips: [
      "The free trade zone status (2021) means imported goods are cheaper in Hainan than mainland China — electronics, cosmetics, and alcohol shopping is popular.",
      "Haikou's morning market (Nan Sheng Supermarket area) from 6–9am is one of the most vibrant food scenes in southern China.",
    ],
    dayTrips: [
      { name: "Sanya", nameZh: "三亚", distance: "300km · 1.5h by HSR", description: "China's tropical beach capital — Yalong Bay and Dadonghai Beach, the giant Buddha of Nanshan, and the duty-free shopping of Haitang Bay.", whyGo: "The HSR makes a Sanya day trip entirely feasible if you want the full island experience without an extra overnight." },
    ],
  },

  // ── HEBEI ──────────────────────────────────────────────────────────────────
  chengde: {
    id: "chengde", nameZh: "承德", nameEn: "Chengde",
    province: "hebei", provinceZh: "河北",
    tagline: "The Qing imperial summer retreat",
    description: "Chengde was where the Qing emperors spent their summers — the Mountain Resort (Bishu Shanzhuang) is the largest imperial garden in China, and surrounding it are eight magnificent temples modelled after the sacred sites of Tibet, Mongolia, and Central Asia. A diplomatic masterpiece disguised as a pleasure garden.",
    image: "https://images.unsplash.com/photo-1525038083052-41b3b8c91e55?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1525038083052-41b3b8c91e55?w=1600&h=900&fit=crop",
    highlights: ["Mountain Resort (Bishu Shanzhuang)", "Puning Temple Giant Buddha", "Putuozongcheng Temple", "Eight Outer Temples"],
    bestSeason: "May–Oct — the mountain resort gardens are at their most beautiful. Autumn foliage (Oct) is spectacular. Avoid winter (cold, many sites close).",
    attractions: [
      { name: "Mountain Resort (Bishu Shanzhuang)", nameZh: "避暑山庄", type: "Culture", duration: "Full day", description: "A UNESCO World Heritage site — 564 hectares of imperial gardens, lakes, pavilions, and forested mountains enclosed within a 10km wall. Built by Kangxi and Qianlong emperors (1703–1792) as the summer capital.", tips: "The full circuit on foot takes 6 hours. Rent a bicycle or electric cart at the main entrance. The lake section is most beautiful; the mountain trails in the north are quiet and forested." },
      { name: "Puning Temple & Giant Buddha", nameZh: "普宁寺·千手观音", type: "Culture", duration: "2 hours", description: "Built in 1755 to celebrate a military victory over Mongolian rebels — modelled after Tibet's Samye Monastery. The main hall houses the world's tallest indoor wooden statue: a 22m Guanyin Bodhisattva carved from five ancient trees.", tips: "Arrive at 8am for morning prayer ceremonies with resident monks. Entrance ¥80. The rear hillside pagodas are rarely visited and offer good views." },
    ],
    food: [
      { name: "Chengde Pea Flour Cake", nameZh: "承德碗坨", description: "Buckwheat and pea flour jelly — cold, springy slabs dressed with sesame paste, vinegar, chilli, and garlic. Sold by street vendors throughout the city.", mustTry: true, where: "Street stalls near the Mountain Resort south gate" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Chengde South Station. Beijing: 1h30min. Shenyang: 3h." },
    ],
    accommodation: "Hotels near the Mountain Resort south gate (¥200–500). The resort itself has no internal lodging — day visits only.",
    travelTips: [
      "Buy the combined ticket (¥145) covering both the Mountain Resort and the Eight Outer Temples — individual prices add up significantly.",
      "The temples are spread over a large area — hire a taxi for the full circuit (¥150–200 half day) rather than walking between them.",
    ],
  },

  // ── TIANJIN ────────────────────────────────────────────────────────────────
  tianjin_city: {
    id: "tianjin_city", nameZh: "天津", nameEn: "Tianjin",
    province: "tianjin", provinceZh: "天津",
    tagline: "European concessions & the home of jianbing",
    description: "An hour from Beijing by high-speed rail, Tianjin has a remarkable European architectural legacy — five colonial concessions (Italian, French, British, German, Japanese) with intact streetscapes, alongside Goubuli steamed buns, the finest traditional Chinese opera (Tianzu), and a street food culture that claims to have invented the jianbing crepe.",
    image: "https://images.unsplash.com/photo-1568895706332-28c5e023adcc?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1568895706332-28c5e023adcc?w=1600&h=900&fit=crop",
    highlights: ["Italian Concession streetscape", "Five Great Avenues", "Ancient Culture Street", "Goubuli dumplings"],
    bestSeason: "Apr–Jun and Sep–Nov — mild and dry. Summers are hot; winters cold but manageable. CNY is surprisingly festive with temple fairs.",
    attractions: [
      { name: "Five Great Avenues (Wudadao)", nameZh: "五大道", type: "Culture", duration: "2 hours", description: "The former British Concession — five tree-lined avenues of Edwardian and Victorian mansions, once home to Chinese warlords, foreign merchants, and the deposed Emperor Puyi (who lived here after his Forbidden City expulsion).", tips: "Best explored on foot or by bicycle. The area around Chongqing Road and Munan Road has the most intact mansions. Evening light is the most atmospheric." },
      { name: "Ancient Culture Street", nameZh: "古文化街", type: "Culture", duration: "1.5 hours", description: "A rebuilt Qing dynasty commercial street with folk art shops, clay figure studios (Zhang's Clay Figurines), and the Tianhou Temple — the most important Mazu (sea goddess) temple in northern China.", tips: "Free to enter the street. Avoid mass-produced tourist goods — Zhang's Clay Figurines (泥人张) are the genuine artform. The Tianhou Temple interior is worth ¥5 entry." },
      { name: "Italian Concession (Yidali Fengqing Qu)", nameZh: "意式风情区", type: "Culture", duration: "1.5 hours", description: "A perfectly intact Italian Quarter built 1902–1943 — pink and cream plaster colonnades, a central piazza, and the former home of nationalist leader Cao Kun. More authentic than Shanghai's Xintiandi renovation.", tips: "The area around Maserati Square (马赛地广场) and the Marco Polo Square is the most photogenic. Cafés and Italian restaurants fill the ground floor of the old buildings." },
    ],
    food: [
      { name: "Goubuli Steamed Buns", nameZh: "狗不理包子", description: "Tianjin's most famous dish — plump pork-filled xiaolongbao style steamed buns in a bamboo steamer. The original Goubuli brand has been making them since 1858.", mustTry: true, where: "Goubuli Restaurant on Shandong Road (original location)" },
      { name: "Jianbing Guozi", nameZh: "煎饼果子", description: "The breakfast crepe that spread across all of China — Tianjin's version uses mung bean batter with egg, crispy wonton, and fermented bean paste. The original and definitive version.", mustTry: true, where: "Street vendors throughout the city — especially around the main train station" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail from Beijing", details: "Beijing South to Tianjin: 30 min by G-train (¥54). The fastest city link in China — makes Tianjin a comfortable day trip from Beijing." },
      { mode: "🚇 Tianjin Metro", details: "9 metro lines connect all major attractions. Day card (¥12) is worthwhile for multiple journeys." },
    ],
    accommodation: "Five Great Avenues area for colonial hotel atmosphere (¥300–700). Downtown near the railway station (¥200–450). Budget options in Hongqiao district (¥120–250).",
    travelTips: [
      "Tianjin is easily combined with Beijing as a day trip or one-night extension — the 30-minute HSR makes it the most accessible major city from the capital.",
      "The Tanggu cruise port district (40 min by metro) has fresh seafood markets and is where international cruise ships dock.",
      "Tianjin's folk art scene is exceptional — besides clay figurines, look for Yang Liu Qing woodblock New Year prints (a 400-year tradition) and kite making workshops.",
    ],
    dayTrips: [
      { name: "Beijing", nameZh: "北京", distance: "130km · 30 min by G-train", description: "The Forbidden City, Summer Palace, Temple of Heaven, and hutong culture — the world's greatest concentration of imperial heritage.", whyGo: "The ultimate commute: if based in Tianjin, Beijing's major sites are accessible on a series of easy day trips.", adminNote: "Beijing is a direct municipality, not part of Tianjin — cross-municipality day trip via HSR." },
    ],
  },

  // ── BATCH: ONE NEW PER PROVINCE (popular regions) ─────────────────────────
  wuzhen: {
    id: "wuzhen", nameZh: "乌镇", nameEn: "Wuzhen",
    province: "zhejiang", provinceZh: "浙江",
    tagline: "China's most perfectly preserved water town",
    description: "Wuzhen is what all of Jiangnan's famous water towns aspire to be — two adjacent neighbourhoods of black-tile houses on still canals, where dyers hang indigo cloth and silk looms still operate inside Ming dynasty workshops. The West Zone (西栅) is especially beautiful at night when stone bridges reflect in lamplight.",
    image: "https://images.unsplash.com/photo-1537531510192-bba6dde32453?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1537531510192-bba6dde32453?w=1600&h=900&fit=crop",
    highlights: ["West Zone (Xizha) night scenery", "Indigo dyeing workshops", "Grand Canal connection", "Traditional silk weaving"],
    bestSeason: "Mar–May and Sep–Nov — misty mornings and manageable crowds. June–August is peak and rainy. December–January has magical fog.",
    attractions: [
      { name: "Xizha West Zone", nameZh: "西栅景区", type: "Culture", duration: "4 hours", description: "The larger and more intact of Wuzhen's two zones — 1.8km of canal-side lanes, 12 stone bridges, and heritage workshops for dye, silk, and bamboo weaving. The overnight stay ticket includes the illuminated evening.", tips: "The evening light show (7–10pm) is dramatically beautiful. Buy a combined ticket (¥150) that includes both east and west zones. Staying inside the zone means experiencing it after day-trippers leave." },
      { name: "Dongzha East Zone", nameZh: "东栅景区", type: "Culture", duration: "2 hours", description: "The original tourist zone — narrower lanes, local artisan shops, and the Mao Dun Former Residence (birthplace of the early 20th-century novelist).", tips: "Less atmospheric than Xizha but good for morning walking when the light comes in sideways over the canals." },
    ],
    food: [
      { name: "White Water Fish", nameZh: "白水鱼", description: "Local canal fish steamed simply with ginger and soy — the freshwater version shows why Jiangnan cooks claim less is more.", mustTry: true, where: "Restaurants inside the West Zone" },
      { name: "Wuzhen Rice Wine", nameZh: "乌镇黄酒", description: "Amber-coloured Shaoxing-style rice wine brewed in Wuzhen — slightly sweet, served warm in earthenware.", mustTry: false, where: "Traditional wine shops on Xizha's main canal" },
    ],
    transportation: [
      { mode: "🚌 From Hangzhou or Shanghai", details: "Direct buses from Hangzhou East Bus Station (1.5h, ¥40) and Shanghai Hongqiao Transport Hub (2h, ¥65). No direct rail — the scenic area is 10km from Tongxiang HSR station (taxi ¥30)." },
    ],
    accommodation: "Staying inside the West Zone overnight (¥600–1,500) is strongly recommended — the price includes evening and morning access before day-trippers arrive. Budget option: guesthouses in Tongxiang city (¥150–300) plus day-ticket.",
    travelTips: [
      "Wuzhen hosts the World Internet Conference (October/November) — avoid those dates as prices triple and the town fills with officials.",
      "Book accommodation inside the zone at least 2 months ahead for weekends.",
    ],
    dayTrips: [
      { name: "Xitang Water Town", nameZh: "西塘古镇", distance: "40km · 45 min by bus", description: "A smaller, less commercial water town with long covered arcades (廊棚) running the entire canal length. Fewer foreign tourists than Wuzhen.", whyGo: "The most local-feeling of the Jiangnan water towns — the morning fish market and boatmen still go about their work.", adminNote: "Xitang is in Jiaxing County, Zhejiang — short distance west of Wuzhen." },
    ],
  },

  shangrila: {
    id: "shangrila", nameZh: "香格里拉", nameEn: "Shangri-La",
    province: "yunnan", provinceZh: "云南",
    tagline: "Where Tibetan highlands meet Yunnan sky",
    description: "At 3,160m on the Tibetan plateau fringe, Shangri-La (officially Diqing Tibetan Autonomous Prefecture) is China's nearest approximation of the James Hilton utopia that inspired the name. Ganden Sumtseling Monastery gleams on a hill above the old town; the meadows of Pudacuo National Park are the finest highland grassland in Southwest China.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&h=900&fit=crop",
    highlights: ["Ganden Sumtseling Monastery", "Pudacuo National Park", "Dukezong Old Town", "Meili Snow Mountain views"],
    bestSeason: "May–Oct — grasslands green and skies clear. April/May has wildflowers; September/October has golden light. Winter (Nov–Mar) is cold (−10°C) but crystalline and crowd-free.",
    attractions: [
      { name: "Ganden Sumtseling Monastery", nameZh: "噶丹松赞林寺", type: "Culture", duration: "3 hours", description: "The largest Tibetan Buddhist monastery in Yunnan — a mini-Potala of golden roofs and whitewashed halls housing 700+ monks. The main assembly hall murals are extraordinary.", tips: "Arrive by 8am to witness morning prayer sessions. Dress modestly — shoulders and knees covered. The climb to the upper terrace offers the best panorama." },
      { name: "Pudacuo National Park", nameZh: "普达措国家公园", type: "Nature", duration: "4 hours", description: "China's first national park (2007) — alpine meadows, old-growth forests, and two pristine plateau lakes (Shudu and Bita) at 3,500–3,700m. The wooden boardwalk loops are excellent.", tips: "The shuttle bus (included in park ticket ¥258) is mandatory. The Bita Lake section in the afternoon has the best light on the pine reflections." },
      { name: "Dukezong Old Town", nameZh: "独克宗古城", type: "Culture", duration: "2 hours", description: "The Tibetan-style old town — prayer wheel lanes, butter tea houses, and the world's largest hand-turned prayer wheel (¥1 to turn).", tips: "The old town was partly damaged by fire in 2014; the rebuilt sections are reconstructed but the atmosphere remains. Best at dawn before tour groups arrive." },
    ],
    food: [
      { name: "Butter Tea (Bozha)", nameZh: "酥油茶", description: "Tibetan black tea churned with yak butter and salt — savoury, warming, and utterly unlike any other beverage. An acquired taste that becomes necessary at altitude.", mustTry: true, where: "Traditional tea houses in Dukezong Old Town" },
      { name: "Yak Meat Hotpot", nameZh: "牦牛肉火锅", description: "Lean, grass-fed yak beef from the Tibetan plateau — distinctly flavoured, very tender. The Tibetan hotpot broth is mild and fragrant with highland herbs.", mustTry: true, where: "Old town restaurants around the central square" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Diqing Shangri-La Airport (DIG) — 5km from city centre. Flights from Kunming (45 min), Chengdu, Lijiang." },
      { mode: "🚌 Bus from Lijiang", details: "Lijiang to Shangri-La: 4.5h by bus (¥75). Scenic mountain road — sit on the right for best views." },
    ],
    accommodation: "Dukezong Old Town for Tibetan atmosphere (¥300–700). Boutique lodges on the meadow edge of town (¥500–1,200). Budget guesthouses on Changzheng Road (¥100–250).",
    travelTips: [
      "Altitude is 3,160m — take one full day of rest before hiking. Mild headaches are normal; ibuprofen and hydration help.",
      "The drive north to Deqin and the Meili Snow Mountain viewpoint (4h from Shangri-La) is one of the most dramatic in China — highly recommended as a 2-day extension.",
    ],
    dayTrips: [
      { name: "Meili Snow Mountain", nameZh: "梅里雪山", distance: "150km north · 4h", description: "The sacred 13-peak massif on the Yunnan–Tibet border — the highest unclimbed mountain in China (6,740m). The sunrise on Kawagebo peak is one of Asia's great natural spectacles.", whyGo: "Tibetans consider this the most sacred mountain in the world — the sunrise prayer ceremony at Feilaisi lookout point is deeply moving." },
    ],
  },

  daocheng: {
    id: "daocheng", nameZh: "稻城亚丁", nameEn: "Daocheng Yading",
    province: "sichuan", provinceZh: "四川",
    tagline: "The last Shangri-La — three sacred peaks at 4,000m",
    description: "Yading Nature Reserve in Daocheng County is one of the last primeval landscapes in Sichuan — three snow-capped Tibetan sacred peaks (Chenrezig, Jambeyang, Chanadorje) rising above alpine meadows, turquoise lakes, and boreal forest at up to 4,700m. The journey to get here is as dramatic as the destination.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
    highlights: ["Three Sacred Peaks", "Milk Lake & Five Colour Lake", "Chonggu Prairie", "Luorong牧场"],
    bestSeason: "Late Sep–Oct — peak autumn colour (red shrubs, golden grass, blue sky). May–June is second best for flowers. July–August is peak tourist season and has some rain. Do not visit Oct–Apr: roads close.",
    attractions: [
      { name: "Yading Nature Reserve — Inner Zone", nameZh: "亚丁自然保护区", type: "Nature", duration: "Full day (8+ hours)", description: "A full day loop from Chonggu village — past Chonggu Prairie and monastery, up to Milk Lake (4,600m) and Five-Colour Lake (4,700m) at the foot of Chenrezig peak. The altitude gain is serious hiking.", tips: "The shuttle bus from Yading village takes you to Chonggu (¥140 round-trip). Hire a horse for ¥200–300 if altitude sickness is a concern. Start by 7am for the inner loop. Trail is 25km — physically demanding." },
      { name: "Chonggu Prairie & Monastery", nameZh: "冲古草甸·冲古寺", type: "Nature", duration: "3 hours", description: "The easiest and most accessible part of Yading — a flat meadow with a small Tibetan monastery and straight-on views of all three sacred peaks reflected in the river.", tips: "Reachable by shuttle bus without strenuous hiking. Perfect for acclimatisation day or for less fit visitors." },
    ],
    food: [
      { name: "Tibetan Tsampa", nameZh: "糌粑", description: "Roasted barley flour mixed with butter tea or water into a dough — the Tibetan staple food. Dense, nutty, and surprisingly sustaining at altitude.", mustTry: true, where: "Guesthouses and trail-side tea houses in Yading village" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Daocheng Yading Airport (DCY) — the world's highest commercial airport at 4,411m. Flights from Chengdu (~1.5h) and Chongqing. Nausea on first day is common — descend to Daocheng town (3,750m) immediately after landing." },
      { mode: "🚌 Overland from Chengdu", details: "Chengdu → Kangding → Litang → Daocheng: 2–3 days overland. The G4318 national highway through the Tibetan highlands is one of China's most spectacular drives." },
    ],
    accommodation: "Daocheng town (¥150–400) for pre-acclimatisation. Yading village (inside reserve) for direct access (¥200–500). Book well ahead September–October.",
    travelTips: [
      "Altitude sickness is a real risk — spend at least 2 nights in Daocheng (3,750m) before entering Yading (4,000–4,700m).",
      "October 1–7 Golden Week is massively overcrowded — avoid or book the last week of September instead.",
    ],
  },

  zhenjiang: {
    id: "zhenjiang", nameZh: "镇江", nameEn: "Zhenjiang",
    province: "jiangsu", provinceZh: "江苏",
    tagline: "Vinegar city where the Yangtze meets the Grand Canal",
    description: "Zhenjiang is the junction city where the Grand Canal meets the Yangtze River — a pivot of Chinese commerce for 2,000 years. The city is most famous for its black Zhenjiang vinegar (镇江醋), considered the finest in China, and the forested hills of Jinshan, Beigu, and Jiaoshan rising from the Yangtze.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&h=900&fit=crop",
    highlights: ["Jinshan Temple (floating pagoda)", "Beigu Mountain", "Zhenjiang Vinegar Museum", "Grand Canal heritage"],
    bestSeason: "Apr–Jun and Sep–Nov — mild and scenic. The spring cherry blossoms on the hills are spectacular. Summer is hot and humid.",
    attractions: [
      { name: "Jinshan Temple", nameZh: "金山寺", type: "Culture", duration: "2 hours", description: "A temple that appears to float on the Yangtze — the white pagoda and temple halls built directly into the hillside create the illusion of a ship. The setting of the White Snake folk tale.", tips: "Climb to the top of the pagoda for sweeping Yangtze river views. Entrance ¥65. Morning light is best on the water." },
      { name: "Beigu Mountain (Ganlu Temple)", nameZh: "北固山·甘露寺", type: "Culture", duration: "2 hours", description: "The site of the famous Three Kingdoms story where Liu Bei's mother assessed him before his marriage — a temple complex on a dramatic promontory above the Yangtze.", tips: "Free to hike the mountain; temple entrance ¥45. The panoramic view from the Iron Pagoda at the summit is the best in Zhenjiang." },
    ],
    food: [
      { name: "Zhenjiang White Fish", nameZh: "镇江刀鱼", description: "Yangtze River knifefish (saury) — a spring seasonal delicacy with dozens of fine bones that reward careful eating. The roe version commands extraordinary prices.", mustTry: true, where: "Traditional restaurants in the old city — Yanchun (宴春) is the century-old institution" },
      { name: "Zhenjiang Vinegar Cuisine", nameZh: "镇江锅盖面", description: "Lid noodles (锅盖面) — thin wheat noodles cooked in a small pot with a floating wooden lid, dressed with Zhenjiang black vinegar, pork shreds, and garlic.", mustTry: true, where: "Street noodle shops throughout the city" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Zhenjiang Station. Nanjing: 20 min. Shanghai Hongqiao: 1.5h. Suzhou: 1h." },
    ],
    accommodation: "City centre near the old quarter (¥180–400). Day-trip friendly from Nanjing or Suzhou.",
    travelTips: [
      "The Zhenjiang Vinegar Museum (¥30) inside the Hengshun Vinegar factory tours 200 years of fermentation pots — the food history is fascinating.",
      "The Xifenjin ancient street next to Jinshan is quieter and more local than tourist zones.",
    ],
  },

  zhuhai: {
    id: "zhuhai", nameZh: "珠海", nameEn: "Zhuhai",
    province: "guangdong", provinceZh: "广东",
    tagline: "The Pearl River delta's most liveable coast",
    description: "Zhuhai is the cleanest, most relaxed city in the Pearl River Delta — a 146km coastline of scattered islands, the iconic Lover's Road (情侣路) promenade, and the gateway to Macau via the 55km Hong Kong–Zhuhai–Macau Bridge. The Old Summer Palace replica at Yuanming New Garden and the fishing port at Doumen add cultural depth.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=1600&h=900&fit=crop",
    highlights: ["Lover's Road promenade", "Macau day trip", "Hong Kong–Zhuhai–Macau Bridge", "Fisher Girl Statue"],
    bestSeason: "Oct–Mar — dry, mild, and clear. Zhuhai's climate is among the most pleasant in China year-round. Summer is hot but the seafront breezes help.",
    attractions: [
      { name: "Lover's Road (Qinglü Lu)", nameZh: "情侣路", type: "Nature", duration: "2 hours cycling", description: "A 28km coastal promenade connecting Hong Kong port to Zhuhai Bay — the most scenic urban seafront in South China. The Fisher Girl Statue (珠海渔女) is the city's icon.", tips: "Rent a bicycle (¥30–50/2h) from near the Fisher Girl statue and cycle the full southern loop. Sunset from the seawall is spectacular." },
      { name: "Wai Lingding Island (外伶仃岛)", nameZh: "外伶仃岛", type: "Nature", duration: "Full day", description: "A quiet island 30km offshore — clean beaches, hiking trails up to the summit cross with Pearl River estuary views, and fresh seafood directly from fishing boats.", tips: "Ferry from Zhuhai port (1.5h, ¥100 round-trip). Only day-trip frequency on weekdays — check schedules." },
    ],
    food: [
      { name: "Doumen Braised Goose", nameZh: "斗门柠檬鸭", description: "Doumen district's lemon duck — whole duck braised with green lemons, fermented black bean, and chilli. A uniquely Cantonese-Zhuang flavour combination.", mustTry: true, where: "Doumen Old Street restaurants (40 min from city centre)" },
      { name: "Zhuhai Oysters", nameZh: "珠海生蚝", description: "Plump oysters from the estuary — grilled over charcoal with garlic and glass noodles, or raw on ice. Among the best in Guangdong.", mustTry: true, where: "Seafood wholesale market near Tang Jia Wan" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Zhuhai Jinwan Airport (ZUH) — 40km from city; bus or taxi. Direct flights from Beijing, Shanghai, Chengdu." },
      { mode: "🚄 High-speed rail", details: "Zhuhai Station. Guangzhou South: 45 min. Shenzhen North: 1h. Direct rail connection to Macau border (Gongbei crossing) by metro Line 1." },
    ],
    accommodation: "Lovers Road area for sea views (¥300–700). Budget options in Gongbei near the Macau border (¥150–300). Hengqin Island for resort-style (¥500–1,500).",
    travelTips: [
      "The Macau border at Gongbei is 5 min by taxi from Zhuhai centre — visa-free entry to Macau for most countries (up to 30 days).",
      "The HK-Zhuhai-Macau Bridge is accessible by shuttle bus (¥65) from the Zhuhai Border Port — 30 min to Hong Kong.",
    ],
    dayTrips: [
      { name: "Macau", nameZh: "澳门", distance: "6km · 15 min ferry or 30 min bridge", description: "Portuguese colonial heritage, world-class casinos, and the best egg tarts in Greater China. The Historic Centre of Macau is UNESCO-listed.", whyGo: "One of the world's most distinctive cities — entirely different from mainland China in food, architecture, and atmosphere.", adminNote: "Macau is a Special Administrative Region — a separate passport/ID check is required at the border." },
    ],
  },

  beihai: {
    id: "beihai", nameZh: "北海", nameEn: "Beihai",
    province: "guangxi", provinceZh: "广西",
    tagline: "Silver beach & Beibu Gulf seafood",
    description: "Beihai is Guangxi's coastal city — its Silver Beach (银滩) stretches 24km of white sand into the warm Beibu Gulf, the French colonial old street (珠海路) preserves a 19th-century mercantile streetscape, and the nearby Weizhou Island is the most southwesterly point of mainland China.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop",
    highlights: ["Silver Beach", "Weizhou Island", "Zhuhaiilu Old Street", "Beibu Gulf seafood"],
    bestSeason: "Oct–Apr — dry and warm (20–28°C). Summer (Jun–Sep) is hot and typhoon season. The sea is cleanest in November–December.",
    attractions: [
      { name: "Silver Beach (Yintan)", nameZh: "银滩", type: "Nature", duration: "Half day", description: "24km of clean white-sand beach on the Beibu Gulf — genuinely one of South China's best beaches, not yet over-commercialised. The sand quality and water colour are significantly better than Hainan's Sanya.", tips: "The western section (老银滩) is calmer and less developed than the tourist zone. Sunrise over the Beibu Gulf is spectacular." },
      { name: "Weizhou Island", nameZh: "涠洲岛", type: "Nature", duration: "2 days", description: "A volcanic island 67km offshore — China's largest and youngest volcanic island, with coral reefs, basalt sea cliffs, and a French colonial church. Whale shark sightings reported in summer.", tips: "Ferry from Beihai Port (1.5–2h, ¥100–130). Stay overnight to see the sunset and sunrise from the cliff tops. Diving and snorkelling are good April–October." },
      { name: "Zhuhaiilu Old Street", nameZh: "珠海路老街", type: "Culture", duration: "1.5 hours", description: "A 1.4km colonial-era arcade street — French and British influenced shophouses from the 19th century, with ground-floor arcades protecting pedestrians. An underrated streetscape.", tips: "Best in the late afternoon when the low sun catches the colonial facades. Small local restaurants in the side alleys serve excellent cheap seafood." },
    ],
    food: [
      { name: "Beibu Gulf Crab & Prawn", nameZh: "北部湾海鲜", description: "Beibu Gulf blue-swimmer crab and white-leg prawn — steamed or stir-fried with salt and pepper. The Gulf's seafood is among the cleanest and most flavourful in South China.", mustTry: true, where: "Haijiao Seafood Street (海角海鲜街) near Silver Beach" },
      { name: "Beihai Rice Noodles", nameZh: "北海虾饼粉", description: "Local rice noodles in fresh prawn broth with fried shrimp cakes — a Beihai breakfast institution.", mustTry: false, where: "Morning markets in the old city" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Beihai Fucheng Airport (BHY) — 20km from city. Flights from Guangzhou, Guilin, Nanning, Beijing." },
      { mode: "🚄 High-speed rail", details: "Beihai Station. Nanning: 1.5h. Guilin: 3h." },
    ],
    accommodation: "Silver Beach hotels (¥300–700 sea view). Old Street guesthouses (¥150–300). Weizhou Island: book guesthouses on the island directly (¥200–500).",
    travelTips: [
      "Book Weizhou Island accommodation and ferry 2 weeks ahead for weekends — very popular since 2020 social media coverage.",
    ],
  },

  quanzhou: {
    id: "quanzhou", nameZh: "泉州", nameEn: "Quanzhou",
    province: "fujian", provinceZh: "福建",
    tagline: "UNESCO Maritime Silk Road city",
    description: "Marco Polo called Quanzhou 'the greatest port in the world' in the 13th century. The UNESCO World Heritage inscription (2021) recognised its extraordinary mix of Hokkien, Arab, Persian, Hindu, and Manichaean heritage — mosques, Hindu temples, Manichaean sanctuaries, and Gothic churches within a few city blocks. Quanzhou is the most cosmopolitan ancient city in China.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=1600&h=900&fit=crop",
    highlights: ["Qingjing Mosque (1009 AD)", "Kaiyuan Temple", "Luoyang Bridge", "Maritime Museum"],
    bestSeason: "Oct–Apr — mild and dry. Spring (Mar–Apr) has beautiful flowering trees in the old city. Summer is hot but manageable on the coast.",
    attractions: [
      { name: "Qingjing Mosque", nameZh: "清净寺", type: "Culture", duration: "1.5 hours", description: "Built in 1009 AD — the oldest surviving Islamic mosque in China, modelled on the Grand Mosque in Damascus. The stone gate and main hall walls still stand despite later damage.", tips: "Entrance ¥3 (essentially free). The architectural detail on the entry arch is extraordinary — compare Arabic inscriptions with Chinese decorative motifs." },
      { name: "Kaiyuan Temple", nameZh: "开元寺", type: "Culture", duration: "2 hours", description: "Founded in 686 AD, this vast Tang dynasty Buddhist complex has twin pagodas (East and West, built 865 AD) that appear on the Fujian 100-yuan note. The main hall's flying Apsaras columns blend Buddhist and Hindu iconography.", tips: "Free entry. The courtyard banyan trees are 800 years old. The stone relief panels on the main hall capitals are a UNESCO highlight." },
      { name: "Luoyang Bridge", nameZh: "洛阳桥", type: "Culture", duration: "1 hour", description: "China's first sea-crossing stone bridge (1053–1059 AD) — 731m long, built by Cai Xiang using a brilliant tidal cofferdam technique. Still standing after 1,000 years.", tips: "9km from city centre; take bus #19. The stone oyster cultivation on the bridge pylons (an ancient engineering technique) is fascinating." },
    ],
    food: [
      { name: "Oyster Omelette (Fujian Original)", nameZh: "蚵仔煎", description: "The original Fujian oyster omelette — fatter oysters, stickier starch, and more char than the Xiamen version. The Min Nan coastal tradition.", mustTry: true, where: "West Street (西街) food stalls near Kaiyuan Temple" },
      { name: "Mian Xian Hu (Noodle Paste Soup)", nameZh: "面线糊", description: "A thick porridge of thin vermicelli in a gelatinous broth with assorted toppings — prawn, squid, blood curd, and pig intestine. Quanzhou's definitive breakfast.", mustTry: true, where: "Zhongshan Road morning stalls" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Quanzhou Station or Quanzhou North. Xiamen: 30 min. Fuzhou: 45 min. Guangzhou: 3h." },
    ],
    accommodation: "Old city near Zhongshan Road (¥200–450). Boutique hotels in the Muslim Quarter (¥250–500).",
    travelTips: [
      "The UNESCO heritage sites are spread across the city — hire an e-bike (¥30/day) or use the dedicated heritage bus route.",
      "Hui'an county (30km away) has one of China's most photographed traditional costumes — the Hui'an women in floral headscarves and cropped embroidered jackets.",
    ],
  },

  yanan: {
    id: "yanan", nameZh: "延安", nameEn: "Yan'an",
    province: "shaanxi", provinceZh: "陕西",
    tagline: "The cradle of Chinese Communist revolution",
    description: "Yan'an is the sacred revolutionary site of modern China — the cave-dwelling city where Mao Zedong and the Communist Party recovered after the Long March and planned the revolution from 1935 to 1948. The loess plateau landscapes are dramatic, and the authentic cave-dwelling (窑洞) architecture still inhabited by locals makes it one of the most distinctive urban environments in China.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop",
    highlights: ["Yangjialing Revolutionary Headquarters", "Wangjiaping & Zaoyuan", "Pagoda Mountain", "Loess plateau scenery"],
    bestSeason: "Apr–Jun and Sep–Oct — the loess terraces are green and the weather mild. Autumn has golden light on the canyon walls. July–August is hot. January visits are busy with revolutionary tourism.",
    attractions: [
      { name: "Yangjialing Revolutionary Headquarters", nameZh: "杨家岭革命旧址", type: "Culture", duration: "2 hours", description: "The complex of cave offices and assembly hall where Mao and the Party Central Committee lived and worked from 1938 to 1943. The 7th Party Congress assembly hall is intact.", tips: "Free entry with ID. Hire a local guide (¥80–150) to get the full context — the cave architecture and its relation to loess geology is genuinely fascinating." },
      { name: "Pagoda Mountain (Bao Ta Shan)", nameZh: "宝塔山", type: "Landmark", duration: "1.5 hours", description: "The 9-storey Tang dynasty pagoda on the hill above the city — the symbol of Yan'an and the icon on China's 10-yuan note. Views over the loess canyon city are striking.", tips: "Entry ¥65. Go at sunset when the canyon walls glow red-orange." },
      { name: "Yellow River Hukou Waterfall", nameZh: "壶口瀑布", distance: "165km south of Yan'an", type: "Nature", duration: "2 hours", description: "The Yellow River funnels through a 50m-wide rock channel and falls 15m — the most powerful waterfall in China. In spring the roar is deafening and the spray soaks the viewing platforms.", tips: "Best visited in spring (Apr–May) when snowmelt maximises the flow. The Shaanxi side (Yichuan county) has better access than the Shanxi side." },
    ],
    food: [
      { name: "Yan'an Lamb Noodles", nameZh: "延安羊肉面", description: "Thick hand-torn noodles in mutton and sour-cabbage broth — hearty loess plateau comfort food.", mustTry: true, where: "Noodle restaurants in the old city, especially near Zaoyuan" },
      { name: "Steamed Bun (Mo Mo)", nameZh: "馍馍", description: "The Shaanxi staple — thick, doughy steamed wheat bun. Torn and dunked into lamb soup (羊肉泡馍) or eaten plain with vinegar.", mustTry: false, where: "Any street food stall" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Yan'an Station. Xi'an: 2h. The new Yan'an–Taiyuan HSR line reduces journey to Shanxi." },
    ],
    accommodation: "City centre near Pagoda Mountain (¥200–450). Cave hotel experiences (窑洞酒店) are available on the city outskirts — sleeping in a genuine loess cave (¥250–500).",
    travelTips: [
      "Yan'an is a major destination for mainland Chinese 'red tourism' — holiday weeks (CNY, May Day, National Day) are extremely crowded.",
      "The Nanniwan area (南泥湾, 45km south) has beautiful terraced valley scenery alongside its revolutionary heritage.",
    ],
  },

  wulong: {
    id: "wulong", nameZh: "武隆", nameEn: "Wulong",
    province: "chongqing", provinceZh: "重庆",
    tagline: "Karst arches, sky bridges & underground rivers",
    description: "Wulong is Chongqing's greatest natural spectacle — the UNESCO-listed Karst Landscapes contain the three Tiankeng (天坑) sinkholes, the Natural Three Bridges (天生三桥), and the Furong Cave river system. The location doubled as the 'Land of Oz' in the live-action Transformers Age of Extinction film.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1600&h=900&fit=crop",
    highlights: ["Natural Three Bridges (UNESCO)", "Furong Cave", "Fairy Mountain grassland", "Tianshengsan sinkhole walk"],
    bestSeason: "Apr–Nov — the gorge forests are lush. Autumn (Oct–Nov) has brilliant colour. Summer is cool compared to Chongqing city (average 22°C). The Fairy Mountain ski resort operates Dec–Feb.",
    attractions: [
      { name: "Natural Three Bridges (Tianshengsan)", nameZh: "天生三桥", type: "Nature", duration: "3 hours", description: "Three natural stone arch bridges spanning a canyon — the largest natural arch system in Asia. Qinglong Bridge spans 350m; the canyon floor 250m below is reached by cable car.", tips: "Buy the combined scenic area ticket (¥200+). The descent to the canyon floor by cable car and the walk between the bridges is the highlight — allow 3 hours minimum." },
      { name: "Furong Cave", nameZh: "芙蓉洞", type: "Nature", duration: "2 hours", description: "A 2.7km illuminated cave system with the most diverse speleothem (stalactite and stalagmite) formations in China — 13 types catalogued, including extremely rare moonmilk deposits.", tips: "Temperature inside is a constant 11°C — bring a light jacket. The cave river section at the end is visually the most spectacular." },
    ],
    food: [
      { name: "Wulong Mutton Hotpot", nameZh: "武隆羊肉格格", description: "Bamboo-steamed mutton with potato and taro — the local version of Chongqing hotpot culture adapted for the mountain climate.", mustTry: true, where: "Restaurants on Wulong old street near the bus terminal" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Wulong Station on the Zhengzhou–Chongqing HSR. Chongqing North: 1.5h. Direct shuttle buses from the station to the scenic area (¥15, 30 min)." },
    ],
    accommodation: "Wulong County town (¥150–350). Fairy Mountain (仙女山) resort area for cooler summer stays (¥300–700). Small guesthouses near Three Bridges entrance (¥150–280).",
    travelTips: [
      "The Three Bridges and Furong Cave are 15km apart — hire a taxi for the day (¥200) to cover both without tour groups.",
    ],
    dayTrips: [
      { name: "Chongqing city", nameZh: "重庆", distance: "150km · 1.5h by HSR", description: "Sichuan hotpot, Jiefangbei illuminated skyline, and the cliffside Hongyadong restaurant district.", whyGo: "Base yourself in Wulong for nature, then take the fast train for a Chongqing evening — a perfect combination." },
    ],
  },

  zhujiajiao: {
    id: "zhujiajiao", nameZh: "朱家角", nameEn: "Zhujiajiao",
    province: "shanghai", provinceZh: "上海",
    tagline: "Shanghai's ancient water town on the doorstep",
    description: "Zhujiajiao is Shanghai's own ancient water town — 1,700 years of Jiangnan canal culture within an hour of the city centre. The 36 stone bridges and 9 ancient rice-trading streets have survived relatively intact, and the Fangsheng Bridge is the grandest five-arch stone bridge in the Yangtze delta.",
    image: "https://images.unsplash.com/photo-1537531510192-bba6dde32453?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1537531510192-bba6dde32453?w=1600&h=900&fit=crop",
    highlights: ["Fangsheng Bridge (5-arch)", "Kezhi Garden", "Old Rice Street", "Canal boat rides"],
    bestSeason: "Mar–May and Sep–Nov — comfortable and photogenic. Weekdays are significantly quieter than weekends. Avoid May Day and October Golden Week.",
    attractions: [
      { name: "Fangsheng Bridge", nameZh: "放生桥", type: "Culture", duration: "30 min", description: "A 72m five-arch stone bridge built in 1571 — the largest and most beautiful ancient bridge in the Shanghai region. The view along the canal from the apex is the defining image of Zhujiajiao.", tips: "Free to cross. Best photographed from the canal below (hire a boat, ¥60/30min) or from the embankment at the east end." },
      { name: "Kezhi Garden", nameZh: "课植园", type: "Culture", duration: "1.5 hours", description: "A private garden estate combining Suzhou-style rockery with European-influenced architecture — built in the early Republic era by a local merchant. The most elaborate private garden in Shanghai.", tips: "Entrance ¥8 — extremely underpriced for the scale and quality. The rear courtyard rockery is the most photogenic section." },
    ],
    food: [
      { name: "Braised Pork Rice Dumplings (Zongzi)", nameZh: "粽子", description: "Zhujiajiao's most famous food export — glutinous rice wrapped in bamboo leaves with fatty pork belly. The town's rice merchants have been making them for centuries.", mustTry: true, where: "Shops lining North Avenue (北大街) — buy them hot, straight from the pot" },
      { name: "Fried Stinky Tofu", nameZh: "臭豆腐", description: "The classic Jiangnan street snack — fried fermented tofu with chilli sauce, crispy outside and creamy within. The smell is the experience.", mustTry: false, where: "Street vendors on Old Rice Street" },
    ],
    transportation: [
      { mode: "🚌 From Shanghai", details: "Direct bus from Pu'an Road Coach Station or Hongqiao Transportation Hub — 1h, ¥15. Also reachable by metro Line 17 to Zhujiajiao Station (45 min) then 10-min walk." },
    ],
    accommodation: "Canal-view guesthouses inside the old town (¥300–600). Easy day trip from Shanghai — most visitors don't stay overnight.",
    travelTips: [
      "Arrive by 8:30am on weekdays to beat the tour buses which arrive from 9:30am onward.",
      "The Dianshan Lake area adjacent to Zhujiajiao has excellent cycling paths — combine with a rented e-bike afternoon.",
    ],
  },

  yanqing: {
    id: "yanqing", nameZh: "延庆", nameEn: "Yanqing",
    province: "beijing", provinceZh: "北京",
    tagline: "Wild Great Wall, dragon valleys & ski peaks",
    description: "Yanqing County, 75km northwest of Beijing, is the capital's cool-climate retreat — host venue for the 2022 Winter Olympics (ski and sliding events), home to the Juyongguan Pass, the Mutianyu Great Wall's wild section at Jiankou, and the Longqing Gorge ice festival each winter.",
    image: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804052814-cd3ba865a116?w=1600&h=900&fit=crop",
    highlights: ["Jiankou Wild Great Wall", "Longqing Gorge", "Yanqing Olympic Park", "Gubei Water Town"],
    bestSeason: "Apr–Jun for wildflower valleys; Oct–Nov for Great Wall autumn foliage; Dec–Mar for skiing. Summer (Jun–Aug) is 8–10°C cooler than central Beijing.",
    attractions: [
      { name: "Jiankou Wild Great Wall", nameZh: "箭扣长城", type: "Nature", duration: "Full day", description: "The most dramatic unrestored section of the Ming Great Wall — crumbling towers and steep ridgelines with no safety railings or tourist infrastructure. Heaven's Ladder (天梯) and Eagle Flies Facing Upward (鹰飞倒仰) are the iconic sections.", tips: "Hire a local guide (¥150–250) from Xizhazi Village — essential for route-finding on the unmarked trail. Start at 6am for best light and to avoid afternoon crowds. Proper hiking boots are essential." },
      { name: "Longqing Gorge", nameZh: "龙庆峡", type: "Nature", duration: "Half day", description: "A dam-lake gorge surrounded by cliffs — boat rides through the canyon in summer, and China's best ice lantern festival (January–February) when the entire gorge is illuminated by ice sculptures.", tips: "Summer boat ticket ¥60. Ice festival ticket ¥80–100. The festival runs roughly January 1–February 25." },
      { name: "Yanqing Olympic Park", nameZh: "延庆奥林匹克园区", type: "Landmark", duration: "3 hours", description: "The 2022 Winter Olympic venues — the National Alpine Ski Centre (downhill), Yanqing Sliding Centre (bobsled), and the striking 'snow ring' Olympic Village architecture can be toured year-round.", tips: "Ski season (Dec–Mar) is best for activities. The Guyanbing Hall (古崖居) Qiang cliff-dwelling ruins inside the park are a 1,500-year-old surprise." },
    ],
    food: [
      { name: "Yanqing Lamb Scorpion", nameZh: "延庆蝎子锅", description: "Spiced lamb spine hotpot — the collagen-rich vertebrae braise slowly with dried chilli and Sichuan pepper. A Beijing suburb winter speciality.", mustTry: true, where: "Roadside restaurants on the Yanqing old town pedestrian street" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail (S1 Line)", details: "Yanqing Station reachable from Beijing Qinghe Station in 20 min by the dedicated Olympic-built rail line (¥23). Connects to Beijing metro." },
    ],
    accommodation: "Yanqing town centre (¥200–450). Gubei Water Town resort complex (¥800–2,500) for Great Wall sunrise packages. Ski resort lodges at Yanqing Olympic Village (¥600–1,500).",
    travelTips: [
      "Gubei Water Town (古北水镇) is a private resort built inside a historic village with Simatai Great Wall access at night — expensive (¥150 entry) but the illuminated wall at night is extraordinary.",
      "Jiankou wild wall hike is physically demanding (6–8h with significant scrambling) — not suitable for beginners or without a guide.",
    ],
  },

  // ── BATCH 2: CENTRAL/SOUTH PROVINCES ──────────────────────────────────────
  yantai: {
    id: "yantai", nameZh: "烟台", nameEn: "Yantai",
    province: "shandong", provinceZh: "山东",
    tagline: "Apple orchards, Bohai seafood & French wine",
    description: "Yantai is Shandong's most pleasant coastal city — a mild climate tempered by the Bohai Sea, China's oldest wine-producing region (Changyu Winery has operated since 1892), spectacular cherry blossoms in spring, and some of the freshest seafood on the north coast. Penglai, 40km west, holds the mythological island of immortals.",
    image: "https://images.unsplash.com/photo-1562604898-a539ca4e17dd?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1562604898-a539ca4e17dd?w=1600&h=900&fit=crop",
    highlights: ["Penglai Pavilion (Fairy Isle)", "Changyu Wine Culture Museum", "Yantai Hill Park", "Bohai seafood markets"],
    bestSeason: "May–Oct — mild, clear, and sea-breezy. Apple and cherry harvest (Aug–Oct) adds colour to the countryside. Winter is cold but quieter.",
    attractions: [
      { name: "Penglai Pavilion", nameZh: "蓬莱阁", type: "Culture", duration: "3 hours", description: "One of China's Four Great Towers — an ancient pavilion complex on a sea cliff that has inspired Taoist myths of the immortals' island for 2,000 years. Mirage sightings (海市蜃楼) are recorded several times per century.", tips: "Entrance ¥70. The cliff walk around the pavilion complex gives dramatic Bohai Sea views. Combine with the Penglai Waterworld naval fortress ruins next door (free)." },
      { name: "Changyu Wine Culture Museum", nameZh: "张裕葡萄酒文化博物馆", type: "Culture", duration: "2 hours", description: "Founded in 1892 — China's first European-style winery, built by Overseas Chinese entrepreneur Zhang Bishi with French winemakers. The underground cellar contains barrels dating back over a century.", tips: "Entrance ¥80 (includes tasting). The cobblestone European-style winery building is beautiful — very unlike the rest of Yantai." },
    ],
    food: [
      { name: "Steamed Scallops with Glass Noodles", nameZh: "扇贝粉丝", description: "Shandong scallops steamed in the half-shell over glass noodles with garlic and fermented black bean — simple and extraordinary when the scallops are Bohai-fresh.", mustTry: true, where: "Seafood night market at Zhifu Island (芝罘岛) ferry port" },
      { name: "Yantai Apple", nameZh: "烟台苹果", description: "China's finest apples — grown on the peninsula at the junction of ocean air and warm southern slopes. Season: September–November. The Fuji variety here is unmatched.", mustTry: false, where: "Roadside orchards and markets from September" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Yantai Penglai International Airport (YNT) — 55km west of city, bus to centre 1.5h or taxi ¥200." },
      { mode: "🚄 High-speed rail", details: "Yantai Station. Qingdao: 1.5h. Jinan: 3h. A new HSR line to Beijing via Weifang is under construction." },
      { mode: "⛴️ Ferry", details: "Overnight ferry to Dalian (Liaoning) — 5–7h. A scenic and economical way to connect Shandong and northeast China." },
    ],
    accommodation: "City centre (¥200–450). Penglai town for slower-paced coastal stay (¥150–350). Beach resort area at Gold Beach (黄金海岸) near Longkou (¥300–700).",
    travelTips: [
      "The ferry to Dalian makes Yantai a natural stop on a coastal loop between Shandong and Liaoning without backtracking to Beijing.",
    ],
  },

  anyang: {
    id: "anyang", nameZh: "安阳", nameEn: "Anyang",
    province: "henan", provinceZh: "河南",
    tagline: "Where Chinese writing was invented",
    description: "Anyang is one of the birthplaces of Chinese civilisation — the Shang dynasty capital Yin (1300–1046 BC) was excavated here, revealing the oracle bone script from which all Chinese writing descends. The Yin Ruins (殷墟) are a UNESCO World Heritage site of unparalleled importance, and the Red Flag Canal (红旗渠) is a remarkable feat of 1960s engineering through the Taihang Mountains.",
    image: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1584646098378-0e4e9b671fbf?w=1600&h=900&fit=crop",
    highlights: ["Yin Ruins (UNESCO) — oracle bone origin", "Red Flag Canal", "Museum of Chinese Writing", "Fu Hao Tomb"],
    bestSeason: "Apr–Jun and Sep–Nov — comfortable temperatures and clear skies. Summer is hot (38°C). The Red Flag Canal mountain scenery is most dramatic after autumn rain.",
    attractions: [
      { name: "Yin Ruins (Yinxu)", nameZh: "殷墟", type: "Culture", duration: "3 hours", description: "The archaeological site of the Shang dynasty capital — the royal tombs, foundry ruins, and sacrifice pits where oracle bones (甲骨) were first discovered in 1899. The adjacent museum holds 300,000+ oracle bones.", tips: "Entrance ¥105. The Fu Hao Tomb (妇好墓) is the only Shang royal tomb found intact — the jade and bronze artefacts are spectacular. Allow 3 hours for the museum and site." },
      { name: "Red Flag Canal", nameZh: "红旗渠", type: "Culture", duration: "Half day", description: "An irrigation canal hand-carved through 1,500km of sheer Taihang Mountain cliff between 1960 and 1969 — 100,000 villagers worked a decade with picks and hammers, without machinery. A remarkable engineering and human achievement.", tips: "The main canal runs along a cliff ledge — the 'cliff-top path' section (¥85) includes a sky walk section over the gorge. 70km from Anyang; hire a car or join a tour." },
    ],
    food: [
      { name: "Anyang Blood Sausage", nameZh: "安阳血肠", description: "Pork blood sausage boiled in broth and sliced — a street-food staple dating back to Shang dynasty meat-preserving traditions (with obvious additions since then).", mustTry: false, where: "Old city street markets" },
      { name: "Henan Braised Noodles (Hui Mian)", nameZh: "烩面", description: "Thick chewy noodles braised in lamb bone broth with fungus, dried lily, and glass noodles — the Henan comfort classic.", mustTry: true, where: "Anyang noodle shops throughout the city" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Anyang East Station on the Beijing-Guangzhou HSR. Beijing: 2h. Zhengzhou: 45 min." },
    ],
    accommodation: "City centre near Jiefang Road (¥150–350). Day-trip viable from Zhengzhou (45 min by HSR).",
    travelTips: [
      "Anyang is often overlooked in favour of Luoyang and Kaifeng — this is precisely why it rewards the curious traveller. The Yin Ruins Museum is world-class.",
    ],
  },

  jiuhuashan: {
    id: "jiuhuashan", nameZh: "九华山", nameEn: "Jiuhua Mountain",
    province: "anhui", provinceZh: "安徽",
    tagline: "One of China's four sacred Buddhist mountains",
    description: "Jiuhua Mountain (Nine Glories Mountain) is the earthly domain of Ksitigarbha Bodhisattva (地藏王菩萨) — the Buddha of the underworld who vowed to delay his own enlightenment until all souls were saved from hell. 99 monasteries cling to the granite peaks in dense mist, and the preserved body of a Tang dynasty monk sits in a gilded statue inside Roushen Hall.",
    image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?w=1600&h=900&fit=crop",
    highlights: ["Huacheng Temple", "Roushen Hall (mummified monk)", "Tiantai Peak summit", "99 mountain monasteries"],
    bestSeason: "Apr–Jun and Sep–Nov — mountain mists and moderate temperatures. The summer rain creates extraordinary cloud effects. Winter snowfall on the monastery roofs is spectacular but cold.",
    attractions: [
      { name: "Tiantai Peak Summit", nameZh: "天台峰", type: "Nature", duration: "Full day", description: "The highest accessible peak (1,324m) — a full-day hike passing through 20+ monasteries, bamboo forests, and granite boulder fields. The Tianfu Temple at the summit serves simple vegetarian meals.", tips: "Cable car available from Tiantai Temple to the mid-mountain (¥65 one-way). The summit sunrise is exceptional — book a monastery guesthouse for the night before." },
      { name: "Roushen Hall (Zhiyuan Temple)", nameZh: "肉身宝殿", type: "Culture", duration: "1.5 hours", description: "A remarkable sacred site — the preserved body of Korean monk Kim Gyo-gak (who died aged 99 in 794 AD and was recognised as Ksitigarbha incarnate) sits inside a gilded case. Active worship continues today.", tips: "Entrance is part of the mountain ticket (¥190). Photography is not permitted inside. The incense smoke and devotional atmosphere are intense." },
    ],
    food: [
      { name: "Jiuhua Mountain Vegetarian Cuisine", nameZh: "九华山素菜", description: "Sophisticated Buddhist vegetarian cooking — tofu dishes carved to resemble meat, mushroom broths flavoured with mountain herbs. The cuisine here is considered among the finest Buddhist cooking in China.", mustTry: true, where: "Temple restaurants throughout the mountain — Zhiyuan Temple restaurant is the most well-regarded" },
    ],
    transportation: [
      { mode: "🚌 Bus from Hefei or Huangshan", details: "Hefei to Jiuhuashan: 2.5h by express bus. Huangshan to Jiuhuashan: 2h. Nearest HSR: Qingyang County (40 min by taxi)." },
    ],
    accommodation: "Monastery guesthouses inside the scenic area (¥150–350, simple but atmospheric). Town hotels at the mountain base (¥200–450).",
    travelTips: [
      "Mountain entrance ticket ¥190 is separate from cable car fees. A full 2-day visit covers the major temples and the summit hike.",
      "The Ksitigarbha culture festival (July 30 lunar calendar) draws tens of thousands of pilgrims — extraordinary spectacle but accommodation fills months in advance.",
    ],
  },

  shennongjia: {
    id: "shennongjia", nameZh: "神农架", nameEn: "Shennongjia",
    province: "hubei", provinceZh: "湖北",
    tagline: "China's primeval forest & home of the wild man",
    description: "Shennongjia is the only UNESCO World Heritage natural site in Central China — 3,253 sq km of primeval temperate forest above 3,000m, home to the Chinese golden monkey (one of the world's rarest primates) and the enduring legend of the Yeren (野人) — China's own Bigfoot. The giant Shennong Altar marks where the mythical farmer-emperor first cultivated medicine plants.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&h=900&fit=crop",
    highlights: ["Golden monkey research base", "Dajiu Lake alpine meadow", "Laojun Mountain summit", "Primeval forest trails"],
    bestSeason: "May–Oct — the forest is lush and trails open. Sept–Oct has brilliant autumn foliage. Winter (Nov–Apr) closes many high-altitude roads. Spring is misty and magical.",
    attractions: [
      { name: "Dajiu Lake Alpine Meadow", nameZh: "大九湖湿地", type: "Nature", duration: "Half day", description: "A stunning high-altitude wetland at 1,730m — nine interlinked lakes fringed by meadows and birch forest, inhabited by migrating cranes in autumn. A boardwalk circuit offers wildlife watching.", tips: "Take the shuttle bus from the entrance (included). The early morning (6–8am) mists rising off the lakes are extraordinarily atmospheric. Warm layers essential even in summer." },
      { name: "Golden Snub-Nosed Monkey Research Base", nameZh: "金丝猴研究中心", type: "Nature", duration: "2 hours", description: "The Chinese golden monkey is one of the world's most striking primates — electric-blue face, golden fur, upturned nose. The rescue centre at Muyu has habituated groups that can be observed at close range.", tips: "Entrance ¥100 (combined ticket). Morning feeding sessions (8–9am) are the best time for photos." },
    ],
    food: [
      { name: "Tujia Wild Mountain Dishes", nameZh: "土家山野菜", description: "Wild-foraged mountain vegetables, wood-ear fungus, fern shoots, and mountain pork — the Tujia minority cuisine is simple, seasonal, and exceptional.", mustTry: true, where: "Guesthouses and farmhouse restaurants in Muyu town" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Shennongjia Airport (HPG) — near Muyu town. Flights from Wuhan (40 min), Beijing, Shanghai, and Chengdu." },
      { mode: "🚌 Bus from Yichang", details: "Yichang to Muyu (Shennongjia gateway): 3.5h by expressway bus. Yichang is on the Wuhan HSR line (2h from Wuhan)." },
    ],
    accommodation: "Muyu town for comfortable base (¥200–500). Dajiu Lake area has scenic mountain hotels (¥350–700). Farmhouse guesthouses (农家乐) offer the most authentic experience (¥100–200).",
    travelTips: [
      "Altitude at the main scenic areas reaches 3,100m — those sensitive to altitude should take it easy on the first day.",
      "The Shennong Altar hike (神农坛, 4h return) is one of China's finest sub-alpine hiking experiences. Trail markers are good.",
    ],
  },

  hengshan: {
    id: "hengshan", nameZh: "衡山", nameEn: "Hengshan",
    province: "hunan", provinceZh: "湖南",
    tagline: "The Southern Sacred Mountain",
    description: "Nanyue Hengshan is the southernmost of China's five Taoist sacred mountains (五岳). Gentler and more forested than the other four, it has 72 peaks cloaked in ancient camphor trees, 200+ temples and monasteries (the highest Buddhist-Taoist density in China), and the Zhurong Peak summit at 1,300m.",
    image: "https://images.unsplash.com/photo-1555737785-3b6a6f9cd8f5?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1555737785-3b6a6f9cd8f5?w=1600&h=900&fit=crop",
    highlights: ["Nanyue Temple", "Zhurong Peak summit", "72 peaks forest trail", "Buddhist-Taoist dual heritage"],
    bestSeason: "Apr–Jun and Sep–Nov — cool forest walking and clear summit views. The spring azalea bloom (April) on the slopes is glorious. Summer has clouds and occasional rain that add atmosphere.",
    attractions: [
      { name: "Nanyue Temple", nameZh: "南岳大庙", type: "Culture", duration: "2 hours", description: "The largest temple complex south of the Yangtze — a vast Forbidden City-style courtyard complex combining Buddhist and Taoist worship in the same precinct. Originally built in Tang dynasty, expanded in Ming and Qing.", tips: "Free entry. The incense smoke in the main courtyard at dawn is intensely atmospheric. The rear garden and the small Zen temple within the complex are tranquil escapes." },
      { name: "Zhurong Peak Trail", nameZh: "祝融峰", type: "Nature", duration: "Full day hiking or 3h by cable car", description: "The summit at 1,300m — a 15km hike through ancient forests passing waterfalls, hermit caves, and small pavilions, or cable car to 1,100m then a 1h walk up.", tips: "Cable car ticket ¥60 (up), ¥40 (down). The trail from Nanshan Platform to the summit is forested and gradual — excellent bird watching in spring." },
    ],
    food: [
      { name: "Nanyue Vegetarian Banquet", nameZh: "南岳素菜", description: "Mountain Buddhist vegetarian cooking — famous throughout Hunan for creative mock-meat dishes and extraordinary tofu preparations. Some restaurants have operated for 400 years.", mustTry: true, where: "Restaurants on Nanyue town's main street, below the mountain gate" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Hengshan West Station (新衡山西站). Changsha: 40 min. The mountain scenic area is 10km from the station — shuttle bus available." },
    ],
    accommodation: "Nanyue town at the mountain base (¥150–400). Summit guesthouses (¥200–500, book ahead for sunrise stays).",
    travelTips: [
      "The mountain has 72 named peaks — a full exploration takes 3 days. Most visitors do the Nanyue Temple + Zhurong Peak circuit in a long day.",
      "Hengshan is notable for being simultaneously one of the most sacred Buddhist mountains and most sacred Taoist mountains — the two religions share many of the temple spaces.",
    ],
  },

  libo: {
    id: "libo", nameZh: "荔波", nameEn: "Libo",
    province: "guizhou", provinceZh: "贵州",
    tagline: "Karst jungle, jade rivers & UNESCO forests",
    description: "Libo's South China Karst (UNESCO) is arguably the most beautiful karst landscape in the country — emerald-green rivers cutting through cone-shaped limestone hillsides completely covered in subtropical jungle. The Small Seven-Hole Scenic Area has jade-green pools and waterfalls; the Maolan National Nature Reserve protects one of Asia's finest intact karst forests.",
    image: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1596265371388-43edbaadab94?w=1600&h=900&fit=crop",
    highlights: ["Small Seven-Hole Scenic Area", "Duobu River cascades", "Maolan Karst Forest", "Buyi minority villages"],
    bestSeason: "Apr–Jun and Sep–Nov — the vegetation is richest and river levels ideal. Spring rain intensifies the green of the karst. Summer (Jul–Aug) is very crowded.",
    attractions: [
      { name: "Small Seven-Hole Scenic Area", nameZh: "小七孔景区", type: "Nature", duration: "5 hours", description: "A 10km canyon loop with 68 waterfalls, emerald-green lakes, and ancient Buyi stone bridges — the jade river colour is caused by dissolved limestone and algae in perfect balance.", tips: "Combined ticket with Big Seven-Hole ¥168. Start at the upper entrance (waterfall end) and walk downstream for the best sequence. The '68 Cascades' section in the middle is the most photogenic." },
      { name: "Duobu River Canyon", nameZh: "大七孔·多布河", type: "Nature", duration: "3 hours", description: "The larger and wilder scenic area — an underground river emerges into a canyon, passes through Miao minority farmland, and disappears again into a cave. Bamboo raft rides available.", tips: "The bamboo raft section (¥40) is worth it for the perspective from the water level." },
    ],
    food: [
      { name: "Buyi Sticky Rice", nameZh: "布依族五色糯米饭", description: "Five-colour glutinous rice dyed with natural plant extracts — pink, yellow, black, white, and purple. A Buyi festival food, now served daily to visitors.", mustTry: true, where: "Buyi minority villages and guesthouse restaurants in Libo town" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Libo Station on the Guiyang-Nanning HSR. Guiyang: 2h. Nanning: 2.5h." },
    ],
    accommodation: "Libo town (¥150–350). Guesthouses in Yao Yin village near the scenic area (¥100–250). Treehouse and eco-lodge style resorts (¥400–900).",
    travelTips: [
      "The colour of the rivers changes with light and season — overcast days actually enhance the jade-green effect more than bright sunlight.",
    ],
  },

  longhushan: {
    id: "longhushan", nameZh: "龙虎山", nameEn: "Longhu Mountain",
    province: "jiangxi", provinceZh: "江西",
    tagline: "The birthplace of Taoism & cliff coffin mystery",
    description: "Longhu Mountain (Dragon Tiger Mountain) is the cradle of Celestial Masters Taoism — the Zhang family patriarch Zhang Daoling practised alchemy here and founded the movement in 142 AD. The mountain is notable for dramatic red sandstone scenery, the Tianshi (Heavenly Master) Residence still occupied by the Zhang family, and ancient Yue people cliff coffins suspended in canyon walls 50–300m above the river.",
    image: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?w=1600&h=900&fit=crop",
    highlights: ["Cliff coffins from bamboo raft", "Tianshi Residence (64 Taoist generations)", "Xiandu Scenic Area red cliffs", "Taoist culture living tradition"],
    bestSeason: "Mar–Nov — the river is best in spring and autumn. Summer is hot but the Luxi River bamboo raft float is refreshing. Winter reveals the cliff structure most clearly.",
    attractions: [
      { name: "Luxi River Raft Float & Cliff Coffins", nameZh: "泸溪河·悬棺", type: "Culture", duration: "3 hours", description: "A bamboo raft drifts through the Luxi River canyon past dramatic red cliffs — and 200+ coffins wedged into the cliff face 50–300m above the water. The Yue people's burial tradition (2,500 years old) remains one of archaeology's great mysteries.", tips: "The raft tour (¥150) departs from Shangqing town and is the best way to see the coffins. Arrive early — afternoon light is better on the north-facing cliffs." },
      { name: "Tianshi Residence", nameZh: "天师府", type: "Culture", duration: "2 hours", description: "The ancestral home and official residence of the Zhang family — 64 generations of Celestial Masters of Taoism have lived here since the Han dynasty. The Taoist ceremonies and architecture are incomparable.", tips: "Entry ¥60. Still inhabited by the Zhang family descendants. The garden and reception halls date to the Song dynasty." },
    ],
    food: [
      { name: "Shangqing Tofu", nameZh: "上清豆腐", description: "Hand-pressed tofu from Shangqing village — silken-firm, made with mountain spring water and eaten with ginger-scallion sauce or in a fragrant broth.", mustTry: true, where: "Restaurants in Shangqing ancient town" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Longhushan Station. Nanchang: 1h. Yingtan: 15 min. Xiamen: 2.5h." },
    ],
    accommodation: "Shangqing village guesthouses (¥150–350). Resort hotels near the main gate (¥250–500).",
    travelTips: [
      "Combine Longhu Mountain with Wuyuan (2.5h north by train) for a Jiangxi cultural loop covering Taoism, ceramics, and ancient villages.",
    ],
  },

  wenchang: {
    id: "wenchang", nameZh: "文昌", nameEn: "Wenchang",
    province: "hainan", provinceZh: "海南",
    tagline: "Coconut forests, space rockets & Wenchang chicken",
    description: "Wenchang is simultaneously the most tropical and the most high-tech place in China — coconut palms line every road, the beach at Dong Jiao Ye Lin stretches through the most beautiful coconut grove in Asia, and 50km north the Wenchang Space Launch Centre sends rockets to the moon and Mars. The original Wenchang chicken was born here.",
    image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=1600&h=900&fit=crop",
    highlights: ["Dong Jiao Coconut Grove", "Wenchang Space Launch Centre", "Qinglan Harbour", "Wenchang original chicken"],
    bestSeason: "Oct–Apr — the dry season. Rocket launches happen year-round and are publicly observable from the coastal viewing area when scheduled.",
    attractions: [
      { name: "Dong Jiao Ye Lin Coconut Grove", nameZh: "东郊椰林", type: "Nature", duration: "Half day", description: "8,000 acres of wild coconut palms along a blue-water peninsula — the most extensive coastal coconut grove in China. Cycling paths and beach access throughout.", tips: "Rent a bicycle at the entrance (¥30/2h). The north tip of the peninsula has the widest and cleanest beach. Fresh coconut milk from fallen fruit costs ¥5–8 from vendors." },
      { name: "Wenchang Space Launch Centre", nameZh: "文昌航天发射场", type: "Landmark", duration: "2 hours", description: "China's newest space launch facility, opened in 2016 — the only civilian-viewable launch site in the country. Long March 5 (China's heaviest rocket) and Tianhe space station modules launched from here.", tips: "A visitor education centre (¥50) is open daily. Rocket launches (5–10 per year) can be watched from Longlou town coast 8km away — check CNSA schedule online." },
    ],
    food: [
      { name: "Wenchang Chicken (Original)", nameZh: "文昌鸡", description: "The original free-range Wenchang chicken — poached and served over coconut-scented rice, with ginger paste and the original soy dipping sauce. More flavourful than the Singapore version that made it famous.", mustTry: true, where: "Wenchang town restaurants on Wen Cheng Street" },
      { name: "Coconut Crab", nameZh: "椰子蟹", description: "The world's largest land crab, fed entirely on coconut — ivory-white meat with a faint tropical sweetness. Extremely rare and prized; legally wild-caught only.", mustTry: false, where: "Upmarket seafood restaurants in Qinglan Harbour" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail (Hainan Eastern Ring)", details: "Wenchang Station. Haikou: 30 min. Sanya: 2h30min." },
    ],
    accommodation: "Wenchang town centre (¥150–300). Resort hotels at Qinglan Harbour (¥400–900). Dong Jiao coconut grove guesthouses (¥200–400).",
    travelTips: [
      "The Dong Jiao ferry crossing (¥5, 3 min) is worth taking — it gives you a view back to the palm grove from the water.",
      "Check CNSA rocket launch schedules at cnsa.gov.cn before visiting — witnessing a Long March 5 launch from the public viewing area is an extraordinary experience.",
    ],
  },

  jizhou: {
    id: "jizhou", nameZh: "蓟州", nameEn: "Jizhou",
    province: "tianjin", provinceZh: "天津",
    tagline: "China's oldest wooden building & Panshan Mountain",
    description: "Jizhou (historically Jixian) is Tianjin's mountain county — 90km north of the city, it holds the Dule Temple with China's oldest surviving multi-storey wooden structure (984 AD), the Five Dragons Peak scenery of Panshan Mountain, and the Panjiakou Underwater Great Wall (flooded when a reservoir was built through the Ming-era fortification).",
    image: "https://images.unsplash.com/photo-1568895706332-28c5e023adcc?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1568895706332-28c5e023adcc?w=1600&h=900&fit=crop",
    highlights: ["Dule Temple (984 AD, China's oldest multi-story timber building)", "Panshan Mountain", "Panjiakou Underwater Great Wall", "Xishan scenic valley"],
    bestSeason: "Apr–Nov — spring and autumn are ideal for hiking and temple visits. The red maple season on Panshan (Oct–Nov) is spectacular.",
    attractions: [
      { name: "Dule Temple", nameZh: "独乐寺", type: "Culture", duration: "2 hours", description: "Two buildings survive from 984 AD — the Guanyin Pavilion and the Mountain Gate. The 16.27m clay Guanyin statue (with eleven heads) is the tallest Tang-style clay figure in China, and the original Song-dynasty building joints have not been significantly modified in 1,000 years.", tips: "Entrance ¥60. The architectural engineering of the Song-era timber joint system is staggering — the Liang Sicheng heritage notes are displayed inside." },
      { name: "Panshan Mountain", nameZh: "盘山", type: "Nature", duration: "Half day", description: "Five peaks above 800m with Buddhist temples, cascading waterfalls, and the distinctive Five Dragon Pools valley — called the 'first mountain east of Beijing' by Qianlong Emperor who visited 32 times.", tips: "Cable car available (¥45/one-way). The ridge trail between the Upper Temple and Tiansheng Temple gives the best panoramic views." },
    ],
    food: [
      { name: "Jixian Chestnut", nameZh: "蓟州板栗", description: "Hebei-style roasted chestnut — Jizhou's mountain orchards produce some of northern China's finest. Available from August roadside vendors.", mustTry: false, where: "Mountain road stalls" },
    ],
    transportation: [
      { mode: "🚌 From Tianjin", details: "Direct bus from Tianjin Zhongguan Bus Station — 1.5h, ¥20. Also reachable from Beijing Dongzhimen by long-distance bus (2h, ¥35)." },
    ],
    accommodation: "Jizhou county town for mid-range hotels (¥200–400). Mountain guesthouses near Panshan (¥150–300).",
    travelTips: [
      "The Panjiakou Underwater Great Wall (80km north, in Hebei) requires a ferry over the reservoir to see the submerged fortification — one of China's most unusual heritage sites. Check boat availability ahead of visiting.",
    ],
    dayTrips: [
      { name: "Chengde", nameZh: "承德", distance: "120km · 2h by road", description: "The Qing imperial summer resort with the Mountain Resort (UNESCO) and Eight Outer Temples.", whyGo: "A natural extension of the Jizhou mountain day — continue north to Chengde for a 2-day Hebei heritage loop.", adminNote: "Chengde is across the provincial boundary in Hebei." },
    ],
  },

  // ── BATCH 3: REMOTE/NORTHWEST/NORTHEAST PROVINCES ─────────────────────────
  zhada: {
    id: "zhada", nameZh: "扎达", nameEn: "Zanda Earth Forest",
    province: "xizang", provinceZh: "西藏",
    tagline: "Alien earth forests & the ruins of Guge Kingdom",
    description: "Zanda County in far western Tibet is one of the most remote and visually surreal places on earth — the Sutlej River has eroded a vast plateau into thousands of earth columns, spires, and mushroom formations (土林) that glow amber and ochre at sunset. Within them, the ruins of the ancient Guge Kingdom (10th–17th century) cling to a 300m mesa above the canyon.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop",
    highlights: ["Guge Kingdom Ruins", "Zanda Earth Forest (土林)", "Toling Monastery", "Sutlej River canyon"],
    bestSeason: "Jun–Sep — the only season when the roads from Lhasa or Ali are reliably open. The earth forest is most dramatic at golden hour.",
    attractions: [
      { name: "Guge Kingdom Ruins", nameZh: "古格王国遗址", type: "Culture", duration: "3 hours", description: "A 300m mesa stacked with 445 rooms, 879 caves, and 58 fortress towers — the entire lost capital of the Guge Kingdom, abandoned overnight in the 17th century. The intact murals in the Red Temple and White Temple are extraordinary.", tips: "Entry ¥200. Hire a local guide at the entrance (¥100) — many rooms require a torch and the iconographic details are missed without explanation." },
      { name: "Zanda Earth Forest", nameZh: "扎达土林", type: "Nature", duration: "2 hours", description: "Hundreds of kilometres of surreal eroded earth formations filling the entire Sutlej river valley — drive-through scenery that could be another planet. Sunset from the Zanda county road is extraordinary.", tips: "No entry fee for the main viewpoints along the county road. The vista point 3km west of Zanda town gives the best panoramic view." },
    ],
    food: [
      { name: "Tsampa and Yak Broth", nameZh: "糌粑·牦牛汤", description: "At 3,650m in the remote Tibetan west, the food is simple — barley tsampa and yak bone broth. Basic, sustaining, and in context deeply satisfying.", mustTry: true, where: "The few small restaurants in Zanda county town" },
    ],
    transportation: [
      { mode: "🚗 Overland (only option)", details: "From Lhasa: 2–3 days via G219 National Highway through Ali. From Kashgar: 2 days via Xinjiang-Tibet Highway. A Tibet Travel Permit and Ali Permit are required. Private car hire essential (¥2,000–4,000/day)." },
      { mode: "✈️ Air to Ali (Shiquanhe)", details: "Flights from Lhasa to Ali Kunsha Airport (¥800–1,200) reduce the journey. Zanda is 230km from Ali — 3h by road." },
    ],
    accommodation: "Zanda county town has 3–4 basic guesthouses (¥80–200). All require advance reservation as occupancy is tiny.",
    travelTips: [
      "This is one of the most logistically challenging destinations in China — full Tibet permit + Ali region permit + police check-in at each county required.",
      "The night sky here at 3,650m with zero light pollution is one of the finest in Asia — bring a camera with wide-angle lens.",
    ],
  },

  kanas: {
    id: "kanas", nameZh: "喀纳斯", nameEn: "Kanas Lake",
    province: "xinjiang", provinceZh: "新疆",
    tagline: "Alpine lake on the Russia-Mongolia-Kazakhstan border",
    description: "Kanas Lake (1,374m altitude, 24km long) is a glacial jewel in the Altai Mountains on the exact border of Russia, Mongolia, and Kazakhstan. The Tuvan minority village of Hemu nearby has the most authentic log-cabin culture in China, and the Friendship Peak (友谊峰, 4,374m) glacier is visible from the viewing platform.",
    image: "https://images.unsplash.com/photo-1567634698-89e6da2e8c6d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1567634698-89e6da2e8c6d?w=1600&h=900&fit=crop",
    highlights: ["Kanas Lake colour-changing water", "Hemu Tuvan village", "God's Eye viewpoint", "Autumn foliage (Sep–Oct)"],
    bestSeason: "Late Sep–early Oct — peak autumn colour (gold birch, red shrub, blue lake). June–August is green and lush. Winter (Nov–Apr) is inaccessible — deep snow closes all roads.",
    attractions: [
      { name: "God's Eye Viewpoint (Shenyanshu)", nameZh: "神仙湾", type: "Nature", duration: "2 hours", description: "The famous observation deck above the lake — a bird's-eye view of the Kanas River meandering through forest before entering the lake, resembling a divine eye from above.", tips: "The walk up from the scenic area takes 45 min. Cable car available (¥80). Go at dawn before the first tour buses arrive — the mist over the lake in the first hour of daylight is extraordinary." },
      { name: "Hemu Tuvan Village", nameZh: "禾木·图瓦人村庄", type: "Culture", duration: "Full day", description: "A village of 700 Tuvan people in the Altai highlands — log cabins, reindeer herders, and a way of life more similar to Siberia than China. The autumn misty mornings are among the most photographed scenes in Xinjiang.", tips: "Hemu is 55km from Kanas Lake — accessible by bus or taxi (¥80). Stay overnight to experience the morning mist before the day-trippers arrive." },
    ],
    food: [
      { name: "Tuvan Milk Products", nameZh: "图瓦奶酪", description: "The Tuvan community makes fresh cream, sour cream, and aged cheese from their cattle — unlike anything else in China.", mustTry: true, where: "Homestay guesthouses in Hemu village" },
    ],
    transportation: [
      { mode: "✈️ Air to Burqin or Kanas Airport", details: "New Kanas Airport (KJI) opened in 2018 — flights from Urumqi (1.5h), Chengdu, Xi'an. From Burqin county town: 2h bus to scenic area entrance." },
    ],
    accommodation: "Kanas scenic area guesthouses (¥300–700, book months ahead for October). Hemu village homestays (¥100–250) offer the most atmospheric experience.",
    travelTips: [
      "Kanas is one of the most heavily booked destinations in China for October Golden Week — book both transport and accommodation 3 months ahead.",
      "The 20km hiking trail connecting Kanas Lake and Hemu village (passing White Birch Forest and Wolong Bay) is one of the finest day hikes in Xinjiang.",
    ],
  },

  qilian: {
    id: "qilian", nameZh: "祁连", nameEn: "Qilian",
    province: "qinghai", provinceZh: "青海",
    tagline: "Snow mountains, yak meadows & Silk Road passes",
    description: "Qilian County sits in the Qilian Mountain corridor at 2,787m — snow-capped peaks above 5,000m, sweeping alpine meadows (门源百里花海 Menyuan Rapeseed Flower Sea is directly adjacent), and the ancient Silk Road pass that connected Chang'an to the northwest. One of the least-visited alpine destinations in China despite world-class scenery.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&h=900&fit=crop",
    highlights: ["Qilian Mountain snow meadows", "Menyuan Rapeseed Flower Sea", "Zhuo'er Mountain ski resort", "Tibetan grassland culture"],
    bestSeason: "Jun–Sep — the meadows are green and the sky clear. July has the Menyuan rapeseed in full flower (a sea of yellow). Winter is cold but Zhuo'er Mountain has excellent skiing (Dec–Mar).",
    attractions: [
      { name: "Menyuan Rapeseed Flower Sea", nameZh: "门源百里花海", distance: "50km east of Qilian", type: "Nature", duration: "Half day", description: "Every July, 533,000 acres of rapeseed flower into a wall-to-wall carpet of yellow against the blue Qilian Mountain backdrop — one of China's most spectacular seasonal landscapes.", tips: "Peak bloom: July 5–25. Take the HSR from Xining to Menyuan North (40 min), then taxi to the main viewpoints. Weekdays only — weekends are extremely crowded." },
      { name: "Ox Heart Mountain Meadow", nameZh: "牛心山草原", type: "Nature", duration: "Half day", description: "A broad alpine meadow at 3,500m below the 4,667m Ox Heart Mountain — perfect for photography of yak herds against snow peaks and wildflower carpets.", tips: "Hire a local driver from Qilian town (¥200–300/day) to access the best meadow viewpoints above 3,000m." },
    ],
    food: [
      { name: "Hand-Pulled Lamb", nameZh: "手抓羊肉", description: "Qilian mountain-grazed Tibetan lamb — boiled whole, served to the table by hand. The altitude grass diet gives it a distinctly clean flavour.", mustTry: true, where: "Tibetan restaurants in Qilian town centre" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail (new Xining-Zhangye line)", details: "Qilian Station now connected to Xining (1.5h) and Zhangye (1h) by the new Shandan-Qilian HSR completed in 2024." },
    ],
    accommodation: "Qilian town guesthouses (¥120–300). Yurt camp stays on the meadows (¥200–400) with meals included.",
    travelTips: [
      "Qilian sits on the border of Qinghai and Gansu — combine with Zhangye's Rainbow Mountains (1.5h by road) for a spectacular 3-day circuit.",
    ],
  },

  wutaishan: {
    id: "wutaishan", nameZh: "五台山", nameEn: "Wutai Mountain",
    province: "shanxi", provinceZh: "山西",
    tagline: "China's most sacred Buddhist mountain",
    description: "Wutai Mountain is the earthly home of Manjushri Bodhisattva (文殊菩萨) — and with 53 monasteries in a single mountain basin, it has more Buddhist institutions than any other sacred mountain in China. The unique mix of Han and Tibetan Buddhist traditions makes it living religious heritage: yellow-robed Gelug monks chanting in Tibetan alongside Han monks in grey.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop",
    highlights: ["Xiantong Temple (200 BC)", "Tayuan Temple White Pagoda", "Tibetan Yellow Monastery (Pusading)", "North Terrace summit (3,058m)"],
    bestSeason: "Jun–Sep — the high altitude makes summers cool (average 12°C) even when the plains are baking. Autumn has brilliant foliage and quiet pilgrimage crowds. April–May has late snow and fewer tourists.",
    attractions: [
      { name: "Tayuan Temple (White Pagoda)", nameZh: "塔院寺·大白塔", type: "Culture", duration: "1.5 hours", description: "The 56m white chorten at the centre of the mountain town — the most iconic structure at Wutai Mountain, built in the Yuan dynasty. Prayer wheel corridors surround the base.", tips: "The morning kora (circumambulation) by pilgrims around the white pagoda, usually starting at 5–6am, is deeply moving to witness." },
      { name: "Xiantong Temple", nameZh: "显通寺", type: "Culture", duration: "2 hours", description: "The oldest and largest temple complex at Wutai Mountain — founded in the Eastern Han dynasty (68 AD), with 400+ rooms across 7 courtyards. The Bronze Hall (铜殿) and the cast-iron White Pagoda replicas are extraordinary craftsmanship.", tips: "Free entry. The rear of the temple is quieter and has the most ancient architecture. Morning prayer is at 4:30am." },
      { name: "North Terrace Summit (Beitai Dingyue)", nameZh: "北台顶·叶斗峰", type: "Nature", duration: "Full day hike or 3h by road", description: "The highest of the five terraces at 3,058m — accessible by 4WD road or a full-day hike. The sub-alpine landscape above 2,800m is treeless and dramatic, with the other four peaks visible on clear days.", tips: "Hire a local jeep from the town (¥300–400 return, fits 4–5 people) to reach the summit. The Lingying Temple at the summit is the highest Buddhist temple in China." },
    ],
    food: [
      { name: "Wutaishan Vegetarian Mushroom Dishes", nameZh: "五台山素食", description: "The mountain's cool, damp climate produces exceptional wild mushrooms. Temple restaurants serve vegetarian versions of classic Shanxi dishes using local morels, wood ear, and chanterelles.", mustTry: true, where: "Temple guesthouses and vegetarian restaurants in Taihuai town" },
    ],
    transportation: [
      { mode: "🚌 Bus from Datong or Taiyuan", details: "Datong to Wutaishan: 2.5h by bus. Taiyuan to Wutaishan: 2.5h. No HSR directly — nearest station is Xinzhou North (1h by bus). Beijing: 4.5h by bus (direct from Beijing Liuliqiao)." },
    ],
    accommodation: "Taihuai town guesthouses and hotels (¥200–600). Temple guesthouses inside the compounds (¥80–200, simple but unmissable atmosphere). Book ahead for summer weekends.",
    travelTips: [
      "The mountain is cold year-round — bring a fleece and waterproof even in summer. July/August temperatures average 12–18°C.",
      "Pilgrimage season (summer) brings intense crowds — visiting weekdays in September is the best balance of good weather and manageable numbers.",
    ],
  },

  jiayuguan: {
    id: "jiayuguan", nameZh: "嘉峪关", nameEn: "Jiayuguan",
    province: "gansu", provinceZh: "甘肃",
    tagline: "The western end of the Great Wall",
    description: "Jiayuguan Fort is where the Great Wall ends — the westernmost fortress of the Ming dynasty, built in 1372 where the Qilian Mountains and Hei Mountains funnel into a 15km-wide corridor. Beyond this gate was 'beyond the passes' (关外) — the outer darkness of the Silk Road and the Gobi Desert. The fort is the most complete Ming military complex still standing.",
    image: "https://images.unsplash.com/photo-1565128939960-1ec0a5e46e93?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1565128939960-1ec0a5e46e93?w=1600&h=900&fit=crop",
    highlights: ["Jiayuguan Fort (Ming, 1372)", "First Pier of the Great Wall", "Overhanging Great Wall section", "Gobi Desert with Qilian snow backdrop"],
    bestSeason: "Apr–Oct — the snow on Qilian Mountains behind the fort is most visible in spring and after autumn rain. Summer is hot (35°C) but the desert light is dramatic. Winter is very cold (−15°C).",
    attractions: [
      { name: "Jiayuguan Fort", nameZh: "嘉峪关关城", type: "Culture", duration: "2.5 hours", description: "The complete Ming military compound — three concentric walls, watchtowers, armories, and a theatre for garrison entertainment. The outer barbican gate faces west toward the Silk Road; the inner gate east toward China. The 9m-high wall circuit walk takes 45 minutes.", tips: "Combined ticket (¥120) covers the fort, Overhanging Wall, and First Pier. The sunset on the walls with Qilian Mountain backdrop is extraordinary." },
      { name: "Overhanging Great Wall (Xuanbi Changcheng)", nameZh: "悬壁长城", type: "Culture", duration: "1.5 hours", description: "A section of Wall climbing near-vertically up the Hei Mountain cliff face — the 'Hanging Wall' for which Jiayuguan is named. The contrast of the grey stone wall against orange-red cliff is dramatic.", tips: "A 20-min climb to the top viewpoint gives the classic aerial view of the Wall meeting the cliff. Accessible by taxi from the main fort (¥20)." },
      { name: "First Pier of the Great Wall", nameZh: "长城第一墩", type: "Culture", duration: "1 hour", description: "The southernmost anchor of the Great Wall at Jiayuguan — a single earthen pier standing in the Yellow River floodplain, marking the absolute terminus of the wall system.", tips: "The view back from the pier across the flat Gobi toward the fort silhouette is one of the most desolate and atmospheric in the northwest." },
    ],
    food: [
      { name: "Gobi Lamb Rack", nameZh: "戈壁滩羊排", description: "Lamb from the Gobi Desert — grazed on sparse desert vegetation that concentrates the flavour. Grilled with cumin and chilli on an open coal grill.", mustTry: true, where: "Barbecue restaurants on Jiayuguan East Road" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Jiayuguan South Station on the Lanzhou-Xinjiang HSR. Zhangye: 40 min. Dunhuang: 1.5h. Lanzhou: 2.5h. Urumqi: 4h." },
    ],
    accommodation: "City centre (¥150–400). The fort area has a small cluster of guesthouses (¥180–350).",
    travelTips: [
      "Jiayuguan is a natural 1-night stop on the Silk Road HSR route between Zhangye and Dunhuang.",
    ],
  },

  dandong: {
    id: "dandong", nameZh: "丹东", nameEn: "Dandong",
    province: "liaoning", provinceZh: "辽宁",
    tagline: "China's border with North Korea & the Tiger Mountain Wall",
    description: "Dandong is China's largest border city with North Korea — separated by the Yalu River. From the riverfront promenade you can see North Korean villages, factories, and occasional people with binoculars. The Tiger Mountain Great Wall is the easternmost point of the Ming Wall; the Broken Bridge (part-bombed by US forces in the Korean War) reaches halfway across the river.",
    image: "https://images.unsplash.com/photo-1509629179375-1c38ad17e47c?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1509629179375-1c38ad17e47c?w=1600&h=900&fit=crop",
    highlights: ["Yalu River Broken Bridge", "Tiger Mountain Great Wall (eastern end)", "North Korean border scenery", "Korean Nationality Street"],
    bestSeason: "May–Oct — warm and green. The Yalu River is at its most scenic in autumn (Sep–Oct) with foliage on both banks. Spring cherry blossoms are excellent.",
    attractions: [
      { name: "Yalu River Broken Bridge", nameZh: "鸭绿江断桥", type: "Culture", duration: "1.5 hours", description: "The bridge bombed by US aircraft in November 1950 — the Chinese side still extends into the river, ending abruptly mid-span. From the walkway, North Korean border infrastructure is clearly visible.", tips: "Entry ¥30. The boat tour on the Yalu River (¥60) gets even closer to the DPRK bank — you can see the Sinuiju buildings and occasionally people going about their day." },
      { name: "Tiger Mountain Great Wall (Hushan)", nameZh: "虎山长城", type: "Culture", duration: "2.5 hours", description: "The easternmost section of the Ming Great Wall — a restored fortress and wall segment with the Yalu River visible from every tower. The terminus pavilion looks directly across to North Korea's Wihwa Island.", tips: "Entry ¥60. The hike up the wall takes 2 hours. The museum inside explains the Great Wall's eastern terminus history." },
    ],
    food: [
      { name: "Korean Cold Noodles (Naengmyeon)", nameZh: "朝鲜冷面", description: "Buckwheat noodles in ice-cold beef broth with pickled radish and egg — Dandong's large Korean-Chinese community makes the most authentic naengmyeon outside Korea.", mustTry: true, where: "Korean restaurants on Korean Nationality Street (朝鲜族风情街)" },
      { name: "Yalu River Fish", nameZh: "鸭绿江鱼", description: "Fresh river fish — crucian carp and catfish from the Yalu, braised in soy, garlic, and dried chilli.", mustTry: false, where: "Riverside restaurants along the Jiangcheng Dajie promenade" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Dandong Station. Shenyang: 2h. Beijing: 4h. The old international train to Pyongyang (2x/week) still runs — foreigners need DPRK visa." },
    ],
    accommodation: "Riverside hotels with Yalu River views (¥250–600). Budget guesthouses in the old city (¥120–250).",
    travelTips: [
      "Photography of the North Korean side is freely permitted from Chinese territory — nobody will stop you, but pointing cameras at uniformed individuals or military is discouraged.",
      "Boat tours on the Yalu River (1h, ¥60–100) are the most direct experience of the border reality — run daily from the Broken Bridge pier.",
    ],
  },

  jilin_city: {
    id: "jilin_city", nameZh: "吉林市", nameEn: "Jilin City",
    province: "jilin", provinceZh: "吉林",
    tagline: "Rime ice forests on the Songhua River",
    description: "Jilin City (not to be confused with Jilin Province) is famous for one of China's rarest natural phenomena — songhua (松花) rime ice. Nuclear power plant warm water discharged into the Songhua River prevents it from freezing, and the steam freezing on riverside willows and pines in sub-zero air creates a forest of white crystal trees that glow silver in winter sunlight.",
    image: "https://images.unsplash.com/photo-1601766994656-00d5c8b89f71?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1601766994656-00d5c8b89f71?w=1600&h=900&fit=crop",
    highlights: ["Songhua Rime Ice trees (Jan–Feb)", "Beidahu Ski Resort", "Catholic Cathedral", "Wulashan Forest Park autumn"],
    bestSeason: "Jan–Feb for rime ice (peak: January). Sep–Oct for spectacular autumn foliage. Skiing Nov–Mar at Beidahu (2h away).",
    attractions: [
      { name: "Songhua Rime Ice Viewing", nameZh: "松花江雾凇", type: "Nature", duration: "3 hours", description: "The Jiangnan Park and Linjiang Road stretch of the Songhua River — overnight the willows and pines coat themselves in white ice crystals from the river fog. The morning view (8–10am when the crystals are freshest) is extraordinary.", tips: "The phenomenon is best when temperature is −15°C or below. Jiangnan Park (江南公园) and the riverfront south of Beihua University are the best spots. Free viewing — no ticket needed." },
      { name: "Beidahu Ski Resort", nameZh: "北大壶滑雪场", type: "Nature", duration: "Full day", description: "One of northeast China's finest ski resorts — 51 runs, Olympic-grade facilities, and the famous 'China's powder' effect of cold dry Manchurian snow.", tips: "2h from Jilin city by highway. All-inclusive packages (lift, rental, bus) available from city hotels (¥300–500/day)." },
    ],
    food: [
      { name: "Korean Dog Hotpot (Boshintang)", nameZh: "狗肉火锅", description: "Traditional Korean-Chinese winter hotpot considered medicinal — a cultural speciality of the Chaoxianzu (ethnic Korean) community in Jilin.", mustTry: false, where: "Korean neighbourhood restaurants on Jilin's east side" },
      { name: "Jilin Sour Cabbage Fish", nameZh: "酸菜炖鱼", description: "Northeast China's most beloved pairing — river fish stewed with fermented sour cabbage in a deep clay pot. The acid cuts through the fish richness perfectly.", mustTry: true, where: "Dongbei cuisine restaurants throughout the city" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Jilin Station on the Changchun-Jilin intercity HSR. Changchun: 25 min. Harbin: 1.5h via Changchun." },
    ],
    accommodation: "City centre riverfront hotels (¥200–500). During rime ice season, these fill months in advance — book early.",
    travelTips: [
      "The rime ice phenomenon is unpredictable — it requires a specific combination of temperature and wind. A 3-night stay increases the chance of witnessing a perfect morning.",
      "Jilin city is 60km from Changchun — makes an easy day trip or overnight from the provincial capital.",
    ],
  },

  mohe: {
    id: "mohe", nameZh: "漠河", nameEn: "Mohe",
    province: "heilongjiang", provinceZh: "黑龙江",
    tagline: "China's northernmost city — Northern Lights & midnight sun",
    description: "Mohe County (53.5°N) is the northernmost inhabited area of China — sitting on the banks of the Amur River on the Russian border. In winter, the Northern Lights (aurora borealis) are visible on clear nights; in midsummer the sun barely sets, and in January the temperature regularly drops to −50°C. The Siberian taiga here is primeval boreal forest largely unchanged since the last ice age.",
    image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&h=900&fit=crop",
    highlights: ["Northern Lights viewing (Jan–Feb)", "China's Pole of Cold (−52.3°C record)", "Midnight sun (late June)", "Siberian tiger habitat"],
    bestSeason: "Dec–Feb for Northern Lights and extreme cold experiences. Jun 21–25 for midnight sun. The summer (Jun–Aug) is surprisingly green and comfortable (+25°C).",
    attractions: [
      { name: "Northern Pole of China / Arctic Village", nameZh: "北极村", type: "Landmark", duration: "Half day", description: "The northernmost village in China — the Amur River marks the Russian border and the horizon reveals Siberia. A stone monument marks the 53.5°N latitude. In winter, aurora viewing tours depart from here at 10pm.", tips: "The Northern Lights are visible 30–40 nights per year between November and February. Best aurora conditions: temperature below −20°C, clear skies, new moon. A local aurora guide (¥200–300) is worth hiring." },
      { name: "Mohe Qixing Nature Reserve", nameZh: "漠河七星峰", type: "Nature", duration: "Full day", description: "Ancient boreal forest — stands of Siberian larch, Dahurian birch, and Korean pine completely untouched since the 1987 Great Black Dragon Fire. Wolverine, lynx, and Amur leopard tracks in the snow.", tips: "Accessible only with a local guide (¥300–500/day) in winter. Summer hiking is independent. The fire lookout tower at 800m has panoramic taiga views." },
    ],
    food: [
      { name: "Smoked Amur Fish", nameZh: "黑龙江熏鱼", description: "Fish from the Amur (Black Dragon) River smoked over local pine — deeply flavoured, preserved by cold. The summer fish run brings enormous catches of kaluga, carp, and perch.", mustTry: true, where: "Fish markets and restaurants in Mohe town" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Mohe Gulian Airport (OHE) — small regional airport, flights from Harbin (1.5h) and Beijing. In winter, limited frequency — check ahead." },
      { mode: "🚌 Overland from Harbin", details: "16h by overnight bus or train — possible but very long. Air is strongly recommended." },
    ],
    accommodation: "Mohe town guesthouses (¥150–350). Arctic Village lodges specifically for aurora viewing (¥300–600). Warm-up rooms are essential — choose accommodation with 24-hour heating guarantees.",
    travelTips: [
      "The cold at Mohe in January is genuinely dangerous — proper Arctic clothing (rated to −50°C) is not optional. Rental available in Mohe town.",
      "The midsummer midnight sun (June 21) creates 19+ hours of daylight — the sun barely dips below the horizon at midnight. A remarkable phenomenon.",
    ],
  },

  zhongwei: {
    id: "zhongwei", nameZh: "中卫", nameEn: "Zhongwei",
    province: "ningxia", provinceZh: "宁夏",
    tagline: "Where the Tengger Desert meets the Yellow River",
    description: "Zhongwei County presents one of China's most dramatic landscape contrasts — the Tengger Desert's singing sand dunes advance directly to the bank of the Yellow River at Shapotou, where you can stand with feet in river sand and look back at a 200m dune. The region is also China's leading base for sand-control engineering: the first desert railway in the world was kept operational by local straw-checkerboard planting.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop",
    highlights: ["Shapotou Desert-meets-river scenery", "Singing sand dunes (鸣沙山)", "Yellow River sheepskin raft", "Desert geopark stargazing"],
    bestSeason: "Apr–Oct — warm and accessible. Summer evenings in the desert are the best stargazing in Ningxia. Autumn (Sep–Oct) is ideal with cooler temperatures and clear skies.",
    attractions: [
      { name: "Shapotou Scenic Area", nameZh: "沙坡头旅游景区", type: "Nature", duration: "Half day", description: "The iconic landscape — the Tengger Desert dune crest rising immediately behind the Yellow River. Zip-lines from the dune top down to the river (¥80), camel rides, and sheepskin raft river crossings are the main activities.", tips: "Entry ¥80. Morning (8–10am) is best for photography — the low light on the dunes before the crowds. Avoid Saturday–Sunday in summer when the site is packed." },
      { name: "Tengger Desert Camp", nameZh: "腾格里沙漠营地", type: "Nature", duration: "Overnight", description: "Desert camping 20km inside the Tengger — no light pollution, Milky Way overhead, absolute silence. Camel treks at sunrise reach isolated dune fields far from the tourist zone.", tips: "Several operators run 2-day desert camping trips (¥600–900/person all-inclusive) departing from Zhongwei." },
    ],
    food: [
      { name: "Tan Sheep Roasted Whole", nameZh: "滩羊全席", description: "Ningxia's Tan sheep (raised on riverside grass) is considered China's finest lamb — entire roasted, served at the table by the shoulder.", mustTry: true, where: "Traditional restaurants in Zhongwei old city" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Zhongwei South Station. Yinchuan: 45 min. Lanzhou: 2.5h. Xi'an: 3h." },
    ],
    accommodation: "Zhongwei city centre (¥150–350). Desert eco-lodges near Shapotou (¥300–700). Desert camping operators include accommodation in their packages.",
    travelTips: [
      "Combine with Yinchuan on a 2-night Ningxia circuit — the Western Xia tombs and Shapotou together give an excellent overview of the region.",
    ],
  },

  ejina: {
    id: "ejina", nameZh: "额济纳", nameEn: "Ejina",
    province: "neimenggu", provinceZh: "内蒙古",
    tagline: "Poplar forests that turn gold in October",
    description: "Ejina Banner (also called Ejinaqi) is the most remote inhabited area in Inner Mongolia — an oasis town in the Gobi Desert fed by the Heihe River, surrounded by 40,000 acres of ancient Euphrates poplar (胡杨树). In the first two weeks of October, these trees turn an extraordinary hammered-gold before dropping their leaves — one of China's most photographed seasonal spectacles.",
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=1600&h=900&fit=crop",
    highlights: ["Euphrates poplar (胡杨) autumn gold", "Juyan Lake (Han dynasty ruins)", "Black City (Khara-Khoto ruins)", "Gobi Desert stargazing"],
    bestSeason: "Oct 1–20 — the poplar gold season. The peak usually runs October 5–15, but varies by year. Summer (Jun–Aug) is very hot (42°C). Spring has sandstorms.",
    attractions: [
      { name: "Euphrates Poplar Forest", nameZh: "胡杨林", type: "Nature", duration: "Full day", description: "Numbered zones (1号~8号) of ancient poplar groves — some trees are over 1,000 years old. In October, the entire forest glows gold against blue Gobi sky. The most dramatic zones are 2, 3, and 8.", tips: "The scenic area ticket (¥120) covers shuttle buses between zones. Zone 3 at sunrise and Zone 8 at sunset are the most photographed. October 1 Golden Week is overwhelming — visit week two of October instead." },
      { name: "Black City (Khara-Khoto)", nameZh: "黑城遗址", type: "Culture", duration: "2 hours", description: "A 12th-century Tangut Western Xia city abandoned after Timur's forces diverted the water supply in the 14th century — the ruins are exactly as they were left, half-buried in desert sand with the city walls still standing 9m tall.", tips: "50km from Ejina town; hire a car (¥200). The late afternoon light makes the rammed-earth ruins extremely photogenic." },
    ],
    food: [
      { name: "Camel Milk Tea", nameZh: "驼奶茶", description: "Bactrian camel milk churned into salted tea — the traditional beverage of Mongolian herders in the Gobi region.", mustTry: true, where: "Tea houses and guesthouses in Ejina town" },
    ],
    transportation: [
      { mode: "✈️ Air", details: "Ejina Airport (EJN) — flights from Hohhot (2h), Xi'an, and Yinchuan. Only practical access for the October season." },
      { mode: "🚂 Rail", details: "Ejina Station on the Jilantai branch line. From Hohhot: ~10h by slow train. Air is strongly preferred for October visits." },
    ],
    accommodation: "Ejina town guesthouses and hotels (¥200–500). October 1–20: book 3 months ahead and expect 2× normal prices. Yurt camps outside the forest (¥300–600).",
    travelTips: [
      "October is the only reason most people visit Ejina — the poplar gold is extraordinary and worth the remoteness.",
      "Combine with a visit to the Badain Jaran Desert dunes (200km south, accessible by 4WD) for one of China's most otherworldly landscapes.",
    ],
  },

  qinhuangdao: {
    id: "qinhuangdao", nameZh: "秦皇岛", nameEn: "Qinhuangdao",
    province: "hebei", provinceZh: "河北",
    tagline: "Where the Great Wall meets the Bohai Sea",
    description: "Qinhuangdao holds the most dramatic moment in all of Chinese geography — at Shanhaiguan, the eastern end of the Ming Great Wall (老龙头) descends into the Bohai Sea, its last tower rising from the surf. The city is also the gateway to Beidaihe beach, a favourite summer retreat since the Qing dynasty (Empress Dowager Cixi summered here), and a major migratory bird flyway.",
    image: "https://images.unsplash.com/photo-1525038083052-41b3b8c91e55?w=800&h=500&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1525038083052-41b3b8c91e55?w=1600&h=900&fit=crop",
    highlights: ["Old Dragon Head (Great Wall meets sea)", "Shanhaiguan First Pass Under Heaven", "Beidaihe bird migration", "Nandaihe Beach"],
    bestSeason: "May–Sep — beach season and bird migration (late Apr–May for spring migration, Aug–Sep for autumn). Avoid mid-summer (July–August) when it becomes extremely crowded.",
    attractions: [
      { name: "Old Dragon Head (Laolongtou)", nameZh: "老龙头", type: "Culture", duration: "2 hours", description: "The terminal pier and tower of the Ming Great Wall entering the Bohai Sea — the Wall's eastern terminus, rebuilt in Ming dynasty and restored in the 1980s. The sight of crenellated battlements rising from the waves is unique in China.", tips: "Entrance ¥120 (combined with Shanhaiguan complex). High tide makes the most dramatic photos — check tide times at the ticket office." },
      { name: "Shanhaiguan First Pass", nameZh: "山海关天下第一关", type: "Culture", duration: "2 hours", description: "The Gate Tower inscribed 'First Pass Under Heaven' (天下第一关) — the strategic gateway that divided China from the 'barbarian north' for 600 years. The town inside the walls is a preserved Ming-era settlement.", tips: "Entry ¥60. The Gate Tower interior has exhibition on the Wall's history. The walls of the town can be walked for 3km." },
      { name: "Beidaihe Bird Watching", nameZh: "北戴河观鸟", type: "Nature", duration: "Half day", description: "One of Asia's top 10 bird migration sites — the Beidaihe Bird Ringing Station records 400+ species during spring and autumn passage, including rare raptors and waders.", tips: "The Beidaihe Ringing Station is open to visitors during migration seasons (Apr–May, Aug–Sep). The Lianfeng Mountain Forest Park is the best urban birding location." },
    ],
    food: [
      { name: "Beidaihe Hairy Crab", nameZh: "北戴河梭子蟹", description: "Portunus crab from the cold Bohai waters — significantly more flavourful than Shanghai's freshwater crab. Steamed simply with vinegar-ginger dipping sauce.", mustTry: true, where: "Seafood restaurants on Beidaihe's beach strip (September–October crab season)" },
    ],
    transportation: [
      { mode: "🚄 High-speed rail", details: "Qinhuangdao Station or Beidaihe Station. Beijing: 1.5h. Shenyang: 2h. Tianjin: 1h." },
    ],
    accommodation: "Beidaihe beach hotels (¥200–600, book 2 months ahead for August). Shanhaiguan old town guesthouses (¥150–350). Off-season (Oct–May) prices drop significantly.",
    travelTips: [
      "August is the most crowded month in Beidaihe's history — the town effectively doubles in population. Visit May or September for calm beaches and good weather.",
    ],
  },

};

// ── Helper exports ────────────────────────────────────────────────────────────

/** Get city detail by id */
export function getCityDetail(id: string): CityDetail | undefined {
  return CITY_DETAILS[id];
}

/** All cities as array */
export const PRIORITY_CITIES = Object.values(CITY_DETAILS);

/** City IDs grouped by region */
export const CITIES_BY_REGION = {
  north:        ["beijing_city", "yanqing", "tianjin_city", "jizhou", "jinan", "qingdao", "taishan", "qufu", "yantai", "chengde", "qinhuangdao", "datong", "pingyao", "wutaishan"],
  northeast:    ["shenyang", "dalian", "dandong", "changbaishan", "jilin_city", "harbin", "mohe", "hulunbuir", "ejina"],
  east:         ["shanghai_city", "zhujiajiao", "hangzhou", "ningbo", "shaoxing", "zhoushan", "wuzhen", "nanjing", "suzhou", "yangzhou", "wuxi", "zhenjiang", "xiamen", "wuyishan", "quanzhou"],
  central:      ["xian", "yanan", "luoyang", "kaifeng", "dengfeng", "anyang", "wuhan", "wudangshan", "enshi", "yichang", "shennongjia"],
  southwest:    ["chengdu", "chongqing", "wulong", "leshan", "emeishan", "jiuzhaigou", "daocheng", "guiyang", "kaili", "zhenyuan", "huangguoshu", "libo", "kunming", "lijiang", "dali", "xishuangbanna", "shangrila"],
  south:        ["guangzhou", "shenzhen", "zhuhai", "guilin", "yangshuo", "nanning", "beihai", "sanya", "haikou", "wenchang", "zhangjiajie", "changsha", "fenghuang", "yueyang", "hengshan"],
  anhui:        ["huangshan", "hongcun", "hefei", "wuyuan_an", "jiuhuashan"],
  jiangxi:      ["jingdezhen", "lushan", "nanchang", "longhushan"],
  tibet:        ["lhasa", "shigatse", "nyingchi", "namtso", "zhada"],
  xinjiang:     ["kashgar", "urumqi", "turpan", "ili", "kanas"],
  qinghai:      ["xining", "qinghai_lake", "tongren_qh", "golmud", "qilian"],
  northwest:    ["dunhuang", "zhangye", "jiayuguan", "yinchuan", "zhongwei", "hohhot"],
} as const;
