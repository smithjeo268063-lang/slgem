"use client";

import VisionarySection from "@/components/vision-section";
import { motion } from "framer-motion";
import { useState } from "react";

type Mission = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const missions: Mission[] = [
  {
    id: 1,
    title: "Invade Dark Territories with light",
    description:
      "We carry the light of the Gospel into places where hope has been forgotten. We reach communities that are underserved, overlooked, and unreached, bringing the message of Jesus Christ to people wherever they are.",
    image: "/images/about-us/mission-city.jpg",
    imageAlt: "Missionaries sharing the Gospel with people in a community",
  },
  {
    id: 2,
    title: "Restore lives through the power of the gospel",
    description:
      "We believe every life can be transformed by the love and power of Jesus Christ. Through prayer, discipleship, practical support, and compassionate outreach, we serve the forgotten and restore hope to the hurting.",
    image: "/images/about-us/mission-city.jpg",
    imageAlt: "A team sharing the message of Jesus Christ with the community",
  },
  {
    id: 3,
    title: "Populate the kingdom of God",
    description: "We serve the forgotten and restore hope to the hurting.",
    image: "/images/about-us/mission-city.jpg",
    imageAlt: "A missionary connecting with families in a rural community",
  },
  {
    id: 4,
    title: "Depopulate the kingdom of darkness",
    description:
      "We stand against darkness by sharing truth, building faith, and helping people discover a life of freedom in Christ. Our mission is to see individuals, families, and communities transformed by the light of the Gospel.",
    image: "/images/about-us/mission-city.jpg",
    imageAlt: "A dramatic fortress representing the kingdom of darkness",
  },
];

const galleryImages = [
  {
    id: 1,
    src: "/images/about-us/mission-city.jpg",
    alt: "A modern city skyline",
    position: "left",
  },
  {
    id: 2,
    src: "/images/about-us/mission-city.jpg",
    alt: "Community evangelism and outreach",
    position: "left-top",
  },
  {
    id: 3,
    src: "/images/about-us/mission-city.jpg",
    alt: "Mission team engaging with local people",
    position: "left-bottom",
  },
  {
    id: 4,
    src: "/images/about-us/mission-city.jpg",
    alt: "Sharing the Gospel in a local community",
    position: "center",
  },
  {
    id: 5,
    src: "/images/about-us/mission-city.jpg",
    alt: "A community outreach gathering",
    position: "right-top",
  },
  {
    id: 6,
    src: "/images/about-us/mission-city.jpg",
    alt: "People receiving the message of the Gospel",
    position: "right-bottom",
  },
  {
    id: 7,
    src: "/images/about-us/mission-city.jpg",
    alt: "A castle beneath a dramatic sky",
    position: "right",
  },
];

const leaders = [
  {
    id: 1,
    image: "/images/about-us/mission-city.jpg",
    name: "Elena Cruz",
    position: "Vice President",
  },
  {
    id: 2,
    image: "/images/leaders/leader-2.jpg",
    name: "Elena Cruz",
    position: "Vice President",
  },
  {
    id: 3,
    image: "/images/leaders/leader-3.jpg",
    name: "Elena Cruz",
    position: "Vice President",
  },
  {
    id: 4,
    image: "/images/leaders/leader-4.jpg",
    name: "Elena Cruz",
    position: "Vice President",
  },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-10 w-10 shrink-0 sm:h-14 sm:w-14">
      <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
      <span
        className={`absolute left-1/2 top-1/2 h-full w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-transform duration-300 ${
          open ? "scale-y-0" : "scale-y-100"
        }`}
      />
    </span>
  );
}

function CloseIcon() {
  return (
    <span className="relative block h-10 w-10 shrink-0 sm:h-14 sm:w-14">
      <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-black" />
      <span className="absolute left-1/2 top-1/2 h-[2px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-black" />
    </span>
  );
}

