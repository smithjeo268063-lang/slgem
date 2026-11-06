import type { ReactNode } from "react";
import { cache } from "react";
import { apiGet, ApiError, getRecordSeoMetadata } from "@/lib/api";
import type { ApiMission } from "@/lib/api";
import MissionTitleProvider from "./mission-title-provider";

export const instant = false;

const getMission = cache((slug: string) =>
  apiGet<ApiMission>(`/missions/${encodeURIComponent(slug)}`),
);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  try {
    return getRecordSeoMetadata(await getMission(title));
  } catch (error) {
    if (error instanceof ApiError && error.statusCode === 404) return {};
    console.error(`[Mission metadata] Unable to load mission "${title}":`, error);
    return {};
  }
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
    <MissionTitleProvider title={formatMissionTitle(title)} slug={title}>
      {children}
    </MissionTitleProvider>
  );
}
