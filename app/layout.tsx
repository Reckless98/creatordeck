import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { SiteShell } from "@/components/layout/site-shell";
import { MediaKitProvider } from "@/components/providers/media-kit-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "CreatorDeck",
  description: "Premium sponsor-ready media kit builder for creators and agencies.",
  openGraph: {
    title: "CreatorDeck",
    description: "Build sponsor-ready media kits with a premium live builder and elegant presentation views."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} min-h-screen bg-background font-body text-foreground antialiased`}>
        <ThemeProvider>
          <MediaKitProvider>
            <SiteShell>{children}</SiteShell>
          </MediaKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
