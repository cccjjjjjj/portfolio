import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ProjectJourney } from "@/components/project-journey";
import { TransitionLink } from "@/components/transition-link";
import { getProjectJourney } from "@/lib/project-journeys";
import { getAllProjects, getProject } from "@/lib/projects";

export function generateStaticParams() { return getAllProjects().map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.summary, openGraph: { title: project.title, description: project.summary, type: "article" } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const journey = getProjectJourney(project.slug);
  if (!journey) notFound();
  const projects = getAllProjects();
  const nextProject = projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  return (
    <article className="guided-case page-enter">
      <header className="guided-case-header">
        <TransitionLink href="/work" className="case-back">← All work</TransitionLink>
        <div className="guided-case-title">
          <div><p className="eyebrow">{project.status}</p><h1>{project.shortTitle}</h1></div>
          <p>{journey.lede}</p>
        </div>
        <dl className="project-ownership" aria-label="Project ownership">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Team</dt><dd>{project.team}</dd></div>
          <div><dt>Year</dt><dd>{project.year}</dd></div>
        </dl>
        <ul className="project-results" aria-label="Project evidence">
          {journey.results.map((result) => <li key={result.label}><span>{result.label}</span><strong>{result.value}</strong></li>)}
        </ul>
      </header>

      <ProjectJourney slug={project.slug} journey={journey} />

      <section className="case-finding" aria-label="Project conclusion">
        <p className="eyebrow">04 · Resolution</p>
        <p>{journey.steps[3].title}</p>
      </section>

      <section className="case-evidence" aria-labelledby="evidence-title">
        <details>
          <summary><span id="evidence-title">Evidence and technical details</span><span aria-hidden="true">+</span></summary>
          <div className="case-evidence-layout">
            <dl>
              <div><dt>Tools</dt><dd>{project.tools.join(", ")}</dd></div>
            </dl>
            <div className="prose"><MDXRemote source={project.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />{project.externalUrl ? <p className="external-project-link"><a href={project.externalUrl} target="_blank" rel="noreferrer">{project.externalLabel ?? "Visit project"} <span aria-hidden="true">↗</span></a></p> : null}</div>
          </div>
        </details>
      </section>

      <footer className="guided-next"><p className="eyebrow">Next project</p><TransitionLink href={`/work/${nextProject.slug}`}><span>{nextProject.shortTitle}</span><span aria-hidden="true">↗</span></TransitionLink></footer>
    </article>
  );
}
