import { describe, expect, it } from "vitest";

import {
  cloneKit,
  defaultCreatorKit,
  getExampleKitBySlug,
  getTemplatePreset,
  withTemplate
} from "@/lib/demo-kits";

describe("demo kit helpers", () => {
  it("returns bundled examples by slug and handles invalid slugs", () => {
    expect(getExampleKitBySlug("maya-vale")?.creatorName).toBe("Maya Vale");
    expect(getExampleKitBySlug("missing-slug")).toBeUndefined();
  });

  it("clones kits deeply", () => {
    const clonedKit = cloneKit(defaultCreatorKit);

    clonedKit.audience.platforms[0]!.name = "Changed Platform";

    expect(defaultCreatorKit.audience.platforms[0]!.name).not.toBe("Changed Platform");
  });

  it("updates the template without mutating the original kit", () => {
    const updatedKit = withTemplate(defaultCreatorKit, "editorial");

    expect(updatedKit.template).toBe("editorial");
    expect(defaultCreatorKit.template).not.toBe("editorial");
    expect(getTemplatePreset(updatedKit.template).name).toBe("Editorial Silk");
  });
});
