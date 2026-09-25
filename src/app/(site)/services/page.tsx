import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { ServiceDirectory } from '@/features/services/components/ServiceDirectory';

export const metadata: Metadata = createPageMetadata({ title: 'AI Automation Services for Business', description: 'Explore AI receptionist, lead follow-up, workflow integration, customer support and custom AI systems for service businesses.', path: '/services/' });

export default function ServicesPage() {
  return <main>
    <PageIntro eyebrow="WHAT I BUILD" title="Choose the bottleneck." highlight="Build the next step.">These are starting points. The system itself is shaped around your team, existing tools and business rules.</PageIntro>
    <ServiceDirectory />
  </main>;
}
