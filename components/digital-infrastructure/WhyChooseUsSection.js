import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="wc-section bg-[#f8f8f8] px-[140px] pt-[170px] pb-[170px]">
      <div className="wc-left">
        <p className="wc-label m-0">Why Choose Us</p>
        <h2 className="wc-heading m-0">Why Ivy League Solutions For Cloud Services?</h2>
        <p className="wc-body m-0">
          The selection of one of the best-managed cloud service providers is fundamental
          for your organization&apos;s success. Here&apos;s why Ivy League Solutions stands out.
        </p>

        <div className="wc-features">
          <div className="wc-feature">
            <h3 className="wc-feature-heading m-0">Expertise &amp; Experience</h3>
            <p className="wc-feature-body m-0">
              Our team consists of skillful professionals with extensive knowledge
              of cloud technology. We stay updated on industry movements to deliver
              the most effective solutions.
            </p>
          </div>

          <div className="wc-feature">
            <h3 className="wc-feature-heading m-0">Client-Centric Approach</h3>
            <p className="wc-feature-body m-0">
              We prioritize understanding your business objectives. Our tailored
              IT consulting cloud services ensure our solutions align with your
              strategic goals.
            </p>
          </div>

          <div className="wc-feature">
            <h3 className="wc-feature-heading m-0">Comprehensive Support</h3>
            <p className="wc-feature-body m-0">
              We provide end-to-end support. Our dedicated team is always available
              to assist you with any cloud-related needs, from initial consultation
              to implementation and ongoing management.
            </p>
          </div>
        </div>
      </div>

      <div className="wc-right">
        <Image src="/assets/infrastructurePage/manThinking.webp" alt="Professional reviewing infrastructure data on monitors" width={610} height={462} className="wc-img-man" />
        <Image src="/assets/infrastructurePage/ipadWomen.webp" alt="Professional reviewing a cloud dashboard on a tablet" width={446} height={338} className="wc-img-woman" />
      </div>
    </section>
  );
}
