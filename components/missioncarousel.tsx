"use client";

import { sectionReveal } from "@/components/motion_presets";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ApiMission } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";

function truncateWords(text: string | undefined, limit: number) {
  if (!text) return "";

  const words = text.trim().split(/\s+/);
  return words.length > limit ? `${words.slice(0, limit).join(" ")} ...` : text;
}

export default function MissionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    data: missions,
    error,
    isLoading,
  } = useApiData<ApiMission[]>("/missions");
  const missionCount = missions?.length ?? 0;
  const isScrollable = missionCount > 2;

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    container.scrollTo({
      left:
        container.scrollLeft +
        card.getBoundingClientRect().left -
        container.getBoundingClientRect().left,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <motion.section
      {...sectionReveal}
      className="w-full overflow-hidden bg-white py-5"
    >
      <div
        ref={scrollRef}
        onScroll={isScrollable ? (event) => {
          const container = event.currentTarget;
          const cards = Array.from(container.children) as HTMLElement[];

          let closestIndex = 0;
          let closestDistance = Infinity;

          cards.forEach((card, index) => {
            const distance = Math.abs(
              card.getBoundingClientRect().left -
                container.getBoundingClientRect().left,
            );

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
        } : undefined}
        className={`flex gap-[18px] ${
          isScrollable
            ? "snap-x snap-mandatory overflow-x-auto scroll-smooth px-[5.5%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            : "flex-wrap justify-center"
        }`}
      >
        {(missions ?? []).map((mission, index) => (
          <Link
            key={mission?.id ?? mission?.slug ?? index}
            href={`/mission/${mission?.slug ?? mission?.id ?? ""}`}
            className={`group relative h-[340px] flex-none overflow-hidden rounded-[17px] lg:h-[380px] ${
              isScrollable
                ? "w-[min(700px,85vw)] snap-start"
                : missionCount === 1
                  ? "w-full max-w-[700px]"
                  : "w-full sm:w-[calc(50%-9px)] sm:max-w-[700px]"
            }`}
          >
            <Image
              src={getRecordImage(mission) || "/images/home/support.jpg"}
              alt={getRecordTitle(mission)}
              fill
              sizes="(max-width: 640px) 85vw, 700px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041234]/70 via-[#041234]/40 to-[#051232]/30" />

            <div className="absolute inset-x-0 bottom-0 px-[19px] pb-[39px] text-white sm:px-[19px]">
              <h2 className="mb-[12px] max-w-[440px] text-[25px] font-bold leading-[1.55] tracking-[-0.45px] sm:text-[31px] sm:leading-[1.35]">
                {getRecordTitle(mission)}
              </h2>

              <p className="max-w-[580px] text-[18px] font-normal leading-[1.15] tracking-[-0.25px] sm:text-[21px]">
                {truncateWords(mission?.description, 24)}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {isScrollable && <div className="mt-4 flex justify-center gap-2">
        {(missions ?? []).map((mission, index) => (
          <button
            key={mission?.id ?? mission?.slug ?? index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToCard(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-6 bg-neutral-900"
                : "w-2 bg-neutral-300 hover:bg-neutral-500"
            }`}
          />
        ))}
      </div>}
      {error && (
        <p role="alert" className="mx-auto mt-5 max-w-4xl px-5 text-red-700">
          Mission campaigns could not be loaded: {error}
        </p>
      )}
      {isLoading && (
        <p role="status" className="mx-auto mt-5 max-w-4xl px-5">
          Loading mission campaigns...
        </p>
      )}
    </motion.section>
  );
}
