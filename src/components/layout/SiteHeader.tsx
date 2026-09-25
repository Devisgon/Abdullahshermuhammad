import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '@/content/navigation';
import { Container } from '@/components/ui/Container';
import { Brand } from './Brand';
import { MobileMenu } from './MobileMenu';

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-[#eae3ed] bg-surface">
    <Container className="flex h-[70px] items-center justify-between gap-3 sm:h-[78px] lg:gap-7">
      <Brand />
      <nav className="hidden items-center gap-4 text-sm font-semibold text-[#544c59] lg:flex xl:gap-7" aria-label="Main navigation">
        {mainNavigation.map(item => <Link href={item.href} key={item.href} className="hover:text-accent focus-visible:text-accent">{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href="/assessment" className="inline-flex min-h-10 items-center gap-1 rounded bg-brand px-2 text-[10px] font-bold text-white hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:gap-2 sm:px-4 sm:text-sm">Find opportunities <ArrowUpRight size={15} /></Link>
        <MobileMenu />
      </div>
    </Container>
  </header>;
}
