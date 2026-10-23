"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

export default function MissionPaymentStatus() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const reference = new URLSearchParams(window.location.search).get(
      "reference",
    );
    if (!reference) return;

    let active = true;
    apiGet<Record<string, unknown>>(
      `/missions/verify?reference=${encodeURIComponent(reference)}`,
    )
      .then((result) => {
        if (!active) return;
        setMessage(
          `Payment ${reference}: ${String(result?.status ?? result?.message ?? "verification complete")}`,
        );
      })
      .catch((requestError: unknown) => {
        if (!active) return;
        setError(true);
        setMessage(
          requestError instanceof Error
            ? requestError.message
            : "Unable to verify this payment.",
        );
      });

    return () => {
      active = false;
    };
  }, []);

  return message ? (
    <p
      role={error ? "alert" : "status"}
      className={`mx-auto mt-6 w-full max-w-[1696px] ${error ? "text-red-700" : "text-black-800"}`}
    >
      {message}
    </p>
  ) : null;
}
