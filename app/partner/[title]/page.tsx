import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiRecord } from "@/lib/api";
import VisionarySection from "@/components/vision-section";

export const instant = false;

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  let partner: ApiRecord;
  try {
    partner = await apiGet<ApiRecord>(`/partners/${encodeURIComponent(title)}`);
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();

    console.error(
      `[Partner detail] Unable to load partner "${title}":`,
      error,
    );

    return (
      <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 lg:px-20 lg:pt-32">
        <Link
          href="/partner"
          className="text-sm font-bold uppercase text-[#4C4C4C] hover:text-black"
        >
          Back to partners
        </Link>
        <section
          role="alert"
          className="mt-8 rounded-[24px] border border-red-200 bg-red-50 p-6 text-red-900"
        >
          <h1 className="text-2xl font-bold">Partner details unavailable</h1>
          <p className="mt-2">
            We couldn&apos;t load these details right now. Please try again in a
            moment.
          </p>
        </section>
        <VisionarySection />
      </main>
    );
  }

  const partnerTitle = getRecordTitle(partner);
  const image = getRecordImage(partner);

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 lg:px-20 lg:pt-32">
      <Link
        href="/partner"
        className="text-sm font-bold uppercase text-[#4C4C4C] hover:text-black"
      >
        Back to partners
      </Link>
      <h1 className="mt-8 text-[36px] font-bold leading-tight sm:text-[56px] lg:text-[76px]">
        {partnerTitle}
      </h1>
      {image && (
        <div className="relative mt-8 h-[240px] overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[560px]">
          <Image
            src={image}
            alt={partnerTitle}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      {partner?.description && (
        <p className="mt-8 max-w-5xl whitespace-pre-line text-[18px] leading-relaxed sm:text-[22px]">
          {partner.description}
        </p>
      )}

      <VisionarySection />
    </main>
  );
}
