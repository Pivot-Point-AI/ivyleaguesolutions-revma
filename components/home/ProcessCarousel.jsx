"use client";

import { useEffect, useRef, useState } from "react";
import { processCards } from "./data";

/* ---- Section 4: Proven process infinite carousel ---- */
export default function ProcessCarousel() {
  const trackRef = useRef(null);
  const [cur, setCur] = useState(16);
  const [step, setStep] = useState(0);
  const busyRef = useRef(false);
  const animatedRef = useRef(true);

  const measure = () => {
    const first = trackRef.current?.firstElementChild;
    if (first) setStep(first.getBoundingClientRect().width + 15);
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const next = async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    animatedRef.current = true;
    setCur((c) => c + 1);
    await new Promise((r) => setTimeout(r, 650));
    setCur((c) => {
      if (c >= 28) {
        animatedRef.current = false;
        return c - 16;
      }
      return c;
    });
    busyRef.current = false;
  };

  const prev = () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setCur((c) => {
      if (c <= 4) {
        animatedRef.current = false;
        return c + 16 - 1;
      }
      animatedRef.current = true;
      return c - 1;
    });
    setTimeout(() => { busyRef.current = false; }, 650);
  };

  const cards = [];
  for (let set = 0; set < 9; set++) {
    processCards.forEach((c, idx) => cards.push({ ...c, uid: `${set}-${idx}` }));
  }

  return (
    <section className="bg-[#f8f8f8] overflow-hidden pt-10 pb-10 sm:pt-20 sm:pb-16 lg:pt-[160px] lg:pb-24">
      <div className="px-5 sm:px-8 lg:px-[140px] mb-8 sm:mb-14 fade-up">
        <h2 className="text-[29px] sm:text-[44px] md:text-[38px] lg:text-[63px] text-[#242424] leading-[1] tracking-normal">
          A Proven Process that<span className="hidden sm:inline"><br /></span> Eliminates Risk
        </h2>
      </div>

      <div className="relative process-track-wrap">
        <div className="absolute inset-y-0 right-0 overflow-hidden process-track-inset">
          <div
            ref={trackRef}
            className="flex gap-[15px] h-full"
            style={{
              transform: `translateX(-${cur * step}px)`,
              transition: animatedRef.current ? "transform 0.6s cubic-bezier(0.22,1,0.36,1)" : "none",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={card.uid}
                className={`process-card process-card-dims ${card.bgClass} flex-shrink-0 rounded-2xl overflow-hidden flex flex-col antialiased ${
                  i % 4 === cur % 4 ? "process-card-active" : ""
                }`}
              >
                <div className="flex flex-col items-center text-center px-8 pt-10 pb-0 flex-none">
                  <h3 className="font-medium text-white mb-3 leading-[38px] text-[clamp(20px,2.4vw,30px)]">{card.title}</h3>
                  <p className="font-light text-white/85 m-0 max-w-[346px] leading-relaxed text-[clamp(14px,1.4vw,20px)]">{card.desc}</p>
                </div>
                <div className="flex-1 relative overflow-hidden">
                  <div
                    className={`absolute inset-1 pointer-events-none select-none bg-no-repeat ${card.imgClass}`}
                    style={{ "--card-bg-img": `url('/assets/landingPage/${card.img}')` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 lg:px-[140px] mt-8 sm:mt-16 flex flex-row flex-wrap gap-x-10 gap-y-6 items-center fade-up delay-200">
        <div className="flex items-center gap-[8px] sm:gap-[10px] flex-shrink-0">
          <button onClick={prev} className="w-[60px] h-[48px] sm:w-[120px] sm:h-[80px] rounded-full bg-[#c8c8c8] hover:bg-[#b8b8b8] flex items-center justify-center transition-colors duration-200" aria-label="Previous">
            <svg className="w-5 h-5 sm:w-[30px] sm:h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} className="w-[60px] h-[48px] sm:w-[120px] sm:h-[80px] rounded-full bg-[#c8c8c8] hover:bg-[#b8b8b8] flex items-center justify-center transition-colors duration-200" aria-label="Next">
            <svg className="w-5 h-5 sm:w-[30px] sm:h-[30px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <p className="text-[16px] sm:text-[19px] lg:text-[22px] text-[#979797] leading-[1.4] max-w-[820px] flex-1 min-w-[240px]">
          A Proven Process that Eliminates Risk. Our approach is transparent, collaborative,
          and results-driven at every stage, ensuring your project is delivered with the highest quality.
        </p>
      </div>
    </section>
  );
}
