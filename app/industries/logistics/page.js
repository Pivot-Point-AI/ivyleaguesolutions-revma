import "../../pagestyles/logisticIndustry.css";
import IndustryPage from "../../../components/IndustryPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Logistics & Supply Chain Software",
  description:
    "Smart logistics platforms: fleet tracking, warehouse management, supply chain optimization, and delivery management systems built by Ivy League Solutions for logistics operators.",
  alternates: canonicalAlternates("/industries/logistics"),
  openGraph: {
    title: "Logistics & Supply Chain Software | Ivy League Solutions",
    description:
      "Fleet tracking, warehouse management, supply chain optimization, and delivery management platforms for logistics operators.",
    url: absoluteUrl("/industries/logistics"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
  { name: "Logistics", path: "/industries/logistics" },
]);

const service = serviceJsonLd({
  name: "Logistics & Supply Chain Software",
  description:
    "Fleet tracking, warehouse management, supply chain optimization, and delivery management platforms for logistics operators.",
  path: "/industries/logistics",
  serviceType: "Logistics Software Development",
});

const faqs = [
  {
    question: "Can you provide real-time visibility into fleet operations?",
    answer:
      "Yes. We build fleet tracking platforms with real-time GPS and telemetry data, giving operators live visibility across their entire fleet instead of relying on manual check-ins or delayed reporting.",
  },
  {
    question: "How much can logistics software reduce manual processes?",
    answer:
      "Clients implementing our warehouse automation and route optimization tools have seen up to an 85% reduction in manual processes, freeing staff from repetitive inventory and dispatch tasks.",
  },
  {
    question: "Can you integrate warehouse and delivery systems that are currently disconnected?",
    answer:
      "Yes. We build integration layers that connect warehouse management, order fulfillment, and last-mile delivery into one platform, which has helped clients achieve 99.5% order accuracy and 50% faster delivery turnaround.",
  },
  {
    question: "Do you support predictive demand planning?",
    answer:
      "Yes. We build analytics into supply chain platforms that forecast demand from historical and real-time data, helping operators plan inventory and routes proactively rather than reactively.",
  },
];
const faq = faqJsonLd(faqs);

export default function LogisticsIndustry() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <IndustryPage
        heroHeading={<>Smart Systems For<br />Complex Supply Chains</>}
        bannerHeading="Smart Logistics Solutions"
        bannerBody="Fleet tracking, warehouse management, supply chain optimization, and delivery management platforms for logistics operators."
        buildSub="From fleet management and route optimization to warehouse automation and last-mile delivery — we build logistics platforms that bring visibility and control."
        problems={[
          "Manual inventory tracking causing costly errors",
          "No real-time visibility into fleet operations",
          "Slow, error-prone order fulfillment",
          "Disconnected warehouse and delivery systems",
          "Lack of predictive demand planning",
        ]}
        results={[
          "85% reduction in manual processes",
          "Real-time tracking across entire fleet",
          "$4.8M in annual cost savings",
          "99.5% order accuracy rate",
          "50% faster delivery turnaround",
        ]}
        ctaHeading="Ready to Optimize Your Operations?"
        ctaBody="Let’s collaborate to build a more efficient, transparent, and responsive supply chain."
        ctaButtonText="Discuss Your Logistics Project"
        faqs={faqs}
      />
    </>
  );
}
