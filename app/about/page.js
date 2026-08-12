import "../pagestyles/AboutStyle.css";
import { siteConfig, absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import { teamMembers } from "../../components/about/data";
import AboutClient from "../../components/about/AboutClient";
import FAQSection from "../../components/ui/FAQSection";
import { faqJsonLd } from "../../lib/schema";

export const metadata = {
  title: "About Us – Our Story, Team & Mission",
  description:
    "Ivy League Solutions delivers enterprise systems, fintech platforms, and digital infrastructure. Learn about our team, mission, and track record across the USA, UAE, and Pakistan.",
  alternates: canonicalAlternates("/about"),
  openGraph: {
    title: "About Ivy League Solutions",
    description:
      "Learn about Ivy League Solutions' mission, team, and track record delivering enterprise software, fintech platforms, and digital infrastructure worldwide.",
    url: absoluteUrl("/about"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "About", item: absoluteUrl("/about") },
  ],
};

const faqs = [
  {
    question: "Where is Ivy League Solutions based?",
    answer:
      "We're headquartered in Perth Amboy, New Jersey, USA, with additional offices in Dubai, UAE, and Islamabad, Pakistan, giving us delivery coverage across US, Middle East, and South Asian working hours.",
  },
  {
    question: "How experienced is the Ivy League Solutions team?",
    answer:
      "Our engineering teams bring deep, hands-on experience delivering enterprise systems, fintech platforms, and digital infrastructure for mid-to-large businesses across Asia, the Middle East, Europe, Australia, and North America.",
  },
  {
    question: "What makes Ivy League Solutions different from other software vendors?",
    answer:
      "We measure success by the business outcome a project creates, not just the code delivered — every engagement is scoped around efficiency, accuracy, and growth metrics our clients can point to.",
  },
];
const faq = faqJsonLd(faqs);

const teamJsonLd = teamMembers.map((member) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: member.name,
  jobTitle: member.role,
  image: absoluteUrl(member.img),
  worksFor: { "@id": `${siteConfig.url}/#organization` },
}));

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      <AboutClient />
      <FAQSection items={faqs} />
    </>
  );
}
