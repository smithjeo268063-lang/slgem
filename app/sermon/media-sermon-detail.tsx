"use client";

import Image from "next/image";
import type { MediaItem } from "../media/media-data";
import { motion } from "framer-motion";
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

export default function MediaDetail({ item }: { item: MediaItem }) {
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

      <VisionarySection />
    </main>
  );
}
