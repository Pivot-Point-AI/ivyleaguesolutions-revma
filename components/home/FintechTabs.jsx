"use client";

import { useEffect, useRef, useState } from "react";
import { fintechSlides } from "./data";

/* ---- Section 3: Fintech video tabs with scroll-lock ---- */
export default function FintechTabs() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const TOTAL = 4;
    let busy = false;
    let locked = false;
    let atEdge = false;
    let activeLocal = 0;

    function lockPage() { document.body.style.overflow = "hidden"; locked = true; }
    function unlockPage() { document.body.style.overflow = ""; locked = false; }
    function sectionInView() {
      const r = section.getBoundingClientRect();
      return r.top <= 10 && r.bottom >= window.innerHeight - 10;
    }
    function onWheel(e) {
      if (!sectionInView()) { if (locked) unlockPage(); atEdge = false; return; }
      if (atEdge) return;
      if (!locked) lockPage();
      e.preventDefault();
      if (busy) return;
      if (e.deltaY > 0) {
        if (activeLocal < TOTAL - 1) {
          busy = true; activeLocal++; setActive(activeLocal);
          if (activeLocal === TOTAL - 1) { unlockPage(); atEdge = true; }
          setTimeout(() => { busy = false; }, 700);
        }
      } else if (e.deltaY < 0) {
        if (activeLocal > 0) {
          busy = true; activeLocal--; setActive(activeLocal);
          if (activeLocal === 0) { unlockPage(); atEdge = true; }
          setTimeout(() => { busy = false; }, 700);
        }
      }
    }
    function onScroll() { if (!sectionInView() && locked) unlockPage(); }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (locked) unlockPage();
    };
  }, []);

  const videoSrcs = ["/assets/videos/video_one.mp4", "/assets/videos/video_one.mp4", "/assets/videos/video_two.mp4", "/assets/videos/video_two.mp4"];

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden h-[560px] sm:h-screen sm:min-h-[600px]">
      {[0, 1, 2, 3].map((vi) => (
        <video
          key={vi}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: active === vi ? 1 : 0, transition: "opacity 0.9s cubic-bezier(0.22,1,0.36,1)" }}
          autoPlay muted loop playsInline
        >
          <source src={videoSrcs[vi]} type="video/mp4" />
        </video>
      ))}

      <div className="absolute inset-0 pointer-events-none fintech-overlay-dark"></div>
      <div className="absolute inset-0 pointer-events-none opacity-[.04] fintech-overlay-scan"></div>

      <div className="relative z-10 h-full flex flex-col justify-end gap-6 sm:justify-between sm:gap-0 py-8 sm:py-20 lg:py-24 max-w-[90%] mx-auto w-full px-4 sm:px-8 lg:px-12">
        <div className="relative min-h-[100px] sm:min-h-[130px]">
          {fintechSlides.map((slide, i) => (
            active === i && (
              <div key={i} className="absolute top-0 left-0">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white leading-none mb-3 sm:mb-4">{slide.heading}</h2>
                <p className="text-white text-base sm:text-[22px] leading-relaxed max-w-[45rem]">{slide.description}</p>
              </div>
            )
          ))}
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {fintechSlides.map((slide, i) => (
            <div key={i} onClick={() => setActive(i)} className="cursor-pointer flex flex-col gap-2 sm:gap-3">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(16px, 2.2vw, 30px)",
                  lineHeight: 1.3,
                  display: "block",
                  color: active === i ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.22)",
                  transition: "color 0.4s ease",
                }}
              >
                {slide.tab}
              </span>
              <div
                style={{
                  display: "block",
                  height: "1.33px",
                  width: "100%",
                  maxWidth: "323px",
                  backgroundColor: active === i ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.20)",
                  transition: "background-color 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
