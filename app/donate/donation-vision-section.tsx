"use client";

import NextImage from "next/image";
import { motion } from "framer-motion";

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

export default function DonationVisionSection() {
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

      <section className="relative isolate my-0 w-full overflow-visible pt-10 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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
            href="#partnership"
            className="mt-7 inline-flex h-[54px] w-full max-w-[200px] items-center justify-center rounded-[20px] bg-[#100052] px-8 py-4 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:min-h-[55px] sm:rounded-[22px]"
          >
            Partner with Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
