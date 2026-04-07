"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from "recharts";
import { ArrowUpRight, BadgeCheck, Globe2, Mail, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getTemplatePreset } from "@/lib/demo-kits";
import type { CreatorKit } from "@/lib/types";
import { cn, formatCompactNumber, formatCurrency } from "@/lib/utils";

type KitShowcaseProps = {
  kit: CreatorKit;
  mode?: "full" | "compact" | "presentation";
  className?: string;
};

const metricCardClassName =
  "rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl";

export function KitShowcase({
  kit,
  mode = "full",
  className
}: KitShowcaseProps) {
  const preset = getTemplatePreset(kit.template);
  const isCompact = mode === "compact";
  const isPresentation = mode === "presentation";
  const hasPartners = kit.partners.length > 0;
  const hasTestimonials = kit.testimonials.length > 0;

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-[36px] border border-white/10 p-1 shadow-[0_40px_120px_rgba(5,6,18,0.42)]",
        className
      )}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className={cn("relative overflow-hidden rounded-[32px] bg-gradient-to-br p-6 md:p-8", preset.heroGradient)}>
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: `radial-gradient(circle at 14% 18%, ${preset.accent}55, transparent 23%), radial-gradient(circle at 88% 12%, ${preset.accentSoft}44, transparent 20%), linear-gradient(180deg, transparent, rgba(4,5,14,0.18))`
          }}
        />
        <div className="pointer-events-none absolute inset-0 surface-grid opacity-[0.08]" />
        <div className="relative z-10 space-y-8">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-3xl space-y-5">
              <Badge variant="highlight" className="w-fit">
                {preset.name}
              </Badge>
              <div className="space-y-3">
                <p className="section-kicker text-primary-foreground/70">Creator profile</p>
                <div>
                  <h2 className="font-display text-4xl font-semibold leading-none text-white sm:text-5xl lg:text-6xl">
                    {kit.creatorName}
                  </h2>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-white/60">
                    {kit.handle} • {kit.location}
                  </p>
                </div>
                <p className="max-w-2xl text-lg leading-relaxed text-white/78">{kit.headline}</p>
                <p className="max-w-2xl text-sm leading-7 text-white/62">{kit.bio}</p>
              </div>
              <div className="flex flex-wrap gap-3 text-white/80">
                <AudiencePill icon={<Globe2 className="size-4" />} label={kit.niche} />
                <AudiencePill
                  icon={<TrendingUp className="size-4" />}
                  label={`${kit.audience.growthRate}% 6-month growth`}
                />
                <AudiencePill
                  icon={<Mail className="size-4" />}
                  label={`${formatCompactNumber(kit.audience.newsletterSubscribers)} newsletter`}
                />
              </div>
            </div>
            <div className="glass-panel max-w-sm rounded-[28px] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Sponsor fit</p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {kit.callToAction}
              </p>
              <Separator className="my-5 bg-white/10" />
              <div className="space-y-3 text-sm text-white/72">
                {kit.audience.topCountries.map((country) => (
                  <div key={country} className="flex items-center justify-between">
                    <span>{country}</span>
                    <ArrowUpRight className="size-4 text-white/45" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              label="Total audience"
              value={formatCompactNumber(kit.audience.totalFollowers)}
              detail="Cross-platform followers"
            />
            <MetricCard
              label="Monthly views"
              value={formatCompactNumber(kit.audience.monthlyViews)}
              detail="Average rolling 30 days"
            />
            <MetricCard
              label="Engagement"
              value={`${kit.audience.engagementRate}%`}
              detail="Weighted performance rate"
            />
            <MetricCard
              label="Lead channel"
              value={kit.audience.platforms[0]?.name ?? "Instagram"}
              detail={kit.audience.platforms[0]?.highlight ?? "Short-form content"}
            />
          </div>

          <div className={cn("grid gap-5", isCompact ? "xl:grid-cols-1" : "xl:grid-cols-[1.3fr_1fr]")}>
            <ChartCard
              title="Momentum snapshot"
              description="Reach and engagement trend over the last six campaign beats."
              className="min-h-[320px]"
            >
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={kit.audience.growthSeries}>
                  <defs>
                    <linearGradient id={`reachGradient-${kit.slug}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={preset.chartStops[0]} stopOpacity={0.78} />
                      <stop offset="100%" stopColor={preset.chartStops[1]} stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.55)" tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ stroke: "rgba(255,255,255,0.14)" }}
                    contentStyle={{
                      borderRadius: 18,
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(5,6,16,0.92)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
                    }}
                    formatter={(value, name) => [
                      typeof value === "number"
                        ? formatCompactNumber(value)
                        : String(value ?? "-"),
                      name === "reach" ? "Reach" : "Engagements"
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="reach"
                    stroke={preset.chartStops[0]}
                    strokeWidth={3}
                    fill={`url(#reachGradient-${kit.slug})`}
                  />
                  <Area
                    type="monotone"
                    dataKey="engagements"
                    stroke={preset.chartStops[1]}
                    strokeWidth={2.4}
                    fill="transparent"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>

            <ChartCard
              title="Audience age mix"
              description="Ideal for brands pitching 25-34 heavy conversions."
              className="min-h-[320px]"
            >
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={kit.audience.ageBreakdown}>
                  <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                  <XAxis dataKey="label" stroke="rgba(255,255,255,0.55)" tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.04)" }}
                    contentStyle={{
                      borderRadius: 18,
                      border: "1px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(5,6,16,0.92)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.35)"
                    }}
                    formatter={(value) => [`${value ?? "-"}%`, "Audience share"]}
                  />
                  <Bar dataKey="value" fill={preset.chartStops[0]} radius={[14, 14, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          <div className="space-y-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="section-kicker text-white/55">Sponsor packages</p>
                <h3 className="font-display text-3xl font-semibold text-white">Commercial packages</h3>
              </div>
              {!isCompact && (
                <p className="max-w-xl text-right text-sm text-white/60">
                  Clear scope, premium pricing, and a deck structure that helps sponsors buy without a call full of guesswork.
                </p>
              )}
            </div>
            <div className="grid gap-4 xl:grid-cols-3">
              {kit.sponsorPackages.map((pkg) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45 }}
                >
                  <Card
                    className={cn(
                      "h-full bg-black/20 text-white",
                      pkg.featured && "border-primary/40 shadow-[0_25px_80px_rgba(139,92,246,0.22)]"
                    )}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <CardTitle className="text-white">{pkg.name}</CardTitle>
                          <CardDescription className="text-white/60">{pkg.description}</CardDescription>
                        </div>
                        {pkg.featured ? <Badge variant="highlight">Featured</Badge> : null}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="text-3xl font-semibold text-white">{formatCurrency(pkg.price)}</div>
                      <ul className="space-y-3 text-sm text-white/74">
                        {pkg.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-start gap-3">
                            <BadgeCheck className="mt-0.5 size-4 text-white/70" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                      <Separator className="bg-white/10" />
                      <div className="text-sm uppercase tracking-[0.22em] text-white/50">
                        Turnaround • {pkg.turnaround}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {(hasPartners || (!isCompact && hasTestimonials)) && (
            <div className={cn("grid gap-5", isCompact ? "xl:grid-cols-1" : "xl:grid-cols-[0.95fr_1.05fr]")}>
              {hasPartners && (
                <Card className="bg-black/18 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Trusted by brand teams</CardTitle>
                    <CardDescription className="text-white/60">
                      Logos read like quick-fit signals during sponsor review.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    {kit.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-5"
                      >
                        <p className="font-display text-2xl font-semibold text-white">{partner.name}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/45">
                          {partner.label}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              {!isCompact && hasTestimonials && (
                <Card className="bg-black/18 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Client proof</CardTitle>
                    <CardDescription className="text-white/60">
                      Testimonial snippets keep the deck commercial, not just pretty.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    {kit.testimonials.map((testimonial) => (
                      <div
                        key={`${testimonial.company}-${testimonial.name}`}
                        className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                      >
                        <p className="text-sm leading-7 text-white/74">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="mt-4 text-sm text-white/55">
                          <p className="font-medium text-white">{testimonial.name}</p>
                          <p>
                            {testimonial.role} • {testimonial.company}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {isPresentation ? (
            <div className="grid gap-4 rounded-[28px] border border-white/10 bg-black/25 p-5 md:grid-cols-3">
              <PresentationCue
                label="Sponsor angle"
                body="Deck centers high-intent audience proof and premium deliverables."
              />
              <PresentationCue
                label="Best use"
                body="Open this view during live calls, share-screen walkthroughs, and approval reviews."
              />
              <PresentationCue
                label="Next step"
                body="Pair with the Builder route to update numbers before each sponsor conversation."
              />
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

function AudiencePill({
  icon,
  label
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/72 backdrop-blur-xl">
      {icon}
      <span>{label}</span>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className={metricCardClassName}>
      <p className="text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
      <div className="mt-3 font-display text-3xl font-semibold text-white">{value}</div>
      <p className="mt-2 text-sm text-white/58">{detail}</p>
    </div>
  );
}

function ChartCard({
  title,
  description,
  className,
  children
}: {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className={cn("bg-black/20 text-white", className)}>
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-white/60">{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

function PresentationCue({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</p>
      <p className="mt-3 text-sm leading-7 text-white/72">{body}</p>
    </div>
  );
}
