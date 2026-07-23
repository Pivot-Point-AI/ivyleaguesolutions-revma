export default function PurpleBannerSection() {
  return (
    <section className="ent-purple-banner w-full bg-[#4026B8] flex items-center justify-between
                     px-[20px] py-[40px]
                     sm:px-[40px]
                     lg:px-[140px] lg:py-[35px]">

        <div className="max-w-[247px] shrink-0">
            <h2 className="text-white font-normal
                        text-[29px] leading-[32px]
                        sm:text-[33px] sm:leading-[34px]
                        lg:text-[40px] lg:leading-[40px]
                        tracking-normal m-0">
                Digital Enterprise Solutions
            </h2>
        </div>

        <div className="max-w-[941px] shrink-0">
            <p className="text-white font-light
                       text-[18px] leading-[20px]
                       sm:text-[19px] sm:leading-[22px]
                       lg:text-[22px] lg:leading-[24px]
                       tracking-normal m-0">
                Enterprise applications are software applications used by organizations to support
                their various business processes and operations — from accounting and finance to HR,
                supply chain, and CRM. Ivy League Solutions is a leading enterprise application development
                company with a proven track record of success.
            </p>
        </div>

    </section>
  );
}
