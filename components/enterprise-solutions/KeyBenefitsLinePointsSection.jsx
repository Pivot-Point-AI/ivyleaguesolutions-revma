import Image from "next/image";

export default function KeyBenefitsLinePointsSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section
                     px-[20px] pt-[60px] pb-[0px]
                     sm:px-[40px] sm:pt-[100px]
                     lg:px-[140px] lg:pt-[300px] lg:pb-[0px]">

        <div className="w-full h-auto lg:w-[533px] lg:h-[108px] mb-[80px]">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[63px] lg:leading-[58px]
                        tracking-normal m-0">
                Key Benefits
            </h2>
        </div>

        <div className="ent-linepoints-canvas">
          <div className="ent-linepoints-inner">

            <div className="ent-benefits-line absolute pointer-events-none"
                 style={{top: '170px', left: '0px', width: '1620px', height: '42px'}}>
                <Image src="/assets/enterprisePage/linePoints.webp"
                     alt=""
                     aria-hidden="true"
                     fill sizes="1620px"
                     className="block object-fill"/>
            </div>

            <div className="absolute" style={{top: '30px', left: '67px'}}>
                <div className="w-[188px] h-[34px]">
                    <h4 className="text-[#242424] font-normal text-[24px] leading-[57px] tracking-normal m-0 whitespace-nowrap">
                        Protect Data
                    </h4>
                </div>
                <div className="w-[332px] h-[40px] mt-[35px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[17px] tracking-normal m-0">
                        Minimize the risk of data breaches by safeguarding sensitive information.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '212px', left: '450px'}}>
                <div className="w-[205px] h-[34px]">
                    <h4 className="text-[#242424] font-normal text-[24px] leading-[57px] tracking-normal m-0 whitespace-nowrap">
                        Prevent Attacks
                    </h4>
                </div>
                <div className="w-[380px] h-[40px] mt-[35px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[17px] tracking-normal m-0">
                        Identify and address security vulnerabilities to prevent potential attacks.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '30px', left: '830px'}}>
                <div className="w-[332px] h-[36px]">
                    <h4 className="text-[#242424] font-normal text-[24px] leading-[57px] tracking-normal m-0 whitespace-nowrap">
                        Comply with Regulations
                    </h4>
                </div>
                <div className="w-[355px] h-[40px] mt-[35px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[17px] tracking-normal m-0">
                        Ensure compliance with relevant regulations.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '212px', left: '1205px'}}>
                <div className="w-[190px] h-[34px]">
                    <h4 className="text-[#242424] font-normal text-[24px] leading-[57px] tracking-normal m-0 whitespace-nowrap">
                        Reduce Costs
                    </h4>
                </div>
                <div className="w-[336px] h-[40px] mt-[35px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[17px] tracking-normal m-0">
                        Prevention is cost-effective compared to remediation.
                    </p>
                </div>
            </div>

          </div>

        </div>

    </section>
  );
}
