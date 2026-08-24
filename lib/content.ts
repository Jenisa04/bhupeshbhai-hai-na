/**
 * Every string on the page, transcribed from the approved comps.
 *
 * The site ships English only for now. When Hindi and Marathi copy arrives,
 * wrap each leaf below in a `{ en, hi, mr }` record and read it through the
 * active locale - no component needs to change shape for that to work.
 */

export type Locale = "en" | "hi" | "mr";

export const nav = {
  wordmark: "Bhupeshbhai",
  wordmarkSub: "Hai Na",
  links: [
    { label: "Bhai Dil Se", href: "#bhai-dil-se" },
    { label: "Samvaad", href: "#samvaad" },
    { label: "Bhai Se Judo", href: "#bhai-se-judo" },
  ],
  languages: [
    { code: "en", label: "EN" },
    { code: "hi", label: "हिंदी" },
    { code: "mr", label: "मराठी" },
  ],
  /** Shown in the hamburger panel - the full section list from the sitemap. */
  menu: [
    { label: "Bhai Dil Se", href: "#bhai-dil-se" },
    { label: "Arogya Doot", href: "#arogya-doot" },
    { label: "Khel & Shiksha", href: "#khel-shiksha" },
    { label: "Sanskaar & Samaj", href: "#sanskaar-samaj" },
    { label: "Apne Log", href: "#apne-log" },
    { label: "Samvaad", href: "#samvaad" },
    { label: "Bhai Se Judo", href: "#bhai-se-judo" },
  ],
} as const;

export const hero = {
  headlineNavy: "Bhupeshbhai",
  headlineGold: "Hai Na.",
  subhead: "Seva. Sanskaar. Saath.",
  tagline: "A life lived for people.",
  cta: { label: "Know Bhupeshbhai", href: "#bhai-dil-se" },
  background: {
    src: "/images/hero/village-sunrise.png",
    alt: "Schoolchildren walking a village road at sunrise on the edge of Shirpur",
  },
  portrait: {
    src: "/images/hero/bhupeshbhai-cutout.png",
    alt: "Portrait of Bhupeshbhai",
  },
};

export const bhaiDilSe = {
  id: "bhai-dil-se",
  eyebrow: "Bhai Dil Se",
  headlineNavy: "Seva, sirf kaam nahi.",
  headlineGold: "Jeene ka tareeka hai.",
  body: [
    "For Bhupeshbhai, public life has always been about being there when people need him.",
  ],
  bodyRich: {
    before: "Rooted in family values, and supporting ",
    strong: "Amrishbhai’s vision for Shirpur",
    after:
      ", his journey is defined by seva, accessibility and a deep sense of responsibility towards people.",
  },
  cta: { label: "Discover Bhai Dil Se", href: "#arogya-doot" },
  quote: ["पद हो या पहचान,", "सबसे पहले इंसान।"],
  main: {
    src: "/images/bhai-dil-se/main.jpg",
    alt: "Bhupeshbhai resting his cheek on his hands, smiling during a public event",
  },
  thumbs: [
    {
      src: "/images/bhai-dil-se/seated.jpg",
      alt: "Bhupeshbhai seated with arms folded at a community gathering",
    },
    {
      src: "/images/bhai-dil-se/stage.jpg",
      alt: "Bhupeshbhai addressing an audience from a lit stage",
    },
    {
      src: "/images/bhai-dil-se/portrait-outdoor.jpg",
      alt: "Bhupeshbhai smiling outdoors beside a car",
    },
  ],
};

export const arogyaDoot = {
  id: "arogya-doot",
  eyebrow: "Bhai Dil Se",
  headlineNavy: "Arogya Doot",
  headlineGold: ["Jab ilaaj ki raah", "mushkil thi, Bhai saath tha."],
  body: [
    "For years, Bhupeshbhai has personally helped people and families access medical treatment when the care they needed was not available close to home.",
  ],
  bodyRich: {
    before:
      "From finding the right hospital to helping them navigate treatment in Mumbai, more than ",
    strong: "10,000",
    after: " people have found support when they needed it most.",
  },
  stat: {
    value: "10,000+",
    lines: ["people supported", "in their journey", "to healthcare"],
  },
  quote: ["पद हो या पहचान,", "सबसे पहले इंसान।"],
  route: { from: "Shirpur", to: "Mumbai" },
  main: {
    src: "/images/arogya-doot/main.jpg",
    alt: "Bhupeshbhai with hospital staff and community members",
  },
  cards: [
    {
      src: "/images/arogya-doot/hospital.webp",
      alt: "Indira Gandhi Memorial Hospital, Shirpur",
      navy: "When treatment meant travelling 400 km…",
      gold: "A family’s journey to Mumbai.",
    },
    {
      src: "/images/arogya-doot/clinic.jpg",
      alt: "A health worker drawing blood from a patient at a clinic",
      navy: "They knew the diagnosis. They didn’t know where to go next.",
      gold: "",
    },
    {
      src: "/images/arogya-doot/families.png",
      alt: "Bhupeshbhai standing with a family after treatment",
      navy: "More than treatment, it’s the support that heals families.",
      gold: "",
    },
  ],
};

