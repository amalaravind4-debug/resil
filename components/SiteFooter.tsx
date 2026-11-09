import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "@/lib/site-config";
import { MapPin, MessageCircle, Mail, Clock, ArrowUpRight } from "lucide-react";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-resilience-navy-dark text-white pt-20 pb-12 border-t border-resilience-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <BrandLogo size="lg" variant="light" showTagline={true} />
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              A thoughtfully designed, distraction-free study sanctuary engineered for aspirants
              preparing for UPSC, Kerala PSC, Medical PG, CA, and competitive examinations.
            </p>

            {/* BookMyCabin Integration Badge */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 inline-flex items-center gap-4 max-w-sm">
              <div className="relative w-10 h-10 shrink-0 bg-white/10 rounded-lg p-1 flex items-center justify-center">
                <Image
                  src="/images/bookmycabin-logo.png"
                  alt="BookMyCabin official technology emblem"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-white">Powered by BookMyCabin</p>
                <p className="text-white/60 text-[11px]">
                  All student authentication, seat reservations & payments are processed via BookMyCabin.
                </p>
              </div>
            </div>
          </div>

          {/* Student Journey Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold text-resilience-gold">
              Students
            </h3>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <a
                  href={siteConfig.urls.bookMyCabin.branchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-resilience-gold transition-colors flex items-center gap-1.5"
                >
                  <span>Book a Cabin</span>
                  <ArrowUpRight className="w-3 h-3 text-resilience-gold" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.urls.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3 h-3 text-emerald-400" />
                  <span>WhatsApp {siteConfig.location.displayPhone}</span>
                </a>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-resilience-gold transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="hover:text-resilience-gold transition-colors">
                  Facilities & Wi-Fi
                </Link>
              </li>
              <li>
                <Link href="#how-to-book" className="hover:text-resilience-gold transition-colors">
                  How Booking Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-resilience-gold transition-colors">
                  Student FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Franchise Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold text-resilience-gold">
              Franchise
            </h3>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li>
                <Link href="#franchise" className="hover:text-resilience-gold transition-colors">
                  Express Model (50–80)
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-resilience-gold transition-colors">
                  Standard Model (80–150)
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-resilience-gold transition-colors">
                  Premium Multi-Floor
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-resilience-gold transition-colors">
                  BookMyCabin Technology
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-resilience-gold transition-colors">
                  Franchise Enquiry Form
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold text-resilience-gold">
              Flagship Branch
            </h3>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-resilience-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.location.addressLine1}, {siteConfig.location.locality},{" "}
                  {siteConfig.location.city}, Kerala – {siteConfig.location.postalCode}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-resilience-gold shrink-0 mt-0.5" />
                <span>Open 24/7 · AC: 8:30 AM – 9:30 PM (13 Hrs Daily)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={siteConfig.urls.whatsapp.chatUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-emerald-300"
                >
                  WhatsApp: {siteConfig.location.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-resilience-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.location.email}`}
                  className="hover:text-resilience-gold transition-colors break-all"
                >
                  {siteConfig.location.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={siteConfig.urls.bookMyCabin.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              BookMyCabin Platform
            </a>
            <a
              href={siteConfig.urls.google.businessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Google Business Profile
            </a>
            <Link href="#location" className="hover:text-white transition-colors">
              Directions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

