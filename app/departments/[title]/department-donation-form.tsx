"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { apiPost } from "@/lib/api";

export default function DepartmentDonationForm({
  children,
  className,
  departmentSlug,
}: {
  children: ReactNode;
  className: string;
  departmentSlug: string;
}) {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      await apiPost(`/departments/${encodeURIComponent(departmentSlug)}/join`, {
        name: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
      });
      setIsSuccess(true);
      setMessage("Your request to join has been submitted.");
      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to submit your request.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`min-w-0 ${className}`}>
      {children}
      {message && (
        <p
          role={isSuccess ? "status" : "alert"}
          className={`mt-4 text-sm ${isSuccess ? "text-black-800" : "text-red-700"}`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
