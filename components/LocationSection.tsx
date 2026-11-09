import React from "react";
import { siteConfig } from "@/lib/site-config";
import { BrandEmblem } from "./BrandLogo";
import { MapPin, Clock, MessageCircle, Mail, Navigation, ExternalLink } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-resilience-navy text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <BrandEmblem className="w-5 h-5" color="#C5A04A" />
            <span className="text-xs uppercase tracking-[0.28em] font-bold text-resilience-gold">
              Visit Our Sanctuary
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Location & Directions
          </h2>
          <p className="mt-4 text-base text-white/70 leading-relaxed">
            Conveniently positioned in Kuravankonam, Thiruvananthapuram, within minutes of Kowdiar,
            Pattom, and central Trivandrum educational hubs.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information Card */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-resilience-gold block">
                  Branch Information
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {siteConfig.location.branchName}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  Landmark location serving students across Thiruvananthapuram.
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <MapPin className="w-5 h-5 text-resilience-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white/80">
                    Full Address
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                    {siteConfig.location.addressLine1}, {siteConfig.location.locality},{" "}
                    {siteConfig.location.city}, {siteConfig.location.state} –{" "}
                    {siteConfig.location.postalCode}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <Clock className="w-5 h-5 text-resilience-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white/80">
                    Operating Hours
                  </h4>
                  <p className="text-xs sm:text-sm text-white/70 mt-1">
                    {siteConfig.location.operatingHours.display}
                  </p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">
                    Open 365 Days a Year including Sundays & Holidays
                  </p>
                </div>
              </div>

              {/* WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/60 block">
                      Direct WhatsApp Desk
                    </span>
                    <a
                      href={siteConfig.urls.whatsapp.chatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Chat on WhatsApp ({siteConfig.location.displayPhone})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-resilience-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/60 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.location.email}`}
                      className="text-xs font-medium text-white hover:text-resilience-gold transition-colors break-all"
                    >
                      {siteConfig.location.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.urls.google.mapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-resilience-gold text-resilience-navy font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-resilience-gold-light transition-all shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={siteConfig.urls.google.businessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 text-white font-medium text-xs uppercase tracking-[0.14em] rounded-xl hover:bg-white/20 border border-white/15 transition-all"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Embed Stage */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl overflow-hidden min-h-[380px] lg:min-h-full relative shadow-xl">
            <iframe
              src={siteConfig.urls.google.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Resilience Reading Room Kuravankonam Location Map"
              className="w-full h-full filter saturate-[0.85] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

