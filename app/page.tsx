"use client";
import { HeroSection } from "@/components/Hero";
import AboutSection from "@/components/About";
import GameSection from "@/components/Games";
import SiteFooter from "@/components/site-footer";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <div className="relative z-10">
        <main>
          <HeroSection />
          <AboutSection />
          <GameSection />
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
