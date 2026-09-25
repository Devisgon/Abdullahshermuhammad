import type { Metadata } from 'next';
import { PageIntro } from '@/components/ui/PageIntro';
import { EngagementOptions } from '@/features/pricing/components/EngagementOptions';

export const metadata: Metadata = { title: 'Engagement Options', description: 'Start with a free automation assessment, a scoped first workflow or a custom AI and business systems implementation.' };
export default function PricingPage() {
  return <main>
    <PageIntro eyebrow="HOW TO START" title="Start small. Scope the rest" highlight="around the work.">Every process has different tools, volume and exceptions. I’ll define the deliverables and price after we understand those details.</PageIntro>
    <EngagementOptions />
  </main>;
}
