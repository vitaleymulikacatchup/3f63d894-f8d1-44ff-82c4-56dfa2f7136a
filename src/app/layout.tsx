import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MemePulse — playful memecoin landing page with clear steps",
  description: "MemePulse is a fun memecoin landing page with simple buy steps, clear tokenomics, and a meme-friendly vibe—designed for quick understanding and community.",
  keywords: ["memecoin","crypto","buy-steps","tokenomics","community","pulse","cryptocurrency","blockchain","landing-page","meme"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MemePulse — playful memecoin landing page with clear steps",
    description: "MemePulse is a fun memecoin landing page with simple buy steps, clear tokenomics, and a meme-friendly vibe—designed for quick understanding and community.",
    type: "website",
    url: "/",
    siteName: "MemePulse",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759136362428-acd89904.jpg",
      width: 1200,
      height: 630,
      alt: "MemePulse mascot rocket against a bright gradient background with the Pulse logo"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MemePulse — playful memecoin landing page with clear steps",
    description: "MemePulse is a fun memecoin landing page with simple buy steps, clear tokenomics, and a meme-friendly vibe—designed for quick understanding and community.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-desert-landscape-in-16-9--1759136362428-acd89904.jpg"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
