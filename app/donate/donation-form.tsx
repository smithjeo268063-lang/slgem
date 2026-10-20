"use client";

import type { FormEvent } from "react";

export default function DonationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="w-full rounded-[24px] bg-[#F1F2F5] px-5 py-8 sm:rounded-[32px] sm:px-8 sm:py-12 lg:rounded-[40px] lg:min-h-fit lg:px-[7.2%] lg:py-[54px]">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        <h1 className="text-[24px] mb-4 font-bold leading-[1.25] tracking-[-0.35px] text-[#111827] sm:text-[40px] lg:text-[48px]">
          Donation Form
        </h1>
        <p className="m-0 max-w-[850px] text-[18px] font-normal lg:leading-[1.65] tracking-[0px] text-[#4B5563]/80 sm:text-[23px] lg:text-[18px]">
          Please fill out the form below to make a donation. Your contribution,
          big or small, helps us make a real difference.
        </p>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="fullName"
            className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
          >
            Your Full Names
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            className="mt-[0px] h-[45px] w-full border-0 border-b border-[#111111] rounded-[5px] bg-transparent px-0 pb-[2px] text-[18px] font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="email"
            className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="mt-[0px] h-[45px] w-full border-0 border-b border-[#111111] rounded-[5px] bg-transparent px-0 pb-[2px] text-[18px] font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="message"
            className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
          >
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Enter what you are giving"
            className="mt-2  h-[80px] md:h-[100px] w-full resize-y rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 py-2 text-[18px] flex items-end font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="donationAmount"
            className="block text-[16px] font-bold leading-[30px] tracking-[-0.35px] text-[#111827]"
          >
            Choose your donation Amount
          </label>
          <textarea
            id="donationAmount"
            name="donationAmount"
            rows={1}
            inputMode="decimal"
            aria-label="Donation amount in US dollars"
            placeholder="$1000.00"
            className="mt-2 h-[80px] md:h-[100px] w-full resize-none whitespace-nowrap rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 pb-[2px] text-[54px] lg:text-[68px] font-normal leading-none tracking-[-1px] text-[#111827] outline-none placeholder:text-[#A5AFBF]/35 focus:border-[#111111] focus:ring-0"
          />
        </div>

        <button
          type="submit"
          className="mt-[12px] lg:mt-[22px] flex h-[62px] lg:h-[78px] w-full items-center justify-center rounded-full bg-[#0E004E] px-[0px] text-center text-[16px] md:text-[18px] font-bold leading-[30px] tracking-[0.7px] text-white transition-all duration-300 hover:bg-[#130066] active:scale-[0.99]"
        >
          GIVE TO BLESS LIVES
        </button>
      </form>
    </div>
  );
}
