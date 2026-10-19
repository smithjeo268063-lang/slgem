"use client";

import type { FormEvent, ReactNode } from "react";

export default function DepartmentDonationForm({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
