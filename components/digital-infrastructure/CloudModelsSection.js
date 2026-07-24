import Image from "next/image";

export default function CloudModelsSection() {
  return (
    <section className="cloud-models-section bg-[#f8f8f8] px-[140px] pt-[170px] pb-[120px]">
      <div className="cm-heading-w">
        <h2 className="cm-heading text-[#242424] font-normal m-0">Recognizing Cloud Service Models</h2>
      </div>

      <div className="cm-body-w mt-[40px]">
        <p className="cm-body text-[#6A6A6A] m-0">
          Cloud services come in assorted forms, each designed to meet different business needs. Understanding the distinction
          between public and private cloud services is essential for making informed decisions. We are among the esteemed IT cloud
          service providers that satisfy the exceptional needs of your organization — because each business is different.
        </p>
      </div>

      <div className="cm-bottom flex items-end justify-between mt-[160px]">
        <div className="cm-left flex flex-col justify-between shrink-0">
          <p className="cm-customized-label text-[#6A6A6A] font-normal m-0">Customized Solutions</p>
          <h2 className="cm-tailored-heading text-[#242424] font-normal m-0 capitalize">
            Tailored For<br />Every Business
          </h2>
        </div>

        <div className="cm-right flex items-end gap-[16px] shrink-0">
          <div className="cm-laptop-w">
            <Image src="/assets/infrastructurePage/laptopMan.webp" alt="Professional working on a laptop" width={428} height={720} className="cm-img-laptop" />
          </div>

          <div className="cm-saas-col flex flex-col gap-[16px]">
            <div className="cm-saas-img-w">
              <Image src="/assets/infrastructurePage/saaS.webp" alt="Software as a Service architecture diagram" width={428} height={347} className="cm-img-saas" />
            </div>
            <div className="cm-saas-box bg-[#4026B8]">
              <h3 className="cm-saas-box-heading text-white m-0">Software as a Service</h3>
              <p className="cm-saas-box-body text-white m-0 mt-[20px]">
                Our solutions deliver software applications over the Internet,
                ensuring your team can access the tools they need from anywhere,
                at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
