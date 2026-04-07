"use client";

import * as React from "react";
import { startTransition } from "react";
import { Check, Palette } from "lucide-react";

import { KitShowcase } from "@/components/kits/kit-showcase";
import { useMediaKit } from "@/components/providers/media-kit-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredTemplates } from "@/lib/demo-kits";
import { cn } from "@/lib/utils";

export function TemplateGallery() {
  const { kit, setTemplate } = useMediaKit();

  return (
    <div className="container grid gap-8 py-14 xl:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-6">
        <div className="space-y-4">
          <Badge variant="highlight" className="w-fit">
            Template chooser
          </Badge>
          <h1 className="font-display text-5xl font-semibold leading-none text-foreground">
            Choose the mood your sponsors should feel.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Each template shifts the emotional posture of the same media kit: glossy campaign, luxury keynote, or editorial polish.
          </p>
        </div>
        <div className="grid gap-4">
          {featuredTemplates.map((template) => {
            const isActive = template.id === kit.template;

            return (
              <Card
                key={template.id}
                className={cn("bg-white/6 transition-all", isActive && "border-primary/40 shadow-[0_24px_80px_rgba(139,92,246,0.2)]")}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle>{template.name}</CardTitle>
                        {isActive ? <Badge variant="highlight">Active</Badge> : null}
                      </div>
                      <CardDescription>{template.description}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      <Palette className="size-4" />
                      {template.mood}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <Swatch color={template.accent} />
                    <Swatch color={template.accentSoft} />
                    <div className={cn("h-11 w-28 rounded-full border border-white/10 bg-gradient-to-r", template.heroGradient)} />
                  </div>
                  <Button
                    variant={isActive ? "secondary" : "default"}
                    onClick={() => startTransition(() => setTemplate(template.id))}
                  >
                    {isActive ? (
                      <>
                        <Check className="size-4" />
                        Already applied
                      </>
                    ) : (
                      "Apply template"
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="xl:sticky xl:top-28 xl:self-start">
        <KitShowcase kit={kit} />
      </div>
    </div>
  );
}

function Swatch({ color }: { color: string }) {
  return (
    <div
      className="size-11 rounded-full border border-white/10 shadow-inner shadow-black/25"
      style={{ background: `linear-gradient(135deg, ${color}, rgba(255,255,255,0.08))` }}
    />
  );
}
