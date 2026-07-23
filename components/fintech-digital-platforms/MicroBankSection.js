import Image from "next/image";

export default function MicroBankSection() {
  return (
    <section className="content-section bg-[#f8f8f8] px-[140px] pt-[215px] pb-0">
      <div className="two-col-layout flex items-start justify-between gap-8">
        <div className="shrink-0 max-w-[451px]">
          <h2 className="text-display text-[#242424] font-normal m-0">Micro Bank</h2>
        </div>
        <div className="shrink-0 max-w-[900px]">
          <p className="body-25 text-[#979797] font-light m-0">
            Our Micro Bank solutions focus on smaller financial institutions, such as local and
            microfinance banks, that serve niche markets or underserved communities. By providing a
            natural and secure banking platform, we help these institutions expand their digital reach
            while ensuring top customer service.
          </p>
        </div>
      </div>

      <div className="micro-images-wrap">
        <div className="micro-img-top">
          <Image src="/assets/fintechPage/mobileScreen.svg" alt="Mobile Screen" width={472} height={381} className="w-[472px] h-[381px] object-cover block rounded-2xl" />
        </div>
        <div className="micro-img-mid">
          <Image src="/assets/fintechPage/twoMobiles.svg" alt="Two Mobiles" width={547} height={677} className="w-[547px] h-[677px] object-cover block rounded-2xl" />
        </div>
        <div className="micro-img-raised">
          <Image src="/assets/fintechPage/mobileView.svg" alt="Mobile View" width={472} height={381} className="w-[472px] h-[381px] object-cover block rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
