"use client";

import Link from "next/link";

import { KitShowcase } from "@/components/kits/kit-showcase";
import { useMediaKit } from "@/components/providers/media-kit-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PreviewStage() {
  const { kit } = useMediaKit();

  return (
    <div className="container space-y-8 py-14">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <Badge variant="highlight" className="w-fit">
            Public-facing preview
          </Badge>
          <h1 className="font-display text-5xl font-semibold leading-none text-foreground">
            This is the polished sponsor view of your current kit.
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            Everything here is driven by the local builder state, so you can iterate in the builder and use this page as the clean review surface.
          </p>
        </div>
        <div className="flex gap-3">
          <Button asChild variant="secondary">
            <Link href="/templates">Adjust template</Link>
          </Button>
          <Button asChild>
            <Link href="/share">Open share mode</Link>
          </Button>
        </div>
      </div>

      <KitShowcase kit={kit} />
    </div>
  );
}
