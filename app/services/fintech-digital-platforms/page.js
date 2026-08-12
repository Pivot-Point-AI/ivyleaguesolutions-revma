import "../../pagestyles/fintech.css";
import HeroSection from "../../../components/fintech-digital-platforms/HeroSection";
import BannerSection from "../../../components/fintech-digital-platforms/BannerSection";
import DigitalConvenienceSection from "../../../components/fintech-digital-platforms/DigitalConvenienceSection";
import MicroBankSection from "../../../components/fintech-digital-platforms/MicroBankSection";
import WalletApplicationSection from "../../../components/fintech-digital-platforms/WalletApplicationSection";
import DigitalLendingVideoSection from "../../../components/fintech-digital-platforms/DigitalLendingVideoSection";
import CoreBankingApplicationSection from "../../../components/fintech-digital-platforms/CoreBankingApplicationSection";
import DigitalTransformationSection from "../../../components/fintech-digital-platforms/DigitalTransformationSection";
import WhyChooseSection from "../../../components/fintech-digital-platforms/WhyChooseSection";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";
import FAQSection from "../../../components/ui/FAQSection";
import RelatedLinks from "../../../components/shared/RelatedLinks";
import { ALL_SERVICES } from "../../../components/shared/relatedLinksData";

const otherServices = ALL_SERVICES.filter((s) => s.slug !== "fintech-digital-platforms");

export const metadata = {
  title: "Fintech & Digital Platforms",
  description:
    "Digital banking, micro-bank platforms, wallet applications, digital lending, and core banking systems built for security, compliance, and scale.",
  alternates: canonicalAlternates("/services/fintech-digital-platforms"),
  openGraph: {
    title: "Fintech & Digital Platforms | Ivy League Solutions",
    description:
      "Digital banking, micro-bank platforms, wallet applications, digital lending, and core banking systems built for security, compliance, and scale.",
    url: absoluteUrl("/services/fintech-digital-platforms"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Fintech & Digital Platforms", path: "/services/fintech-digital-platforms" },
]);

const service = serviceJsonLd({
  name: "Fintech & Digital Platforms",
  description:
    "Digital banking, micro-bank platforms, wallet applications, digital lending, and core banking systems built for security, compliance, and scale.",
  path: "/services/fintech-digital-platforms",
  serviceType: "Fintech Platform Development",
});

const faqs = [
  {
    question: "Can you build a digital banking or micro-bank platform from scratch?",
    answer:
      "Yes. We build full micro-bank platforms including account management, digital onboarding, and transaction processing, designed to meet security and compliance requirements from day one.",
  },
  {
    question: "Do you build custom wallet applications?",
    answer:
      "Yes. We develop wallet applications with secure balance management, peer-to-peer transfers, and integration with payment rails, built to scale with transaction volume.",
  },
  {
    question: "Can you build digital lending workflows?",
    answer:
      "Yes. We build digital lending platforms that automate application intake, credit assessment integration, and disbursement, reducing manual underwriting steps and speeding up loan turnaround.",
  },
  {
    question: "Do you modernize existing core banking systems?",
    answer:
      "Yes. We provide core banking application development and digital transformation services that modernize legacy banking infrastructure while maintaining compliance and operational continuity.",
  },
];
const faq = faqJsonLd(faqs);

export default function FintechServicePage() {
  return (
    <div className="bg-[#f8f8f8] fintech-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* HERO */}
      <HeroSection />

      {/* PURPLE BANNER */}
      <BannerSection />

      {/* DIGITAL CONVENIENCE */}
      <DigitalConvenienceSection />

      {/* MICRO BANK */}
      <MicroBankSection />

      {/* WALLET APPLICATION */}
      <WalletApplicationSection />

      {/* DIGITAL LENDING VIDEO */}
      <DigitalLendingVideoSection />

      {/* CORE BANKING APPLICATION */}
      <CoreBankingApplicationSection />

      {/* DIGITAL TRANSFORMATION */}
      <DigitalTransformationSection />

      {/* WHY CHOOSE IVY LEAGUE SOLUTIONS */}
      <WhyChooseSection />

      {/* RELATED SERVICES */}
      <RelatedLinks heading="Explore Other Services" items={otherServices} basePath="/services" tone="muted" />

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
