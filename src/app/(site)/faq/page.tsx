import type { Metadata } from 'next';
import { PageIntro } from '@/components/ui/PageIntro';
import { FAQList } from '@/features/faq/components/FAQList';

export const metadata: Metadata = { title: 'Frequently Asked Questions', description: 'Straight answers about AI automation, voice agents, human handoffs, integrations and implementation.' };
export default function FAQPage() {
  return <main>
    <PageIntro eyebrow="FAQ" title="Questions before" highlight="you automate?">Straight answers about what an AI workflow can do, where it needs a person and how to get started.</PageIntro>
    <FAQList />
  </main>;
}
