"use client";

import { useEffect, useState } from "react";
import { industries, DESKTOP_BREAKPOINT } from "./data";

export default function IndustriesAccordion() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setActive(null), 150);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth > DESKTOP_BREAKPOINT;

  const handleClick = (i, href) => {
    if (active === i) {
      window.location.href = href;
    } else {
      setActive(i);
    }
  };

  return (
    <section className="ind-accordion-section">
      {industries.map((ind, i) => (
        <div
          key={ind.key}
          className={`ind-acc-item ${active === i ? "ind-acc-active" : ""}`}
          data-href={ind.href}
          onMouseEnter={() => { if (isDesktop()) setActive(i); }}
          onMouseLeave={() => { if (isDesktop()) setActive((a) => (a === i ? null : a)); }}
          onClick={(e) => {
            if (e.target.closest(".ind-acc-arrow")) return;
            handleClick(i, ind.href);
          }}
        >
          <div className="ind-acc-bg" style={{ backgroundImage: `url('/assets/industriesPage/${ind.cover}')` }}></div>

          <div className="ind-acc-closed">
            <h2 className="ind-acc-closed-heading">{ind.heading}</h2>
          </div>

          <div className="ind-acc-open">
            <div className="ind-acc-open-text">
              <h2 className="ind-acc-open-heading">{ind.heading}</h2>
              <p className="ind-acc-open-body">{ind.body}</p>
            </div>
            <a
              href={ind.href}
              className="ind-acc-arrow"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Go to industry`}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.83337 14H22.1667M22.1667 14L14 5.83337M22.1667 14L14 22.1667" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
