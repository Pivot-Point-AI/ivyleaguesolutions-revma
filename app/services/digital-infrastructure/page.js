import "../../pagestyles/digitalInfrastructure.css";
import HeroSection from "../../../components/digital-infrastructure/HeroSection";
import BannerSection from "../../../components/digital-infrastructure/BannerSection";
import CloudModelsSection from "../../../components/digital-infrastructure/CloudModelsSection";
import CloudServicesSection from "../../../components/digital-infrastructure/CloudServicesSection";
import WhyChooseUsSection from "../../../components/digital-infrastructure/WhyChooseUsSection";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";
import FAQSection from "../../../components/ui/FAQSection";
import RelatedLinks from "../../../components/shared/RelatedLinks";
import { ALL_SERVICES } from "../../../components/shared/relatedLinksData";

const otherServices = ALL_SERVICES.filter((s) => s.slug !== "digital-infrastructure");

export const metadata = {
  title: "Digital Infrastructure & Cloud",
  description:
    "Cloud migration, managed infrastructure, and scalable architecture on AWS, Azure, and Google Cloud — built for reliability, security, and performance.",
  alternates: canonicalAlternates("/services/digital-infrastructure"),
  openGraph: {
    title: "Digital Infrastructure & Cloud Services | Ivy League Solutions",
    description:
      "Cloud migration, managed infrastructure, and scalable architecture on AWS, Azure, and Google Cloud.",
    url: absoluteUrl("/services/digital-infrastructure"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Digital Infrastructure & Cloud", path: "/services/digital-infrastructure" },
]);

const service = serviceJsonLd({
  name: "Digital Infrastructure & Cloud Services",
  description:
    "Cloud migration, managed infrastructure, and scalable architecture on AWS, Azure, and Google Cloud.",
  path: "/services/digital-infrastructure",
  serviceType: "Cloud Infrastructure Services",
});

const faqs = [
  {
    question: "Which cloud providers do you support?",
    answer:
      "We build and manage infrastructure on AWS, Azure, and Google Cloud, choosing the platform — or a multi-cloud approach — that best fits your workloads, compliance needs, and existing vendor relationships.",
  },
  {
    question: "What cloud deployment models do you support?",
    answer:
      "We support public, private, and hybrid cloud models, helping you choose the right mix of scalability and control based on your data sensitivity, compliance requirements, and cost constraints.",
  },
  {
    question: "How do you handle cloud migration without downtime?",
    answer:
      "We use phased migration plans that run new infrastructure alongside existing systems, validating performance and reliability before cutover, so critical workloads stay available throughout the transition.",
  },
  {
    question: "Do you provide ongoing infrastructure management after migration?",
    answer:
      "Yes. We offer managed infrastructure services covering monitoring, security patching, and scaling, so your cloud environment stays reliable and performant long after the initial migration is complete.",
  },
];
const faq = faqJsonLd(faqs);

export default function DigitalInfrastructurePage() {
  return (
    <div className="bg-[#f8f8f8] di-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />

      {/* HERO */}
      <HeroSection />

      {/* PURPLE BANNER */}
      <BannerSection />

      {/* CLOUD MODELS */}
      <CloudModelsSection />

      {/* MOST USED CLOUD SERVICES */}
      <CloudServicesSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* RELATED SERVICES */}
      <RelatedLinks heading="Explore Other Services" items={otherServices} basePath="/services" tone="muted" />

      {/* FAQ */}
      <FAQSection items={faqs} />
    </div>
  );
}
