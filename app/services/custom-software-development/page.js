import ServiceDetailPage from "../../../components/ServiceDetailPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "Custom Software Development",
  description:
    "Custom software built around your business: bespoke development, web & mobile apps, product modernization, and ongoing partnership.",
  alternates: canonicalAlternates("/services/custom-software-development"),
  openGraph: {
    title: "Custom Software Development | Ivy League Solutions",
    description:
      "Bespoke development, web & mobile apps, product modernization, and ongoing partnership for scalable custom software.",
    url: absoluteUrl("/services/custom-software-development"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Custom Software Development", path: "/services/custom-software-development" },
]);

const service = serviceJsonLd({
  name: "Custom Software Development",
  description:
    "Bespoke development, web & mobile apps, product modernization, and ongoing partnership for scalable custom software.",
  path: "/services/custom-software-development",
  serviceType: "Custom Software Development",
});

const faqs = [
  {
    question: "Why choose custom software over off-the-shelf products?",
    answer:
      "Off-the-shelf software rarely fits your exact workflows. Custom development is built from the ground up around your processes and existing systems, so it scales with your business instead of forcing you to adapt to generic features.",
  },
  {
    question: "Do you build both web and mobile applications?",
    answer:
      "Yes. We deliver progressive web apps as well as native iOS and Android experiences, with a design-led approach that keeps every interface responsive, accessible, and built to convert.",
  },
  {
    question: "Can you modernize our legacy software without disrupting operations?",
    answer:
      "Yes. We refactor legacy codebases and migrate to modern frameworks and cloud infrastructure incrementally, re-architecting systems for reliability while keeping your day-to-day operations running.",
  },
  {
    question: "What happens after the software is launched?",
    answer:
      "We provide ongoing partnership through continuous support, iterative improvements, and dedicated maintenance, so the product keeps pace with your business and your users' expectations well after launch.",
  },
];
const faq = faqJsonLd(faqs);

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <ServiceDetailPage
        heroHeading="Custom software built around your business, not the other way around"
        bannerHeading="Tailored Software Solutions"
        bannerBody="We design and build custom software that fits your exact workflows — from internal tools and automation to full-scale customer-facing platforms. Every solution is engineered for performance, scalability, and long-term maintainability."
        heroStats={[
          { value: "150+", label: "Custom Solutions Delivered", icon: "briefcase" },
          { value: "98%", label: "On-Time Delivery Rate", icon: "clock" },
          { value: "12+", label: "Years of Engineering Experience", icon: "trending" },
        ]}
        sectionsAsCards
        sections={[
          {
            heading: "Bespoke Development",
            body: "Off-the-shelf software rarely fits perfectly. We build applications from the ground up around your processes, integrating with your existing systems and scaling as your business grows. Our engineering teams work in agile sprints, giving you visibility and control at every stage.",
          },
          {
            heading: "Web & Mobile Apps",
            body: "From progressive web apps to native iOS and Android experiences, we deliver responsive, high-performance products your customers love. Our design-led approach ensures every interface is intuitive, accessible, and built to convert.",
          },
          {
            heading: "Product Modernization",
            body: "Breathe new life into aging software. We refactor legacy codebases, migrate to modern frameworks and cloud infrastructure, and re-architect systems for reliability — without disrupting your day-to-day operations.",
          },
          {
            heading: "Ongoing Partnership",
            body: "Great software is never truly finished. We provide continuous support, iterative improvements, and dedicated maintenance so your product keeps pace with your business and your users' expectations.",
          },
        ]}
        whyHeading="Why Choose Ivy League Solutions"
        whyBody="With deep engineering expertise, a proven delivery process, and a commitment to measurable outcomes, we turn complex challenges into reliable, scalable software that drives real business value."
        ctaLabel="Discuss Your Software Project"
        faqs={faqs}
        currentService="custom-software-development"
      />
    </>
  );
}
