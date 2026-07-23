import Image from "next/image";

export default function IndustriesHero() {
  return (
    <section className="ind-hero-section">
      <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="ind-hero-max-w">
        <h1 className="ind-hero-heading">Domain expertise that<br />enables your reinvention</h1>
      </div>
    </section>
  );
}
