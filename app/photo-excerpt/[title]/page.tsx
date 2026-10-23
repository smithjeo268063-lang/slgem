import Image from "next/image";
import { notFound } from "next/navigation";
import { apiGet, ApiError } from "@/lib/api";

export const instant = false;

type MissionGallery = {
  id?: number;
  image_urls?: string[];
  mission?: { id?: number; title?: string; image?: string };
};

type EventGallery = {
  id?: number;
  image_urls?: string[];
  event?: { id?: number; title?: string; image?: string };
};

type MissionGalleryResponse = MissionGallery[];
type EventGalleryDetail = {
  title?: string;
  gallery?: EventGallery[];
};
type EventGalleryResponse = EventGallery[] | EventGalleryDetail;

export default async function PhotoExcerptPage({
  params,
  searchParams,
}: {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ gallery?: string }>;
}) {
  const [{ title: slug }, query] = await Promise.all([params, searchParams]);
  const galleryType = query.gallery === "missions" ? "missions" : "events";

  let title = "";
  let heroImage = "";
  let photos: string[] = [];

  try {
    if (galleryType === "missions") {
      const galleries = await apiGet<MissionGalleryResponse>(
        `/gallery/missions/${encodeURIComponent(slug)}`,
      );
      const gallery = galleries?.[0];
      title = gallery?.mission?.title ?? "";
      photos = gallery?.image_urls ?? [];
      heroImage = gallery?.mission?.image ?? photos[0] ?? "";
    } else {
      const response = await apiGet<EventGalleryResponse>(
        `/gallery/events/${encodeURIComponent(slug)}`,
      );
      if (Array.isArray(response)) {
        const gallery = response[0];
        title = gallery?.event?.title ?? "";
        photos = gallery?.image_urls ?? [];
        heroImage = gallery?.event?.image ?? photos[0] ?? "";
      } else {
        title = response?.title ?? "";
        const galleries = response?.gallery ?? [];
        photos = galleries.flatMap((entry) => entry?.image_urls ?? []);
        heroImage =
          galleries.find((entry) => entry?.event?.image)?.event?.image ??
          photos[0] ??
          "";
      }
    }
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }

  if (!title && photos.length === 0) notFound();

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 lg:px-20 lg:pt-32">
      {/* <Link
        href="/media"
        className="text-sm font-bold uppercase text-[#4C4C4C] hover:text-black"
      >
        Back to media
      </Link> */}
      <h1 className="mt-8 text-[36px] font-bold leading-tight sm:text-[56px] lg:text-[88px] lg: uppercase">
        {title} <br />
        photo excerpts
      </h1>

      {heroImage && (
        <div className="mt-6 h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[36px] lg:h-[330px] lg:rounded-[50px]">
          <Image
            src={heroImage}
            alt={`${title} gallery`}
            width={1920}
            height={1080}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {photos.length > 0 ? (
        <section
          aria-label={`${title} photos`}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {photos.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`${title} gallery photo ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </section>
      ) : (
        <p className="mt-10 rounded-2xl border border-[#e7e7ed] bg-white p-6 text-[#555766]">
          No photos are available in this gallery yet.
        </p>
      )}
    </main>
  );
}
