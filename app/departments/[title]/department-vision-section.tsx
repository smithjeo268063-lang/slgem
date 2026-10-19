"use client";

import { motion } from "framer-motion";

export default function DepartmentVisionSection() {
  return (
    <section className="relative mt-10 isolate my-0 w-full overflow-visible pt-2 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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

      <motion.div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col md:pt-[42px] lg:items-center lg:pt-[43px] lg:text-center">
        <h2 className="max-w-[1100px] pr-0 text-[30px] font-bold leading-tight text-black sm:text-[40px] lg:text-[58px]">
          Come and Run With the Vision
        </h2>

        <p className="mt-3 max-w-[1100px] text-[18px] font-normal leading-[1.5] text-black sm:text-lg lg:text-[24px] lg:leading-[1.4]">
          This is a divine assignment. The journey has begun. God
          <br className="hidden lg:block" /> is leading step by step. All that
          matters is faithfulness.
          <br className="hidden lg:block" /> All that matters is souls. Will you
          be part of it?
        </p>

        <a
          href="#partnership"
          className="mt-6 inline-flex h-12 w-full max-w-[200px] items-center justify-center rounded-xl bg-[#100052] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:h-[55px] sm:rounded-[22px] sm:text-[18px]"
        >
          Partner with Us
        </a>
      </motion.div>
    </section>
  );
}
