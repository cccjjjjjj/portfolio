import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { getSiteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const routes = ["", "/work", "/profile", "/contact"];
  return [
    ...routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date("2026-07-14") })),
    ...getAllProjects().map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date("2026-07-14"),
    })),
  ];
}
