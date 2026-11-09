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
    <section id="gallery" className="relative bg-[#050505] py-24 sm:py-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
              <Camera className="h-3.5 w-3.5 text-emerald-400" />
              Verified On-Premise Photography · Kuravankonam
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white/90 sm:text-4xl md:text-5xl">
              Inside Resilience Reading Room
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-2xl sm:text-base leading-relaxed">
              Step into the actual study environment at Market Road, Kuravankonam. 129 air-conditioned cabins,
              individual lockable lockers, 4000K task lighting, RO water, and high-speed print amenities.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-white text-black font-semibold shadow-md"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedImage(item)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/30 hover:bg-white/[0.05] cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-opacity duration-300 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
                  {item.badge}
                </div>

                {/* Enlarge Icon Hover */}
                <div className="absolute top-3 right-3 rounded-full bg-white/10 p-2 text-white/80 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-md">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>

              {/* Caption & Specs */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold text-white/95 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.specs.slice(0, 2).map((sp) => (
                    <span
                      key={sp}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70"
                    >
                      {sp}
                    </span>
                  ))}
                  <span className="ml-auto text-[11px] text-white/40 flex items-center gap-1 group-hover:text-white/80 transition-colors">
                    <Eye className="h-3 w-3" /> Inspect
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#0c0c0c] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-5 sm:p-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                    {selectedImage.category} · {selectedImage.badge}
                  </span>
                  <h3 className="mt-1 text-lg sm:text-2xl font-semibold text-white/95">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-full border border-white/15 bg-white/10 p-2 text-white/90 hover:bg-white/20 transition-colors"
                  aria-label="Close photo preview"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black/60 flex items-center justify-center p-2">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="border-t border-white/10 bg-[#080808] p-5 sm:p-6">
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {selectedImage.specs.map((sp) => (
                    <span
                      key={sp}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      ✓ {sp}
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
