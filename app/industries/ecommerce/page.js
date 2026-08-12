import "../../pagestyles/ecommerceIndustry.css";
import IndustryPage from "../../../components/IndustryPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "E-Commerce Software Development",
  description:
    "High-performance e-commerce platforms: multi-vendor marketplaces, inventory management, order processing systems, and personalized shopping experiences.",
  alternates: canonicalAlternates("/industries/ecommerce"),
  openGraph: {
    title: "E-Commerce Software Development | Ivy League Solutions",
    description:
      "Multi-vendor marketplaces, inventory management, order processing systems, and personalized shopping experiences that convert.",
    url: absoluteUrl("/industries/ecommerce"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "E-Commerce", path: "/industries/ecommerce" },
]);

const service = serviceJsonLd({
  name: "E-Commerce Software Development",
  description:
    "Multi-vendor marketplaces, inventory management, order processing systems, and personalized shopping experiences.",
  path: "/industries/ecommerce",
  serviceType: "E-Commerce Platform Development",
});

const faqs = [
  {
    question: "Can my e-commerce platform handle traffic spikes during sales events?",
    answer:
      "Yes. We architect for peak load from day one, with auto-scaling infrastructure and load testing built into our process — clients typically see a 10x increase in traffic capacity without platform crashes during flash sales or seasonal peaks.",
  },
  {
    question: "How quickly can new vendors be onboarded to a multi-vendor marketplace?",
    answer:
      "We've reduced vendor onboarding from 2 weeks to as little as 24 hours by automating verification, catalog setup, and payment configuration, so marketplace growth isn't bottlenecked by manual processes.",
  },
  {
    question: "Can you unify inventory across multiple sales channels?",
    answer:
      "Yes. We build inventory management systems that sync stock levels in real time across your website, marketplaces, and physical locations, eliminating overselling and giving you a single source of truth.",
  },
  {
    question: "How do you improve conversion rates on an existing e-commerce site?",
    answer:
      "We focus on personalized shopping experiences, streamlined checkout, and performance optimization — our clients typically see up to 3x conversion improvement and a 45% increase in average order value after a rebuild.",
  },
];
const faq = faqJsonLd(faqs);

export default function EcommerceIndustry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <IndustryPage
        heroHeading={<>High-Performance Platforms<br />That Drive Conversions</>}
        bannerHeading="Scalable Commerce Solutions"
        bannerBody="Multi-vendor marketplaces, inventory management, order processing systems, and personalized shopping experiences that convert."
        buildSub="From fleet management and route optimization to warehouse automation and last-mile delivery — we build logistics platforms that bring visibility and control."
        problems={[
          "Platform crashes during peak traffic",
          "Slow vendor onboarding killing marketplace growth",
          "Poor conversion rates on existing platform",
          "Fragmented inventory across channels",
          "Lack of personalized shopping experiences",
        ]}
        results={[
          "10x traffic capacity increase",
          "24-hour vendor onboarding (from 2 weeks)",
          "3x conversion improvement",
          "Unified inventory across all channels",
          "45% increase in average order value",
        ]}
        ctaHeading="Ready to Scale Your Digital Presence?"
        ctaBody="Let’s work together to build a shopping experience that delights your customers and drives growth."
        ctaButtonText="Discuss Your E-commerce Project"
        faqs={faqs}
        currentIndustry="ecommerce"
      />
    </>
  );
}
