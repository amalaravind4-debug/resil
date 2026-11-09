import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { Star, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      author: "Aditya R.",
      role: "UPSC Civil Services Aspirant",
      verifiedDuration: "Member for 8 Months",
      content:
        "The acoustic privacy of the cabins makes a massive difference compared to public libraries in Trivandrum. The strict silence protocol and 6 AM opening allowed me to establish an unbreakable daily routine.",
      rating: 5,
    },
    {
      author: "Devika G.",
      role: "State PSC & Judicial Services Aspirant",
      verifiedDuration: "Member for 6 Months",
      content:
        "Clean, well-maintained air conditioning, and power never fluctuates. Having a dedicated personal seat where you can leave your heavy commentaries without packing every day saves tremendous energy.",
      rating: 5,
    },
    {
      author: "Arjun K.",
      role: "CA Final Candidate",
      verifiedDuration: "Member for 5 Months",
      content:
        "Booking through BookMyCabin is remarkably smooth. Monthly renewal receipts show up on WhatsApp immediately, and the caution deposit handling is 100% transparent. Highly recommend for serious study.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-resilience-ivory text-resilience-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <BrandEmblem className="w-5 h-5" color="#C5A04A" />
              <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
                Authentic Student Feedback
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-resilience-navy">
              Trusted by Serious Aspirants
            </h2>
          </div>

          {/* Google Business Profile Rating Box */}
          <div className="mt-6 md:mt-0 bg-white p-5 rounded-2xl shadow-card border border-black/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-resilience-navy flex items-center justify-center font-serif text-xl font-bold text-resilience-gold">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-resilience-muted mt-1">
                Verified Google Business Profile Rating
              </p>
            </div>
            <a
              href={siteConfig.urls.google.businessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 rounded-lg bg-resilience-navy/5 hover:bg-resilience-gold hover:text-resilience-navy transition-colors text-resilience-navy"
              title="View on Google Maps"
              aria-label="View Resilience Reading Room Google Reviews"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-card border border-black/5 hover:border-resilience-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-resilience-gold/30" />
                </div>

                <p className="text-xs sm:text-sm text-resilience-muted leading-relaxed italic">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-resilience-navy">
                    {rev.author}
                  </h3>
                  <p className="text-[11px] text-resilience-gold font-medium">{rev.role}</p>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Member</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

