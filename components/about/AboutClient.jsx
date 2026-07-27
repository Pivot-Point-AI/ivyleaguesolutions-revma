"use client";

import { useEffect, useRef } from "react";
import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import AwardsSection from "./AwardsSection";
import TeamSection from "./TeamSection";
import Link from "next/link";

export default function AboutClient() {
  const statsRowRef = useRef(null);
  const awardsSectionRef = useRef(null);

  useEffect(() => {
    /* Stat counters */
    function animateCounter(el) {
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 1800;
      const start = performance.now();
      function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }
      function step(now) {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = Math.round(easeOutQuart(p) * target) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    let statsObserver;
    if (statsRowRef.current) {
      statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".stat-number").forEach(animateCounter);
          }
        });
      }, { threshold: 0.4 });
      statsObserver.observe(statsRowRef.current);
    }

    /* Award word pop */
    let awardsObserver;
    if (awardsSectionRef.current) {
      awardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            awardsSectionRef.current.querySelectorAll(".award-word").forEach((w, i) => {
              setTimeout(() => w.classList.add("popped"), i * 140);
            });
          }
        });
      }, { threshold: 0.5 });
      awardsObserver.observe(awardsSectionRef.current);
    }

    return () => {
      if (statsObserver) statsObserver.disconnect();
      if (awardsObserver) awardsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* SECTION 1 · HERO */}
      <HeroSection />

      {/* SECTION 2 · CREATING POSITIVE CHANGE */}
      <section className="bg-white py-14 sm:py-20 lg:py-32">
        <div className="px-6 sm:px-10 lg:pl-[140px] lg:pr-[5%] w-full">
          <div className="grid gap-8 lg:gap-15 items-start mb-0 lg:mb-20 fade-up visible">
            <div>
              <h2 className="text-[30px] sm:text-[42px] md:text-[49px] lg:text-[63px] leading-[1.05]">
                Creating<br />Positive Change
              </h2>
            </div>
            <div className="flex items-center lg:pt-4">
              <p className="text-[15px] sm:text-[17px] md:text-[20px] lg:text-[24px] text-[#6A6A6A]">
                Ivy League Solutions drives digital transformation—from enterprise systems to fintech platforms—empowering businesses to modernize and scale. Trusted across Asia, the Middle East, Europe, Australia, and North America, we deliver solutions that enhance efficiency and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <StatsSection statsRowRef={statsRowRef} />

      {/* SECTION 3 · WORLD MAP */}
      <section className="bg-white py-10 lg:py-20">
        <div className="about-world-map">
          <img src="/assets/aboutPage/world_map.webp" alt="World map" loading="lazy" className="w-full h-auto object-cover" />

          <div className="about-pin about-pin--usa">
            <div className="bubble">
              <img src="/assets/contactPage/usaFlag.svg" alt="USA Flag" loading="lazy" />
              <span>USA</span>
            </div>
          </div>
          <div className="about-dot about-dot--usa"></div>

          <div className="about-pin about-pin--uae">
            <div className="bubble">
              <img src="/assets/contactPage/uaeFlag.svg" alt="UAE Flag" loading="lazy" />
              <span>UAE</span>
            </div>
          </div>
          <div className="about-dot about-dot--uae"></div>

          <div className="about-pin about-pin--pk">
            <div className="bubble">
              <img src="/assets/contactPage/pkLogo.svg" alt="Pakistan Flag" loading="lazy" />
              <span>Pakistan</span>
            </div>
          </div>
          <div className="about-dot about-dot--pk"></div>
        </div>
      </section>

      {/* SECTION 4 · RECOGNITION / AWARDS */}
      <AwardsSection awardsSectionRef={awardsSectionRef} />

      {/* SECTION 5 · OUR TEAM */}
      <TeamSection />

      {/* SECTION 6 · JOIN OUR JOURNEY */}
      <section className="relative overflow-hidden bg-[#fafafa]">
        <div className="relative w-full mx-auto px-6 sm:px-10 lg:px-12 py-16 sm:py-24 lg:py-32 text-center fade-up">
          <h2 className="text-[#242424] font-normal text-[32px] sm:text-[45px] lg:text-[63px] leading-[1.05] lg:leading-[58px] mb-6 lg:mb-8 mx-auto">
            Join Our Journey
          </h2>
          <p className="text-[#242424] text-[15px] sm:text-[18px] lg:text-[19px] font-normal leading-[160%] text-center mx-auto mb-8 lg:mb-10 max-w-[1200px]">
            If you&apos;re looking for a reliable technology partner that understands both technology and business, you&apos;re in the right place. Let&apos;s build something that moves your business forward.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 h-[50px] lg:w-[272px] lg:h-[61px] bg-[#4026B8] hover:bg-[#3520a0] text-white rounded-[16px] lg:rounded-[20px] transition-all duration-200" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "22px", lineHeight: "100%" }}>
            Let&apos;s Build Together
          </Link>
        </div>
      </section>
    </>
  );
}
