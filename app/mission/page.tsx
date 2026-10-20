"use client";

import React from "react";
import { MotionConfig, motion } from "framer-motion";
import NextImage from "next/image";
import What_We_Do from "@/components/what_we_do";
import { cardReveal, sectionReveal } from "@/components/motion_presets";
import Link from "next/link";

type Mission = {
  id: number;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
};

const missions: Mission[] = [
  {
    id: 1,
    title: "Enugu Field Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
    raised: 3000,
    goal: 8000,
  },
  {
    id: 2,
    title: "Enugu Field Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
    raised: 6300,
    goal: 8000,
  },
  {
    id: 3,
    title: "Enugu Field Event",
    description:
      "This department focuses on direct soulwinning activities through: Evangelistic outreaches Open-air crusades Revival gatherings Community missions Rural evangelism The goal is simple: To reach people where they are and introduce them to the saving power of Jesus Christ. We believe no territory is too dark for the light of the gospel.",
    image: "/images/mission/the_event.jpg",
    raised: 4700,
    goal: 8000,
  },
];

const toMissionSlug = (title: string) => {
  const [firstWord, ...remainingWords] = title.trim().split(/\s+/);

  return [firstWord, ...remainingWords.map((word) => word.toLowerCase())].join(
    "-",
  );
};

/*
|--------------------------------------------------------------------------
| Progress Bar
|--------------------------------------------------------------------------
| The progress percentage is calculated from:
|
| raised / goal * 100
|
| We use Tailwind classes only for the actual width.
| No inline style is used.
|
| The class names are explicitly present so Tailwind can detect them.
|--------------------------------------------------------------------------
*/

const getProgressWidth = (percentage: number) => {
  if (percentage <= 0) return "w-0";
  if (percentage <= 5) return "w-[5%]";
  if (percentage <= 10) return "w-[10%]";
  if (percentage <= 15) return "w-[15%]";
  if (percentage <= 20) return "w-[20%]";
  if (percentage <= 25) return "w-[25%]";
  if (percentage <= 30) return "w-[30%]";
  if (percentage <= 35) return "w-[35%]";
  if (percentage <= 40) return "w-[40%]";
  if (percentage <= 45) return "w-[45%]";
  if (percentage <= 50) return "w-[50%]";
  if (percentage <= 55) return "w-[55%]";
  if (percentage <= 60) return "w-[60%]";
  if (percentage <= 65) return "w-[65%]";
  if (percentage <= 70) return "w-[70%]";
  if (percentage <= 75) return "w-[75%]";
  if (percentage <= 80) return "w-[80%]";
  if (percentage <= 85) return "w-[85%]";
  if (percentage <= 90) return "w-[90%]";
  if (percentage <= 95) return "w-[95%]";

  return "w-full";
};

