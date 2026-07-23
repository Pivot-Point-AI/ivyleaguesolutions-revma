"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { clients } from "./data";

/* ---- Section 8: Powering client success with scroll-lock accordion ---- */
export default function ClientSuccess() {
  const [activeClient, setActiveClient] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const TOTAL = 4;
    let busy = false, locked = false, atEdge = false, activeLocal = 0;

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
          busy = true; activeLocal++; setActiveClient(activeLocal);
          if (activeLocal === TOTAL - 1) { unlockPage(); atEdge = true; }
          setTimeout(() => { busy = false; }, 700);
        }
      } else if (e.deltaY < 0) {
        if (activeLocal > 0) {
          busy = true; activeLocal--; setActiveClient(activeLocal);
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

  return (
    <section id="section-8" ref={sectionRef} className="relative z-10 bg-[#f8f8f8] min-h-screen">
      <div className="w-full px-5 sm:px-8 lg:px-[140px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="fade-up hidden lg:flex items-center sticky top-0 h-screen">
            <h2 className="lg:text-[56px] xl:text-[63px] text-gray-900 leading-[1.05]">Powering<br />Client<br />Success</h2>
          </div>
          <div className="fade-up flex lg:hidden items-center pt-16 pb-6">
            <h2 className="text-2xl sm:text-4xl text-gray-900 leading-[1.05]">Powering Client Success</h2>
          </div>

          <div className="fade-up delay-150 flex flex-col gap-3 pb-20 lg:pt-[calc(50vh-180px)]">
            {clients.map((client, i) => (
              <div key={i} className={`client-accordion w-full lg:max-w-[727px] bg-white rounded-2xl overflow-hidden ${activeClient === i ? "is-active" : ""}`}>
                <div className="h-[80px] sm:h-[94px] flex items-center px-5 sm:px-7 flex-shrink-0">
                  <Image
                    src={`/assets/landingPage/${client.logo}`}
                    alt={client.alt}
                    width={client.logoW}
                    height={client.logoH}
                    className="client-logo-img object-contain object-left block"
                    style={{ "--logo-w": `${client.logoW}px`, "--logo-h": `${client.logoH}px` }}
                  />
                </div>
                <div className="accordion-body">
                  <p className="px-5 sm:px-7 pb-5 sm:pb-6 m-0 font-light text-[16px] sm:text-[20px] leading-relaxed text-gray-400">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
