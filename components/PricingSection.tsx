import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { Check, ArrowUpRight, Sparkles, Shield, Info } from "lucide-react";

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-resilience-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Transparent Membership Plans
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            An Investment in Unbroken Study Routine
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Direct pricing verified from our Kuravankonam registry. Zero hidden maintenance charges.
            Your dedicated seat belongs 100% to you.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {siteConfig.pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-white/[0.12] to-white/[0.04] border-2 border-resilience-gold shadow-gold-glow"
                  : "bg-white/5 border border-white/10 hover:border-resilience-gold/40"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 right-8 bg-resilience-gold text-resilience-navy text-[10px] uppercase font-bold tracking-[0.2em] px-3.5 py-1 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-resilience-gold font-bold">
                  Resilience Plan
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  {plan.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-white/65 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 pt-6 border-t border-white/10 flex items-baseline gap-2">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs text-white/60 tracking-wider">
                    / {plan.billingPeriod}
                  </span>
                </div>

                <div className="mt-2 text-xs text-resilience-gold font-medium flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>+ ₹{plan.deposit} Refundable Caution Deposit at joining</span>
                </div>

                {/* Feature Bullet List */}
                <ul className="mt-8 space-y-3.5 text-xs sm:text-sm text-white/80">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="rounded-full p-0.5 bg-resilience-gold/20 text-resilience-gold mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA button */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <a
                  href={siteConfig.urls.bookMyCabin.branchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-md ${
                    plan.isPopular
                      ? "bg-resilience-gold text-resilience-navy hover:bg-resilience-gold-light hover:shadow-gold-glow"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-[10px] text-white/40 text-center mt-2.5">
                  Processed securely via BookMyCabin branch checkout
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deposit & Policy Clarification Notice */}
        <div className="mt-12 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 text-xs text-white/70 flex items-start gap-3.5">
          <Info className="w-5 h-5 text-resilience-gold shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Caution Deposit Integrity:</strong> The ₹500 caution
            deposit is held securely in student account records on BookMyCabin. When you complete your
            preparation and provide regular vacate notice, your deposit is refunded directly via UPI
            or cash as documented in our monthly compliance reports.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

