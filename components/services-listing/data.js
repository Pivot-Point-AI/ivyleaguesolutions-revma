export const smallBoxes = [
  { icon: "codeCircle.svg", title: "Custom Software\nDevelopment", slug: "custom-software-development" },
  { icon: "enterpriseIcon.svg", title: "Enterprise Solutions\n& ERP", slug: "enterprise-solutions" },
  { icon: "fintechIcon.svg", title: "Fintech &\nDigital Platforms", slug: "fintech-digital-platforms" },
  { icon: "aiIcon.svg", title: "AI Solutions &\nAutomation", slug: "ai-solutions" },
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
