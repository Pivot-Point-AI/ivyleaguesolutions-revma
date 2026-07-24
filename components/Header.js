"use client";

import Link from "next/link";
import { useState } from "react";
import { usePageStore } from "./PageStore";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { heroDark } = usePageStore();

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      {/* Decorative top background */}
      <div
        className="absolute top-0 inset-x-0 w-full h-[204px] bg-top bg-no-repeat bg-cover pointer-events-none z-0"
        style={{ backgroundImage: "url('/assets/aboutPage/herobgTop.webp')" }}
        aria-hidden="true"
      ></div>

      <div className="site-header-inner max-w-[95%] mx-auto px-4 sm:px-6 lg:px-10 h-[72px] lg:h-[110px] flex items-center justify-between relative z-10">
        {/* Logo */}
      <Link href="/" className="flex items-center flex-shrink-0 z-10">
  <img
    src={heroDark ? "/assets/landingPage/logo-dark.webp" : "/assets/landingPage/ivyleague.png"}
    alt="Ivy League Solutions Logo"
    className="site-logo h-[42px] sm:h-[50px] lg:h-[80px] w-auto max-w-[170px] sm:max-w-[200px] lg:max-w-none object-contain"
    loading="eager"
  />
</Link>

        {/* Center nav links (desktop) */}
        <nav className="site-nav hidden lg:flex items-center gap-14 absolute left-1/2 -translate-x-1/2">
          {[
            { href: "/about", label: "About" },
            { href: "/services", label: "Services" },
            { href: "/industries", label: "Industries" },
            { href: "/contact", label: "Contact" },
            { href: "/blog", label: "Blog" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav-link text-[20px] antialiased transition-colors duration-200 ${
                heroDark ? "text-white hover:text-white/75" : "text-black hover:text-gray-700"
              }`}
              style={{
                fontFamily: "'Inter', sans-serif",
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
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Book A Strategy Call
          </Link>

          <button
            className={`site-menu-btn h-[44px] px-3.5 text-[13px] lg:h-[63.33px] lg:px-[30px] lg:text-[21.33px] rounded-[12px] lg:rounded-[18px] border antialiased whitespace-nowrap shadow-[inset_1.33px_1.33px_1.33px_rgba(255,255,255,0.25)] transition-all duration-300 ${
              heroDark
                ? "bg-white border-white text-[#242424] hover:bg-white/90"
                : "bg-white border-gray-300 text-black hover:border-gray-500"
            }`}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Menu
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-3 relative z-10">
          <nav className="flex flex-col">
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.href}
                onClick={() => setOpen(false)}
                href={item.href}
                className="px-6 py-3 text-[16px] text-black hover:text-gray-700"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
