import ServiceDetailPage from "../../../components/ServiceDetailPage";
import { absoluteUrl, canonicalAlternates } from "../../../lib/siteConfig";
import { breadcrumbJsonLd, serviceJsonLd, faqJsonLd } from "../../../lib/schema";

export const metadata = {
  title: "AI Solutions & Automation",
  description:
    "Custom LLM integrations, intelligent automation, predictive analytics, and AI-powered features — built into your products and operations.",
  alternates: canonicalAlternates("/services/ai-solutions"),
  openGraph: {
    title: "AI Solutions & Automation | Ivy League Solutions",
    description:
      "Custom LLM integrations, intelligent automation, predictive analytics, and AI-powered product features.",
    url: absoluteUrl("/services/ai-solutions"),
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Solutions & Automation", path: "/services/ai-solutions" },
]);

const service = serviceJsonLd({
  name: "AI Solutions & Automation",
  description:
    "Custom LLM integrations, intelligent automation, predictive analytics, and AI-powered product features.",
  path: "/services/ai-solutions",
  serviceType: "Artificial Intelligence and Automation Services",
});

const faqs = [
  {
    question: "What kind of AI solutions do you build?",
    answer:
      "We build custom AI features grounded in your business needs — LLM-powered assistants and chatbots, document and data extraction, predictive analytics, and workflow automation that removes manual, repetitive work.",
  },
  {
    question: "Can you integrate AI into an existing product or system?",
    answer:
      "Yes. We commonly add AI capabilities to existing applications, connecting to your current data sources and systems rather than requiring a rebuild, so you see value quickly without disrupting production.",
  },
  {
    question: "How do you handle data privacy and security with AI?",
    answer:
      "We design AI integrations with data governance in mind — scoping what data models can access, using secure API boundaries, and following your compliance requirements throughout.",
  },
  {
    question: "Do you offer ongoing support after an AI feature is launched?",
    answer:
      "Yes. AI systems need monitoring and tuning as usage and data evolve, so we offer ongoing support to track performance, refine prompts and models, and keep results reliable over time.",
  },
];
const faq = faqJsonLd(faqs);

export default function AiSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <ServiceDetailPage
        heroHeading="Build practical AI into your products and operations"
        bannerHeading="AI Solutions & Automation"
        bannerBody="We help businesses put AI to work where it actually moves the needle — inside products, workflows, and internal operations. From LLM-powered features to automation that eliminates manual work, we build AI systems that are reliable, secure, and scoped to real business outcomes."
        heroStats={[
          { value: "60%", label: "Reduction in Manual Work", icon: "zap" },
          { value: "25+", label: "AI Systems Shipped to Production", icon: "layers" },
          { value: "99.9%", label: "Model Uptime in Production", icon: "shield" },
        ]}
        sectionsAsCards
        sections={[
          {
            heading: "Custom AI Product Development",
            body: "From initial discovery and data assessment through model selection, engineering, and deployment, we build AI capabilities as production software — not one-off prototypes that stall after the demo.",
          },
          {
            heading: "LLM Integrations & AI Features",
            body: "We embed large language models into your applications to power assistants, search, summarization, and content generation — designed around your data and use case, not generic demos.",
          },
          {
            heading: "Intelligent Automation & Integrations",
            body: "We automate repetitive, rules-heavy workflows and connect disparate systems using a mix of AI and traditional logic, freeing your team from manual data entry, document processing, and routine decision-making.",
          },
          {
            heading: "Predictive Analytics",
            body: "We build models that turn your historical data into forward-looking insight — forecasting demand, flagging risk, and surfacing patterns your team can act on.",
          },
          {
            heading: "Industry-Specific AI",
            body: "Whether it's fraud detection and underwriting support for fintech, HIPAA-aware workflows for healthcare, or personalization and inventory intelligence for retail and e-commerce, we tailor AI systems to the compliance and operational realities of your sector.",
          },
          {
            heading: "AI System Integration",
            body: "We connect AI capabilities to your existing systems and data sources with proper security boundaries, monitoring, and evaluation, so results stay reliable in production.",
          },
        ]}
        whyHeading="Why Choose Ivy League Solutions"
        whyBody="We treat AI as an engineering discipline, not a novelty — pairing modern AI capabilities with the same rigor around security, scalability, and maintainability we bring to every system we build."
        ctaLabel="Discuss Your AI Needs"
        faqs={faqs}
        currentService="ai-solutions"
      />
    </>
  );
}
