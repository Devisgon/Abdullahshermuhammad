import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';

const principles = [
  'Understand the workflow before choosing a tool.',
  'Define the trigger, data, rules, action and human handoff.',
  'Start with a contained use case that can be tested.',
  'Document the system so the team can operate it.',
];

export function AboutStory() {
  return <section className="pb-24">
    <Container className="max-w-[900px] space-y-6 text-lg leading-[1.75] text-muted">
      <p>A business does not need a bigger collection of disconnected tools. It needs a reliable way for information to move, decisions to be made and people to step in when their judgement matters.</p>
      <p>My background spans web applications, APIs, backends and cloud infrastructure. I use that experience to design useful automation across lead response, customer communication and internal operations. When existing platforms cover the need, I connect them. When they reach a limit, I build the missing software.</p>
      <h2 className="pt-5 text-3xl font-bold tracking-tight text-ink">How I approach the work</h2>
      <ul className="list-disc space-y-2 pl-6">{principles.map(principle => <li key={principle}>{principle}</li>)}</ul>
      <p>I’m based in Okara, Pakistan, and work with businesses internationally. I lead technical delivery through Devisgon, my software company.</p>
      <ButtonLink>Show me your workflow <ArrowUpRight size={18} /></ButtonLink>
    </Container>
  </section>;
}
