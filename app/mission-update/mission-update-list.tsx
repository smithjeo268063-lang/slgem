"use client";

import Image from "next/image";
import Link from "next/link";
import type { ApiRecord } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";

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
      {isLoading && <p role="status">Loading mission updates...</p>}
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
