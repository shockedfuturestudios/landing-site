import type { Metadata } from 'next';
import { Host_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


const inter = Host_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shocked Future Studios',
  description: 'Engineering tomorrow\'s realities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}