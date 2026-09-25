import { Container } from '@/components/ui/Container';
import type { SearchTarget } from '@/content/seo-targets';

export function SearchContext({ context }: { context: SearchTarget }) {
  return <section className="py-16 md:py-20">
    <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <p className="mb-4 text-xs font-extrabold tracking-widest text-highlight">HOW THIS WORKS</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{context.heading}</h2>
        <p className="mt-5 max-w-[690px] leading-relaxed text-muted">{context.summary}</p>
      </div>
      <div className="rounded-lg border border-edge bg-panel p-7 md:p-9">
        <h3 className="text-xl font-bold">{context.question}</h3>
        <p className="mt-4 leading-relaxed text-muted">{context.answer}</p>
      </div>
    </Container>
  </section>;
}
