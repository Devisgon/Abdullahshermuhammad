import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { mainNavigation } from '@/content/navigation';
import { Container } from '@/components/ui/Container';
import { Brand } from './Brand';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-edge bg-surface">
    <Container className="flex h-[70px] items-center justify-between gap-3 sm:h-[78px] lg:gap-7">
      <Brand />
      <nav className="hidden items-center gap-4 text-sm font-semibold text-nav lg:flex xl:gap-7" aria-label="Main navigation">
        {mainNavigation.map(item => <Link href={item.href} key={item.href} className="hover:text-highlight focus-visible:text-highlight">{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3">
        <Link href="/assessment" aria-label="Find automation opportunities" className="inline-flex min-h-10 shrink-0 items-center gap-1 whitespace-nowrap rounded bg-action px-2 text-[10px] font-bold text-white hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight sm:gap-2 sm:px-4 sm:text-sm">
          <span className="hidden min-[360px]:inline">Find opportunities</span>
          <span className="min-[360px]:hidden">Assess</span>
          <ArrowUpRight size={15} />
        </Link>
        <ThemeToggle />
        <MobileMenu />
      </div>
    </Container>
  </header>;
}
