function LoadingBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-[28px] bg-white/8 ${className}`} />;
}

export default function Loading() {
  return (
    <div className="container space-y-8 py-14">
      <div className="space-y-4">
        <LoadingBlock className="h-6 w-40" />
        <LoadingBlock className="h-14 w-full max-w-3xl" />
        <LoadingBlock className="h-6 w-full max-w-2xl" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.4fr_0.6fr]">
        <div className="space-y-4">
          <LoadingBlock className="h-32 w-full" />
          <LoadingBlock className="h-44 w-full" />
          <LoadingBlock className="h-36 w-full" />
        </div>
        <LoadingBlock className="min-h-[720px] w-full" />
      </div>
    </div>
  );
}
