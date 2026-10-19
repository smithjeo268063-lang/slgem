import type { ReactNode } from "react";

const missionUpdateSlugs = [
  "week-one-update",
  "community-outreach",
  "open-air-crusade",
  "rural-missions-update",
];

export function generateStaticParams() {
  return missionUpdateSlugs.map((title) => ({ title }));
}

export default async function MissionUpdateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
