import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { ArrowUpRight, Search, Map, CreditCard, KeyRound } from "lucide-react";

export const BookingSteps: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Open Resilience on BookMyCabin",
      description:
        "Access our official branch portal on BookMyCabin. Real-time availability is updated directly from the Kuravankonam room registry.",
    },
    {
      num: "02",
      icon: Map,
      title: "Select Your Preferred Seat",
      description:
        "View the interactive live 2D floorplan. Select your specific cabin number (e.g., Seat 45 or Seat 72) and choose your monthly or quarterly plan.",
    },
    {
      num: "03",
      icon: CreditCard,
      title: "Secure Digital Checkout",
      description:
        "Complete payment through BookMyCabin's encrypted payment gateway (UPI, Net Banking, Cards). Your caution deposit is automatically logged.",
    },
    {
      num: "04",
      icon: KeyRound,
      title: "Instant Digital Pass & Login",
      description:
        "Receive your confirmed digital cabin pass and instant WhatsApp receipt. Log in anytime at bookmycabin.in/login to manage your renewals.",
    },
  ];

  return (
    <section id="how-to-book" className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Frictionless Reservation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy">
            How Booking Works with BookMyCabin
          </h2>
          <p className="mt-4 text-base text-resilience-muted leading-relaxed">
            All seat allocation, live availability tracking, and student account authentication are
            powered transparently through BookMyCabin.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative bg-white p-8 rounded-2xl shadow-card border border-black/5 hover:border-resilience-gold/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-resilience-gold/30">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-resilience-navy/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-resilience-gold" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-resilience-navy">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-resilience-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/5 text-[11px] font-mono uppercase tracking-wider text-resilience-gold font-semibold">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Integration Trust Card */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-resilience-gold/30 shadow-editorial flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-resilience-navy/5 p-2 flex items-center justify-center border border-black/5">
              <Image
                src="/images/bookmycabin-logo.png"
                alt="BookMyCabin official technology partner logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-resilience-gold">
                  Official Technology Partner
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                  Live Sync
                </span>
              </div>
              <p className="font-serif text-base font-bold text-resilience-navy mt-0.5">
                Resilience Reading Room &bull; Kuravankonam Branch ID: {siteConfig.urls.bookMyCabin.roomId}
              </p>
              <p className="text-xs text-resilience-muted mt-0.5">
                View real-time seat status and reserve your cabin without manual paperwork.
              </p>
            </div>
          </div>

          <a
            href={siteConfig.urls.bookMyCabin.branchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-resilience-navy text-white text-xs uppercase tracking-[0.18em] font-bold rounded shadow-md hover:bg-resilience-gold hover:text-resilience-navy transition-all whitespace-nowrap"
          >
            <span>Open BookMyCabin Portal</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;

