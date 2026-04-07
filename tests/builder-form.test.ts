import { describe, expect, it } from "vitest";

import {
  builderFieldArrayLimits,
  builderFormSchema,
  mapFormValuesToKit,
  mapKitToFormValues
} from "@/lib/builder-form";
import { cloneKit, defaultCreatorKit } from "@/lib/demo-kits";

describe("builder form helpers", () => {
  it("maps a kit into editable form values", () => {
    const values = mapKitToFormValues(defaultCreatorKit);

    expect(values.creatorName).toBe(defaultCreatorKit.creatorName);
    expect(values.sponsorPackages[0]?.deliverablesText).toBe(
      defaultCreatorKit.sponsorPackages[0]?.deliverables.join("\n")
    );
    expect(values.platforms).toHaveLength(defaultCreatorKit.audience.platforms.length);
  });

  it("maps form values back into a creator kit and trims deliverables", () => {
    const previousKit = cloneKit(defaultCreatorKit);
    const values = mapKitToFormValues(previousKit);

    values.creatorName = "Updated Creator";
    values.sponsorPackages[0] = {
      ...values.sponsorPackages[0],
      deliverablesText: "1 hero reel\n\n  3 story frames  \nusage rights 30 days"
    };

    const nextKit = mapFormValuesToKit(values, previousKit);

    expect(nextKit.slug).toBe(previousKit.slug);
    expect(nextKit.creatorName).toBe("Updated Creator");
    expect(nextKit.sponsorPackages[0]?.deliverables).toEqual([
      "1 hero reel",
      "3 story frames",
      "usage rights 30 days"
    ]);
    expect(nextKit.audience.growthSeries).toEqual(previousKit.audience.growthSeries);
  });

  it("enforces the configured array limits", () => {
    const values = mapKitToFormValues(defaultCreatorKit);
    const withoutPackages = {
      ...values,
      sponsorPackages: []
    };
    const tooManyPartners = {
      ...values,
      partners: Array.from(
        { length: builderFieldArrayLimits.partners.max + 1 },
        (_, index) => ({
          name: `Partner ${index + 1}`,
          label: "Brand"
        })
      )
    };

    expect(builderFormSchema.safeParse(values).success).toBe(true);
    expect(builderFormSchema.safeParse(withoutPackages).success).toBe(false);
    expect(builderFormSchema.safeParse(tooManyPartners).success).toBe(false);
  });
});
