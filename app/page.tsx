import type { Metadata } from "next";

import { LandingPage } from "@/components/marketing/landing-page";

export const metadata: Metadata = {
  title: "Creator media kit builder",
  description:
    "CreatorDeck is a Next.js app for building, previewing, and presenting creator media kits."
};

export default function HomePage() {
  return <LandingPage />;
}
