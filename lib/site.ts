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
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return configuredUrl;

  const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
  if (process.env.GITHUB_ACTIONS === "true" && owner && repository) {
    return repository.endsWith(".github.io")
      ? `https://${repository}`
      : `https://${owner}.github.io/${repository}`;
  }

  return "http://localhost:3000";
}

export function getBasePath() {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  const isProjectPages = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io");
  return isProjectPages ? `/${repository}` : "";
}

export function withBasePath(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${getBasePath()}${path}`;
}
