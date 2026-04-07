import { ArrowUpRight, BadgeDollarSign, BriefcaseBusiness, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleCreatorKits } from "@/lib/demo-kits";
import { formatCurrency } from "@/lib/utils";

const productPricing = [
  {
    name: "Solo Creator",
    price: "$29/mo",
    description: "For one creator brand with the core builder, templates, and preview routes."
  },
  {
    name: "Studio",
    price: "$79/mo",
    description: "For creator managers and small teams handling multiple kits and shared package structures."
  },
  {
    name: "Agency",
    price: "$149/mo",
    description: "For larger rosters, white-label presentation, and more structured internal review."
  }
];

export function PricingShowcase() {
  return (
    <div className="container space-y-10 py-14">
      <div className="space-y-4">
        <Badge variant="highlight" className="w-fit">
          Pricing examples
        </Badge>
        <h1 className="font-display text-5xl font-semibold leading-none text-foreground">
          Sample sponsor packages and product pricing.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          This page shows example sponsor packages from the bundled kits alongside a simple product pricing model.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {sampleCreatorKits.map((kit) => (
          <Card key={kit.slug} className="bg-white/6">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="section-kicker">{kit.creatorName}</p>
                  <CardTitle>{kit.sponsorPackages[0]?.name}</CardTitle>
                </div>
                <div className="rounded-full border border-white/10 bg-black/15 px-3 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {kit.niche}
                </div>
              </div>
              <CardDescription>{kit.sponsorPackages[0]?.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-end justify-between">
                <div className="font-display text-4xl font-semibold text-foreground">
                  {formatCurrency(kit.sponsorPackages[0]?.price ?? 0)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {kit.sponsorPackages[0]?.turnaround}
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                {kit.sponsorPackages[0]?.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                    <span>{deliverable}</span>
                    <ArrowUpRight className="size-4" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <Card className="bg-white/6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="size-5 text-primary" />
              <CardTitle>Why structured packages help</CardTitle>
            </div>
            <CardDescription>
              Clear packages make it easier for a brand team to understand fit, scope, and delivery.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm leading-7 text-muted-foreground">
            <div className="rounded-[24px] border border-white/10 bg-black/10 p-5">
              <p className="font-medium text-foreground">Clear package structure</p>
              <p>Pre-structured cards help explain what is included before the conversation gets stuck on price.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/10 p-5">
              <p className="font-medium text-foreground">Sharper partner proof</p>
              <p>Testimonials and logo signals let brands skim trust cues in seconds.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-black/10 p-5">
              <p className="font-medium text-foreground">Presentation mode included</p>
              <p>Screen-shareable routes help creators, managers, and agencies run cleaner commercial calls.</p>
            </div>
          </CardContent>
        </Card>

          <Card className="bg-white/6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BadgeDollarSign className="size-5 text-primary" />
                <CardTitle>Product pricing reference</CardTitle>
              </div>
              <CardDescription>
                A straightforward way to frame the product if it moves beyond a local demo.
              </CardDescription>
            </CardHeader>
          <CardContent className="grid gap-4">
            {productPricing.map((tier) => (
              <div key={tier.name} className="rounded-[24px] border border-white/10 bg-black/10 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-foreground">{tier.name}</p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{tier.description}</p>
                  </div>
                  <div className="font-display text-3xl text-foreground">{tier.price}</div>
                </div>
              </div>
            ))}
            <div className="rounded-[24px] border border-primary/25 bg-primary/10 p-5 text-sm leading-7 text-muted-foreground">
              <div className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <Sparkles className="size-4 text-primary" />
                Possible expansion
              </div>
              White-label decks, export flows, analytics, and integrations would fit naturally if the product adds a backend later.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
