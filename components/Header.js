"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePageStore } from "./PageStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { heroDark, heroLogoDark, setHeroDark, setHeroLogoDark } = usePageStore();
  const pathname = usePathname();

  // Header stays mounted across client-side navigation, so heroDark/heroLogoDark
  // can carry over stale values from the previous page (e.g. leaving home mid-dark-slide).
  // Only home's own hero manages these flags dynamically, so reset them the moment
  // we're on any other route, before that page's content paints.
  useEffect(() => {
    if (pathname !== "/") {
      setHeroDark(false);
      setHeroLogoDark(false);
    }
  }, [pathname, setHeroDark, setHeroLogoDark]);

  // Close the menu on route change, and let Escape close it too.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
    // { href: "/blog", label: "Blog" },
    { href: "/case-study", label: "Case Study" },
  ];

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      {/* Decorative top background — the homepage hero slider already has its own
          background treatment per slide, so this generic overlay just creates a
          visible seam across it (most noticeable on the bright AXON slide). */}
      {pathname !== "/" && (
        <div
          className="absolute top-0 inset-x-0 w-full h-[204px] bg-top bg-no-repeat bg-cover pointer-events-none z-0"
          style={{ backgroundImage: "url('/assets/aboutPage/herobgTop.webp')" }}
          aria-hidden="true"
        ></div>
      )}

      <div className="site-header-inner max-w-[95%] mx-auto px-4 sm:px-6 lg:px-10 h-[100px] lg:h-[158px] flex items-center justify-between relative z-10">
        {/* Logo */}
      <Link href="/" className="flex items-center flex-shrink-0 z-10">
        <img
          src={heroLogoDark ? "/assets/landingPage/ivy2-transparent-dark-bg.png" : "/assets/landingPage/ivy2.webp"}
          alt="Ivy League Solutions Logo"
          className="site-logo h-[68px] sm:h-[82px] lg:h-[126px] w-auto max-w-[230px] sm:max-w-[260px] lg:max-w-none object-contain"
          loading="eager"
        />
      </Link>

        {/* Center nav links (desktop) */}
        <nav className="site-nav hidden lg:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav-link text-[20px] antialiased transition-colors duration-200 ${
                heroDark ? "text-white hover:text-white/75" : "text-black hover:text-gray-700"
              }`}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: hamburger + Book A Strategy Call + Menu button */}
        <div className="flex items-center gap-2.5 lg:gap-3.5 z-10">
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden flex items-center justify-center w-[44px] h-[44px] rounded-[10px] border transition-colors duration-200 ${
              heroDark ? "border-white/60 text-white" : "border-gray-300 text-black"
            }`}
            aria-label="Toggle navigation"
          >
            {!open ? (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          <Link
            href="/contact"
            className={`site-book-btn hidden lg:flex items-center justify-center h-[63.33px] px-[30px] rounded-[18px] text-[21.33px] antialiased whitespace-nowrap shadow-[inset_1.33px_1.33px_1.33px_rgba(255,255,255,0.25)] border transition-all duration-300 ${
              heroDark
                ? "bg-transparent border-white text-white hover:bg-white/10"
                : "bg-[#4026B8] border-[#4026B8] text-white hover:bg-[#34209c]"
            }`}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Book A Strategy Call
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            className={`site-menu-btn h-[44px] px-3.5 text-[13px] lg:h-[63.33px] lg:px-[30px] lg:text-[21.33px] rounded-[12px] lg:rounded-[18px] border antialiased whitespace-nowrap shadow-[inset_1.33px_1.33px_1.33px_rgba(255,255,255,0.25)] transition-all duration-300 ${
              heroDark
                ? "bg-white border-white text-[#242424] hover:bg-white/90"
                : "bg-white border-gray-300 text-black hover:border-gray-500"
            }`}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 bg-[#0d0035]/50 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Menu panel */}
      <div
        className={`absolute inset-x-0 top-0 z-20 bg-white shadow-2xl transition-all duration-300 ease-out overflow-hidden pt-[100px] lg:pt-[158px] ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-3 invisible"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 lg:top-10 lg:right-10 flex items-center justify-center w-[40px] h-[40px] lg:w-[48px] lg:h-[48px] rounded-full border border-gray-200 text-[#242424] hover:bg-gray-50 transition-colors duration-200"
        >
          <svg className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Mobile: compact link list */}
        <nav className="flex flex-col py-3 lg:hidden">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              onClick={() => setOpen(false)}
              href={item.href}
              className="px-6 py-3 text-[16px] text-black hover:text-gray-700"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop: full-width nav panel */}
        <div className="hidden lg:grid grid-cols-[1fr_auto] gap-24 max-w-[1400px] mx-auto px-16 py-16">
          <nav className="grid grid-cols-2 gap-x-16 gap-y-2">
            {navLinks.map((item, i) => (
              <Link
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="group flex items-center gap-3 py-3 text-[28px] text-[#242424] no-underline transition-colors duration-200 hover:text-[#4026B8]"
                style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 500 }}
              >
                <span className="text-[13px] text-[#4026B8]/50 font-normal">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
                <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#4026B8]">
                  &rarr;
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-5 min-w-[280px] border-l border-gray-100 pl-16">
            <span className="text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em]">
              Get In Touch
            </span>
            <p className="text-[15px] text-[#6A6A6A] leading-relaxed m-0">
              Have a project in mind? Tell us a bit about your goals and let&apos;s talk.
            </p>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-[54px] px-7 rounded-[16px] bg-[#4026B8] text-white text-[16px] no-underline hover:bg-[#34209c] transition-colors duration-200 w-fit"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}
            >
              Book A Strategy Call
            </Link>
            <a href={`mailto:contact@ivyleaguesolutions.com`} className="text-[14px] text-[#6A6A6A] no-underline hover:text-[#4026B8] mt-2">
              contact@ivyleaguesolutions.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
