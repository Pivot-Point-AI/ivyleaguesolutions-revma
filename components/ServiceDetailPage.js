import "../app/pagestyles/fintech.css";
import Image from "next/image";
import FAQSection from "./ui/FAQSection";

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
  sections = [],
  sectionsAsCards = false,
  whyHeading = "Why Choose Ivy League Solutions",
  whyBody,
  ctaLabel = "Discuss Your Project",
  faqs,
}) {
  return (
    <div className="bg-[#f8f8f8] fintech-page">
      {/* HERO */}
      <section className="hero-section bg-[#f8f8f8] pt-[300px] pb-[210px] px-[140px]">
        <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="hero-max-w">
          <h1 className="text-display text-[#242424] font-normal m-0">{heroHeading}</h1>
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
          <button className="cta-btn">
            <span className="btn-label text-white font-normal text-center" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
              {ctaLabel}
            </span>
          </button>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
