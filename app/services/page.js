import { absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { smallBoxes, bigBoxes } from "../../components/services-listing/data";
import ServicesListingClient from "../../components/services-listing/ServicesListingClient";
import FAQSection from "../../components/ui/FAQSection";
import { faqJsonLd } from "../../lib/schema";

export const metadata = {
  title: "Our Services – Software, Fintech, Cloud & Integration",
  description:
    "Explore Ivy League Solutions' services: custom software development, enterprise solutions & ERP, fintech & digital platforms, digital infrastructure & cloud, and API & integration services.",
  alternates: canonicalAlternates("/services"),
  openGraph: {
    title: "Our Services | Ivy League Solutions",
    description:
      "Custom software development, enterprise solutions & ERP, fintech & digital platforms, digital infrastructure & cloud, and API & integration services.",
    url: absoluteUrl("/services"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
  ],
};

const services = [...smallBoxes, ...bigBoxes];
const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: service.title.replace(/\n/g, " "),
    url: absoluteUrl(`/services/${service.slug}`),
  })),
};

const faqs = [
  {
    question: "What services does Ivy League Solutions offer?",
    answer:
      "We provide custom software development, enterprise solutions & ERP implementation, fintech & digital platform engineering, digital infrastructure & cloud services, API & integration services, and end-to-end digital transformation consulting.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "It depends on your goal: building a new product calls for custom software development, modernizing internal operations points to enterprise solutions & ERP, and connecting existing systems points to API & integration services. Contact us and we'll help you scope the right starting point.",
  },
  {
    question: "Do you work with startups as well as large enterprises?",
    answer:
      "We primarily serve mid-to-large businesses that need scalable, production-grade systems, but our custom software and API integration services also fit fast-growing startups that need to move quickly without accumulating technical debt.",
  },
  {
    question: "Can multiple services be combined into a single engagement?",
    answer:
      "Yes. Many projects span several services at once — for example, a fintech platform build that also requires cloud infrastructure and third-party API integrations. We scope combined engagements under a single delivery team.",
  },
];
const faq = faqJsonLd(faqs);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <ServicesListingClient />
      <FAQSection items={faqs} />
    </>
  );
}
