import { Suspense } from "react";
import { notFound } from "next/navigation";
import MediaDetail from "@/app/sermon/media-sermon-detail";
import { mediaItemSlug, photoExcerpts } from "@/app/media/media-data";
import MediaPhotoExcerpts from "../media-photo-excerpts";

export const instant = false;

export function generateStaticParams() {
  return photoExcerpts.map((item) => ({ title: mediaItemSlug(item) }));
}

async function PhotoExcerptContent({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const item = photoExcerpts.find(
    (excerpt) => mediaItemSlug(excerpt) === title,
  );

  if (!item) {
    notFound();
  }

  return <MediaPhotoExcerpts item={item} category="Photo Excerpt" />;
}

export default function PhotoExcerptPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[1440px] px-5 py-12 text-[18px] sm:px-8 lg:px-20">
          Loading photo excerpt...
        </main>
      }
    >
      <PhotoExcerptContent params={params} />
    </Suspense>
  );
}
