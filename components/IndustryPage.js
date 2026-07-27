import Image from "next/image";
import FAQSection from "./ui/FAQSection";
import HeroStatIcon from "./shared/HeroStatIcon";

const HERO_STAT_ICONS = ["trending", "layers", "clock"];

// Pulls out the results that lead with a number/metric (e.g. "62% reduction...",
// "$4.8M in annual cost savings") so the hero can show them as quick stats
// without every industry page needing its own separate stats prop.
function extractHeroStats(results) {
  if (!results) return [];
  const matches = [];
  for (const r of results) {
    const m = r.match(/^([<]?\$?\d[\d,.]*[A-Za-z%-]*)\s+(.+)/);
    if (m) matches.push({ value: m[1], label: m[2] });
    if (matches.length === 3) break;
  }
  return matches;
}

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
  const heroStats = extractHeroStats(results);
  return (
    <div className="ind-page">
      {/* HERO */}
      <section className="ind-hero-section">
        <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
        <div className="ind-hero-max-w">
          <div className="flex flex-col max-w-[820px]">
            <div className="mb-4">
              <span className="block text-[13px] font-semibold text-[#4026B8] uppercase tracking-[0.12em] mb-2">
                Industries
              </span>
              <span className="block w-8 h-[3px] bg-[#4026B8] rounded-full"></span>
            </div>
            <h1 className="ind-hero-heading" style={{ fontWeight: 700 }}>{heroHeading}</h1>
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
                        <HeroStatIcon name={HERO_STAT_ICONS[i % HERO_STAT_ICONS.length]} />
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
            {results && results[0] ? results[0] : bannerBody}
          </p>
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
