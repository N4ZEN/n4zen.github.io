// ========================================
// PORTFOLIO DATA - Edit your details here
// ========================================

export const personalInfo = {
  name: "Mariyam Nazaa Zuhair",
  role: "Senior Software Developer",
  tagline: "6+ years of experience",
  quote: ".  Fast. Secure. Scalable. Pick all three.",
  email: "naza.zuhair@gmail.com",
  phone: "+960 9189242",
  website: "github.com/N4ZEN",
  location: "Maldives",
};

export const summary = `Senior Software Developer with 6+ years of experience building secure, scalable, and high-performance systems across mobile, ML/AI, and cloud platforms. I’ve delivered enterprise-level React Native apps, native Android/iOS modules, real-time OCR/vision pipelines, and distributed backend microservices. I enjoy designing complex technical solutions, creating clean and efficient architectures, and shipping reliable, production-ready software.`;

export const socials = [
  { platform: "GitHub", handle: "N4ZEN", url: "https://github.com/N4ZEN", icon: "github" },
  {
    platform: "LinkedIn",
    handle: "naza-zuhair",
    url: "https://www.linkedin.com/in/mariyamnazaazuhair/",
    icon: "linkedin",
  },
];

export const languages = [
  { name: "Dhivehi", level: "Native", flag: "🇲🇻" },
  { name: "English", level: "Fluent", flag: "🇬🇧" },
];

// Professional Projects
export const professionalProjects = [
  {
    id: 1,
    name: "Bank of Maldives Plc — Mobile Banking App",
    role: "Senior Software Developer | 2023–2025",
    description:
      "Led end-to-end development of the national mobile banking app serving 100k+ daily users, ensuring enterprise-grade security, reliability, and performance.",
    achievements: [
      "Implemented secure OAuth2 authentication, biometric unlock flows, encrypted session handling, and token lifecycle logic aligned with compliance requirements.",
      "Integrated real-time OCR pipelines (VisionCamera + JSI processors) for scanning account numbers and documents.",
      "Led major platform upgrade React Native 0.66 → 0.77, resolving AGP, Hermes, SDK, Kotlin/Swift, and third-party breaking changes.",
      "Rewrote the React Native navigation stack, improving transition speed, resolving stack corruption, and enhancing UX consistency.",
      "Introduced Dark Mode with dynamic theming + accessibility support.",
      "Implemented Passkeys (WebAuthn) enabling secure passwordless login.",
      "Improved responsiveness via MobX caching, reducing redundant network calls across core banking flows.",
      "Raised stability by optimizing memory usage, bridge communication, and native navigation edge cases.",
      "Delivered multiple features across payments, transfers, notifications, inbox/messages, service requests, and account management.",
      "Ensured strict security best practices: encrypted storage, sensitive data redaction, secure network flows, certificate pinning considerations.",
    ],
  },
  {
    id: 2,
    name: "AI Document Intelligence System — OCR, Extraction & Fraud Detection",
    role: "Lead Engineer | 2025",
    description:
      "Designed and built an end-to-end intelligent document-processing system for receipts, invoices, and structured business documents.",
    achievements: [
      "Developed hybrid-native OCR pipelines using VisionCamera + JSI modules for low-latency text extraction.",
      "Implemented document classification, key-value extraction, normalization, and entity matching.",
      "Designed fraud-detection heuristics identifying tampered totals, mismatched metadata, duplicates, and inconsistencies.",
      "Improved accuracy through preprocessing (denoising, thresholding), tokenization, regex rules, and confidence scoring.",
      "Reduced manual review workload and significantly accelerated document-processing throughput.",
    ],
  },
  {
    id: 3,
    name: "Heylhi Environmental Monitoring App — SIGS",
    role: "Full-Stack Developer | 2022",
    description:
      "Developed Version 1.0 and contributed to Version 2.0 of a national citizen-science coastal monitoring platform.",
    achievements: [
      "Full-stack build using React Native, Laravel, MongoDB.",
      "Implemented structured environmental surveys, geotagging, media uploads, and disaster-reporting workflows.",
      "Designed data-capture flows for coral bleaching, coastal erosion, trash accumulation, and habitat assessments.",
      "Built offline-first sync for remote islands with poor connectivity.",
      "Developed backend APIs, pipelines, and dashboards supporting long-term scientific analysis.",
    ],
  },
  {
    id: 4,
    name: "React Native Dive Logging & Environmental Monitoring App — SIGS",
    role: "Full-Stack Developer | 2021",
    description: "A social + scientific platform used by divers across the Maldives.",
    achievements: [
      "Architected full-stack system with React Native, Laravel, MongoDB.",
      "Built dive logs, site metadata, environmental indicators, and profile analytics.",
      "Implemented user accounts, media uploads, dive-site databases, and sharing features.",
      "Designed offline-first data storage & synchronization for field usage.",
    ],
  },
];

