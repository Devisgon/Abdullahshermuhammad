import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';

const process = [
  ['01 / UNDERSTAND', 'Show me the bottleneck.', 'Tell me where enquiries, calls, support requests or information currently get stuck.'],
  ['02 / DESIGN', 'Map the first workflow.', 'We define the trigger, tools, rules, exceptions and what your team should still own.'],
  ['03 / BUILD', 'Start small and test.', 'Build a contained version, check edge cases, document it and decide what deserves expansion.'],
];

export function ProcessSteps() {
  return <section className="py-20 md:py-28">
    <Container>
      <SectionIntro eyebrow="THE FIRST STEP" title="One process." highlight="A practical plan." />
      <div className="grid gap-6 md:grid-cols-3">{process.map(([step, title, detail]) => <article key={step} className="border-t-2 border-brand pt-7">
          <span className="text-xs font-extrabold tracking-widest text-accent">{step}</span>
          <h3 className="mt-7 text-2xl font-bold">{title}</h3>
          <p className="mt-4 leading-relaxed text-muted">{detail}</p>
        </article>)}</div>
    </Container>
  </section>;
}
