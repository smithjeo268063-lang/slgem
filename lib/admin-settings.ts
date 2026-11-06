import { cacheLife } from "next/cache";
import { apiGet } from "@/lib/api";

export type AdminSettings = {
  site_name?: string;
  site_tagline?: string;
  site_logo?: string;
  favicon?: string;
  cta_image?: string;
  office_address?: string;
  contact_email?: string;
  contact_phone?: string;
  social_links?: Record<string, string>;
};

export async function getAdminSettings() {
  "use cache";
  cacheLife("hours");
  return apiGet<AdminSettings>("/admin-settings");
}
