import type { Metadata } from "next";

import { PricingShowcase } from "@/components/kits/pricing-showcase";

export const metadata: Metadata = {
  title: "Pricing examples",
  description:
    "Review sample sponsor packages and the bundled pricing examples included in CreatorDeck."
};

export default function PricingPage() {
  return <PricingShowcase />;
}
