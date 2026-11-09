"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Got Questions?
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-resilience-muted">
            Clear, honest answers regarding reservations, account access, facilities, and rules.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-black/5 overflow-hidden shadow-card transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-resilience-gold rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-resilience-navy">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-resilience-navy/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-resilience-gold text-resilience-navy" : "text-resilience-navy"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-resilience-muted leading-relaxed border-t border-black/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