export const khelShiksha = {
  id: "khel-shiksha",
  eyebrow: "Khel & Shiksha",
  headlineNavy: "Har hunar ko mauka.",
  headlineGold: "Har sapne ko raasta.",
  body: ["Bhupeshbhai believes that opportunity can change the course of a young life."],
  bodyRich: {
    before: "From creating opportunities through sport to supporting ",
    strong: "Shri Amrishbhai Patel’s vision",
    after:
      " of making quality education accessible across Shirpur, the focus remains the same: helping the next generation move forward.",
  },
  pool: {
    src: "/images/khel-shiksha/pool.png",
    alt: "Children learning to swim in the Shirpur community pool",
  },
  panels: [
    {
      key: "khel",
      src: "/images/khel-shiksha/team.png",
      alt: "A youth cricket team photographed with Bhupeshbhai on the ground",
      title: "Khel",
      lines: ["Opportunity to play.", "Opportunity to excel."],
    },
    {
      key: "shiksha",
      src: "/images/khel-shiksha/school.png",
      alt: "Students walking into their school campus in Shirpur",
      title: "Shiksha",
      lines: ["Quality education.", "Closer to home."],
    },
  ],
  banner: {
    navy1: "Khel",
    goldMid: " se hausla. ",
    gold2: "Shiksha",
    navyEnd: " se udaan.",
  },
  cta: { label: "Explore the journey", href: "#sanskaar-samaj" },
};

export const sanskaarSamaj = {
  id: "sanskaar-samaj",
  eyebrow: "Sanskaar & Samaj",
  headlineNavy: "Sirf bhavishya nahi.",
  headlineGold: "Behtar insaan bhi.",
  bodyRich: {
    before: "Bhupeshbhai believes education must go beyond knowledge. It must nurture ",
    highlights: ["values", "ethics", "discipline", "responsibility"],
  },
  body: [
    "The same thought extends into community life, creating spaces and initiatives that bring people together and strengthen the social fabric of Shirpur.",
  ],
  hero: {
    src: "/images/sanskaar-samaj/sapling.png",
    alt: "Schoolchildren planting a sapling together",
  },
  cards: [
    {
      src: "/images/sanskaar-samaj/mandir.png",
      alt: "A temple in Shirpur",
      title: "Culture & Faith",
      caption: "Our roots. Our strength.",
    },
    {
      src: "/images/sanskaar-samaj/nageshwar.png",
      alt: "Shri Nageshwar Mandir",
      title: "Spiritual Connect",
      caption: "Places that unite. Values that guide.",
    },
    {
      src: "/images/sanskaar-samaj/garden.png",
      alt: "A public garden and play area in Shirpur",
      title: "Community & Togetherness",
      caption: "Spaces to connect. Bonds to grow.",
    },
  ],
  banner: { navy1: "Achhi shiksha.", gold: " Achhe sanskaar.", navy2: " Achha samaj." },
};

export const apneLog = {
  id: "apne-log",
  eyebrow: "Apne Log",
  headlineNavy: "Logon ke beech.",
  headlineGold: "Hamesha, har kadam par.",
  bodyRich: {
    before: "For Bhupeshbhai, public life is not about distance. It is about ",
    strong: "being present",
    after: ".",
  },
  body: [
    "From everyday conversations to moments that matter, he remains accessible, approachable and committed to every person of Shirpur.",
  ],
  pledge: {
    title: "Always close to the people",
    lines: ["Sunna. Samajhna.", "Saath dena. Yeh hi", "hamara vaada hai."],
  },
  portrait: {
    src: "/images/hero/bhupeshbhai-cutout.png",
    alt: "Portrait of Bhupeshbhai",
  },
  cards: [
    {
      src: "/images/apne-log/har-mulaqat.jpg",
      alt: "Bhupeshbhai greeting villagers with folded hands",
      navy: "Har mulaqat.",
      gold: "Ek rishta.",
    },
    {
      src: "/images/apne-log/har-awaaz.jpg",
      alt: "Bhupeshbhai batting at a local cricket ground",
      navy: "Har awaaz.",
      gold: "Ahmiyat rakhti hai.",
    },
    {
      src: "/images/apne-log/har-sapna.jpg",
      alt: "A tree plantation drive with Bhupeshbhai and local leaders",
      navy: "Har sapna.",
      gold: "Hamara zimmedari hai.",
    },
  ],
};

