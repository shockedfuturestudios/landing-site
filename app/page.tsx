import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Metadata } from "next";

// Page-specific Metadata
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Shocked Future Studios. We make yesterday\'s games for today\'s world.',
};

export default function Home() {
  return (
    <>
      {/* Each component is a full-width section */}
      <Hero />
      <About />
      <Contact />
    </>
  );
}