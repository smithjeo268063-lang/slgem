import { Suspense } from "react";

const impactStats = [
  "320 people reached with the Gospel.",
  "48 decisions for Christ.",
  "3 outreach meetings conducted.",
  "120 tracts distributed.",
  "12 new believers enrolled in discipleship classes.",
];

const missionSections = {
  testimonies: {
    title: "Testimonies",
    description:
      "God has continued to move in remarkable ways. Several individuals gave their lives to Christ during the outreach, and many testified of experiencing renewed hope and a deeper desire to know God. We are also grateful for the growing participation of local believers who have joined us in sharing the Gospel.",
    image: "/images/mission/the_why.jpg",
    alt: "A missionary working on outreach materials",
  },
  lookingAhead: {
    title: "Looking Ahead",
    description:
      "By God's grace, next week we will be extending our outreach to Peace Town and New Life Settlement. We trust God for greater harvests and lasting transformation in these communities. Thank you for partnering with us through your prayers and support. Together, we are seeing lives changed for the glory of God.",
    image: "/images/mission/growth.jpg",
    alt: "A missionary preparing materials for an upcoming outreach",
  },
};

async function MissionUpdateTitle({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  const formattedTitle = title
    .split("-")
    .map(
      (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`,
    )
    .join(" ");

  return <>{formattedTitle}</>;
}

export default function MissionUpdateSection({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  return (
    <main>
      <section className="relative isolate min-h-[340px] h-[340px] overflow-hidden bg-[#100b16] lg:h-[462px] lg:min-h-0">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mission/update.jpg')",
          }}
          aria-hidden="true"
        />

        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0 -z-10 bg-[#071A5266]"
          aria-hidden="true"
        />

        {/* Hero heading */}
        <div className="mx-auto max-w-[100%] w-full flex flex-row lg:justify-center px-5 pt-16 text-start lg:text-center items-end h-[calc(100%-50px)] lg:px-10 lg:pt-[200px]">
          <h1 className="mx-auto max-w-[80%] lg:max-w-[60%] font-sans ml-0 lg:ml-[20%] text-[clamp(2.5rem,6.1vw,7.25rem)] font-bold leading-[1.16] lg:leading-[1.08] tracking-[0em] text-white">
            Weekly Update on{" "}
            <Suspense
              fallback={
                <span
                  aria-hidden="true"
                  className="inline-block h-[1em] w-[10ch] animate-pulse rounded-sm bg-white/30 align-middle"
                />
              }
            >
              <MissionUpdateTitle params={params} />
            </Suspense>
          </h1>
        </div>
      </section>

      <section className="w-full overflow-hidden bg-[#f8f9fb] text-[#303030]">
        <div className="mx-auto w-[89.5%] max-w-[1720px] py-12 sm:py-16 lg:py-[54px]">
          {/* Mission Update introduction */}
          <header className="mb-8 sm:mb-16 lg:mb-[92px]">
            <h2 className="m-3 lg:mb-5 text-[24px] font-bold ml-0 leading-tight tracking-[0px] lg:text-[28px]">
              Mission Update
            </h2>

            <p className="max-w-none text-[18px] font-normal leading-[1.5] tracking-[0.0px] sm:text-[25px] lg:text-[24px] lg:leading-[1.42]">
              We give all glory to God for His faithfulness and for the
              privilege of being part of His work. Since the commencement of the
              mission, we have witnessed God&apos;s hand at work in remarkable
              ways as lives continue to be touched and transformed by the
              Gospel.
            </p>
          </header>

          {/* This week's impact */}
          <div className="mb-12 grid grid-cols-1 items-center gap-8 sm:mb-20 lg:mb-[104px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.65fr)] lg:gap-10">
            <div className="relative h-[230px] overflow-hidden rounded-[20px] lg:rounded-[28px] sm:h-[220px] lg:h-[240px]">
              <img
                src="/images/mission/the_event.jpg"
                alt="People gathered during a community outreach"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/55" />
            </div>

            <div className="contents lg:block">
              <h3 className="lg:  mb-4 text-[20px] font-bold leading-tight tracking-[0px] sm:text-[24px]">
                This Week&apos;s Impact
              </h3>

              <ul className="list-disc space-y-[1px] pl-7 lg:pl-[44px] text-[18px] leading-[1.55] sm:text-[21px] lg:text-[24px] lg:leading-[1.42]">
                {impactStats.map((stat) => (
                  <li key={stat} className="lg:pl-0.5">
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonies */}
          <div className="mb-14 lg:mb-20 grid grid-cols-1 items-start gap-8 sm:mb-24 lg:mb-[100px] lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-10">
            <div className="min-w-0">
              <h3 className=" order-1 mb-2 text-[22px] font-bold leading-tight tracking-[0px] sm:text-[26px]">
                {missionSections.testimonies.title}
              </h3>

              <p className="order-3 text-[18px] leading-[1.55] sm:text-[22px] lg:text-[24px] lg:leading-[1.42]">
                {missionSections.testimonies.description}
              </p>
            </div>

            <div className="order-2 h-[235px] overflow-hidden rounded-[20px] lg:rounded-[28px] sm:h-[330px] lg:h-[250px]">
              <img
                src={missionSections.testimonies.image}
                alt={missionSections.testimonies.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Looking Ahead */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <div className="order-2 h-[230px] overflow-hidden rounded-[20px] lg:rounded-[28px] sm:h-[330px] lg:order-1 lg:h-[250px]">
              <img
                src={missionSections.lookingAhead.image}
                alt={missionSections.lookingAhead.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="order-1 min-w-0 lg:order-2">
              <h3 className="mb-4 lg:mb-6 text-[20px] font-bold leading-tight tracking-[0px] sm:text-[26px]">
                {missionSections.lookingAhead.title}
              </h3>

              <p className="text-[18px] leading-[1.55] sm:text-[22px] lg:text-[24px] lg:leading-[1.42]">
                {missionSections.lookingAhead.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