export const samvaad = {
  id: "samvaad",
  eyebrow: "Samvaad",
  headlineNavy: "Baat hogi.",
  headlineGold: "Dil se hogi.",
  body: [
    "Listening has always been at the heart of Bhupeshbhai’s relationship with people. Samvaad brings that spirit together through different conversations, with different people, around what matters to them.",
  ],
  main: {
    src: "/images/samvaad/podium.jpg",
    alt: "Bhupeshbhai speaking from a podium, gesturing to the audience",
  },
  cards: [
    {
      src: "/images/samvaad/bhai-se-charcha.jpg",
      alt: "Bhupeshbhai receiving a sapling at a village event",
      icon: "charcha",
      title: "Bhai Se Charcha",
      lines: ["Gaon ki baat.", "Gaon ke saath."],
    },
    {
      src: "/images/samvaad/bhai-dil-se.jpg",
      alt: "Bhupeshbhai greeting residents with folded hands",
      icon: "dilse",
      title: "Bhai Dil Se",
      lines: ["Personal stories.", "Honest conversations."],
    },
    {
      src: "/images/samvaad/yuvaon-ke-bhai.jpg",
      alt: "Bhupeshbhai with young people holding a bouquet",
      icon: "yuva",
      title: "Yuvaon Ke Bhai",
      lines: ["Sapne, sawaal", "aur kal ki baat."],
    },
    {
      src: "/images/samvaad/apno-se-samvaad.jpg",
      alt: "Bhupeshbhai being garlanded by community members",
      icon: "apno",
      title: "Apno Se Samvaad",
      lines: ["Communities. Families.", "Everyday voices."],
    },
  ],
  banner: { navy1: "Aapki", gold1: " baat,", navy2: " Bhai", gold2: " ke saath." },
};

export const bhaiSeJudo = {
  id: "bhai-se-judo",
  eyebrow: "Bhai Se Judo",
  headlineNavy: "Kuch kehna hai?",
  headlineGold: "Bhai Hai Na.",
  body: [
    "Koi sujhav, apni baat, anubhav ya samaj ke liye saath chahiye? Bhupeshbhai aapke saath hain. Seedha sampark kijiye.",
  ],
  background: {
    src: "/images/bhai-se-judo/village.png",
    alt: "A village landscape in Shirpur at golden hour",
  },
  portrait: {
    src: "/images/hero/bhupeshbhai-cutout.png",
    alt: "Portrait of Bhupeshbhai",
  },
  columns: [
    {
      icon: "chat",
      title: "Baat Karein",
      body: "Apni baat seedhe Bhupeshbhai tak pahunchayein.",
      cta: "Write to Bhupeshbhai",
      href: "#bhai-se-judo",
    },
    {
      icon: "heart",
      title: "Arogya Saath",
      body: "Healthcare access aur treatment se judi baat.",
      cta: "Reach Out",
      href: "#arogya-doot",
    },
    {
      icon: "book",
      title: "Apni Kahani",
      body: "Apna anubhav, apni kahani humse saanjha karein.",
      cta: "Share Your Story",
      href: "#samvaad",
    },
    {
      icon: "people",
      title: "Saath Judein",
      body: "Samajik, shaikshanik ya community initiatives ke liye saath judein.",
      cta: "Connect",
      href: "#apne-log",
    },
  ],
  banner: { navy1: "Aapki baat,", gold: " Bhai ke saath." },
};

export const footer = {
  wordmarkNavy: "Bhupeshbhai",
  wordmarkGold: "Hai Na.",
  tagline: "A life lived for people.",
  links: [
    { label: "Bhai Dil Se", href: "#bhai-dil-se" },
    { label: "Samvaad", href: "#samvaad" },
    { label: "Bhai Se Judo", href: "#bhai-se-judo" },
  ],
  legal: [
    { label: "Contact", href: "#bhai-se-judo" },
    { label: "Privacy", href: "#bhai-se-judo" },
    { label: "Terms", href: "#bhai-se-judo" },
  ],
  locale: "EN",
  social: [
    { label: "Facebook", icon: "facebook", href: "#bhai-se-judo" },
    { label: "Instagram", icon: "instagram", href: "#bhai-se-judo" },
    { label: "YouTube", icon: "youtube", href: "#bhai-se-judo" },
    { label: "WhatsApp", icon: "whatsapp", href: "#bhai-se-judo" },
  ],
};
