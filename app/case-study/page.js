import "../pagestyles/caseStudyStyle.css";
import { absoluteUrl, canonicalAlternates } from "../../lib/siteConfig";
import CaseStudyClient from "../../components/case-study/CaseStudyClient";

export const metadata = {
  title: "Case Studies – Real Problems, Real Solutions, Real ROI",
  description:
    "Explore Ivy League Solutions client case studies covering mobile banking, ERP implementation, multi-currency payment infrastructure, and healthcare platforms with measurable business outcomes.",
  alternates: canonicalAlternates("/case-study"),
  openGraph: {
    title: "Case Studies – Real Problems, Real Solutions, Real ROI | Ivy League Solutions",
    description:
      "Explore Ivy League Solutions client case studies covering mobile banking, ERP implementation, multi-currency payment infrastructure, and healthcare platforms with measurable business outcomes.",
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
