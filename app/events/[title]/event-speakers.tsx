"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { EventSpeaker } from "../events-data";

export default function EventSpeakers({
  speakers,
}: {
  speakers: EventSpeaker[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visibleSpeakers = speakers.slice(0, 3);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isOpen]);

  function closeDialog() {
    dialogRef.current?.close();
    setIsOpen(false);
  }

  return (
    <>
      <section className="min-w-0 rounded-xl bg-white px-6 py-8 sm:px-4">
        <div className="mb-4 h-[2px] w-10 bg-[#0C56D0]" />
        <h2 className="mb-7 text-xl font-bold sm:text-[18px]">
          Featured speakers
        </h2>
        <div className="flex flex-col gap-6">
          {visibleSpeakers.map((speaker) => (
            <div key={speaker.id} className="flex items-center gap-2">
              <SpeakerInitials name={speaker.name} />
              <div className="min-w-0">
                <h3 className="text-base font-bold leading-snug text-[#202a26] sm:text-[17px]">
                  {speaker.name}
                </h3>
                <p className="text-[12px] leading-snug text-[#657079]">
                  {speaker.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          aria-haspopup="dialog"
          onClick={() => setIsOpen(true)}
          className="mt-4 flex min-h-11 text-[14px] w-full items-center justify-center rounded-lg border border-[#E2E8F0] px-4 text-base font-bold text-[#46564f] transition-colors hover:border-[#176b58] hover:bg-[#f1f7f4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
        >
          View all {speakers.length} speakers
        </button>
      </section>

      {isOpen && (
        <dialog
          ref={dialogRef}
          aria-labelledby="event-speakers-title"
          onClose={() => setIsOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeDialog();
            }
          }}
          className="m-auto max-h-[88vh] w-[min(92vw,900px)] max-w-none overflow-hidden rounded-lg bg-white p-0 text-[#202a26] shadow-2xl backdrop:bg-black/55"
        >
          <div className="flex max-h-[88vh] flex-col">
            <header className="flex items-start justify-between gap-5 border-b border-[#e5e9e7] px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[1px] text-[#176b58]">
                  Event directory
                </p>
                <h2
                  id="event-speakers-title"
                  className="mt-1 text-2xl font-bold sm:text-3xl"
                >
                  All {speakers.length} speakers
                </h2>
              </div>
              <button
                type="button"
                autoFocus
                aria-label="Close speakers dialog"
                onClick={closeDialog}
                className="flex size-10 shrink-0 items-center justify-center rounded-md text-[#52616a] transition-colors hover:bg-[#f1f7f4] hover:text-[#173f35] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#176b58]/20"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </header>
            <ul className="grid grid-cols-1 gap-5 overflow-y-auto px-6 py-6 sm:grid-cols-2 sm:px-8">
              {speakers.map((speaker) => (
                <li
                  key={speaker.id}
                  className="flex min-w-0 items-center gap-4"
                >
                  <SpeakerInitials name={speaker.name} />
                  <div className="min-w-0">
                    <h3 className="font-bold leading-snug">{speaker.name}</h3>
                    <p className="mt-1 text-sm leading-snug text-[#657079]">
                      {speaker.role}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </dialog>
      )}
    </>
  );
}

function SpeakerInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e2f0eb] text-sm font-bold text-[#176b58]"
    >
      {initials}
    </span>
  );
}
