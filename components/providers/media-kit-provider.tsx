"use client";

import * as React from "react";

import {
  bundledExampleOptions,
  cloneKit,
  defaultCreatorKit,
  sampleCreatorKits
} from "@/lib/demo-kits";
import type { CreatorKit, TemplateId } from "@/lib/types";

type MediaKitContextValue = {
  kit: CreatorKit;
  hydrated: boolean;
  exampleOptions: typeof bundledExampleOptions;
  setKit: React.Dispatch<React.SetStateAction<CreatorKit>>;
  resetToExample: (slug: string) => void;
  setTemplate: (template: TemplateId) => void;
};

const STORAGE_KEY = "creatordeck.active-kit";

const MediaKitContext = React.createContext<MediaKitContextValue | null>(null);

export function MediaKitProvider({ children }: { children: React.ReactNode }) {
  const [kit, setKit] = React.useState<CreatorKit>(cloneKit(defaultCreatorKit));
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);

    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue) as CreatorKit;
        setKit(parsedValue);
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }

    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(kit));
  }, [hydrated, kit]);

  const resetToExample = (slug: string) => {
    const nextKit = sampleCreatorKits.find((example) => example.slug === slug);

    if (!nextKit) {
      return;
    }

    setKit(cloneKit(nextKit));
  };

  const setTemplate = (template: TemplateId) => {
    setKit((currentKit) => ({
      ...currentKit,
      template
    }));
  };

  return (
    <MediaKitContext.Provider
      value={{
        kit,
        hydrated,
        exampleOptions: bundledExampleOptions,
        setKit,
        resetToExample,
        setTemplate
      }}
    >
      {children}
    </MediaKitContext.Provider>
  );
}

export function useMediaKit() {
  const context = React.useContext(MediaKitContext);

  if (!context) {
    throw new Error("useMediaKit must be used within a MediaKitProvider.");
  }

  return context;
}
