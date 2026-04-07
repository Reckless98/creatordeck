import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center py-16">
      <Card className="max-w-2xl bg-white/6">
        <CardHeader>
          <p className="section-kicker">Lost the deck?</p>
          <CardTitle>That example kit couldn&apos;t be found.</CardTitle>
          <CardDescription>
            The route exists, but the creator slug does not. Head back to the showcase and pick a bundled example.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button asChild>
            <Link href="/examples/maya-vale">Open Sample</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">Return Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
