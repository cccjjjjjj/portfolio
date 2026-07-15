import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Selected Work", description: "Selected product, analytics, and research work by Charles Jr Ancheta." };

export default function WorkPage() {
  return (
    <div className="work-index-page page-enter">
      <header className="work-index-heading"><h1 className="eyebrow">Selected work</h1><p>Five projects / 2023–2026</p></header>
      <ProjectList projects={getAllProjects()} />
    </div>
  );
}
