import { z } from "zod";

import type { CreatorKit, SponsorPackage, TemplateId } from "@/lib/types";
import { splitTextareaLines } from "@/lib/utils";

const sponsorPackageSchema = z.object({
  name: z.string().min(2),
  price: z.number().min(500),
  description: z.string().min(12),
  deliverablesText: z.string().min(10),
  turnaround: z.string().min(3),
  featured: z.boolean()
});

export const builderFormSchema = z.object({
  template: z.enum(["aurora", "obsidian", "editorial"]),
  creatorName: z.string().min(2),
  handle: z.string().min(2),
  niche: z.string().min(4),
  headline: z.string().min(12),
  bio: z.string().min(40).max(280),
  location: z.string().min(2),
  callToAction: z.string().min(10),
  totalFollowers: z.number().min(1000),
  monthlyViews: z.number().min(1000),
  engagementRate: z.number().min(0.1).max(100),
  growthRate: z.number().min(0).max(100),
  newsletterSubscribers: z.number().min(0),
  topCountries: z.array(z.string().min(2)).length(3),
  ageBreakdown: z
    .array(
      z.object({
        label: z.string().min(2),
        value: z.number().min(0).max(100)
      })
    )
    .length(4),
  platforms: z
    .array(
      z.object({
        name: z.string().min(2),
        followers: z.number().min(0),
        engagement: z.number().min(0),
        highlight: z.string().min(3)
      })
    )
    .length(3),
  sponsorPackages: z.array(sponsorPackageSchema).length(3),
  partners: z
    .array(
      z.object({
        name: z.string().min(2),
        label: z.string().min(2)
      })
    )
    .length(4),
  testimonials: z
    .array(
      z.object({
        quote: z.string().min(20),
        name: z.string().min(2),
        role: z.string().min(2),
        company: z.string().min(2)
      })
    )
    .length(2)
});

export type BuilderFormValues = z.infer<typeof builderFormSchema>;

const mapPackageToFormValue = (pkg: SponsorPackage) => ({
  ...pkg,
  deliverablesText: pkg.deliverables.join("\n")
});

export const mapKitToFormValues = (kit: CreatorKit): BuilderFormValues => ({
  template: kit.template,
  creatorName: kit.creatorName,
  handle: kit.handle,
  niche: kit.niche,
  headline: kit.headline,
  bio: kit.bio,
  location: kit.location,
  callToAction: kit.callToAction,
  totalFollowers: kit.audience.totalFollowers,
  monthlyViews: kit.audience.monthlyViews,
  engagementRate: kit.audience.engagementRate,
  growthRate: kit.audience.growthRate,
  newsletterSubscribers: kit.audience.newsletterSubscribers,
  topCountries: [...kit.audience.topCountries],
  ageBreakdown: kit.audience.ageBreakdown.map((segment) => ({ ...segment })),
  platforms: kit.audience.platforms.map((platform) => ({ ...platform })),
  sponsorPackages: kit.sponsorPackages.map(mapPackageToFormValue),
  partners: kit.partners.map((partner) => ({ ...partner })),
  testimonials: kit.testimonials.map((testimonial) => ({ ...testimonial }))
});

export const mapFormValuesToKit = (
  values: BuilderFormValues,
  previousKit: CreatorKit
): CreatorKit => ({
  ...previousKit,
  creatorName: values.creatorName,
  handle: values.handle,
  niche: values.niche,
  headline: values.headline,
  bio: values.bio,
  location: values.location,
  callToAction: values.callToAction,
  template: values.template as TemplateId,
  audience: {
    ...previousKit.audience,
    totalFollowers: values.totalFollowers,
    monthlyViews: values.monthlyViews,
    engagementRate: values.engagementRate,
    growthRate: values.growthRate,
    newsletterSubscribers: values.newsletterSubscribers,
    topCountries: [...values.topCountries],
    ageBreakdown: values.ageBreakdown.map((segment) => ({ ...segment })),
    platforms: values.platforms.map((platform) => ({ ...platform }))
  },
  sponsorPackages: values.sponsorPackages.map((pkg) => ({
    ...pkg,
    deliverables: splitTextareaLines(pkg.deliverablesText)
  })),
  partners: values.partners.map((partner) => ({ ...partner })),
  testimonials: values.testimonials.map((testimonial) => ({ ...testimonial }))
});
