import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { industryNavigation } from '@/content/navigation';
import { Brand } from './Brand';

const footerLink = 'text-sm text-[#dfcce5] hover:text-white';

export function SiteFooter() {
  return <footer className="bg-[#270038] pt-20 pb-24 text-white md:pb-14">
    <Container>
      <div className="grid gap-12 border-b border-white/20 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Brand footer />
          <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-[#dfcce5]">Useful AI and automation, built around how your business actually works.</p>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="mb-2 text-xs font-extrabold tracking-widest text-[#dba5e4]">EXPLORE</span>
          <Link className={footerLink} href="/services">All solutions</Link>
          <Link className={footerLink} href="/assessment">Free assessment</Link>
          <Link className={footerLink} href="/case-studies">Selected work</Link>
          <Link className={footerLink} href="/pricing">Engagement options</Link>
          <Link className={footerLink} href="/faq">FAQ</Link>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="mb-2 text-xs font-extrabold tracking-widest text-[#dba5e4]">WORK TOGETHER</span>
          <Link className={footerLink} href="/contact">Contact Abdullah</Link>
          <Link className={footerLink} href="/book-call">Request a review</Link>
          <Link className={footerLink} href="/partners">Agency partnerships</Link>
          <a className={`${footerLink} inline-flex items-center gap-1`} href="https://www.linkedin.com/in/abdullahshermuhammad/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          <a className={`${footerLink} inline-flex items-center gap-1`} href="https://devisgon.com" target="_blank" rel="noopener noreferrer">Devisgon <ArrowUpRight size={14} /></a>
        </div>
        <div className="flex flex-col items-start gap-3">
          <span className="mb-2 text-xs font-extrabold tracking-widest text-[#dba5e4]">INDUSTRIES</span>
          <Link className={footerLink} href="/industries">All industries</Link>
          {industryNavigation.map(item => <Link key={item.href} className={footerLink} href={item.href}>{item.label}</Link>)}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-4 pt-6 text-xs text-[#c7b4cc]">
        <span>© {new Date().getFullYear()} Abdullah Sher Muhammad.</span>
        <Link href="/privacy" className="hover:text-white">Privacy</Link>
        <span>Software engineer · Founder, Devisgon</span>
      </div>
    </Container>
  </footer>;
}
