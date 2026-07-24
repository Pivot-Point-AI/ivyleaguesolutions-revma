import Image from "next/image";
import Stat from "./Stat";

export default function ErpSection() {
  return (
    <section className="overflow-hidden">
      <div className="block lg:hidden px-5 sm:px-8 pt-[60px] pb-[60px]">
        <span className="erp-enterprise-badge cs-badge-sm">Enterprise</span>
        <h2 className="cs-mobile-section-h2-nc">End-To-End ERP<br />And Supply Chain<br />Automation</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
          <Stat num="85%" label="Manual tasks eliminated" />
          <Stat num="$4.8M" label="Annual cost savings" />
          <Stat num="12x" label="Faster reporting" />
          <Stat num="6 month" label="Full ROI payback" />
        </div>
        <div className="relative rounded-2xl overflow-hidden h-[320px]">
          <Image src="/assets/caseStudy/machineOperating.webp" alt="Machine operator" fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className="hidden lg:flex erp-desktop-wrap">
        <div className="erp-left">
          <div className="erp-circle"></div>
          <div className="erp-machine-img-wrap">
            <Image src="/assets/caseStudy/machineOperating.webp" alt="Machine operator at work" fill sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        </div>
        <div className="erp-right">
          <span className="erp-enterprise-badge">Enterprise</span>
          <h2 className="erp-heading">End-To-End ERP<br />And Supply Chain<br />Automation</h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8">
            <Stat num="85%" label="Manual tasks eliminated" />
            <Stat num="$4.8M" label="Annual cost savings" />
            <Stat num="12x" label="Faster reporting" />
            <Stat num="6 month" label="Full ROI payback" />
          </div>
        </div>
      </div>

      <div className="erp-cs-banner">
        <Image src="/assets/caseStudy/bannerBackground.webp" alt="" aria-hidden="true" fill sizes="100vw" className="erp-cs-banner-bg" />
        <div className="erp-cs-banner-inner">
          <div className="erp-cs-col erp-cs-col-left">
            <h3 className="erp-cs-heading">Challenge</h3>
            <p className="erp-cs-body">
              85% of supply chain processes were manual. Data silos across 6 departments caused $4M in annual inventory errors. Reports took 3 days to compile.
            </p>
          </div>
          <div className="erp-cs-col erp-cs-col-right">
            <h3 className="erp-cs-heading">Solution</h3>
            <p className="erp-cs-body">
              Custom ERP with real-time inventory tracking, automated purchase orders, predictive demand forecasting, and executive dashboards across all facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
