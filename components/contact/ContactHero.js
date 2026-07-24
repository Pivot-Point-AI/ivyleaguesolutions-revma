import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="contact-hero-section relative overflow-hidden bg-[#F8F8F8] pt-[300px] pb-[210px] px-[140px]">
      <Image src="/assets/industriesPage/herobgRight.webp" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="contact-hero-max-w">
        <h1 className="contact-text-display text-[#242424] font-normal m-0">
          We&apos;re Here To Connect And Assist You
        </h1>
      </div>
    </section>
  );
}
