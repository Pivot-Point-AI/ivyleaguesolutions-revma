import Image from "next/image";

export default function CustomDevSection() {
  return (
<section className="bg-[#f8f8f8] ent-cq-section
                 px-[20px] pt-[0px] pb-[80px]
                 sm:px-[40px] sm:pb-[100px]
                 lg:px-[140px] lg:pt-[0px] lg:pb-[160px]">

    <div className="ent-customdev-header-row flex items-start justify-between mb-[80px] lg:mb-[160px]
                 flex-col gap-[24px] lg:flex-row lg:gap-0">
        <div className="ent-customdev-heading-w w-full lg:w-[771px] shrink-0">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                        tracking-normal m-0">
                Custom Application Development
            </h2>
        </div>
        <div className="ent-customdev-sub-w w-full lg:w-[601px] lg:h-[90px] shrink-0 lg:mt-[80px]">
            <p className="text-[#6A6A6A] font-light
                       text-[18px] leading-[20px]
                       sm:text-[19px] sm:leading-[22px]
                       lg:text-[clamp(15px,1.5625vw,30px)] lg:leading-[1]
                       tracking-normal m-0">
                Our custom application development services empower businesses to automate
                processes, increase productivity, and boost profitability.
            </p>
        </div>
    </div>


    <div className="ent-customdev-canvas">
    <div className="ent-customdev-inner">
    <div className="flex flex-col gap-[28px] lg:flex-row lg:items-start">


        <div className="flex flex-col gap-[28px] shrink-0">


            <div className="w-full lg:w-[802px] h-[220px] sm:h-[280px] lg:h-[362px]
                         rounded-[20px] overflow-hidden relative group shrink-0 cursor-pointer">
                <Image src="/assets/enterprisePage/peopleGroup.webp"
                     alt="People Group Meeting"
                     fill sizes="(min-width: 1024px) 802px, 100vw"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55
                            transition-all duration-500 rounded-[20px]"></div>
                <div className="absolute bottom-[20px] left-[20px] lg:bottom-[28px] lg:left-[28px] max-w-[90%] lg:max-w-[520px]
                            translate-y-4 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-500 ease-out">
                    <h3 className="text-white font-bold text-[16px] sm:text-[18px] lg:text-[19px]
                               leading-[120%] tracking-[0.05em] uppercase m-0 mb-[8px] lg:mb-[10px]">
                        Requirements Gathering
                    </h3>
                    <p className="text-white/90 font-light text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] m-0">
                        Collaboratively establish a detailed project plan.
                    </p>
                </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-[28px]">

                <div className="w-full sm:w-[390px] h-[300px] sm:h-[400px] lg:h-[545px]
                             bg-[#4026B8] rounded-[20px] shrink-0
                             shadow-[0px_0px_4px_0px_rgba(152,152,152,0.20)]
                             px-[20px] py-[24px] lg:px-[28px] lg:py-[32px]
                             flex flex-col justify-between">
                    <div>
                        <h3 className="text-white font-medium
                                   text-[22px] leading-[29px]
                                   lg:text-[32px] lg:leading-[38px]
                                   tracking-normal m-0 uppercase">
                            Deployment
                        </h3>
                    </div>
                    <div>
                        <p className="text-white font-normal
                                  text-[19px] leading-[26px]
                                  lg:text-[32px] lg:leading-[40px]
                                  tracking-normal m-0">
                            Deploy the application to the production environment.
                        </p>
                    </div>
                </div>

                <div className="w-full sm:w-[390px] h-[300px] sm:h-[400px] lg:h-[545px]
                             rounded-[20px] overflow-hidden relative group shrink-0 cursor-pointer">
                    <Image src="/assets/enterprisePage/personTyping.webp"
                         alt="Person Typing"
                         fill sizes="(min-width: 640px) 390px, 100vw"
                         className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55
                                transition-all duration-500 rounded-[20px]"></div>
                    <div className="absolute bottom-[20px] left-[20px] lg:bottom-[28px] lg:left-[28px] max-w-[90%] lg:max-w-[320px]
                                translate-y-4 opacity-0
                                group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-500 ease-out">
                        <h3 className="text-white font-bold text-[16px] sm:text-[18px] lg:text-[19px]
                                   leading-[120%] tracking-[0.05em] uppercase m-0 mb-[8px] lg:mb-[10px]">
                            Support
                        </h3>
                        <p className="text-white/90 font-light text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] m-0">
                            Provide ongoing support post-deployment.
                        </p>
                    </div>
                </div>

            </div>
        </div>



        <div className="flex flex-col gap-[28px] shrink-0">

            <div className="flex flex-col sm:flex-row gap-[28px]">


                <div className="ent-design-card-bg w-full sm:w-[390px] h-[300px] sm:h-[400px] lg:h-[545px] shrink-0
                             rounded-[20px] shadow-[0px_2px_4px_0px_rgba(152,152,152,0.15)]
                             p-[20px] lg:p-[28px] flex flex-col justify-between">
                    <div>
                        <Image src="/assets/enterprisePage/chemistryLogo.webp"
                             alt="App Logo"
                             width={40} height={40}
                             className="w-[40px] h-[40px] block"/>
                    </div>
                    <div>
                        <h3 className="text-white font-medium
                                   text-[19px] leading-[29px]
                                   lg:text-[24px] lg:leading-[38px]
                                   tracking-normal m-0 mb-[10px] lg:mb-[12px] uppercase">
                            Design
                        </h3>
                        <p className="text-white font-light
                                  text-[16px] leading-[17px]
                                  lg:text-[19px] lg:leading-[19px]
                                  tracking-normal m-0">
                            Create a user-friendly application design.
                        </p>
                    </div>
                </div>


                <div className="flex flex-col gap-[28px] shrink-0">

                    <div className="w-full sm:w-[390px] h-[180px] sm:h-[186px] lg:h-[260px]
                                 bg-white rounded-[20px] shrink-0
                                 flex flex-col items-center justify-center
                                 px-[20px] py-[20px] lg:px-[32px] lg:py-[24px] text-center">
                        <h3 className="text-[#242424] font-medium
                                   text-[17px] leading-[29px]
                                   lg:text-[24px] lg:leading-[38px]
                                   tracking-normal m-0 mb-[10px] lg:mb-[14px] uppercase">
                            Development
                        </h3>
                        <p className="text-[#7B7B7B] font-light
                                  text-[15px] leading-[17px]
                                  lg:text-[19px] lg:leading-[19px]
                                  tracking-normal m-0 text-center">
                            Implement the application using cutting-edge technologies.
                        </p>
                    </div>

                    <div className="w-full sm:w-[390px] h-[180px] sm:h-[186px] lg:h-[260px]
                                 bg-white rounded-[20px] shrink-0
                                 flex flex-col items-center justify-center
                                 px-[20px] py-[20px] lg:px-[32px] lg:py-[24px] text-center">
                        <h3 className="text-[#242424] font-medium
                                   text-[17px] leading-[29px]
                                   lg:text-[24px] lg:leading-[38px]
                                   tracking-normal m-0 mb-[10px] lg:mb-[14px] uppercase">
                            Testing
                        </h3>
                        <p className="text-[#7B7B7B] font-light
                                  text-[15px] leading-[17px]
                                  lg:text-[19px] lg:leading-[19px]
                                  tracking-normal m-0 text-center">
                            Rigorously test the application for compliance and functionality.
                        </p>
                    </div>

                </div>
            </div>


            <div className="w-full lg:w-[810px] h-[220px] sm:h-[280px] lg:h-[362px]
                         rounded-[20px] overflow-hidden relative group shrink-0 cursor-pointer">
                <Image src="/assets/enterprisePage/peopleDiscussion.webp"
                     alt="People Discussion"
                     fill sizes="(min-width: 1024px) 810px, 100vw"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65
                            transition-all duration-500 rounded-[20px]"></div>
                <div className="absolute bottom-[20px] left-[20px] lg:bottom-[28px] lg:left-[28px]
                            max-w-[90%] lg:max-w-[720px]
                            translate-y-4 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-500 ease-out">
                    <h3 className="text-white font-bold
                               text-[16px] sm:text-[18px] lg:text-[19px]
                               leading-[120%] tracking-[0.05em] uppercase m-0
                               mb-[10px] lg:mb-[14px]">
                        Key Benefits
                    </h3>
                    <p className="text-white/90 font-light
                              text-[13px] sm:text-[15px] lg:text-[18px]
                              leading-[19px] lg:leading-[22px] m-0">
                        <span className="font-semibold text-white">Enhance Efficiency:</span>
                        Automate manual processes for improved efficiency.<br/>
                        <span className="font-semibold text-white">Increase Productivity:</span>
                        Real-time data and insights enable better decision-making.<br/>
                        <span className="font-semibold text-white">Boost Profitability:</span>
                        Reduce costs and increase sales for improved profitability.
                    </p>
                </div>
            </div>

        </div>


    </div>
    </div>
    </div>

</section>
  );
}
