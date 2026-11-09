import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-resilience-navy text-white flex flex-col justify-between p-6 sm:p-12">
      <header>
        <Link href="/">
          <BrandLogo size="md" variant="light" showTagline={false} />
        </Link>
      </header>

      <main className="max-w-xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] font-mono font-bold text-resilience-gold">
          Error 404 &bull; Spatial Disconnect
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Sanctuary Not Found
        </h1>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
          The quiet study page or path you are looking for has been relocated or does not exist.
          Return to the main reading room experience below.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-resilience-gold text-resilience-navy font-bold text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-resilience-gold-light transition-all shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Sanctuary</span>
          </Link>
        </div>
      </main>

      <footer className="text-center text-xs text-white/40">
        &copy; {new Date().getFullYear()} Resilience Reading Room. Focus. Discipline. Success.
      </footer>
    </div>
  );
}

