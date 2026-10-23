import Image from "next/image";
import { Star } from "lucide-react";
import DonationForm from "./donation-form";
import DonationVisionSection from "@/app/donate/donation-vision-section";
import { apiGet } from "@/lib/api";
import VisionarySection from "@/components/vision-section";

export const instant = false;

export default async function DonatePage({
  searchParams,
}: {
  searchParams?: Promise<{ reference?: string }>;
}) {
  const reference = (await searchParams)?.reference;
  let verification: Record<string, unknown> | undefined;
  let verificationError: string | undefined;
  if (reference) {
    try {
      verification = await apiGet<Record<string, unknown>>(
        `/giving/verify/${encodeURIComponent(reference)}`,
      );
    } catch (error) {
      verificationError =
        error instanceof Error ? error.message : "Unable to verify payment.";
    }
  }

  return (
    <main className="overflow-x-clip bg-[#f8f9fb] px-4 pb-16 pt-24 text-[#171717] sm:px-8 sm:pt-24 lg:px-20 lg:pt-[120px]">
      <section className="flex flex-col gap-6 py-0 sm:gap-10">
        <h1 className="w-[70%] md:w-full text-[36px] leading-[1.12] tracking-tight font-bold-font sm:text-[56px] lg:text-[88px] lg:leading-[98px]">
          Every Department Exists for One - Purpose - Souls
        </h1>
        {/* <div className="h-[220px] w-full overflow-hidden rounded-[24px] sm:h-[240px] sm:rounded-[36px] lg:h-[340px] lg:rounded-[50px]">
          <Image
            src="/images/media/media_hero.jpg"
            alt="SLGEM Media"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div> */}
      </section>
      {reference && (
        <section
          aria-live="polite"
          className="mx-auto mt-8 w-full max-w-[1440px] rounded-xl bg-white p-5"
        >
          <h2 className="text-xl font-bold">Payment verification</h2>
          {verificationError ? (
            <p role="alert" className="mt-2 text-red-700">
              {verificationError}
            </p>
          ) : (
            <p className="mt-2">
              Reference {reference}:{" "}
              {String(
                verification?.status ?? verification?.message ?? "verified",
              )}
            </p>
          )}
        </section>
      )}
      <section className="mx-auto mt-12 grid w-full max-w-[1440px] gap-8 sm:mt-16 sm:gap-10 lg:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="max-w-[440px]">
          <p className="text-sm font-bold text-[#374151]">Donations</p>
          <h2 className="mt-6 text-[28px] font-bold-font leading-tight md:text-[54px]">
            Support us and make a difference for the future!
          </h2>

          <div
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
          <p className="mt-5 text-[18px] lg:text-[24px] leading-[1.4] font-medium text-[#0000000]">
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
          </div>
        </div>

        <DonationForm />
      </section>

      <VisionarySection />
    </main>
  );
}
