"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { Compass, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Atmospheric Focus",
      description:
        "Every element of our architecture is calibrated to minimize sensory disruption, allowing you to sustain 8 to 12 hours of deep cognitive engagement.",
    },
    {
      icon: Clock,
      title: "Rigorous Consistency",
      description:
        "Success in demanding national examinations is rarely an accident of genius; it is the compounding result of showing up to the exact same chair every single day.",
    },
    {
      icon: Award,
      title: "A Community of Intent",
      description:
        "Study alongside peers preparing for Civil Services, State PSC, NEET-PG, Chartered Accountancy, and Judicial examinations. Collective quiet fuels individual resolve.",
    },
    {
      icon: Shield,
      title: "Zero Management Friction",
      description:
        "Powered by BookMyCabin cloud infrastructure for instant seat allocation, verified digital passes, and contactless daily check-in.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              The Resilience Philosophy
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy leading-tight"
          >
            More than a desk. <br />
            <span className="text-resilience-gold font-light italic">
              A space built around the discipline of pursuing a goal.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-resilience-muted leading-relaxed"
          >
            Preparing for India’s most competitive examinations requires an environment free from
            home interruptions, noisy libraries, and unstable internet. Resilience Reading Room was
            conceived not simply as physical real estate, but as a silent sanctuary where ambition is
            protected by deliberate spatial design.
          </motion.p>
        </div>

        {/* Visual & Pillar Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Authentic Cabin Image Exclusively from resil-animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#E6E6E4] p-2">
              <Image
                src="/resil-animation/ezgif-frame-001.jpg"
                alt="Resilience Reading Room authentic study cabin station"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-resilience-navy/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-[0.2em] text-resilience-gold font-bold">
                  Assembled Studio Geometry
                </span>
                <p className="text-sm font-medium">Kuravankonam Dedicated Study Station</p>
              </div>
            </div>

            {/* Decorative Quote Accent */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-resilience-navy text-white p-6 rounded-2xl shadow-xl max-w-xs border border-resilience-gold/30">
              <p className="font-serif italic text-sm text-resilience-ivory">
                &ldquo;Discipline is choosing between what you want now and what you want most.&rdquo;
              </p>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-resilience-gold font-bold mt-2">
                Resilience Motto
              </span>
            </div>
          </motion.div>

          {/* Four Pillar Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white p-7 rounded-2xl shadow-card border border-black/5 hover:border-resilience-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-resilience-navy/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-resilience-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-resilience-navy">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-resilience-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
