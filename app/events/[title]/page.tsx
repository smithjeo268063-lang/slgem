import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MapPin,
  UsersRound,
} from "lucide-react";
import { notFound } from "next/navigation";

import { apiGet, ApiError, getRecordImage, getRecordTitle } from "@/lib/api";
import type { ApiEvent } from "@/lib/api";
import EventRsvpButton from "./event-rsvp-button";
import EventSpeakers from "./event-speakers";

const scheduleCategoryStyles = [
  "bg-blue-100 text-blue-700",
  "bg-purple-100 text-purple-700",
  "bg-emerald-100 text-emerald-700",
];

export const instant = false;

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  let event: ApiEvent;
  try {
    event = await apiGet<ApiEvent>(`/events/${encodeURIComponent(title)}`);
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) notFound();
    throw error;
  }

  const eventTitle = getRecordTitle(event);
  const speakers = (event?.speakers ?? []).map((speaker, index) => ({
    id: speaker?.id ?? index,
    name: speaker?.name ?? "",
    role: speaker?.role ?? "",
  }));
  const eventDate = (value: string | undefined) =>
    value
      ? new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
          new Date(value),
        )
      : "";
  const startDate = eventDate(event?.start_date);
  const endDate = eventDate(event?.end_date);
  const eventSchedule = event?.schedule_items ?? [];

  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#191d20] px-5 pb-20 pt-22 sm:px-8 lg:px-20 lg:pt-27">
      <div>
        <h1 className="text-[38px] font-bold-font capitalize leading-[1.08] tracking-[-1.8px] sm:text-[56px] lg:text-[clamp(56px,6.25vw,96px)] lg:leading-[1.1] lg:tracking-[0px] lg:py-25 sm:w-full w-[100%]">
          Every Department Exists For <br className="hidden sm:block" /> One -
          Purpose - Souls
        </h1>
        <div className="mt-6 sm:mt-0 mx-auto w-full max-w-[1730px] ">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-bold uppercase tracking-[1px] text-[#657079] sm:mb-10"
          >
            <Link
              href="/events"
              className="transition-colors hover:text-[#0E004E]"
            >
              Events
            </Link>
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="text-[#191d20]">{eventTitle}</span>
          </nav>

          <div className="h-px w-full bg-[#222]" />

          <section className="grid grid-cols-1 items-center gap-8 border-b border-[#222] py-8 sm:py-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] lg:gap-[3%]">
            <div className="group relative aspect-[1.16/1] overflow-hidden rounded-[26px] lg:rounded-[36px] bg-[#17201e] sm:aspect-[1.44/1] min-h-[200px] sm:min-h-100 lg:min-h-0">
              <Image
                src={getRecordImage(event)}
                alt={eventTitle}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" />

              <div className="absolute inset-x-5 bottom-6 sm:inset-x-9 sm:bottom-9">
                {/* <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-xs font-bold uppercase text-white backdrop-blur-sm">
                  <CircleDot aria-hidden="true" className="h-3.5 w-3.5" />
                  {statusLabel}
                </span> */}
                <h1 className="max-w-175 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[28px]">
                  {eventTitle}
                </h1>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-white sm:text-base">
                  <div className="flex items-center gap-2">
                    <CalendarDays
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0"
                    />
                    <span>
                      {startDate} - {endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin aria-hidden="true" className="h-5 w-5 shrink-0" />
                    <span>{event?.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 py-3 sm:gap-10 lg:pl-2">
              <div>
                <div className="mb-3 h-0.75 w-10 bg-[#0E004E]" />
                <p className="text-xs font-bold uppercase tracking-[1px] text-[#64748B] sm:text-[10px]">
                  Attendance status
                </p>
                <div className="mt-0 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-5xl font-extrabold leading-none text-[#0E004E] sm:text-[46px]">
                    {event?.registrations_count ?? 0}
                  </span>
                  <span className="text-base text-[#64748B] sm:text-[16px]">
                    Attending from top firms
                  </span>
                </div>
                {/* <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#59646a]">
                  <CircleDot
                    aria-hidden="true"
                    className="h-4 w-4 text-[#0E004E]"
                  />
                  Event is {statusLabel.toLowerCase()}
                </p> */}
              </div>

              <div className="sm:max-w-[240px] -mt-2">
                {/* <p className="mb-4 max-w-sm text-base leading-relaxed text-[#59646a]">
                  Interested in joining this event? Mark your interest for this
                  visit.
                </p> */}
                <EventRsvpButton eventTitle={eventTitle} eventSlug={title} />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 items-start gap-8 pt-10 lg:grid-cols-[minmax(0,2.05fr)_minmax(340px,1fr)] lg:gap-8    lg:pt-14">
            <div className="flex min-w-0 flex-col gap-8 lg:gap-8">
              <section className="min-w-0 rounded-xl bg-white px-6 py-8 sm:px-9 sm:py-6">
                {/* <div className="mb-5 h-0.75 w-10 bg-[#0E004E]" /> */}
                <h2 className=" text-2xl font-bold leading-tight sm:text-[24px]">
                  About the event
                </h2>
                <p className="w-full lg:w-[70%] mt-3 max-w-200 text-[18px] leading-[1.7] text-[#52616a] sm:text-[17px]">
                  {event?.description}
                </p>
              </section>

              <section className="min-w-0 rounded-xl bg-white px-6 py-8 sm:px-9 sm:py-6">
                <div className="mb-5 h-[2px] w-10 bg-[#0C56D0]" />
                <h2 className="text-2xl font-bold leading-tight sm:text-[24px]">
                  Schedule
                </h2>
                <div className="mt-7 flex flex-col gap-4">
                  {eventSchedule.map((item, index) => (
                    <article
                      key={item?.id ?? index}
                      className="grid grid-cols-1 gap-4 rounded-[18px] border border-[#e5e9e7] px-5 py-5 sm:grid-cols-[110px_minmax(0,1fr)] sm:gap-0 sm:px-6"
                    >
                      <div>
                        <p className="text-lg font-bold leading-tight text-[#202a26]">
                          {item?.time}
                        </p>
                        <p className="mt-0.5 text-xs font-thin text-[#84918b]">
                          {item?.duration}
                        </p>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className={`rounded px-2.5 py-1 text-[11px] font-extrabold ${scheduleCategoryStyles[index % scheduleCategoryStyles.length]}`}
                          >
                            {item?.category}
                          </span>
                          <h3 className="text-base font-bold leading-snug text-[#202a26] sm:text-lg">
                            {item?.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-[#657079] sm:text-base">
                          {item?.location}
                          {item?.speaker && ` · ${item.speaker}`}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <aside className="flex min-w-0 flex-col gap-8 lg:gap-6">
              <EventSpeakers speakers={speakers} />

              <section className="overflow-hidden rounded-xl bg-white">
                <div className="flex h-35 items-center justify-center bg-[#e2f0eb] text-[#0E004E]">
                  <MapPin aria-hidden="true" className="h-8 w-8" />
                </div>
                <div className="px-6 py-4 sm:px-4">
                  <div className="mb-4 h-[2px] w-10 bg-[#0C56D0]" />
                  <h2 className="text-[16px] font-bold">Venue</h2>
                  <h3 className="mt-1 text-[15px] font-bold leading-snug text-[#202a26]">
                    {event?.location}
                  </h3>
                  <p className="mt-1 text-sm lg:text-[14px] w-[60%] leading-relaxed text-[#657079] sm:text-base">
                    {event?.location}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event?.location ?? "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#0E004E] transition-colors hover:text-[#104b3e]"
                  >
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    Get directions
                  </a>
                </div>
              </section>

              <section className="overflow-hidden rounded-[20px] bg-[#0E004E] text-white">
                <div className="flex items-center gap-2 px-4 py-4 sm:px-6">
                  <UsersRound aria-hidden="true" className="h-4 w-4 shrink-0" />
                  <h2 className="text-xl font-bold sm:text-[16px]">
                    Essential info
                  </h2>
                </div>
                <div className="space-y-0 px-6 pb-5 sm:px-6">
                  {[
                    { label: "Date", value: `${startDate} - ${endDate}` },
                    { label: "Location", value: event?.location ?? "" },
                    {
                      label: "Capacity",
                      value: event?.capacity?.toString() ?? "",
                    },
                  ].map((info) => (
                    <div
                      key={info.label}
                      className=" flex justify-between items-center flex-wrap py-1"
                    >
                      <p className="text-xs font-bold capitalize tracking-[1px] text-white/65">
                        {info.label}
                      </p>
                      <p className="text-[14px] font-medium leading-relaxed ">
                        {info.value}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
