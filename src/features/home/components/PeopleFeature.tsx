import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function PeopleFeature() {
  return <section className="bg-[#f3edf5] py-20 md:py-28">
    <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-20">
      <div className="relative mx-auto h-[430px] w-full max-w-[520px] overflow-hidden rounded-lg bg-[linear-gradient(130deg,#4a075f,#2c003c)] md:h-[550px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-5 border border-white/30" />
        <Image src="/images/strategist-editorial-cutout.png" alt="Illustrative portrait of a strategist working at a laptop" width={1024} height={1536} unoptimized className="absolute inset-0 h-full w-full object-contain object-bottom" />
        <span className="absolute right-5 bottom-4 rounded bg-brand/80 px-2 py-1 text-xs text-white">Illustrative portrait</span>
      </div>
      <div>
        <p className="mb-5 text-xs font-extrabold tracking-widest text-accent">HUMANS IN THE LOOP</p>
        <h2 className="text-[clamp(2.5rem,4vw,4rem)] leading-[1.08] font-bold tracking-[-0.055em]">Give your team time for the work <span className="text-accent">that needs them.</span></h2>
        <p className="mt-6 leading-[1.75] text-muted">The system can take on the repetitive steps. Your people keep ownership of exceptions, relationships and decisions that need judgment.</p>
        <Link className="mt-7 inline-flex items-center gap-2 font-bold text-brand hover:text-accent" href="/ai-automation">See what can be automated <ArrowUpRight size={18} /></Link>
      </div>
    </Container>
  </section>;
}
