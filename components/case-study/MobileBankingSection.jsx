import Image from "next/image";
import Stat from "./Stat";

export default function MobileBankingSection() {
  return (
    <section className="overflow-hidden">
      <div className="lg:hidden px-5 sm:px-10 pt-[60px] pb-[60px]">
        <span className="mb-fintech-badge cs-badge-sm">FINTECH</span>
        <h2 className="cs-mobile-section-h2">Mobile Banking<br />Platform For 500K+ Users</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
          <Stat num="500K+" label="Active users" />
          <Stat num="74%" label="Visit reduction" />
          <Stat num="2.1 M" label="Annual savings" />
          <Stat num="12 Wks" label="Time to launch" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="cs-mobile-img-card h-[260px]">
            <Image src="/assets/caseStudy/headphoneMan.svg" alt="Fintech developer" fill sizes="100vw" />
            <div className="cs-mobile-img-overlay cs-mobile-img-overlay-purple">
              <h3>Challenge</h3>
              <p>Legacy core banking system couldn&apos;t support mobile-first customers. Branch visits for basic transactions were costing $18 per interaction. Customer churn hit 12% quarterly.</p>
            </div>
          </div>
          <div className="cs-mobile-img-card h-[320px]">
            <Image src="/assets/caseStudy/cardWomen.svg" alt="Mobile banking user" fill sizes="100vw" />
            <div className="cs-mobile-img-overlay cs-mobile-img-overlay-dark">
              <h3>Solution</h3>
              <p>Built a full mobile banking platform with real-time payments, biometric authentication, and automated KYC — integrated with their existing core banking via a secure API layer.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex mb-desktop-wrap">
        <div className="flex-1 min-w-0">
          <span className="mb-fintech-badge">FINTECH</span>
          <h2 className="mb-heading">Mobile Banking<br />Platform For 500K+<br />Users</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <Stat num="500K+" label="Active users" />
            <Stat num="74%" label="Visit reduction" />
            <Stat num="2.1 M" label="Annual savings" />
            <Stat num="12 Wks" label="Time to launch" />
          </div>
        </div>
        <div className="mb-images-wrap">
          <div className="mb-img-wrap cs-mb-img-short">
            <Image src="/assets/caseStudy/headphoneMan.svg" alt="Fintech developer" fill sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="mb-hover-overlay cs-overlay-purple">
              <h3>Challenge</h3>
              <p>Legacy core banking system couldn&apos;t support mobile-first customers. Branch visits for basic transactions were costing $18 per interaction. Customer churn hit 12% quarterly.</p>
            </div>
          </div>
          <div className="mb-img-wrap cs-mb-img-tall">
            <Image src="/assets/caseStudy/cardWomen.svg" alt="Mobile banking user" fill sizes="(min-width: 1024px) 40vw, 100vw" />
            <div className="mb-hover-overlay cs-overlay-dark">
              <h3>Solution</h3>
              <p>Built a full mobile banking platform with real-time payments, biometric authentication, and automated KYC — integrated with their existing core banking via a secure API layer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
