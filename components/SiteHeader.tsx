"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "@/lib/site-config";
import { Menu, X, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "The Cabin", href: "#cabin-experience" },
    { label: "The Space", href: "#the-space" },
    { label: "Facilities", href: "#facilities" },
    { label: "How to Book", href: "#how-to-book" },
    { label: "Plans", href: "#pricing" },
    { label: "Location", href: "#location" },
    { label: "Franchise", href: "#franchise" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#E6E6E4]/95 backdrop-blur-md py-3 shadow-sm border-b border-black/10"
            : "bg-[#E6E6E4]/85 backdrop-blur-md py-4 border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group transition-transform focus:outline-none focus:ring-2 focus:ring-resilience-gold focus:ring-offset-2 rounded"
              aria-label="Resilience Reading Room Home"
            >
              <BrandLogo size="md" variant="dark" showTagline={false} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.16em] text-resilience-navy/80 hover:text-resilience-gold transition-colors font-semibold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* WhatsApp Desk */}
              <a
                href={siteConfig.urls.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-semibold text-emerald-400 hover:text-emerald-300 px-3.5 py-2 transition-colors"
                title="Chat with Resilience reception desk on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>

              {/* Book a Seat CTA */}
              <a
                href={siteConfig.urls.bookMyCabin.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-bold bg-resilience-gold text-resilience-navy px-5 py-2.5 rounded shadow-sm hover:bg-resilience-gold-light hover:shadow-gold-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a Seat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden gap-3">
              <a
                href={siteConfig.urls.bookMyCabin.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider font-bold bg-resilience-gold text-resilience-navy px-3 py-1.5 rounded"
              >
                Book
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-resilience-navy hover:text-resilience-gold focus:outline-none focus:ring-2 focus:ring-resilience-gold"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-resilience-navy shadow-2xl p-6 flex flex-col justify-between border-l border-resilience-gold/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <BrandLogo size="sm" variant="light" showTagline={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.16em] text-white/85 hover:text-resilience-gold font-medium py-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.16em] text-white/85 hover:text-resilience-gold font-medium py-1 transition-colors"
                >
                  FAQs
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={siteConfig.urls.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-emerald-300 bg-emerald-500/15 hover:bg-emerald-500/25 py-3 rounded border border-emerald-500/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={siteConfig.urls.bookMyCabin.branchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-bold bg-resilience-gold text-resilience-navy py-3 rounded shadow-md hover:bg-resilience-gold-light transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Your Cabin</span>
              </a>

              <p className="text-[10px] text-white/50 text-center tracking-wider pt-2">
                Authentication & bookings secured by BookMyCabin
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;

