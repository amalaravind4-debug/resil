"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandEmblem } from "./BrandLogo";
import { siteConfig } from "@/lib/site-config";
import { ArrowDown, ArrowUpRight, ShieldCheck, MapPin, Sparkles, MessageCircle, Compass } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100svh] bg-resilience-navy text-white flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 select-none">
      {/* Subtle Atmospheric Lighting & Architectural Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(197, 160, 74, 0.18), transparent 70%), radial-gradient(circle at 80% 80%, rgba(21, 46, 87, 0.4), transparent 50%)",
        }}
      />

      {/* Subtle Geometric Background Architecture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C5A04A_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Top Banner Tag */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-resilience-gold/30 backdrop-blur-sm mb-6"
        >
          <BrandEmblem className="w-4 h-4" color="#C5A04A" />
          <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-resilience-gold">
            Premium Architectural Study Sanctuary
          </span>
          <span className="w-1 h-1 rounded-full bg-resilience-gold/60" />
          <span className="text-[11px] text-white/70 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-resilience-gold" />
            Kuravankonam, Trivandrum
          </span>
        </motion.div>

        {/* Main Editorial Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.06]"
            >
              RESILIENCE <br />
              <span className="text-resilience-ivory font-light italic">READING ROOM</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center gap-3 pt-1"
            >
              <div className="h-[2px] w-12 bg-resilience-gold" />
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] font-bold text-resilience-gold">
                {siteConfig.brand.tagline}
              </p>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-white/75 max-w-xl font-light leading-relaxed pt-2"
            >
              {siteConfig.brand.subtagline} High acoustic privacy cabins, uninterrupted high-speed
              fiber connectivity, and extended daily hours designed exclusively for serious aspirants.
            </motion.p>

            {/* Conversion CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href={siteConfig.urls.bookMyCabin.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-resilience-gold text-resilience-navy font-bold text-xs uppercase tracking-[0.2em] rounded shadow-lg hover:bg-resilience-gold-light hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-4 h-4 text-resilience-navy" />
                <span>Book a Seat</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="#cabin-experience"
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-[0.18em] rounded border border-white/20 transition-all backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-resilience-gold" />
                <span>Explore in 3D</span>
                <ArrowDown className="w-4 h-4 text-resilience-gold" />
              </Link>

              <a
                href={siteConfig.urls.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-emerald-400 hover:text-emerald-300 px-3 py-3 transition-colors"
                title="Direct WhatsApp chat with reception desk"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-resilience-gold" />
                <span>100% Reserved Dedicated Cabins</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open 6:00 AM – 11:00 PM Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Direct Live Sync via BookMyCabin</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Authentic Assembled Cabin Preview Stage (exclusively from resil-animation) */}
          <div className="lg:col-span-5 relative flex justify-center [perspective:1000px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-sm sm:max-w-md aspect-[9/16] rounded-3xl overflow-hidden gold-border-glow bg-[#E6E6E4] shadow-2xl p-2"
            >
              <Image
                src="/resil-animation/ezgif-frame-001.jpg"
                alt="Resilience Reading Room authentic assembled study cabin station in Kuravankonam"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-contain p-2"
              />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-resilience-navy/90 backdrop-blur-md p-3.5 rounded-xl border border-resilience-gold/30 text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-resilience-gold font-bold">
                    Single Video Sequence
                  </p>
                  <p className="text-xs text-white/90 font-medium">Scroll down for 3D exploded view</p>
                </div>
                <Link
                  href="#cabin-experience"
                  className="p-2 rounded-full bg-resilience-gold/20 text-resilience-gold hover:bg-resilience-gold hover:text-resilience-navy transition-colors"
                  aria-label="Scroll to exploded cabin experience"
                >
                  <ArrowDown className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex justify-between items-end text-xs text-white/40">
        <span className="tracking-[0.2em] uppercase text-[10px]">Architecture &bull; Acoustics &bull; Habit</span>
        <div className="flex items-center gap-2 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.24em] text-resilience-gold">
            Scroll for Apple-grade 3D cabin disassembly
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-resilience-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
