"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import NextImage from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowUpRight, MessageCircle, Sparkles, Layers, Cpu } from "lucide-react";

// Configured exclusively for 80 extracted frames in /public/resil-animation/
const TOTAL_FRAMES = 80;

const BOOKMYCABIN_ROOM_URL =
  "https://bookmycabin.in/rooms/resilience-reading-room-kuravankonam";
const CONTACT_PHONE = "+918281208267";
const DISPLAY_PHONE = "+91 82812 08267";

const getFrameUrl = (index: number): string => {
  const paddedIndex = String(index + 1).padStart(3, "0");
  return `/resil-animation/ezgif-frame-${paddedIndex}.jpg`;
};

export default function CabinScrollCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentDrawnFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number | null>(null);

  const [canvasBg, setCanvasBg] = useState("#E6E6E4");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring physics to eliminate wheel-scroll frame jitter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.0005,
  });

  // Draw current frame onto HTML5 Canvas with responsive "contain" scaling
  // If target frame is still downloading, fall back to the nearest loaded frame seamlessly
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Find target frame or closest loaded frame
      let image = imagesRef.current[frameIndex];
      if (!image || !image.complete) {
        let bestDist = Infinity;
        let fallback: HTMLImageElement | null = null;
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          const candidate = imagesRef.current[i];
          if (candidate && candidate.complete) {
            const dist = Math.abs(i - frameIndex);
            if (dist < bestDist) {
              bestDist = dist;
              fallback = candidate;
            }
          }
        }
        image = fallback;
      }

      if (!image || !image.complete) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Fill canvas background to match sampled corner pixel exactly
      ctx.fillStyle = canvasBg;
      ctx.fillRect(0, 0, width, height);

      const imgWidth = image.naturalWidth || 1080;
      const imgHeight = image.naturalHeight || 1920;
      const imgRatio = imgWidth / imgHeight;
      const viewRatio = width / height;

      let renderW: number;
      let renderH: number;

      if (viewRatio > imgRatio) {
        renderH = height;
        renderW = height * imgRatio;
      } else {
        renderW = width;
        renderH = width / imgRatio;
      }

      const offsetX = (width - renderW) / 2;
      const offsetY = (height - renderH) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(image, offsetX, offsetY, renderW, renderH);
      ctx.restore();

      currentDrawnFrameRef.current = frameIndex;
    },
    [canvasBg]
  );

  // Progressive high-speed loader: Load Frame 0 immediately (0ms blocking),
  // then asynchronously stream remaining frames in background idle batches
  useEffect(() => {
    let mounted = true;

    // 1. Immediately load Frame 0 for instant initial paint
    const frame0 = new Image();
    frame0.crossOrigin = "anonymous";
    frame0.src = getFrameUrl(0);

    frame0.onload = () => {
      if (!mounted) return;
      imagesRef.current[0] = frame0;

      // Sample pixel (2,2) for exact edge-blending background color
      try {
        const offscreen = document.createElement("canvas");
        offscreen.width = 1;
        offscreen.height = 1;
        const oCtx = offscreen.getContext("2d");
        if (oCtx) {
          oCtx.drawImage(frame0, 2, 2, 1, 1, 0, 0, 1, 1);
          const [r, g, b] = oCtx.getImageData(0, 0, 1, 1).data;
          setCanvasBg(`rgb(${r}, ${g}, ${b})`);
        }
      } catch {
        setCanvasBg("#E6E6E4");
      }

      requestAnimationFrame(() => drawFrame(0));

      // 2. Stream remaining frames asynchronously in staggered batches
      let currentIdx = 1;
      const batchSize = 6;

      const loadNextBatch = () => {
        if (!mounted || currentIdx >= TOTAL_FRAMES) return;

        const end = Math.min(TOTAL_FRAMES, currentIdx + batchSize);
        for (let i = currentIdx; i < end; i++) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          const targetIndex = i;
          img.src = getFrameUrl(targetIndex);
          img.onload = () => {
            if (!mounted) return;
            imagesRef.current[targetIndex] = img;
          };
          if (typeof img.decode === "function") {
            img.decode().catch(() => {});
          }
        }

        currentIdx = end;
        if (currentIdx < TOTAL_FRAMES) {
          if ("requestIdleCallback" in window) {
            (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadNextBatch);
          } else {
            setTimeout(loadNextBatch, 25);
          }
        }
      };

      if ("requestIdleCallback" in window) {
        (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadNextBatch);
      } else {
        setTimeout(loadNextBatch, 30);
      }
    };

    return () => {
      mounted = false;
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [drawFrame]);

  // Window resize handler with DPR scaling
  useEffect(() => {
    const onResize = () => {
      const idx = currentDrawnFrameRef.current >= 0 ? currentDrawnFrameRef.current : 0;
      drawFrame(idx);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [drawFrame]);

  // Update canvas frame on scroll ticks
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(latest * (TOTAL_FRAMES - 1)))
    );
    if (frameIndex !== currentDrawnFrameRef.current) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  // Scroll-Synced Story Text Animations with strict clamping and display toggling
  // 0% Scroll: Hero Headline (Centered) - strictly hides past 22%
  const s0Opacity = useTransform(scrollYProgress, [0, 0.14, 0.22, 1], [1, 1, 0, 0], {
    clamp: true,
  });
  const s0Y = useTransform(scrollYProgress, [0, 0.22, 1], [0, -35, -35], {
    clamp: true,
  });
  const s0Display = useTransform(s0Opacity, (v) => (v <= 0.01 ? "none" : "flex"));

  // 30% Scroll: Feature #1 (Left aligned -> Product begins expanding)
  const s30Opacity = useTransform(
    scrollYProgress,
    [0, 0.20, 0.28, 0.42, 0.50, 1],
    [0, 0, 1, 1, 0, 0],
    { clamp: true }
  );
  const s30Y = useTransform(
    scrollYProgress,
    [0, 0.20, 0.28, 0.42, 0.50, 1],
    [35, 35, 0, 0, -35, -35],
    { clamp: true }
  );
  const s30Display = useTransform(s30Opacity, (v) => (v <= 0.01 ? "none" : "flex"));

  // 60% Scroll: Feature #2 (Right aligned -> Product fully exploded)
  const s60Opacity = useTransform(
    scrollYProgress,
    [0, 0.48, 0.56, 0.72, 0.80, 1],
    [0, 0, 1, 1, 0, 0],
    { clamp: true }
  );
  const s60Y = useTransform(
    scrollYProgress,
    [0, 0.48, 0.56, 0.72, 0.80, 1],
    [35, 35, 0, 0, -35, -35],
    { clamp: true }
  );
  const s60Display = useTransform(s60Opacity, (v) => (v <= 0.01 ? "none" : "flex"));

  // 90% Scroll: CTA / Final Message (Centered -> Product smoothly reassembles)
  const s90Opacity = useTransform(
    scrollYProgress,
    [0, 0.78, 0.88, 1],
    [0, 0, 1, 1],
    { clamp: true }
  );
  const s90Y = useTransform(
    scrollYProgress,
    [0, 0.78, 0.88, 1],
    [35, 35, 0, 0],
    { clamp: true }
  );
  const s90Display = useTransform(s90Opacity, (v) => (v <= 0.01 ? "none" : "flex"));

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor: canvasBg }}
      className="relative h-[400vh] w-full select-none transition-colors duration-300"
    >
      {/* Sticky Full-Screen Canvas */}
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-screen w-full object-contain"
        />

        {/* Subtle Dark Vignette for Cinematic Text Contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Seamless bottom fade into #050505 page section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050505]" />

        {/* 0% SCROLL: HERO HEADLINE (Centered) */}
        <motion.div
          style={{ opacity: s0Opacity, y: s0Y, display: s0Display }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between px-4 pt-16 pb-6 sm:py-20 text-center"
        >
          <div className="mt-4 sm:mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-[#161513]/80 px-3.5 py-1.5 backdrop-blur-md">
            <div className="relative h-4 w-4 shrink-0">
              <NextImage
                src="/images/resilience-logo.png"
                alt="Resilience Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-medium tracking-tight text-white/90">
              129-Seat Dedicated Study Sanctuary · Kuravankonam, Kowdiar
            </span>
          </div>

          <div className="max-w-3xl rounded-2xl sm:rounded-3xl bg-[#161513]/80 p-5 sm:p-8 backdrop-blur-md border border-white/10 shadow-2xl mx-2">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white/95 leading-tight">
              Built for Unbroken Focus.
            </h1>
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
              129 private study cabins in Kowdiar, Thiruvananthapuram.
              Acoustic privacy wings, 13-hour air conditioning, and BookMyCabin digital booking.
            </p>
          </div>

          <div className="flex flex-col items-center gap-1.5 pb-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/70 font-mono">
              Scroll to Explore Interior
            </span>
            <div className="h-6 sm:h-8 w-[1px] bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </motion.div>

        {/* 30% SCROLL: FEATURE #1 (Left Aligned) */}
        <motion.div
          style={{ opacity: s30Opacity, y: s30Y, display: s30Display }}
          className="pointer-events-none absolute inset-0 mx-auto flex max-w-7xl items-center justify-start px-4 sm:px-12"
        >
          <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#161513]/90 p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-emerald-400">
              <Layers className="h-4 w-4" />
              <span>01 · Acoustic &amp; Visual Isolation</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white/95">
              Zero Peripheral Distraction
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/70">
              As the cabin expands, notice the high-density matte acoustic partitions
              and ergonomic desk geometry—crafted for UPSC, NEET, and CA aspirants
              logging 12-hour sessions.
            </p>
          </div>
        </motion.div>

        {/* 60% SCROLL: FEATURE #2 (Right Aligned) */}
        <motion.div
          style={{ opacity: s60Opacity, y: s60Y, display: s60Display }}
          className="pointer-events-none absolute inset-0 mx-auto flex max-w-7xl items-center justify-end px-4 sm:px-12"
        >
          <div className="max-w-md w-full rounded-2xl border border-white/10 bg-[#161513]/90 p-5 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-medium text-sky-400">
              <Cpu className="h-4 w-4" />
              <span>02 · Internal Telemetry &amp; 13-Hour AC</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white/95">
              Concealed Power, Fiber &amp; Zoned AC
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/70">
              Every cabin integrates flicker-free 4000K task lighting, individual
              surge-protected power, high-speed Wi-Fi, and 13 hours daily continuous
              AC (8:30 AM to 9:30 PM) synced directly to BookMyCabin.
            </p>
          </div>
        </motion.div>

        {/* 90% SCROLL: CTA / FINAL MESSAGE (Centered) */}
        <motion.div
          style={{ opacity: s90Opacity, y: s90Y, display: s90Display }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end px-4 pb-12 sm:pb-16 text-center"
        >
          <div className="pointer-events-auto max-w-2xl w-full rounded-2xl sm:rounded-3xl border border-white/10 bg-[#161513]/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl mx-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/90">
              <div className="relative h-3.5 w-3.5 shrink-0">
                <NextImage
                  src="/images/resilience-logo.png"
                  alt="Resilience Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Open 24/7 · TC 24/1816-4, Market Road, Kuravankonam</span>
            </div>
            <h2 className="mt-3.5 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95">
              Reserve Your Cabin on BookMyCabin
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
              View the live 129-seat orientation map, select your AC zone, and lock your
              reservation starting at ₹800/month.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={BOOKMYCABIN_ROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-black transition-colors hover:bg-neutral-200 sm:w-auto shadow-md"
              >
                <span>Book Seat on BookMyCabin</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918281208267?text=Hi%20Resilience%20Reading%20Room%2C%20I%20would%20like%20to%20inquire%20about%20cabin%20availability%20and%20plans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-xs sm:text-sm font-medium text-emerald-300 transition-colors hover:bg-emerald-500/20 sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
