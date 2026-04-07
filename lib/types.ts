export type TemplateId = "aurora" | "obsidian" | "editorial";

export type AudienceSegment = {
  label: string;
  value: number;
};

export type GrowthPoint = {
  month: string;
  reach: number;
  engagements: number;
};

export type PlatformStat = {
  name: string;
  followers: number;
  engagement: number;
  highlight: string;
};

export type SponsorPackage = {
  name: string;
  price: number;
  description: string;
  deliverables: string[];
  turnaround: string;
  featured: boolean;
};

export type PartnerLogo = {
  name: string;
  label: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type CreatorKit = {
  slug: string;
  creatorName: string;
  handle: string;
  niche: string;
  headline: string;
  bio: string;
  location: string;
  callToAction: string;
  audience: {
    totalFollowers: number;
    monthlyViews: number;
    engagementRate: number;
    growthRate: number;
    newsletterSubscribers: number;
    topCountries: string[];
    ageBreakdown: AudienceSegment[];
    growthSeries: GrowthPoint[];
    platforms: PlatformStat[];
  };
  sponsorPackages: SponsorPackage[];
  partners: PartnerLogo[];
  testimonials: Testimonial[];
  template: TemplateId;
};

export type TemplatePreset = {
  id: TemplateId;
  name: string;
  mood: string;
  description: string;
  heroGradient: string;
  cardClassName: string;
  accent: string;
  accentSoft: string;
  chartStops: [string, string];
};