function MissionAccordion() {
  // Mission 3 is initially expanded to match the supplied reference.
  const [openMission, setOpenMission] = useState<number | null>(3);

  return (
    <section className="w-full bg-[#f8f9fa] px-4 pb-12 pt-14 text-black sm:px-8 sm:pt-16 lg:px-20 lg:pb-16 lg:pt-[68px]">
      {/* Section heading */}
      <header className="mx-auto mb-6 md:text-center sm:mb-12 lg:mb-[36px]">
        <p className="text-[18px] font-normal uppercase leading-tight tracking-[0.6px] sm:text-[24px]">
          What We Do
        </p>

        <h2 className="mt-5 text-[32px] font-bold leading-[1.12] tracking-[0.6px] sm:mt-7 sm:text-[46px] lg:text-[60px] lg:tracking-[0]">
          We are on a Mission to :
        </h2>
      </header>

      {/* Mission accordion */}
      <div className="w-full border-t border-[#888888]">
        {missions.map((mission) => {
          const isOpen = openMission === mission.id;

          return (
            <article key={mission.id} className="border-b border-[#888888]">
              {/* Accordion heading */}

              {!isOpen && (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`mission-content-${mission.id}`}
                  onClick={() => setOpenMission(isOpen ? null : mission.id)}
                  className="flex min-h-[112px] w-full items-center justify-between gap-4 px-3 py-6 text-left sm:min-h-[185px] sm:gap-6 sm:py-10 sm:pl-6 sm:pr-5 lg:min-h-[150px] lg:py-12 lg:pl-[2.5%] lg:pr-[1.8%]"
                >
                  <span
                    className={`max-w-[1350px] text-[20px] font-bold leading-[1.25] tracking-normal sm:text-[38px] sm:tracking-[-1px] lg:text-[36px] lg:leading-[1.16] ${
                      isOpen ? "font-normal" : ""
                    }`}
                  >
                    {mission.title}
                  </span>

                  <span aria-hidden="true" className="scale-[0.65]">
                    {isOpen ? <CloseIcon /> : <PlusIcon open={false} />}
                  </span>
                </button>
              )}

              {/* Expanded mission content */}
              <div
                id={`mission-content-${mission.id}`}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
                aria-hidden={!isOpen}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 items-center gap-6 px-3 pb-8 sm:gap-8 sm:px-6 sm:pb-12 lg:grid-cols-[minmax(0,1.3fr)_230px_56px] lg:gap-10 lg:px-[2.5%] lg:py-[32px]">
                    {/* Mission text */}
                    <div className="min-w-0">
                      <h3 className="pt-4 mdLpt-0 text-[24px] font-normal leading-[1.2] tracking-normal sm:text-[40px] lg:text-[52px] lg:leading-[1.15]">
                        {mission.title}
                      </h3>

                      <p className="mt-4 max-w-[1050px] text-[17px] font-normal leading-[1.55] tracking-normal sm:mt-4 sm:text-[25px] lg:text-[26px] lg:leading-[1.45]">
                        {mission.description}
                      </p>
                    </div>

                    {/* Mission image */}
                    <div className="h-52 w-full overflow-hidden rounded-[22px] sm:h-[350px] sm:rounded-[30px] lg:h-[250px] lg:w-[240px]">
                      <img
                        src={mission.image}
                        alt={mission.imageAlt}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Close control */}
                    <button
                      type="button"
                      onClick={() => setOpenMission(null)}
                      aria-label={`Close ${mission.title}`}
                      className="hidden items-center justify-center justify-self-end transition-opacity hover:opacity-50 lg:flex scale-[0.65]"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function MissionGallery() {
  return (
    <section className="w-full overflow-hidden px-4 pb-16 pt-6 text-black sm:px-8 sm:pb-24 sm:pt-20 lg:px-20 lg:pb-[100px] lg:pt-[100px]">
      {/* Centered introduction */}
      <div className="mx-auto max-w-[1450px] px-1 md:text-center sm:px-3">
        <p className="text-[18px] font-normal uppercase leading-tight tracking-[0.6px] sm:text-[24px]">
          The Vision
        </p>
        <h1 className="mt-3 font-bold-font text-[38px] leading-tight sm:text-[40px] lg:text-[58px]">
          The Vision <br className="block md:hidden" /> We Carry
        </h1>
        <p className="mt-3 text-[18px] font-normal leading-[1.5] sm:mt-5 sm:text-[28px] sm:leading-[1.5] lg:text-[40px] lg:leading-[1.3] lg:tracking-[-1.3px]">
          To take the gospel of salvation and healing — in its simplicity and
          power — to the lost, wherever they are. Not complicated. Not hidden.
          Not reserved.
        </p>
      </div>

      {/* Image collage */}
      <div className="mx-auto mt-8 grid max-w-[1760px] grid-cols-2 items-center gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-5 lg:mt-[82px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-4 lg:px-5">
        {/* Left tall image */}
        <div className="hidden h-[405px] overflow-hidden rounded-[35px] sm:block lg:h-[280px]">
          <img
            src={galleryImages[0].src}
            alt={galleryImages[0].alt}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left stack */}
        <div className="hidden flex-col gap-4 sm:flex">
          <div className="h-[250px] overflow-hidden rounded-[32px] lg:h-[180px]">
            <img
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-[250px] overflow-hidden rounded-[32px] lg:h-[180px]">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Large central image */}
        <div className="relative col-span-2 h-64 overflow-hidden rounded-[24px] sm:col-span-2 sm:h-[520px] sm:rounded-[30px] lg:col-span-1 lg:h-[480px] lg:rounded-[40px]">
          <img
            src={galleryImages[3].src}
            alt={galleryImages[3].alt}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/5" />

          {/* Video play button */}
          <button
            type="button"
            aria-label="Play mission outreach video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105 sm:h-[112px] sm:w-[112px]"
          >
            <svg
              viewBox="0 0 24 24"
              className="ml-1.5 h-7 w-7 fill-black sm:ml-2 sm:h-[54px] sm:w-[54px]"
              aria-hidden="true"
            >
              <path d="M6 3.8c0-1.2 1.3-1.9 2.3-1.3l13.2 7.7c1 .6 1 2 0 2.6L8.3 20.5C7.3 21.1 6 20.4 6 19.2V3.8Z" />
            </svg>
          </button>
        </div>

        {/* Right stack */}
        <div className="hidden flex-col gap-4 sm:flex">
          <div className="h-[230px] overflow-hidden rounded-[32px] lg:h-[180px]">
            <img
              src={galleryImages[4].src}
              alt={galleryImages[4].alt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="h-[230px] overflow-hidden rounded-[32px] lg:h-[180px]">
            <img
              src={galleryImages[5].src}
              alt={galleryImages[5].alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right tall image */}
        <div className="hidden h-[405px] overflow-hidden rounded-[35px] sm:block lg:h-[280px]">
          <img
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="mt-22 w-full sm:mt-20">
      <h1 className="md:w-full w-[90%] px-4 md:text-center text-[36px] capitalize font-bold leading-[1.15] tracking-normal sm:px-6 sm:text-[40px] sm:leading-[1.6] lg:px-0 lg:text-[82px] lg:leading-[1.3] lg:py-10">
        About save the lost <br className="hidden sm:block" /> evangelistic
        ministry
      </h1>
      <section className="flex flex-col gap-5 px-5 sm:gap-7 sm:px-8 md:my-12 md:flex-row md:justify-between md:px-0 lg:my-20 lg:gap-12 lg:px-20">
        <div className="mt-10 md:mt-0 h-52 w-full overflow-hidden rounded-[24px] sm:h-[405px] sm:rounded-[40px] md:w-[45%] lg:h-[880px] lg:rounded-[55px]">
          <img
            src={galleryImages[6].src}
            alt={galleryImages[6].alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-start gap-3 sm:gap-4 md:w-[60%] lg:w-[50%] lg:gap-8">
          <p className="hidden text-sm font-normal uppercase leading-[1.4] tracking-[0.08em] sm:block sm:text-[24px] sm:tracking-normal lg:text-[28px] lg:leading-[1.3]">
            About save the lost evangelistic ministry
          </p>
          <p className="text-[21px] font-bold leading-[1.45] tracking-normal sm:text-[32px] sm:leading-[1.5] lg:text-[42px] lg:leading-[1.3] lg:tracking-[-1.3px]">
            We believe the gospel is still powerful. Powerful enough to save.
            Powerful enough to heal. Powerful enough to restore lives. SLGEM
            exists to take this message to the lost - wherever they are.
          </p>
          <div className="hidden h-[405px] w-full overflow-hidden rounded-[25px] sm:block md:w-[90%] lg:h-[390px]">
            <img
              src={galleryImages[6].src}
              alt={galleryImages[6].alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="px-5 py-12 lg:text-center sm:px-8 sm:py-16 lg:px-20 lg:pt-20">
        <p className="text-[16px] font-normal uppercase leading-tight tracking-[0.2px] sm:text-[24px]">
          Who We Are
        </p>
        <h2 className="mx-auto mt-3 max-w-[1100px] text-[28px] font-bold-font leading-[1.2] sm:mt-5 sm:text-[38px] sm:leading-[1.35] lg:text-[56px] lg:leading-[1.3]">
          Save The Lost Evangelistic Ministry
        </h2>
        <p className="mx-auto mt-2 max-w-[1100px] text-[18px] leading-[1.6] text-[#000000]/65 sm:mt-6 text-[18px] sm:text-[23px] sm:leading-[1.55] lg:text-[30px] lg:leading-[1.5]">
          (SLGEM) is a teaching and outreach ministry committed to soul-winning,
          discipleship, and restoring lives through the power of the gospel. We
          are not built around popularity, performance, or religious routine.
        </p>
      </section>
      <MissionGallery />
      <MissionAccordion />

      <section className="w-full overflow-hidden bg-[#f0f1f4] px-5 pb-16 pt-12 text-black sm:px-8 sm:pb-24 sm:pt-20 lg:px-20 lg:pb-[120px] lg:pt-[105px]">
        <div className="mx-auto w-full max-w-[1800px]">
          {/* Section heading */}
          <div className="mb-12 lg:text-center sm:mb-16 lg:mb-[76px]">
            <h2 className="text-[30px] font-bold uppercase leading-[1.1] tracking-normal sm:text-[52px] lg:text-[64px] lg:tracking-[-2px]">
              Our Leadership
            </h2>

            <p className="mx-auto mt-4 max-w-[1700px] text-[18px] font-normal leading-[1.5] sm:mt-8 sm:text-[27px] lg:mt-[20px] lg:text-[32px] lg:leading-[1.34] lg:tracking-[-1px]">
              The ministry operates through a structured leadership and
              secretariat system that helps coordinate outreach efforts,
              discipleship activities, administration, and ministry operations
              effectively.
            </p>
          </div>

          {/* Leadership grid */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:gap-x-[6.5%] lg:gap-y-[42px]">
            {leaders.map((leader) => (
              <article key={leader.id} className="min-w-0">
                {/* Leader portrait */}
                <div className="aspect-[1.85/1.5] w-full overflow-hidden rounded-[24px] bg-[#e1e2e5] sm:rounded-[42px] lg:aspect-[1.9/1.5] lg:rounded-[56px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading={leader.id > 2 ? "lazy" : "eager"}
                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.025]"
                  />
                </div>

                {/* Leader information */}
                <div className="px-0 pb-1 pt-6 sm:pt-7 lg:pt-[28px]">
                  <h3 className="text-[24px] font-bold leading-[1.15] tracking-normal sm:text-[26px] lg:text-[28px] lg:tracking-[-0.2px]">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-lg font-normal leading-[1.35] tracking-normal sm:text-[24px] lg:mt-3 lg:text-[24px] lg:tracking-[-0.2px]">
                    {leader.position}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        
      </section>

<section className="w-full overflow-hidden px-5 pb-16 pt-12 text-black sm:px-8 sm:pb-24 sm:pt-20 lg:px-20 lg:pb-[120px] lg:pt-[105px]">
  
      <VisionarySection />
</section>
    </main>
  );
}
