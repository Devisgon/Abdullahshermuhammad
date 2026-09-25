import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { ContactIntro } from '@/features/contact/components/ContactIntro';
import { ContactForm } from '@/features/contact/components/ContactForm';

export const metadata: Metadata = createPageMetadata({ title: 'Request a 15-Minute AI Workflow Review', description: 'Request a short review of your call handling, lead follow-up or workflow integration. Abdullah will arrange scheduling after your enquiry.', path: '/book-call/' });
export default function BookCallPage() {
  return <main>
    <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <ContactIntro review />
      <ContactForm kind="review" />
    </Container>
  </main>;
}
