export const MESSAGES = {
  en: {
    aboutMe: "About me",
    backToHome: "Back to Home",
    overview: "Overview",
    challenge: "Challenge",
    approach: "Approach",
    impact: "Impact",
    nextCase: "Next Case",
    theme: "Theme",
    dark: "Dark",
    light: "Light",
    language: "Language",
    english: "English",
    hindi: "Hindi",
    leadEngineerRole: "Lead Engineer at Societe Generale",
    basedInBengaluru: "Based in Bengaluru, India",
    aboutTitle: "About Jitendra Pathak",
    aboutIntro:
      "I combine engineering depth and business execution to build practical, high-impact systems and growth programs.",
    aboutVisionTitle: "Leadership style",
    aboutVisionText:
      "I lead with clear ownership, strong communication, and disciplined delivery. My focus is turning complex requirements into execution-ready plans.",
    aboutCraftTitle: "Cross-industry execution",
    aboutCraftText:
      "From banking systems to transport and tours operations, I build structures that improve consistency, quality, and growth outcomes.",
    aboutBuildTitle: "Entrepreneurial mindset",
    aboutBuildText:
      "I also work directly with founders to launch and scale businesses from the ground up with practical strategy and measurable execution.",
    aboutMetricA: "10+ years industry experience",
    aboutMetricB: "5 years entrepreneurship",
    aboutMetricC: "Delivery + growth focus",
    goToAbout: "About me",
  },
  hi: {
    aboutMe: "मेरे बारे में",
    backToHome: "होम पर वापस जाएं",
    overview: "सारांश",
    challenge: "चुनौती",
    approach: "दृष्टिकोण",
    impact: "प्रभाव",
    nextCase: "अगला केस",
    theme: "थीम",
    dark: "डार्क",
    light: "लाइट",
    language: "भाषा",
    english: "अंग्रेज़ी",
    hindi: "हिंदी",
    leadEngineerRole: "सोसाइटी जनरल में लीड इंजीनियर",
    basedInBengaluru: "बेंगलुरु, भारत में आधारित",
    aboutTitle: "जितेंद्र पाठक के बारे में",
    aboutIntro:
      "मैं इंजीनियरिंग की गहराई और बिज़नेस एक्ज़ीक्यूशन को साथ लाकर हाई-इम्पैक्ट सिस्टम और ग्रोथ प्रोग्राम बनाता हूं।",
    aboutVisionTitle: "लीडरशिप स्टाइल",
    aboutVisionText:
      "मैं स्पष्ट ओनरशिप, मजबूत कम्युनिकेशन और अनुशासित डिलीवरी के साथ नेतृत्व करता हूं। मेरा फोकस जटिल आवश्यकताओं को एक्ज़ीक्यूशन योग्य प्लान में बदलना है।",
    aboutCraftTitle: "मल्टी-इंडस्ट्री अनुभव",
    aboutCraftText:
      "बैंकिंग सिस्टम से लेकर ट्रांसपोर्ट और टूर ऑपरेशंस तक, मैं ऐसे स्ट्रक्चर बनाता हूं जो गुणवत्ता, स्थिरता और ग्रोथ को बेहतर करते हैं।",
    aboutBuildTitle: "उद्यमी सोच",
    aboutBuildText:
      "मैं फाउंडर्स के साथ सीधे काम करके बिज़नेस को शून्य से लॉन्च और स्केल करने में मदद करता हूं, व्यावहारिक रणनीति और मापने योग्य परिणामों के साथ।",
    aboutMetricA: "10+ साल का अनुभव",
    aboutMetricB: "5 साल उद्यमिता",
    aboutMetricC: "डिलीवरी + ग्रोथ फोकस",
    goToAbout: "मेरे बारे में",
  },
} as const;

export type Locale = keyof typeof MESSAGES;
export type MessageKey = keyof (typeof MESSAGES)["en"];
