"use client";

import Link from "next/link";
import { ArrowLeft, Presentation, ScreenShare, Sparkles } from "lucide-react";

import { KitShowcase } from "@/components/kits/kit-showcase";
import { useMediaKit } from "@/components/providers/media-kit-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ShareStage() {
  const { kit } = useMediaKit();

  return (
    <div className="min-h-screen bg-hero-radial py-8">
      <div className="container space-y-6">
        <div className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-black/20 px-6 py-5 backdrop-blur-2xl md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Badge variant="highlight" className="w-fit">
              Presentation share mode
            </Badge>
            <div>
              <h1 className="font-display text-4xl font-semibold text-white">Sponsor call stage</h1>
              <p className="text-sm text-white/65">
                A calmer, cleaner surface for screen-sharing your active media kit.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/preview">
                <ArrowLeft className="size-4" />
                Back to preview
              </Link>
            </Button>
            <Button asChild>
              <Link href="/builder">
                <Sparkles className="size-4" />
                Refine in builder
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <KitShowcase kit={kit} mode="presentation" />
          <div className="space-y-5">
            <Card className="bg-black/25 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <ScreenShare className="size-5 text-primary" />
                  <CardTitle className="text-white">Share-ready talking points</CardTitle>
                </div>
                <CardDescription className="text-white/60">
                  Use this panel like speaker notes while the main kit is on-screen.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-white/72">
                <TalkingPoint
                  label="Open strong"
                  body={`Lead with ${kit.creatorName}'s audience fit, then move straight into the growth chart and featured package.`}
                />
                <TalkingPoint
                  label="Anchor the rate"
                  body="Package cards already frame deliverables and turnaround, so you can discuss scope before the sponsor fixates on price."
                />
                <TalkingPoint
                  label="Close cleanly"
                  body="End on the testimonial section and ask which package shape aligns with the sponsor's current campaign goal."
                />
              </CardContent>
            </Card>

            <Card className="bg-black/25 text-white">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Presentation className="size-5 text-primary" />
                  <CardTitle className="text-white">Best use cases</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm text-white/70">
                <PresentationRow
                  title="Live sponsor discovery"
                  description="Walk prospects through fit, proof, and deliverables without switching tabs."
                />
                <PresentationRow
                  title="Agency internal review"
                  description="Use share mode for roster discussions, rate calibration, and proposal prep."
                />
                <PresentationRow
                  title="Creator refresh sessions"
                  description="Update the builder in one window and keep this route ready for instant review."
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function TalkingPoint({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
      <p className="mt-3">{body}</p>
    </div>
  );
}

function PresentationRow({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
      <p className="font-medium text-white">{title}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
