"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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

export default function VisionarySection() {
  return (
    <main>
      <section className="mx-auto mt-10 md:mt-16 grid w-full max-w-[1440px] gap-8 sm:mt-24 sm:gap-10 lg:mt-30 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
        <div className="flex flex-col lg:gap-5 gap-2">
          <h1 className="w-[100%] text-[30px] leading-[1.3] tracking-tight font-bold-font sm:text-[48px] lg:w-[80%] lg:text-[64px] capitalize md:uppercase lg:leading-[72px]">
            You do not have to do everything
          </h1>
          <p className="w-full text-[18px] leading-[1.5] font-medium text-[#0000000] sm:text-[28px] lg:w-[90%] lg:text-[32px]">
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

      <section className="relative hidden lg:block isolate my-0 w-full overflow-visible pt-10 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute left-[2%] top-[12%] hidden w-[290px] -rotate-[-60deg] overflow-hidden rounded-[26px] sm:block md:left-[-2%] md:top-[20%] md:w-[300px] lg:h-[190px] lg:w-[210px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute right-[3%] top-[12%] hidden w-[280px] rotate-[-60deg] overflow-hidden rounded-[26px] sm:block md:right-[-2%] md:top-[19%] md:w-[290px] lg:h-[190px] lg:w-[210px]"
        >
          <img
            src="/images/partner/vision2.jpg"
            alt=""
            className="aspect-[1.22/1] h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-[11%] left-[22%] hidden w-[290px] -rotate-[30deg] overflow-hidden rounded-[26px] sm:block md:bottom-[10%] md:left-[18%] md:w-[300px] lg:h-[190px] lg:w-[210px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute bottom-[11%] right-[21%] hidden w-[320px] rotate-[36deg] overflow-hidden rounded-[26px] sm:block md:bottom-[10%] md:right-[19%] md:w-[330px] lg:h-[190px] lg:w-[210px]"
        >
          <img
            src="/images/partner/vision1.jpg"
            alt=""
            className="aspect-[1.28/1] h-full w-full object-cover"
          />
        </motion.div>

        <motion.div
          {...partnerCardReveal(0)}
          className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col px-0 md:pt-[42px] lg:items-center lg:px-0 lg:pt-[43px] lg:text-center"
        >
          <h2 className="max-w-[1100px] pr-0 text-[clamp(1.8rem,4.2vw,4.3rem)] font-bold leading-[1.25] text-black sm:pr-10 lg:tracking-[-0.045em]">
            Come and Run With the Vision
          </h2>
          <p className="mt-3 max-w-[1100px] text-[clamp(1.1rem,2.45vw,2rem)] font-normal leading-[1.4] tracking-[0.3px] text-black">
            This is a divine assignment. The journey has begun. God
            <br className="hidden lg:block" /> is leading step by step. All that
            matters is faithfulness.
            <br className="hidden lg:block" /> All that matters is souls. Will
            you be part of it?
          </p>
          <a
            href="/partner"
            className="mt-7 inline-flex h-[54px] w-full max-w-[200px] items-center justify-center rounded-[20px] bg-[#100052] px-8 py-4 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:min-h-[55px] sm:rounded-[22px]"
          >
            Partner with Us
          </a>
        </motion.div>
      </section>

      <motion.section className="mt-10 w-full block lg:hidden bg-white lg:my-10">
        
        <div className="relative mx-auto flex min-h-[400px] w-full max-w-[1554px] flex-col justify-end overflow-hidden rounded-[32px] bg-[#fff8f7] px-4 pb-12 pt-16 sm:rounded-[40px] lg:px-14 lg:pb-14 lg:min-h-[700px] lg:rounded-[32px] ">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
            <div className="w-full lg:w-[55%]">
              <h2 className="max-w-[780px] text-[30px] font-bold-font leading-[1.3] text-[#141927]  lg:text-[66px] lg:leading-[1]">
                Come and Run With
                <br /> the Vision
              </h2>

              <p className="mt-4 max-w-[740px] text-[17px] font-normal leading-[1.55] text-[#10265f]  lg:mt-4.5 lg:text-[18px] lg:leading-[1.5] ">
                This is a divine assignment. The journey has begun. God
                <br className="hidden lg:block" /> is leading step by step. All
                that matters is faithfulness.
                <br className="hidden lg:block" /> All that matters is souls.
                Will you be part of it?
              </p>
            </div>

            <Link
              href="/partner"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-[14px] bg-[#141927] py-[11px] pl-[24px] pr-[12px] text-[14px] font-semibold tracking-[0.3px] text-white shadow-[0_10px_16px_rgba(20,25,39,0.14),0_3px_5px_rgba(20,25,39,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_22px_rgba(20,25,39,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141927]focus-visible:ring-offset-4"
            >
              <span className="whitespace-nowrap">Partner with Us</span>

              <span className="flex size-[30px] items-center justify-center rounded-[10px] bg-[#fffaf9] text-[#10265f] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
