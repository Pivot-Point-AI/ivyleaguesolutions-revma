export const smallBoxes = [
  { icon: "codeCircle.webp", title: "Custom Software\nDevelopment", slug: "custom-software-development" },
  { icon: "enterpriseIcon.webp", title: "Enterprise Solutions\n& ERP", slug: "enterprise-solutions" },
  { icon: "fintechIcon.webp", title: "Fintech &\nDigital Platforms", slug: "fintech-digital-platforms" },
  { icon: "aiIcon.webp", title: "AI Solutions &\nAutomation", slug: "ai-solutions" },
];

export const bigBoxes = [
  { title: "Digital\nInfrastructure\n& Cloud", slug: "digital-infrastructure" },
  { title: "API &\nIntegration\nServices", slug: "api-integration" },
];

export function nl2br(text) {
  return text.split("\n").map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ));
}
