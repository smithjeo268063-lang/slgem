"use client";

import { useApiData } from "@/lib/use-api";
import type { ApiTestimony } from "@/lib/api";

export default function TestimonyList() {
  const { data: testimonies, error, isLoading } =
    useApiData<ApiTestimony[]>("/testimonies");
  const approvedTestimonies = (testimonies ?? [])
    .filter((item) => item?.is_approved === true && item?.testimony)
    .slice(0, 3);

  return (
    <section
      aria-labelledby="testimonies-heading"
      className="mx-auto mt-16 w-full max-w-[1440px] border-t border-[#D8D9DE] py-12 sm:mt-24 sm:py-16"
    >
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#374151]">
        Testimonies
      </p>
      <h2
        id="testimonies-heading"
        className="mt-3 max-w-3xl text-[30px] font-bold-font leading-tight sm:text-[42px]"
      >
        Stories of God&apos;s faithfulness
      </h2>
      <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-[#59625c] sm:text-[18px]">
        Read how God is working in the lives of our community.
      </p>
      {error && (
        <p role="alert" className="mt-6 rounded-xl bg-red-50 p-4 text-red-700">
          Testimonies could not be loaded: {error}
        </p>
      )}
      {isLoading && (
        <p role="status" className="mt-6 text-[#59625c]">
          Loading testimonies...
        </p>
      )}
      {!isLoading && !error && approvedTestimonies.length === 0 && (
        <p className="mt-6 rounded-2xl bg-[#F1F2F5] p-6 text-[#59625c]">
          No testimonies are available yet. Check back soon.
        </p>
      )}
      {approvedTestimonies.length > 0 && (
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {approvedTestimonies.map((item, index) => (
            <article
              key={item?.id ?? index}
              className="flex min-h-full flex-col rounded-[24px] bg-[#F1F2F5] p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="text-5xl font-bold leading-none text-[#0E004E]"
              >
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 whitespace-pre-line text-[18px] leading-relaxed text-[#252525]">
                {item?.testimony}
              </blockquote>
              <p className="mt-6 border-t border-[#D8D9DE] pt-4 font-bold text-[#171717]">
                {item?.full_name ?? "Community member"}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
