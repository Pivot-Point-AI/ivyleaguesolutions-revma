"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePageStore } from "../PageStore";
import MobileBankingSection from "./MobileBankingSection";
import ErpSection from "./ErpSection";
import MultiCurrencySection from "./MultiCurrencySection";
import HealthcareSection from "./HealthcareSection";

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
        <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="cs-hero-max-w">
          <h1 className="cs-text-display text-[#242424] font-normal m-0">
            Real Problems. Real Solutions. Real ROI.
          </h1>
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
