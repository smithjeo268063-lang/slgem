"use client";

import Image from "next/image";
import { cardReveal, sectionReveal } from "@/components/motion_presets";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type MissionItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const missionItems: MissionItem[] = [
  {
    id: "01",
    title: "Evangelism & Crusades",
    description:
      "We take the gospel beyond the walls of the church through evangelistic outreaches, open-air crusades, revival gatherings, community missions, and rural evangelism. Our heart is to reach people where they are and introduce them to the saving power of Jesus Christ.",
    image: "/images/mission/evangelism.jpg",
  },
  {
    id: "02",
    title: "Discipleship & Teaching",
    description:
      "Salvation is the beginning - not the end. Many believers struggle because they have not been grounded in truth. That is why discipleship is a major part of our assignment. Our goal is not just converts. Our goal is mature believers.",
    image: "/images/mission/the_event.jpg",
  },
  {
    id: "03",
    title: "Social Missions & Compassion Outreach",
    description:
      "We demonstrate the love of Christ through practical acts of compassion and social missions. By meeting physical, emotional, and spiritual needs, we create opportunities to serve communities and reveal the heart of Jesus to people around us.",
    image: "/images/mission/the_mission.jpg",
  },
  {
    id: "04",
    title: "Online Invasion Project",
    description:
      "We use digital platforms and technology to take the gospel beyond geographical boundaries. Through online evangelism, teaching, discipleship, media, and digital outreach, we are committed to reaching people wherever they are in the world.",
    image: "/images/mission/evangelism.jpg",
  },
  {
    id: "05",
    title: "Intercessory Assignments",
    description:
      "We stand in prayer for individuals, communities, churches, and nations. Through focused intercession, we seek God's guidance, strength, and intervention as we fulfil our assignment to share the gospel and serve others.",
    image: "/images/mission/the_mission.jpg",
  },
  //   {
  //     id: "06",
  //     title: "Children & Teens Outreach",
  //     description:
  //       "We reach children and teenagers with the message of Jesus Christ through age-appropriate teaching, outreach, discipleship, and practical support. Our desire is to help the next generation grow in faith and build a lasting relationship with God.",
  //     image: "/images/mission/the_event.jpg",
  //   },
  //   {
  //     id: "07",
  //     title: "Believers Bible Institute",
  //     description:
  //       "We equip believers with biblical knowledge, spiritual understanding, and practical ministry skills. Through sound teaching and intentional training, we prepare people to live out their faith and serve effectively in God's work.",
  //     image: "/images/mission/the_event.jpg",
  //   },
];

const evangelismMobileDescription =
  "We go into communities, streets, villages, schools, and public spaces with one goal: That souls will encounter Jesus. Through evangelistic outreaches, revival meetings, crusades, and open-air ministrations, we preach the gospel with simplicity and boldness. We believe no place is too dark for the light of Christ.";

