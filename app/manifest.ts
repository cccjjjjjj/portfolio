import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Charles Jr Ancheta Portfolio",
    short_name: "CJA Portfolio",
    description: "Project management, data analytics, and RegTech portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#090b0d",
    theme_color: "#090b0d",
  };
}
