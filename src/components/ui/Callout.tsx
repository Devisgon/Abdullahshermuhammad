import { ArrowUpRight } from 'lucide-react';
import { ButtonLink } from './ButtonLink';

export function Callout({ title, description, cta = 'Find my automation opportunities' }: {
  title: string;
  description: string;
  cta?: string;
}) {
  return <section className="mt-16 rounded-lg bg-brand px-7 py-10 text-white sm:px-12 sm:py-12">
    <h2 className="max-w-[750px] text-[clamp(2rem,4vw,3.25rem)] leading-tight font-bold tracking-[-0.05em]">{title}</h2>
    <p className="mt-4 max-w-[680px] leading-relaxed text-[#eadcec]">{description}</p>
    <ButtonLink light className="mt-7">
      {cta}
      <ArrowUpRight size={18} />
    </ButtonLink>
  </section>;
}
