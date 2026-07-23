import Link from "next/link";

export default function IndustriesCta() {
  return (
    <section className="ind-cta-section">
      <h2 className="ind-cta-heading">Let there be change</h2>
      <p className="ind-cta-body">
        No matter your industry, we bring the technical depth and domain expertise
        to help you modernize, scale, and compete. Let&apos;s explore how we can
        transform your business.
      </p>
      <Link href="/contact" className="ind-cta-btn">Discuss Your Industry</Link>
    </section>
  );
}
