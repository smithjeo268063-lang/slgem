"use client";

import Link from "next/link";

const footerColumns = [
  {
    title: "{ HOME }",
    links: [
      { label: "Home 1", href: "/" },
      { label: "Home 2", href: "/" },
      { label: "Home 3", href: "/" },
    ],
  },
  {
    title: "{ COMPANY }",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Events", href: "/events" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  {
    title: "{ SUPPORT }",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Join Us", href: "/join-us" },
      { label: "Donate", href: "/donate" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "{ FOLLOW US }",
    links: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Twitter", href: "#" },
    ],
  },
];

export default function Footer() {
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
              className="
                block
                text-[28px]
                font-medium
                leading-none
                tracking-[-1.5px]
              "
            >
              LOGO
            </Link>

            <div className="mt-[20px] lg:mt-[42px]">
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
                Ancestra Heritage Association 17 Willow
                <br />
                Lane,
              </p>

              <p
                className="
                  m-0
                  mt-[5px]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  tracking-[1px]
                "
              >
                Edinburgh, EH2 4AB, United Kingdom
              </p>

              <p
                className="
                  m-0
                  mt-[29px]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  tracking-[-0.3px]
                "
              >
                +1 212 425 8617
              </p>

              <p
                className="
                  m-0
                  mt-[28px]
                  text-[16px]
                  font-normal
                  leading-[1.45]
                  tracking-[0.4px]
                "
              >
                information@office.com
              </p>
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
            {footerColumns.map((column) => (
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
                  {column.links.map((link) => (
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
                  ))}
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
          SLGEM
        </div>
      </div>
    </footer>
  );
}
