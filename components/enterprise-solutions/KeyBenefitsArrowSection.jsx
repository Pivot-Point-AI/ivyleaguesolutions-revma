import Image from "next/image";

export default function KeyBenefitsArrowSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section
                     px-[20px] pt-[60px] pb-[80px]
                     sm:px-[40px] sm:pt-[100px] sm:pb-[120px]
                     lg:px-[140px] lg:pt-[200px] lg:pb-[220px]">

        <div className="w-full h-auto lg:w-[533px] lg:h-[108px] mb-[60px]">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[63px] lg:leading-[58px]
                        tracking-normal m-0">
                Key Benefits
            </h2>
        </div>

        <div className="ent-arrow-canvas">
          <div className="ent-arrow-inner">

            <Image src="/assets/enterprisePage/lineArrow.webp"
                 alt=""
                 aria-hidden="true"
                 width={1068} height={317}
                 className="ent-benefits-line absolute"
                 style={{top: '50px', left: '325px', width: '1068px', height: '317px', display: 'block'}}/>

            <div className="absolute" style={{top: '200px', left: '40px'}}>
                <div className="w-[340px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                        Improve Decision-Making
                    </h4>
                </div>
                <div className="w-[385px] h-[46px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[20px] tracking-normal m-0">
                        Gain insights into business performance for informed decisions.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '370px', left: '733px'}}>
                <div className="w-[340px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                        Optimize Operations
                    </h4>
                </div>
                <div className="w-[381px] h-[46px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[20px] tracking-normal m-0">
                        Identify areas for improvement to streamline operations.
                    </p>
                </div>
            </div>

            <div className="absolute" style={{top: '190px', left: '1360px'}}>
                <div className="w-[275px] h-[36px]">
                    <h4 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                        Competitive Edge
                    </h4>
                </div>
                <div className="w-[309px] h-[46px] mt-[12px]">
                    <p className="text-[#6A6A6A] font-light text-[17px] leading-[20px] tracking-normal m-0">
                        Stay ahead of the competition with actionable insights.
                    </p>
                </div>
            </div>

          </div>
        </div>

    </section>
  );
}
