import { siteConfig } from "../lib/siteConfig";

// lastModified reflects the date each route's content was actually last
// changed (not build time), so crawlers get a meaningful freshness signal.
// Update a route's date here when its page content changes.
const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: "2026-08-12" },
  { path: "/about", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-08-12" },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6, lastModified: "2026-07-23" },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6, lastModified: "2026-08-12" },
  { path: "/services", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-12" },
  { path: "/services/custom-software-development", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/enterprise-solutions", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/fintech-digital-platforms", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/digital-infrastructure", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/digital-transformation", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/api-integration", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/services/ai-solutions", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/industries", changeFrequency: "monthly", priority: 0.9, lastModified: "2026-08-12" },
  { path: "/industries/fintech", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/industries/healthcare", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/industries/ecommerce", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/industries/logistics", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/industries/academia", changeFrequency: "monthly", priority: 0.8, lastModified: "2026-08-12" },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-23" },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3, lastModified: "2026-07-23" },
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
