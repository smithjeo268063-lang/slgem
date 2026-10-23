import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiMission } from "@/lib/api";

export const instant = false;

export default async function MissionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let mission: ApiMission;
  try {
    mission = await apiGet<ApiMission>(
      `/missions/${encodeURIComponent(slug)}`,
    );
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }

  const title = getRecordTitle(mission);
  const image = getRecordImage(mission);
  const raised =
    mission?.formatted?.raised ??
    mission?.amounts?.raised ??
    mission?.amount_raised ??
    mission?.raised_amount;
  const goal =
    mission?.formatted?.goal ??
    mission?.amounts?.goal ??
    mission?.goal_amount ??
    mission?.target_amount;

  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 text-[#171717] sm:px-8 lg:px-20 lg:pt-32">
      <Link
        href="/mission"
        className="text-sm font-bold uppercase text-[#4C4C4C] transition-colors hover:text-black"
      >
        Back to missions
      </Link>
      <h1 className="mt-8 text-[36px] font-bold-font leading-tight sm:text-[56px] lg:text-[76px]">
        {title}
      </h1>
      {image && (
        <div className="relative mt-8 h-[240px] overflow-hidden rounded-[24px] sm:h-[400px] lg:h-[560px]">
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}
      {mission?.description && (
        <p className="mt-8 max-w-5xl whitespace-pre-line text-[18px] leading-relaxed sm:text-[22px]">
          {mission.description}
        </p>
      )}
      {(raised !== undefined || goal !== undefined) && (
        <section className="mt-10 grid gap-4 rounded-[24px] bg-[#F1F2F5] p-6 sm:grid-cols-2 sm:p-8">
          {raised !== undefined && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#59625c]">
                Raised
              </h2>
              <p className="mt-2 text-2xl font-bold">
                {typeof raised === "number" ? raised.toLocaleString() : raised}
              </p>
            </div>
          )}
          {goal !== undefined && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#59625c]">
                Goal
              </h2>
              <p className="mt-2 text-2xl font-bold">
                {typeof goal === "number" ? goal.toLocaleString() : goal}
              </p>
            </div>
          )}
        </section>
      )}
    </main>
  );
}
