import ServiceDetailPage from "../../../components/ServiceDetailPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "API & Integration Services",
  description:
    "Custom REST/GraphQL API development, third-party integration, system orchestration, and data synchronization — connecting every system reliably and securely.",
  alternates: canonicalAlternates("/services/api-integration"),
  openGraph: {
    title: "API & Integration Services | Ivy League Solutions",
    description:
      "Custom API development, third-party integration, system orchestration, and data synchronization services.",
    url: absoluteUrl("/services/api-integration"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "API & Integration Services", path: "/services/api-integration" },
]);

const service = serviceJsonLd({
  name: "API & Integration Services",
  description:
    "Custom REST/GraphQL API development, third-party integration, system orchestration, and data synchronization.",
  path: "/services/api-integration",
  serviceType: "API Development and Systems Integration",
});

const faqs = [
  {
    question: "Do you build REST or GraphQL APIs?",
    answer:
      "We build both, depending on your use case. Every API we deliver is documented, versioned, and designed with security, rate-limiting, and scalability in mind, so it holds up in production under real traffic.",
  },
  {
    question: "What third-party systems can you integrate with?",
    answer:
      "We regularly integrate payment gateways, CRMs, ERPs, and messaging platforms, handling authentication, data mapping, and error handling so the integration stays stable even as those third-party systems change.",
  },
  {
    question: "How do you keep data synchronized across multiple platforms?",
    answer:
      "We implement real-time and batch synchronization with monitoring and reconciliation, ensuring a single source of truth and catching discrepancies before they impact your business.",
  },
  {
    question: "Can you orchestrate workflows across systems that don't natively talk to each other?",
    answer:
      "Yes. We build middleware and event-driven integration layers that route data between disparate systems, eliminating manual handoffs and reducing the errors that come with them.",
  },
];
const faq = faqJsonLd(faqs);

export default function ApiIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <ServiceDetailPage
        heroHeading="Connect every system with reliable, secure API integrations"
        bannerHeading="Seamless Integration Services"
        bannerBody="We connect your applications, data sources, and third-party services into a unified ecosystem. From building custom APIs to integrating enterprise platforms, we make sure your systems talk to each other reliably and securely."
        heroStats={[
          { value: "200+", label: "Integrations Delivered", icon: "layers" },
          { value: "99.9%", label: "API Uptime", icon: "shield" },
          { value: "<200ms", label: "Average Response Time", icon: "clock" },
        ]}
        sectionsAsCards
        sections={[
          {
            heading: "API Development",
            body: "We design and build robust REST and GraphQL APIs that power your applications and expose your data safely to partners and customers. Every API is documented, versioned, and built with security, rate-limiting, and scalability in mind.",
          },
          {
            heading: "Third-Party Integration",
            body: "Connect to the tools your business already relies on — payment gateways, CRMs, ERPs, messaging platforms, and more. We handle authentication, data mapping, and error handling so integrations stay stable in production.",
          },
          {
            heading: "System Orchestration",
            body: "Tie disparate systems together with middleware and integration layers that route data where it needs to go. We build event-driven architectures and automated workflows that eliminate manual handoffs and reduce errors.",
          },
          {
            heading: "Data Synchronization",
            body: "Keep information consistent across every platform with real-time and batch synchronization. We ensure a single source of truth, with monitoring and reconciliation to catch discrepancies before they impact your business.",
          },
        ]}
        whyHeading="Why Choose Ivy League Solutions"
        whyBody="Our integration specialists bring deep experience across cloud platforms, enterprise systems, and modern API standards — delivering connected ecosystems that are secure, resilient, and built to scale."
        ctaLabel="Discuss Your Integration Needs"
        faqs={faqs}
        currentService="api-integration"
      />
    </>
  );
}
