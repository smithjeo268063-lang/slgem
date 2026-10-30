"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { sectionReveal } from "@/components/motion_presets";
import Link from "next/link";
import VisionarySection from "@/components/vision-section";
import type { ApiRecord } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
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

const DepartmentsPage = () => {
  const { data: departments, error, isLoading } =
    useApiData<ApiRecord[]>("/departments");

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

      <div className="mt-12 lg:text-center sm:mt-16 lg:mt-[106px]">
        <p className="text-[18px] font-normal uppercase leading-tight tracking-[0.6px] sm:text-[24px]">
          The Vision
        </p>

        <div>
          <p className="mt-3.5 md:mt-0 lg:text-[56px] text-[28px] leading-[40px] lg:leading-[72px] font-bold-font text-start md:text-center">
            <span className="text-[#000000]">
              There are still villages waiting. Still souls
            </span>{" "}
            <span className="text-[#000000]/25">
              {" "}
              searching. Still lives trapped in darkness. The mission is urgent.
              And while one person cannot reach the world alone, a united people
              can do much more together. Partnership is more than support. It is
              becoming part of a divine assignment that is touching lives and
              spreading the gospel across different territories and platforms.
            </span>
          </p>
        </div>
      </div>

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
            DEPARTMENTS
          </h1>
        </div>
        <div className="w-full border-t border-[#1A1A1A]">
          <div className="flex w-full flex-col">
            {error && (
              <p role="alert" className="border-b border-[#1A1A1A] py-6 text-red-700">
                Departments could not be loaded: {error}
              </p>
            )}
            {isLoading && (
              <SkeletonStatus label="Loading departments">
                {[0, 1].map((item) => (
                  <div
                    key={item}
                    className="flex w-full flex-col gap-4 border-b border-[#1A1A1A] py-6 sm:gap-6 sm:py-8 lg:flex-row lg:items-center lg:gap-[6%] lg:py-[50px]"
                  >
                    <Skeleton className="h-[190px] w-full rounded-[22px] sm:h-[240px] lg:h-[290px] lg:w-[36%] lg:rounded-[36px]" />
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
            {(departments ?? []).map((department, index) => {
              const title = getRecordTitle(department);
              const image =
                getRecordImage(department) || "/images/mission/the_event.jpg";
              return (
                <motion.article
                  {...partnerCardReveal(index)}
                  key={department?.id ?? department?.slug ?? index}
                  className="
                    flex
                    w-full
                    flex-col
                    gap-4
                    border-b
                    border-[#1A1A1A]
                    py-6
                    sm:gap-6
                    sm:py-8
                    lg:py-[50px]
                  "
                >
                  <div
                    key={index + 10}
                    className="flex w-full flex-col gap-4 lg:hidden"
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <h2 className="m-0 min-w-0 break-words text-[26px] w-[70%] font-extrabold leading-[1.2] text-black sm:text-[28px] sm:leading-[1.15]">
                        {title}
                      </h2>
                    </div>

                    <div
                      className="
                        relative
                        h-[190px]
                        w-full
                        shrink-0
                        overflow-hidden
                        rounded-[22px]
                        sm:h-[240px]
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

                    <p className="mt-0 max-w-full text-[18px] leading-[1.55] text-[#4C4C4C] sm:text-[18px]">
                      {department?.description}
                    </p>

                    <Link
                      href={`/departments/${department?.slug ?? ""}`}
                      className="
                        group
                        mt-0
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
                      "
                    >
                      <span>JOIN US</span>

                      <span className="text-[32px] font-[400] leading-none transition-transform duration-300 group-hover:translate-x-[4px]">
                        →
                      </span>
                    </Link>
                  </div>

                  <div
                    key={index}
                    className="hidden w-full lg:flex lg:items-center lg:gap-[6%]"
                  >
                    <div
                      className="
                        relative
                        h-[290px]
                        w-[36%]
                        shrink-0
                        overflow-hidden
                        rounded-[36px]
                      "
                    >
                      <NextImage
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="34vw"
                        priority={index === 0}
                      />
                    </div>

                    <div className="flex w-[100%] flex-col justify-center py-[20px]">
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <h2 className="m-0 min-w-0 break-words text-[26px] font-extrabold leading-[1.2] text-black">
                          {title}
                        </h2>
                      </div>

                      <p className="mt-[26px] max-w-full text-[18px] leading-[1.55] text-[#4C4C4C]">
                        {department?.description}
                      </p>

                      <Link
                        href={`/departments/${department?.slug ?? ""}`}
                        className="
                          group
                          mt-[80px]
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
                        "
                      >
                        <span>JOIN US</span>

                        <span className="text-[32px] font-[400] leading-none transition-transform duration-300 group-hover:translate-x-[4px]">
                          →
                        </span>
                      </Link>
                    </div>
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

export default DepartmentsPage;
