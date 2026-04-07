import type { TemplatePreset } from "@/lib/types";

export const templatePresets: TemplatePreset[] = [
  {
    id: "aurora",
    name: "Aurora Pulse",
    mood: "Glossy campaign deck",
    description:
      "High-contrast gradients, cool-spectrum highlights, and confident motion for creators pitching premium launches.",
    heroGradient:
      "from-slate-950 via-[rgba(43,55,136,0.95)] to-[rgba(6,12,36,1)]",
    cardClassName: "border-white/10 bg-white/6 backdrop-blur-2xl",
    accent: "#8b5cf6",
    accentSoft: "#67e8f9",
    chartStops: ["#8b5cf6", "#67e8f9"]
  },
  {
    id: "obsidian",
    name: "Obsidian Stage",
    mood: "Luxury keynote energy",
    description:
      "Sleek charcoal surfaces with warm gold accents for creator collectives, agencies, and executive sponsor meetings.",
    heroGradient:
      "from-stone-950 via-[rgba(58,44,25,0.92)] to-[rgba(10,8,6,1)]",
    cardClassName: "border-amber-200/10 bg-black/35 backdrop-blur-2xl",
    accent: "#fbbf24",
    accentSoft: "#fde68a",
    chartStops: ["#fbbf24", "#fde68a"]
  },
  {
    id: "editorial",
    name: "Editorial Silk",
    mood: "Magazine-grade storytelling",
    description:
      "Soft ivory overlays, serif-forward contrast, and refined rose-gold cues for beauty, lifestyle, and fashion media kits.",
    heroGradient:
      "from-[#1b1018] via-[rgba(66,28,49,0.95)] to-[rgba(22,11,18,1)]",
    cardClassName: "border-rose-100/12 bg-white/8 backdrop-blur-2xl",
    accent: "#fb7185",
    accentSoft: "#f9a8d4",
    chartStops: ["#fb7185", "#f9a8d4"]
  }
];

export const templatePresetMap = Object.fromEntries(
  templatePresets.map((template) => [template.id, template])
) as Record<TemplatePreset["id"], TemplatePreset>;
