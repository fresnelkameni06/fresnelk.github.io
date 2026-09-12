import {notFound} from "next/navigation";
import {ProjectCase} from "@/components/portfolio/project-case";
import {projects} from "../../content";

export function generateStaticParams() {
  return projects.map(project => ({slug: project.slug}));
}

export default async function CaseStudyPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index < 0) notFound();
  return <ProjectCase project={projects[index]} nextProject={projects[(index + 1) % projects.length]}/>;
}
