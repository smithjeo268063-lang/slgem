"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { apiPost } from "@/lib/api";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      await apiPost("/contact", {
        full_name: formData.get("fullName"),
        phone_number: formData.get("phone"),
        subject: formData.get("subject"),
        email: formData.get("email"),
        message: formData.get("message"),
      });
      setIsSuccess(true);
      setMessage("Thank You, Your message has been sent.");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error ? error.message : "Unable to send your message.",
      );
    }
  }

  return (
    <div className="w-full rounded-[24px] bg-[#F1F2F5] px-5 py-8 sm:rounded-[32px] sm:px-8 sm:py-12 lg:rounded-[40px] lg:min-h-fit lg:px-[7.2%] lg:py-[54px]">
      <form onSubmit={handleSubmit} className="flex w-full flex-col">
        {/* <p className="m-0 max-w-[850px] text-[22px] font-normal leading-[1.65] tracking-[0px] text-[#4B5563]/80 sm:text-[23px] lg:text-[18px]">
          Please fill out the form below to make a donation. Your contribution,
          big or small, helps us make a real difference.
        </p> */}

        <div className="mt-[22px] w-full">
          <label
            htmlFor="fullName"
            className="block text-[16px] font-bold uppercase leading-[30px] tracking-[0px] text-[#111827]"
          >
            Full Names
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className="mt-[0px] h-[45px] w-full border-0 border-b border-[#111111] rounded-[5px] bg-transparent px-0 pb-[2px] text-[18px] font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="PhoneNumber"
            className="block text-[16px] font-bold uppercase leading-[30px] tracking-[0px] text-[#111827]"
          >
            PHONE NUMBER
          </label>
          <input
            id="PhoneNumber"
            name="phone"
            type="tel"
            required
            placeholder="Enter your phone number"
            className="mt-[0px] h-[45px] w-full border-0 border-b border-[#111111] rounded-[5px] bg-transparent px-0 pb-[2px] text-[18px] font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="subject"
            className="block text-[16px] font-bold uppercase leading-[30px] tracking-[0px] text-[#111827]"
          >
            Suject/topic
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Enter your subject or topic  "
            className="mt-[0px] h-[45px] w-full border-0 border-b border-[#111111] rounded-[5px] bg-transparent px-0 pb-[2px] text-[18px] font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        <div className="mt-[22px] w-full">
          <label
            htmlFor="email"
            className="block text-[16px] font-bold uppercase leading-[30px] tracking-[0px] text-[#111827]"
          >
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
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
            required
            rows={3}
            placeholder="Enter what you are giving"
            className="mt-2 min-h-[110px] w-full resize-y rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 py-2 text-[18px] flex items-end font-normal leading-[30px] tracking-[0px] text-[#111827] outline-none placeholder:text-[#A5AFBF] focus:border-[#111111] focus:ring-0"
          />
        </div>

        {/* <div className="mt-[22px] w-full">
          <label
            htmlFor="donationAmount"
            className="block text-[16px] font-bold leading-[30px] tracking-[0px] text-[#111827]"
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
            className="mt-2 h-[100px] w-full resize-none whitespace-nowrap rounded-[5px] border-0 border-b border-[#111111] bg-transparent px-0 pb-[2px] text-[68px] font-normal leading-none tracking-[-1px] text-[#111827] outline-none placeholder:text-[#A5AFBF]/35 focus:border-[#111111] focus:ring-0"
          />
        </div> */}

        <button
          type="submit"
          className="mt-[22px] flex h-[62px] md:h-[78px] w-full items-center justify-center rounded-full bg-[#0E004E] px-[0px] text-center text-[18px] font-bold leading-[30px] tracking-[0.7px] text-white transition-all duration-300 hover:bg-[#130066] active:scale-[0.99]"
        >
          Contact Us
        </button>
        {message && (
          <p
            role={isSuccess ? "status" : "alert"}
            className={`mt-4 text-sm ${isSuccess ? "text-black-800" : "text-red-700"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
