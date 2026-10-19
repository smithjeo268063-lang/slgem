"use client";

import { Check, LoaderCircle, X } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type ModalStep =
  | "closed"
  | "choice"
  | "declined"
  | "details"
  | "loading"
  | "success";

export default function EventRsvpButton({
  eventTitle,
}: {
  eventTitle: string;
}) {
  const [step, setStep] = useState<ModalStep>("closed");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (step !== "closed" && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [step]);

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    },
    [],
  );

  function closeDialog() {
    dialogRef.current?.close();
    setStep("closed");
    setPhone(undefined);
    setPhoneError("");
  }

  function submitRegistration(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Enter a valid phone number for the selected country.");
      return;
    }

    setPhoneError("");
    setStep("loading");
    timeoutRef.current = setTimeout(() => setStep("success"), 1300);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setStep("choice")}
        className="flex min-h-10.5 w-full items-center justify-center gap-3 rounded-[18px] bg-[#0E004E] px-6 py-4 text-base font-bold text-white shadow-lg shadow-[#173f35]/10 transition-colors hover:bg-[#0E004E]/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0E004E]/25"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#173f35]">
          <Check aria-hidden="true" className="h-4 w-4" />
        </span>
        RSVP Now
      </button>

      {step !== "closed" && (
        <dialog
          ref={dialogRef}
          aria-labelledby="rsvp-modal-title"
          onClose={() => {
            if (step !== "loading") {
              setStep("closed");
            }
          }}
          onCancel={(event) => {
            if (step === "loading") {
              event.preventDefault();
            }
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget && step !== "loading") {
              closeDialog();
            }
          }}
          className="m-auto max-h-[90vh] w-[min(92vw,500px)] max-w-none overflow-hidden rounded-xl bg-white p-0 text-[#202a26] shadow-2xl backdrop:bg-black/55"
        >
          <div className="flex max-h-[90vh] flex-col">
            <header className="flex items-start justify-between gap-5 border-b border-[#e5e9e7] px-6 py-5 sm:px-8">
              <div>
                {/* <p className="text-xs font-bold uppercase tracking-[1px] text-[#176b58]">
                  Event RSVP
                </p> */}
                <h2
                  id="rsvp-modal-title"
                  className="mt-1 text-2xl font-bold leading-tight sm:text-3xl"
                >
                  {step === "choice" && "Confirm Your Attendance"}
                  {step === "declined" && "Response noted"}
                  {step === "details" && "Register your attendance"}
                  {step === "loading" && "Registering your details"}
                  {step === "success" && "You're expected at the event"}
                </h2>
              </div>
              {step !== "loading" && (
                <button
                  type="button"
                  autoFocus
                  aria-label="Close RSVP dialog"
                  onClick={closeDialog}
                  className="flex size-10 shrink-0 items-center justify-center rounded-md text-[#52616a] transition-colors hover:bg-[#f1f7f4] hover:text-[#173f35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
                >
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              )}
            </header>

            {step === "choice" && (
              <div className="-mt-4 px-6 py-7 sm:px-8 sm:pb-8">
                <p className="text-base leading-relaxed text-[#59646a]">
                  Will you be attending {eventTitle}?
                </p>
                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-1">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="min-h-12 rounded-lg bg-[#0E004E] px-5 py-3 font-bold text-white transition-colors hover:bg-[#0E004E]/85 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/25"
                  >
                    Going
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep("declined")}
                    className="min-h-12 rounded-lg border border-[#ff0033] px-5 py-3 font-bold text-[#ff0033] transition-colors hover:bg-[#f4f5f7] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
                  >
                    Not Going
                  </button>
                </div>
              </div>
            )}

            {step === "declined" && (
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-base leading-relaxed text-[#59646a]">
                  Thanks for letting us know. No registration details are
                  needed.
                </p>
                <button
                  type="button"
                  onClick={closeDialog}
                  className="mt-7 min-h-12 w-full rounded-lg border border-[#d5ddd8] px-5 py-3 font-bold text-[#46564f] transition-colors hover:bg-[#f4f7f5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
                >
                  Close
                </button>
              </div>
            )}

            {step === "details" && (
              <form
                className="overflow-y-auto px-6 py-6 sm:px-8"
                onSubmit={submitRegistration}
              >
                <p className="w-full sm:w-[90%] mb-5 text-sm leading-relaxed text-[#657079]">
                  Complete your details for {eventTitle}.
                </p>
                <div className="flex flex-col gap-4 ">
                  <FormField label="First name" htmlFor="rsvp-first-name">
                    <input
                      id="rsvp-first-name"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      placeholder="First Name"
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Surname" htmlFor="rsvp-surname">
                    <input
                      id="rsvp-surname"
                      name="surname"
                      autoComplete="family-name"
                      required
                      placeholder="Surname"
                      className={inputClassName}
                    />
                  </FormField>
                  <FormField label="Gender" htmlFor="rsvp-gender">
                    <select
                      id="rsvp-gender"
                      name="gender"
                      required
                      defaultValue=""
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      {/* <option value="non-binary">Non-binary</option>
                      <option value="prefer-not-to-say">
                        Prefer not to say
                      </option> */}
                    </select>
                  </FormField>
                  <FormField label="Email address" htmlFor="rsvp-email">
                    <input
                      id="rsvp-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email Address"
                      className={inputClassName}
                    />
                  </FormField>{" "}
                  <FormField
                    label="Home address"
                    htmlFor="rsvp-address"
                    className="sm:col-span-2"
                  >
                    <textarea
                      id="rsvp-address"
                      name="address"
                      autoComplete="street-address"
                      rows={2}
                      required
                      placeholder="Home Address"
                      className={`${inputClassName} resize-y`}
                    />
                  </FormField>
                  <FormField label="Phone number" htmlFor="rsvp-phone">
                    <PhoneInput
                      id="rsvp-phone"
                      name="phone"
                      defaultCountry="NG"
                      international
                      countryCallingCodeEditable={false}
                      value={phone}
                      onChange={(value) => {
                        setPhone(value);
                        setPhoneError("");
                      }}
                      required
                      className="rsvp-phone-input flex min-h-11 w-full items-center gap-2 rounded-md border border-[#d5ddd8] bg-white px-3 transition focus-within:border-[#176b58] focus-within:ring-2 focus-within:ring-[#176b58]/20"
                      numberInputProps={{
                        className:
                          "min-h-9 min-w-0 flex-1 border-0 bg-transparent px-0 py-2 text-sm text-[#202a26] outline-none focus:border-transparent focus:ring-0",
                        autoComplete: "tel",
                      }}
                    />
                    {phoneError && (
                      <span className="mt-1 block text-xs text-red-700">
                        {phoneError}
                      </span>
                    )}
                  </FormField>
                </div>
                <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  {/* <button
                    type="button"
                    onClick={() => setStep("choice")}
                    className="min-h-12 rounded-lg border border-[#d5ddd8] px-5 py-3 font-bold text-[#46564f] transition-colors hover:bg-[#f4f7f5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
                  >
                    Back
                  </button> */}
                  <button
                    type="submit"
                    className="min-h-12 rounded-lg bg-[#0E004E] px-6 py-3 font-bold text-white transition-colors hover:bg-[#00104e] focus-visible:outline-none w-full focus-visible:ring-4 focus-visible:ring-[#176b58]/25"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === "loading" && (
              <div
                role="status"
                className="flex flex-col items-center px-6 py-12 text-center sm:px-8"
              >
                <LoaderCircle
                  aria-hidden="true"
                  className="h-10 w-10 animate-spin text-[#176b58]"
                />
                <p className="mt-5 text-base font-semibold text-[#202a26]">
                  Preparing your RSVP...
                </p>
              </div>
            )}

            {step === "success" && (
              <div className="px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-base leading-relaxed text-[#52616a]">
                  Your RSVP is confirmed for <strong>{eventTitle}</strong>.
                  We’ll be expecting you at the event.
                </p>
                {/* <p className="mt-4 text-sm leading-relaxed text-[#657079]">
                  This is a local demo: your details have not been sent to or
                  stored by a registration service.
                </p> */}
                <button
                  type="button"
                  onClick={closeDialog}
                  className="mt-7 min-h-12 w-full rounded-lg bg-[#0E004E] px-5 py-3 font-bold text-white transition-colors hover:bg-[#0d1d96] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/25"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}

const inputClassName =
  "min-h-11 w-full rounded-md border border-[#d5ddd8] bg-white px-3 py-2 text-sm text-[#202a26] outline-none transition focus:border-[#0047ab]/4  focus:ring-2 focus:ring-[#0047ab]/10";

function FormField({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className={`block min-w-0 ${className}`}>
      <span className="sr-only">{label}</span>
      {children}
    </label>
  );
}
