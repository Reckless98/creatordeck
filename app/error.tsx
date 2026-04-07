"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container flex min-h-[70vh] items-center justify-center py-16">
      <Card className="w-full max-w-2xl bg-white/6">
        <CardHeader>
          <div className="mb-3 flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-black/15">
            <AlertTriangle className="size-5 text-primary" />
          </div>
          <CardTitle>Something went wrong</CardTitle>
          <CardDescription>
            The route failed to render. Try again, or refresh if the problem keeps showing up.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <p className="text-sm text-muted-foreground">
            {error.digest ? `Reference: ${error.digest}` : "No error reference was provided."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
