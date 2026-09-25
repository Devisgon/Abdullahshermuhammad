import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';

const problems = [
  ['01', 'A lead lands in an inbox', 'A reply waits until someone is free.'],
  ['02', 'A call goes unanswered', 'The customer tries the next business.'],
  ['03', 'Someone copies the details', 'The same information enters three tools.'],
  ['04', 'The follow-up is forgotten', 'Good enquiries go quiet without a next step.'],
];

export function Bottlenecks() {
  return <section id="problems" className="bg-[#f4f0f5] py-20 md:py-28">
    <Container>
      <SectionIntro eyebrow="THE EVERYDAY BOTTLENECK" title="Work keeps moving." highlight="Your systems don’t.">Most teams already have enough software. The expensive part is what happens in the gaps between their tools.</SectionIntro>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{problems.map(([number, title, detail]) => <article key={number} className="min-h-56 rounded-lg border border-[#e8ddec] bg-white p-7">
          <span className="text-xs font-extrabold tracking-widest text-accent">{number}</span>
          <h3 className="mt-9 text-xl font-bold tracking-tight">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{detail}</p>
        </article>)}</div>
      <p className="mt-8 text-sm leading-relaxed text-muted">The goal is a clear next step for every lead, call and customer request. <Link href="/assessment" className="inline-flex items-center gap-1 font-bold text-brand hover:text-accent">Find where to start <ArrowUpRight size={16} /></Link></p>
    </Container>
  </section>;
}
