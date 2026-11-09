"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, MessageCircle, Navigation } from "lucide-react";

export const MobileBookingBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past the first 200px
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#111215]/95 backdrop-blur-md border-t border-white/10 pt-2.5 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-colors duration-200"
      role="region"
      aria-label="Mobile quick actions"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={siteConfig.urls.google.mapsDirectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-lg bg-white/10 text-white hover:bg-white/15 transition-colors shrink-0"
          title="Google Maps Directions"
          aria-label="Directions to Kuravankonam branch"
        >
          <Navigation className="w-4 h-4 text-emerald-400" />
        </a>

        <a
          href={siteConfig.urls.whatsapp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600/20 text-emerald-300 font-medium text-xs hover:bg-emerald-600/30 transition-colors border border-emerald-500/30"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp Desk</span>
        </a>

        <a
          href={siteConfig.urls.bookMyCabin.branchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors shadow-sm"
        >
          <span>Book a Seat</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default MobileBookingBar;

