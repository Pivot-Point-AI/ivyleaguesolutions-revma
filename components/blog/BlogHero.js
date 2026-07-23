import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="ind-hero-section">
      <Image src="/assets/industriesPage/herobgRight.svg" alt="" className="ind-hero-bg" aria-hidden="true" width={1305} height={735} preload={true} />
      <div className="ind-hero-max-w">
        <h1 className="ind-hero-heading">Ideas, Insights, And Practical<br />Knowledge</h1>
      </div>
    </section>
  );
}
