import type { Metadata } from 'next';
import { PageIntro } from '@/components/ui/PageIntro';
import { PrivacyDetails } from '@/features/privacy/components/PrivacyDetails';

export const metadata: Metadata = { title: 'Privacy', description: 'How Abdullah Sher Muhammad handles information submitted through the AI opportunity assessment.' };
export default function PrivacyPage() {
  return <main>
    <PageIntro eyebrow="PRIVACY" title="Your enquiry and" highlight="your information.">Last updated September 2026.</PageIntro>
    <PrivacyDetails />
  </main>;
}
