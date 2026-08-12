"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePageStore } from "../PageStore";

/* ---- Section 1: Hero slider ---- */
export default function HeroSlider() {
  const { setHeroDark, setHeroLogoDark } = usePageStore();
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  // heroDark controls the nav links/buttons on the right (only fully-dark slide 0
  // keeps them readable). heroLogoDark controls just the logo, which sits over a
  // dark region on both slide 0 and slide 1 (slide 1's background is dark on the
  // left, light on the right, so the two can't share one flag).
  useEffect(() => {
    setHeroDark(active === 0);
    setHeroLogoDark(active === 0 || active === 1);
  }, [active, setHeroDark, setHeroLogoDark]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(timerRef.current);
    setActive(i);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 6000);
  };

  return (
    <section className="relative overflow-hidden h-screen min-h-[640px] bg-[#0d0035]">
      {/* Slide 1 */}
      <div
        className="absolute inset-0 bg-[#0d0035]"
        style={{ opacity: active === 0 ? 1 : 0, transition: "opacity .9s ease", pointerEvents: active === 0 ? "auto" : "none" }}
      >
        <Image src="/assets/landingPage/firstSlider.webp" alt="" aria-hidden="true" fill sizes="100vw" preload={true} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 pointer-events-none hero-radial-gradient"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="font-inter tracking-0 font-medium text-white leading-tight text-[clamp(1.6rem,4.5vw,60px)]">
            Build Scalable Software
          </h1>
          <p className="font-inter font-light text-white mt-4 sm:mt-5 text-[clamp(1rem,2vw,24px)] leading-snug">
            Automate Operations. Accelerate Growth.
          </p>
          <p className="font-inter font-light text-white/70 mt-3 sm:mt-[18px] max-w-[90%] sm:max-w-[640px] text-[clamp(.78rem,1.1vw,18px)] leading-relaxed">
            As a global software development company, we help mid-to-large businesses solve complex
            challenges through custom software, fintech systems, and robust digital infrastructure,
            delivering measurable ROI, not just code.
          </p>
          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-9 flex-wrap justify-center">
            <a href="#contact" className="font-inter font-medium text-white text-sm sm:text-[16px] px-5 sm:px-6 py-2.5 sm:py-[10px] border border-white/85 rounded-[15px] no-underline bg-transparent transition-all duration-200 hover:bg-white/10">
              Book A Strategy Call
            </a>
            <a href="#services" className="font-inter font-medium text-[#111] text-sm sm:text-[16px] px-5 sm:px-[22px] py-2.5 sm:py-[10px] border border-white rounded-[15px] no-underline bg-white transition-all duration-200 hover:bg-white/85">
              View Our Work
            </a>
          </div>

          <div className="flex items-center gap-6 sm:gap-12 mt-8 sm:mt-12 flex-wrap justify-center">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "12+", label: "Years of Experience" },
              { value: "98%", label: "Client Retention" },
              { value: "40+", label: "Enterprise Clients" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-inter font-semibold text-white text-[clamp(1.1rem,2.2vw,28px)] leading-none">
                  {stat.value}
                </span>
                <span className="font-inter font-light text-white/60 mt-1 text-[clamp(.65rem,.9vw,13px)] tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <img src="/assets/landingPage/sliderLine.webp" alt="" aria-hidden="true" loading="eager" className="absolute pointer-events-none select-none hidden sm:block slider-line-pos" />

        <div className="absolute hidden sm:flex items-center justify-center w-[185px] h-[87px] top-[80%] left-[64.5%] border border-white/35 rounded-[20px] bg-white/[0.08] backdrop-blur-[6px] p-[10px] box-border">
          <p className="font-inter w-[166px] text-white font-normal text-[15px] leading-snug text-center m-0">
            Powering Your<br />Next Move.
          </p>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="absolute inset-0 bg-[#0d0035]" style={{ opacity: active === 1 ? 1 : 0, transition: "opacity .9s ease", pointerEvents: active === 1 ? "auto" : "none" }}>
        <Image src="/assets/landingPage/axonslider.webp" alt="AXON: AI Voice Banking Assistant" fill sizes="100vw" className="absolute inset-0 w-full h-full object-cover hidden sm:block" />
        <div
          className="absolute inset-y-0 left-0 w-full sm:w-[55%] pointer-events-none hidden sm:block"
          style={{ background: "linear-gradient(90deg, rgba(13,0,53,0.88) 0%, rgba(13,0,53,0.6) 55%, rgba(13,0,53,0) 100%)" }}
        ></div>

        {/* Desktop content */}
        <div className="absolute inset-y-0 left-0 hidden sm:flex flex-col justify-center px-[6%] max-w-[480px]">
          <span className="font-inter font-medium text-[#a897ff] text-[clamp(.7rem,.9vw,13px)] tracking-[0.15em] uppercase mb-2">
            AI-Powered Banking
          </span>
          <h2 className="font-inter tracking-0 font-semibold text-white leading-tight text-[clamp(1.4rem,2.4vw,32px)]">
            AXON: AI Voice Banking Assistant
          </h2>
          <p className="font-inter font-light text-white/80 mt-3 max-w-[380px] text-[clamp(.75rem,.95vw,15px)] leading-relaxed">
            Automating account inquiries and support with secure, intelligent conversations.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-7 flex-nowrap">
            <a href="#contact" className="font-inter font-medium text-white text-sm sm:text-[16px] px-5 sm:px-6 py-2.5 sm:py-[10px] border border-white/85 rounded-[15px] no-underline bg-transparent transition-all duration-200 hover:bg-white/10 whitespace-nowrap">
              Book A Strategy Call
            </a>
            <a href="#services" className="font-inter font-medium text-[#111] text-sm sm:text-[16px] px-5 sm:px-[22px] py-2.5 sm:py-[10px] border border-white rounded-[15px] no-underline bg-white transition-all duration-200 hover:bg-white/85 whitespace-nowrap">
              View Our Work
            </a>
          </div>
        </div>

        {/* Mobile layout: image blended into the dark bg via a vignette, content follows directly below */}
        <div className="absolute inset-x-0 top-0 h-[34%] sm:hidden">
          <Image src="/assets/landingPage/axonslider.webp" alt="AXON: AI Voice Banking Assistant" fill sizes="100vw" className="object-contain scale-125" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 65% 60% at 50% 50%, transparent 0%, rgba(13,0,53,0.55) 68%, #0d0035 100%)" }}
          ></div>
        </div>

        <div className="absolute inset-x-0 top-[30%] bottom-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(112,74,255,0.18) 0%, transparent 70%)" }}></div>

        <div className="absolute inset-x-0 top-[32%] bottom-0 flex flex-col items-center text-center px-6 pt-26 pb-10 sm:hidden">
          <span className="font-inter font-medium text-[#a897ff] text-[11px] tracking-[0.15em] uppercase mb-2">
            AI-Powered Banking
          </span>
          <h2 className="font-inter tracking-0 font-semibold text-white leading-tight text-[clamp(1.4rem,5.5vw,2rem)] max-w-[92%]">
            AXON: AI Voice Banking Assistant
          </h2>
          <p className="font-inter font-light text-white/70 mt-3 text-[clamp(.8rem,3vw,.95rem)] leading-relaxed max-w-[320px]">
            Automating account inquiries and support with secure, intelligent conversations.
          </p>
          <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
            <a href="#contact" className="font-inter font-medium text-white text-sm px-5 py-2.5 border border-white/85 rounded-[15px] no-underline bg-transparent transition-all duration-200 hover:bg-white/10">
              Book A Strategy Call
            </a>
            <a href="#services" className="font-inter font-medium text-[#111] text-sm px-5 py-2.5 border border-white rounded-[15px] no-underline bg-white transition-all duration-200 hover:bg-white/85">
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="absolute inset-0 bg-[#eef2ff]" style={{ opacity: active === 2 ? 1 : 0, transition: "opacity .9s ease", pointerEvents: active === 2 ? "auto" : "none" }}>
        <Image src="/assets/landingPage/thirdSlider.webp" alt="" aria-hidden="true" fill sizes="100vw" className="absolute inset-0 w-full h-full object-cover" />

        <div className="absolute top-[37.6%] left-[7.24%] max-w-[90%] sm:max-w-[600px]">
          <img src="/assets/landingPage/noroLogo.webp" alt="noro" loading="eager" className="h-10 sm:h-14 w-auto block mb-4 sm:mb-7" />
          <div className="font-inter font-light text-[#1a1a2e] text-[clamp(1rem,1.8vw,23px)] leading-snug">
            We bring intelligence to every interaction<br />
            <span className="text-[clamp(.85rem,1.4vw,20px)] text-[#555555]">Secure &bull; Seamless &bull; Intelligent</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-8 flex-wrap">
            <a href="#contact" className="font-inter inline-flex items-center text-white font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 bg-[#4026B8]">
              Book A Strategy Call
            </a>
            <a href="#services" className="font-inter inline-flex items-center border border-gray-300 bg-white/70 text-gray-700 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200">
              View Our Work
            </a>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-[55%] flex items-end justify-end">
          <img src="/assets/landingPage/noroMobile.svg" alt="noro mobile app" loading="eager" className="w-auto object-contain select-none pointer-events-none noro-mobile-img" />
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: active === i ? "32px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: active === 2 ? "#4026B8" : "rgba(255,255,255,0.9)",
              opacity: active === i ? 1 : 0.38,
              transition: "width .35s ease, opacity .35s ease",
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}
