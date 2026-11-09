"use client";

import React, { useState } from "react";
import Image from "next/image";
import CabinScrollCanvas from "@/components/CabinScrollCanvas";
import TheSpaceGallery from "@/components/TheSpaceGallery";
import { MobileBookingBar } from "@/components/MobileBookingBar";
import { siteConfig } from "@/lib/site-config";
import {
  MapPin,
  Clock,
  Wifi,
  Wind,
  Car,
  Utensils,
  Droplets,
  Star,
  ArrowUpRight,
  MessageCircle,
  Users,
  Heart,
  CheckCircle2,
  ChevronDown,
  Printer,
  ShieldCheck,
  Building2,
  Check,
  X as CloseIcon,
} from "lucide-react";

const BOOKMYCABIN_URL = siteConfig.urls.bookMyCabin.branchUrl;
const WHATSAPP_URL = siteConfig.urls.whatsapp.chatUrl;
const DISPLAY_PHONE = siteConfig.location.displayPhone;

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Library", "LocalBusiness", "EducationalOrganization"],
        "@id": `${siteConfig.urls.siteUrl}/#organization`,
        name: siteConfig.brand.name,
        legalName: siteConfig.brand.legalName,
        alternateName: [
          "Resilience Reading Room Kuravankonam",
          "Resilience Study Space Kowdiar",
        ],
        url: siteConfig.urls.siteUrl,
        telephone: siteConfig.location.phone,
        email: siteConfig.location.email,
        priceRange: "₹800 - ₹1,800",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.streetAddress,
          addressLocality: siteConfig.location.locality,
          addressRegion: siteConfig.location.state,
          postalCode: siteConfig.location.postalCode, // 695003 strictly
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.coordinates.latitude,
          longitude: siteConfig.location.coordinates.longitude,
        },
        openingHours: "Mo-Su 00:00-23:59",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "16",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.urls.siteUrl}/#faq`,
        mainEntity: siteConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-white/20 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Sticky Navigation Bar */}
      <header className="fixed top-0 z-40 w-full border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src="/images/resilience-logo.png"
                alt="Resilience Reading Room Official Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="block text-sm font-semibold tracking-tight text-white/95">
                Resilience Reading Room
              </span>
              <span className="block text-[11px] text-white/60">
                Kuravankonam, Kowdiar · PIN: 695003
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20"
              title="Chat with Resilience Desk on WhatsApp"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Desk</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
            <a
              href={BOOKMYCABIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-black transition-colors hover:bg-neutral-200 shadow-sm"
            >
              <span>Book Seat</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 80-Frame Sticky Scrollytelling Sequence */}
      <CabinScrollCanvas />

      {/* Verified On-Premise Photography Gallery (6 Real Interior & Exterior Photos) */}
      <TheSpaceGallery />

      {/* Verified Google Business Profile & Live Seat Telemetry */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:grid-cols-12 lg:p-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-amber-300/90">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>4.8 ★ Google Business Profile · Kuravankonam, Kowdiar (PIN: 695003)</span>
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
              129 Cabins Mapped Live on BookMyCabin
            </h2>
            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/60 sm:text-base">
              Located at {siteConfig.location.fullAddressDisplay}. Inspect seat facing direction,
              AC vents, and real-time waitlist availability online before stepping in.
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                { icon: Wind, title: "13-Hour Zoned AC", sub: "8:30 AM – 9:30 PM Daily" },
                { icon: Users, title: "Discussion Space", sub: "Completely Separated" },
                { icon: Utensils, title: "Dining Space", sub: "Isolated Eating Area" },
                { icon: Heart, title: "Prayer Room", sub: "Quiet Meditation Hall" },
                { icon: Wifi, title: "High-Speed Wi-Fi", sub: "Low-Latency Optical Fiber" },
                { icon: Droplets, title: "Purified Water", sub: "RO Station & Restroom" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4"
                >
                  <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                  <p className="mt-2 text-xs sm:text-sm font-medium text-white/90">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-white/60">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-white/15 bg-[#0a0a0a] p-5 sm:p-6 lg:col-span-5">
            <div>
              <p className="text-xs font-medium text-emerald-400">
                BookMyCabin Live Seat Telemetry
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-semibold text-white/90">
                Live Capacity &amp; Booking Status
              </h3>

              <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
                  <p className="text-xl sm:text-2xl font-semibold text-white/90 tabular-nums">
                    {siteConfig.location.telemetry.totalSeats}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-white/60">Total Cabins</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
                  <p className="text-lg sm:text-xl font-semibold text-emerald-400 tabular-nums">13 Hrs</p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-white/60">AC (8:30–9:30)</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 sm:p-3">
                  <p className="text-lg sm:text-xl font-semibold text-sky-400">Live Map</p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-white/60">BookMyCabin</p>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-2.5 text-xs text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  {siteConfig.location.fullAddressDisplay}
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              <a
                href={BOOKMYCABIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 sm:py-3 text-xs font-semibold text-black transition-colors hover:bg-neutral-200 shadow-sm"
              >
                <span>Open Interactive 129-Seat Map</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
                <span>WhatsApp Desk: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Feeder Hubs & Exam Targeting (Semantic Local SEO) */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 border-t border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <Building2 className="h-3.5 w-3.5 text-emerald-400" />
            Strategic Academic Corridor · Pincode: 695003
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl">
            Serving Serious Aspirants Across Kuravankonam, Kowdiar &amp; Greater Trivandrum.
          </h2>
          <p className="mt-3 text-sm text-white/60 leading-relaxed sm:text-base">
            Positioned in the prime civil services and educational belt of Thiruvananthapuram, Resilience
            Reading Room provides zero-commute access for students from all major coaching institutions and
            residential feeder neighborhoods.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              hub: "Kowdiar & Kuravankonam",
              aspirants: "UPSC, IAS, KAS Candidates",
              details:
                "Located on Market Road, steps away from Fortune IAS Academy and opposite Blinkit. Walk straight from class to your permanent quiet study cabin without losing momentum.",
              tag: "Immediate Proximity",
            },
            {
              hub: "Pattom & Plammoodu",
              aspirants: "Civil Services & College Students",
              details:
                "Just 5 to 7 minutes via PMG / Kuravankonam Road. Avoid cramped reading rooms with weak ventilation and study in continuous 24/7 air conditioning with clean exhaust-equipped washrooms.",
              tag: "5-Min Transit",
            },
            {
              hub: "Kesavadasapuram & Ulloor",
              aspirants: "NEET & Medical Entrance Aspirants",
              details:
                "Direct bus and auto route to Kuravankonam. High-speed dual-band fiber Wi-Fi enables lag-free video lecture streaming and high-intensity mock test simulations.",
              tag: "Medical Stream Hub",
            },
            {
              hub: "PMG & Nanthankode",
              aspirants: "Kerala PSC, SSC & Banking Exams",
              details:
                "Quiet sanctuary for students undertaking Kerala Administrative Service and PSC coaching. Access the 4-Hour Flexi Pass (₹800/mo) or lock a dedicated desk.",
              tag: "State Exam Corridor",
            },
            {
              hub: "Ambalamukku & Muttada",
              aspirants: "CA, CS & Judicial Services",
              details:
                "Safe, well-lit residential access with dedicated on-site two-wheeler parking. Acoustic partition wings ensure absolute isolation during 12-hour preparation runs.",
              tag: "Silent Focus Zone",
            },
            {
              hub: "Vellayambalam & Sasthamangalam",
              aspirants: "Night-Owl Researchers & Remote Professionals",
              details:
                "True 24/7 access with active cooling through midnight and early mornings. While competitors turn off AC at 6:00 PM, Resilience keeps temperature locked at 23°C.",
              tag: "24-Hour Night Desk",
            },
          ].map((area) => (
            <div
              key={area.hub}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  {area.tag}
                </span>
                <span className="text-[11px] font-mono text-white/50">{siteConfig.location.postalCode}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white/90">{area.hub}</h3>
              <p className="mt-1 text-xs font-medium text-white/70">{area.aspirants}</p>
              <p className="mt-3 text-xs leading-relaxed text-white/60">{area.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Competitor Vulnerability & Operational Advantage Matrix */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Kuravankonam &amp; Kowdiar Facilities Comparison</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
            Why Serious Aspirants Choose Resilience
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed sm:text-base">
            A transparent overview of reading rooms in the Kowdiar, Kuravankonam, and Plammoodu corridor.
            Experience true 13-hour continuous AC (8:30 AM – 9:30 PM), hygienic exhaust-ventilated washrooms, and real-time digital booking.
          </p>
        </div>

        <div className="mt-8 sm:hidden text-[11px] text-white/50 flex items-center gap-1.5">
          <span>← Swipe horizontally to inspect comparison →</span>
        </div>

        <div className="mt-2 sm:mt-8 overflow-x-auto rounded-xl border border-white/15 bg-white/[0.02]">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
            <thead className="border-b border-white/10 bg-white/5 font-semibold text-white/90">
              <tr>
                <th className="p-3.5 sm:p-5">Facility Name</th>
                <th className="p-3.5 sm:p-5">Postal Code</th>
                <th className="p-3.5 sm:p-5">AC &amp; Operating Hours</th>
                <th className="p-3.5 sm:p-5">Live Seat Map</th>
                <th className="p-3.5 sm:p-5">Hygiene &amp; Ventilation</th>
                <th className="p-3.5 sm:p-5">Flexible Shifts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/70">
              <tr className="bg-emerald-950/20 font-medium text-white">
                <td className="p-3.5 sm:p-5 text-emerald-300 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Resilience Reading Room</span>
                </td>
                <td className="p-3.5 sm:p-5">695003 (Kowdiar P.O.)</td>
                <td className="p-3.5 sm:p-5 text-emerald-300">Open 24/7 · 13 Hours AC (8:30 AM – 9:30 PM)</td>
                <td className="p-3.5 sm:p-5 text-emerald-300">
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-4 w-4" /> BookMyCabin 129 Seats
                  </span>
                </td>
                <td className="p-3.5 sm:p-5">Spotless with exhaust ventilation</td>
                <td className="p-3.5 sm:p-5">₹800/mo 4-Hour Flexi Pass</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-white/90">Eduzone IAS</td>
                <td className="p-4 sm:p-5">695003</td>
                <td className="p-4 sm:p-5 text-amber-300">5:00 AM – 10:00 PM (Closed Nights)</td>
                <td className="p-4 sm:p-5 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-4 w-4" /> No live map
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-white/50">Reported weak AC &amp; poor washrooms</td>
                <td className="p-4 sm:p-5 text-white/50">Fixed monthly only</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-white/90">Focuz Reading Point</td>
                <td className="p-4 sm:p-5">695004</td>
                <td className="p-4 sm:p-5 text-amber-300">7:00 AM – 10:00 PM (Closed Nights)</td>
                <td className="p-4 sm:p-5 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-4 w-4" /> No live map
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-white/50">Stuffy desks, reported dust issues</td>
                <td className="p-4 sm:p-5 text-white/50">Standard slots</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-white/90">Arun&apos;s Reading Room</td>
                <td className="p-4 sm:p-5">695003</td>
                <td className="p-4 sm:p-5 text-red-400">Open 24/7 (AC only 9 AM to 6 PM · 9 hrs)</td>
                <td className="p-4 sm:p-5 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-4 w-4" /> No live map
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-white/50">Only 9 hrs AC vs Resilience 13 hrs</td>
                <td className="p-4 sm:p-5 text-white/50">Standard rates</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-5 text-white/90">Readienz Study Hub</td>
                <td className="p-4 sm:p-5">695033</td>
                <td className="p-4 sm:p-5 text-white/60">Standard day hours</td>
                <td className="p-4 sm:p-5 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-4 w-4" /> No live map
                  </span>
                </td>
                <td className="p-4 sm:p-5 text-white/50">Located outside core Kowdiar belt</td>
                <td className="p-4 sm:p-5 text-white/50">Fixed fee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Complete 5-Tier Pricing & Tariff Architecture */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Transparent Pricing · No Hidden Surcharges</span>
          </div>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
            Membership &amp; Tariff Plans
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60 sm:text-base">
            From flexible 4-hour daily shifts to annual rank-preparation locks. Reserve directly on BookMyCabin.
          </p>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-colors ${
                plan.isPopular
                  ? "border-emerald-400/40 bg-white/[0.05] shadow-lg"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block rounded-lg px-2.5 py-1 text-[11px] font-medium ${
                      plan.isPopular
                        ? "bg-emerald-400 text-black font-semibold"
                        : "border border-white/15 bg-white/10 text-white/90"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {plan.totalBilling && (
                    <span className="text-[11px] text-white/50 font-mono">
                      {plan.totalBilling}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white/90">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold text-white/95 tabular-nums">
                    ₹{plan.price}
                  </span>
                  <span className="text-xs text-white/60">{plan.cycle}</span>
                </div>
                <p className="mt-2 text-xs text-white/60 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs text-white/70">
                  {plan.features.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 sm:mt-8 space-y-2">
                <a
                  href={BOOKMYCABIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 sm:py-3 text-xs font-semibold transition-colors ${
                    plan.isPopular
                      ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                      : "border border-white/20 bg-white/10 text-white hover:bg-white/15"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Populated Owner Q&A (FAQ Accordion with Schema Markup) */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-8 border-t border-white/10">
        <div className="text-center">
          <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/90">
            Everything You Need to Know
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Direct owner answers on 13-hour AC cooling (8:30 AM – 9:30 PM), separated amenities, tariffs, and BookMyCabin.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-base font-medium text-white/90"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/50 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-4 pb-4 pt-3 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Luxury Minimalist Footer */}
      <footer className="border-t border-white/10 bg-[#020202] py-12 sm:py-14 px-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 shrink-0">
              <Image
                src="/images/resilience-logo.png"
                alt="Resilience Reading Room Official Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/90">
                Resilience Reading Room
              </p>
              <p className="text-[11px] text-white/50">
                TC 24/1816-4, Market Road, Kuravankonam, Kowdiar, Trivandrum · PIN: 695003
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/60">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>WhatsApp: {DISPLAY_PHONE}</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={siteConfig.urls.google.businessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Google Maps (695003)
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={BOOKMYCABIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 transition-colors hover:text-emerald-300 font-medium"
            >
              BookMyCabin Official Partner
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-[11px] text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Resilience Reading Room. Serving Kuravankonam, Kowdiar, Pattom, Plammoodu, and Greater Thiruvananthapuram.
          </p>
          <p>
            Online seat allocations and waitlist synced directly via BookMyCabin.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button (Desktop Only: hidden on mobile to avoid overlapping mobile action bar) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500 px-4 py-3 text-xs font-semibold text-black shadow-xl transition-colors hover:bg-emerald-400"
        title="Chat on WhatsApp"
        aria-label="Direct WhatsApp Chat with Resilience Desk"
      >
        <MessageCircle className="h-4 w-4 fill-black text-black" />
        <span>WhatsApp Desk</span>
      </a>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBookingBar />
    </main>
  );
}
