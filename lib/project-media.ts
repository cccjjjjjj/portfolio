import { withBasePath } from "@/lib/site";

export type ProjectMedia = { src: string; alt: string };

export const projectMedia: Record<string, ProjectMedia[]> = {
  grace: [
    { src: "/images/projects/grace/home.png", alt: "Grace purchase readiness home screen" },
    { src: "/images/projects/grace/detail.png", alt: "Grace purchase detail screen" },
    { src: "/images/projects/grace/deadlines.png", alt: "Grace deadlines screen" },
  ],
  "vast-challenge-2026": [
    { src: "/images/projects/vast/timeline.png", alt: "VAST Challenge communication timeline" },
    { src: "/images/projects/vast/network.png", alt: "VAST Challenge channel mix analysis" },
    { src: "/images/projects/vast/leak-chain.png", alt: "VAST Challenge information leak analysis" },
  ],
  "motor-insurance": [
    { src: "/images/projects/motor/triage.png", alt: "Motor insurance policy triage heatmap" },
    { src: "/images/projects/motor/driver-age.png", alt: "Motor insurance driver age analysis" },
    { src: "/images/projects/motor/loyalty.png", alt: "Motor insurance loyalty comparison" },
  ],
  "poverty-forecasting": [
    { src: "/images/projects/research/poverty-cover.jpg", alt: "Satellite-inspired view of poverty forecasting in the Philippines" },
  ],
  "enso-forecasting": [
    { src: "/images/projects/research/enso-cover.jpg", alt: "Ocean temperature patterns inspired by ENSO forecasting" },
  ],
};

export function getProjectMedia(slug: string) {
  return (projectMedia[slug] ?? []).map((item) => ({ ...item, src: withBasePath(item.src) }));
}
