"use client";

import Link from "next/link";
import { useEffect } from "react";

/* ---- Section 5+6: showcase scroll reveal / zoom-out effect ---- */
export default function ShowcaseAndInnovation() {
  useEffect(() => {
    const section = document.getElementById("showcase-section");
    let io;
    if (section) {
      const boxes = section.querySelectorAll(".showcase-reveal");
      let triggered = false;
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            boxes.forEach((box) => box.classList.add("is-revealed"));
            io.disconnect();
          }
        });
      }, { threshold: 0.2 });
      io.observe(section);
    }

    const container = document.getElementById("showcase-container");
    const section6 = document.getElementById("section-6");
    let rafId = null;
    function update() {
      rafId = null;
      if (!container || !section6) return;
      const vh = window.innerHeight;
      const sec6Top = section6.getBoundingClientRect().top;
      const start = vh * 1.02;
      const end = vh * 0.15;
      const raw = (start - sec6Top) / (start - end);
      const progress = Math.max(0, Math.min(1, raw));
      container.style.transform = `scale(${1 - progress * 0.14})`;
      container.style.opacity = String(1 - progress * 0.3);
    }
    function onScroll() { if (!rafId) rafId = requestAnimationFrame(update); }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      if (io) io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <section className="sticky top-0 z-0 bg-[#f8f8f8] py-[100px] sm:py-[200px] px-5 sm:px-8 lg:px-[140px]" id="showcase-section">
        <div className="flex gap-4 sm:gap-8 w-full" id="showcase-container">
          <div className="showcase-box rounded-2xl sm:rounded-3xl overflow-hidden relative flex-shrink-0 flex-1 showcase-reveal" style={{ "--reveal-delay": "0ms" }}>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/videos/video_one.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="showcase-box rounded-2xl sm:rounded-3xl overflow-hidden relative flex-shrink-0 flex-1 showcase-reveal" style={{ "--reveal-delay": "180ms" }}>
            <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/videos/video_two.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-900/30"></div>
          </div>
        </div>
      </section>

      <section id="section-6" className="relative z-10 -mt-10 overflow-hidden min-h-[420px] lg:min-h-[420px] bg-[#400094]">
        <div className="w-full px-5 sm:px-8 lg:px-[140px] py-12 sm:py-16 flex items-center justify-center bg-[#400094]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[6rem] xl:gap-[8.5rem] w-full">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[63px] text-white leading-tight">Empowering<br />Digital<br />Innovation</h2>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-white text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[21px] leading-relaxed mb-6 max-w-[42rem] font-light">
                Ivy League Solutions delivers customized and ready-made software solutions, empowering businesses to grow and adapt in a fast-changing digital world. With global expertise and strong partnerships, we build scalable platforms for real-time applications across multiple industries.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black font-normal border border-black w-[197px] h-[57px] rounded-[15px] transition-all duration-200 hover:bg-gray-100">
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
