import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { IndustryDirectory } from '@/features/industries/components/IndustryDirectory';

export const metadata: Metadata = createPageMetadata({ title: 'Industries', description: 'Practical AI automation for home services, HVAC, roofing and plumbing teams.', path: '/industries/' });

export default function IndustriesPage() {
  return <main>
    <PageIntro eyebrow="INDUSTRIES" title="Built around the work" highlight="your team actually does.">Every business has its own call types, tools and handoffs. Explore examples, then we can map a workflow for yours.</PageIntro>
    <IndustryDirectory />
  </main>;
}
