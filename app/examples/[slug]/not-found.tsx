import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExampleNotFound() {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center py-16">
      <Card className="w-full max-w-2xl bg-white/6">
        <CardHeader>
          <CardTitle>Example kit not found</CardTitle>
          <CardDescription>
            That example slug does not match one of the bundled kits in this repo.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/builder">Open builder</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/">Back to home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
