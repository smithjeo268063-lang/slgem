import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiRecord } from "@/lib/api";

export const instant = false;

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  let partner: ApiRecord;
  try {
    partner = await apiGet<ApiRecord>(
      `/partners/${encodeURIComponent(title)}`,
    );
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
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
    </main>
  );
}
