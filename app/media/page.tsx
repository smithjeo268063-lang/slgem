"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { sectionReveal } from "@/components/motion_presets";
import Link from "next/link";
import { useState } from "react";
import { mediaItemSlug, photoExcerpts, teachingSermons } from "./media-data";

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

const MediaPage = () => {
  const [activeTab, setActiveTab] = useState<"sermons" | "photoExcerpts">(
    "sermons",
  );
  const activeItems = activeTab === "sermons" ? teachingSermons : photoExcerpts;

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
              className={`inline-flex min-h-12 min-w-0 flex-1 items-center justify-center whitespace-nowrap rounded-[14px] px-2 py-3 text-[15px] font-semibold tracking-wide transition-colors duration-200 sm:min-h-[60px] sm:flex-none sm:rounded-[28px] sm:px-8 sm:py-4 sm:text-[20px] lg:text-[22px] ${
                activeTab === "sermons"
                  ? "bg-[#000066] text-white hover:bg-[#08034a]"
                  : "text-black hover:bg-white sm:border sm:border-black sm:bg-transparent sm:hover:bg-black sm:hover:text-white"
              }`}
            >
              Teaching Sermons
            </button>
            <button
              id="photo-excerpts-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "photoExcerpts"}
              aria-controls="media-list"
              onClick={() => setActiveTab("photoExcerpts")}
              className={`inline-flex min-h-12 min-w-0 w-fit flex-1 items-center justify-center whitespace-nowrap rounded-[14px] px-2 py-3 text-[15px] font-semibold tracking-wide transition-colors duration-200 sm:min-h-[60px] sm:flex-none sm:rounded-[28px] sm:px-8 sm:py-4 sm:text-[20px] lg:text-[22px] ${
                activeTab === "photoExcerpts"
                  ? "bg-[#000066] text-white hover:bg-[#08034a]"
                  : "text-black hover:bg-white sm:border sm:border-black sm:bg-transparent sm:hover:bg-black sm:hover:text-white"
              }`}
            >
              Photo Excerpts
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
                : "photo-excerpts-tab"
            }
            className="flex w-full flex-col"
          >
            {activeItems.map((item) => {
              return (
                <motion.article
                  {...partnerCardReveal(item.id - 1)}
                  key={`${activeTab}-${item.id}`}
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
                    key={`image-${activeTab}-${item.id}`}
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
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      priority={item.id === 1}
                    />
                  </div>

                  <div
                    key={`content-${activeTab}-${item.id}`}
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
                        {item.title}
                      </h2>
                    </div>

                    <p className="mt-2 max-w-full text-[18px] leading-[1.55] text-[#4C4C4C] sm:mt-[10px] sm:text-[18px] lg:mt-[26px] lg:text-[18px]">
                      {item.description}
                    </p>

                    <Link
                      href={`/${activeTab === "sermons" ? "sermon" : "photo-excerpt"}/${mediaItemSlug(item)}`}
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

      <section className="relative isolate my-0 w-full overflow-visible pt-4 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
        {/* Floating card: upper left */}
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-[2%] top-[12%] hidden w-[290px] -rotate-[-60deg] overflow-hidden rounded-[26px] sm:block md:left-[-2%] md:top-[20%] md:w-[300px] lg:w-[210px] lg:h-[190px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        {/* Floating card: upper right */}
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-[3%] top-[12%] hidden w-[280px] rotate-[-60deg] overflow-hidden rounded-[26px] sm:block md:right-[-2%] md:top-[19%] md:w-[290px] lg:w-[210px] lg:h-[190px]"
        >
          <img
            src="/images/partner/vision2.jpg"
            alt=""
            className="aspect-[1.22/1] h-full w-full object-cover"
          />
        </motion.div>

        {/* Floating card: lower left */}
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-[11%] left-[22%] hidden w-[290px] -rotate-[30deg] overflow-hidden rounded-[26px] sm:block md:bottom-[10%] md:left-[18%] md:w-[300px] lg:w-[210px] lg:h-[190px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        {/* Floating card: lower right */}
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-[11%] right-[21%] hidden w-[320px] rotate-[36deg] overflow-hidden rounded-[26px] sm:block md:bottom-[10%] md:right-[19%] md:w-[330px] lg:w-[210px] lg:h-[190px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        {/* Centered content */}
        <motion.div
          {...partnerCardReveal(0)}
          className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col lg:items-center lg:px-2 lg:text-center md:pt-[42px] lg:pt-[43px]"
        >
          <h2 className="max-w-[1100px] text-[clamp(1.8rem,4.2vw,4.3rem)] font-bold leading-[1.25] lg:tracking-[-0.045em] text-black pr-10">
            Come and Run With the Vision
          </h2>

          <p className="mt-3 max-w-[1100px] text-[clamp(1.1rem,2.45vw,2rem)] font-normal leading-[1.4] tracking-[0px] text-black">
            This is a divine assignment. The journey has begun. God
            <br className="hidden lg:block" /> is leading step by step. All that
            matters is faithfulness.
            <br className="hidden lg:block" /> All that matters is souls. Will
            you be part of it?
          </p>

          <a
            href="#partnership"
            className="mt-7 inline-flex min-h-[60px] w-full max-w-[250px] items-center justify-center rounded-[24px] bg-[#100052] px-8 py-4 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:min-h-[65px] sm:rounded-[22px]"
          >
            Partner with Us
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default MediaPage;
