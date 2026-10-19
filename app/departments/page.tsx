"use client";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { sectionReveal } from "@/components/motion_presets";
import Link from "next/link";
import { departmentSlug, departments } from "./departments-data";

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
          <p className="mt-3.5 md:mt-0 lg:text-[56px] text-[32px] leading-[40px] lg:leading-[72px] font-bold-font text-start md:text-center">
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
          <h1 className=" text-[32px] font-bold leading-[1.15] tracking-[-0.035em] text-[#000000] lg:text-[64px] lg:leading-[1.23]">
            DEPARTMENTS
          </h1>
        </div>
        <div className="w-full border-t border-[#1A1A1A]">
          <div className="flex w-full flex-col">
            {departments.map((department) => {
              return (
                <motion.article
                  {...partnerCardReveal(department.id - 1)}
                  key={department.id}
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
                  <div className="flex w-full flex-col gap-4 lg:hidden">
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <h2 className="m-0 min-w-0 break-words text-[28px] w-[70%] font-extrabold leading-[1.2] text-black sm:text-[28px] sm:leading-[1.15]">
                        {department.title}
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
                        src={department.image}
                        alt={department.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        priority={department.id === 1}
                      />
                    </div>

                    <p className="mt-0 max-w-full text-[19px] leading-[1.55] text-[#4C4C4C] sm:text-[18px]">
                      {department.description}
                    </p>

                    <Link
                      href={`/departments/${departmentSlug(department.title)}`}
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

                  <div className="hidden w-full lg:flex lg:items-center lg:gap-[6%]">
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
                        src={department.image}
                        alt={department.title}
                        fill
                        className="object-cover"
                        sizes="34vw"
                        priority={department.id === 1}
                      />
                    </div>

                    <div className="flex w-[100%] flex-col justify-center py-[20px]">
                      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                        <h2 className="m-0 min-w-0 break-words text-[26px] font-extrabold leading-[1.2] text-black">
                          {department.title}
                        </h2>
                      </div>

                      <p className="mt-[26px] max-w-full text-[18px] leading-[1.55] text-[#4C4C4C]">
                        {department.description}
                      </p>

                      <Link
                        href={`/departments/${departmentSlug(department.title)}`}
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
      <section className="mx-auto mt-10 md:mt-16 grid w-full max-w-[1440px] gap-8 sm:mt-24 sm:gap-10 lg:mt-30 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
        <div className="flex flex-col lg:gap-5 gap-2">
          <h1 className="w-[100%] text-[34px] leading-[1.12] tracking-tight font-bold-font sm:text-[48px] lg:w-[80%] lg:text-[64px] capitalize md:uppercase lg:leading-[72px]">
            You do not have to <br className="block md:hidden" /> do everything
          </h1>
          <p className="w-full text-[20px] leading-[1.5] font-medium text-[#0000000] sm:text-[28px] lg:w-[90%] lg:text-[32px]">
            You simply have to do your part. Some will pray. Some will give.
            Some will go. Some will serve behind the scenes. But together, the
            mission moves forward.
          </p>{" "}
        </div>
        <div className="h-[200px] w-full overflow-hidden rounded-[20px] sm:h-[280px] sm:rounded-[32px] lg:h-[460px] lg:rounded-[50px]">
          <NextImage
            src="/images/media/media_hero.jpg"
            alt="SLGEM Media"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="relative isolate my-0 w-full overflow-visible  pt-10 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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
          className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col lg:items-center lg:text-center md:pt-[42px] lg:pt-[43px]"
        >
          <h2 className="max-w-[1100px] text-[clamp(2rem,4.2vw,4.3rem)] font-bold leading-[1.25] lg:tracking-[-0.045em] text-black pr-10">
            Come and Run With the Vision
          </h2>

          <p className="mt-3 max-w-[1100px] text-[clamp(1.26rem,2.45vw,2rem)] font-normal leading-[1.4] tracking-[0.3px] text-black">
            This is a divine assignment. The journey has begun. God
            <br className="hidden lg:block" /> is leading step by step. All that
            matters is faithfulness.
            <br className="hidden lg:block" /> All that matters is souls. Will
            you be part of it?
          </p>

          <a
            href="#partnership"
            className="mt-7 inline-flex h-[54px] w-full max-w-[200px] items-center justify-center rounded-[20px] bg-[#100052] px-8 py-4 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:min-h-[55px] sm:rounded-[22px]"
          >
            Partner with Us
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default DepartmentsPage;
