import Image from "next/image";

export default function LegacyModernizationSection() {
  return (
    <section className="bg-[#f8f8f8] ent-cq-section ent-legacy
                     px-[20px] pt-[60px] pb-[80px]
                     sm:px-[40px] sm:pt-[80px] sm:pb-[100px]
                     lg:px-[140px] lg:pt-[140px] lg:pb-[160px]">

        <div className="ent-legacy-header-row flex items-start justify-between mb-[60px] lg:mb-[100px]
                     flex-col gap-[24px] lg:flex-row lg:gap-0">

            <div className="ent-legacy-heading-w w-full lg:w-[760px] lg:h-[166px] shrink-0">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                            tracking-normal m-0">
                    Legacy Application Modernization
                </h2>
            </div>

            <div className="ent-legacy-sub-w w-full lg:w-[651px] lg:h-[100px] shrink-0 lg:mt-[80px]">
                <p className="text-[#6A6A6A] font-light
                           text-[18px] leading-[20px]
                           sm:text-[19px] sm:leading-[22px]
                           lg:text-[clamp(15px,1.5625vw,30px)] lg:leading-[1]
                           tracking-normal m-0">
                    Modernizing legacy applications helps improve performance, increase security,
                    ensure scalability, and reduce costs.
                </p>
            </div>

        </div>

    <div className="ent-legacy-canvas">
    <div className="ent-legacy-inner">
        <div className="ent-legacy-row flex items-start justify-between gap-[60px]
                     flex-col lg:flex-row">


            <div className="shrink-0 flex flex-col">

                <div className="mb-[28px]">
                    <h3 className="text-[#242424] font-medium text-[24px] leading-[50px] tracking-normal m-0 mb-[6px]">
                        Refactoring
                    </h3>
                    <p className="text-[#7B7B7B] font-light text-[18px] leading-[20px] tracking-normal m-0 max-w-[515px]">
                        Rewriting code to enhance efficiency and maintainability.
                    </p>
                </div>

                <div className="mb-[28px]">
                    <h3 className="text-[#242424] font-medium text-[24px] leading-[50px] tracking-normal m-0 mb-[6px]">
                        Replatforming
                    </h3>
                    <p className="text-[#7B7B7B] font-light text-[18px] leading-[20px] tracking-normal m-0 max-w-[571px]">
                        Migrating legacy applications to modern platforms like the cloud.
                    </p>
                </div>

                <div className="mb-[28px]">
                    <h3 className="text-[#242424] font-medium text-[24px] leading-[50px] tracking-normal m-0 mb-[6px]">
                        Rehosting
                    </h3>
                    <p className="text-[#7B7B7B] font-light text-[18px] leading-[20px] tracking-normal m-0 max-w-[585px]">
                        Moving applications to new hardware platforms, such as virtual machines.
                    </p>
                </div>

                <div className="mb-[28px]">
                    <h3 className="text-[#242424] font-medium text-[24px] leading-[50px] tracking-normal m-0 mb-[6px]">
                        Repurposing
                    </h3>
                    <p className="text-[#7B7B7B] font-light text-[18px] leading-[20px] tracking-normal m-0 max-w-[691px]">
                        Adapting the purpose of legacy applications for different business processes.
                    </p>
                </div>

                <div>
                    <h3 className="text-[#242424] font-medium text-[24px] leading-[50px] tracking-normal m-0 mb-[6px]">
                        Retirement
                    </h3>
                    <p className="text-[#7B7B7B] font-light text-[18px] leading-[20px] tracking-normal m-0 max-w-[691px]">
                        Decommissioning legacy applications and replacing them with new solutions.
                    </p>
                </div>

            </div>


            <div className="ent-legacy__imgs shrink-0 flex flex-col items-center gap-[20px] lg:flex-row lg:items-end">

                <div className="ent-legacy__img-wrap w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] shrink-0 mb-[0px]">
                    <Image src="/assets/enterprisePage/mobileGirl.svg"
                         alt="Team collaboration"
                         width={252} height={387}
                         className="ent-legacy__img w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] object-cover rounded-[20px] block"/>
                </div>

                <div className="ent-legacy__img-wrap ent-legacy__img-wrap--raised w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] shrink-0 mb-[0px] lg:mb-[90px]">
                    <Image src="/assets/enterprisePage/twoMen.svg"
                         alt="Cloud computing technology"
                         width={252} height={387}
                         className="ent-legacy__img w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] object-cover rounded-[20px] block"/>
                </div>

                <div className="ent-legacy__img-wrap w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] shrink-0 mb-[0px]">
                    <Image src="/assets/enterprisePage/girlGroup.svg"
                         alt="Team meeting"
                         width={252} height={387}
                         className="ent-legacy__img w-[160px] h-[246px] sm:w-[200px] sm:h-[307px] lg:w-[252px] lg:h-[387px] object-cover rounded-[20px] block"/>
                </div>

            </div>

        </div>
    </div>
    </div>

    </section>
  );
}
