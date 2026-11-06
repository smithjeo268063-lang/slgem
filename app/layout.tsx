import type { Metadata } from "next";
import { Suspense } from "react";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import { getAdminSettings } from "@/lib/admin-settings";
import type { AdminSettings } from "@/lib/admin-settings";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PageMotion from "@/components/page-motion";

const boldItalicFont = localFont({
  src: "../public/fonts/Candara_Bold_Italic.ttf",
  variable: "--font-candara-bold-italic",
  weight: "700",
  style: "italic",
});

const boldFont = localFont({
  src: "../public/fonts/Candara_Bold.ttf",
  variable: "--font-candara-bold",
  weight: "700",
});

const italicFont = localFont({
  src: "../public/fonts/Candara_Italic.ttf",
  variable: "--font-candara-italic",
  weight: "400",
  style: "italic",
});

const normalFont = localFont({
  src: "../public/fonts/Candara.ttf",
  variable: "--font-candara-normal",
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

async function loadAdminSettings(): Promise<AdminSettings | undefined> {
  try {
    return await getAdminSettings();
  } catch (error) {
    console.error("[Admin settings] Unable to load site settings:", error);
    return undefined;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await loadAdminSettings();
  const siteName = settings?.site_name || "SLGEM";
  const tagline = settings?.site_tagline;

  return {
    title: siteName,
    ...(tagline ? { description: tagline } : {}),
    ...(settings?.favicon
      ? { icons: { icon: [{ url: settings.favicon }] } }
      : {}),
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const settings = await loadAdminSettings();

  return (
    <html
      lang="en"
      className={`${boldItalicFont.variable} ${boldFont.variable} ${italicFont.variable} ${normalFont.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-normal-font">
        <Suspense fallback={null}>
          <Header settings={settings} />
        </Suspense>
        <PageMotion>
          {children}
          <Footer settings={settings} />
        </PageMotion>
      </body>
    </html>
  );
}
