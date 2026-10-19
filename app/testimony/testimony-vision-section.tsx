"use client";

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

export default function TestimonyVisionSection() {
  return (
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
        <h2 className="max-w-[1100px] pr-0 text-[clamp(2rem,4.2vw,4.3rem)] font-bold leading-[1.25] text-black sm:pr-10 lg:tracking-[-0.045em]">
          Come and Run With the Vision
        </h2>
        <p className="mt-3 max-w-[1100px] text-[clamp(1.13rem,2.35vw,2rem)] font-normal leading-[1.4] tracking-[0.3px] text-black">
          This is a divine assignment. The journey has begun. God
          <br className="hidden lg:block" /> is leading step by step. All that
          matters is faithfulness.
          <br className="hidden lg:block" /> All that matters is souls. Will you
          be part of it?
        </p>
        <a
          href="#partnership"
          className="mt-7 inline-flex h-[54px] w-full max-w-[200px] items-center justify-center rounded-[20px] bg-[#100052] px-8 py-4 text-[18px] font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:min-h-[55px] sm:rounded-[22px]"
        >
          Partner with Us
        </a>
      </motion.div>
    </section>
  );
}
