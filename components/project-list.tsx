import { TransitionLink } from "@/components/transition-link";
import { getProjectJourney } from "@/lib/project-journeys";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectList({ projects }: { projects: ProjectMeta[] }) {
  return (
    <ol className="title-project-list">
      {projects.map((project, index) => {
        const journey = getProjectJourney(project.slug);
        return <li key={project.slug}><TransitionLink href={`/work/${project.slug}`}><span className="project-list-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h2>{journey?.indexTitle ?? project.shortTitle}</h2><p>{(journey?.indexTags ?? [project.year, ...project.disciplines.slice(0, 2)]).join(" / ")}</p></TransitionLink></li>;
      })}
    </ol>
  );
}
