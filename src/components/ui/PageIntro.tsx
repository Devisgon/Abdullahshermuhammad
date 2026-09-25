import { Container } from './Container';

export function PageIntro({ eyebrow, title, highlight, children }: {
  eyebrow: string;
  title: string;
  highlight: string;
  children: React.ReactNode;
}) {
  return <Container className="pt-20 pb-12 md:pt-28 md:pb-16">
    <p className="mb-5 text-xs font-extrabold tracking-[0.15em] text-highlight uppercase">{eyebrow}</p>
    <h1 className="max-w-[950px] text-[clamp(3rem,5vw,5rem)] leading-[1.07] font-bold tracking-[-0.055em]">
      {title}
      <span className="text-highlight">{highlight}</span>
    </h1>
    <p className="mt-7 max-w-[700px] text-lg leading-relaxed text-muted">{children}</p>
  </Container>;
}
