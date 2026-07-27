import ServiceDetailPage from "../../../components/ServiceDetailPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Digital Transformation Services",
  description:
    "End-to-end digital transformation: digital strategy, process automation, cloud adoption, and data & insights from Ivy League Solutions, turning transformation ambitions into measurable results.",
  alternates: canonicalAlternates("/services/digital-transformation"),
  openGraph: {
    title: "Digital Transformation Services | Ivy League Solutions",
    description:
      "Digital strategy, process automation, cloud adoption, and data & insights that turn transformation ambitions into measurable results.",
    url: absoluteUrl("/services/digital-transformation"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Digital Transformation", path: "/services/digital-transformation" },
]);

const service = serviceJsonLd({
  name: "Digital Transformation Services",
  description:
    "Digital strategy, process automation, cloud adoption, and data & insights that turn transformation ambitions into measurable results.",
  path: "/services/digital-transformation",
  serviceType: "Digital Transformation Consulting",
});

const faqs = [
  {
    question: "Where should a digital transformation initiative start?",
    answer:
      "It starts with a clear digital strategy. We assess your current systems, identify opportunities, and define a pragmatic roadmap that aligns technology investment with your business goals before any implementation begins.",
  },
  {
    question: "What kinds of processes can you automate?",
    answer:
      "We target manual, repetitive work across your organization — streamlining workflows, integrating systems, and deploying automation tooling that frees your teams to focus on higher-value work and reduces operational cost.",
  },
  {
    question: "How do you approach cloud migration?",
    answer:
      "We migrate applications and infrastructure to scalable, secure cloud platforms, re-architecting where it matters most, so you gain resilience, flexibility, and lower total cost of ownership without unnecessary risk.",
  },
  {
    question: "Can you help us make better use of our data?",
    answer:
      "Yes. We build analytics platforms and dashboards that surface real-time insight from your existing data, enabling faster, better-informed decisions across your organization.",
  },
];
const faq = faqJsonLd(faqs);

export default function DigitalTransformationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <ServiceDetailPage
        heroHeading="Reinvent how your business operates in a digital-first world"
        bannerHeading="End-to-End Digital Transformation"
        bannerBody="We help organizations modernize processes, adopt new technologies, and build the digital foundations they need to compete. From strategy through execution, we turn transformation ambitions into measurable results."
        heroStats={[
          { value: "40+", label: "Transformation Projects Led", icon: "trending" },
          { value: "45%", label: "Average Efficiency Gain", icon: "zap" },
          { value: "12+", label: "Years Guiding Digital Change", icon: "clock" },
        ]}
        sectionsAsCards
        sections={[
          {
            heading: "Digital Strategy",
            body: "Transformation starts with a clear roadmap. We assess your current systems, identify opportunities, and define a pragmatic strategy that aligns technology investment with your business goals and delivers value at every step.",
          },
          {
            heading: "Process Automation",
            body: "Eliminate manual, repetitive work with intelligent automation. We streamline workflows, integrate systems, and deploy tooling that frees your teams to focus on higher-value work — driving efficiency and reducing operational cost.",
          },
          {
            heading: "Cloud Adoption",
            body: "Move to the cloud with confidence. We migrate applications and infrastructure to scalable, secure cloud platforms, re-architecting where it matters so you gain resilience, flexibility, and lower total cost of ownership.",
          },
          {
            heading: "Data & Insights",
            body: "Turn your data into a competitive advantage. We build analytics platforms and dashboards that surface real-time insight, enabling faster, better-informed decisions across your organization.",
          },
        ]}
        whyHeading="Why Choose Ivy League Solutions"
        whyBody="We combine strategic thinking with hands-on engineering to deliver transformation that sticks — modernizing your operations, empowering your teams, and positioning your business to lead in a fast-changing market."
        ctaLabel="Start Your Transformation"
        faqs={faqs}
      />
    </>
  );
}
