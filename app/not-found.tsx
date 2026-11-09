import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between p-6 sm:p-12">
      <header className="mx-auto w-full max-w-7xl">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src="/images/resilience-logo.png"
              alt="Resilience Reading Room Emblem"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <span className="block text-sm font-semibold tracking-tight text-white/95">
              Resilience Reading Room
            </span>
            <span className="block text-[11px] text-white/50">
              Kuravankonam, Kowdiar · PIN: 695003
            </span>
          </div>
        </Link>
      </header>

      <main className="max-w-md mx-auto text-center space-y-4 py-16">
        <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
          Error 404 · Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95">
          Page not found
        </h1>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
          The requested study page has been moved or does not exist. Return to the main Resilience Reading Room portal below.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </main>

      <footer className="text-center text-[11px] text-white/40">
        &copy; {new Date().getFullYear()} Resilience Reading Room · Kuravankonam, Kowdiar P.O. 695003
      </footer>
    </div>
  );
}

