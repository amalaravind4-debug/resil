import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import {
  Shield,
  Wifi,
  AirVent,
  Zap,
  Clock,
  Lock,
  Droplets,
  BatteryCharging,
  Sparkles,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Shield,
  Wifi,
  AirVent,
  Zap,
  Clock,
  Lock,
  Droplets,
  BatteryCharging,
};

export const FacilitiesSection: React.FC = () => {
  return (
    <section id="facilities" className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Verified Amenities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy">
            Engineered for Unbroken Concentration
          </h2>
          <p className="mt-4 text-base text-resilience-muted leading-relaxed">
            Every facility at our Kuravankonam location has been purposefully selected to remove
            friction from your preparation. No missing power plugs, no fluctuating internet, and no
            temperature discomfort.
          </p>
        </div>

        {/* 8-Feature Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.facilities.map((facility) => {
            const Icon = ICON_MAP[facility.iconName] || Sparkles;
            return (
              <div
                key={facility.id}
                className="group relative bg-white p-7 sm:p-8 rounded-2xl shadow-card border border-black/5 hover:border-resilience-gold/40 hover:shadow-editorial transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-resilience-navy/5 group-hover:bg-resilience-gold/15 flex items-center justify-center transition-colors mb-6">
                    <Icon className="w-6 h-6 text-resilience-gold group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-resilience-navy group-hover:text-resilience-gold-dark transition-colors">
                    {facility.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-resilience-muted leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-resilience-gold font-semibold">
                  <span>Verified Feature</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-resilience-gold" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

