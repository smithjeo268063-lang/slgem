"use client";

import Image from "next/image";
import type { MediaItem } from "../media/media-data";
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

export default function MediaDetail({
  item,
}: {
  item: MediaItem;
}) {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 pt-16 sm:px-8 sm:pt-16 lg:px-20 lg:pt-20 pb-12 lg:pb-0">
      {/* <Link
        href="/media"
        className="inline-flex items-center gap-3 text-sm font-bold text-black transition-opacity hover:opacity-60"
      >
        <span aria-hidden="true">←</span>
        Back to Media
      </Link> */}

      <h1 className="px-0 pt-8 lg:text-center text-start text-[36px] font-bold leading-[1.12] text-black sm:pt-10 sm:text-[56px] lg:p-8 lg:text-[88px]">
        {item.title}
      </h1>

      <article className="mt-4 lg:mt-8 grid grid-cols-1 gap-8  lg:items-center lg:gap-14">
        {item.embed_url ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <iframe
              src={item.embed_url}
              title={item.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
        <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] sm:h-[340px] sm:rounded-[32px] lg:h-[420px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
        )}
      </article>

      <div>
        {/* <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[#555555]">
          {category}
        </p> */}
        <p className="mt-4 lg:mt-8 text-[18px] leading-[32px] lg:leading-[1.4] text-[#0f0f0f] lg:text-[28px]">
          {item.description}
        </p>
      </div>

      <section className="relative isolate my-0 w-full overflow-visible pt-8 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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
}
