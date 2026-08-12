import "../pagestyles/contact.css";
import { siteConfig, absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import ContactClient from "../../components/contact/ContactClient";
import FAQSection from "../../components/ui/FAQSection";
import { faqJsonLd } from "../../lib/schema";

export const metadata = {
  title: "Contact Us – Get in Touch",
  description:
    "Contact Ivy League Solutions to discuss your custom software, fintech, or digital infrastructure project. Offices in the USA, UAE, and Pakistan.",
  alternates: canonicalAlternates("/contact"),
  openGraph: {
    title: "Contact Ivy League Solutions",
    description:
      "Get in touch with Ivy League Solutions to discuss your custom software, fintech, or digital infrastructure project.",
    url: absoluteUrl("/contact"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl("/contact") },
  ],
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ivy League Solutions",
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

const faqs = [
  {
    question: "How can I contact Ivy League Solutions?",
    answer:
      `Call us at ${siteConfig.phone}, email ${siteConfig.email}, or fill out the contact form on this page. We have offices in Perth Amboy USA, Dubai UAE, and Islamabad Pakistan.`,
  },
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We typically respond to new project inquiries within one business day. For urgent matters, calling our US number directly is the fastest way to reach us.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. Initial strategy calls to discuss your project scope, timeline, and requirements are free and come with no obligation.",
  },
  {
    question: "Can I work with your team remotely?",
    answer:
      "Yes. With offices across the USA, UAE, and Pakistan, we deliver projects fully remotely for clients anywhere, with overlapping working hours across US and international time zones.",
  },
];
const faq = faqJsonLd(faqs);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <ContactClient />
      <FAQSection items={faqs} />
    </>
  );
}
