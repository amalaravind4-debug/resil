"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, FranchiseTier } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { Check, Send, Sparkles, Building2, HelpCircle, CheckCircle2 } from "lucide-react";

export const FranchiseSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>("standard");
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    model: "Standard Model (80–150 Seats)",
    spaceSqft: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate clean form handling without fictional backend calls
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="franchise" className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Franchise & Institutional Partnerships
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy">
            Partner With Resilience Reading Room
          </h2>
          <p className="mt-4 text-base text-resilience-muted leading-relaxed">
            {siteConfig.franchise.overview} Deploy our tested acoustic spatial blueprints and
            turnkey BookMyCabin operations in your city.
          </p>
        </div>

        {/* 3 Franchise Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {siteConfig.franchise.models.map((model) => (
            <div
              key={model.id}
              onClick={() => setSelectedTier(model.id)}
              className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                selectedTier === model.id
                  ? "bg-resilience-navy text-white shadow-2xl border-2 border-resilience-gold"
                  : "bg-white text-resilience-navy shadow-card border border-black/5 hover:border-resilience-gold/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-[0.2em] font-bold ${
                      selectedTier === model.id ? "text-resilience-gold" : "text-resilience-gold-dark"
                    }`}
                  >
                    {model.seatRange}
                  </span>
                  <Building2
                    className={`w-5 h-5 ${
                      selectedTier === model.id ? "text-resilience-gold" : "text-resilience-navy/40"
                    }`}
                  />
                </div>

                <h3 className="font-serif text-2xl font-bold">{model.title}</h3>
                <p
                  className={`text-xs mt-1 font-medium ${
                    selectedTier === model.id ? "text-resilience-ivory/80" : "text-resilience-muted"
                  }`}
                >
                  Floor space requirement: {model.spaceRequired}
                </p>

                <p
                  className={`mt-4 text-xs sm:text-sm leading-relaxed ${
                    selectedTier === model.id ? "text-white/70" : "text-resilience-muted"
                  }`}
                >
                  {model.description}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10 space-y-3">
                  {model.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <Check
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          selectedTier === model.id ? "text-resilience-gold" : "text-resilience-navy"
                        }`}
                      />
                      <span className={selectedTier === model.id ? "text-white/80" : "text-resilience-navy/80"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  className={`w-full py-3 rounded-xl text-xs uppercase tracking-[0.16em] font-bold transition-all ${
                    selectedTier === model.id
                      ? "bg-resilience-gold text-resilience-navy hover:bg-resilience-gold-light"
                      : "bg-resilience-navy/5 text-resilience-navy hover:bg-resilience-navy hover:text-white"
                  }`}
                >
                  {selectedTier === model.id ? "Selected Model" : "Select This Model"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BookMyCabin SaaS Technology Showcase for Franchise Partners */}
        <div className="bg-resilience-navy text-white rounded-3xl p-8 sm:p-12 mb-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/images/bookmycabin-logo.png"
                  alt="BookMyCabin emblem"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="text-xs uppercase tracking-[0.24em] font-bold text-resilience-gold">
                  Powered by BookMyCabin Operations Engine
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Turnkey Reading Room SaaS Infrastructure Included
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-2xl leading-relaxed">
                Running a reading room is typically bogged down by chasing unpaid fees, misplaced
                keys, and manual registers. Resilience franchises leverage BookMyCabin to automate
                student seat booking, biometric access, monthly WhatsApp payment links, and vacancy
                analytics from day one.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-xs font-mono text-resilience-gold">
                <div>&bull; Interactive Seat Map</div>
                <div>&bull; Automated WhatsApp Receipts</div>
                <div>&bull; Deposit & Vacate Logs</div>
                <div>&bull; Biometric Device Integration</div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-resilience-gold/30 text-center space-y-2">
                <p className="font-serif text-xl font-bold text-white">Zero Custom Dev Needed</p>
                <p className="text-xs text-white/60">
                  Ready-to-deploy digital stack customized for your location.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Franchise Enquiry Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-editorial border border-black/5">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-resilience-gold">
              Confidential Business Enquiry
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-resilience-navy mt-1">
              Request Franchise Information Package
            </h3>
            <p className="text-xs text-resilience-muted mt-2">
              Submit your location interest. Our operations team will respond with floorplan guidelines
              and operational feasibility frameworks.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-emerald-900">
                Enquiry Successfully Received
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                Thank you for your interest in Resilience Reading Room. Our franchise team will review
                your details for {formState.city || "your location"} and connect with you shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs uppercase tracking-wider font-semibold text-emerald-800 underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.fullName}
                    onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                    placeholder="e.g. Rahul Menon"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Proposed City / Locality *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    placeholder="e.g. Kochi, Kozhikode, Kollam"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Preferred Franchise Model
                  </label>
                  <select
                    value={formState.model}
                    onChange={(e) => setFormState({ ...formState, model: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  >
                    <option>Express Model (50–80 Seats)</option>
                    <option>Standard Model (80–150 Seats)</option>
                    <option>Premium Multi-Floor (150+ Seats)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                    Available Commercial Space (Sq.ft)
                  </label>
                  <input
                    type="text"
                    value={formState.spaceSqft}
                    onChange={(e) => setFormState({ ...formState, spaceSqft: e.target.value })}
                    placeholder="e.g. 2,000 sq.ft (Own or Leased)"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-resilience-navy mb-1.5">
                  Message / Background
                </label>
                <textarea
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your background or the proposed building location..."
                  className="w-full px-4 py-3 rounded-xl border border-black/15 focus:outline-none focus:ring-2 focus:ring-resilience-gold text-sm bg-resilience-ivory/30"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-resilience-navy text-white text-xs uppercase tracking-[0.2em] font-bold rounded-xl hover:bg-resilience-gold hover:text-resilience-navy transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Transmitting Enquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Franchise Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-resilience-muted text-center leading-relaxed">
                Notice: All illustrations are operational estimates. No guaranteed financial returns
                are implied. Figures are reviewed case-by-case during formal due diligence.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;

