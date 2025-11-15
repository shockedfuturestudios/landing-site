import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Shocked Future Studios',
    default: 'Shocked Future Studios - Making yesterday\'s games for today\'s world.',
  },
  description: "Shocked Future Studios is an indie game dev studio focusing on retro-inspired games for modern platforms.",
  keywords: ['indie games', 'game dev', 'retro games', 'pixel art'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}