import { Suspense } from "react";
import { notFound } from "next/navigation";
import MediaDetail from "@/app/sermon/media-sermon-detail";
import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiTeaching } from "@/lib/api";

export const instant = false;

async function SermonContent({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  let item: ApiTeaching;
  try {
    item = await apiGet<ApiTeaching>(
      `/teachings/${encodeURIComponent(title)}`,
    );
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }

  return (
    <MediaDetail
      item={{
        id: item?.id ?? 0,
        slug: item?.slug,
        title: getRecordTitle(item),
        description: item?.description ?? "",
        image: getRecordImage(item) || "/images/home/sermon.jpg",
        embed_url: item?.embed_url,
      }}
    />
  );
}

export default function SermonPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[1440px] px-5 py-12 text-[18px] sm:px-8 lg:px-20">
          Loading teaching sermon...
        </main>
      }
    >
      <SermonContent params={params} />
    </Suspense>
  );
}
