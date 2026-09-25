import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { FAQList } from '@/features/faq/components/FAQList';

export const metadata: Metadata = createPageMetadata({ title: 'AI Automation FAQ: Calls, CRM and Costs', description: 'Answers about AI call handling, CRM integration, human handoffs, implementation costs and what happens after an automation assessment.', path: '/faq/' });
export default function FAQPage() {
  return <main>
    <PageIntro eyebrow="FAQ" title="Questions before" highlight="you automate?">Straight answers about what an AI workflow can do, where it needs a person and how to get started.</PageIntro>
    <FAQList />
  </main>;
}
