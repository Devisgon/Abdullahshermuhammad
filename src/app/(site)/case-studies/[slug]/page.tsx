import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectPath, projects, projectsBySlug } from '@/content/projects';
import { ProjectDetail } from '@/features/case-studies/components/ProjectDetail';
import { createPageMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) return {};
  return createPageMetadata({ title: project.shortTitle, description: project.summary, path: projectPath(slug) });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
