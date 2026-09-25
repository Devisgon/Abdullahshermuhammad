import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';

const skills = ['n8n', 'APIs', 'Next.js', 'Node.js', 'FastAPI', 'AWS'];

export function AboutPreview() {
  return <section className="py-20 md:py-28">
    <Container className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
      <div className="flex min-h-[430px] flex-col items-center justify-center rounded-lg bg-[radial-gradient(circle_at_50%_40%,#812291,#40005b_70%)] text-white">
        <span aria-label="ASM" className="inline-flex items-center text-[clamp(6rem,15vw,12rem)] leading-none font-extrabold tracking-[-0.1em]">
          <span aria-hidden="true">A</span>
          <span aria-hidden="true" className="relative z-10 inline-block origin-center rotate-[8deg]">S</span>
          <span aria-hidden="true" className="-ml-[0.05em]">M</span>
        </span>
        <small className="text-xs font-extrabold tracking-[0.25em] text-[#e6b5dd]">BUILD THE WORKFLOW.</small>
      </div>
      <div>
        <p className="mb-5 text-xs font-extrabold tracking-widest text-accent">THE PERSON BEHIND THE SYSTEM</p>
        <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[1.08] font-bold tracking-[-0.055em]">Engineering depth.<br /><span className="text-accent">Business-first thinking.</span></h2>
        <p className="mt-6 leading-[1.75] text-muted">I’m Abdullah Sher Muhammad, a software engineer and the founder of Devisgon. I work across APIs, web applications, cloud infrastructure and automation, so a solution can go beyond a prompt or a disconnected tool.</p>
        <div className="mt-6 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded border border-[#e5d8e8] px-3 py-1.5 text-xs font-bold text-brand">{skill}</span>)}</div>
        <Link className="mt-7 inline-flex items-center gap-2 font-bold text-brand hover:text-accent" href="/about">Meet Abdullah <ArrowUpRight size={18} /></Link>
      </div>
    </Container>
  </section>;
}
