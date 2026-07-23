import Image from "next/image";

export default function BiAnalyticsSection() {
  return (
    <section className="ent-bi-section bg-[#f8f8f8]">
      <div className="ent-bi-inner">

        <div className="absolute top-[100px] left-[140px]">
            <div className="w-[456px] h-[250px]">
                <h2 className="text-[#242424] font-normal
                            text-[32px] leading-[33px]
                            sm:text-[42px] sm:leading-[44px]
                            lg:text-[63px] lg:leading-[58px]
                            tracking-normal m-0">
                    Business Intelligence &amp; Analytics
                </h2>
            </div>
            <div className="w-[458px] h-[112px] mt-[20px]">
                <p className="text-[#6A6A6A] font-light text-[22px] leading-[22px] tracking-normal m-0">
                    Our business intelligence and analytics solutions enable businesses to make
                    informed decisions, optimize operations, and gain a competitive edge.
                </p>
            </div>
        </div>

        <div className="absolute top-[105px] left-[800px]">
            <Image src="/assets/enterprisePage/dataAnalysis.svg"
                 alt="Data Analysis"
                 width={300} height={300}
                 className="w-[300px] h-[300px] object-cover rounded-[16px] block"/>
        </div>

        <div className="absolute top-[289px] left-[1130px]">
            <div className="w-[260px] h-[36px]">
                <h3 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                    Data Analysis
                </h3>
            </div>
            <div className="w-[198px] h-[57px] mt-[14px]">
                <p className="text-[#6A6A6A] font-light text-[17px] leading-[16px] tracking-normal m-0">
                    Statistical analysis, machine learning, and AI to analyze data.
                </p>
            </div>
        </div>

        <div className="absolute top-[140px] left-[1500px]">
            <div className="w-[260px] h-[36px]">
                <h3 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                    Dashboards
                </h3>
            </div>
            <div className="w-[298px] h-[38px] mt-[14px]">
                <p className="text-[#6A6A6A] font-light text-[17px] leading-[16px] tracking-normal m-0">
                    Create centralized dashboards for comprehensive data views.
                </p>
            </div>
        </div>

        <div className="absolute top-[250px] left-[1490px]">
            <Image src="/assets/enterprisePage/dashboard.svg"
                 alt="Dashboards"
                 width={305} height={185}
                 className="w-[305px] h-[185px] object-cover rounded-[16px] block"/>
        </div>

        <div className="absolute top-[640px] left-[160px]">
            <Image src="/assets/enterprisePage/dataCollection.svg"
                 alt="Data Collection"
                 width={219} height={300}
                 className="w-[219px] h-[300px] object-cover rounded-[12px] block"/>
        </div>

        <div className="absolute top-[660px] left-[410px]">
            <div className="w-[260px] h-[36px]">
                <h3 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                    Data Collection
                </h3>
            </div>
            <div className="w-[286px] h-[57px] mt-[14px]">
                <p className="text-[#6A6A6A] font-light text-[17px] leading-[16px] tracking-normal m-0">
                    Collect data from multiple sources, including databases,
                    applications, and sensors.
                </p>
            </div>
        </div>

        <div className="absolute top-[565px] left-[878px]">
            <Image src="/assets/enterprisePage/dataVisualization.svg"
                 alt="Data Visualization"
                 width={421} height={250}
                 className="w-[421px] h-[250px] object-cover rounded-[16px] block"/>
        </div>

        <div className="absolute top-[822px] left-[878px]">
            <div className="w-[274px] h-[36px]">
                <h3 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                    Data Visualization
                </h3>
            </div>
            <div className="w-[258px] h-[57px] mt-[14px]">
                <p className="text-[#6A6A6A] font-light text-[17px] leading-[16px] tracking-normal m-0">
                    Transform data into easy-to-understand charts, graphs, and visuals.
                </p>
            </div>
        </div>

        <div className="absolute top-[562px] left-[1511px]">
            <Image src="/assets/enterprisePage/reporting.svg"
                 alt="Reporting"
                 width={297} height={297}
                 className="w-[297px] h-[297px] object-cover rounded-[16px] block"/>
        </div>

        <div className="absolute top-[875px] left-[1511px]">
            <div className="w-[260px] h-[36px]">
                <h3 className="text-[#242424] font-medium text-[24px] leading-[120%] tracking-normal m-0">
                    Reporting
                </h3>
            </div>
            <div className="w-[286px] h-[38px] mt-[14px]">
                <p className="text-[#6A6A6A] font-light text-[17px] leading-[16px] tracking-normal m-0">
                    Generate informative reports summarizing data.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
