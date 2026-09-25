import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Callout } from '@/components/ui/Callout';

const stages = [
  ['01 / SCOPE', 'Define the outcome', 'We clarify the workflow, tools, constraints, acceptance criteria and delivery boundaries.'],
  ['02 / BUILD', 'Deliver the technical work', 'Automation, agents, voice workflows, APIs and software development, scoped to the project.'],
  ['03 / HANDOFF', 'Keep ownership clear', 'Your client relationship stays yours. We agree on communication and handoff before work begins.'],
];

export function PartnershipProcess() {
  return <section className="pb-24">
    <Container>
      <SectionIntro eyebrow="A PRACTICAL PARTNERSHIP" title="Bring the opportunity." highlight="Get a clear delivery plan." />
      <div className="grid gap-5 md:grid-cols-3">{stages.map(([number, title, description]) => <FeatureCard key={number} number={number} title={title} description={description} />)}</div>
      <Callout title="Have a client asking for AI or automation?" description="Tell me what they need and what your team can already deliver." cta="Discuss a delivery project" />
    </Container>
  </section>;
}
