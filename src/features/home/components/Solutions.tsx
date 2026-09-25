import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { homeServices } from '@/content/services';
import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';

export function Solutions() {
  return <section id="solutions" className="py-20 md:py-28">
    <Container>
      <SectionIntro eyebrow="WHAT I BUILD" title="Pick the problem." highlight="I’ll build around it.">Start with one workflow. Make it reliable. Expand when it earns its place.</SectionIntro>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{homeServices.map(({ icon: Icon, title, description, href, label }, index) => <Link href={href} key={href} className="group flex min-h-[300px] flex-col justify-between rounded-lg border border-[#e6dce8] bg-white p-7 transition-transform hover:-translate-y-1 hover:border-accent hover:shadow-[0_20px_45px_#40005b12]">
          <div className="flex items-start justify-between">
            <span className="grid size-12 place-items-center rounded-lg bg-[#eee0f2] text-brand">
              <Icon size={23} strokeWidth={1.65} />
            </span>
            <span className="text-xs font-bold text-[#978d9c]">0{index + 1}</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold text-accent">
            {label}
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1" />
          </span>
        </Link>)}</div>
    </Container>
  </section>;
}
