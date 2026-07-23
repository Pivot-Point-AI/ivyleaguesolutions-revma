import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f8f8] pt-[140px] pb-[60px] px-[20px]
                 sm:pt-[120px] sm:pb-[100px] sm:px-[40px]
                 lg:pt-[300px] lg:pb-[210px] lg:px-[140px]">
    <Image
        src="/assets/industriesPage/herobgRight.svg"
        alt=""
        className="ind-hero-bg"
        aria-hidden="true"
        width={1305}
        height={735}
        preload={true}
    />
    <div className="relative z-[1] max-w-[992px]">
        <h1 className="text-[#242424] font-normal
                    text-[32px] leading-[33px]
                    sm:text-[42px] sm:leading-[44px]
                    lg:text-[63px] lg:leading-[58px]
                    tracking-normal m-0">
            Powering your business with enterprise-grade applications
        </h1>
    </div>
</section>
  );
}
