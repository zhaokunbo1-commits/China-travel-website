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
  north:     ["beijing_city"],
  east:      ["shanghai_city", "hangzhou", "ningbo", "shaoxing", "zhoushan", "nanjing", "suzhou", "yangzhou", "wuxi"],
  central:   ["xian"],
  southwest: ["chengdu", "chongqing", "leshan", "emeishan", "jiuzhaigou"],
  south:     ["guilin", "sanya"],
} as const;
