import { ArrowUpRight, Check } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionIntro } from '@/components/ui/SectionIntro';
import type { OfferPage } from '@/content/offers';
import { OfferVisual } from './OfferVisual';

export function OfferPageView({ page }: { page: OfferPage }) {
  return <main>
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 text-xs font-extrabold tracking-widest text-accent">{page.eyebrow}</p>
          <h1 className="text-[clamp(2.8rem,4.5vw,4.7rem)] leading-[1.07] font-bold tracking-[-0.055em]">{page.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{page.description}</p>
          <ButtonLink className="mt-8">
            {page.cta}
            <ArrowUpRight size={18} />
          </ButtonLink>
          <small className="mt-4 block text-muted">Start with a short assessment · No obligation</small>
        </div>
        <OfferVisual kind={page.visual} />
      </Container>
    </section>
    <section className="bg-[#f2eaf3] py-16">
      <Container>
        <p className="mb-4 text-xs font-extrabold tracking-widest text-accent">WHERE THE WORK BREAKS</p>
        <h2 className="max-w-[900px] text-3xl leading-snug font-bold tracking-tight md:text-4xl">{page.problem}</h2>
      </Container>
    </section>
    <section className="py-20 md:py-28">
      <Container>
        <SectionIntro eyebrow="THE FIRST VERSION" title="A clear process from" highlight="trigger to handoff." />
        <div className="grid gap-5 md:grid-cols-3">{page.steps.map(([title, description], index) => <FeatureCard key={title} number={`0${index + 1} / ${title.toUpperCase()}`} title={title} description={description} />)}</div>
        <div className="mt-20 grid gap-8 rounded-lg bg-[#f3edf5] p-8 md:grid-cols-2 md:p-12">
          <div>
            <p className="text-xs font-extrabold tracking-widest text-accent">COMMON STARTING POINTS</p>
            <h2 className="mt-6 text-3xl font-bold">Start where the work <span className="text-accent">repeats.</span></h2>
          </div>
          <div className="grid gap-4">{page.examples.map(example => <span key={example} className="flex items-center gap-3 font-semibold">
              <Check size={17} className="text-accent" />
              {example}
            </span>)}</div>
        </div>
        <p className="mt-4 text-xs text-muted">{page.note}</p>
        <div className="mt-16 rounded-lg bg-brand p-8 text-white md:p-12">
          <p className="text-xs font-extrabold tracking-widest text-[#e6b5dd]">YOUR WORKFLOW, NOT A GENERIC DEMO</p>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Bring me the process.<br /><span className="text-[#e6b5dd]">I’ll map the first version.</span></h2>
          <p className="mt-5 text-[#eadcec]">Share where the work starts, what tools are involved and where your team gets stuck.</p>
          <ButtonLink light className="mt-7">
            {page.cta}
            <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
      </Container>
    </section>
  </main>;
}
