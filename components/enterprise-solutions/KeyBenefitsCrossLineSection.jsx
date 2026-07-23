import Image from "next/image";

export default function KeyBenefitsCrossLineSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section
                     px-[20px] pt-[60px] pb-[80px]
                     sm:px-[40px] sm:pt-[80px] sm:pb-[100px]
                     lg:px-[140px] lg:pt-[140px] lg:pb-[200px]">

        <div className="w-full h-auto lg:w-[533px] lg:h-[108px] mb-[80px]">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[63px] lg:leading-[58px]
                        tracking-normal m-0">
                Key Benefits
            </h2>
        </div>

        <div className="ent-crossline-canvas">
          <div className="ent-crossline-inner">

            <div className="ent-benefits-line absolute pointer-events-none"
                 style={{top: '30px', left: '680px', width: '958px', height: '452px'}}>
                <Image src="/assets/enterprisePage/crossLine.svg"
                     alt=""
                     aria-hidden="true"
                     fill sizes="958px"
                     className="block object-fill"/>
            </div>

            <div className="absolute" style={{top: '70px', left: '720px'}}>
                <div className="w-[355px] h-[30px]">
                    <h4 className="text-black font-medium text-[24px] leading-[100%] tracking-normal m-0">
                        Enhance User Satisfaction
                    </h4>
                </div>
                <div className="w-[400px] h-[48px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[19px] leading-[110%] tracking-normal m-0">
                        Create user-friendly, engaging products and services.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '275px', left: '720px'}}>
                <div className="w-[398px] h-[32px]">
                    <h4 className="text-black font-medium text-[24px] leading-[100%] tracking-normal m-0">
                        Comply with Regulations
                    </h4>
                </div>
                <div className="w-[417px] h-[48px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[19px] leading-[110%] tracking-normal m-0">
                        Ensure compliance with relevant regulations.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '155px', left: '1200px'}}>
                <div className="w-[380px] h-[30px]">
                    <h4 className="text-black font-medium text-[24px] leading-[100%] tracking-normal m-0">
                        Increase Conversion Rates
                    </h4>
                </div>
                <div className="w-[417px] h-[50px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[19px] leading-[110%] tracking-normal m-0">
                        Identify and address security vulnerabilities to prevent potential attacks.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '360px', left: '1200px'}}>
                <div className="w-[260px] h-[32px]">
                    <h4 className="text-black font-medium text-[24px] leading-[100%] tracking-normal m-0">
                        Reduce Costs
                    </h4>
                </div>
                <div className="w-[417px] h-[48px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[19px] leading-[110%] tracking-normal m-0">
                        Prevention is cost-effective compared to remediation.
                    </p>
                </div>
            </div>

          </div>
        </div>

    </section>
  );
}
