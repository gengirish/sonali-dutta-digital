import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonali Dutta | Founder, DEI Consultant & Coach",
  description:
    "Explore Sonali Dutta's digital profile: founder of Youmanize, DEI consultant, trainer, speaker, and coach helping teams build human-first and inclusive workplaces.",
  keywords: [
    "Sonali Dutta",
    "Youmanize",
    "DEI Consultant",
    "LGBT Inclusion",
    "Learning and Development",
    "Leadership Coach",
    "Corporate Trainer",
    "Keynote Speaker",
    "Bengaluru",
  ],
  authors: [{ name: "Sonali Dutta", url: "https://www.linkedin.com/in/coach-sonali-dutta/" }],
  metadataBase: new URL("https://www.youmanize.in"),
  alternates: {
    canonical: "https://www.youmanize.in",
  },
  openGraph: {
    title: "Sonali Dutta | Founder, DEI Consultant & Coach",
    description:
      "Human-first culture transformation through DEI programs, coaching, and leadership facilitation.",
    type: "website",
    locale: "en_IN",
    url: "https://www.linkedin.com/in/coach-sonali-dutta/",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonali Dutta | Founder, DEI Consultant & Coach",
    description:
      "Founder of Youmanize helping organizations build inclusive, people-first workplaces.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
