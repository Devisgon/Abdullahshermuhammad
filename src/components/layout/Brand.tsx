import Image from 'next/image';
import Link from 'next/link';

export function Brand({ footer = false }: { footer?: boolean }) {
  return <Link href="/" aria-label="Abdullah Sher Muhammad home" className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap">
    {footer
      ? <span aria-hidden="true" className="grid size-10 place-items-center rounded bg-white text-sm font-extrabold text-brand">AS</span>
      : <Image src="/ASM-LOGO.png" alt="" width={76} height={44} priority className="h-10 w-[68px] shrink-0 rounded object-cover sm:h-11 sm:w-[76px]" unoptimized />}
    <span className="flex flex-col gap-1 leading-none">
      <strong className={`text-[11px] font-extrabold tracking-[0.06em] sm:text-sm ${footer ? 'text-white' : 'text-[#24182c]'}`}>ABDULLAH SHER</strong>
      <small className={`text-[7px] font-extrabold tracking-[0.12em] sm:text-[9px] ${footer ? 'text-[#e4acd5]' : 'text-accent'}`}>AI SYSTEMS · DEVISGON</small>
    </span>
  </Link>;
}
