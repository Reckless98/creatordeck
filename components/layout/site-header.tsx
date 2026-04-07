"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Overview" },
  { href: "/builder", label: "Builder" },
  { href: "/preview", label: "Preview" },
  { href: "/templates", label: "Templates" },
  { href: "/pricing", label: "Pricing" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-background/70 backdrop-blur-2xl">
      <div className="container flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 shadow-halo">
              <Sparkles className="size-5 text-primary" />
            </div>
            <div className="space-y-0.5">
              <div className="font-display text-xl font-semibold tracking-[0.12em] text-foreground uppercase">
                CreatorDeck
              </div>
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
                Sponsor-ready media kit builder
              </p>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href && "bg-white/8 text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/builder">Open Builder</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
