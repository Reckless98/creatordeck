import type { Metadata } from "next";

import { TemplateGallery } from "@/components/kits/template-gallery";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "Switch the visual direction of the active kit without changing the underlying creator data."
};

export default function TemplatesPage() {
  return <TemplateGallery />;
}
