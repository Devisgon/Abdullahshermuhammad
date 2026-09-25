import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { CapstoneFeature } from '@/features/case-studies/components/CapstoneFeature';

export const metadata: Metadata = createPageMetadata({ title: 'Selected AI Automation Work and Project Approach', description: 'Explore Abdullah Sher Muhammad’s AI workflow approach and a university query-routing system in development, with project status clearly stated.', path: '/case-studies/' });
export default function CaseStudiesPage() {
  return <main>
    <PageIntro eyebrow="SELECTED WORK" title="Systems with a clear job" highlight="and a human handoff.">I share work when I can describe it accurately. This page includes a university system in development; it does not claim a client deployment or measured commercial results.</PageIntro>
    <CapstoneFeature />
  </main>;
}
