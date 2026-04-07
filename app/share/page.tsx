import type { Metadata } from "next";

import { ShareStage } from "@/components/kits/share-stage";

export const metadata: Metadata = {
  title: "Share mode",
  description:
    "Open a stripped-down presentation view for sponsor calls, internal reviews, and screen sharing."
};

export default function SharePage() {
  return <ShareStage />;
}
