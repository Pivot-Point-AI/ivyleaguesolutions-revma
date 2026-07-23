import Image from "next/image";
import Stat from "./Stat";

export default function HealthcareSection() {
  return (
    <section className="overflow-hidden">
      <div className="lg:hidden px-5 sm:px-10 pt-[60px] pb-[60px]">
        <span className="hc-healthcare-badge cs-badge-sm">Healthcare</span>
        <h2 className="cs-mobile-section-h2">Patient Management<br />And Telemedicine<br />Platform</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
          <Stat num="14" label="Clinics unified" />
          <Stat num="62%" label="Wait time reduction" />
          <Stat num="3x" label="Patient throughput" />
          <Stat num="Zero" label="Data breaches" />
        </div>
        <div className="cs-mobile-img-card h-[320px]">
          <Image src="/assets/caseStudy/patientManagement.svg" alt="Healthcare telemedicine" fill sizes="100vw" />
          <div className="cs-mobile-img-overlay cs-mobile-img-overlay-dark">
            <h3>Challenge</h3>
            <p>85% of supply chain processes were manual. Data silos across 6 departments caused $4M in annual inventory errors. Reports took 3 days to compile.</p>
            <h3>Solution</h3>
            <p>85% of supply chain processes were manual. Data silos across 6 departments caused $4M in annual inventory errors. Reports took 3 days to compile.</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex hc-desktop-wrap">
        <div className="flex-1 min-w-0">
          <span className="hc-healthcare-badge">Healthcare</span>
          <h2 className="hc-heading">Patient Management<br />And Telemedicine<br />Platform</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <Stat num="14" label="Clinics unified" />
            <Stat num="62%" label="Wait time reduction" />
            <Stat num="3x" label="Patient throughput" />
            <Stat num="Zero" label="Data breaches" />
          </div>
        </div>

        <div className="hc-img-wrap">
          <Image src="/assets/caseStudy/healthCare.svg" alt="Healthcare telemedicine platform" fill sizes="(min-width: 1024px) 605px, 100vw" />
          <div className="hc-hover-overlay">
            <h3>Challenge</h3>
            <p>85% of supply chain processes were manual. Data silos across 6 departments caused $4M in annual inventory errors. Reports took 3 days to compile.</p>
            <h3>Solution</h3>
            <p>85% of supply chain processes were manual. Data silos across 6 departments caused $4M in annual inventory errors. Reports took 3 days to compile.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
