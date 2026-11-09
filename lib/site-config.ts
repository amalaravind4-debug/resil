export interface StoryPhase {
  progressStart: number;
  progressEnd: number;
  headline: string;
  tagline: string;
  description: string;
  productState: string;
  showCta?: boolean;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "study" | "comfort" | "tech" | "amenity";
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: number;
  cycle: string;
  billingPeriod: string;
  deposit: number;
  totalBilling?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "booking" | "facilities" | "location" | "tariff";
}

export interface CompetitorComparison {
  name: string;
  pincode: string;
  reviewVolume: string;
  acAndHours: string;
  primaryVulnerability: string;
  isResilience?: boolean;
}

export interface FranchiseTier {
  id: string;
  title: string;
  seatRange: string;
  spaceRequired: string;
  tagline: string;
  description: string;
  features: string[];
}

export const siteConfig = {
  brand: {
    name: "Resilience Reading Room",
    legalName: "Resilience Reading Room",
    tagline: "FOCUS. DISCIPLINE. SUCCESS.",
    subtagline:
      "24/7 quiet study space and reading library in Kuravankonam, Kowdiar, Thiruvananthapuram with 13-hour daily continuous AC (8:30 AM – 9:30 PM).",
    established: "2024",
    colors: {
      navy: "#0B1E3D",
      ivory: "#F4F0E6",
      gold: "#C5A04A",
      charcoal: "#202833",
      canvasBg: "#E6E6E4",
      muted: "#6B7280",
      white: "#FFFFFF",
      darkBg: "#050505",
    },
  },

  urls: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://resiliencereadingroom.com",
    bookMyCabin: {
      baseUrl: "https://bookmycabin.in",
      branchUrl: "https://bookmycabin.in/rooms/resilience-reading-room-kuravankonam",
      utmBranchUrl:
        "https://bookmycabin.in/rooms/resilience-reading-room-kuravankonam?utm_source=gbp&utm_medium=organic&utm_campaign=gmb-website",
      roomId: "resilience-reading-room-kuravankonam",
    },
    google: {
      businessProfileUrl:
        "https://maps.google.com/?q=Resilience+Reading+Room+Kuravankonam+Thiruvananthapuram",
      mapsDirectionUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Resilience+Reading+Room+Kuravankonam+Thiruvananthapuram",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.7483789018617!2d76.9535794!3d8.5230985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbf32d733199%3A0xb697c1d7634f5d50!2sKuravankonam%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000",
    },
    whatsapp: {
      number: "+918281208267",
      display: "+91 82812 08267",
      chatUrl:
        "https://wa.me/918281208267?text=Hi%20Resilience%20Reading%20Room%2C%20I%20would%20like%20to%20inquire%20about%20cabin%20availability%20and%20plans",
    },
  },

  location: {
    branchName: "Resilience Reading Room — Kuravankonam Flagship",
    addressLine1: "TC 24/1816-4, Market Road, Kuravankonam",
    streetAddress: "TC 24/1816-4, Market Road, Kuravankonam",
    landmark: "Near Fortune IAS Academy, Opposite Blinkit",
    locality: "Kuravankonam",
    postalZone: "Kowdiar P.O.",
    city: "Thiruvananthapuram",
    state: "Kerala",
    postalCode: "695003", // Strict postal code (never 695001)
    country: "IN",
    fullAddressDisplay:
      "TC 24/1816-4, Market Road, Kuravankonam, Near Fortune IAS Academy, Opposite Blinkit, Kowdiar P.O., Thiruvananthapuram, Kerala 695003",
    coordinates: {
      latitude: 8.5231,
      longitude: 76.9536,
    },
    phone: "+918281208267",
    displayPhone: "+91 82812 08267",
    email: "resiliencereadingroom@gmail.com",
    operatingHours: {
      display: "Facility Open 24 Hours · AC Hours: 8:30 AM – 9:30 PM (13 Hours Daily)",
      opens: "00:00",
      closes: "23:59",
      is24Hours: true,
      acHours: "8:30 AM – 9:30 PM (13 Hours Daily)",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    telemetry: {
      totalSeats: 129,
      status: "Active 129-Seat Layout",
      liveBooking: "Real-time seat mapping & waitlist synced to BookMyCabin",
    },
    feederLocalities: [
      "Kuravankonam",
      "Kowdiar",
      "Plammoodu",
      "Pattom",
      "Ambalamukku",
      "Vellayambalam",
      "Nanthankode",
      "Muttada",
      "Kesavadasapuram",
      "Ulloor",
      "PMG",
      "Sasthamangalam",
      "Jawaharnagar",
      "Palayam",
      "Statue",
      "Pulimoodu",
      "Medical College",
      "Kumarapuram",
      "Pettah",
      "Vanchiyoor",
    ],
  },

  categories: {
    primary: "Library",
    secondary: ["Study center", "Coworking space", "Education center"],
  },

  attributes: [
    "Free Wi-Fi",
    "Restroom (Hygienic with exhaust ventilation)",
    "Air-conditioned (13 Hours Daily: 8:30 AM – 9:30 PM)",
    "Dedicated Discussion Space (Completely separated from cabin zone)",
    "Dedicated Dining Space (Completely separated break area)",
    "Dedicated Prayer Room (Completely separated quiet prayer and meditation space)",
    "Onsite services (Printing & Scanning)",
    "Parking (Two-wheeler parking on Market Road)",
    "Women-friendly",
    "Purified Drinking Water",
  ],

  scrollytelling: {
    totalFrames: 80,
    aspectRatio: "9:16",
    sampledBackground: "#E6E6E4",
    phases: [
      {
        progressStart: 0.0,
        progressEnd: 0.22,
        headline: "Built for Unbroken Focus.",
        tagline: "ARCHITECTURAL CALM",
        description:
          "129 precision-engineered study cabins in Kowdiar, Thiruvananthapuram. Scroll to deconstruct the architecture of deep work.",
        productState: "Fully Assembled Monolithic Cabin",
      },
      {
        progressStart: 0.22,
        progressEnd: 0.48,
        headline: "Zero Peripheral Distraction.",
        tagline: "ACOUSTIC & VISUAL ISOLATION",
        description:
          "High acoustic privacy partitions eliminate peripheral distraction and absorb room ambience for UPSC, NEET, and CA aspirants.",
        productState: "Acoustic Shielding Partitions Separate Outward",
      },
      {
        progressStart: 0.48,
        progressEnd: 0.76,
        headline: "Concealed Power, Fiber & Zoned AC.",
        tagline: "INTERNAL TELEMETRY & 24/7 CLIMATE",
        description:
          "Heavy-gauge structural framing, anti-glare wood-grain surfaces, flicker-free 4000K lighting, and concealed utility conduits.",
        productState: "Product Fully Exploded Technical Engineering View",
      },
      {
        progressStart: 0.76,
        progressEnd: 1.0,
        headline: "Reserve Your Cabin on BookMyCabin.",
        tagline: "DAILY DISCIPLINE",
        description:
          "Lock in your personal seat, verify live availability through BookMyCabin, and take the decisive step in your preparation.",
        productState: "Product Smoothly Reassembles into Pristine Monolithic Form",
        showCta: true,
      },
    ] as StoryPhase[],
  },

  facilities: [
    {
      id: "cabins",
      title: "Individual Privacy Cabins",
      description: "Acoustically treated study cabins engineered to block peripheral vision and distractions.",
      iconName: "Shield",
      category: "study",
    },
    {
      id: "wifi",
      title: "High-Speed Dual-Band Wi-Fi",
      description: "Low-latency optical fiber connectivity engineered for mock test portals and video lectures.",
      iconName: "Wifi",
      category: "tech",
    },
    {
      id: "ac",
      title: "13-Hour Zoned Climate Control",
      description: "Continuous air conditioning from 8:30 AM to 9:30 PM covering peak morning, afternoon, and evening study shifts.",
      iconName: "AirVent",
      category: "comfort",
    },
    {
      id: "power",
      title: "Dedicated Power & LED Bar",
      description: "Individual surge-protected electrical sockets and flicker-free 4000K study illumination at every desk.",
      iconName: "Zap",
      category: "tech",
    },
    {
      id: "hours",
      title: "24-Hour Access",
      description: "Open 24 hours a day, 365 days a year, providing an uninterrupted sanctuary for early birds and night owls.",
      iconName: "Clock",
      category: "amenity",
    },
    {
      id: "security",
      title: "CCTV & Security",
      description: "High-definition 24/7 security recording and verified check-in for student safety and peace of mind.",
      iconName: "Lock",
      category: "comfort",
    },
    {
      id: "water",
      title: "RO Purified Water Station",
      description: "Multi-stage filtered drinking water and clean hygienic washrooms with exhaust ventilation.",
      iconName: "Droplets",
      category: "amenity",
    },
    {
      id: "discussion",
      title: "Dedicated Discussion Space",
      description: "Acoustically separated group discussion space allowing collaborative study without disturbing the silent cabin zone.",
      iconName: "Shield",
      category: "study",
    },
    {
      id: "dining",
      title: "Dedicated Dining Space",
      description: "Comfortable, ventilated dining and eating area completely separated from workstations.",
      iconName: "Droplets",
      category: "amenity",
    },
    {
      id: "prayer",
      title: "Dedicated Prayer Room",
      description: "Quiet, peaceful multi-faith prayer and meditation room completely separated from the cabin zone.",
      iconName: "Clock",
      category: "amenity",
    },
    {
      id: "backup",
      title: "100% Silent Power Backup",
      description: "Seamless silent inverter backup ensuring zero interruptions to lights, Wi-Fi, or charging.",
      iconName: "BatteryCharging",
      category: "tech",
    },
  ] as Facility[],

  franchise: {
    overview:
      "Resilience Reading Room partners with visionary educational entrepreneurs to establish world-class reading room spaces powered by BookMyCabin's proprietary management platform.",
    models: [
      {
        id: "standard",
        title: "Standard Flagship Model",
        seatRange: "80 – 150 Seats",
        spaceRequired: "2,000 – 3,500 sq.ft",
        tagline: "The proven flagship model in Kuravankonam.",
        description: "Proven layout balancing acoustic study zones, RO water station, and BookMyCabin digital sync.",
        features: ["Acoustic cabin blueprints", "BookMyCabin live mapping", "Digital WhatsApp billing", "Local SEO setup"],
      },
    ],
  },

  pricing: [
    {
      id: "flexi-4h",
      name: "4-Hour Flexi Pass",
      badge: "Flexible Shift",
      price: 800,
      cycle: "/ month",
      billingPeriod: "month",
      deposit: 0,
      totalBilling: "₹800 monthly",
      description: "Daily 4-hour AC study window during 8:30 AM to 9:30 PM for college students and coaching attendees.",
      features: [
        "4 hours daily cabin access (choose your shift)",
        "13-hour zoned AC (8:30 AM to 9:30 PM) & fiber Wi-Fi",
        "Purified drinking water & hygienic washroom access",
        "Direct seat reservation via BookMyCabin",
      ],
      ctaText: "Select 4-Hour Pass",
    },
    {
      id: "super-saver",
      name: "Quarterly Super Saver Plan",
      badge: "Most Popular · Save ₹600",
      price: 1600,
      cycle: "/ month",
      billingPeriod: "quarter (3 months)",
      deposit: 500,
      totalBilling: "Billed ₹4,800 for 3 months",
      description: "Premier choice for serious civil services, medical, and professional examination aspirants.",
      features: [
        "Full cabin access with 13 hours daily AC (8:30 AM – 9:30 PM)",
        "Priority seat choice on 129-seat live layout",
        "Lock your favorite cabin for 3 full months",
        "Dining area, purified RO water & two-wheeler parking",
        "Includes Student-Partner Program referral perks",
      ],
      ctaText: "Choose Super Saver",
      isPopular: true,
    },
    {
      id: "monthly-dedicated",
      name: "Monthly Dedicated Study Cabin",
      badge: "Full Access",
      price: 1800,
      cycle: "/ month",
      billingPeriod: "month",
      deposit: 500,
      totalBilling: "₹1,800 billed monthly",
      description: "Dedicated personal study cabin with 13-hour AC (8:30 AM – 9:30 PM) for Kowdiar & Kuravankonam aspirants.",
      features: [
        "Dedicated personal ergonomic cabin (never shared)",
        "13 hours daily continuous AC (8:30 AM – 9:30 PM)",
        "Individual surge-protected power socket & LED task light",
        "High-density matte acoustic isolation partitions",
        "Instant online renewal via BookMyCabin",
      ],
      ctaText: "Reserve Dedicated Cabin",
    },
    {
      id: "half-yearly",
      name: "Half-Yearly Plan",
      badge: "15 Days Free",
      price: 1650,
      cycle: "/ month",
      billingPeriod: "6 months",
      deposit: 500,
      totalBilling: "Billed ₹9,900 for 6 months (Includes 15 days free)",
      description: "Sustained prep cycle package for UPSC Prelims-to-Mains and NEET comprehensive preparation.",
      features: [
        "15 bonus study days included free",
        "Permanent desk lock across your 6-month preparation cycle",
        "Full AC during 8:30 AM – 9:30 PM, fiber Wi-Fi, and power backup",
        "Dedicated dining room & ventilated restroom access",
        "Eligible for Student-Partner Program benefits",
      ],
      ctaText: "Lock 6-Month Plan",
    },
    {
      id: "annual",
      name: "Annual Plan",
      badge: "1 Month Free",
      price: 1650,
      cycle: "/ month",
      billingPeriod: "year",
      deposit: 500,
      totalBilling: "Billed ₹19,800 for 12 months (Includes 1 month free)",
      description: "Maximum commitment package for long-term civil service, judiciary, and medical residency rank-seekers.",
      features: [
        "1 full month free (12 months study for the price of 11)",
        "Guaranteed permanent cabin ownership for 365 days",
        "Zero price increase guarantee across the complete year",
        "Highest priority on all facility upgrades & perks",
        "Seamless WhatsApp receipt & renewal ledger",
      ],
      ctaText: "Lock Annual Plan",
    },
  ] as PricingPlan[],

  competitorComparison: [
    {
      name: "Resilience Reading Room",
      pincode: "695003 (Kowdiar P.O.)",
      reviewVolume: "15 to 16 (4.8 ★)",
      acAndHours: "Open 24/7 · 13 Hours AC (8:30 AM to 9:30 PM)",
      primaryVulnerability: "High occupancy demand; direct online booking & waitlisting via BookMyCabin",
      isResilience: true,
    },
    {
      name: "Eduzone IAS",
      pincode: "695003",
      reviewVolume: "115 reviews",
      acAndHours: "5:00 AM to 10:00 PM (Closed nights)",
      primaryVulnerability: "Poor washrooms, weak AC cooling, no exhaust ventilation",
      isResilience: false,
    },
    {
      name: "Focuz Reading Point",
      pincode: "695004",
      reviewVolume: "135 to 138 reviews",
      acAndHours: "7:00 AM to 10:00 PM (Closed nights)",
      primaryVulnerability: "Dusty floors, stuffy desks, negative 1.0 trend",
      isResilience: false,
    },
    {
      name: "Arun's Reading Room",
      pincode: "695003",
      reviewVolume: "Web-driven listing",
      acAndHours: "Open 24/7 (AC only 9 AM to 6 PM · 9 hrs)",
      primaryVulnerability: "Only 9 hours AC vs Resilience's 13 continuous hours (8:30 AM to 9:30 PM)",
      isResilience: false,
    },
    {
      name: "Readienz Study Hub",
      pincode: "695033",
      reviewVolume: "127 reviews",
      acAndHours: "Standard daytime hours",
      primaryVulnerability: "No live seat map, located outside core Kowdiar belt",
      isResilience: false,
    },
  ] as CompetitorComparison[],

  faqs: [
    {
      question: "Is air conditioning available 24 hours a day at Resilience Reading Room?",
      answer:
        "Air conditioning is provided for 13 continuous hours daily, from 8:30 AM in the morning to 9:30 PM at night, keeping the study environment cool and climate-controlled throughout peak study shifts.",
      category: "facilities",
    },
    {
      question: "What are the monthly subscription tariffs and plans?",
      answer:
        "We offer transparent, flexible, and value-oriented plans: the 4-Hour Daily Flexi Pass at ₹800/month, the Quarterly Super Saver Plan at ₹1,600/month (billed ₹4,800 total), the Monthly Dedicated Study Cabin at ₹1,800/month, the Half-Yearly Plan at ₹1,650/month (₹9,900 for 6 months with 15 days free), and the Annual Plan at ₹19,800/year (1 month free).",
      category: "tariff",
    },
    {
      question: "How does the BookMyCabin live seat map and waitlist work?",
      answer:
        "Our entire 129-seat cabin layout is mapped in real-time on BookMyCabin. You can inspect seat orientation, AC vent proximity, and current desk availability directly online. If desks are currently occupied, you can join the online waitlist or message us directly on WhatsApp at +91 82812 08267 for upcoming vacancies.",
      category: "booking",
    },
    {
      question: "How close is Resilience Reading Room to Fortune IAS Academy and Kowdiar?",
      answer:
        "We are located on Market Road in Kuravankonam, just steps from Fortune IAS Academy and directly opposite Blinkit in Kowdiar P.O. (PIN: 695003). It is an ideal, zero-commute study hub for civil service and competitive exam aspirants across Kowdiar, Pattom, Plammoodu, and Kesavadasapuram.",
      category: "location",
    },
    {
      question: "What amenities and facilities are included with the study cabins?",
      answer:
        "Every seat includes flicker-free 4000K warm-white LED task lighting, individual surge-protected power sockets, high-speed dual-band optical fiber Wi-Fi, ergonomic chairs with acoustic privacy wings, clean hygienic washrooms equipped with exhaust ventilation, multi-stage RO purified drinking water, dedicated discussion space, dedicated dining space, dedicated prayer room (completely separated from the cabin zone), and two-wheeler parking on Market Road.",
      category: "facilities",
    },
    {
      question: "Are there separated discussion, dining, and prayer spaces?",
      answer:
        "Yes. Resilience Reading Room features a dedicated group discussion room, a separate dining and eating zone, and a peaceful prayer room—all completely separated from the silent cabin zone so the main study floor remains 100% distraction-free.",
      category: "facilities",
    },
    {
      question: "Can I take a trial study session before committing to a monthly plan?",
      answer:
        "Yes. Aspirants can book a 4-Hour Flexi Pass (₹800/month) or contact our reception desk at +91 82812 08267 to check current seat availability, inspect the facility, and choose their preferred cabin.",
      category: "booking",
    },
  ] as FAQItem[],
};
