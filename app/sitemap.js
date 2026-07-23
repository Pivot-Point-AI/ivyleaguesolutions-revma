import { siteConfig } from "../lib/siteConfig";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/custom-software-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/enterprise-solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/fintech-digital-platforms", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/digital-infrastructure", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/digital-transformation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/api-integration", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/ai-solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries/fintech", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/healthcare", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/ecommerce", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/logistics", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/academia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
