import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#f8f8f8] pt-[280px] pb-[180px] px-[140px]">
      <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="di-hero-max-w">
        <h1 className="text-display text-[#242424] font-normal m-0">
          Flexible And Scalable Cloud Solutions For Modern Businesses
        </h1>
      </div>
    </section>
  );
}
