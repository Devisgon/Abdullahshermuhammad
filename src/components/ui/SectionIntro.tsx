export function SectionIntro({ eyebrow, title, highlight, children }: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children?: React.ReactNode;
}) {
  return <div className="mb-12 max-w-3xl">
    <p className="mb-5 text-xs font-extrabold tracking-[0.15em] text-accent uppercase">{eyebrow}</p>
    <h2 className="text-[clamp(2.35rem,4vw,3.75rem)] leading-[1.08] font-bold tracking-[-0.055em]">
      {title}
      {highlight && <span className="text-accent">{highlight}</span>}
    </h2>
    {children && <p className="mt-5 text-lg leading-relaxed text-muted">{children}</p>}
  </div>;
}
