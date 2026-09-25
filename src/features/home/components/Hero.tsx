import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function Hero() {
  return <section aria-labelledby="hero-title">
    <Container className="grid items-center gap-12 py-16 lg:min-h-[750px] lg:grid-cols-[1fr_0.9fr] lg:gap-[5vw] lg:py-20">
      <div>
        <p className="mb-5 text-xs font-extrabold tracking-[0.15em] text-highlight uppercase"><span className="mr-2 inline-block h-0.5 w-6 align-middle bg-accent" />AI AUTOMATION FOR REAL BUSINESS WORK</p>
        <h1 id="hero-title" className="max-w-[710px] text-[clamp(3rem,5.1vw,5rem)] leading-[1.055] font-bold tracking-[-0.055em]">Stop paying people to do work <span className="text-highlight">software can do.</span></h1>
        <p className="mt-7 max-w-[620px] text-lg leading-[1.65] text-muted">I design AI automation for service businesses: systems that answer calls, follow up with leads, handle routine questions and move information between the tools your business already uses.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ButtonLink>Find my automation opportunities <ArrowUpRight size={18} /></ButtonLink>
          <a href="#how-it-works" className="inline-flex items-center gap-2 font-bold text-link hover:text-highlight">See how it works <ArrowRight size={17} /></a>
        </div>
        <p className="mt-4 text-sm text-muted">A short assessment · No obligation · Practical recommendations</p>
        <div className="mt-12 flex w-fit max-w-full items-center gap-3 border-t border-edge pt-6">
          <span aria-hidden="true" className="grid size-11 place-items-center rounded-full bg-selected text-xs font-extrabold text-link">ASM</span>
          <span className="flex flex-col gap-1">
            <strong className="text-sm">Abdullah Sher Muhammad</strong>
            <small className="text-xs text-muted">Software engineer · Founder, Devisgon</small>
          </span>
        </div>
      </div>
      <div className="relative h-[440px] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_60%_37%,#742185_0%,#40005b_46%,#290038_100%)] shadow-[0_28px_65px_#40005b1b] sm:h-[510px] md:h-[620px] lg:h-[630px]" aria-label="Illustrative professional portrait">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-b from-transparent to-[#1b002b9c]" />
        <div className="absolute inset-x-5 top-6 z-20 flex justify-between border-t border-white/40 pt-4 text-[8px] font-extrabold tracking-[0.16em] text-white sm:inset-x-8 sm:text-[10px]">
          <span>DEVISGON / AI SYSTEMS</span>
          <span>01 — 04</span>
        </div>
        <Image src="/images/executive-editorial-cutout.png" alt="Illustrative portrait of a business leader in a charcoal suit" width={1024} height={1536} priority unoptimized className="absolute right-[-8%] bottom-[-12%] z-10 h-[112%] w-auto max-h-none object-contain object-bottom drop-shadow-[0_20px_30px_#14001d59] sm:right-[-4%] sm:bottom-[-18%] sm:h-[118%] lg:right-[-3%] lg:bottom-[-25%] lg:h-[125%]" />
        <div className="absolute inset-x-5 bottom-6 z-20 flex items-end justify-between gap-3 border-t border-white/40 pt-4 text-[8px] leading-relaxed font-extrabold tracking-[0.12em] text-white sm:inset-x-8 sm:text-[10px]">
          <span>THOUGHTFUL SYSTEMS.<br />DECISIVE EXECUTION.</span>
          <span className="font-normal tracking-normal text-[#eadcec]">Illustrative portrait</span>
        </div>
      </div>
    </Container>
  </section>;
}
