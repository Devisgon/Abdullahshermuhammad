import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Callout } from '@/components/ui/Callout';
import { type Project, projectCategories, projectPath, projects } from '@/content/projects';

export function ProjectDetail({ project }: { project: Project }) {
  const category = projectCategories.find(item => item.id === project.category)!;
  const number = projects.indexOf(project) + 1;
  const related = projects.filter(item => item.category === project.category && item.slug !== project.slug).slice(0, 3);

  return <main>
    <Container className="pt-16 pb-24 md:pt-24">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-muted">
        <Link href="/case-studies/" className="hover:text-highlight">All projects</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/case-studies/#${category.id}`} className="hover:text-highlight">{category.title}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page" className="text-ink">Project {String(number).padStart(2, '0')}</span>
      </nav>

      <header className="mt-12 max-w-5xl">
        <p className="text-xs font-extrabold uppercase tracking-widest text-highlight">PROJECT {String(number).padStart(2, '0')} · {category.title}</p>
        <h1 className="mt-5 text-[clamp(2.3rem,4vw,4.3rem)] font-bold leading-[1.1] tracking-[-0.045em]">{project.title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
      </header>

      <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,350px)]">
        <div className="space-y-12">
          <section aria-labelledby="project-overview-heading">
            <h2 id="project-overview-heading" className="text-2xl font-bold tracking-tight">Project overview</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{project.context}</p>
          </section>
          <section aria-labelledby="project-workflow-heading">
            <h2 id="project-workflow-heading" className="text-2xl font-bold tracking-tight">How the workflow is structured</h2>
            <ol className="mt-6 space-y-4">
              {project.workflow.map((step, index) => <li key={step} className="flex gap-4 rounded-lg border border-edge bg-panel p-5">
                <span className="shrink-0 text-sm font-extrabold text-highlight">{String(index + 1).padStart(2, '0')}</span>
                <p className="leading-relaxed text-muted">{step}</p>
              </li>)}
            </ol>
          </section>
          {project.note && <section aria-labelledby="project-scope-heading" className="rounded-lg border border-edge bg-subtle p-6">
            <h2 id="project-scope-heading" className="text-lg font-bold">Scope of the documented work</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.note}</p>
          </section>}
        </div>

        <aside className="h-fit rounded-lg border border-edge bg-panel p-6">
          <h2 className="text-lg font-bold">Tools and platforms</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map(tool => <li key={tool} className="rounded-full border border-edge bg-subtle px-3 py-1.5 text-sm text-ink">{tool}</li>)}
          </ul>
          <p className="mt-7 border-t border-edge pt-5 text-sm leading-relaxed text-muted">Project descriptions focus on the supplied workflow and materials. No commercial performance figures are claimed without measured evidence.</p>
        </aside>
      </div>

      {related.length > 0 && <section aria-labelledby="related-projects-heading" className="mt-20">
        <h2 id="related-projects-heading" className="text-2xl font-bold tracking-tight">More in {category.title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {related.map(item => <Link key={item.slug} href={projectPath(item.slug)} className="group flex items-start justify-between gap-4 rounded-lg border border-edge bg-panel p-5 font-semibold hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight">
            <span>{item.shortTitle}</span><ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
          </Link>)}
        </div>
      </section>}

      <Link href="/case-studies/" className="mt-12 inline-flex items-center gap-2 font-bold text-highlight hover:underline"><ArrowLeft size={18} aria-hidden="true" /> Back to all projects</Link>
      <Callout title="Have a workflow like this?" description="Tell me which tools need to connect and where your team still has to move information by hand." cta="Discuss your workflow" />
    </Container>
  </main>;
}
