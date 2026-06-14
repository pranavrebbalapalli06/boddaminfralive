import "./globals.css";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import type { Metadata } from "next";

export const viewport = {
  themeColor: "#0f0d0a",
};

export const metadata: Metadata = {
  title: "Boddam Infra — Engineering the structures that move nations",
  description: "Boddam Infra designs, engineers and delivers bridges, energy, water and transit infrastructure. A specialist practice for clients who measure success in decades.",
  authors: [{ name: "Boddam Infrastructure" }],
  openGraph: {
    siteName: "Boddam Infra",
    type: "website",
    title: "Boddam Infra — Engineering the structures that move nations",
    description: "A specialist infrastructure practice delivering bridges, energy, water and transit programs across three continents.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BoddamInfra",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SiteNav />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