const MissionPage = () => {
  return (
    <MotionConfig reducedMotion="user">
      <main className="lg:pb-36 pb-20">
        <motion.section
          {...sectionReveal}
          className="
    relative
    lg:h-[600px] h-[380px]
    w-full
   
    overflow-hidden
    bg-[#151720]
        lg:px-20 px-4 
        lg:py-36 pt-46 pb-10
  "
        >
          {/* Background Image */}
          <div
            className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
            style={{
              backgroundImage: "url('/images/mission/the_mission.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div
            className="
          absolute
          inset-0
          bg-[#111522]/[0.04]
        "
          />

          {/* Main Content */}
          <div
            className="
          relative
          z-10
          w-full flex flex-col justify-end h-full   
        "
          >
            {/* Main Heading */}
            <h1
              // initial={{ opacity: 0, y: 30 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{
              //   duration: 0.8,
              //   ease: [0.22, 1, 0.36, 1],
              // }}
              className="
            m-0
            max-w-full
            text-[36px]
            font-bold leading-[50px]
            lg:leading-[110px] text-start lg:text-start
            tracking-[0px]
            text-white
            lg:text-[86px]
            font-normal-font lg:uppercase capitalize
          "
            >
              Changing lives <br className="block lg:hidden" /> one{" "}
              <br className="hidden lg:block" /> cause at a{" "}
              <br className="block lg:hidden" />
              time
            </h1>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          variants={sectionReveal}
          viewport={{
            once: true,
            amount: 0.01,
          }}
          className="w-full px-[3.6%] py-[70px]"
        >
          <div className="w-full border-t border-[#1A1A1A]">
            <div className="flex w-full flex-col">
              {missions.map((mission) => {
                const calculatedProgress =
                  mission.goal > 0
                    ? Math.min(
                        Math.round((mission.raised / mission.goal) * 100),
                        100,
                      )
                    : 0;

                const progressWidth = getProgressWidth(calculatedProgress);

                return (
                  <motion.article
                    {...cardReveal(mission.id - 1)}
                    variants={sectionReveal}
                    viewport={{
                      once: true,
                      amount: 0.01,
                    }}
                    key={mission.id}
                    className="
                  flex
                  w-full
                  flex-col
                  gap-[40px]
                  border-b
                  border-[#1A1A1A]
                  py-[50px]
                  lg:flex-row
                  lg:items-center
                  lg:gap-[6%]
                "
                  >
                    {/* ======================================================
                    IMAGE
                ======================================================= */}
                    <div
                      key={`image-${mission.id}`}
                      className="
                    relative
                    h-[260px]
                    w-full
                    shrink-0
                    overflow-hidden
                    rounded-[36px]
                    sm:h-[320px]
                    lg:h-[380px]
                    lg:w-[36%]
                  "
                    >
                      <NextImage
                        src={mission.image}
                        alt={mission.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        priority={mission.id === 1}
                      />
                    </div>

                    {/* ======================================================
                    CONTENT
                ======================================================= */}
                    <div
                      key={`content-${mission.id}`}
                      className="
                    flex
                    w-full
                    flex-col
                    justify-center
                    lg:w-[60%]
                    lg:py-[20px]
                  "
                    >
                      {/* TITLE */}
                      <h2
                        className="
                      m-0
                      text-[24px]
                      font-[800]
                      leading-[1.15]
                      tracking-[0px]
                      text-black
                      sm:text-[32px] font-extrabold
                      lg:text-[28px] font-bold-font lg:uppercase capitalize
                    "
                      >
                        {mission.title}
                      </h2>

                      {/* DESCRIPTION */}
                      <p
                        className="
                      m-0
                        lg:mt-[26px] mt-[10px]
                      max-w-[95%]
                      text-[18px]
                      font-[400]
                      leading-[1.5]
                      
                      text-[#161616]
                      lg:text-[18px]
                      lg:leading-[1.5]
                    "
                      >
                        {mission.description}
                      </p>

                      {/* ====================================================
                      PROGRESS
                  ===================================================== */}
                      <div className="mt-[26px] w-full">
                        {/* TRACK */}
                        <div
                          className="
                        h-[16px]
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-[#E2E2E8]
                      "
                        >
                          {/* FILLED PORTION */}
                          <div
                            className={`
                          h-full
                          rounded-full
                          bg-[#16005B]
                          transition-all
                          duration-700
                          ease-out
                          ${progressWidth}
                        `}
                          />
                        </div>

                        {/* PROGRESS INFORMATION */}
                        <div
                          className="
                        mt-[10px]
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-[20px]
                      "
                        >
                          <p
                            className="
                          m-0
                          text-[22px]
                          font-[700]
                          leading-[1.2]
                          tracking-[-0.8px]
                          text-black
                          lg:text-[28px]
                        "
                          >
                            Raised: ${mission.raised}/{mission.goal}
                          </p>

                          <p
                            className="
                          m-0
                          shrink-0
                          text-[22px]
                          font-[700]
                          leading-[1.2]
                          tracking-[-0.8px]
                          text-black
                          lg:text-[28px]
                        "
                          >
                            {calculatedProgress}%
                          </p>
                        </div>
                      </div>

                      {/* ====================================================
                      VIEW DETAILS
                  ===================================================== */}
                      <Link
                        href={`/about-mission/${toMissionSlug(mission.title)}`}
                        className="
                      group
                      lg:mt-[60px] mt-[30px]
                      flex
                      w-fit
                      items-center
                      gap-[20px]
                      border-0
                      bg-transparent
                      p-0
                      text-left
                      text-[16px]
                      font-[700]
                      leading-none
                      tracking-[0px]
                      text-black
                      transition-all
                      duration-300
                      hover:gap-[26px]
                    "
                      >
                        <span>VIEW DETAILS</span>

                        <span
                          className="
                        text-[32px]
                        font-[400]
                        leading-none
                        transition-transform
                        duration-300
                        group-hover:translate-x-[4px]
                      "
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="w-full lg:px-10 px-4 lg:pt-4 pb-18 lg:pb-30 gap-10 flex flex-col"
        >
          <div>
            <p className="lg:text-[56px] text-[28px] leading-[48px] lg:leading-[72px] font-bold-font text-center">
              <span className="text-[#000000]">
                There are still communities without hopе.
              </span>{" "}
              <span className="text-[#000000]/25">
                Young people without direction. Families without peace.
                Believers without understanding. Many are waiting for someone to
                come.
              </span>
            </p>
          </div>

          <div>
            <p className="lg:text-[56px] text-[28px] leading-[48px] lg:leading-[72px] font-bold-font text-center">
              <span className="text-[#000000]">
                And we believe the Church must not stay silent.
              </span>{" "}
              <span className="text-[#000000]/25">
                Our mission is to bring the reality of Christ to people in
                practical, spiritual, and life transforming ways. Not through
                empty religion. But through truth, love, power, and compassion.
              </span>
            </p>
          </div>

          <nav className="flex justify-between flex-col lg:flex-row lg:px-10 px-0">
            <div className="w-full lg:mt-20 mt-0 lg:w-[47%] h-[140px] lg:h-[140px]">
              <NextImage
                src="/images/mission/growth.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full rounded-[18px] object-cover"
              />
            </div>

            <div className="hidden lg:block w-full lg:w-[47%] h-[140px] lg:h-[140px]">
              <NextImage
                src="/images/mission/growth.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full rounded-[18px] object-cover"
              />
            </div>
          </nav>

          <div>
            <h2 className="text-center text-[20px] lg:text-[28px] lg:mt-20 mt-12">
              WHAT WE DO
            </h2>
            <p className="lg:text-[64px] lg:mt-0 mt-5 text-[28px] leading-[48px] lg:leading-[72px] font-bold-font text-center">
              <span className="text-[#000000]">
                We go into communities, streets,
              </span>{" "}
              <span className="text-[#979797]">
                {" "}
                villages, schools, and public spaces with one goal: That souls
                will encounter Jesus. Through evangelistic outreaches, revival
                meetings, crusades, and open-air ministrations, we preach the
                gospel with simplicity and boldness. We believe no place is too
                dark for the light of Christ.
              </span>
            </p>
          </div>
        </motion.section>

        <motion.section {...sectionReveal}>
          <What_We_Do />
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="w-full flex flex-col px-5 lg:px-10 lg:py-30 lg:my-0 mt-16 mb-10 gap-10 lg:gap-30"
        >
          <nav className="flex flex-col gap-[20px] lg:flex-row lg:items-center justify-between lg:gap-10">
            <div
              className="
            contents lg:block w-full lg:w-[45%]"
            >
              <h2
                className="
            order-1
            m-0 text-[22px]
            lg:text-[28px]
            font-[700]
            leading-[1.2]
            text-[#333333] font-thin
          "
              >
                WHY WE DO THIS
              </h2>
              <p
                className="
          order-3
          m-0
            mt-0 lg:mt-[20px] text-[18px]
            lg:text-[38px]
            font-[400]
            lg:leading-[50px] leading-[28px]
            text-[#000000]
          "
              >
                Because souls matter. <br className="hidden lg:block" /> Because
                eternity is real. <br className="hidden lg:block" />
                Because there are still people who have never encountered the
                truth of the gospel clearly. And because we believe every life
                can bе transformed through Jesus Christ.
              </p>
            </div>

            <div className="order-2 h-[240px] w-full lg:w-[48%] lg:h-[500px]">
              <NextImage
                src="/images/mission/the_why.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full rounded-[22px] object-cover"
              />
            </div>
          </nav>

          <nav className="flex flex-col gap-[20px] lg:flex-row-reverse lg:items-center justify-between lg:gap-10">
            <div
              className="
            contents lg:block w-full lg:w-[48%]"
            >
              <h2
                className="
            order-1
            m-0
            lg:text-[56px] text-[24px]
            font-[700]
            leading-[1.2]
            text-[#000000] font-bold-font font-bold
          "
              >
                THIS MISSION IS STILL GROWING
              </h2>
              <p
                className="
          order-3
          m-0
            mt-0 lg:mt-[20px]
            lg:text-[34px] text-[18px]
            font-[400]
            leading-[32px] lg:leading-[44px]
            text-[#000000]
          "
              >
                The assignment is unfolding day by day. More communities to
                reach. More lives to restore. More territories to invade with
                light. And we believe God is only getting started.
              </p>
            </div>

            <div className="order-2 h-[240px] w-full lg:w-[45%] lg:h-[400px]">
              <NextImage
                src="/images/mission/growth.jpg"
                alt="Our Mission"
                width={600}
                height={400}
                className="h-full w-full rounded-[22px] object-cover"
              />
            </div>
          </nav>
        </motion.section>

        <motion.section
          {...sectionReveal}
          className="w-full bg-white lg:px-20 px-5"
        >
          <div className="relative mx-auto flex min-h-[380px] w-full max-w-[1554px] flex-col justify-end overflow-hidden rounded-[32px] bg-[#fff8f7] px-4 pb-12 pt-16 sm:rounded-[40px] lg:px-14 lg:pb-14 lg:min-h-[700px] lg:rounded-[32px] ">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              <div className="w-full lg:w-[55%]">
                <h2 className="max-w-[780px] text-[34px] font-bold-font leading-[1.02] text-[#141927]  lg:text-[66px] lg:leading-[1]">
                  Your Action Can
                  <br />
                  Change Lives
                </h2>

                <p className="mt-4 max-w-[740px] text-[18px] font-normal leading-[1.55] text-[#10265f]  lg:mt-4.5 lg:text-[18px] lg:leading-[1.5] ">
                  Join Givara today and be part of a growing community creating
                  positive impact together.
                </p>
              </div>

              <Link
                href="/"
                className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-[14px] bg-[#141927] py-[11px] pl-[24px] pr-[12px] text-[14px] font-semibold tracking-[0.3px] text-white shadow-[0_10px_16px_rgba(20,25,39,0.14),0_3px_5px_rgba(20,25,39,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_22px_rgba(20,25,39,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141927]focus-visible:ring-offset-4"
              >
                <span className="whitespace-nowrap">Get Involved Now</span>

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
    </MotionConfig>
  );
};

export default MissionPage;
