"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import { sectionReveal } from "@/components/motion_presets";
import Link from "next/link";
import type { ApiRecord } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";
import VisionarySection from "@/components/vision-section";

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

export default function PartnershipPage() {
  const {
    data: partners,
    error,
    isLoading,
  } = useApiData<ApiRecord[]>("/partners");

  return (
    <main className="w-full overflow-hidden bg-[#f8f9fb] px-4 sm:px-8 lg:px-20">
      {/* ================================================== */}
      {/* SECTION 1: EVERY OUTREACH */}
      {/* ================================================== */}

      <motion.section
        {...sectionReveal}
        className="flex items-center justify-center px-0 pb-6 pt-12 sm:py-20 mt-14 lg:mt-10 lg:py-30"
      >
        <h1 className="w-full text-start lg:text-center text-[clamp(36px,7vw,5rem)] font-bold leading-[1.18] text-black lg:w-[80%] lg:leading-[1.23]">
          The Mission Moves Faster When We Move Together
        </h1>
      </motion.section>
      <motion.section {...sectionReveal} className="w-full">
        <div className="relative mx-auto flex min-h-fit w-full max-w-[1640px] items-center justify-center overflow-hidden rounded-[20px] bg-[#85849b] px-4 py-8 sm:min-h-[620px] sm:px-8 sm:py-12 md:min-h-[760px] md:px-40 md:py-16 lg:min-h-[750px] lg:rounded-[56px]">
          <img
            src="/images/partner/partnership-community.jpg"
            alt="Community gathering together"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#00006666]" />

          <motion.div
            {...partnerCardReveal(0)}
            className="relative z-10 w-full max-w-[1184px] rounded-[28px] border border-white/60 bg-white/35 px-5 py-7 shadow-sm backdrop-blur-[2px] sm:rounded-[56px] sm:px-10 sm:py-12 md:rounded-[68px] md:px-14 md:py-14 lg:rounded-[80px] lg:px-[62px] lg:py-[68px]"
          >
            <h2 className="text-[20px] font-bold leading-[1.45] text-white sm:text-[clamp(2rem,3.35vw,3.75rem)] sm:leading-[1.23] sm:tracking-[-0.035em]">
              Every outreach. Every soul reached. Every life restored. Behind it
              all are people who chose to stand for the gospel. SLGEM is not
              built by one person. It grows through people who are willing to
              pray, give, serve, and carry the burden together. And there is a
              place for you here.
            </h2>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <h1 className="text-[24px] font-bold-font lg:font-normal-font lg:text-[28px] mb-4 lg:mb-2 text-center lg:uppercase">
          Why Partnership Matters
        </h1>
        <div>
          <p className="text-[26px] font-bold-font leading-[1.4] lg:text-center sm:text-[36px] sm:leading-[52px] lg:text-[56px] lg:leading-[72px]">
            <span className="text-[#000000]">
              There are still villages waiting. Still souls
            </span>{" "}
            <span className="text-[#000000]/25">
              searching. Still lives trapped in darkness. The mission is urgent.
              And while one person cannot reach the world alone, a united people
              can do much more together. Partnership is more than support. It is
              becoming part of a divine assignment that is touching lives and
              spreading the gospel across different territories and platforms.
            </span>
          </p>
        </div>
      </motion.section>

      <motion.section
        {...sectionReveal}
        className="-mx-4 w-[calc(100%+2rem)] bg-[#F1F2F5] px-4 py-12 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 sm:py-16 lg:-ml-[7%] lg:w-[114%] lg:px-20 lg:py-[70px]"
      >
        <h1 className="mb-8 text-[28px] font-bold leading-[1.15] tracking-[-0.035em] text-[#000000] lg:text-[64px] lg:leading-[1.23]">
          OUR PARTNERSHIP <br /> ARMS
        </h1>
        <div className="w-full border-t border-[#1A1A1A]">
          <div className="flex w-full flex-col">
            {error && (
              <p
                role="alert"
                className="border-b border-[#1A1A1A] py-6 text-red-700"
              >
                Partners could not be loaded: {error}
              </p>
            )}
            {isLoading && (
              <SkeletonStatus label="Loading partners">
                {[0, 1].map((item) => (
                  <div
                    key={item}
                    className="flex w-full flex-col gap-6 border-b border-[#1A1A1A] py-8 lg:flex-row lg:items-center lg:gap-[6%] lg:py-[50px]"
                  >
                    <Skeleton className="h-[220px] w-full shrink-0 rounded-[22px] lg:h-[290px] lg:w-[36%] lg:rounded-[36px]" />
                    <div className="flex w-full flex-col gap-4 lg:w-[60%]">
                      <Skeleton className="h-8 w-3/4 rounded-md" />
                      <Skeleton className="h-4 w-full rounded-md" />
                      <Skeleton className="h-4 w-5/6 rounded-md" />
                      <Skeleton className="h-4 w-1/4 rounded-md" />
                    </div>
                  </div>
                ))}
              </SkeletonStatus>
            )}
            {(partners ?? []).map((mission, index) => {
              const missionTitle = getRecordTitle(mission);
              const missionImage =
                getRecordImage(mission) || "/images/mission/the_event.jpg";
              return (
                <motion.article
                  {...partnerCardReveal(index)}
                  key={mission?.id ?? mission?.slug ?? index}
                  className="
                  flex
                  w-full
                  flex-col
                  gap-6
                  border-b
                  border-[#1A1A1A]
                  py-8
                  lg:flex-row
                  lg:items-center
                  lg:gap-[6%] lg:py-[50px]
                "
                >
                  {/* ======================================================
                    IMAGE
                ======================================================= */}
                  <div
                    key={`image-${mission?.id ?? index}`}
                    className="
                    relative
                    h-[220px]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-[22px]
                    lg:h-[290px]
                    lg:w-[36%]
                    lg:rounded-[36px]
                  "
                  >
                    <NextImage
                      src={missionImage}
                      alt={missionTitle}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      priority={index === 0}
                    />
                  </div>

                  {/* ======================================================
                    CONTENT
                ======================================================= */}
                  <div
                    key={`content-${mission?.id ?? index}`}
                    className="
                    flex
                    w-full
                    flex-col
                    justify-center
                    lg:w-[60%]
                    lg:py-[20px]
                  "
                  >
                    {/* TITLE */}
                    <nav className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <span className="text-[#666666] leading-[1.15] text-[30px] font-thin sm:text-[38px]">
                        {mission?.id ?? index + 1}
                      </span>{" "}
                      <h2
                        className="
                      m-0
                      min-w-0
                      break-words
                      text-[26px]
                      font-[800]
                      leading-[1.15]
                      tracking-[0px]
                      text-black
                      sm:text-[32px] font-extrabold
                      lg:text-[26px] font-bold-font lg:uppercase capitalize
                    "
                      >
                        {missionTitle}
                      </h2>
                    </nav>

                    {/* DESCRIPTION */}
                    <p
                      className="
                      m-0
                        mt-[10px]
                      max-w-[95%]
                      text-[18px]
                      font-[400]
                      leading-[1.5]
                      
                      text-[#4C4C4C]
                      sm:text-[18px]
                      lg:mt-[26px]
                      lg:text-[18px]
                      lg:leading-[1.5]
                    "
                    >
                      {mission?.description}
                    </p>

                    {/* ====================================================
                    JOIN US BUTTON
                  ===================================================== */}
                    <Link
                      href={`/partner/${mission?.slug ?? ""}`}
                      className="
                      group
                      mt-6
                      flex
                      w-fit
                      items-center
                      gap-[20px]
                      border-0
                      bg-transparent
                      p-0
                      text-left
                      text-[14px]
                      font-[700]
                      leading-none
                      tracking-[0px]
                      text-black
                      transition-all
                      duration-300
                      hover:gap-[26px]
                      lg:mt-[80px]
                    "
                    >
                      <span>JOIN US</span>

                      {/* <span
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
                      </span> */}
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>
      {/* ================================================== */}
      {/* SECTION 2: YOU DO NOT HAVE TO DO EVERYTHING */}
      {/* ================================================== */}

      <motion.section
        {...sectionReveal}
        className="w-full py-10 sm:py-16 md:py-20 lg:py-24"
      >
        <motion.div
          {...partnerCardReveal(0)}
          className="mx-auto grid w-full max-w-[1640px] grid-cols-1 overflow-hidden rounded-[28px] bg-[#f0f1f4] shadow-[0_10px_30px_rgba(0,0,0,0.035)] sm:rounded-[38px] md:rounded-[48px] lg:grid-cols-2 lg:rounded-[76px]"
        >
          {/* Left content */}
          <div className="flex flex-col items-start px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16 lg:px-[12.7%] lg:py-[11%]">
            <h2 className="mb-7 w-full max-w-[560px] text-[clamp(1.7rem,4.5vw,5rem)] font-bold leading-[1.22] tracking-[0.005em] text-black sm:mb-8 lg:mb-8">
              YOU DO NOT <br className="hidden lg:block" />
              HAVE TO DO <br className="hidden lg:block" />
              EVERYTHING
            </h2>

            <div className="mb-7 w-full overflow-hidden rounded-[22px] sm:mb-8 sm:rounded-[28px]">
              <img
                src="/images/partner/partnership-outreach.jpg"
                alt="Outreach volunteers serving a local community"
                className="aspect-[1.88/1] w-full object-cover object-center"
              />
            </div>

            <p className="max-w-[560px] text-[clamp(19px,2.65vw,2.85rem)] font-normal leading-[1.36] tracking-[-0.035em] text-black">
              You simply have to do your part. Some will pray. Some will give.
              Some will go. Some will serve behind the scenes. But together, the
              mission moves forward.
            </p>
          </div>

          {/* Right photograph */}
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[380px] lg:min-h-full">
            <img
              src="/images/partner/partnership-hands.jpg"
              alt="People reaching out their hands in unity and support"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.section>

      <motion.section {...sectionReveal} className="w-full py-10 sm:py-12">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            {...partnerCardReveal(1)}
            className="order-1 lg:col-start-2 lg:row-start-1"
          >
            <h2 className="text-[28px] font-black leading-[1.2] text-black uppercase sm:text-[42px] lg:text-[58px]">
              A CALL TO
              <br />
              COMMITMENT
            </h2>
          </motion.div>

          {/* LEFT IMAGE - Squircle corners */}
          <motion.div
            {...partnerCardReveal(0)}
            className="relative order-2 w-full lg:col-start-1 lg:row-span-2 lg:row-start-1"
          >
            <div className="h-[250px] w-full overflow-hidden rounded-[30px] sm:h-[420px] sm:rounded-[48px] lg:h-[500px] lg:rounded-[64px]">
              <img
                src="/images/partner/commit.jpg"
                alt="People holding hands at sunset"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            {...partnerCardReveal(2)}
            className="order-3 flex w-full flex-col justify-center lg:col-start-2 lg:row-start-2 lg:pl-4"
          >
            <p className="mt-0 text-[18px] font-normal leading-[1.5] tracking-[-0.01em] text-black sm:text-[20px] lg:mt-2 lg:text-[32px]">
              This is not about pressure. This is about purpose. It is about
              joining hands to advance something eternal. The harvest is still
              plentiful. The need is still urgent. And the gospel must keep
              moving.
            </p>

            <div className="mt-8 lg:mt-10">
              <Link href="/mission" className="w-full lg:w-fit">
                <button className="h-[48px] lg:h-[62px] w-full rounded-full border border-black bg-transparent text-[15px] font-bold uppercase tracking-wide text-black transition-colors duration-200 hover:bg-black hover:text-white lg:h-[68px] lg:text-[18px]">
                  SEE MISSIONS
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* SECTION 3: COME AND RUN WITH THE VISION */}
      {/* ================================================== */}

    <VisionarySection />
    </main>
  );
}
