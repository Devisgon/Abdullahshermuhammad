import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function FeatureCard({ number, title, description, href, label }: {
  number: string;
  title: string;
  description: string;
  href?: string;
  label?: string;
}) {
  const content = <>
    <span className="text-xs font-extrabold tracking-widest text-accent">{number}</span>
    <h3 className="mt-7 text-2xl font-bold tracking-tight">{title}</h3>
    <p className="mt-4 flex-1 leading-relaxed text-muted">{description}</p>
    {href && <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand">
      {label ?? 'Explore this workflow'}
      <ArrowUpRight size={17} />
    </span>}
  </>;
  const className = 'group flex flex-col rounded-lg border border-[#e7dbe9] bg-white p-7 transition-colors hover:border-accent';
  return href ? <Link href={href} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}
