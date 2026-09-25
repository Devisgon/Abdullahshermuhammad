import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';

const stages = ['Trigger', 'Context', 'Decision', 'Action', 'Human handoff'];

export function Method() {
  return <section id="how-it-works" className="bg-brand py-20 text-white md:py-28">
    <Container className="grid gap-12 lg:grid-cols-2 lg:gap-24">
      <div>
        <p className="mb-5 text-xs font-extrabold tracking-[0.15em] text-[#e6b5dd]">THE METHOD</p>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[1.08] font-bold tracking-[-0.055em]">AI is one piece.<br /><span className="text-[#e6b5dd]">The workflow is the system.</span></h2>
        <p className="mt-6 max-w-[550px] leading-[1.75] text-[#eadcec]">I map what starts the process, where information lives, what gets decided, what action follows and where a person takes over. Then I build and test the smallest useful version.</p>
        <ButtonLink href="/about" light className="mt-8">How I work <ArrowUpRight size={18} /></ButtonLink>
      </div>
      <div className="border-t border-white/30">{stages.map((stage, index) => <div key={stage} className="flex items-center gap-5 border-b border-white/30 py-5">
          <span className="text-xs text-[#dba5e4]">0{index + 1}</span>
          <strong className="flex-1 text-xl">{stage}</strong>
          <MoveRight size={19} className="text-[#dba5e4]" />
        </div>)}</div>
    </Container>
  </section>;
}
