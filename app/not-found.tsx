"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh overflow-hidden bg-[#fcfcfc] text-[#0A1931]">
      <div className="relative mx-auto grid w-full max-w-360 flex-1 grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start">
          <p
            className="m-0 text-[120px] font-bold-font leading-[0.82] text-[#0A1931]/60 sm:text-[160px] lg:text-[190px]"
            aria-hidden="true"
          >
            404
          </p>

          <div className="mt-8">
            <h1 className="m-0 max-w-140 text-[42px] font-bold-font leading-[1.08] sm:text-[54px] lg:text-[62px]">
              Page not found.
            </h1>

            <p className="mt-5 max-w-110 text-[18px] leading-[1.6] text-[#0A1931]/70 sm:text-[20px]">
              The address may be incorrect, or the page may have moved.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
              <Link
                href="/"
                className="inline-flex min-h-14 items-center justify-center rounded-sm border border-[#0A1931]/20 bg-white px-6 text-[16px] font-bold text-[#0A1931] transition-colors duration-200 hover:bg-[#0A1931]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1931] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F5F5]"
              >
                Return home
              </Link>

              <Link
                href="/mission"
                className="group inline-flex min-h-14 items-center gap-3 text-[16px] font-semibold text-[#0A1931] focus-visible:outline-none focus-visible:underline"
              >
                Explore our mission
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>

        <figure className="relative m-0 min-h-75 w-full overflow-hidden rounded-sm sm:min-h-105 lg:min-h-145">
          <Image
            src="/images/home/mission2.jpg"
            alt="A group gathered together outdoors during a community outreach"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 52vw"
            className="object-cover object-center grayscale"
          />
        </figure>
      </div>
    </main>
  );
}
