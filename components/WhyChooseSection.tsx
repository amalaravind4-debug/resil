import React from "react";
import { BrandEmblem } from "./BrandLogo";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export const WhyChooseSection: React.FC = () => {
  const comparisons = [
    {
      factor: "Spatial Boundary & Habit",
      typical: "Home / Cafes: Constant household interruptions, chores, and informal posture drift.",
      resilience: "Dedicated reserved cabin. Stepping inside triggers instant psychological study mode.",
    },
    {
      factor: "Noise & Acoustic Privacy",
      typical: "Public Libraries: Whispering, footsteps, uncontrolled chatter, and shared tables.",
      resilience: "Strict zero-talking quiet zone protocol with acoustic side partitions.",
    },
    {
      factor: "Power & Wi-Fi Reliability",
      typical: "Public Spaces: Hunt for vacant sockets, throttling public Wi-Fi, and power cuts.",
      resilience: "Dual surge-protected sockets at every desk, optical fiber, and 100% silent power backup.",
    },
    {
      factor: "Seat Certainty",
      typical: "Conventional Rooms: First-come rush, fighting for seats, having to pack up bags for lunch.",
      resilience: "100% Reserved Fixed Seat. Your books, laptop, and notes remain securely right at your station.",
    },
    {
      factor: "Booking & Account Transparency",
      typical: "Informal Rooms: Cash receipts on scraps of paper, lost deposits, unreturned calls.",
      resilience: "BookMyCabin cloud management with automated WhatsApp receipts and clear deposit refund logs.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-resilience-navy text-white relative overflow-hidden">
      {/* Subtle Architectural Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(197, 160, 74, 0.15), transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Why Choose Resilience
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Designed for Aspirants Who Cannot Afford Distraction
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
            When preparing for an examination that decides your next decade, your study environment
            is your most critical competitive advantage.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-resilience-gold/40 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Feature Title */}
              <div className="md:col-span-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-resilience-gold block">
                  Criterion 0{index + 1}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">{item.factor}</h3>
              </div>

              {/* Typical Environment */}
              <div className="md:col-span-4 bg-black/20 p-4 rounded-xl border border-red-500/20 text-white/70 text-xs sm:text-sm flex items-start gap-3">
                <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{item.typical}</span>
              </div>

              {/* Resilience Advantage */}
              <div className="md:col-span-5 bg-resilience-gold/10 p-4 rounded-xl border border-resilience-gold/40 text-resilience-ivory text-xs sm:text-sm flex items-start gap-3 font-medium">
                <Check className="w-4 h-4 text-resilience-gold shrink-0 mt-0.5" />
                <span>{item.resilience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

