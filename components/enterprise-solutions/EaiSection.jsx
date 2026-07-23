export default function EaiSection() {
  return (
    <section className="ent-eai-section bg-[#f8f8f8]
                     pt-[60px] pb-[60px] px-[20px]
                     sm:pt-[100px] sm:pb-[100px] sm:px-[40px]
                     lg:pt-[230px] lg:pb-[180px] lg:px-[140px]">

        <div className="ent-eai-title-w max-w-[870px] mb-[32px]">
            <h2 className="ent-eai-title text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[63px] lg:leading-[58px]
                        tracking-normal m-0">
                Enterprise Application Integration (EAI)
            </h2>
        </div>

        <div className="ent-eai-sub-w max-w-[836px] mb-[60px] lg:mb-[0px]">
            <p className="ent-eai-sub text-[#979797] font-light
                       text-[18px] leading-[20px]
                       sm:text-[19px] sm:leading-[22px]
                       lg:text-[23px] lg:leading-[26px]
                       tracking-normal m-0">
                Enterprise Application Integration is the digital bridge connecting diverse enterprise
                applications. Ivy League Solutions excels at this, ensuring that your systems collaborate effectively.
            </p>
        </div>

        <div className="ent-eai-row flex items-end gap-[10px] overflow-x-auto pb-2
                    [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mt-[60px] lg:mt-0">

            <div className="ent-eai-card ent-eai-card-1 w-[310px] min-w-[310px] h-[291px] bg-white rounded-[20px]
                        relative shrink-0 flex flex-col justify-between p-[28px]">
                <h3 className="ent-eai-heading text-[#242424] font-medium text-[34px] leading-[100%] tracking-normal m-0">
                    Data Integration
                </h3>
                <p className="ent-eai-body text-[#979797] font-light text-[22px] leading-[90%] tracking-normal m-0 w-[264px]">
                    Linking various data sources to enable seamless data sharing.
                </p>
            </div>

            <div className="ent-eai-card ent-eai-card-2 w-[310px] min-w-[310px] h-[360px] bg-white rounded-[20px]
                        relative shrink-0 flex flex-col justify-between p-[28px]">
                <h3 className="ent-eai-heading text-[#242424] font-medium text-[34px] leading-[100%] tracking-normal m-0">
                    Process Integration
                </h3>
                <p className="ent-eai-body text-[#979797] font-light text-[22px] leading-[90%] tracking-normal m-0 w-[264px]">
                    Ensuring that different business processes work in harmony.
                </p>
            </div>

            <div className="ent-eai-card ent-eai-card-3 w-[310px] min-w-[310px] h-[490px] bg-white rounded-[20px]
                        relative shrink-0 flex flex-col justify-between p-[28px]">
                <h3 className="ent-eai-heading text-[#242424] font-medium text-[34px] leading-[100%] tracking-normal m-0">
                    Application Integration
                </h3>
                <p className="ent-eai-body text-[#979797] font-light text-[22px] leading-[90%] tracking-normal m-0 w-[264px]">
                    Connecting different software applications for smoother communication.
                </p>
            </div>

            <div className="ent-eai-card ent-eai-card-4 w-[310px] min-w-[310px] h-[630px] bg-white rounded-[20px]
                        relative shrink-0 flex flex-col justify-between p-[28px]">
                <h3 className="ent-eai-heading text-[#242424] font-medium text-[34px] leading-[100%] tracking-normal m-0">
                    Security Integration
                </h3>
                <p className="ent-eai-body text-[#979797] font-light text-[22px] leading-[90%] tracking-normal m-0 w-[264px]">
                    Guaranteeing the security of integrated applications.
                </p>
            </div>

            <div className="ent-eai-card ent-eai-card-5 w-[310px] min-w-[310px] h-[765px] bg-white rounded-[20px]
                        relative shrink-0 flex flex-col justify-between p-[28px]">
                <h3 className="ent-eai-heading text-[#242424] font-medium text-[34px] leading-[100%] tracking-normal m-0">
                    Performance Monitoring
                </h3>
                <p className="ent-eai-body text-[#979797] font-light text-[22px] leading-[90%] tracking-normal m-0 w-[264px]">
                    Keeping a vigilant eye on integrated applications' performance for seamless operations.
                </p>
            </div>

        </div>
    </section>
  );
}
