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
};

// ── Helper exports ────────────────────────────────────────────────────────────

/** Get city detail by id */
export function getCityDetail(id: string): CityDetail | undefined {
  return CITY_DETAILS[id];
}

/** All 10 priority cities as array */
export const PRIORITY_CITIES = Object.values(CITY_DETAILS);

/** City IDs grouped by region */
export const CITIES_BY_REGION = {
  north:     ["beijing_city"],
  east:      ["shanghai_city", "hangzhou", "nanjing", "suzhou"],
  central:   ["xian"],
  southwest: ["chengdu", "chongqing"],
  south:     ["guilin", "sanya"],
} as const;
