import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { IndustryDirectory } from '@/features/industries/components/IndustryDirectory';

export const metadata: Metadata = createPageMetadata({ title: 'AI Automation for HVAC, Roofing and Plumbing', description: 'See practical call answering and lead follow-up workflows for HVAC, roofing, plumbing and other home service businesses.', path: '/industries/' });

export default function IndustriesPage() {
  return <main>
    <PageIntro eyebrow="INDUSTRIES" title="Built around the work" highlight="your team actually does.">Every business has its own call types, tools and handoffs. Explore examples, then we can map a workflow for yours.</PageIntro>
    <IndustryDirectory />
  </main>;
}
