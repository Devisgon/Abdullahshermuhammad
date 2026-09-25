import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';

const options = [
  { number: '01', title: 'AI Opportunity Assessment', price: 'Free', description: 'A short review of your workflow and an initial recommendation for where to start.' },
  { number: '02', title: 'First Workflow Sprint', price: 'Scoped proposal', description: 'One defined process, mapped, built, tested and documented after we agree on scope.' },
  { number: '03', title: 'Custom Implementation', price: 'Scoped proposal', description: 'A larger system involving integrations, agents, dashboards, voice or custom software.' },
];

export function EngagementOptions() {
  return <section className="pb-24">
    <Container>
      <div className="grid gap-5 md:grid-cols-3">{options.map(option => <article key={option.number} className="flex flex-col rounded-lg border border-[#e7dbe9] bg-white p-7">
          <span className="text-xs font-extrabold tracking-widest text-accent">{option.number} / OFFER</span>
          <h2 className="mt-8 text-2xl font-bold">{option.title}</h2>
          <strong className="mt-5 text-xl text-brand">{option.price}</strong>
          <p className="mt-4 flex-1 leading-relaxed text-muted">{option.description}</p>
          <ButtonLink className="mt-8 self-start">
            {option.number === '01' ? 'Take the free assessment' : 'Discuss this scope'}
            <ArrowUpRight size={17} />
          </ButtonLink>
        </article>)}</div>
      <p className="mt-5 text-xs text-muted">No price or delivery time is promised until a workflow is scoped. A 48-hour sprint is possible only for a suitably contained project.</p>
    </Container>
  </section>;
}
