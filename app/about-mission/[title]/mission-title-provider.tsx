"use client";

import { createContext, useContext, type ReactNode } from "react";

const MissionTitleContext = createContext<string | null>(null);

export default function MissionTitleProvider({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <MissionTitleContext.Provider value={title}>
      {children}
    </MissionTitleContext.Provider>
  );
}

export function useMissionTitle() {
  const title = useContext(MissionTitleContext);

  if (title === null) {
    throw new Error("MissionTitleProvider is missing from the route layout.");
  }

  return title;
}