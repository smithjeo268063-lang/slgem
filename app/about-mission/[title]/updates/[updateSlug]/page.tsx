import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apiGet, ApiError } from "@/lib/api";
import type { ApiMissionUpdate, ApiMissionWithUpdates } from "@/lib/api";

export const instant = false;

function UpdateSection({
  title,
  image,
  content,
  variant = "light",
}: {
  title: string;
  image?: string;
  content?: string;
  variant?: "light" | "dark";
}) {
  if (!content && !image) return null;

  const isDark = variant === "dark";

  return (
    <section
      className={`overflow-hidden rounded-[24px] ${
        isDark
          ? "bg-[#002652] text-white"
          : "border border-[#e7e7ed] bg-white text-[#171717] shadow-[0_16px_50px_rgba(16,0,82,0.06)]"
      }`}
    >
      <div
        className={`grid h-full ${image ? "md:grid-cols-[0.85fr_1.15fr]" : ""}`}
      >
        {image && (
          <div className="relative min-h-[220px] md:min-h-[300px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* <p
            className={`text-xs font-bold uppercase tracking-[0.18em] ${
              isDark ? "text-[#ffc928]" : "text-[#5f4aa1]"
            }`}
          >
            Mission update
          </p> */}
          <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
            {title}
          </h2>
          {content && (
            <p
              className={`mt-5 whitespace-pre-line text-[18px] leading-[1.8] sm:text-lg ${
                isDark ? "text-white/80" : "text-[#555766]"
              }`}
            >
              {content}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default async function MissionUpdateDetailPage({
  params,
}: {
  params: Promise<{ title: string; updateSlug: string }>;
}) {
  const { title: missionSlug, updateSlug } = await params;
  let missionRecords: ApiMissionWithUpdates[];

  try {
    missionRecords = await apiGet<ApiMissionWithUpdates[]>(
      `/missions/${encodeURIComponent(missionSlug)}/updates`,
    );
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }

  const update: ApiMissionUpdate | undefined = missionRecords
    ?.find((record) => record?.slug === missionSlug)
    ?.updates?.find((record) => record?.slug === updateSlug);

  if (!update) notFound();

  const date = update.date
    ? new Date(update.date).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="min-h-screen bg-[#f8f9fb] pb-20 pt-24 text-[#171717] sm:pt-28 lg:pt-32">
      <article className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-20">
        {/* <Link
          href={`/about-mission/${encodeURIComponent(missionSlug)}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#dedde7] bg-white px-5 text-sm font-bold text-[#302460] transition-colors hover:border-[#302460] hover:bg-[#f1eff8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#302460]/20"
        >
          <span aria-hidden="true">←</span>
          Back to mission
        </Link> */}

        <header className="mx-auto max-w-[1000px] py-0 lg:text-center sm:py-14">
          {/* <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5f4aa1] sm:text-sm">
            Mission update
          </p> */}
          <h1 className="text-[clamp(2.25rem,5.5vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.04em] ">
            {update.title ?? "Mission Update"}
          </h1>
          {date && (
            <p className="mt-5 text-sm font-medium text-[#697080] sm:text-base">
              {date}
            </p>
          )}
        </header>

        {update.hero_image && (
          <div className="mt-2 relative h-[260px] overflow-hidden rounded-[24px] bg-[#e7e6ed] shadow-[0_24px_70px_rgba(16,0,82,0.14)] sm:h-[400px] sm:rounded-[32px] lg:h-[540px]">
            <Image
              src={update.hero_image}
              alt={update.title ?? "Mission update"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
        )}

        {update.mission_update && (
          <section className="mx-auto mt-10 max-w-[1000px] rounded-[24px] px-0 py-2 sm:mt-14 sm:px-10 sm:py-10">
            {/* <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#5f4aa1]">
              The latest
            </p> */}
            <p className="mt-4 whitespace-pre-line text-[20px] font-bold leading-[1.4] lg:leading-[1.85] text-[#454654] md:text-[32px] text-center">
              {update.mission_update}
            </p>
          </section>
        )}

        <div className="mx-auto mt-8 grid max-w-[1200px] gap-6 sm:mt-14 lg:grid-cols-2 lg:gap-8">
          <UpdateSection
            title="Impact"
            image={update.impact_image}
            content={update.impact_content}
          />
          <UpdateSection
            title="Testimony"
            image={update.testimony_image}
            content={update.testimony_content}
          />
        </div>

        <div className="mx-auto mt-6 max-w-[1200px] sm:mt-8">
          <UpdateSection
            title="Looking Ahead"
            content={update.looking_ahead}
            variant="dark"
          />  
        </div>
      </article>
    </main>
  );
}
