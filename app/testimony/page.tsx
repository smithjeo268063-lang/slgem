import Image from "next/image";
import TestimonyForm from "./testimony-form";
import TestimonyVisionSection from "./testimony-vision-section";
import VisionarySection from "@/components/vision-section";

export default function TestimonyPage() {
  return (
    <main className="overflow-x-clip px-4 pb-16 pt-24 text-[#171717] sm:px-8 sm:pt-24 lg:px-20 lg:pt-36">
      <section className="flex flex-col gap-6 py-0 sm:gap-10">
        <nav className="grid items-center gap-5 sm:gap-8 lg:grid-cols-[0.8fr_1.3fr]">
          <h1 className="w-full text-[36px] leading-[1.12] tracking-tight font-bold-font sm:text-[56px] lg:text-[76px] lg:leading-[1.05]">
            Share
            <br className="block md:hidden" />
            Your Testimony
          </h1>
          <div className="h-[190px] w-full overflow-hidden rounded-[20px] sm:h-[240px] sm:rounded-[32px] lg:h-[280px] lg:rounded-[40px]">
            <Image
              src="/images/media/media_hero.jpg"
              alt="SLGEM Media"
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </nav>
        {/* <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[ 36px] lg:h-[340px] lg:rounded-[50px]">
          <Image
            src="/images/media/media_hero.jpg"
            alt="SLGEM Media"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div> */}
      </section>
      <section className="mx-auto mt-12 grid w-full max-w-[1440px] gap-8 sm:mt-20 sm:gap-10 lg:mt-30 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="w-full max-w-[440px]">
          <p className="text-sm font-bold text-[#374151]">TESTIMONY</p>
          <h2 className="mt-5 text-[28px] font-bold-font leading-tight sm:mt-8 sm:text-[38px] md:text-[48px]">
            Let&apos;s Preserve Our Heritage
          </h2>

          {/* <div
            role="img"
            aria-label="5 out of 5 stars"
            className="mt-15 flex items-center gap-1"
          >
            {Array.from({ length: 5 }, (_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                className="size-5.5 fill-[#F5B700] text-[#F5B700]"
              />
            ))}
          </div>
          <p className="mt-5 text-[24px] leading-[1.4] font-medium text-[#0000000]">
            “Their community-centered approach ensures every dollar truly makes
            a difference.”
          </p>

          <div id="comments" className="mt-8 flex items-center gap-3">
            <Image
              src="/images/home/mission.png"
              alt="SLGEM community outreach team"
              width={64}
              height={64}
              className="size-13.5 shrink-0 rounded-full object-cover object-[50%_35%]"
            />
            <div>
              <p className="text-[18px] font-bold text-[#171717]">
                Brooklyn Simmons
              </p>
              <p className=" text-sm text-[#59625c]">Product Manager</p>
            </div>
          </div> */}
        </div>

        <TestimonyForm />
      </section>

      {/* <section className="mt-30 mx-auto grid w-full max-w-[1440px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5 ">
        <div className="flex flex-col gap-5">
          <h1 className="text-[38px] w-[80%] lg:w-[80%] leading-[1.12] tracking-tight font-bold-font sm:text-[56px] lg:text-[64px] uppercase lg:leading-[72px]">
            You do not have to do everything
          </h1>
          <p className="text-[32px] w-[90%] leading-[1.4] font-medium text-[#0000000]">
            You simply have to do your part. Some will pray. Some will give.
            Some will go. Some will serve behind the scenes. But together, the
            mission moves forward.
          </p>{" "}
        </div>
        <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[36px] lg:h-[460px] lg:rounded-[50px]">
          <Image
            src="/images/media/media_hero.jpg"
            alt="SLGEM Media"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </section> */}

      {/* <TestimonyVisionSection /> */}

      <VisionarySection />
    </main>
  );
}
