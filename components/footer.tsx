import Link from "next/link";
import Image from "next/image";
import type { AdminSettings } from "@/lib/admin-settings";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "{ HOME }",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Mission", href: "/mission" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "{ COMPANY }",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Media", href: "/media" },
      { label: "Departments", href: "/departments" },
    ],
  },
  {
    title: "{ SUPPORT }",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Contact Us", href: "/contact" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "{ FOLLOW US }",
    links: [],
  },
];

function getSocialLinks(socialLinks: AdminSettings["social_links"] = {}) {
  return Object.entries(socialLinks).flatMap(([name, value]) => {
    let href = value.trim();
    if (!href) return [];

    href = href.replace(/^(https?)\./i, "$1://");
    if (!/^https?:\/\//i.test(href)) href = `https://${href}`;

    try {
      const url = new URL(href);
      if (url.protocol !== "http:" && url.protocol !== "https:") return [];
    } catch {
      return [];
    }

    const label =
      name.toLowerCase() === "whatsapp"
        ? "WhatsApp"
        : `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    return [{ label, href, external: true }];
  });
}

export default function Footer({ settings }: { settings?: AdminSettings }) {
  const columns = footerColumns.map((column) =>
    column.title === "{ FOLLOW US }"
      ? { ...column, links: getSocialLinks(settings?.social_links) }
      : column,
  );
  const siteName = settings?.site_name || "SLGEM";

  return (
    <footer className="w-full overflow-hidden bg-[#111725] text-[#FFF9F8]">
      {/* =========================
          TOP FOOTER CONTENT
      ========================== */}
      <div
        className="
          border-b
          border-[#737987]
          px-[5.2%]
          lg:py-[81px]
          py-[42px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[70px]
            lg:grid-cols-[1.5fr_2.2fr]
            lg:gap-[80px]
          "
        >
          {/* =========================
              BRAND / CONTACT
          ========================== */}
          <div className="max-w-[470px]">
            <Link
              href="/"
              aria-label={`${siteName} home`}
              className="relative block h-16 w-16"
            >
              <Image
                src="/images/COLOURED%20ICON%20WHITE%20FILL.png"
                alt={siteName}
                fill
                sizes="64px"
                className="object-contain"
              />
            </Link>
            {settings?.site_tagline && (
              <p className="mt-3 text-sm font-semibold tracking-wide">
                {settings.site_tagline}
              </p>
            )}

            <div className="mt-[15px] lg:mt-[25px]">
              {settings?.office_address && (
                <p
                  className="
                  m-0
                  max-w-[430px]
                  text-[17px]
                  font-semibold
                  leading-[1.45]
                  tracking-[1px]
                "
                >
                  {settings.office_address}
                </p>
              )}

              {settings?.contact_phone && (
                <p
                  className="
                  m-0
                  mt-[19px]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  tracking-[-0.3px]
                "
                >
                  <a href={`tel:${settings.contact_phone}`}>
                    {settings.contact_phone}
                  </a>
                </p>
              )}

              {settings?.contact_email && (
                <p
                  className="
                  m-0
                  mt-[18px]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  tracking-[0.4px]
                "
                >
                  <a href={`mailto:${settings.contact_email}`}>
                    {settings.contact_email}
                  </a>
                </p>
              )}
            </div>
          </div>

          {/* =========================
              NAVIGATION COLUMNS
          ========================== */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-[50px]
              gap-y-[55px]
              sm:grid-cols-4
              sm:gap-x-[45px]
              lg:gap-x-[s30px]
            "
          >
            {columns.map((column) => (
              <div key={column.title}>
                <h3
                  className="
                    m-0
                    whitespace-nowrap
                    text-[19px]
                    font-normal
                    leading-[1.2]
                    tracking-[-0.5px]
                  "
                >
                  {column.title}
                </h3>

                <nav className="mt-[22px] flex flex-col gap-[18px]">
                  {column.links.map((link) =>
                    link.external ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        w-fit
                        text-[16px]
                        font-normal
                        leading-[1.3]
                        tracking-[-0.3px]
                        transition-opacity
                        duration-300
                        hover:opacity-60
                      "
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="
                        w-fit
                        text-[16px]
                        font-normal
                        leading-[1.3]
                        tracking-[-0.3px]
                        transition-opacity
                        duration-300
                        hover:opacity-60
                      "
                      >
                        {link.label}
                      </Link>
                    ),
                  )}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          LARGE BRAND TEXT
      ========================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
        px-[0%] pt-[30px]
          pb-[65px]
        "
      >
        <div
          className="
            whitespace-nowrap text-[80px]
            lg:text-[380px] text-center
            font-normal
            uppercase
            leading-[0.72]
            tracking-[10px]
          "
        >
          {siteName}
        </div>
      </div>
    </footer>
  );
}
