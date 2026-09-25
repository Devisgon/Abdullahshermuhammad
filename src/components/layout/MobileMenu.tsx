'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { mainNavigation, solutionNavigation, industryNavigation } from '@/content/navigation';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  const close = () => setOpen(false);

  return <div className="lg:hidden">
    <button type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(value => !value)} className="grid size-10 place-items-center rounded border border-[#d8c4de] bg-white text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
    {open && <>
      <button type="button" aria-label="Close navigation" onClick={close} className="fixed inset-x-0 top-[70px] bottom-0 z-30 bg-[#1c082770] sm:top-[78px]" />
      <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute top-[70px] right-0 z-40 flex max-h-[calc(100dvh-70px)] w-[min(390px,100vw)] flex-col overflow-y-auto bg-white px-7 py-5 shadow-[0_22px_50px_#21002d27] sm:top-[78px] sm:max-h-[calc(100dvh-78px)]">
        <Link href="/services" onClick={close} className="flex min-h-11 items-center justify-between border-b border-[#eee4f0] font-extrabold text-brand">All solutions <ArrowUpRight size={16} /></Link>
        {solutionNavigation.map(item => <Link href={item.href} key={item.href} onClick={close} className="flex min-h-11 items-center border-b border-[#eee4f0] text-sm font-semibold text-[#32283a] hover:text-accent">{item.label}</Link>)}
        <Link href="/industries" onClick={close} className="flex min-h-11 items-center justify-between border-b border-[#eee4f0] font-extrabold text-brand">Industries <ArrowUpRight size={16} /></Link>
        {industryNavigation.map(item => <Link href={item.href} key={item.href} onClick={close} className="flex min-h-11 items-center border-b border-[#eee4f0] text-sm font-semibold text-[#32283a] hover:text-accent">{item.label}</Link>)}
        {mainNavigation.slice(2).map(item => <Link href={item.href} key={item.href} onClick={close} className="flex min-h-11 items-center border-b border-[#eee4f0] text-sm font-semibold text-[#32283a] hover:text-accent">{item.label}</Link>)}
        {[{ href: '/faq', label: 'FAQ' }, { href: '/partners', label: 'For agencies' }, { href: '/contact', label: 'Contact' }].map(item => <Link href={item.href} key={item.href} onClick={close} className="flex min-h-11 items-center border-b border-[#eee4f0] text-sm font-semibold text-[#32283a] hover:text-accent">{item.label}</Link>)}
      </nav>
    </>}
  </div>;
}
