import "../../pagestyles/enterpriseSolutions.css";
import "../../pagestyles/enterprise.css";

import HeroSection from "../../../components/enterprise-solutions/HeroSection";
import PurpleBannerSection from "../../../components/enterprise-solutions/PurpleBannerSection";
import EaiSection from "../../../components/enterprise-solutions/EaiSection";
import ErpCrmSection from "../../../components/enterprise-solutions/ErpCrmSection";
import KeyBenefitsCurveSection from "../../../components/enterprise-solutions/KeyBenefitsCurveSection";
import CollabSection from "../../../components/enterprise-solutions/CollabSection";
import KeyBenefitsDottedLineSection from "../../../components/enterprise-solutions/KeyBenefitsDottedLineSection";
import BiAnalyticsSection from "../../../components/enterprise-solutions/BiAnalyticsSection";
import KeyBenefitsArrowSection from "../../../components/enterprise-solutions/KeyBenefitsArrowSection";
import CustomDevSection from "../../../components/enterprise-solutions/CustomDevSection";
import LegacyModernizationSection from "../../../components/enterprise-solutions/LegacyModernizationSection";
import KeyBenefitsBigLinesSection from "../../../components/enterprise-solutions/KeyBenefitsBigLinesSection";
import SecuritySection from "../../../components/enterprise-solutions/SecuritySection";
import KeyBenefitsLinePointsSection from "../../../components/enterprise-solutions/KeyBenefitsLinePointsSection";
import UxDesignSection from "../../../components/enterprise-solutions/UxDesignSection";
import KeyBenefitsCrossLineSection from "../../../components/enterprise-solutions/KeyBenefitsCrossLineSection";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";
import FAQSection from "../../../components/ui/FAQSection";
import RelatedLinks from "../../../components/shared/RelatedLinks";
import { ALL_SERVICES } from "../../../components/shared/relatedLinksData";

const otherServices = ALL_SERVICES.filter((s) => s.slug !== "enterprise-solutions");

export const metadata = {
  title: "Enterprise Solutions & ERP",
  description:
    "Enterprise application integration, ERP & CRM implementation (SAP, Oracle, Microsoft Dynamics), BI & analytics, custom development, and legacy modernization.",
  alternates: canonicalAlternates("/services/enterprise-solutions"),
  openGraph: {
    title: "Enterprise Solutions & ERP | Ivy League Solutions",
    description:
      "Enterprise application integration, ERP & CRM implementation, BI & analytics, custom development, and legacy modernization.",
    url: absoluteUrl("/services/enterprise-solutions"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Enterprise Solutions & ERP", path: "/services/enterprise-solutions" },
]);

const service = serviceJsonLd({
  name: "Enterprise Solutions & ERP",
  description:
    "Enterprise application integration, ERP & CRM implementation, BI & analytics, custom development, and legacy modernization.",
  path: "/services/enterprise-solutions",
  serviceType: "Enterprise Software & ERP Implementation",
});

const faqs = [
  {
    question: "Which ERP and CRM platforms do you implement?",
    answer:
      "We implement and integrate leading platforms including SAP, Oracle, and Microsoft Dynamics, tailoring configuration and workflows to match your existing business processes rather than forcing a generic setup.",
  },
  {
    question: "Can you connect our enterprise applications so they share data seamlessly?",
    answer:
      "Yes. Our enterprise application integration (EAI) work ties together ERP, CRM, and other business systems so data flows automatically between them, eliminating manual re-entry and inconsistent records.",
  },
  {
    question: "Do you provide BI and analytics on top of ERP data?",
    answer:
      "Yes. We build BI and analytics layers that turn ERP and CRM data into real-time dashboards and reports, giving decision-makers visibility without needing to pull data manually from multiple systems.",
  },
  {
    question: "Can you modernize legacy enterprise systems without a full rebuild?",
    answer:
      "Yes. Our legacy modernization approach incrementally re-architects and migrates aging enterprise systems, preserving critical business logic while removing the technical debt that slows your teams down.",
  },
];
const faq = faqJsonLd(faqs);

export default function EnterpriseSolutionsPage() {
  return (
<div className="bg-[#f8f8f8] overflow-x-hidden">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

    <HeroSection />

    <PurpleBannerSection />

    <EaiSection />

    <ErpCrmSection />

    <KeyBenefitsCurveSection />

    <CollabSection />

    <KeyBenefitsDottedLineSection />

    <BiAnalyticsSection />

    <KeyBenefitsArrowSection />

    <CustomDevSection />

    <LegacyModernizationSection />

    <KeyBenefitsBigLinesSection />

    <SecuritySection />

    <KeyBenefitsLinePointsSection />

    <UxDesignSection />

    <KeyBenefitsCrossLineSection />

    <RelatedLinks heading="Explore Other Services" items={otherServices} basePath="/services" tone="muted" />

    <FAQSection items={faqs} />

</div>


  );
}
