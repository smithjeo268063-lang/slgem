"use client";

import Image from "next/image";
import Link from "next/link";
import type { ApiRecord } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";

export default function MissionUpdateList() {
  const { data: updates, error, isLoading } =
    useApiData<ApiRecord[]>("/missions/updates");

  return (
    <section className="mt-8">
      {error && (
        <p role="alert" className="text-red-700">
          Mission updates could not be loaded: {error}
        </p>
      )}
      {isLoading && (
        <SkeletonStatus label="Loading mission updates" className="mt-6 grid gap-8">
          {[0, 1].map((item) => (
            <div
              key={item}
              className="grid gap-5 border-b border-black/30 pb-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8"
            >
              <Skeleton className="h-[220px] w-full rounded-2xl sm:h-[260px]" />
              <div className="space-y-4 py-2">
                <Skeleton className="h-8 w-3/4 rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-5/6 rounded-md" />
                <Skeleton className="h-4 w-1/3 rounded-md" />
              </div>
            </div>
          ))}
        </SkeletonStatus>
      )}
      <div className="mt-6 grid gap-8">
        {(updates ?? []).map((update, index) => {
          const title = getRecordTitle(update);
          const image = getRecordImage(update);
          return (
            <article
              key={update?.id ?? update?.slug ?? index}
              className="grid gap-5 border-b border-black/30 pb-8 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] sm:gap-8"
            >
              {image && (
                <div className="relative h-[220px] overflow-hidden rounded-2xl sm:h-[260px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="text-2xl font-bold">{title}</h2>
                {update?.description && (
                  <p className="mt-3 whitespace-pre-line leading-relaxed">
                    {update.description}
                  </p>
                )}
                <Link
                  href={`/mission-update/${update?.slug ?? ""}`}
                  className="mt-5 inline-flex font-bold uppercase"
                >
                  Read update →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
