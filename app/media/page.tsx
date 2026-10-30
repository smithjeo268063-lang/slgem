"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { sectionReveal } from "@/components/motion_presets";
import Link from "next/link";
import { useState } from "react";
import type { ApiEvent, ApiRecord, ApiTeaching } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
import VisionarySection from "@/components/vision-section";
import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";

const partnerCardReveal = (index: number) => ({
  initial: { opacity: 0, y: 36, scale: 0.94 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, amount: 0.16 },
  transition: {
    duration: 0.85,
    delay: index * 0.12,
    ease: [0.22, 1, 0.36, 1] as const,
  },
});

function truncateWords(text: string | undefined, limit: number) {
  if (!text) return "";

  const words = text.trim().split(/\s+/);
  return words.length > limit ? `${words.slice(0, limit).join(" ")} ...` : text;
}

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<
    "sermons" | "missionGallery" | "eventGallery"
  >("sermons");
  const teachings = useApiData<ApiTeaching[]>("/teachings");
  const missionGallery = useApiData<ApiRecord[]>("/gallery/missions");
  const eventGallery = useApiData<ApiEvent[]>("/gallery/events");
  const activeItems =
    activeTab === "sermons"
      ? (teachings.data ?? [])
      : activeTab === "missionGallery"
        ? (missionGallery.data ?? [])
        : (eventGallery.data ?? []);
  const activeError =
    activeTab === "sermons"
      ? teachings.error
      : activeTab === "missionGallery"
        ? missionGallery.error
        : eventGallery.error;
  const activeLoading =
    activeTab === "sermons"
      ? teachings.isLoading
      : activeTab === "missionGallery"
        ? missionGallery.isLoading
        : eventGallery.isLoading;

  return (
    <main className="mt-14 w-full px-4 py-10 sm:mt-8 sm:px-8 sm:py-16 lg:mt-10 lg:px-20 lg:py-20">
      <section className="flex flex-col gap-6 py-0 sm:gap-10">
        <h1 className="text-[38px] w-[80%] lg:w-full leading-[1.12] tracking-tight font-bold-font sm:text-[56px] lg:text-[88px] lg:leading-[98px]">
          Every Department Exists for One - Purpose - Souls
        </h1>
        <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[36px] lg:h-[260px] lg:rounded-[50px]">
          <NextImage
            src="/images/media/media_hero.jpg"
            alt="SLGEM Media"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 36, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        variants={sectionReveal}
        viewport={{
          once: true,
          amount: 0.01,
        }}
        className="-mx-4 w-[calc(100%+2rem)] px-4 py-8 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 sm:py-16 lg:-ml-[7%] lg:w-[114%] lg:px-20 lg:py-[70px] lg:mt-20"
      >
        <div className="mb-8 flex w-full flex-col justify-center gap-4">
          <h1 className=" text-[28px] font-bold leading-[1.15] tracking-[-0.035em] text-[#000000] lg:text-[64px] lg:leading-[1.23]">
            MEDIA
          </h1>
          <div
            role="tablist"
            aria-label="Media type"
            className="flex w-full gap-2 rounded-[18px] bg-black/5 p-1 sm:flex-row sm:flex-wrap sm:gap-4 sm:rounded-none sm:bg-transparent sm:p-0"
          >
            <button
              id="teaching-sermons-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "sermons"}
              aria-controls="media-list"
              onClick={() => setActiveTab("sermons")}
              className={`inline-flex min-h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[14px] px-2 py-3 text-[16px] font-semibold tracking-wide transition-colors duration-200 sm:min-h-[60px] sm:flex-none sm:rounded-[28px] sm:px-8 sm:py-4 sm:text-[20px] lg:text-[22px] ${
                activeTab === "sermons"
                  ? "bg-[#000066] text-white hover:bg-[#08034a]"
                  : "text-black hover:bg-white sm:border sm:border-black sm:bg-transparent sm:hover:bg-black sm:hover:text-white"
              }`}
            >
              Teaching <br className="block md:hidden" /> Sermons
            </button>
            <button
              id="mission-gallery-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "missionGallery"}
              aria-controls="media-list"
              onClick={() => setActiveTab("missionGallery")}
              className={`inline-flex min-h-12 min-w-0 w-fit flex-1 items-center justify-center whitespace-nowrap rounded-[14px] px-2 py-3 text-[16px] font-semibold tracking-wide transition-colors duration-200 sm:min-h-[60px] sm:flex-none sm:rounded-[28px] sm:px-8 sm:py-4 sm:text-[20px] lg:text-[22px] ${
                activeTab === "missionGallery"
                  ? "bg-[#000066] text-white hover:bg-[#08034a]"
                  : "text-black hover:bg-white sm:border sm:border-black sm:bg-transparent sm:hover:bg-black sm:hover:text-white"
              }`}
            >
              Mission <br className="block md:hidden" /> Gallery
            </button>
            <button
              id="event-gallery-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "eventGallery"}
              aria-controls="media-list"
              onClick={() => setActiveTab("eventGallery")}
              className={`inline-flex min-h-12 min-w-0 w-fit flex-1 items-center justify-center whitespace-nowrap rounded-[14px] px-2 py-3 text-[16px] font-semibold tracking-wide transition-colors duration-200 sm:min-h-[60px] sm:flex-none sm:rounded-[28px] sm:px-8 sm:py-4 sm:text-[20px] lg:text-[22px] ${
                activeTab === "eventGallery"
                  ? "bg-[#000066] text-white hover:bg-[#08034a]"
                  : "text-black hover:bg-white sm:border sm:border-black sm:bg-transparent sm:hover:bg-black sm:hover:text-white"
              }`}
            >
              Event <br className="block md:hidden" /> Gallery
            </button>
          </div>
        </div>
        <div className="w-full border-t border-[#1A1A1A]">
          <div
            id="media-list"
            role="tabpanel"
            aria-labelledby={
              activeTab === "sermons"
                ? "teaching-sermons-tab"
                : activeTab === "missionGallery"
                  ? "mission-gallery-tab"
                  : "event-gallery-tab"
            }
            className="flex w-full flex-col"
          >
            {activeError && (
              <p
                role="alert"
                className="border-b border-[#1A1A1A] py-6 text-red-700"
              >
                This gallery could not be loaded: {activeError}
              </p>
            )}
            {activeLoading && (
              <SkeletonStatus label="Loading media">
                {[0, 1].map((item) => (
                  <div
                    key={item}
                    className="flex w-full flex-col gap-4 border-b border-[#1A1A1A] py-8 sm:gap-6 lg:flex-row lg:items-center"
                  >
                    <Skeleton className="h-[220px] w-full shrink-0 rounded-[22px] sm:h-[260px] lg:h-[290px] lg:w-[36%] lg:rounded-[36px]" />
                    <div className="flex w-full flex-col gap-4 lg:w-[60%]">
                      <Skeleton className="h-8 w-3/4 rounded-md" />
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-5/6 rounded-md" />
                    </div>
                  </div>
                ))}
              </SkeletonStatus>
            )}
            {activeItems.map((item, index) => {
              const title = getRecordTitle(item);
              const image = getRecordImage(item) || "/images/media/experts.png";
              const slug = item?.slug ?? item?.id ?? "";
              const detailPath =
                activeTab === "sermons"
                  ? `/sermon/${slug}`
                  : `/photo-excerpt/${slug}?gallery=${activeTab === "missionGallery" ? "missions" : "events"}`;
              return (
                <motion.article
                  {...partnerCardReveal(index)}
                  key={`${activeTab}-${item?.id ?? item?.slug ?? index}`}
                  className="
                  flex
                  w-full
                  flex-col
                  gap-4
                  border-b
                  border-[#1A1A1A]
                  py-6
                  lg:flex-row
                  lg:items-center
                  sm:gap-6 sm:py-8
                  lg:gap-[6%] lg:py-[50px]
                "
                >
                  <div
                    key={`image-${activeTab}-${item?.id ?? index}`}
                    className="
                    relative
                    h-[190px]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-[22px]
                    lg:h-[290px]
                    sm:h-[240px]
                    lg:w-[36%]
                    lg:rounded-[36px]
                  "
                  >
                    <NextImage
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      priority={index === 0}
                    />
                  </div>

                  <div
                    key={`content-${activeTab}-${item?.id ?? index}`}
                    className="
                    flex
                    w-full
                    flex-col
                    justify-center
                    lg:w-[60%]
                    lg:py-[20px]
                  "
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      {activeTab === "sermons" && (
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6 shrink-0 text-black"
                        >
                          <rect x="3" y="6" width="12" height="12" rx="2" />
                          <path d="m15 10 6-3v10l-6-3" />
                        </svg>
                      )}
                      <h2 className="m-0 min-w-0 break-words text-[24px] font-extrabold leading-[1.2] text-black sm:text-[28px] sm:leading-[1.15] lg:text-[26px]">
                        {title}
                      </h2>
                    </div>

                    <p className="mt-2 max-w-full text-[18px] leading-[1.55] text-[#4C4C4C] sm:mt-[10px] sm:text-[18px] lg:mt-[26px] lg:text-[18px]">
                      {truncateWords(item?.description, 50)}
                    </p>

                    <Link
                      href={detailPath}
                      className="
                      group
                      mt-4
                      flex
                      w-fit
                      min-h-11
                      items-center
                      gap-[20px]
                      border-0
                      bg-transparent
                      p-0
                      text-left
                      text-[14px]
                      font-bold
                      leading-none
                      text-black
                    transition-all
                      duration-300
                      hover:gap-[26px]
                      focus-visible:rounded-sm
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-black
                      lg:mt-[80px]
                    "
                    >
                      <span>VIEW DETAILS</span>

                      <span
                        className="
                        text-[32px]
                        font-[400]
                        leading-none
                        transition-transform
                        duration-300
                        group-hover:translate-x-[4px]
                      "
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <VisionarySection />
    </main>
  );
};

export default MediaPage;
