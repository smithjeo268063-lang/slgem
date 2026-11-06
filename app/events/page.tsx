"use client";

import Link from "next/link";
import { useState } from "react";

import { motion } from "framer-motion";
import type { ApiEvent } from "@/lib/api";
import { getRecordImage, getRecordTitle } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";
import VisionarySection from "@/components/vision-section";

type EventStatus = "ongoing" | "upcoming" | "past";

function classifyEvents(events: ApiEvent[]) {
  const now = Date.now();
  return events.map((event) => {
    if (
      event?.status === "ongoing" ||
      event?.status === "upcoming" ||
      event?.status === "past"
    ) {
      return event;
    }

    const start = event?.start_date ? Date.parse(event.start_date) : NaN;
    const end = event?.end_date ? Date.parse(event.end_date) : NaN;
    const status =
      Number.isNaN(start) || Number.isNaN(end) || start > now
        ? "upcoming"
        : end < now
          ? "past"
          : "ongoing";
    return { ...event, status };
  });
}

const filters: { label: string; value: EventStatus }[] = [
  { label: "Ongoing", value: "ongoing" },
  { label: "upcoming", value: "upcoming" },
  { label: "Past", value: "past" },
];

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventStatus>("ongoing");
  const { data: events, error, isLoading } = useApiData<ApiEvent[]>(
    "/events",
    classifyEvents,
  );

  const getEventStatus = (event: ApiEvent | null | undefined): EventStatus => {
    if (event?.status === "ongoing" || event?.status === "upcoming" || event?.status === "past") {
      return event.status;
    }

    return "upcoming";
  };

  const filteredEvents = (events ?? []).filter(
    (event) => getEventStatus(event) === activeFilter,
  );
  const formatDate = (date: string | undefined) =>
    date
      ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
          new Date(date),
        )
      : "";

  return (
    <main className="mt-16 min-h-screen w-full bg-[#f8f9fa] px-5 pb-8 pt-8   text-[#1c1c1c] sm:mt-20 sm:px-10 sm:pb-10 sm:pt-5 lg:px-20">
      {/* Event category filters */}

      <section>
        <h1 className="text-[32px] font-bold-font capitalize leading-[1.12] tracking-normal sm:text-[56px] sm:leading-[1.08] lg:text-[clamp(56px,6.25vw,96px)] lg:leading-[1.1] lg:py-25">
          Every Department Exists For <br /> One - Purpose - Souls
        </h1>
        <div className="mt-7 mb-1 md:flex w-full grid grid-cols-[1fr_1fr_1fr]  md:flex-wrap items-center gap-2.5 sm:mt-10 sm:gap-4 lg:gap-8">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                aria-pressed={isActive}
                className={`flex h-10 ] shrink-0 tracking-wider items-center justify-center rounded-[18px] border border-black px-4 text-base font-semibold leading-none transition-colors duration-200 sm:h-12 sm:px-6 sm:text-lg lg:h-13.75 lg:px-9 lg:text-[24px] ${
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
        {error ? (
          <p role="alert" className="border-b border-[#858585] py-8 text-red-700">
            Events could not be loaded: {error}
          </p>
        ) : isLoading ? (
          <SkeletonStatus
            label="Loading events"
            className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-[4%]"
          >
            {[0, 1].map((item) => (
              <div
                key={item}
                className="grid min-w-0 grid-cols-1 gap-5 border-b-2 border-[#858585] pb-8 sm:grid-cols-[minmax(185px,195px)_minmax(0,1fr)] sm:gap-8 sm:pb-10"
              >
                <Skeleton className="h-55 w-full rounded-[20px] sm:h-75 sm:rounded-none" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-2/3 rounded-md" />
                  <Skeleton className="h-7 w-4/5 rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-1/3 rounded-md" />
                </div>
              </div>
            ))}
          </SkeletonStatus>
        ) : filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-[4%] lg:gap-y-0">
            {filteredEvents.map((event, index) => (
              <article
                key={event?.id ?? event?.slug ?? index}
                className={`grid min-w-0 grid-cols-1 gap-5 border-b-2 border-[#858585] pb-8 pt-0 sm:grid-cols-[minmax(185px,195px)_minmax(0,1fr)] sm:gap-8 sm:pb-10 lg:gap-6 ${
                  index >= 2 ? "lg:pt-16" : ""
                }`}
              >
                {/* Event image */}
                <div className="h-55 w-full rounded-[20px] sm:rounded-[0px] overflow-hidden sm:h-75">
                  <img
                    src={getRecordImage(event)}
                    alt={getRecordTitle(event)}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Event information */}
                <div className="flex min-w-0 flex-col items-start">
                  <p className="mb-4 text-[15px] font-normal leading-[1.4] text-[#3f3f3f] sm:mb-6 sm:text-base">
                    {formatDate(event?.start_date)} - {formatDate(event?.end_date)}
                  </p>

                  <h2 className="mb-3 text-[24px] font-bold leading-[1.4] text-black sm:text-[24px] sm:leading-[1.22]">
                    {getRecordTitle(event)}
                  </h2>

                  <p className="mb-4 text-[18px] font-normal leading-[1.65] text-[#6b6b6b] sm:text-base sm:leading-[1.6]">
                    {event?.description}
                  </p>

                  <Link
                    href={`/events/${event?.slug ?? event?.id ?? ""}`}
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

<VisionarySection />
    </main>
  );
}
