import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { KitShowcase } from "@/components/kits/kit-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bundledExampleOptions, getExampleKitBySlug } from "@/lib/demo-kits";

export const dynamicParams = false;

export function generateStaticParams() {
  return bundledExampleOptions.map((example) => ({
    slug: example.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const kit = getExampleKitBySlug(slug);

  if (!kit) {
    return {
      title: "Example not found",
      description: "The requested bundled example kit does not exist."
    };
  }

  return {
    title: `${kit.creatorName} example`,
    description: `Explore the bundled ${kit.creatorName} creator kit and its ${kit.niche.toLowerCase()} positioning.`
  };
}

export default async function ExampleKitPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const kit = getExampleKitBySlug(slug);

  if (!kit) {
    notFound();
  }

  return (
    <div className="container space-y-8 py-14">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <Badge variant="highlight" className="w-fit">
            Bundled sample creator kit
          </Badge>
          <h1 className="font-display text-5xl font-semibold leading-none text-foreground">
            {kit.creatorName}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            {kit.niche}. This example is bundled to show how CreatorDeck feels the moment the app opens.
          </p>
        </div>
        <Button asChild>
          <Link href="/builder">Customize in builder</Link>
        </Button>
      </div>
      <KitShowcase kit={kit} />
    </div>
  );
}
