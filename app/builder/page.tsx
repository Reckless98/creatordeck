import type { Metadata } from "next";

import { BuilderWorkbench } from "@/components/builder/builder-workbench";

export const metadata: Metadata = {
  title: "Builder",
  description:
    "Edit the active creator kit, adjust packages and proof points, and keep the live preview in sync."
};

export default function BuilderPage() {
  return <BuilderWorkbench />;
}
