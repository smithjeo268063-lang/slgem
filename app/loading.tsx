import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";

export default function Loading() {
  return (
    <main className="mx-auto min-h-[70vh] w-full max-w-[1440px] px-5 py-12 sm:px-8 lg:px-20">
      <SkeletonStatus label="Loading page" className="space-y-10">
        <Skeleton className="h-10 w-2/3 rounded-lg sm:h-16" />
        <Skeleton className="h-[220px] w-full rounded-[24px] sm:h-[320px] sm:rounded-[36px]" />
        <div className="space-y-6">
          {[0, 1].map((item) => (
            <div
              key={item}
              className="grid gap-5 border-b border-black/15 pb-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8"
            >
              <Skeleton className="h-[220px] w-full rounded-2xl sm:h-[260px]" />
              <div className="space-y-4 py-2">
                <Skeleton className="h-8 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-2/3 rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </SkeletonStatus>
    </main>
  );
}
