"use client";

import MissionCarousel from "@/components/missioncarousel";
import { cardReveal, sectionReveal } from "@/components/motion_presets";
import { MotionConfig, motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";

const missions = [
  {
    sort_order: 1,
    description:
      "Depopulate the kingdom of darkness and populate the Kingdom of God",
  },
  {
    sort_order: 2,
    description:
      "Break the controlling powers of hell over lives through continuous intercession",
  },
  {
    sort_order: 3,
    description:
      "Teach the fundamental truths of the gospel, freeing believers from the bondage of ignorance",
  },
  {
    sort_order: 4,
    description:
      "Put succour in the hurting wounds of the forgotten — in the streets, prisons, orphanages, villages, and schools",
  },
  {
    sort_order: 5,
    description:
      "Invade the internet with the gospel — reaching the lost online, in unconventional but lawful ways",
  },
];

const partners = [
  {
    number: "01",
    title: "Covenant Frontline Partners",
    description: "Serve hands-on in our outreaches",
  },
  {
    number: "02",
    title: "Covenant Prayer Partners",
    description: "Stand with us in prayer",
  },
  {
    number: "03",
    title: "Covenant Seed Partners",
    description: "Give financially, one-time or ongoing",
  },
  {
    number: "04",
    title: "Covenant Study Partners",
    description: "Go deeper with us in the Word",
  },
];

const revealProps = sectionReveal;

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="w-full flex flex-1 flex-col lg:gap-20 gap-12 px-0 py-0 pb-16 lg:pb-40">
        <section
          className="
    relative
    lg:h-[891px] h-fit
    w-full
   
    overflow-hidden
    bg-[#151720]
    lg:px-20 px-4 lg:pb-0
    lg:pt-36 pt-46 pb-20
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
              backgroundImage: "url('/images/home/hero.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div
            className="
          absolute
          inset-0
          bg-[#FDAF001A]
        "
          />

          {/* Main Content */}
          <div
            className="
          relative
          z-10
          w-full flex flex-col lg:gap-12 gap-8
        "
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
            m-0
            max-w-full
            lg:max-w-[920px]
            text-[36px]
            font-bold leading-[50px]
            lg:leading-[80px] text-center lg:text-start
            tracking-[0px]
            text-white
            lg:text-[63px]
            font-normal-font
          "
            >
              Reaching the <span className="italic text-[#FFAA00]">Lost</span>
              <br />
              with the Gospel In Its
              <br />
              Simplicity and Power
            </motion.h1>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className=" flex flex-col items-end
          "
            >
              <nav
                className=" w-full flex flex-col lg:items-start items-center
            lg:w-[475px]
            lg:max-w-[calc(100%-40px)]"
              >
                <p
                  className="
              m-0
              text-[18px] leading-[26px] font-thin text-center lg:text-start
              font-semibold
              lg:leading-[32px]
              tracking-[0px]
              text-white lg:font-normal-font
            "
                >
                  There are people all around us — in the streets, in villages,
                  in prisons, in forgotten corners of the world — who have never
                  truly encountered the love of God. SLGEM exists to find them,
                  teach them, heal them, and bring them home.
                </p>

                <motion.a
                  href="#missions"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="
              mt-[36px]
              flex
              lg:h-[56px] h-[48px]
              lg:w-[287px] w-[250px]
              items-center
              justify-center
              rounded-[20px]
              bg-white text-[18px]
              lg:text-[20px]
              font-bold
              text-[#071A52]
              shadow-sm
              transition-all
              duration-300
              hover:bg-[#f5f5f5]
            "
                >
                  Check our missions
                </motion.a>
              </nav>
            </motion.div>
          </div>
        </section>

        <div
          className="w-full flex flex-col lg:gap-20 gap-16 lg:px-22 px-5 py-0"
          id="therest"
        >
          <motion.section
            {...revealProps}
            className="w-full flex flex-col lg:gap-20 gap-6"
            id="missions"
          >
            <motion.p
              {...revealProps}
              className="lg:text-[40px] text-[20px] leading-[32px] lg:leading-[50px] font-bold-font"
            >
              <span className=" text-[#131927]">
                SLGEM is a teaching and evangelistic ministry with one mandate:
              </span>{" "}
              <span className="text-[#9EA2AE]">
                to take the gospel of salvation and healing to the lost, in its
                simplicity and power. We don&apos;t just preach a message — we
                plant it. We teach believers the fundamental truths of the
                Christian faith, with a relentless emphasis on walking in love,
                so they can step into a victorious Christian life and stay
                there.
              </span>
            </motion.p>

            <motion.div
              {...revealProps}
              className="w-full overflow-hidden rounded-[14px] lg:rounded-[24px] lg:h-[480px] h-[220px]"
            >
              <NextImage
                src="/images/home/mission.png"
                alt="SLGEM Mission"
                width={1920}
                height={1080}
                className="w-full lg:h-[480px] h-[220px] object-cover"
              />
            </motion.div>

            <div className="w-full mt-3 lg:mt-0 flex flex-col lg:flex-row lg:gap-12 gap-6 justify-between">
              <motion.div
                {...revealProps}
                id="title"
                className="flex flex-col gap-6 w-full lg:w-[40%]"
              >
                <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font">
                  <span>Our Missions</span>{" "}
                  <p className="bg-[#FDAF00] lg:w-[8px] lg:h-[6px] w-[7px] h-[5px] mt-2" />
                </h2>

                <p className="lg:text-[40px] text-[24px] leading-[32px] lg:leading-[50px] font-bold-font">
                  <span className=" text-[#131927]">
                    We step out in faith into
                  </span>{" "}
                  <span className="text-[#FDAF00]">dark territories</span>{" "}
                  <span className=" text-[#131927]">to:</span>
                </p>
              </motion.div>

              <div className="flex flex-col gap-2 lg:w-[53%] w-full">
                {missions.map((mission, index) => (
                  <motion.div
                    key={mission.sort_order}
                    {...revealProps}
                    transition={{
                      ...revealProps.transition,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col gap-1 bg-[#FFF8F7] p-[12px] lg:p-[16px] rounded-[12px]"
                  >
                    <h3 className="text-[#9EA2AE] text-[20px] font-bold-font">
                      {mission?.sort_order}
                    </h3>
                    <p className="text-[18px] leading-[28px] lg:text-[22px] leading-[30px] font-normal-font text-[#000000]">
                      {mission.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="w-full flex flex-col gap-12"
            id="vision"
          >
            <motion.div
              {...revealProps}
              id="title"
              className="flex flex-col gap-6 w-full lg:w-[40%]"
            >
              <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font   ">
                <span>What We Do</span>{" "}
                <p className="bg-[#FDAF00] lg:w-[8px] lg:h-[6px] w-[7px] h-[5px] mt-2" />
              </h2>

              <p className="lg:text-[40px] text-[24px] leading-[32px] lg:leading-[50px] font-bold-font">
                <span className=" text-[#131927]">Seven Arms,</span>{" "}
                <br className="hidden lg:block" />
                <span className="text-[#FDAF00]">One Mandate</span>
              </p>
            </motion.div>

            <nav className="flex flex-col gap-4 w-full">
              {/* first row of mandate cards */}
              <div
                id="mandate_cards1"
                className="w-full flex flex-col lg:flex-row gap-3.5"
              >
                <motion.div
                  {...revealProps}
                  whileHover={{ y: -6 }}
                  className=" w-full lg:w-[55.5%] min-h-fit h-[330px] lg:h-[480px] flex flex-col gap-6 bg-[#FDAF00] pt-[30px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Evangelistic Outreaches & Missions
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    We go wherever God sends us, presenting the gospel to the
                    lost where they are — and working with local churches to
                    disciple every soul we win. Where there&apos;s no church, we
                    plant one, then hand it to a collaborating church to carry
                    forward.
                  </p>
                </motion.div>
                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.12 }}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[44.5%] min-h-fit h-[240px] lg:h-[480px] flex flex-col gap-6 bg-[#004EFC]  pt-[30px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Church Revival
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    Camp meetings, discipleship training, books, and teaching
                    materials that bring the Church to maturity in the
                    fundamental truths of the gospel — and in the practice of
                    walking in love
                  </p>
                </motion.div>
              </div>

              {/* second row of mandate cards */}
              <div
                id="mandate_cards2"
                className="w-full flex flex-col lg:flex-row gap-3.5"
              >
                <motion.div
                  {...revealProps}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[44.5%] min-h-fit h-[330px] lg:h-[480px] flex flex-col gap-6 bg-[#385AA7]  pt-[30px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Social Missions
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    Meeting physical and emotional needs — food, clothing,
                    medical care, education — for those neglected by society.
                    Our free missions school at Ekhoenoguokhian, launched in
                    2022, has grown from a class under a tree into a growing
                    community of learners with no fees, free uniforms, and free
                    materials.
                  </p>
                </motion.div>
                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.12 }}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[28%] min-h-fit h-[250px] lg:h-[480px] flex flex-col gap-6 bg-[#BD922F] pt-[24px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Intercessory Army
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    An army of intercessors on their knees for the lost —
                    praying souls into the Kingdom, praying for the end-time
                    revival, and standing in the gap three times a week.
                  </p>
                </motion.div>
                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.24 }}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[28%] min-h-fit h-[300px] lg:h-[480px] flex flex-col gap-6 bg-[#7D6A3E] pt-[24px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Intercessory Army
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    An army of intercessors on their knees for the lost —
                    praying souls into the Kingdom, praying for the end-time
                    revival, and standing in the gap three times a week.
                  </p>
                </motion.div>
              </div>

              {/* third row of mandate cards */}
              <div
                id="mandate_cards1"
                className="w-full flex flex-col lg:flex-row gap-3.5"
              >
                <motion.div
                  {...revealProps}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[43.5%] min-h-fit h-[240px] lg:h-[480px] flex flex-col gap-6 bg-[#0200FC] pt-[30px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Believers Bible Institute
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    A free Bible school equipping believers — not just ministers
                    — with everything they need to walk in and enjoy all that
                    belongs to them in Christ.
                  </p>
                </motion.div>
                <motion.div
                  {...revealProps}
                  transition={{ ...revealProps.transition, delay: 0.12 }}
                  whileHover={{ y: -6 }}
                  className="w-full lg:w-[56.5%] min-h-fit h-[300px] lg:h-[480px] flex flex-col gap-6 bg-[#009EFC]  pt-[30px] lg:pl-[28px] lg:pr-[35px] px-[15px] pb-[26px] rounded-[16px] lg:justify-between"
                >
                  <h2 className="text-[24px] lg:text-[30px] font-bold-font text-white">
                    Children & Teens Outreach
                  </h2>

                  <p className="text-[18px] lg:leading-[28px] leading-[26px] font-normal-font text-white">
                    Recruit them young into the Lord&apos;s Army. Bibles,
                    materials, and outreach designed to root children and teens
                    in Christ early — including over 300 free bibles distributed
                    across Nigeria.
                  </p>
                </motion.div>
              </div>
            </nav>
          </motion.section>

          <motion.section
            {...revealProps}
            className="w-full flex flex-col lg:gap-30 gap-15 bg-[#FFF8F7] rounded-[32px] lg:px-[70px] lg:py-[80px] lg:my-10 px-4 py-10"
            id="vision"
          >
            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-12 justify-between">
              <div
                id="title"
                className="flex flex-col lg:gap-6 gap-5 w-full lg:w-[45%]"
              >
                <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font">
                  <span>Sermons</span>{" "}
                  <p className="bg-[#FDAF00] w-[8px] h-[6px] mt-2" />
                </h2>

                <h1 className=" text-[26px] lg:text-[40px] leading-[32px] lg:leading-[50px] font-bold-font">
                  <span className=" text-[rgb(19,25,39)]">
                    Here the Word That&apos;s
                  </span>{" "}
                  <br className="hidden lg:block" />
                  <span className="text-[#FDAF00]">Changing Lives</span>
                </h1>

                <p className=" text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-normal-font text-[#000000]">
                  Every message we teach is built on one foundation: the
                  fundamental truths of the gospel, taught in simplicity and
                  power, so believers can walk in love and live victoriously.
                </p>

                <a
                  href="/media"
                  className="text-[#000] font-bold flex gap-4 items-center text-[15px] lg:text-[16px]"
                >
                  <span>View all sermons</span>
                  <span
                    className="
                        text-[24px]
                        font-[400]
                        leading-none
                        transition-transform
                        duration-300
                        group-hover:translate-x-[4px]
                      "
                  >
                    →
                  </span>
                </a>
              </div>

              <div className="lg:w-[48%] w-full overflow-hidden rounded-[16px] h-[220px] lg:h-[330px]">
                <NextImage
                  src="/images/home/sermon.jpg"
                  alt="SLGEM Sermon"
                  width={1920}
                  height={1080}
                  className="w-full h-[220px] lg:h-[330px] object-cover"
                />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row-reverse gap-5 lg:gap-12 justify-between">
              <div
                id="title"
                className="flex flex-col lg:gap-6 gap-5 w-full lg:w-[48%]"
              >
                <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font">
                  <span>Events</span>{" "}
                  <p className="bg-[#FDAF00] w-[8px] h-[6px] mt-2" />
                </h2>

                <h1 className="text-[26px] lg:text-[40px] leading-[32px] lg:leading-[50px] font-bold-font">
                  <span className="text-[#FDAF00]">Changing Lives</span>{" "}
                  <span className=" text-[rgb(19,25,39)]">
                    Where We&apos;re <br className="hidden lg:block" />{" "}
                    Gathering Next
                  </span>
                </h1>

                <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-normal-font text-[#000000]">
                  From our weekly teaching meetings to our annual camp meeting
                  and partners conference, there&apos;s always a place to
                  gather, grow, and go with us.
                </p>

                <Link
                  href="/events"
                  className="text-[#000] flex gap-4 items-center font-bold text-[15px] lg:text-[16px]"
                >
                  <span>View all Events</span>
                  <span
                    className="
                        text-[24px]
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

              <div className="w-full lg:w-[42%] overflow-hidden rounded-[16px] h-[220px] lg:h-[330px]">
                <NextImage
                  src="/images/home/events.jpg"
                  alt="SLGEM Event"
                  width={1920}
                  height={1080}
                  className="w-full h-[220px] lg:h-[330px] object-cover"
                />
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-12 justify-between">
              <div
                id="title"
                className="flex flex-col lg:gap-6 gap-5 w-full lg:w-[45%]"
              >
                <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font">
                  <span>Missions</span>{" "}
                  <p className="bg-[#FDAF00] w-[8px] h-[6px] mt-2" />
                </h2>

                <h1 className="text-[26px] lg:text-[40px] leading-[32px] lg:leading-[50px] font-bold-font">
                  <span className=" text-[rgb(19,25,39)]">
                    Here the Word That&apos;s
                  </span>{" "}
                  <br className="hidden lg:block" />
                  <span className="text-[#FDAF00]">Changing Lives</span>
                </h1>

                <p className="text-[18px] lg:text-[20px] leading-[28px] lg:leading-[28px] font-normal-font text-[#000000]">
                  Every message we teach is built on one foundation: the
                  fundamental truths of the gospel, taught in simplicity and
                  power, so believers can walk in love and live victoriously.
                </p>

                <a
                  href="/mission"
                  className="text-[#000] font-bold flex gap-4 items-center text-[15px] lg:text-[16px]"
                >
                  <span>View all Missions</span>
                  <span
                    className="
                        text-[24px]
                        font-[400]
                        leading-none
                        transition-transform
                        duration-300
                        group-hover:translate-x-[4px]
                      "
                  >
                    →
                  </span>
                </a>
              </div>

              <div className="w-full lg:w-[48%] overflow-hidden rounded-[16px] h-[220px] lg:h-[330px]">
                <NextImage
                  src="/images/home/mission2.jpg"
                  alt="SLGEM Mission"
                  width={1920}
                  height={1080}
                  className="w-full h-[220px] lg:h-[330px] object-cover"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="w-full flex flex-col gap-12 lg:my-5"
            id="vision"
          >
            <div className="w-full flex flex-col lg:flex-row gap-12 justify-between">
              <div
                id="title"
                className="flex flex-col lg:gap-6 gap-4 w-full lg:w-[55%]"
              >
                <h2 className="flex gap-2 items-center text-[17px] lg:text-[18px] text-[#FDAF00] lg:font-bold-font font-normal-font ">
                  <span>Where W e&apos;ve Been</span>{" "}
                  <p className="bg-[#FDAF00] w-[8px] h-[6px] mt-2" />
                </h2>

                <h1 className="text-[24px] lg:text-[42px] leading-[32px] lg:leading-[50px] font-bold-font">
                  <span className=" text-[rgb(19,25,39)]">A</span>{" "}
                  <span className="text-[#FDAF00]">Decade</span>{" "}
                  <span className=" text-[rgb(19,25,39)]">
                    of Missions, Miracles <br /> and Ground Gained
                  </span>
                </h1>

                <p className="text-[18px] lg:text-[21px] leading-[28px] lg:leading-[32px] font-normal-font text-[#000000]">
                  From our first crusade at the Rubber Research Institute of
                  Nigeria to missions in Iguoriakhi, Okoro, Amienghomwan, and
                  Ekhoenoguokhian — and international outreach across Para and
                  São Paulo, Brazil — SLGEM has seen hundreds of souls saved,
                  healed, and delivered. In communities once closed to the
                  gospel for generations, churches have been planted, land has
                  been purchased, and lives have been transformed.
                </p>

                <a
                  href="#"
                  className="text-[#000] font-bold text-[16px] lg:text-[18px] mt-2"
                >
                  See Our Missions Story
                </a>
              </div>

              <div className="w-full lg:w-[40%] overflow-hidden rounded-[16px] h-[300px] lg:h-[460px] mt-[-20px] lg:mt-0">
                <NextImage
                  src="/images/home/sermon.jpg"
                  alt="SLGEM Sermon"
                  width={1920}
                  height={1080}
                  className="w-full h-[300px] lg:h-[460px] object-cover"
                />
              </div>
            </div>
          </motion.section>

          <motion.section
            {...revealProps}
            className="w-full flex flex-col gap-12 items-center lg:mt-20"
            id="join_the_work"
          >
            <div
              id="title"
              className="flex flex-col gap-4 text-center w-full lg:w-[50%]"
            >
              <h2 className="flex gap-2 items-center text-center justify-center text-[18px] text-[#131927] font-bold-font">
                <span>Join the Work</span>{" "}
                <p className="bg-[#131927] w-[8px] h-[6px] mt-2" />
              </h2>

              <h1 className="text-[26px] lg:text-[42px] mt-4 leading-[32px] lg:leading-[50px] font-bold-font">
                <span className="text-[#FDAF00] font-bold-italic-font">
                  Four Ways
                </span>{" "}
                <span className=" text-[rgb(19,25,39)]">
                  to <br className="hidden lg:block" /> Partner With Us
                </span>
              </h1>

              <p className="text-[18px] lg:text-[21px] leading-[26px]lg:leading-[32px] font-normal-font text-[#000000]">
                You don&apos;t have to go into the field to be part of this.
                Partnership with SLGEM means combining resources — spiritual,
                material, or time — toward a common goal.
              </p>
            </div>

            <nav className="w-full lg:w-[68%] bg-white  text-black lg:px-6 lg:py-[50px]">
              <div className="mx-auto grid w-full max-w-[1000px] grid-cols-1 items-start gap-y-14 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-0 lg:gap-x-12">
                {partners.map((partner) => (
                  <motion.article
                    {...cardReveal(Number(partner.number) - 1)}
                    key={partner.number}
                    className={`min-w-0 rounded-b-[14px] border-b-[1.4px] border-[#212936] px-2 pb-6 sm:px-3 sm:pb-12 lg:px-5 lg:pb-[40px] ${
                      partner.number === "02"
                        ? "sm:mt-[60px]"
                        : partner.number === "03"
                          ? "sm:mt-[64px]"
                          : partner.number === "04"
                            ? "sm:mt-[120px]"
                            : ""
                    }`}
                  >
                    <span
                      key={`number-${partner.number}`}
                      className="mb-10 blockfont-bold-font leading-[1.2] text-[24px] lg:mb-[30px] lg:text-[26px]"
                    >
                      {partner.number}
                    </span>

                    <h2
                      key={`title-${partner.number}`}
                      className="mt-4 lg:mt-0 mb-[10px] max-w-[280px] lg:max-w-[360px] font-bold-font leading-[1.14] text-[26px] lg:text-[28px] lg:leading-[1.12]"
                    >
                      {partner.title}
                    </h2>

                    <p
                      key={`description-${partner.number}`}
                      className="text-[16px] font-normal leading-[1.6] sm:leading-[1.45] lg:text-[18px]"
                    >
                      {partner.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </nav>
          </motion.section>

          <motion.section
            {...revealProps}
            className="w-full flex flex-col gap-4 lg:items-center"
            id="current_needs"
          >
            <div
              id="title"
              className="flex flex-col lg:gap-4 lg:text-center w-full lg:w-[50%]"
            >
              <h2 className="flex gap-2 lg:items-center lg:text-center lg:justify-center text-[18px] text-[#131927] font-bold-font">
                <span>Current Needs</span>{" "}
                <p className="bg-[#131927] w-[8px] h-[6px] mt-2" />
              </h2>

              <h1 className=" text-[24px] lg:text-[42px] mt-4 leading-[32px] lg:leading-[50px] font-bold-font">
                <span className=" text-[rgb(19,25,39)]">Where Your</span>{" "}
                <span className="text-[#FDAF00] font-bold-font">Support</span>{" "}
                <span className=" text-[rgb(19,25,39)]">
                  Is <br /> Needed most Right Now
                </span>
              </h1>
            </div>

            <MissionCarousel />
          </motion.section>

          <motion.section {...revealProps} className="w-full bg-white lg:my-10">
            <div className="relative mx-auto flex min-h-[400px] w-full max-w-[1554px] flex-col justify-end overflow-hidden rounded-[32px] bg-[#fff8f7] px-4 pb-12 pt-16 sm:rounded-[40px] lg:px-14 lg:pb-14 lg:min-h-[700px] lg:rounded-[32px] ">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
                <div className="w-full lg:w-[55%]">
                  <h2 className="max-w-[780px] text-[34px] font-bold-font leading-[1.02] text-[#141927]  lg:text-[66px] lg:leading-[1]">
                    Your Action Can
                    <br />
                    Change Lives
                  </h2>

                  <p className="mt-4 max-w-[740px] text-[17px] font-normal leading-[1.55] text-[#10265f]  lg:mt-4.5 lg:text-[18px] lg:leading-[1.5] ">
                    Join Givara today and be part of a growing community
                    creating positive impact together.
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
        </div>
      </main>
    </MotionConfig>
  );
}
