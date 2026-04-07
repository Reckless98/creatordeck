import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-foreground">CreatorDeck</p>
          <p>Premium media kits that make creators easier to sponsor and agencies easier to close.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/builder" className="hover:text-foreground">
            Builder
          </Link>
          <Link href="/templates" className="hover:text-foreground">
            Templates
          </Link>
          <Link href="/pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/share" className="hover:text-foreground">
            Share Mode
          </Link>
        </div>
      </div>
    </footer>
  );
}
