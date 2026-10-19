"use client";

import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";
import { eventSlug, events } from "./events-data";
import type { EventStatus } from "./events-data";

const filters: { label: string; value: EventStatus }[] = [
  { label: "Ongoing", value: "ongoing" },
  { label: "upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventStatus>("ongoing");

  const filteredEvents = events.filter(
    (event) => event.status === activeFilter,
  );

  return (
    <main className="mt-16 min-h-screen w-full bg-[#f8f9fa] px-5 pb-8 pt-8   text-[#1c1c1c] sm:mt-20 sm:px-10 sm:pb-10 sm:pt-5 lg:px-20">
      {/* Event category filters */}

      <section>
        <h1 className="text-[32px] font-bold-font capitalize leading-[1.12] tracking-normal sm:text-[56px] sm:leading-[1.08] lg:text-[clamp(56px,6.25vw,96px)] lg:leading-[1.1] lg:py-25">
          Every Department Exists For <br /> One - Purpose - Souls
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-4 lg:gap-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`flex h-11 shrink-0 items-center justify-center rounded-[18px] border border-black px-4 text-base font-semibold leading-none transition-colors duration-200 sm:h-12 sm:px-6 sm:text-lg lg:h-13.75 lg:px-9 lg:text-[24px] ${
                  isActive
                    ? "bg-[#08076f] text-white"
                    : "bg-transparent text-black hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Main heading */}
        <h1 className="mb-10 mt-4 max-w-300 text-[26px] font-normal lg:uppercase leading-[1.12] tracking-normal sm:mb-12 sm:mt-10 sm:text-[48px] lg:mb-15.5 lg:mt-11.5 lg:text-[clamp(56px,5.75vw,96px)] lg:leading-[1.04] lg:tracking-[-2.5px]">
          Experience the spirit of <br /> heritage coming alive.
        </h1>
      </section>

      {/* Event listing */}
      <section aria-label={`${activeFilter} events`} className="w-full">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-[4%] lg:gap-y-0">
            {filteredEvents.map((event, index) => (
              <article
                key={event.id}
                className={`grid min-w-0 grid-cols-1 gap-5 border-b-2 border-[#858585] pb-8 pt-0 sm:grid-cols-[minmax(185px,195px)_minmax(0,1fr)] sm:gap-8 sm:pb-10 lg:gap-6 ${
                  index >= 2 ? "lg:pt-16" : ""
                }`}
              >
                {/* Event image */}
                <div className="h-55 w-full rounded-[20px] sm:rounded-[0px] overflow-hidden sm:h-75">
                  <img
                    src={event.image}
                    alt="Historic red-brick heritage building"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Event information */}
                <div className="flex min-w-0 flex-col items-start">
                  <p className="mb-4 text-[16px] font-normal leading-[1.4] text-[#3f3f3f] sm:mb-6 sm:text-base">
                    {event.dateFrom} - {event.dateTo}
                  </p>

                  <h2 className="mb-3 text-[24px] font-bold leading-[1.4] text-black sm:text-[24px] sm:leading-[1.22]">
                    {event.title}
                  </h2>

                  <p className="mb-4 text-[19px] font-normal leading-[1.65] text-[#6b6b6b] sm:text-base sm:leading-[1.6]">
                    {event.description}
                  </p>

                  <Link
                    href={`/events/${eventSlug(event)}`}
                    className="mt-2 inline-flex items-center gap-3 text-sm font-bold uppercase leading-none text-black transition-opacity hover:opacity-60 sm:mt-auto sm:gap-4"
                  >
                    <span>View details</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[240px] items-center justify-center border-b border-[#858585] text-center">
            <p className="text-lg text-[#6b6b6b]">
              No {activeFilter} events available at the moment.
            </p>
          </div>
        )}
      </section>

      <section className="relative mt-10 sm:m-0 isolate my-0 w-full overflow-visible  pt-2 pb-16 sm:my-20 sm:py-20 md:min-h-[904px] md:py-12 lg:min-h-[600px] lg:py-0">
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
        <motion.div className="relative z-10 mx-auto flex w-full max-w-[1120px] flex-col lg:items-center lg:text-center md:pt-[42px] lg:pt-[43px]">
          <h2 className="max-w-[1100px] pr-0 text-[30px] font-bold leading-tight text-black sm:text-[40px] lg:text-[58px]">
            Come and Run With the Vision
          </h2>

          <p className="mt-3 max-w-[1100px] text-base font-normal leading-[1.5] text-black sm:text-lg lg:text-[24px] lg:leading-[1.4]">
            This is a divine assignment. The journey has begun. God
            <br className="hidden lg:block" /> is leading step by step. All that
            matters is faithfulness.
            <br className="hidden lg:block" /> All that matters is souls. Will
            you be part of it?
          </p>

          <a
            href="#partnership"
            className="mt-6 inline-flex h-12 w-full max-w-[200px] items-center justify-center rounded-xl bg-[#100052] px-6 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#100052]/30 sm:mt-2 sm:h-[55px] sm:rounded-[22px] sm:text-[18px]"
          >
            Partner with Us
          </a>
        </motion.div>
      </section>
    </main>
  );
}
