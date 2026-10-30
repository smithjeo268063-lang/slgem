import type { ReactNode } from "react";

export function Skeleton({ className }: { className: string }) {
  return <div aria-hidden="true" className={`skeleton-shimmer ${className}`} />;
}

export function SkeletonStatus({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-label={label}
      aria-busy="true"
      className={className}
    >
      {children}
    </div>
  );
}
