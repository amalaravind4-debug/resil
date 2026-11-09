"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Eye, Sparkles, MapPin, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "Study Hall" | "Cabins" | "Amenities" | "Location";
  badge: string;
  description: string;
  specs: string[];
}

export const REAL_INTERIOR_PHOTOS: GalleryItem[] = [
  {
    id: "study-hall-aisle",
    src: "/gallery/resilience-study-hall-aisle.jpg",
    title: "Central Study Hall & Aisle",
    category: "Study Hall",
    badge: "129 Desks · Kuravankonam Flagship",
    description:
      "Symmetrical layout of individual study cabins (numbered 12 to 33) featuring high acoustic isolation partitions, ergonomic mesh task chairs, ceiling fans, continuous split AC cooling, and glare-free overhead LED lighting.",
    specs: ["129 Total Cabins", "Split AC Cooling", "Glare-Free Lighting", "Ergonomic Mesh Chairs"],
  },
  {
    id: "cabin-storage-locker",
    src: "/gallery/resilience-cabin-storage-locker.jpg",
    title: "Personal Overhead Locker & Desk Anatomy",
    category: "Cabins",
    badge: "Lockable Storage · 4000K LED",
    description:
      "Every cabin features an upper dual-shelf lockable overhead storage cabinet to securely store books and study notes, an intermediate book shelf, integrated 4000K warm-white LED task lighting, and a wide anti-glare desktop.",
    specs: ["Dual-Shelf Overhead Locker", "4000K Warm LED Bar", "Integrated Book Ledge", "Dual Power Sockets"],
  },
  {
    id: "cabins-side-perspective",
    src: "/gallery/resilience-cabins-side-perspective.jpg",
    title: "Acoustic Partition Wings & Task Lighting",
    category: "Cabins",
    badge: "Zero Peripheral Distraction",
    description:
      "High-density matte wood-grain acoustic privacy wings engineered to block peripheral vision, maintain silence, and support marathon 12-hour study sessions for UPSC, NEET, and competitive exam rank-seekers.",
    specs: ["High Acoustic Wings", "Ergonomic Desk Height", "Numbered Cabin Grid", "CCTV Monitored Zone"],
  },
  {
    id: "exterior-signboard",
    src: "/gallery/resilience-exterior-signboard.jpg",
    title: "Market Road Flagship Signage",
    category: "Location",
    badge: "TC 24/1816-4 · Kowdiar P.O. 695003",
    description:
      "Official Resilience Reading Room backlit rooftop landmark signage overlooking Market Road in Kuravankonam, situated steps from Fortune IAS Academy and directly opposite Blinkit in the Kowdiar P.O. postal zone.",
    specs: ["Opposite Blinkit", "Near Fortune IAS", "Market Road Access", "2-Wheeler Parking"],
  },
  {
    id: "ro-water-purifier",
    src: "/gallery/resilience-ro-water-purifier.jpg",
    title: "RO Drinking Water Station & Hygiene Corridor",
    category: "Amenities",
    badge: "Multi-Stage Filtered · Sanitized Hall",
    description:
      "Clean, tiled service corridor featuring a wall-mounted multi-stage RO purified drinking water station and direct access to hygienic, ventilated washrooms equipped with exhaust fans.",
    specs: ["RO Purified Drinking Water", "Ventilated Washrooms", "Sanitized Floorway", "Daily Housekeeping"],
  },
  {
    id: "printing-scanning-station",
    src: "/gallery/resilience-printing-scanning-station.jpg",
    title: "On-Premise Printing & Scanning Hub",
    category: "Amenities",
    badge: "Konica Minolta bizhub 195",
    description:
      "Heavy-duty commercial Konica Minolta bizhub 195 digital multi-function printing, photocopying, and scanning utility ready for immediate test paper printouts, syllabus copies, and mock exam materials.",
    specs: ["High-Speed Printing", "A4 / Legal Scanning", "Photocopying Utility", "Mock Exam Ready"],
  },
];

export default function TheSpaceGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ["All", "Study Hall", "Cabins", "Amenities", "Location"];

  const filteredItems =
    activeCategory === "All"
      ? REAL_INTERIOR_PHOTOS
      : REAL_INTERIOR_PHOTOS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="relative bg-[#050505] py-20 sm:py-28 border-t border-white/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              On-Premise Architectural Record
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95">
              Inside Resilience Reading Room
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-white/60 max-w-2xl leading-relaxed">
              Photographed on-site at Market Road, Kuravankonam. 129 air-conditioned cabins,
              individual lockable overhead storage, 4000K warm LED lighting, RO water station, and Konica Minolta printing hub.
            </p>
          </div>

          {/* Understated Segmented Tabs */}
          <div className="flex items-center gap-1 border border-white/[0.08] bg-[#0c0d10] p-1 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-white/[0.12] text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Photo Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c0d10] transition-colors hover:border-white/20 cursor-pointer"
            >
              {/* Clean Image Frame with No Slop Badges */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Enlarge Icon Hover */}
                <div className="absolute top-3 right-3 rounded-md bg-black/60 border border-white/[0.1] p-1.5 text-white/80 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
                  <Maximize2 className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Caption & Specs */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/40">
                      {item.specs[0]}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-white/50">
                  <span className="font-mono">
                    {item.specs.slice(1, 3).join(" · ")}
                  </span>
                  <span className="text-white/40 group-hover:text-white/80 transition-colors flex items-center gap-1 font-mono">
                    Inspect ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-xl border border-white/[0.12] bg-[#0c0d10] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] p-5 sm:p-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    {selectedImage.category} · Spec Sheet
                  </span>
                  <h3 className="mt-1 text-base sm:text-xl font-semibold text-white/95">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-lg border border-white/[0.1] bg-white/[0.05] p-2 text-white/80 hover:bg-white/[0.1] transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative h-[50vh] sm:h-[60vh] w-full bg-black/80 flex items-center justify-center p-2">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="border-t border-white/[0.08] bg-[#08080a] p-5 sm:p-6">
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-xs font-mono text-white/50">
                  {selectedImage.specs.map((sp) => (
                    <span
                      key={sp}
                      className="rounded border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
