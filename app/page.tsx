"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/Hero";
import AboutSection from "@/components/About";
import GameSection from "@/components/Games";
import CTASection from "@/components/Contact";
import SiteFooter from "@/components/site-footer";

const AnimatedBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0px 0px", "-200px -200px"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
        backgroundSize: "100px 100px",
      }}
      animate={controls}
    />
  );
};

export default function Component() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-sans relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">

        {/* Site Header */}
        <SiteHeader />

        <main>         

          {/* Hero Section */}
          <HeroSection />

          {/* About Section */}
         <AboutSection />

          {/* Example Section */}
          <GameSection />

          {/* CTA Section */}
          <CTASection />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
