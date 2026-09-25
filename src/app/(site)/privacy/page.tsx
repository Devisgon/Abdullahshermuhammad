import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { PrivacyDetails } from '@/features/privacy/components/PrivacyDetails';

export const metadata: Metadata = createPageMetadata({ title: 'Privacy Policy', description: 'How Abdullah Sher Muhammad handles information submitted through contact forms and the AI automation opportunity assessment.', path: '/privacy/' });
export default function PrivacyPage() {
  return <main>
    <PageIntro eyebrow="PRIVACY" title="Your enquiry and" highlight="your information.">Last updated September 2026.</PageIntro>
    <PrivacyDetails />
  </main>;
}
