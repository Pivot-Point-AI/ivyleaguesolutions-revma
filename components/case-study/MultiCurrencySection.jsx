import Image from "next/image";

export default function MultiCurrencySection() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="lg:hidden px-5 sm:px-10 pt-[60px] pb-[60px]">
        <span className="mb-fintech-badge cs-badge-sm">FINTECH</span>
        <h2 className="cs-mobile-section-h2">Multi-Currency Payment Infrastructure For Emerging Markets</h2>
        <div className="cs-mobile-img-card mb-6 h-[320px]">
          <Image src="/assets/caseStudy/peopleGroup.webp" alt="Payment team discussing strategy" fill sizes="100vw" />
          <div className="cs-mobile-img-overlay cs-mobile-img-overlay-dark">
            <h3>Challenge</h3>
            <p>Needed multi-currency support with regulatory compliance across 12 jurisdictions. Settlement times averaged 48 hours. Transaction failures hit 8%.</p>
            <h3>Solution</h3>
            <p>Modular payment orchestration layer with built-in regulatory compliance engine, real-time FX conversion, and automated reconciliation.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="mc-stat-box mc-purple-box cs-mc-stat-mobile">
            <div className="mc-snum w-auto">200ms</div>
            <div className="mc-slbl">Avg. settlement</div>
          </div>
          <div className="mc-stat-box mc-black-box cs-mc-stat-mobile">
            <div className="mc-snum w-auto">0.02%</div>
            <div className="mc-slbl">Failure rate</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="cs-mobile-img-card h-[180px]">
            <Image src="/assets/caseStudy/manSitting.webp" alt="12 countries supported" fill sizes="50vw" />
            <div className="cs-mobile-stat-overlay">
              <div className="ov-num">12</div>
              <div className="ov-lbl">Countries supported</div>
            </div>
          </div>
          <div className="cs-mobile-img-card h-[180px]">
            <Image src="/assets/caseStudy/manTyping.webp" alt="3x volume growth" fill sizes="50vw" />
            <div className="cs-mobile-stat-overlay">
              <div className="ov-num">3x</div>
              <div className="ov-lbl">Volume growth</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex mc-desktop-wrap">
        <div className="mc-left-col">
          <span className="mb-fintech-badge">FINTECH</span>
          <h2 className="mc-heading">Multi-Currency<br />Payment Infrastructure<br />For Emerging Markets</h2>
          <div className="mc-group-wrap">
            <Image src="/assets/caseStudy/peopleGroup.webp" alt="Payment team discussing strategy" fill sizes="(min-width: 1024px) 832px, 100vw" />
            <div className="mc-group-cs-overlay">
              <h3>Challenge</h3>
              <p>Needed multi-currency support with regulatory compliance across 12 jurisdictions. Settlement times averaged 48 hours. Transaction failures hit 8%.</p>
              <h3>Solution</h3>
              <p>Modular payment orchestration layer with built-in regulatory compliance engine, real-time FX conversion, and automated reconciliation.</p>
            </div>
          </div>
        </div>

        <div className="mc-right-free">
          <div className="mc-photo-card mc-mansitting">
            <Image src="/assets/caseStudy/manSitting.webp" alt="12 countries supported" fill sizes="370px" />
            <div className="mc-photo-overlay">
              <div className="ov-num">12</div>
              <div className="ov-lbl">Countries supported</div>
            </div>
          </div>

          <div className="mc-stat-box mc-purple-box">
            <div className="mc-snum">200ms</div>
            <div className="mc-slbl">Avg. settlement</div>
          </div>

          <div className="mc-stat-box mc-black-box">
            <div className="mc-snum">0.02%</div>
            <div className="mc-slbl">Failure rate</div>
          </div>

          <div className="mc-photo-card mc-mantyping">
            <Image src="/assets/caseStudy/manTyping.webp" alt="3x volume growth" fill sizes="370px" />
            <div className="mc-photo-overlay">
              <div className="ov-num">3x</div>
              <div className="ov-lbl">Volume growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
