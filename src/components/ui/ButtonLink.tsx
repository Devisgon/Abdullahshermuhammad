import Link from 'next/link';
import { cn } from '@/lib/utils';

export function ButtonLink({ href = '/assessment', children, light = false, className }: {
  href?: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) {
  return <Link href={href} className={cn(
    'inline-flex min-h-13 items-center justify-center gap-2 rounded-md px-5 py-3.5 text-center text-sm font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
    light ? 'bg-white text-brand hover:bg-[#f2e7f7]' : 'bg-action text-white shadow-[0_9px_22px_#40005b20] hover:bg-accent',
    className,
  )}>{children}</Link>;
}
