import type { Metadata } from 'next';
import { PageIntro } from '@/components/ui/PageIntro';
import { ServiceDirectory } from '@/features/services/components/ServiceDirectory';

export const metadata: Metadata = { title: 'AI Automation Services', description: 'Explore AI call handling, lead follow-up, customer support, agents, workflow automation and custom systems.' };

export default function ServicesPage() {
  return <main>
    <PageIntro eyebrow="WHAT I BUILD" title="Choose the bottleneck." highlight="Build the next step.">These are starting points. The system itself is shaped around your team, existing tools and business rules.</PageIntro>
    <ServiceDirectory />
  </main>;
}
