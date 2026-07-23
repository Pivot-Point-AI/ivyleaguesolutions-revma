export default function KeyBenefitsCurveSection() {
  return (
    <section className="bg-[#f8f8f8]
                     pt-[60px] pb-[0px] px-[20px]
                     sm:pt-[80px] sm:px-[40px]
                     lg:pt-[140px] lg:pb-[0px] lg:px-[140px]">

        <div className="w-full lg:w-[clamp(280px,25.57vw,491px)] mb-[80px]">
            <h2 className="text-[#242424] font-normal
                        text-[32px] leading-[33px]
                        sm:text-[42px] sm:leading-[44px]
                        lg:text-[clamp(30px,4.6875vw,90px)] lg:leading-[0.922]
                        tracking-normal m-0">
                Key Benefits
            </h2>
        </div>

        <div className="ent-curve-canvas">

            <img src="/assets/enterprisePage/dotLine.svg"
                 alt=""
                 aria-hidden="true"
                 loading="lazy"
                 className="ent-benefits-line absolute"
                 style={{top: '19.46%', left: '19.71%', width: '81.30%', aspectRatio: '1156.16 / 389.03', height: 'auto'}}/>


            <div className="absolute text-center"
                 style={{top: '83.4%', left: '7.77%', width: 'clamp(180px,22.54vw,346px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Enhanced Efficiency
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    Automating manual tasks leads to operational efficiency.
                </p>
            </div>


            <div className="absolute text-center"
                 style={{top: '37.0%', left: '0%', width: 'clamp(180px,20.54vw,346px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Increased Productivity
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    Real-time data and insights drive better decision-making.
                </p>
            </div>


            <div className="absolute text-center"
                 style={{top: '0%', left: '23.96%', width: 'clamp(180px,22.54vw,346px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Improved Profitability
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    Cutting costs and boosting sales elevates profitability.
                </p>
            </div>


            <div className="absolute text-center"
                 style={{top: '48.96%', left: '45.87%', width: 'clamp(220px,30.96vw,438px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Enhanced Customer Satisfaction
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    CRM solutions elevate the customer<br/>experience.
                </p>
            </div>


            <div className="absolute text-center"
                 style={{top: '82.08%', left: '55.83%', width: 'clamp(180px,22.54vw,346px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Increased Sales
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    Automated sales processes and customer insights drive revenue.
                </p>
            </div>


            <div className="absolute text-center"
                 style={{top: '24.24%', left: '75.55%', width: 'clamp(180px,22.54vw,346px)'}}>
                <h4 className="text-[#242424] font-medium text-[clamp(16px,1.5625vw,30px)] leading-[1.2] tracking-normal m-0 mb-[6px]">
                    Better Customer Service
                </h4>
                <p className="text-[#6A6A6A] font-light text-[clamp(11px,1.05vw,20.17px)] leading-[1.1] tracking-normal m-0">
                    Centralized customer data supports superior service.
                </p>
            </div>

        </div>

    </section>
  );
}
