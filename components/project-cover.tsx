import type { ProjectMeta } from "@/lib/projects";

export function ProjectCover({ project, compact = false }: { project: ProjectMeta; compact?: boolean }) {
  return (
    <div className={`project-cover project-cover--${project.accent} ${compact ? "project-cover--compact" : ""}`}>
      <div className="project-cover-grid" aria-hidden="true" />
      <span className="project-cover-index" aria-hidden="true">
        {String(project.order).padStart(2, "0")}
      </span>
      <div className="project-cover-copy">
        <span>{project.disciplines[0]}</span>
        <strong>{project.shortTitle}</strong>
        <span>{project.year}</span>
      </div>
    </div>
  );
}
