import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#f8f8f8] pt-[300px] pb-[210px] px-[140px]">
      <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="hero-max-w">
        <h1 className="text-display text-[#242424] font-normal m-0">
          Progressive banking solutions for modern financial institutions
        </h1>
      </div>
    </section>
  );
}
