export default function ExampleLoading() {
  return (
    <div className="container space-y-8 py-14">
      <div className="space-y-4">
        <div className="h-6 w-44 animate-pulse rounded-full bg-white/8" />
        <div className="h-14 w-full max-w-xl animate-pulse rounded-[28px] bg-white/8" />
        <div className="h-6 w-full max-w-2xl animate-pulse rounded-[18px] bg-white/8" />
      </div>
      <div className="min-h-[720px] animate-pulse rounded-[36px] bg-white/8" />
    </div>
  );
}
