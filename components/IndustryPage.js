import Image from "next/image";
import FAQSection from "./ui/FAQSection";

export default function IndustryPage({
  heroHeading,
  bannerHeading,
  bannerBody,
  buildSub,
  problems,
  results,
  ctaHeading,
  ctaBody,
  ctaButtonText,
  faqs,
}) {
  return (
    <div className="ind-page">
      {/* HERO */}
      <section className="ind-hero-section">
        <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="ind-hero-max-w">
          <h1 className="ind-hero-heading">{heroHeading}</h1>
        </div>
      </section>

      {/* PURPLE BANNER */}
      <section className="ind-banner-section">
        <div className="ind-banner-heading-w">
          <h2 className="ind-banner-heading">{bannerHeading}</h2>
        </div>
        <div className="ind-banner-body-w">
          <p className="ind-banner-body">{bannerBody}</p>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="ind-build-section">
        <div className="ind-build-heading-w">
          <h2 className="ind-build-heading">What we build</h2>
        </div>
        <div className="ind-build-sub-w">
          <p className="ind-build-sub">{buildSub}</p>
        </div>

        <div className="ind-build-cards">
          <div className="ind-build-card">
            <div className="ind-build-card-heading-w">
              <h3 className="ind-build-card-heading">Problem we solve</h3>
            </div>
            <div className="ind-build-bullets-w ind-build-bullets-w--1">
              <ul className="ind-build-bullets">
                {problems.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ind-build-card">
            <div className="ind-build-card-heading-w">
              <h3 className="ind-build-card-heading">Results We&apos;ve Delivered</h3>
            </div>
            <div className="ind-build-bullets-w ind-build-bullets-w--2">
              <ul className="ind-build-bullets">
                {results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ind-cta-section">
        <div className="ind-cta-heading-w">
          <h2 className="ind-cta-heading">{ctaHeading}</h2>
        </div>
        <div className="ind-cta-body-w">
          <p className="ind-cta-body">{ctaBody}</p>
        </div>
        <a href="#" className="ind-cta-btn">
          <span className="ind-cta-btn-text">{ctaButtonText}</span>
        </a>
      </section>

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
