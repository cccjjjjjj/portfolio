import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  order: number;
  year: string;
  status: string;
  disciplines: string[];
  summary: string;
  role: string;
  team: string;
  tools: string[];
  accent: "copper" | "sage" | "blue" | "violet" | "sand";
  externalUrl?: string;
  externalLabel?: string;
};

export type Project = ProjectMeta & {
  content: string;
};

function parseProject(fileName: string): Project {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(projectsDirectory, fileName), "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: String(data.title),
    shortTitle: String(data.shortTitle ?? data.title),
    order: Number(data.order),
    year: String(data.year),
    status: String(data.status),
    disciplines: Array.isArray(data.disciplines) ? data.disciplines.map(String) : [],
    summary: String(data.summary),
    role: String(data.role),
    team: String(data.team),
    tools: Array.isArray(data.tools) ? data.tools.map(String) : [],
    accent: data.accent ?? "copper",
    externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
    externalLabel: data.externalLabel ? String(data.externalLabel) : undefined,
    content,
  };
}

export function getAllProjects(): ProjectMeta[] {
  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(parseProject)
    .sort((a, b) => a.order - b.order)
    .map((project) => ({
      slug: project.slug,
      title: project.title,
      shortTitle: project.shortTitle,
      order: project.order,
      year: project.year,
      status: project.status,
      disciplines: project.disciplines,
      summary: project.summary,
      role: project.role,
      team: project.team,
      tools: project.tools,
      accent: project.accent,
      externalUrl: project.externalUrl,
      externalLabel: project.externalLabel,
    }));
}

export function getProject(slug: string): Project | undefined {
  const fileName = `${slug}.mdx`;
  if (!fs.existsSync(path.join(projectsDirectory, fileName))) return undefined;
  return parseProject(fileName);
}
