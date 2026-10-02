import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { projectCategories, projectPath, projects } from '@/content/projects';

export function AutomationProjects() {
  return <section aria-labelledby="automation-projects-heading" className="pb-20">
    <Container>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold tracking-widest text-highlight">AUTOMATION PORTFOLIO</p>
          <h2 id="automation-projects-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">22 projects, six areas of work</h2>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-muted">Open a project to see its workflow, scope and tools. The categories show each project’s primary focus.</p>
      </div>

      <nav aria-label="Project sections" className="mb-16 flex flex-wrap gap-2">
        {projectCategories.map(category => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-edge bg-panel px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight">
          {category.title} <span className="text-muted">({projects.filter(project => project.category === category.id).length})</span>
        </a>)}
      </nav>

      <div className="space-y-20">
        {projectCategories.map(category => {
          const entries = projects.map((project, index) => ({ project, number: index + 1 })).filter(({ project }) => project.category === category.id);
          return <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`} className="scroll-mt-28">
            <div className="mb-7 border-b border-edge pb-5">
              <p className="text-xs font-extrabold tracking-widest text-highlight">{String(entries.length).padStart(2, '0')} PROJECT{entries.length === 1 ? '' : 'S'}</p>
              <h3 id={`${category.id}-heading`} className="mt-2 text-3xl font-bold tracking-tight">{category.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-muted">{category.description}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {entries.map(({ project, number }) => <article key={project.slug} className="h-full">
                <Link href={projectPath(project.slug)} aria-label={`Read project ${number}: ${project.title}`} className="group flex h-full flex-col rounded-lg border border-edge bg-panel p-6 transition-colors hover:border-highlight hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight">
                  <div className="flex items-center justify-between gap-4 text-xs font-extrabold tracking-widest text-highlight">
                    <span>PROJECT {String(number).padStart(2, '0')}</span><ArrowUpRight size={19} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h4 className="mt-5 text-xl font-bold leading-snug tracking-tight">{project.title}</h4>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
                  <p className="mt-6 border-t border-edge pt-4 text-xs leading-relaxed text-muted"><span className="font-bold text-highlight">TOOLS</span><br />{project.stack.join(' · ')}</p>
                  <span className="mt-4 text-sm font-bold text-highlight">View project <span aria-hidden="true">→</span></span>
                </Link>
              </article>)}
            </div>
          </section>;
        })}
      </div>
    </Container>
  </section>;
}
