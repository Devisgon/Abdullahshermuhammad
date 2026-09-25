import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/ButtonLink';

export function FinalCTA() {
  return <section className="bg-brand py-20 text-white md:py-24">
    <Container className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
      <div>
        <p className="mb-5 text-xs font-extrabold tracking-widest text-[#e6b5dd]">FREE AI OPPORTUNITY ASSESSMENT</p>
        <h2 className="max-w-[740px] text-[clamp(2.5rem,4vw,4rem)] leading-[1.08] font-bold tracking-[-0.055em]">What is your team still doing <span className="text-[#e6b5dd]">manually?</span></h2>
        <p className="mt-5 max-w-[640px] leading-relaxed text-[#eadcec]">Tell me about one slow process and the tools involved. I’ll look for a sensible place to start.</p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <ButtonLink light>Find my automation opportunities <ArrowUpRight size={18} /></ButtonLink>
        <small className="text-[#eadcec]">No credit card · No obligation</small>
        <Link href="/book-call" className="text-sm font-bold underline underline-offset-4">Request a 15-minute review →</Link>
      </div>
    </Container>
  </section>;
}
