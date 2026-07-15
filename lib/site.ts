export const siteConfig = {
  name: "Charles Jr Ancheta",
  shortName: "CJA",
  title: "Charles Jr Ancheta | Project Management, Data Analytics, RegTech",
  description:
    "Singapore-based project management and data analytics professional working across delivery, fintech, and regulatory technology.",
  location: "Singapore",
  availability: "Available December 2026",
  email: "charlesancheta26@gmail.com",
  linkedin: "https://www.linkedin.com/in/cjancheta/",
};

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
