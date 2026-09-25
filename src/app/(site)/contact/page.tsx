import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { ContactIntro } from '@/features/contact/components/ContactIntro';
import { ContactForm } from '@/features/contact/components/ContactForm';

export const metadata: Metadata = createPageMetadata({ title: 'Contact Abdullah', description: 'Tell Abdullah Sher Muhammad about the business process you want to automate.', path: '/contact/' });
export default function ContactPage() {
  return <main>
    <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <ContactIntro />
      <ContactForm />
    </Container>
  </main>;
}