export default function What_We_Do() {
  // Desktop behavior remains unchanged.
  const [activeIndex, setActiveIndex] = useState(1);

  // Mobile: the expanded item stays in its original list position.
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(0);

  const getDescription = (item: MissionItem) =>
    item.id === "01" ? evangelismMobileDescription : item.description;

  return (
    <motion.section
      {...sectionReveal}
      className="w-full overflow-hidden bg-[#FFF8F7]"
    >
      {/* ========================================================
          DESKTOP VIEW — PRESERVED
      ========================================================= */}
      <div
        className="
          mx-auto
          hidden
          min-h-fit
          w-full
          flex-col
          lg:px-[2vw] px-4
          py-[80px]
          lg:flex
          lg:flex-row
        "
      >
        {missionItems.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <motion.div
              {...cardReveal(index)}
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`
                relative
                h-[600px]
                cursor-pointer
                overflow-visible
                border-[#C8C5C3]
                transition-[flex-basis,width]
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${index === 0 ? "border-r" : index > 0 ? "border-r" : ""}
                ${isActive ? "basis-[calc(100%-300px)]" : "basis-[100px]"}
              `}
            >
              {!isActive && (
                <div
                  key={`collapsed-${item.id}`}
                  className="flex h-full w-full flex-col items-center"
                >
                  <div
                    className="
                      flex h-[105px] w-full shrink-0
                      items-center justify-center pt-[2px]
                    "
                  >
                    <span
                      className="
                        text-[18px] font-[400] leading-none
                        tracking-[-0.4px] text-[#111111]
                      "
                    >
                      {item.id}
                    </span>
                  </div>

                  <div
                    className="
                      flex flex-1 items-center justify-center pb-[20px]
                    "
                  >
                    <h3
                      className="
                        m-0 whitespace-nowrap text-[24px] font-[700]
                        leading-none text-[#0B0B0B]
                        [writing-mode:vertical-rl] rotate-180
                      "
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              )}

              {isActive && (
                <div
                  key={`expanded-${item.id}`}
                  className="
                    relative flex h-full w-full flex-col
                    px-[42px] pt-[0px]
                  "
                >
                  <div
                    className="
                      flex w-full shrink-0 flex-row items-start
                    "
                  >
                    <div className="w-[50%] shrink-0 pr-[30px]">
                      <span
                        className="
                          block text-[22px] font-[400] leading-[1]
                          tracking-[-1px] text-[#0B0B0B]/30
                        "
                      >
                        {item.id}
                      </span>

                      <h2
                        className="
                          m-0 mt-[10px] max-w-[620px] text-[56px]
                          font-[800] leading-[65px] text-[#050505]
                        "
                      >
                        {item.title}
                      </h2>
                    </div>

                    <div className="w-[50%] shrink-0 pl-[0px] pt-[7px]">
                      <p
                        className="
                          m-0 max-w-[545px] text-[20px] font-[400]
                          leading-[1.7] tracking-[-0.45px] text-[#DEDCDC]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      relative mt-[36px] h-[340px] w-full shrink-0
                      overflow-hidden rounded-[64px]
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index === 1}
                      className="
                        object-cover object-center
                        transition-transform duration-700 ease-out
                      "
                      sizes="70vw"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================
          MOBILE VIEW — EXPANDS IN PLACE
      ========================================================= */}
      <div className="w-full px-5 pb-[45px] pt-0 lg:hidden">
        {missionItems.length > 0 &&
          missionItems
            .concat(missionItems.length < 7 ? missionItems.slice(0, 0) : [])
            .map((item) => item).length > 0 &&
          null}

        {missionItems.length > 0 &&
          [
            ...missionItems,
            {
              id: "05",
              title: "Intercessory Assignments",
              description: missionItems[0].description,
              image: "/images/mission/the_mission.jpg",
            },
            {
              id: "06",
              title: "Children & Teens Outreach",
              description: missionItems[1].description,
              image: "/images/mission/the_event.jpg",
            },
            {
              id: "07",
              title: "Believers Bible Institute",
              description: missionItems[1].description,
              image: "/images/mission/the_event.jpg",
            },
          ].map((item, index, items) => {
            const isActive = mobileActiveIndex === index;

            return (
              <motion.div
                {...cardReveal(index + missionItems.length)}
                key={index}
                className={`
                  w-full
                  ${index !== 0 ? "border-t border-[#111111]" : ""}
                `}
              >
                {/* MISSION ROW */}
                <button
                  key={`toggle-${item.id}-${index}`}
                  type="button"
                  onClick={() => setMobileActiveIndex(isActive ? null : index)}
                  aria-expanded={isActive}
                  aria-label={`${isActive ? "Collapse" : "Expand"} ${item.title}`}
                  className="
                    relative flex min-h-[126px] w-full items-center
                    justify-between gap-[18px] py-[30px] text-left
                  "
                >
                  <span
                    className={`
                      min-w-0 flex-1 text-[20px]
                      font-[700] leading-[1.35] tracking-[0px]
                      text-[#080808]
                      ${isActive ? "hidden" : "block"}
                    `}
                  >
                    {item.title}
                  </span>

                  {isActive ? (
                    <div className="w-full">
                      <span
                        className="
                          block text-[24px] lg:text-[36px] font-[400] leading-none
                          tracking-[-1px] text-[#080808]
                        "
                      >
                        {item.id}
                      </span>

                      <h2
                        className="
                          mt-[12px] mb-0 w-full
                          text-[clamp(32px,8vw,84px)] font-[700]
                          leading-[1.2] tracking-[0px] text-[#050505]
                        "
                      >
                        {item.title}
                      </h2>
                    </div>
                  ) : null}

                  <span
                    className={`
                      shrink-0 text-[24px] font-[400] leading-none
                      tracking-[-0.4px] text-[#080808]
                      [writing-mode:vertical-rl] rotate-180
                      ${isActive ? "hidden" : "block"}
                    `}
                  >
                    {item.id}
                  </span>
                </button>

                {/* EXPANDED DETAILS — IN THE SAME ROW */}
                <AnimatePresence
                  key={`details-presence-${item.id}-${index}`}
                  initial={false}
                >
                  {isActive && (
                    <motion.div
                      key={`details-${item.id}-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="w-full pb-[20px]">
                        <div
                          className="
                            relative mt-2 aspect-[1.69/1] h-[220px] w-full
                            overflow-hidden rounded-[26px]
                          "
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 1023px) calc(100vw - 58px), 0px"
                            className="object-cover object-center"
                          />
                        </div>

                        <p
                          className="
                            m-0 mt-[30px] w-full
                            text-[clamp(18px,4.4vw,30px)] font-[400]
                            leading-[1.52] tracking-[-0.65px] text-[#111111]
                          "
                        >
                          {index === 0
                            ? evangelismMobileDescription
                            : item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
      </div>
    </motion.section>
  );
}
