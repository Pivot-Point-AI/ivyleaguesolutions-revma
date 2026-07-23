import Image from "next/image";

export default function ErpCrmSection() {
  return (
    <section className="bg-[#f8f8f8]
                     pt-[40px] pb-[60px] px-[20px]
                     sm:pt-[60px] sm:pb-[80px] sm:px-[40px]
                     lg:pt-[75px] lg:pb-[100px] lg:px-[140px]">

        <div className="ent-erp-header flex items-start justify-between mb-[60px] lg:mb-[150px]">

            <div className="w-full lg:w-[clamp(280px,41.2vw,791px)] shrink-0">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                            tracking-normal m-0">
                    ERP & CRM Software Solutions
                </h2>
            </div>

            <div className="hidden lg:flex w-[clamp(280px,39.22vw,753px)] shrink-0 items-center">
                <p className="text-[#979797] font-light text-[clamp(15px,1.5625vw,30px)] leading-[1] tracking-normal m-0">
                    ERP suites empower businesses to manage core processes, from accounting to sales.
                    Ivy League Solutions offers top ERP solutions like SAP, Oracle, and Microsoft Dynamics, along
                    with tailored custom ERP solutions and integrations. We also offer comprehensive CRM
                    solutions to elevate customer relations.
                </p>
            </div>

        </div>


        <p className="lg:hidden text-[#979797] font-light text-[18px] leading-[20px] tracking-normal m-0 mb-[40px]">
            ERP suites empower businesses to manage core processes, from accounting to sales.
            Ivy League Solutions offers top ERP solutions like SAP, Oracle, and Microsoft Dynamics, along
            with tailored custom ERP solutions and integrations. We also offer comprehensive CRM
            solutions to elevate customer relations.
        </p>

        <div className="ent-crm-cards flex flex-col lg:flex-row gap-[clamp(14px,1.46vw,28px)]">

            <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[clamp(280px,41.98vw,806px)] h-[300px] sm:h-[420px] lg:h-[clamp(220px,32.71vw,628px)] rounded-[clamp(12px,1.04vw,20px)] overflow-hidden relative group shrink-0 lg:shrink cursor-pointer">
                <Image src="/assets/enterprisePage/crmOne.svg"
                     alt="ERP Solutions"
                     fill sizes="(min-width: 1024px) 50vw, 100vw"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55
                            transition-all duration-500 rounded-[clamp(12px,1.04vw,20px)]"></div>
                <div className="absolute bottom-[clamp(16px,2.08vw,40px)] left-[clamp(16px,2.08vw,40px)] max-w-[clamp(220px,27.08vw,520px)]
                            translate-y-4 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-500 ease-out">
                    <h3 className="text-white font-medium text-[clamp(18px,1.56vw,30px)] leading-[120%] m-0 mb-[12px]">
                        ERP Solutions
                    </h3>
                    <p className="text-white/90 font-light text-[clamp(13px,0.99vw,19px)] leading-[22px] m-0">
                        Custom ERP, SAP, Oracle, and Microsoft Dynamics implementations and integrations.
                    </p>
                </div>
            </div>

            <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[clamp(280px,41.98vw,806px)] h-[300px] sm:h-[420px] lg:h-[clamp(220px,32.71vw,628px)] rounded-[clamp(12px,1.04vw,20px)] overflow-hidden relative group shrink-0 lg:shrink cursor-pointer">
                <Image src="/assets/enterprisePage/crmTwo.svg"
                     alt="CRM Solutions"
                     fill sizes="(min-width: 1024px) 50vw, 100vw"
                     className="object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55
                            transition-all duration-500 rounded-[clamp(12px,1.04vw,20px)]"></div>
                <div className="absolute bottom-[clamp(16px,2.08vw,40px)] left-[clamp(16px,2.08vw,40px)] max-w-[clamp(220px,27.08vw,520px)]
                            translate-y-4 opacity-0
                            group-hover:translate-y-0 group-hover:opacity-100
                            transition-all duration-500 ease-out">
                    <h3 className="text-white font-medium text-[clamp(18px,1.56vw,30px)] leading-[120%] m-0 mb-[12px]">
                        CRM Solutions
                    </h3>
                    <p className="text-white/90 font-light text-[clamp(13px,0.99vw,19px)] leading-[22px] m-0">
                        Comprehensive, web-based, and customized CRM solutions for your business.
                    </p>
                </div>
            </div>

        </div>

    </section>
  );
}
