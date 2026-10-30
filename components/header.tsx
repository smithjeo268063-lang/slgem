"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Our Mission", href: "/mission" },
  { label: "Partner with us", href: "/partner" },
  { label: "Contact Us", href: "/contact" },
];

const pageLinks = [
  { label: "Media", href: "/media" },
  { label: "Events", href: "/events" },
  { label: "Donations", href: "/donate" },
  { label: "About Us", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Testimonies", href: "/testimony" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY >= 64);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const updateCurrentHash = () => setCurrentHash(window.location.hash);

    updateCurrentHash();
    window.addEventListener("hashchange", updateCurrentHash);

    return () => window.removeEventListener("hashchange", updateCurrentHash);
  }, []);

  const hasTransparentHero =
    pathname === "/" ||
    pathname === "/mission" ||
    pathname === "/update" ||
    pathname.startsWith("/about-mission/") ||
    pathname === "";
  const isHeaderLight = isScrolled || isMobileMenuOpen || !hasTransparentHero;
  const textColor = isHeaderLight ? "text-[#0A1931]" : "text-white";
  const linkClass = `whitespace-nowrap text-[15px] font-medium transition-opacity duration-300 hover:opacity-100 ${textColor}`;
  const isActiveLink = (href: string) => {
    const [linkPath, linkHash] = href.split("#");

    return (
      pathname === linkPath &&
      (linkHash ? currentHash === `#${linkHash}` : currentHash === "")
    );
  };
  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsPagesMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-14 transition-all duration-300 ease-in-out ${
          isHeaderLight
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.05)] backdrop-blur-md lg:h-18"
            : "bg-transparent backdrop-blur-0 lg:h-24"
        }`}
      >
        <div className="flex h-full items-center justify-between pr-4.5 pl-3 lg:pr-20 lg:pl-10">
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="SLGEM home"
            className="relative h-10 w-10 scale-x-[1.2] shrink-0 lg:h-12 lg:w-[190px]"
          >
            <Image
              src="/images/LOGO%201.png"
              alt="SLGEM"
              fill
              priority
              sizes="(max-width: 1023px) 40px, 190px"
              className="object-contain lg:hidden"
            />
            <Image
              src="/images/HORIZONTAL%20MAIN.png"
              alt="SLGEM"
              fill
              priority
              sizes="190px"
              className="hidden object-contain lg:block"
            />
          </Link>

          <div className="flex gap-16">
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-12 lg:flex"
            >
              {navigationLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`${linkClass} text-[18px] ${isActiveLink(item.href) ? "font-semibold opacity-100" : "opacity-90"}`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="relative">
                <button
                  type="button"
                  aria-expanded={isPagesMenuOpen}
                  aria-haspopup="true"
                  onClick={() => setIsPagesMenuOpen((isOpen) => !isOpen)}
                  className={`inline-flex text-[18px] items-center gap-2 opacity-90 transition-opacity duration-300 hover:opacity-100 ${linkClass}`}
                >
                  All Pages
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`size-3.5 transition-transform duration-200 ${isPagesMenuOpen ? "rotate-180" : ""}`}
                  >
                    <path
                      d="m3.5 6 4.5 4 4.5-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isPagesMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-full z-10 mt-4 min-w-48 rounded-lg bg-white p-2 text-[#0A1931] shadow-[0_8px_24px_rgba(10,25,49,0.14)]"
                    >
                      {pageLinks.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={closeMenus}
                          aria-current={
                            isActiveLink(item.href) ? "page" : undefined
                          }
                          className={`block rounded-md px-4 py-3 text-[15px] transition-colors hover:bg-[#F2F5F8] ${
                            isActiveLink(item.href)
                              ? "bg-[#F2F5F8] font-semibold"
                              : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            <Link
              href="/donate"
              className={`hidden items-center justify-center rounded-xl border px-12 py-3 text-[15px] font-medium transition-all duration-300 lg:inline-flex ${
                isHeaderLight
                  ? "border-[#0A1931] text-[#0A1931] hover:bg-[#0A1931] hover:text-white"
                  : "border-white border-2 text-white hover:bg-white hover:text-[#0A1931]"
              }`}
            >
              Give Now
            </Link>
          </div>

          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className={`inline-flex size-11 items-center justify-end rounded-lg transition-colors duration-300 lg:hidden ${textColor}`}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-7"
            >
              {isMobileMenuOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              ) : (
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto border-t border-[#0A1931]/10 bg-white px-10 py-5 text-[#0A1931] shadow-[0_12px_24px_rgba(10,25,49,0.1)] lg:hidden"
          >
            <div className="flex flex-col">
              {navigationLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={closeMenus}
                  className={`py-3 text-[20px] ${isActiveLink(item.href) ? "font-bold-font" : "font-medium"}`}
                >
                  {item.label}
                </Link>
              ))}

              <button
                type="button"
                aria-expanded={isPagesMenuOpen}
                onClick={() => setIsPagesMenuOpen((isOpen) => !isOpen)}
                className="flex items-center justify-between py-3 text-left text-[20px] font-medium"
              >
                All Pages
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  fill="none"
                  className={`size-3.5 transition-transform duration-200 ${isPagesMenuOpen ? "rotate-180" : ""}`}
                >
                  <path
                    d="m3.5 6 4.5 4 4.5-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isPagesMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="overflow-hidden pl-4"
                  >
                    {pageLinks.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        onClick={closeMenus}
                        aria-current={
                          isActiveLink(item.href) ? "page" : undefined
                        }
                        className={`block py-2 text-[18px] ${
                          isActiveLink(item.href)
                            ? "font-semibold text-[#0A1931]"
                            : "text-[#0A1931]/75"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/donate"
                onClick={closeMenus}
                className="mt-3 inline-flex w-fit items-center justify-center rounded-xl border border-[#0A1931] bg-[#0A1931] px-8 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white hover:text-[#0A1931]"
              >
                Give Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
