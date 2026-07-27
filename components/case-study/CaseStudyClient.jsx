"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageStore } from "../PageStore";
import MobileBankingSection from "./MobileBankingSection";
import ErpSection from "./ErpSection";
import MultiCurrencySection from "./MultiCurrencySection";
import HealthcareSection from "./HealthcareSection";
import HeroStatIcon from "../shared/HeroStatIcon";

export default function CaseStudyClient() {
  const { setHeroDark } = usePageStore();
  useEffect(() => { setHeroDark(false); }, [setHeroDark]);

  useEffect(() => {
    function initScrollReveal() {
      if (window.innerWidth >= 1024) return null;
      const cards = document.querySelectorAll(".cs-mobile-img-card");
      if (!cards.length) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("cs-tapped");
          else entry.target.classList.remove("cs-tapped");
        });
      }, { threshold: 0.45 });

      cards.forEach((card) => observer.observe(card));
      return observer;
    }

    let observer = initScrollReveal();

    function onResize() {
      if (window.innerWidth >= 1024 && observer) {
        document.querySelectorAll(".cs-mobile-img-card").forEach((card) => card.classList.remove("cs-tapped"));
        observer.disconnect();
        observer = null;
      } else if (!observer) {
        observer = initScrollReveal();
      }
    }
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#f8f8f8]">
      {/* HERO */}
      <section className="cs-hero-section">
        <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="cs-hero-max-w">
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="block text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-2">
                Case Studies
              </span>
              <span className="block w-8 h-[3px] bg-[#4026B8] rounded-full"></span>
            </div>
            <h1 className="cs-text-display text-[#242424] font-bold m-0">
              Real Problems. Real Solutions. <span className="text-[#4026B8]">Real ROI.</span>
            </h1>
            <p className="font-normal text-[#6A6A6A] mt-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5] max-w-[820px]">
              A closer look at how we&apos;ve helped clients across fintech,
              healthcare, enterprise, and e-commerce turn complex challenges
              into measurable business outcomes.
            </p>
            <div className="flex items-stretch gap-6 sm:gap-8 mt-8 flex-wrap">
              {[
                { value: "50+", label: "Projects Delivered", icon: "briefcase" },
                { value: "4", label: "Industries Covered", icon: "layers" },
                { value: "98%", label: "Client Satisfaction", icon: "check" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-start">
                  {i > 0 && <div className="w-px bg-[#242424]/10 mr-6 sm:mr-8 self-stretch"></div>}
                  <div className="flex flex-col items-start">
                    <div className="w-12 h-12 rounded-full bg-[#4026B8]/10 flex items-center justify-center mb-4">
                      <HeroStatIcon name={stat.icon} />
                    </div>
                    <span className="font-bold text-[#242424] text-[26px] sm:text-[32px] leading-none">
                      {stat.value}
                    </span>
                    <span className="font-normal text-[#6A6A6A] mt-2 text-[12px] sm:text-[13px] tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute hidden lg:block w-[250px] top-[38%] right-[9%] rounded-2xl bg-white border border-black/5 shadow-[0_20px_45px_-15px_rgba(64,38,184,0.22)] p-6 z-[1]">
          <div className="w-10 h-10 rounded-xl bg-[#4026B8] flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="white" />
            </svg>
          </div>
          <span className="block text-[12px] font-semibold text-[#4026B8] uppercase tracking-[0.1em] mb-2">
            Real Results
          </span>
          <p className="text-[14.5px] text-[#5A5A5A] leading-[1.55] m-0">
            Outcomes measured in ROI, not just delivery.
          </p>
        </div>
      </section>

      {/* PURPLE BANNER */}
      <section className="cs-banner-section w-full bg-[#4026B8] mt-[110px]">
        <div className="cs-banner-heading-w shrink-0">
          <h2 className="cs-banner-heading text-white font-normal m-0">Impact Driven Solutions</h2>
        </div>
        <div className="cs-banner-body-w shrink-0">
          <p className="cs-banner-body text-white font-light m-0">
            Every project is measured by the business outcome it creates. Here&apos;s a sample of what we&apos;ve delivered across fintech, healthcare, enterprise, and e-commerce.
          </p>
        </div>
      </section>

      {/* CASE 1: Mobile Banking */}
      <MobileBankingSection />

      {/* CASE 2: ERP */}
      <ErpSection />

      {/* CASE 3: Multi-Currency Payment Infrastructure */}
      <MultiCurrencySection />

      {/* CASE 4: Healthcare */}
      <HealthcareSection />

      {/* CTA */}
      <section className="bg-[#f4f4f6] min-h-screen flex items-center justify-center py-[160px]">
        <div className="max-w-[90%] mx-auto px-5 sm:px-8 lg:px-12 w-full text-center">
          <h2 className="text-gray-900 text-[1.75rem] sm:text-[2.4rem] lg:text-[63px] font-normal leading-tight lg:leading-[58px] tracking-[-0.01em] mb-5">
            Ready to Move Forward?
          </h2>
          <p className="mx-auto text-[.95rem] sm:text-[1rem] lg:text-[19px] font-normal leading-[1.7] mb-8 max-w-[600px] lg:max-w-none text-black">
            If you&apos;re looking for a reliable technology partner that understands both technology and business, you&apos;re in the right place.<br className="hidden lg:block" />Let&apos;s build something that truly matters.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 transition-all duration-200 cs-cta-btn">
            <span className="cs-cta-btn-label">Start Your Project Today</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
