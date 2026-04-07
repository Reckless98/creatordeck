import type { Metadata } from "next";

import { PreviewStage } from "@/components/kits/preview-stage";

export const metadata: Metadata = {
  title: "Preview",
  description:
    "Review the current creator kit in its sponsor-facing layout before sharing or presenting it."
};

export default function PreviewPage() {
  return <PreviewStage />;
}
