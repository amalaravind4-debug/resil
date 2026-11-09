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

      {/* Quiet, Human-Designed Navigation Header */}
      <header className="fixed top-0 z-40 w-full border-b border-white/[0.08] bg-[#090a0d]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 shrink-0">
              <Image
                src="/images/resilience-logo.png"
                alt="Resilience Reading Room Official Emblem"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="block text-xs sm:text-sm font-semibold tracking-tight text-white/95 group-hover:text-white transition-colors whitespace-nowrap">
                Resilience Reading Room
              </span>
              <span className="block text-[10px] sm:text-[11px] text-white/50 whitespace-nowrap">
                Kuravankonam · PIN: 695003
              </span>
            </div>
          </a>

          {/* Quiet Section Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-white/60">
            <a href="#gallery" className="hover:text-white transition-colors">The Space</a>
            <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
            <a href="#corridor" className="hover:text-white transition-colors">Corridor</a>
            <a href="#comparison" className="hover:text-white transition-colors">Compare</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tariffs</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors px-2 py-1"
              title="Chat with Resilience Desk on WhatsApp"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>WhatsApp Desk</span>
            </a>
            <a
              href={BOOKMYCABIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-neutral-200 shadow-sm"
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

      {/* Architectural Amenities & Live Capacity Ledger */}
      <section id="amenities" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/[0.08]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left: Quiet, Dignified Facility Register (Zero AI Tile Slop) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                On-Premise Specification
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95">
                The architecture of silent study
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-white/60 leading-relaxed max-w-2xl">
                129 private study carrels with strict acoustic zoning at Market Road, Kuravankonam.
                Every amenity is engineered to eliminate interruption during 12-hour preparation runs.
              </p>
            </div>

            {/* Structured Amenity List with Clean Hairline Divides */}
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08] pt-1">
              {[
                {
                  icon: Wind,
                  title: "13-Hour Zoned Air Conditioning",
                  desc: "Active daily from 8:30 AM to 9:30 PM across all study cabins. Maintains stable 23°C airflow without draft turbulence.",
                },
                {
                  icon: Users,
                  title: "Dedicated Discussion Space",
                  desc: "Completely partitioned outside the silent study floor for peer group reviews, syllabus breakdown, and mock interviews.",
                },
                {
                  icon: Utensils,
                  title: "Dedicated Dining Room & Break Pantry",
                  desc: "Separate designated dining area with dining tables, away from study carrels to preserve quiet and cleanliness.",
                },
                {
                  icon: Heart,
                  title: "Dedicated Quiet Prayer Room",
                  desc: "Calm, clean, partitioned space reserved for daily prayer, meditation, and quiet reflection.",
                },
                {
                  icon: Wifi,
                  title: "Dual-Band Optical Fiber & Surge Sockets",
                  desc: "High-speed low-latency Wi-Fi with individual surge-protected electrical sockets at every single cabin desk.",
                },
                {
                  icon: Droplets,
                  title: "RO Filtered Water & Exhaust Washrooms",
                  desc: "Multi-stage commercial RO purified water station, plus sanitized tiled washrooms with high-capacity exhaust ventilation.",
                },
              ].map((item) => (
                <div key={item.title} className="py-4 sm:py-5 flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white/90">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Operational Status Ledger (Quiet, Authoritative, Non-Template) */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0c0d10] p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400">Live Status</span>
                <span className="text-[11px] text-white/50 font-mono">BookMyCabin Sync</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white/95">
                Facility &amp; Booking Status
              </h3>
            </div>

            {/* Clean Spec Rows */}
            <div className="space-y-3.5 text-xs border-y border-white/[0.08] py-5">
              <div className="flex justify-between items-center">
                <span className="text-white/50">Total Cabins</span>
                <span className="font-mono text-sm text-white/95 font-semibold">129 Reserved Desks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Air Conditioning</span>
                <span className="font-mono text-white/95">8:30 AM – 9:30 PM (13 Hrs Daily)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Facility Access</span>
                <span className="font-mono text-emerald-400 font-medium">Open 24/7 · 365 Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Separated Zones</span>
                <span className="text-white/80">Discussion · Dining · Prayer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50">Postal Jurisdiction</span>
                <span className="font-mono text-white/80">Kowdiar P.O. · 695003</span>
              </div>
              <div className="flex justify-between items-start pt-1">
                <span className="text-white/50 shrink-0">Exact Address</span>
                <span className="text-right text-[11px] text-white/70 max-w-[240px] leading-relaxed">
                  TC 24/1816-4, Market Road, Kuravankonam, Kowdiar P.O.
                </span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div className="space-y-2.5 pt-2">
              <a
                href={BOOKMYCABIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-xs font-semibold text-black transition-colors hover:bg-neutral-200 shadow-sm"
              >
                <span>View Live 129-Seat Layout on BookMyCabin</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp Desk: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Academic Corridor & Transit Directory (Zero Generic Bento Cards) */}
      <section id="corridor" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/[0.08]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Context */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Locality &amp; Transit
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/95">
              Strategic feeder corridor
            </h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Situated in the core civil services and higher education belt of Thiruvananthapuram.
              Located directly on Market Road, steps from Fortune IAS Academy and opposite Blinkit in Kowdiar P.O. (PIN: 695003).
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.urls.google.mapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/80 hover:text-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>Get directions on Google Maps ↗</span>
              </a>
            </div>
          </div>

          {/* Right: Human-Authored Locality Transit Ledger */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {[
              {
                hub: "Kowdiar & Kuravankonam",
                transit: "Immediate · 300m Walk",
                aspirants: "UPSC Civil Services, KAS & IFS Candidates",
                detail: "Steps away from Fortune IAS Academy on Market Road. Direct walk between classroom lectures and your permanent study desk.",
              },
              {
                hub: "Pattom & Plammoodu",
                transit: "5 min transit",
                aspirants: "Civil Services & College Aspirants",
                detail: "Direct connection via Kuravankonam Road. Avoid cramped reading rooms and access true 13-hour continuous AC with exhaust ventilation.",
              },
              {
                hub: "Kesavadasapuram & Ulloor",
                transit: "7 min transit",
                aspirants: "NEET, Medical PG & Science Streams",
                detail: "Accessible via direct bus and auto routes. High-speed dual-band fiber supports continuous high-res video lecture streams.",
              },
              {
                hub: "PMG, Law College & Nanthankode",
                transit: "6 min transit",
                aspirants: "Kerala PSC, SSC & Judiciary Exams",
                detail: "Monastic quiet for intensive mock papers and syllabus memorization. Flexible 4-hour passes or full monthly ownership.",
              },
              {
                hub: "Ambalamukku & Muttada",
                transit: "4 min transit",
                aspirants: "CA, CS, CMA & Accounting Candidates",
                detail: "Safe residential corridor with dedicated two-wheeler parking. Tall acoustic partition wings shield all peripheral sightlines.",
              },
              {
                hub: "Vellayambalam & Sasthamangalam",
                transit: "8 min transit",
                aspirants: "Night-Shift Researchers & Competitive Scholars",
                detail: "Open 24/7 with AC through evening peak hours (8:30 AM to 9:30 PM). 129 individual lockable cabins.",
              },
            ].map((loc) => (
              <div key={loc.hub} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
                <div className="sm:max-w-md">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-white/90">{loc.hub}</h3>
                    <span className="text-[11px] font-mono text-emerald-400 sm:hidden">({loc.transit})</span>
                  </div>
                  <p className="text-xs text-white/50 mt-0.5">{loc.aspirants}</p>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">{loc.detail}</p>
                </div>
                <span className="hidden sm:inline-block text-xs font-mono text-emerald-400/90 whitespace-nowrap shrink-0">
                  {loc.transit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Vulnerability & Operational Advantage Matrix */}
      <section id="comparison" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/[0.08]">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Corridor Benchmark
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white/95">
            Why serious aspirants choose Resilience
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-white/60 leading-relaxed">
            A transparent overview of reading rooms in the Kowdiar, Kuravankonam, and Plammoodu corridor.
            Experience true 13-hour continuous AC (8:30 AM – 9:30 PM), hygienic exhaust-ventilated washrooms, and real-time digital booking.
          </p>
        </div>

        <div className="mt-6 sm:hidden text-[11px] text-white/50 flex items-center gap-1.5 font-mono">
          <span>← Swipe horizontally to inspect benchmark →</span>
        </div>

        <div className="mt-4 sm:mt-8 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#0c0d10]">
          <table className="w-full min-w-[640px] text-left text-xs sm:text-sm">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] font-medium text-white/80">
              <tr>
                <th className="p-3.5 sm:p-4">Facility Name</th>
                <th className="p-3.5 sm:p-4">Postal Code</th>
                <th className="p-3.5 sm:p-4">AC &amp; Operating Hours</th>
                <th className="p-3.5 sm:p-4">Live Seat Map</th>
                <th className="p-3.5 sm:p-4">Hygiene &amp; Ventilation</th>
                <th className="p-3.5 sm:p-4">Flexible Shifts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.08] text-white/70">
              <tr className="bg-white/[0.03] font-medium text-white">
                <td className="p-3.5 sm:p-4 text-emerald-400 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>Resilience Reading Room</span>
                </td>
                <td className="p-3.5 sm:p-4 font-mono">695003 (Kowdiar P.O.)</td>
                <td className="p-3.5 sm:p-4 text-emerald-400">Open 24/7 · 13h AC (8:30 AM – 9:30 PM)</td>
                <td className="p-3.5 sm:p-4 text-emerald-400">
                  <span className="inline-flex items-center gap-1">
                    <Check className="h-3.5 w-3.5" /> BookMyCabin 129 Seats
                  </span>
                </td>
                <td className="p-3.5 sm:p-4">Spotless with exhaust ventilation</td>
                <td className="p-3.5 sm:p-4 font-mono">₹800/mo 4-Hour Shift Pass</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 text-white/90">Eduzone IAS</td>
                <td className="p-3.5 sm:p-4 font-mono">695003</td>
                <td className="p-3.5 sm:p-4 text-amber-400">5:00 AM – 10:00 PM (Closed Nights)</td>
                <td className="p-3.5 sm:p-4 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-3.5 w-3.5" /> No live map
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-white/50">Reported weak AC &amp; poor washrooms</td>
                <td className="p-3.5 sm:p-4 text-white/50">Fixed monthly only</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 text-white/90">Focuz Reading Point</td>
                <td className="p-3.5 sm:p-4 font-mono">695004</td>
                <td className="p-3.5 sm:p-4 text-amber-400">7:00 AM – 10:00 PM (Closed Nights)</td>
                <td className="p-3.5 sm:p-4 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-3.5 w-3.5" /> No live map
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-white/50">Stuffy desks, reported dust issues</td>
                <td className="p-3.5 sm:p-4 text-white/50">Standard slots</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 text-white/90">Arun&apos;s Reading Room</td>
                <td className="p-3.5 sm:p-4 font-mono">695003</td>
                <td className="p-3.5 sm:p-4 text-red-400">Open 24/7 (AC only 9 AM to 6 PM · 9 hrs)</td>
                <td className="p-3.5 sm:p-4 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-3.5 w-3.5" /> No live map
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-white/50">Only 9 hrs AC vs Resilience 13 hrs</td>
                <td className="p-3.5 sm:p-4 text-white/50">Standard rates</td>
              </tr>
              <tr>
                <td className="p-3.5 sm:p-4 text-white/90">Readienz Study Hub</td>
                <td className="p-3.5 sm:p-4 font-mono">695033</td>
                <td className="p-3.5 sm:p-4 text-white/60">Standard day hours</td>
                <td className="p-3.5 sm:p-4 text-red-400">
                  <span className="inline-flex items-center gap-1">
                    <CloseIcon className="h-3.5 w-3.5" /> No live map
                  </span>
                </td>
                <td className="p-3.5 sm:p-4 text-white/50">Located outside core Kowdiar belt</td>
                <td className="p-3.5 sm:p-4 text-white/50">Fixed fee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Structured Master Tariff Schedule (Clean 4-Column Balanced Grid + Horizontal Flex Pass) */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20 sm:px-8 border-t border-white/[0.08]">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Membership Tariffs
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95">
            Transparent study tariffs
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-white/60 max-w-2xl mx-auto leading-relaxed">
            Dedicated personal study cabins with continuous 13-hour AC (8:30 AM – 9:30 PM), 24/7 access, and real-time BookMyCabin reservation. Zero hidden utility or maintenance surcharges.
          </p>
        </div>

        {/* 4 Dedicated Study Plans in a Balanced 4-Column Architectural Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: "monthly-dedicated",
              name: "Monthly Pass",
              badge: "30-Day Cycle",
              price: "1,800",
              cycle: "/ month",
              billing: "₹1,800 billed monthly",
              isPopular: false,
              description: "Dedicated personal study cabin with full 13-hour continuous AC for civil services and professional aspirants.",
              features: [
                "Dedicated personal cabin (never shared)",
                "13 hours daily AC (8:30 AM – 9:30 PM)",
                "Individual surge socket & LED light",
                "High-density matte acoustic wings",
                "Instant online renewal on BookMyCabin",
              ],
              ctaText: "Reserve Dedicated Cabin",
            },
            {
              id: "super-saver",
              name: "Quarterly Super Saver",
              badge: "Recommended · Save ₹600",
              price: "1,600",
              cycle: "/ month",
              billing: "₹4,800 billed quarterly (3 months)",
              isPopular: true,
              description: "The preferred choice for UPSC, NEET, and CA students committed to a full 90-day preparation sprint.",
              features: [
                "Full cabin access with 13h daily AC",
                "Priority seat choice on 129 live layout",
                "Lock your favorite cabin for 3 months",
                "Dining room, prayer room & RO water",
                "Includes Student-Partner perks",
              ],
              ctaText: "Lock Quarterly Plan",
            },
            {
              id: "half-yearly",
              name: "Half-Yearly Pass",
              badge: "15 Days Free",
              price: "1,650",
              cycle: "/ month",
              billing: "₹9,900 billed for 6 months",
              isPopular: false,
              description: "Sustained preparation package designed for the complete UPSC Prelims-to-Mains examination cycle.",
              features: [
                "15 bonus study days included free",
                "Permanent desk lock across 6 months",
                "Full AC (8:30 AM – 9:30 PM) & Wi-Fi",
                "Dedicated dining & ventilated washroom",
                "Student-Partner program benefits",
              ],
              ctaText: "Lock 6-Month Plan",
            },
            {
              id: "annual",
              name: "Annual Plan",
              badge: "1 Month Free",
              price: "1,650",
              cycle: "/ month",
              billing: "₹19,800 billed for 12 months",
              isPopular: false,
              description: "Maximum commitment package for long-term civil services, judiciary, and medical residency rank-seekers.",
              features: [
                "1 full month free (12 months for 11)",
                "Guaranteed permanent cabin for 365 days",
                "Zero price hike guarantee for full year",
                "Highest priority on facility upgrades",
                "Seamless WhatsApp receipt & ledger",
              ],
              ctaText: "Lock Annual Plan",
            },
          ].map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col justify-between rounded-xl border p-5 sm:p-6 transition-colors ${
                plan.isPopular
                  ? "border-emerald-500/40 bg-[#0c0d10] ring-1 ring-emerald-500/20"
                  : "border-white/[0.08] bg-[#0c0d10] hover:border-white/[0.16]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400">
                    {plan.badge}
                  </span>
                  {plan.isPopular && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  )}
                </div>

                <h3 className="mt-3 text-base font-semibold text-white/95">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-mono font-semibold text-white/95 tabular-nums">
                    ₹{plan.price}
                  </span>
                  <span className="text-xs text-white/50">{plan.cycle}</span>
                </div>
                <p className="mt-1 text-[11px] font-mono text-white/40">
                  {plan.billing}
                </p>
                <p className="mt-2.5 text-xs text-white/60 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/[0.08] pt-4 text-xs text-white/70">
                  {plan.features.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5 text-xs">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <a
                  href={BOOKMYCABIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-semibold transition-colors ${
                    plan.isPopular
                      ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                      : "border border-white/[0.12] bg-white/[0.04] text-white/90 hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 5th Plan: Horizontal Flexible Shift Pass Strip */}
        <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#0c0d10] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                05 / Flexible Timing Option
              </span>
              <span className="text-[11px] font-mono text-white/40">
                · Shift Choice
              </span>
            </div>
            <h3 className="mt-1 text-base sm:text-lg font-semibold text-white/95">
              4-Hour Daily Shift Pass · <span className="font-mono text-emerald-400">₹800</span> / month
            </h3>
            <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
              Designed for college students and working professionals. Select your fixed 4-hour daily study shift (Morning 6:00 AM – 10:00 AM, Afternoon 2:00 PM – 6:00 PM, or Evening 6:00 PM – 10:00 PM). Includes continuous AC during shift hours, fiber Wi-Fi, and RO drinking water.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={BOOKMYCABIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-xs font-medium text-white/90 hover:bg-white/[0.08] transition-colors"
            >
              <span>Select 4-Hour Shift Pass</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pre-Populated Owner Q&A (Clean Architectural FAQ Accordion) */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-8 border-t border-white/[0.08]">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            Owner Specifications &amp; FAQ
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-white/95">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/60">
            Direct owner answers on 13-hour AC cooling (8:30 AM – 9:30 PM), separated amenities, tariffs, and BookMyCabin digital booking.
          </p>
        </div>

        <div className="mt-8 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between py-3.5 text-left text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-4 pt-1 text-xs text-white/60 leading-relaxed pr-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Minimalist Architectural Footer */}
      <footer className="border-t border-white/[0.08] bg-[#060709] py-12 px-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 shrink-0">
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
                TC 24/1816-4, Market Road, Kuravankonam, Kowdiar P.O. · PIN: 695003
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
              <span>WhatsApp Desk: {DISPLAY_PHONE}</span>
            </a>
            <span className="text-white/20">/</span>
            <a
              href={siteConfig.urls.google.businessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Google Maps (695003)
            </a>
            <span className="text-white/20">/</span>
            <a
              href={BOOKMYCABIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors hover:text-white"
            >
              BookMyCabin Official Partner
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center text-[11px] text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Resilience Reading Room. Serving Kuravankonam, Kowdiar, Pattom, Plammoodu, and Greater Thiruvananthapuram.
          </p>
          <p>
            Online seat allocations and waitlist synced directly via BookMyCabin.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBookingBar />
    </main>
  );
}
