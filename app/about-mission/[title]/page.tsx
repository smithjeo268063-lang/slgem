"use client";

import { useState } from "react";
import Link from "next/link";
import { useMissionSlug, useMissionTitle } from "./mission-title-provider";
import type { ApiMission, ApiMissionWithUpdates } from "@/lib/api";
import { apiPost, getRecordImage } from "@/lib/api";
import { useApiData } from "@/lib/use-api";
import { Skeleton, SkeletonStatus } from "@/components/skeleton-loader";
import MissionPaymentStatus from "./mission-payment-status";

const donationAmounts = [50, 100, 200, 300];

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(amount);

export default function MissionDonationSection() {
  const title = useMissionTitle();
  const slug = useMissionSlug();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { data: mission, error: missionError } = useApiData<ApiMission>(
    `/missions/${encodeURIComponent(slug)}`,
  );
  const {
    data: missionRecordsWithUpdates,
    error: updatesError,
    isLoading: updatesLoading,
  } = useApiData<ApiMissionWithUpdates[]>(
    `/missions/${encodeURIComponent(slug)}/updates`,
  );
  const missionUpdates =
    missionRecordsWithUpdates?.find((record) => record?.slug === slug)
      ?.updates ?? [];

  const amount = customAmount.trim() ? Number(customAmount) : selectedAmount;

  function handleCustomAmount(value: string) {
    setCustomAmount(value);
    setSelectedAmount(null);
    setMessage("");
  }

  async function handleDonate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!amount || !Number.isFinite(amount) || amount <= 0) {
      setMessage("Please select or enter a valid donation amount.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    setMessage("");
    try {
      const result = await apiPost<Record<string, unknown>>(
        `/missions/${encodeURIComponent(slug)}/donate`,
        {
          full_name: fullName.trim(),
          email: formData.get("email"),
          amount,
        },
      );
      const paymentUrl = result?.authorization_url;
      if (typeof paymentUrl === "string") {
        window.location.assign(paymentUrl);
        return;
      }
      setMessage("Your donation request has been submitted.");
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Unable to process donation.",
      );
    }
  }

  return (
    <main>
      <MissionPaymentStatus />
      <section className="relative overflow-visible mb-40 isolate min-h-[340px] overflow-hidden bg-[#100b16] lg:h-[600px] absolute top-0 lg:min-h-0">
        {/* Background image */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${getRecordImage(mission) || "/images/mission/update.jpg"}')`,
          }}
          aria-hidden="true"
        />

        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0 -z-10 bg-[#071A5266]"
          aria-hidden="true"
        />

        {/* Hero heading */}
        <div className="mx-auto absolute bottom-[66px] lg:relative sm:relative max-w-[1500px] px-5 pt-16 text-start lg:text-center sm:px-8 sm:pt-20 lg:px-10 lg:pt-[210px]">
          <h1 className="mx-auto max-w-[1250px] font-sans text-[clamp(2.4rem,5.8vw,7rem)] font-bold leading-[1.08] tracking-[-0.045em] text-white">
            Raise awareness about
            <br />
            {title}
          </h1>
        </div>

        {/* Fundraising statistics bar */}
        <div className="absolute left-1/2 bottom-[-170px] -translate-x-1/2 sm:relative sm:left-auto sm:translate-x-0 mx-auto mt-0 w-[calc(100%-32px)] max-w-[1572px] sm:mt-14 sm:w-[calc(100%-64px)] lg:absolute lg:left-1/2 lg:top-[55.8%] lg:mt-0 lg:w-[calc(100%-80px)] lg:-translate-x-1/2 xl:w-[82%] lg:scale-[0.95]">
          <div className="grid grid-cols-2 overflow-hidden lg:grid-cols-[1fr_1fr_1fr_1.55fr]">
            {/* Raised */}
            <div className="flex min-h-[110px] h-[110px] flex-col items-center justify-center bg-[#ffb900] px-4 py-6 text-center lg:h-[170px] lg:min-h-0 lg:py-0">
              <p className="mb-2 text-[20px] font-normal leading-tight text-black sm:text-[28px] lg:text-[36px]">
                Raised
              </p>
              <p className="whitespace-nowrap text-[26px] font-bold leading-tight tracking-[-0.035em] text-black sm:text-[42px] lg:text-[50px]">
                {mission?.formatted?.raised ??
                  formatAmount(mission?.amounts?.raised ?? 0)}
              </p>
            </div>

            {/* Goal */}
            <div className="flex min-h-[110px] h-[110px] flex-col items-center justify-center bg-[#ffed00] px-4 py-6 text-center lg:h-[170px] lg:min-h-0 lg:py-0">
              <p className="mb-2 text-[20px] font-normal leading-tight text-black sm:text-[28px] lg:text-[36px]">
                Goal
              </p>
              <p className="whitespace-nowrap text-[26px] font-bold leading-tight tracking-[-0.035em] text-black sm:text-[42px] lg:text-[50px]">
                {mission?.formatted?.goal ??
                  formatAmount(mission?.amounts?.goal ?? 0)}
              </p>
            </div>

            {/* Collection */}
            <div className="flex min-h-[110px] h-[110px] flex-col items-center justify-center bg-[#ff350b] px-4 py-6 text-center lg:h-[170px] lg:min-h-0 lg:py-0">
              <p className="mb-2 text-[20px] font-normal leading-tight text-white sm:text-[28px] lg:text-[36px]">
                Collection
              </p>
              <p className="text-[26px] font-bold leading-tight tracking-[-0.035em] text-white sm:text-[42px] lg:text-[50px]">
                {mission?.formatted?.progress ??
                  `${mission?.amounts?.progress ?? 0}%`}
              </p>
            </div>

            {/* Donation call to action */}
            <a
              href="#donate"
              className="flex min-h-[110px] h-[110px] items-center justify-center bg-[#110052] px-0 py-8 text-center text-white transition-colors duration-200 hover:bg-[#1d0875] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white sm:col-span-3 sm:min-h-[130px] lg:col-span-1 lg:h-[170px] lg:min-h-0 lg:py-0"
            >
              <span className="text-[18px] font-bold leading-tight sm:text-[32px] lg:text-[28px]">
                Make Donations
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f8f9fb] px-5 py-12 sm:px-8 lg:px-20 lg:py-[100px]">
        <div className="mx-auto grid w-full max-w-[1696px] grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-[70px] xl:gap-[72px]">
          {/* LEFT: MISSION INTRODUCTION AND SCROLLABLE UPDATES */}
          <div className="min-w-0 lg:sticky lg:top-8">
            <div className="max-h-none overflow-hidden lg:max-h-none lg:pr-0">
              <div className="pb-10">
                <h2 className="mb-4 text-[28px] font-bold leading-[1.2] tracking-[0px] text-black lg:text-[34px]">
                  About Mission
                </h2>

                <p className="max-w-[880px] text-[18px] font-normal leading-[1.5] tracking-[0px] text-[#080808] sm:text-[22px] lg:text-[26px]">
                  {mission?.description}
                </p>
              </div>

              {/* Four data-driven mission updates */}
              <nav className="max-h-fit overflow-y-auto lg:max-h-[calc(100vh-300px)] scrollbar-none">
                <h1 className="text-[24px] bg-[#f8f9fb] border-b-1 w-full py-4 fixed z-10 font-bold leading-[1.2] tracking-[0px] text-black lg:text-[28px] mb-6">
                  Mission Updates
                </h1>
                <div className="mt-14">
                  {missionError && (
                    <p role="alert" className="text-sm text-red-700">
                      Mission details could not be loaded: {missionError}
                    </p>
                  )}
                  {updatesError && (
                    <p role="alert" className="text-sm text-red-700">
                      Mission updates could not be loaded: {updatesError}
                    </p>
                  )}
                  {updatesLoading && (
                    <SkeletonStatus
                      label="Loading mission updates"
                      className="space-y-5 py-4"
                    >
                      {[0, 1].map((item) => (
                        <div
                          key={item}
                          className="grid gap-4 border-t border-[#202020] py-8 sm:grid-cols-2 sm:gap-8"
                        >
                          <Skeleton className="h-[240px] w-full rounded-[28px]" />
                          <div className="space-y-4 py-2">
                            <Skeleton className="h-7 w-3/4 rounded-md" />
                            <Skeleton className="h-4 w-full rounded-md" />
                            <Skeleton className="h-4 w-5/6 rounded-md" />
                            <Skeleton className="h-4 w-2/3 rounded-md" />
                          </div>
                        </div>
                      ))}
                    </SkeletonStatus>
                  )}
                  {!updatesLoading &&
                    !updatesError &&
                    missionUpdates.length === 0 && (
                      <p className="py-4 text-[#5e6677]">
                        No mission updates are available yet.
                      </p>
                    )}
                  {missionUpdates.map((update, index) => {
                    const updateTitle = update?.title ?? "";
                    const updateImage =
                      update?.hero_image || "/images/mission/the_event.jpg";
                    return (
                      <article
                        key={update?.id ?? update?.slug ?? index}
                        id={`mission-update-${update?.id ?? index}`}
                        className="grid grid-cols-1 gap-4 border-t border-[#202020] py-10 sm:grid-cols-[minmax(0,0.98fr)_minmax(0,0.99fr)] sm:gap-8 lg:gap-[24px] lg:py-[45px]"
                      >
                        <div className="h-[240px] overflow-hidden rounded-[28px] lg:h-[240px]">
                          <img
                            src={updateImage}
                            alt={updateTitle}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                          />
                        </div>

                        <div className="flex min-w-0 flex-col items-start pt-0 sm:pt-0">
                          {/* <span className="mb-2 text-sm font-medium text-[#6c7180]">
                        {update.date}
                      </span> */}

                          <h3 className="text-[21px] font-bold leading-tight tracking-[0px] text-black lg:text-[24px]">
                            {updateTitle}
                          </h3>

                          {update?.mission_update && (
                            <p className="mt-2 line-clamp-4 whitespace-pre-line text-[18px] leading-[1.4] text-[#111111] lg:text-[18px] lg:leading-[1.5]">
                              {update.mission_update}
                            </p>
                          )}

                          {update?.slug && (
                            <Link
                              href={`/mission-update/${encodeURIComponent(update.slug)}`}
                              className="mt-10 lg:mt-8 inline-flex items-center gap-3 text-[14px] lg:text-[12px] font-bold uppercase text-black/80 transition-opacity hover:opacity-60"
                            >
                              View updates
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-[18px] w-[18px]"
                                aria-hidden="true"
                              >
                                <path
                                  d="M5 12h14m-6-6 6 6-6 6"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </article>
                    );
                  })}

                  <div className="border-t border-[#202020]" />
                </div>
              </nav>
            </div>
          </div>

          {/* RIGHT: DONATION FORM */}
          <aside className="min-w-0 rounded-[34px] border border-[#f4eeee] bg-[#fff9f8] px-6 py-9 sm:px-10 sm:py-12 lg:rounded-[42px] lg:px-[40px] lg:py-[48px]">
            <h2 className="text-[24px] font-bold leading-tight tracking-[0px] text-[#111827] lg:text-[26px]">
              Donate and Make an Impact
            </h2>

            <p className="mt-3 text-[16px] leading-[1.7] text-[#5e6677] sm:text-[18px] sm:leading-[1.4]">
              Please fill out the form below to make a donation. Your
              contribution, big or small, helps us make a real difference.
            </p>

            <form onSubmit={handleDonate} className="mt-7 space-y-9">
              {/* Full name */}
              <div>
                <label
                  htmlFor="donor-name"
                  className="mb-2 block text-[18px] font-bold text-[#111827] text-[20px]"
                >
                  Your Full Name
                </label>

                <input
                  id="donor-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="Enter your full name"
                  className="h-[44px] w-full border-0 border-b border-[#252525] bg-transparent px-0 pb-3 text-[17px] text-[#111827] outline-none transition-colors placeholder:text-[#9ca5b4] focus:border-b-2 focus:border-[#14064f] sm:text-[18px]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="donor-email"
                  className="mb-2 block text-[18px] font-bold text-[#111827] text-[20px]"
                >
                  Your Email
                </label>

                <input
                  id="donor-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="h-[44px] w-full border-0 border-b border-[#252525] bg-transparent px-0 pb-3 text-[17px] text-[#111827] outline-none transition-colors placeholder:text-[#9ca5b4] focus:border-b-2 focus:border-[#14064f] sm:text-[18px]"
                />
              </div>

              {/* Preset donation amounts */}
              <fieldset>
                <legend className="mb-2 text-[18px] font-bold text-[#111827] sm:text-[20px]">
                  Donation Amount
                </legend>

                <div className="flex flex-wrap gap-2 sm:gap-[8px]">
                  {donationAmounts.map((donation) => {
                    const isSelected = selectedAmount === donation;

                    return (
                      <button
                        key={donation}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedAmount(donation);
                          setCustomAmount("");
                          setMessage("");
                        }}
                        className={`min-w-[74px] rounded-[20px] border px-4 py-[13px] text-[18px] font-bold leading-tight transition-colors sm:min-w-[85px] sm:px-0 sm:py-[14px] sm:text-[22px] ${
                          isSelected
                            ? "border-[#160653] bg-[#160653] text-white"
                            : "border-[#160653] bg-transparent text-black hover:bg-[#f0ecff]"
                        }`}
                      >
                        ${donation}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Custom amount */}
              <div>
                <label htmlFor="custom-amount" className="sr-only">
                  Custom donation amount in dollars
                </label>

                <div className="flex h-[40px] items-center border-b border-[#252525] focus-within:border-b-2 focus-within:border-[#14064f]">
                  <span className="mr-2 text-[18px] text-[#9ca5b4]">
                    {customAmount ? "$" : ""}
                  </span>

                  <input
                    id="custom-amount"
                    name="customAmount"
                    type="number"
                    min="1"
                    step="0.01"
                    inputMode="decimal"
                    value={customAmount}
                    onChange={(event) => handleCustomAmount(event.target.value)}
                    placeholder="Put custom amount"
                    className="h-full w-full border-0 bg-transparent px-0 pb-1 text-[16px] text-[#111827] outline-none placeholder:text-[#9ca5b4] sm:text-[18px]"
                  />
                </div>
              </div>

              {/* Donation submission */}
              <button
                type="submit"
                className="flex min-h-[58px] w-full items-center justify-center rounded-full bg-[#150451] px-6 py-0 text-[16px] font-bold uppercase text-white transition-colors duration-200 hover:bg-[#25116f] focus:outline-none focus:ring-4 focus:ring-[#150451]/20 active:scale-[0.99] sm:text-[18px]"
              >
                Give to this
              </button>

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm leading-6 text-[#24115d]"
                >
                  {message}
                </p>
              )}
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
