import "../pagestyles/caseStudyStyle.css";
import { absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import CaseStudyClient from "../../components/case-study/CaseStudyClient";

export const metadata = {
  title: "Case Studies – Real Client Results",
  description:
    "Explore Ivy League Solutions client case studies covering mobile banking, ERP implementation, multi-currency payments, and healthcare platforms.",
  alternates: canonicalAlternates("/case-study"),
  openGraph: {
    title: "Case Studies | Ivy League Solutions",
    description:
      "Client case studies covering mobile banking, ERP implementation, multi-currency payments, and healthcare platforms with measurable outcomes.",
    url: absoluteUrl("/case-study"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: absoluteUrl("/case-study") },
  ],
};

export default function CaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudyClient />
    </>
  );
}
