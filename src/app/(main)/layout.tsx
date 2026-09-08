import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/shared/Footer/Footer";
import { Navbar } from "@/components/shared/Navigation/Navbar";
import {
  LocalBusinessStructuredData,
  OrganizationStructuredData,
  WebSiteStructuredData,
} from "@/components/shared/SEO/StructuredData";
import { Providers } from "../providers";
import { defaultMetadata } from "@/config/metadata";
import type { Metadata } from "next";

import { ChatBotLazy } from "@/components/shared/ui/ChatBotLazy";
// css
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="light" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link
          rel="dns-prefetch"
          href="https://public.blob.vercel-storage.com"
        />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />

          <ChatBotLazy />
        </Providers>

        <LocalBusinessStructuredData />
        <WebSiteStructuredData />
        <OrganizationStructuredData />

        <Suspense fallback={null}>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  );
}
