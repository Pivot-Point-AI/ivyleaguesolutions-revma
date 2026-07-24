import Image from "next/image";

export default function KeyBenefitsDottedLineSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section
                     pt-[60px] pb-[0px] px-[20px]
                     sm:pt-[120px] sm:px-[40px]
                     lg:pt-[230px] lg:pb-[0px] lg:px-[140px]">

        <div className="flex justify-center mb-[80px] lg:mb-[112px]">
            <div className="w-full max-w-[515px] h-auto lg:h-[83px]">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[63px] lg:leading-[58px]
                            tracking-normal m-0 text-center">
                    Key Benefits
                </h2>
            </div>
        </div>

        <div className="ent-dotedline-canvas">
          <div className="ent-dotedline-inner">

            <Image src="/assets/enterprisePage/dotedLine.webp"
                 alt=""
                 aria-hidden="true"
                 width={1641} height={18}
                 className="ent-benefits-line absolute top-[0px] left-0
                        w-[1641px] h-[18px]"/>

            <div className="absolute text-center" style={{top: '81px', left: '14px'}}>
                <div className="w-[340px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[30px] leading-[120%] tracking-normal m-0 text-center">
                        Enhance Communication
                    </h4>
                </div>
                <div className="w-[346px] h-[34px] mt-[8px]">
                    <p className="text-[#6A6A6A] font-light text-[20.17px] leading-[17px] tracking-normal m-0 text-center">
                        Facilitate seamless communication within teams.
                    </p>
                </div>
            </div>

            <div className="absolute text-center" style={{top: '81px', left: '437px'}}>
                <div className="w-[303px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[30px] leading-[120%] tracking-normal m-0 text-center">
                        Increase Efficiency
                    </h4>
                </div>
                <div className="w-[346px] h-[34px] mt-[8px]">
                    <p className="text-[#6A6A6A] font-light text-[20.17px] leading-[17px] tracking-normal m-0 text-center">
                        Streamline teamwork for enhanced efficiency.
                    </p>
                </div>
            </div>

            <div className="absolute text-center" style={{top: '81px', left: '860px'}}>
                <div className="w-[303px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[30px] leading-[120%] tracking-normal m-0 text-center">
                        Boost Productivity
                    </h4>
                </div>
                <div className="w-[305px] h-[34px] mt-[8px]">
                    <p className="text-[#6A6A6A] font-light text-[20.17px] leading-[17px] tracking-normal m-0 text-center">
                        Tools to enhance overall work productivity.
                    </p>
                </div>
            </div>

            <div className="absolute text-center" style={{top: '81px', left: '1283px'}}>
                <div className="w-[303px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[30px] leading-[120%] tracking-normal m-0 text-center">
                        Reduce Costs
                    </h4>
                </div>
                <div className="w-[346px] h-[34px] mt-[8px]">
                    <p className="text-[#6A6A6A] font-light text-[20.17px] leading-[17px] tracking-normal m-0 text-center">
                        Save time and resources, leading to cost reduction.
                    </p>
                </div>
            </div>

          </div>
        </div>

    </section>
  );
}
