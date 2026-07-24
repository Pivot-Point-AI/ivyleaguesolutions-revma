import Image from "next/image";

export default function KeyBenefitsBigLinesSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section
                     px-[20px] pt-[40px] pb-[80px]
                     sm:px-[40px] sm:pt-[60px] sm:pb-[100px]
                     lg:px-[140px] lg:pt-[50px] lg:pb-[180px]">

        <div className="w-full h-auto lg:w-[780px] lg:h-[108px] mb-[80px]">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[63px] lg:leading-[58px]
                        tracking-normal m-0">
                Key Benefits
            </h2>
        </div>

        <div className="ent-biglines-canvas">
          <div className="ent-biglines-inner">

            <div className="ent-benefits-line absolute pointer-events-none"
                 style={{top: '80px', left: '30px', width: '1620px', height: '370px'}}>
                <Image src="/assets/enterprisePage/bigLines.webp"
                     alt=""
                     aria-hidden="true"
                     fill sizes="1620px"
                     className="block object-fill"/>
            </div>

            <div className="absolute" style={{top: '100px', left: '60px'}}>
                <div className="w-[301px] h-[48px]">
                    <h4 className="text-black font-medium text-[24px] leading-[160%] tracking-normal m-0">
                        Improve Performance
                    </h4>
                </div>
                <div className="w-[328px] h-[48px] mt-[8px]">
                    <p className="text-black font-light text-[19px] leading-[107%] tracking-normal m-0">
                        Enhance application performance and reduce the risk of outages.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '340px', left: '475px'}}>
                <div className="w-[270px] h-[48px]">
                    <h4 className="text-black font-medium text-[24px] leading-[160%] tracking-normal m-0">
                        Increase Security
                    </h4>
                </div>
                <div className="w-[291px] h-[48px] mt-[8px]">
                    <p className="text-black font-light text-[19px] leading-[107%] tracking-normal m-0">
                        Strengthen application security and safeguard data.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '105px', left: '885px'}}>
                <div className="w-[268px] h-[48px]">
                    <h4 className="text-black font-medium text-[24px] leading-[160%] tracking-normal m-0">
                        Ensure Scalability
                    </h4>
                </div>
                <div className="w-[281px] h-[48px] mt-[8px]">
                    <p className="text-black font-light text-[19px] leading-[107%] tracking-normal m-0">
                        Make applications adaptable to evolving needs.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '340px', left: '1300px'}}>
                <div className="w-[268px] h-[48px]">
                    <h4 className="text-black font-medium text-[24px] leading-[160%] tracking-normal m-0">
                        Reduce Costs
                    </h4>
                </div>
                <div className="w-[295px] h-[48px] mt-[8px]">
                    <p className="text-black font-light text-[19px] leading-[107%] tracking-normal m-0">
                        Cut maintenance and support expenses.
                    </p>
                </div>
            </div>

          </div>
        </div>

    </section>
  );
}
