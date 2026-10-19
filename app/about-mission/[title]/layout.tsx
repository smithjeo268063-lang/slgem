import type { ReactNode } from "react";
import MissionTitleProvider from "./mission-title-provider";

export function generateStaticParams() {
  return [{ title: "Enugu-field-event" }];
}

function formatMissionTitle(slug: string) {
  return slug
    .split("-")
    .map(
      (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`,
    )
    .join(" ");
}

export default async function AboutMissionLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  return (
    <MissionTitleProvider title={formatMissionTitle(title)}>
      {children}
    </MissionTitleProvider>
  );
}
