"use client";

import { cardReveal, sectionReveal } from "@/components/motion_presets";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const missions = [
  {
    id: 1,
    title: "SLGEM Missions School, Ekhoenoguokhian",
    description: "from a makeshift rented building toward a permanent school",
    image: "/images/home/support.jpg",
  },
  {
    id: 2,
    title: "Ekhoenoguokhian Church Building",
    description:
      "A befitting church building for a community once closed to the gospel",
    image: "/images/home/support.jpg",
  },
  {
    id: 3,
    title: "Annual Camp Meeting, TV & Radio Outreach",
    description: "Sustaining our teaching and broadcast ministry",
    image: "/images/home/support.jpg",
  },
];

export default function MissionCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children[index] as HTMLElement | undefined;
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
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
        onScroll={(event) => {
          const container = event.currentTarget;
          const cards = Array.from(container.children) as HTMLElement[];

          let closestIndex = 0;
          let closestDistance = Infinity;

          cards.forEach((card, index) => {
            const distance = Math.abs(
              card.offsetLeft - container.offsetLeft - container.scrollLeft,
            );

            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
        }}
        className="flex snap-x snap-mandatory gap-[18px] overflow-x-auto scroll-smooth px-[5.5%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {missions.map((mission, index) => (
          <article
            // {...cardReveal(index)}
            key={mission.id}
            className="group relative h-[340px] w-[min(700px,80vw)] flex-none snap-start overflow-hidden rounded-[17px] lg:h-[380px] sm:w-[min(700px,85vw)]"
          >
            <img
              src={mission.image}
              alt={mission.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#041234]/70 via-[#041234]/40 to-[#051232]/30" />

            <div className="absolute inset-x-0 bottom-0 px-[19px] pb-[39px] text-white sm:px-[19px]">
              <h2 className="mb-[12px] max-w-[440px] text-[25px] font-bold leading-[1.55] tracking-[-0.45px] sm:text-[31px] sm:leading-[1.35]">
                {mission.title}
              </h2>

              <p className="max-w-[480px] text-[18px] font-normal leading-[1.15] tracking-[-0.25px] sm:text-[21px]">
                {mission.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {missions.map((mission, index) => (
          <button
            key={mission.id}
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
      </div>
    </motion.section>
  );
}
