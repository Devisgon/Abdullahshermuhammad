import { CalendarDays, Check, Phone, UserRoundCheck, ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Callout } from '@/components/ui/Callout';
import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';
import type { Industry } from '@/content/industries';

export function IndustryPageView({ industry }: { industry: Industry }) {
  const events = [
    { Icon: Phone, title: 'New customer enquiry', detail: 'Call or website form' },
    { Icon: UserRoundCheck, title: 'Details captured', detail: 'Service · location · urgency' },
    { Icon: CalendarDays, title: 'Next step routed', detail: 'Team receives the context' },
  ];
  return <main>
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-extrabold tracking-widest text-highlight">AI AUTOMATION FOR {industry.name}</p>
          <h1 className="text-[clamp(2.8rem,4.5vw,4.7rem)] leading-[1.07] font-bold tracking-[-0.055em]">{industry.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{industry.intro}</p>
          <ButtonLink className="mt-8">
            {industry.cta}
            <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
        <div className="rounded-lg bg-brand p-8 text-white shadow-[0_24px_60px_#40005b20]">
          <p className="mb-7 text-xs font-extrabold tracking-widest text-[#e6b5dd]">WHEN YOUR TEAM IS BUSY</p>
          {events.map(({ Icon, title, detail }, index) => <div key={title} className="mb-3 flex items-center gap-5 rounded bg-white/10 p-5">
            <Icon size={24} className="text-[#e6b5dd]" />
            <div className="flex flex-1 flex-col gap-1">
              <strong>{title}</strong>
              <small className="text-[#eadcec]">{detail}</small>
            </div>
            <span className="text-xs text-[#e6b5dd]">0{index + 1}</span>
          </div>)}
        </div>
      </Container>
    </section>
    <section className="bg-subtle-strong py-16">
      <Container>
        <p className="mb-4 text-xs font-extrabold tracking-widest text-highlight">THE COST OF A SLOW HANDOFF</p>
        <h2 className="max-w-[900px] text-3xl leading-snug font-bold tracking-tight md:text-4xl">{industry.pain}</h2>
      </Container>
    </section>
    <section className="py-20 md:py-28">
      <Container>
        <SectionIntro eyebrow="WHERE TO START" title="One call or lead type." highlight="One clear next step." />
        <div className="grid gap-3 md:grid-cols-2">{industry.uses.map((use, index) => <div key={use} className="flex items-center gap-5 rounded border border-edge bg-panel p-6">
            <span className="text-xs font-bold text-highlight">0{index + 1}</span>
            <h3 className="flex-1 text-lg font-bold">{use}</h3>
            <Check size={18} className="text-highlight" />
          </div>)}</div>
        <Callout title="What happens when a customer reaches out and no one is free?" description="Tell me your current process and I’ll map where an automation could help." cta={industry.cta} />
      </Container>
    </section>
  </main>;
}
