import "../pagestyles/industriesStyle.css";
import IndustriesHero from "../../components/industries-listing/IndustriesHero";
import IndustriesBanner from "../../components/industries-listing/IndustriesBanner";
import IndustriesAccordion from "../../components/industries-listing/IndustriesAccordion";
import IndustriesCta from "../../components/industries-listing/IndustriesCta";
import { absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { breadcrumbJsonLd, faqJsonLd } from "../../lib/schema";
import FAQSection from "../../components/ui/FAQSection";

export const metadata = {
  title: "Industries We Serve",
  description:
    "Ivy League Solutions builds industry-specific software for fintech, healthcare, e-commerce, logistics, and academia that solves real operational challenges.",
  alternates: canonicalAlternates("/industries"),
  openGraph: {
    title: "Industries We Serve | Ivy League Solutions",
    description:
      "Software built for fintech, healthcare, e-commerce, logistics, and academia — solving industry-specific operational challenges.",
    url: absoluteUrl("/industries"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
]);

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { name: "Fintech", path: "/industries/fintech" },
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "E-Commerce", path: "/industries/ecommerce" },
    { name: "Logistics", path: "/industries/logistics" },
    { name: "Academia", path: "/industries/academia" },
  ].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: absoluteUrl(item.path),
  })),
};

const faqs = [
  {
    question: "Which industries does Ivy League Solutions build software for?",
    answer:
      "We deliver industry-specific platforms for fintech, healthcare, e-commerce, logistics, and academia (EdTech) — each built around the compliance, workflow, and scale requirements unique to that sector.",
  },
  {
    question: "Do you have experience with industry compliance requirements?",
    answer:
      "Yes. Our fintech work follows financial compliance and security standards, our healthcare platforms are built to HIPAA and data privacy requirements, and our education platforms follow accessibility standards for student-facing systems.",
  },
  {
    question: "Can you build for an industry not listed here?",
    answer:
      "Our core engineering approach — enterprise integration, custom software, and cloud infrastructure — applies well beyond these five verticals. Contact us to discuss your specific industry and requirements.",
  },
];
const faq = faqJsonLd(faqs);

export default function IndustriesPage() {
  return (
    <div className="ind-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* HERO */}
      <IndustriesHero />

      {/* PURPLE BANNER */}
      <IndustriesBanner />

      {/* ACCORDION */}
      <IndustriesAccordion />

      {/* CTA */}
      <IndustriesCta />

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
