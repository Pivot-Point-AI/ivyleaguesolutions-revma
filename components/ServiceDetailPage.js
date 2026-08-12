import "../app/pagestyles/fintech.css";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "./ui/FAQSection";
import HeroStatIcon from "./shared/HeroStatIcon";
import RelatedLinks from "./shared/RelatedLinks";
import { ALL_SERVICES } from "./shared/relatedLinksData";

/**
 * Generic, fully-responsive service-detail page.
 * Reuses the fintech.css layout classes (hero-section, banner-section,
 * content-section, two-col-layout, why-section, etc.) which already ship
 * with complete ≤1024px and ≤640px responsive breakpoints.
 */
export default function ServiceDetailPage({
  heroHeading,
  bannerHeading,
  bannerBody,
  heroStats = [],
  sections = [],
  sectionsAsCards = false,
  whyHeading = "Why Choose Ivy League Solutions",
  whyBody,
  ctaLabel = "Discuss Your Project",
  faqs,
  currentService,
}) {
  const otherServices = ALL_SERVICES.filter((s) => s.slug !== currentService);
  return (
    <div className="bg-[#f8f8f8] fintech-page">
      {/* HERO */}
      <section className="hero-section bg-[#f8f8f8] pt-[150px] pb-[70px] px-[140px]">
        <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="hero-max-w">
          <div className="flex flex-col max-w-[880px]">
            <div className="mb-4">
              <span className="block text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-2">
                Services
              </span>
              <span className="block w-8 h-[3px] bg-[#4026B8] rounded-full"></span>
            </div>
            <h1 className="text-display text-[#242424] font-bold m-0">{heroHeading}</h1>
            <p className="font-normal text-[#6A6A6A] mt-5 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.5]">
              {bannerBody}
            </p>

            {heroStats.length > 0 && (
              <div className="flex items-stretch gap-6 sm:gap-8 mt-8 flex-wrap">
                {heroStats.map((stat, i) => (
                  <div key={stat.label} className="flex items-start">
                    {i > 0 && <div className="w-px bg-[#242424]/10 mr-6 sm:mr-8 self-stretch"></div>}
                    <div className="flex flex-col items-start max-w-[180px]">
                      <div className="w-12 h-12 rounded-full bg-[#4026B8]/10 flex items-center justify-center mb-4">
                        <HeroStatIcon name={stat.icon} />
                      </div>
                      <span className="font-bold text-[#242424] text-[26px] sm:text-[32px] leading-none">
                        {stat.value}
                      </span>
                      <span className="font-normal text-[#6A6A6A] mt-2 text-[12px] sm:text-[13px] tracking-wide uppercase leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="absolute hidden lg:block w-[250px] top-[38%] right-[9%] rounded-2xl bg-white border border-black/5 shadow-[0_20px_45px_-15px_rgba(64,38,184,0.22)] p-6 z-[1]">
          <div className="w-10 h-10 rounded-xl bg-[#4026B8] flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" fill="white" />
            </svg>
          </div>
          <span className="block text-[12px] font-semibold text-[#4026B8] uppercase tracking-[0.1em] mb-2">
            {bannerHeading}
          </span>
          <p className="text-[14.5px] text-[#5A5A5A] leading-[1.55] m-0">
            {sections && sections[0] ? sections[0].heading : bannerBody}
          </p>
        </div>
      </section>

      {/* PURPLE BANNER */}
      <section className="banner-section w-full bg-[#4026B8] flex items-center justify-between px-[140px] py-[35px]">
        <div className="banner-heading-w shrink-0">
          <h2 className="banner-heading text-white font-normal m-0">{bannerHeading}</h2>
        </div>
        <div className="banner-body-w shrink-0">
          <p className="banner-body text-white font-light m-0">{bannerBody}</p>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sectionsAsCards ? (
        <section className="svc-cards-section content-section bg-[#f8f8f8] px-[140px] pt-[215px]">
          <div className="svc-cards-grid">
            {sections.map((s, i) => (
              <div key={i} className="svc-card">
                <span className="svc-card-badge">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="svc-card-heading text-[#242424] font-medium m-0">{s.heading}</h3>
                <p className="svc-card-body text-[#777777] font-light m-0">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        sections.map((s, i) => (
          <section
            key={i}
            className={`content-section bg-[#f8f8f8] px-[140px] ${i === 0 ? "pt-[215px]" : "pt-[160px]"} pb-0`}
          >
            <div className="two-col-layout svc-two-col flex items-start justify-between gap-[60px]">
              <div className="shrink-0 max-w-[565px] svc-col-heading">
                <h2 className="text-display text-[#242424] font-normal m-0">{s.heading}</h2>
              </div>
              <div className="shrink-0 max-w-[900px] svc-col-body">
                <p className="body-25 text-[#979797] font-light m-0">{s.body}</p>
              </div>
            </div>
          </section>
        ))
      )}

      {/* WHY CHOOSE IVY LEAGUE SOLUTIONS */}
      <section className={`why-section bg-[#f4f4f6] px-[140px] pt-[215px] pb-[215px] ${sectionsAsCards ? "" : "mt-[160px]"}`}>
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-display text-[#242424] font-normal text-center m-0 w-full max-w-[1280px]">
            {whyHeading}
          </h2>
          <p className="body-22 text-black font-normal text-center m-0 max-w-[1082px]">{whyBody}</p>
          <Link href="/contact" className="cta-btn">
            <span className="btn-label text-white font-normal text-center" style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 400 }}>
              {ctaLabel}
            </span>
          </Link>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <RelatedLinks heading="Explore Other Services" items={otherServices} basePath="/services" tone="muted" />

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
