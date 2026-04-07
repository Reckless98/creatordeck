import { templatePresetMap, templatePresets } from "@/lib/template-presets";
import type { CreatorKit, TemplateId } from "@/lib/types";

export const sampleCreatorKits: CreatorKit[] = [
  {
    slug: "maya-vale",
    creatorName: "Maya Vale",
    handle: "@mayavale.studio",
    niche: "Travel, boutique hospitality, and luxury lifestyle",
    headline: "Cinematic destination storytelling that turns aspirational trips into booked itineraries.",
    bio: "Maya blends editorial travel filmmaking, hotel storytelling, and itinerary-led conversion campaigns for brands that want polished reach with tangible booking intent.",
    location: "Singapore + global campaigns",
    callToAction: "Available for launch partnerships, hosted stays, and evergreen ambassador retainers.",
    audience: {
      totalFollowers: 428000,
      monthlyViews: 2100000,
      engagementRate: 5.8,
      growthRate: 18,
      newsletterSubscribers: 18200,
      topCountries: ["Singapore", "Australia", "United States"],
      ageBreakdown: [
        { label: "18-24", value: 18 },
        { label: "25-34", value: 42 },
        { label: "35-44", value: 27 },
        { label: "45+", value: 13 }
      ],
      growthSeries: [
        { month: "Jan", reach: 420000, engagements: 32000 },
        { month: "Feb", reach: 510000, engagements: 36000 },
        { month: "Mar", reach: 560000, engagements: 41000 },
        { month: "Apr", reach: 640000, engagements: 47000 },
        { month: "May", reach: 720000, engagements: 50000 },
        { month: "Jun", reach: 810000, engagements: 55000 }
      ],
      platforms: [
        {
          name: "Instagram",
          followers: 196000,
          engagement: 6.2,
          highlight: "Hotel launch reels"
        },
        {
          name: "TikTok",
          followers: 154000,
          engagement: 7.1,
          highlight: "Trip diaries"
        },
        {
          name: "YouTube",
          followers: 78000,
          engagement: 5.4,
          highlight: "Itinerary deep dives"
        }
      ]
    },
    sponsorPackages: [
      {
        name: "Launch Spotlight",
        price: 6500,
        description: "Perfect for seasonal drops, new property openings, and itinerary-led destination launches.",
        deliverables: ["1 hero reel", "6 story frames", "usage rights 30 days"],
        turnaround: "7 days",
        featured: true
      },
      {
        name: "Editorial Weekend",
        price: 9800,
        description: "Multi-touch activation with story coverage, social cutdowns, and a long-form recap that keeps working after the trip.",
        deliverables: ["2 reels", "1 carousel", "12 story frames", "photo selects"],
        turnaround: "10 days",
        featured: false
      },
      {
        name: "Ambassador Series",
        price: 18500,
        description: "Quarterly package for brands that want repeat visibility and familiarity with a high-intent travel audience.",
        deliverables: ["3-month cadence", "4 reels", "2 guides", "whitelisting-ready edits"],
        turnaround: "Monthly flighting",
        featured: false
      }
    ],
    partners: [
      { name: "Aster Hotels", label: "Hospitality" },
      { name: "Northline Air", label: "Airline" },
      { name: "Soluna Resorts", label: "Resort Group" },
      { name: "Terra Luggage", label: "Travel Goods" }
    ],
    testimonials: [
      {
        quote:
          "Maya delivered the rare mix of premium brand polish and measurable click-through. Her campaign launch assets ended up driving our best hotel booking week of the quarter.",
        name: "Elena Torres",
        role: "Brand Director",
        company: "Aster Hotels"
      },
      {
        quote:
          "The media kit felt executive-ready before the kickoff even started. It made approval inside our team dramatically faster.",
        name: "Ravi Menon",
        role: "Partnerships Lead",
        company: "Terra Luggage"
      }
    ],
    template: "aurora"
  },
  {
    slug: "caden-rowe",
    creatorName: "Caden Rowe",
    handle: "@cadenbuilds",
    niche: "Tech reviews, creator workflows, and studio productivity",
    headline: "Turning product launches into clean, conversion-heavy explainer content for modern creative tools.",
    bio: "Caden produces crisp hardware and software breakdowns with a distinctly premium tone, built for brands that care about clarity, trust, and repeat referral traffic.",
    location: "London studio",
    callToAction: "Open for creator-tech launches, software rollouts, and cross-channel education packages.",
    audience: {
      totalFollowers: 312000,
      monthlyViews: 1750000,
      engagementRate: 4.9,
      growthRate: 15,
      newsletterSubscribers: 26400,
      topCountries: ["United Kingdom", "United States", "Germany"],
      ageBreakdown: [
        { label: "18-24", value: 22 },
        { label: "25-34", value: 47 },
        { label: "35-44", value: 23 },
        { label: "45+", value: 8 }
      ],
      growthSeries: [
        { month: "Jan", reach: 310000, engagements: 19000 },
        { month: "Feb", reach: 360000, engagements: 23000 },
        { month: "Mar", reach: 420000, engagements: 27000 },
        { month: "Apr", reach: 510000, engagements: 30000 },
        { month: "May", reach: 620000, engagements: 34000 },
        { month: "Jun", reach: 690000, engagements: 38000 }
      ],
      platforms: [
        {
          name: "YouTube",
          followers: 142000,
          engagement: 5.8,
          highlight: "Tool breakdowns"
        },
        {
          name: "Instagram",
          followers: 96000,
          engagement: 4.4,
          highlight: "Studio setups"
        },
        {
          name: "LinkedIn",
          followers: 74000,
          engagement: 3.9,
          highlight: "B2B creator notes"
        }
      ]
    },
    sponsorPackages: [
      {
        name: "Feature Drop",
        price: 5200,
        description: "Fast-moving product explainer package tailored for feature launches and pricing announcements.",
        deliverables: ["1 deep-dive video", "4 short cutdowns", "launch stills"],
        turnaround: "5 days",
        featured: true
      },
      {
        name: "Studio Review Sprint",
        price: 8800,
        description: "Cross-channel review package with long-form and short-form coverage for tools that need education and trust.",
        deliverables: ["1 review video", "2 shorts", "email feature", "usage rights 45 days"],
        turnaround: "9 days",
        featured: false
      },
      {
        name: "Launch Quarter",
        price: 16200,
        description: "Quarterly product education presence for SaaS and hardware brands that want repeat touchpoints.",
        deliverables: ["3 campaign waves", "6 shorts", "partner reporting", "AMA session"],
        turnaround: "Quarterly runway",
        featured: false
      }
    ],
    partners: [
      { name: "Formline", label: "SaaS" },
      { name: "Luma Audio", label: "Hardware" },
      { name: "Pilot Desk", label: "Workflow" },
      { name: "Slate Capture", label: "Camera Tech" }
    ],
    testimonials: [
      {
        quote:
          "Caden’s media kit instantly explained why he commands premium rates. Every touchpoint felt clear, composed, and credible.",
        name: "Hanna Weiss",
        role: "Growth Marketing Lead",
        company: "Formline"
      },
      {
        quote:
          "His audience questions during launch week were exactly the ones our sales team needed answered. That feedback loop was incredibly valuable.",
        name: "Joel Park",
        role: "Partnerships Manager",
        company: "Luma Audio"
      }
    ],
    template: "obsidian"
  },
  {
    slug: "sienna-kim",
    creatorName: "Sienna Kim",
    handle: "@siennasees",
    niche: "Beauty, fashion, and cultural trend storytelling",
    headline: "Magazine-level creative for brands that want warmth, taste, and sponsor decks that feel couture.",
    bio: "Sienna builds high-conversion beauty and style narratives with a soft editorial lens, pairing aspirational visuals with community trust and polished presentation.",
    location: "Seoul + New York",
    callToAction: "Best fit for beauty launches, capsule collections, and long-tail ambassador partnerships.",
    audience: {
      totalFollowers: 537000,
      monthlyViews: 2640000,
      engagementRate: 6.4,
      growthRate: 21,
      newsletterSubscribers: 21800,
      topCountries: ["South Korea", "United States", "Japan"],
      ageBreakdown: [
        { label: "18-24", value: 31 },
        { label: "25-34", value: 46 },
        { label: "35-44", value: 16 },
        { label: "45+", value: 7 }
      ],
      growthSeries: [
        { month: "Jan", reach: 500000, engagements: 38000 },
        { month: "Feb", reach: 570000, engagements: 41000 },
        { month: "Mar", reach: 640000, engagements: 45000 },
        { month: "Apr", reach: 760000, engagements: 52000 },
        { month: "May", reach: 840000, engagements: 58000 },
        { month: "Jun", reach: 930000, engagements: 61000 }
      ],
      platforms: [
        {
          name: "Instagram",
          followers: 248000,
          engagement: 6.9,
          highlight: "Beauty editorials"
        },
        {
          name: "TikTok",
          followers: 201000,
          engagement: 7.5,
          highlight: "Routine breakdowns"
        },
        {
          name: "Pinterest",
          followers: 88000,
          engagement: 4.7,
          highlight: "Trend moodboards"
        }
      ]
    },
    sponsorPackages: [
      {
        name: "Editorial Launch",
        price: 7100,
        description: "Short-form campaign package for new collections, palettes, and launch-week buzz.",
        deliverables: ["1 hero reel", "1 carousel", "8 story frames"],
        turnaround: "6 days",
        featured: true
      },
      {
        name: "Beauty Story Arc",
        price: 10900,
        description: "Narrative-led coverage with swatches, day-in-the-life integration, and performance recap.",
        deliverables: ["2 reels", "1 tutorial", "photo selects", "usage rights 30 days"],
        turnaround: "8 days",
        featured: false
      },
      {
        name: "Signature Ambassador",
        price: 19800,
        description: "Quarterly brand presence designed for beauty labels that want sustained narrative consistency.",
        deliverables: ["4 campaign beats", "whitelisting-ready edits", "monthly reporting", "event appearance"],
        turnaround: "Quarter-long runway",
        featured: false
      }
    ],
    partners: [
      { name: "Velour Skin", label: "Beauty" },
      { name: "Ami Atelier", label: "Fashion" },
      { name: "Lune Labs", label: "Skincare" },
      { name: "Maison Thread", label: "Accessories" }
    ],
    testimonials: [
      {
        quote:
          "Sienna’s kit looked like it came out of a fashion publication. It made sponsorship approval painless because everything was already merchandised beautifully.",
        name: "Camille Wong",
        role: "Campaign Manager",
        company: "Velour Skin"
      },
      {
        quote:
          "We appreciated how clearly the audience story, partner fit, and deliverables were packaged. It felt premium without ever being vague.",
        name: "Aiko Tan",
        role: "Partnership Director",
        company: "Maison Thread"
      }
    ],
    template: "editorial"
  }
];

export const defaultCreatorKit = sampleCreatorKits[0];

export const cloneKit = (kit: CreatorKit): CreatorKit =>
  JSON.parse(JSON.stringify(kit)) as CreatorKit;

export const getExampleKitBySlug = (slug: string) =>
  sampleCreatorKits.find((kit) => kit.slug === slug);

export const withTemplate = (kit: CreatorKit, template: TemplateId): CreatorKit => ({
  ...kit,
  template
});

export const getTemplatePreset = (template: TemplateId) =>
  templatePresetMap[template] ?? templatePresetMap.aurora;

export const bundledExampleOptions = sampleCreatorKits.map((kit) => ({
  slug: kit.slug,
  creatorName: kit.creatorName,
  niche: kit.niche,
  template: getTemplatePreset(kit.template).name
}));

export const featuredTemplates = templatePresets;
