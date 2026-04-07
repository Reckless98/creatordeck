"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChartNoAxesCombined, LayoutTemplate, Presentation, Sparkles, Wand2 } from "lucide-react";

import { KitShowcase } from "@/components/kits/kit-showcase";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sampleCreatorKits } from "@/lib/demo-kits";

const featureCards = [
  {
    title: "Live media kit builder",
    description: "Edit audience proof, sponsorship packages, testimonials, and template styling side by side."
  },
  {
    title: "Sponsor-ready aesthetics",
    description: "Designed like a premium sales deck, not a student template. Smooth motion, real hierarchy, cleaner close-rate energy."
  },
  {
    title: "Template switching",
    description: "Move between editorial, luxury keynote, and glossy campaign modes without losing your kit structure."
  },
  {
    title: "Share and preview flows",
    description: "Public preview, examples, and presentation mode make sponsor calls and agency handoff dramatically easier."
  }
];

export function LandingPage() {
  const featuredKit = sampleCreatorKits[0];

  return (
    <div className="pb-20">
      <section className="container grid gap-12 py-16 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-20">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <Badge className="w-fit" variant="highlight">
            Premium sponsor-ready media kit builder
          </Badge>
          <div className="space-y-5">
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-balance text-foreground sm:text-6xl xl:text-7xl">
              Creator portfolios that feel ready for the brand team boardroom.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              CreatorDeck turns creator stats, packages, partner proof, and presentation polish into a sponsor-facing deck you can actually sell with.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/builder">
                Launch Builder
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/examples/maya-vale">See Sample Kit</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatColumn value="7 routes" label="From landing to share mode" />
            <StatColumn value="3 templates" label="Bundled premium directions" />
            <StatColumn value="0 backend" label="Runs locally with npm" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <KitShowcase kit={featuredKit} mode="compact" />
        </motion.div>
      </section>

      <section className="container py-8">
        <div className="glass-panel rounded-[32px] p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="space-y-4">
              <p className="section-kicker">What makes it feel sellable</p>
              <h2 className="font-display text-4xl font-semibold leading-tight text-foreground">
                The product is structured like a pitch surface, not a portfolio scrapbook.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featureCards.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                >
                  <Card className="h-full bg-white/6">
                    <CardHeader>
                      <CardTitle>{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-16 lg:grid-cols-3">
        <RouteCard
          icon={<Wand2 className="size-5" />}
          title="/builder"
          description="Live editing workspace with zod-backed form controls, local state persistence, and a real-time preview."
        />
        <RouteCard
          icon={<LayoutTemplate className="size-5" />}
          title="/templates"
          description="Switch mood, palette, and presentation posture while keeping the same creator story intact."
        />
        <RouteCard
          icon={<Presentation className="size-5" />}
          title="/share"
          description="Open a cleaner presentation surface for sponsor calls, screen sharing, and internal reviews."
        />
      </section>

      <section className="container py-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="bg-white/6">
            <CardHeader>
              <p className="section-kicker">Bundled examples</p>
              <CardTitle>Three creator archetypes included out of the box</CardTitle>
              <CardDescription>
                Travel luxury, creator-tech, and editorial beauty kits are bundled so the product feels alive the moment it boots.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {sampleCreatorKits.map((kit) => (
                <Link
                  key={kit.slug}
                  href={`/examples/${kit.slug}`}
                  className="rounded-[24px] border border-white/10 bg-black/15 p-5 transition hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-foreground">{kit.creatorName}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{kit.niche}</p>
                    </div>
                    <ArrowRight className="size-5 text-muted-foreground" />
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-white/6">
            <CardHeader>
              <p className="section-kicker">Who it sells to</p>
              <CardTitle>Perfect for creators and agencies closing premium partnerships</CardTitle>
              <CardDescription>
                The deck structure supports one-off campaigns, retainers, launch kits, talent rosters, and brand-facing proposal reviews.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              <div className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-black/15 p-4">
                <ChartNoAxesCombined className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Stronger sponsorship positioning</p>
                  <p>Lead with proof, clarity, and polished rates instead of sending a loose PDF after the call.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-black/15 p-4">
                <Sparkles className="mt-1 size-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Faster internal approvals</p>
                  <p>Agencies and brand teams can evaluate fit, scope, and price quickly because the kit is structured for decision-makers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container py-16">
        <div className="glass-panel rounded-[36px] px-8 py-10 text-center md:px-12">
          <p className="section-kicker">Ready to ship sponsor-ready decks</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-balance text-foreground md:text-5xl">
            Open the builder, swap the template, and walk into your next sponsor conversation looking expensive.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/builder">Start Building</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/pricing">See Pricing Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatColumn({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
      <div className="font-display text-3xl font-semibold text-foreground">{value}</div>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function RouteCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-white/6">
      <CardHeader>
        <div className="mb-3 flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
