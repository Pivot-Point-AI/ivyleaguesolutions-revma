import "../../pagestyles/healthcareIndusrty.css";
import IndustryPage from "../../../components/IndustryPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Healthcare Software Development",
  description:
    "HIPAA-compliant healthcare technology: patient management systems, telemedicine platforms, health record systems, and clinic management software built by Ivy League Solutions.",
  alternates: canonicalAlternates("/industries/healthcare"),
  openGraph: {
    title: "Healthcare Software Development | Ivy League Solutions",
    description:
      "Patient management systems, telemedicine platforms, health record systems, and clinic management software built to HIPAA standards.",
    url: absoluteUrl("/industries/healthcare"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Healthcare", path: "/industries/healthcare" },
]);

const service = serviceJsonLd({
  name: "Healthcare Software Development",
  description:
    "Patient management systems, telemedicine platforms, health record systems, and clinic management software built to HIPAA and data privacy standards.",
  path: "/industries/healthcare",
  serviceType: "Healthcare Technology Software Development",
});

const faqs = [
  {
    question: "Is your healthcare software HIPAA-compliant?",
    answer:
      "Yes. Every patient management system, telemedicine platform, and health record system we build follows HIPAA and data privacy standards from the ground up, with encrypted storage, audit logging, and strict access controls.",
  },
  {
    question: "Can you unify patient records across multiple facilities?",
    answer:
      "Yes. We've unified electronic health records for 14+ clinics under a single system, eliminating fragmented patient data and improving interoperability between previously disconnected systems.",
  },
  {
    question: "How much can a digital health platform reduce patient wait times?",
    answer:
      "Clients implementing our scheduling and clinic workflow automation have seen up to a 62% reduction in patient wait times and 3x improvement in patient throughput, by removing manual bottlenecks in intake and scheduling.",
  },
  {
    question: "Do you support telemedicine and remote patient monitoring?",
    answer:
      "Yes. We build virtual classroom-style telemedicine platforms alongside real-time health monitoring dashboards, giving clinical staff live visibility into patient status without requiring an in-person visit.",
  },
];
const faq = faqJsonLd(faqs);

export default function HealthcareIndustry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <IndustryPage
        heroHeading={<>Technology That<br />Improves Patient Care</>}
        bannerHeading="Digital Health Platform"
        bannerBody="Patient management systems, telemedicine platforms, health record systems, and clinic management software — built to HIPAA and data privacy standards."
        buildSub="From electronic health records and telemedicine to clinic workflow automation and patient engagement apps — we build healthcare systems that put patients first."
        problems={[
          "Fragmented patient records across facilities",
          "Long wait times and scheduling inefficiency",
          "Compliance risk with sensitive health data",
          "Poor interoperability between systems",
          "Manual reporting consuming clinical staff time",
        ]}
        results={[
          "62% reduction in patient wait times",
          "14 clinics unified under one system",
          "3x patient throughput improvement",
          "HIPAA-compliant data architecture",
          "Real-time health monitoring dashboards",
        ]}
        ctaHeading="Ready to Shape the Future of Healthcare?"
        ctaBody="Let's work together to build a smarter, more connected health ecosystem."
        ctaButtonText="Discuss Your HealthTech Project"
        faqs={faqs}
      />
    </>
  );
}