// Selected Technical Projects
export const technicalProjects = [
  {
    id: 1,
    name: "VisionCamera Real-Time OCR & Frame Processing Modules (JSI + Native Code)",
    description:
      "Developed custom frame processors using native JSI logic, image preprocessing, and segmentation for low-latency OCR in financial applications.",
  },
  {
    id: 2,
    name: "Offline-First Data Collection Architecture (React Native + Laravel + MongoDB)",
    description:
      "Built incremental sync queues, conflict resolution, and local caching for environmental & field-data applications.",
  },
  {
    id: 3,
    name: "Avas Ride Driver App — Native UI Modules (Android/Kotlin)",
    description:
      "Implemented native Kotlin UI overlays for real-time ride requests, improving responsiveness and reliability in a hybrid RN–native architecture.",
  },
  {
    id: 4,
    name: "Customer Segmentation & Prediction Model (Python)",
    description: "Built ML clustering models (K-means + hierarchical) achieving 86.8% accuracy.",
  },
  {
    id: 5,
    name: "Business Intelligence System (SAS-EM + Power BI)",
    description: "Built predictive BI models improving user engagement by 75%.",
  },
  {
    id: 6,
    name: "Additional Projects",
    description:
      "School management systems (JS + MS SQL), C++ reservation systems, converters, and React/MongoDB order-management modules.",
  },
];

// Work Experience
export const workExperience = [
  {
    id: 1,
    company: "Bank of Maldives Plc",
    role: "Senior Software Developer",
    period: "2023–2025",
    location: "Maldives",
  },
  {
    id: 2,
    company: "Small Islands Geographic Society (SIGS)",
    role: "Full-Stack Developer",
    period: "2021–2022",
    location: "Maldives",
    description: "Developed environmental monitoring platforms including Heylhi and the Dives MV app.",
  },
  {
    id: 3,
    company: "Freelance",
    role: "Programmer & Data Analyst",
    period: "2019–Present",
    location: "Remote",
  },
  {
    id: 4,
    company: "Hira School",
    role: "Computer Science Teacher",
    period: "2021",
    location: "Maldives",
  },
];

export const skills = {
  "Mobile Development": [
    "React Native (Fabric, TurboModules, JSI)",
    "Android (Kotlin/Java)",
    "iOS (Swift)",
    "Native modules",
    "UI overlays",
    "VisionCamera OCR",
    "Navigation & auth flows",
  ],
  "Machine Learning & AI": [
    "OCR pipelines",
    "Document processing",
    "Fraud heuristics",
    "Python",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
  ],
  "Backend & Full Stack": [
    "Laravel",
    "Node.js",
    "Express.js",
    "REST APIs",
    "OAuth2",
    "JWT",
    "WebAuthn Passkeys",
    "Offline-first systems",
  ],
  Databases: ["MongoDB", "MS SQL"],
  "Cloud & DevOps": ["Linux", "Nginx", "Docker (basic)", "Deployments: DigitalOcean", "GitHub Actions CI/CD"],
  "Architecture & State Management": [
    "MobX",
    "Context API",
    "Caching strategies",
    "Modular patterns",
    "Clean architecture",
  ],
};

export const education = [
  {
    institution: "Asia Pacific University (APU), Malaysia & Staffordshire University, UK",
    degree: "BSc (Hons) Computer Science With Data Analytics",
    year: "2021",
    location: "Dual Degree",
  },
  {
    institution: "A-Levels",
    degree: "Mathematics • Biology • Chemistry • Physics • English AS",
    year: "",
    location: "Leadership: Prefect Leader",
  },
  {
    institution: "Sharafuddin School",
    degree: "O-Levels: Biology, Chemistry, Physics, Mathematics, English, Accounting",
    year: "",
    location: "Leadership: Deputy School Captain, VP English Club, Editor, BIOTA Exec, I³ Event Manager",
  },
];

export const tools = [
  { name: "VS Code", icon: "code" },
  { name: "React", icon: "atom" },
  { name: "Figma", icon: "figma" },
  { name: "Git", icon: "git-branch" },
  { name: "Docker", icon: "container" },
  { name: "MongoDB", icon: "database" },
  { name: "Android Studio", icon: "smartphone" },
  { name: "Xcode", icon: "apple" },
];

export const interests = ["Reading", "Traveling", "Creative Art", "Game Development"];

export const softSkills = [
  "Technical Communication",
  "Collaboration",
  "Problem Solving",
  "Systems Thinking",
  "Project Ownership",
];
