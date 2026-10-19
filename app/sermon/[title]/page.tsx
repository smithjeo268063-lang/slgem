import { Suspense } from "react";
import { notFound } from "next/navigation";
import MediaDetail from "@/app/sermon/media-sermon-detail";
import { mediaItemSlug, teachingSermons } from "@/app/media/media-data";

export const instant = false;

export function generateStaticParams() {
  return teachingSermons.map((sermon) => ({ title: mediaItemSlug(sermon) }));
}

async function SermonContent({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const item = teachingSermons.find(
    (sermon) => mediaItemSlug(sermon) === title,
  );

  if (!item) {
    notFound();
  }

  return <MediaDetail item={item} category="Teaching Sermon" />;
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
