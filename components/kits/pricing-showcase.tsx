import { ArrowUpRight, BadgeDollarSign, BriefcaseBusiness, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleCreatorKits } from "@/lib/demo-kits";
import { formatCurrency } from "@/lib/utils";

const productPricing = [
  {
    name: "Solo Creator",
    price: "$29/mo",
    description: "For one creator brand with template access, examples, and sponsor-ready exports."
  },
  {
    name: "Studio",
    price: "$79/mo",
    description: "For creator managers and boutique teams handling multiple kits with reusable package structures."
  },
  {
    name: "Agency",
    price: "$149/mo",
    description: "For talent rosters, white-label styling, and polished decks for internal and external presentations."
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
          Sponsor package examples with a clean monetization angle.
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          CreatorDeck helps creators package themselves like premium inventory. Below are bundled sponsor examples alongside the product pricing model the app supports commercially.
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
              <CardTitle>Why sponsors pay premium rates</CardTitle>
            </div>
            <CardDescription>
              Media kits that explain fit, deliverables, and audience quality reduce friction in sponsor procurement and approvals.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm leading-7 text-muted-foreground">
            <div className="rounded-[24px] border border-white/10 bg-black/10 p-5">
              <p className="font-medium text-foreground">Clear package packaging</p>
              <p>Pre-structured cards make rate justification feel intentional instead of improvised.</p>
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
              <CardTitle>CreatorDeck SaaS monetization thesis</CardTitle>
            </div>
            <CardDescription>
              The app is positioned as a premium workflow tool for creator revenue ops, not just a free profile builder.
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
                Upsell path
              </div>
              White-label agency decks, PDF exports, CRM hooks, and share analytics are natural paid upgrades when you add a backend later.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
