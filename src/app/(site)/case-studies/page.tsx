import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { CapstoneFeature } from '@/features/case-studies/components/CapstoneFeature';

export const metadata: Metadata = createPageMetadata({ title: 'Selected Work', description: 'A transparent look at Abdullah Sher Muhammad’s workflow and AI system work, including a university project in development.', path: '/case-studies/' });
export default function CaseStudiesPage() {
  return <main>
    <PageIntro eyebrow="SELECTED WORK" title="Systems with a clear job" highlight="and a human handoff.">I share work when I can describe it accurately. This page includes a university system in development; it does not claim a client deployment or measured commercial results.</PageIntro>
    <CapstoneFeature />
  </main>;
}
