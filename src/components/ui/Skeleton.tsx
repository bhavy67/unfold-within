interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-2xl bg-brand-200 ${className}`}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft">
      <Skeleton className="h-4 w-20 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

export function SkeletonArticleCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="h-4 w-16 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3" />
      <div className="mt-4 flex items-center gap-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  )
}

export function SkeletonGrid({ count = 6, children }: { count?: number; children?: React.ReactNode }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          {children || <SkeletonCard />}
        </div>
      ))}
    </>
  )
}