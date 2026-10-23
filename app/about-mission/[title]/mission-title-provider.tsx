"use client";

import { createContext, useContext, type ReactNode } from "react";

const MissionTitleContext = createContext<{
  title: string;
  slug: string;
} | null>(null);

export default function MissionTitleProvider({
  children,
  title,
  slug,
}: {
  children: ReactNode;
  title: string;
  slug: string;
}) {
  return (
    <MissionTitleContext.Provider value={{ title, slug }}>
      {children}
    </MissionTitleContext.Provider>
  );
}

export function useMissionTitle() {
  const context = useContext(MissionTitleContext);

  if (context === null) {
    throw new Error("MissionTitleProvider is missing from the route layout.");
  }

  return context.title;
}

export function useMissionSlug() {
  const context = useContext(MissionTitleContext);

  if (context === null) {
    throw new Error("MissionTitleProvider is missing from the route layout.");
  }

  return context.slug;
}