"use client";

import Image from "next/image";
import Link from "next/link";
import type { MediaItem } from "../media/media-data";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

type AlbumItem = {
  id: number;
  image: string;
};

const photoExcerptImages: AlbumItem[] = [
  {
    id: 1,
    image: "/images/home/mission2.jpg",
  },
  {
    id: 2,
    image: "/images/mission/the_why.jpg",
  },
  {
    id: 3,
    image: "/images/home/hero.jpg",
  },
  {
    id: 4,
    image: "/images/mission/evangelism.jpg",
  },
  {
    id: 5,
    image: "/images/media/experts.png",
  },
  {
    id: 6,
    image: "/images/home/sermon.jpg",
  },
];

const cardHeightsByIndex = [
  "h-[320px] sm:h-[460px] lg:h-[650px]",
  "h-[360px] sm:h-[500px] lg:h-[700px]",
  "h-[380px] sm:h-[560px] lg:h-[800px]",
  "h-[300px] sm:h-[420px] lg:h-[550px]",
  "h-[320px] sm:h-[460px] lg:h-[650px]",
  "h-[360px] sm:h-[500px] lg:h-[700px]",
] as const;

function DownloadButton({ image }: { image: string }) {
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = image;
    link.download = image.split("/").pop() || "photo";
    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label="Download image"
      className="
        absolute
        bottom-[25px]
        right-[25px]
        z-20
        flex
        lg:h-[62px] h-[45px]
        w-[45px]
        lg:w-[62px]
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-white/35
        text-white
        backdrop-blur-[6px]
        transition-all
        duration-300
        hover:bg-white/50
        hover:scale-105
        active:scale-95
      "
    >
      <Download strokeWidth={1.5} className="h-[29px] w-[29px]" />
    </button>
  );
}

function AlbumCard({ item, index }: { item: AlbumItem; index: number }) {
  return (
    <article
      className={`
        group
        inline-block
        relative
        w-full
        break-inside-avoid
        mb-[15px]
        ${cardHeightsByIndex[index % cardHeightsByIndex.length]}
        overflow-hidden
        lg:rounded-[47px] rounded-[27px]
        bg-[#EDEDED]
      `}
    >
      <Image
        src={item.image}
        alt={`Photo excerpt ${item.id}`}
        fill
        sizes="
          (max-width: 767px) 100vw,
          (max-width: 1023px) 50vw,
          33vw
        "
        className="
          object-cover
          object-center
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.02]
        "
      />

      <DownloadButton image={item.image} />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-transparent
          opacity-60
        "
      />
    </article>
  );
}

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

export default function MediaPhotoExcerpts({
  item,
  category,
}: {
  item: MediaItem;
  category: string;
}) {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pt-16 sm:px-8 sm:pt-16 lg:px-20 lg:pt-20 pb-20 lg:pb-0">
      {/* <Link
        href="/media"
        className="inline-flex items-center gap-3 text-sm font-bold text-black transition-opacity hover:opacity-60"
      >
        <span aria-hidden="true">←</span>
        Back to Media
      </Link> */}

      <h1 className="px-0 pt-8 text-start text-[36px] font-bold leading-[1.1] text-black sm:pt-12 sm:text-[56px] lg:p-8 lg:text-[88px]">
        {item.title}
        <br /> Photo Excerpt
      </h1>

      <article className="mt-4 lg:mt-2 grid grid-cols-1 gap-8  lg:items-center lg:gap-14">
        <div className="relative h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[260px] sm:rounded-[32px] lg:h-[360px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </article>

      <section
        className="
        w-full

        py-10
        sm:px-4
        sm:py-[53px]
        lg:px-5
      "
      >
        <div
          className="
          mx-auto
          w-full
          columns-1
          gap-x-[15px]
          md:columns-2
          lg:columns-3
          lg:gap-x-[22px]
        "
        >
          {photoExcerptImages.map((item, index) => (
            <AlbumCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="relative isolate my-0 w-full overflow-visible  pt-2 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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
          className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col lg:items-center  lg:text-center md:pt-[42px] lg:pt-[43px]"
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
}
