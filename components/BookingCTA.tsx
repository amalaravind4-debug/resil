import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { ArrowUpRight, Sparkles, MessageCircle, Navigation, ShieldCheck } from "lucide-react";

export const BookingCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-resilience-navy text-white relative overflow-hidden">
      {/* Radial Gold Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(197, 160, 74, 0.25), transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-resilience-gold/30 backdrop-blur-sm">
          <BrandEmblem className="w-4 h-4" color="#C5A04A" />
          <span className="text-xs uppercase tracking-[0.24em] font-bold text-resilience-gold">
            Reserve Your Study Sanctuary
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          FOCUS. DISCIPLINE. <br />
          <span className="text-resilience-gold font-light italic">SUCCESS.</span>
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 leading-relaxed">
          Your goals deserve more than makeshift arrangements and ambient chaos. Reserve your
          dedicated cabin today at Kuravankonam and establish an unbreakable daily routine.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={siteConfig.urls.bookMyCabin.branchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-resilience-gold text-resilience-navy font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg hover:bg-resilience-gold-light hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-resilience-navy" />
            <span>Book Your Cabin On BookMyCabin</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href={siteConfig.urls.whatsapp.chatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 hover:text-white font-medium text-xs uppercase tracking-[0.16em] rounded-xl border border-emerald-500/40 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Desk {siteConfig.location.displayPhone}</span>
          </a>

          <a
            href={siteConfig.urls.google.mapsDirectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white/80 font-medium text-xs uppercase tracking-[0.14em] rounded-xl border border-white/10 transition-all"
          >
            <Navigation className="w-4 h-4" />
            <span>Directions</span>
          </a>
        </div>

        {/* Reassurance Indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-resilience-gold" />
            <span>Direct Seat Map Selection</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-resilience-gold" />
            <span>100% Refundable ₹500 Caution Deposit</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-resilience-gold" />
            <span>Instant Digital WhatsApp Receipts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;

