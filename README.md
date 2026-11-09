# Resilience Reading Room — Official Web Experience

> **FOCUS. DISCIPLINE. SUCCESS.**  
> A premium architectural study sanctuary in Kuravankonam, Thiruvananthapuram, Kerala.

---

## 1. Overview
This repository contains the standalone, high-performance website for **Resilience Reading Room**. The application is architected with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, featuring an Apple-grade scroll-linked exploded-view presentation of the authentic study cabin workstation.

### Key Capabilities
- **Awwwards-Caliber Scrollytelling (`CabinScrollExperience.tsx`):**
  - Continuous 80-frame scroll-synchronized HTML5 Canvas engine.
  - Zero-seam background matching (`#E6E6E4`) calibrated from edge pixel sampling.
  - Asynchronous hardware `Image.decode()` preloading queue with DPR capping at 2.
  - `ResizeObserver` responsive containment preserving aspect ratio without cropping.
  - Reversible scroll navigation and reduced-motion static fallback.
- **Strict BookMyCabin Transactional Integration:**
  - Branch Booking CTA linked directly to verified room ID `room-1784439666314`: `https://bookmycabin.in/rooms/room-1784439666314`.
  - Student authentication linked to official BookMyCabin login: `https://bookmycabin.in/login`.
  - Zero local credential storage, zero payment token duplication, and zero fake availability indicators.
- **Authentic Asset Integrity:**
  - Strictly limited to authentic assets provided in the project folder.
  - Generic BookMyCabin hero stock photographs are explicitly omitted.
- **Local & Technical SEO:**
  - JSON-LD `LocalBusiness` schema with verified geo-coordinates (`8.5231, 76.9536`) in Kuravankonam, Thiruvananthapuram.
  - Dynamic `sitemap.ts` and `robots.ts`.
  - Semantic crawlable HTML text outside the canvas pipeline.

---

## 2. Tech Stack & Architecture
- **Framework:** Next.js (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS with custom design tokens (`resilience-navy`, `resilience-ivory`, `resilience-gold`, `resilience-canvas-bg`)
- **Typography:** `next/font/google` (`Playfair Display` serif & `Manrope` sans-serif)
- **Animation & Canvas:** Framer Motion (`useScroll`, `useMotionValueEvent`), HTML5 Canvas 2D
- **Icons:** Lucide React

---

## 3. Getting Started

### Prerequisites
- Node.js `v20.x` or later (tested on Node `v24.18.0`)
- npm `v10.x` or later

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Compile and validate production bundle
npm run build

# Start production server
npm run start
```

---

## 4. Configuration (`lib/site-config.ts` & `.env.example`)
All public endpoints and branch metadata are centralized in `lib/site-config.ts`. Override any property using environment variables:
```bash
NEXT_PUBLIC_SITE_URL=https://resiliencereadingroom.com
NEXT_PUBLIC_BMC_BASE_URL=https://bookmycabin.in
NEXT_PUBLIC_BMC_BRANCH_URL=https://bookmycabin.in/rooms/room-1784439666314
NEXT_PUBLIC_BMC_LOGIN_URL=https://bookmycabin.in/login
NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL=https://maps.google.com/?q=Resilience+Reading+Room+Kuravankonam+Thiruvananthapuram
NEXT_PUBLIC_GOOGLE_MAPS_DIRECTION_URL=https://www.google.com/maps/dir/?api=1&destination=Resilience+Reading+Room+Kuravankonam+Thiruvananthapuram
NEXT_PUBLIC_PHONE=+919447123456
NEXT_PUBLIC_EMAIL=contact@resiliencereadingroom.com
```

---

## 5. Testing & Quality Checklist
- **Build Verification:** Next.js static generation builds clean with zero errors.
- **Type Safety:** Strict TypeScript compilation with no `any` leaks.
- **Accessibility:** Semantic HTML landmarks, contrast-compliant colors, screen-reader fallback, and `prefers-reduced-motion` detection.
- **Canvas Resilience:** DPR cap of 2, requestAnimationFrame throttling, and fallback static poster while assets load.
- **Booking Flow:** Both mobile and desktop CTAs route seamlessly to BookMyCabin.

