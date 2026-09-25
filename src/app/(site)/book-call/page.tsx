import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { ContactIntro } from '@/features/contact/components/ContactIntro';
import { ContactForm } from '@/features/contact/components/ContactForm';

export const metadata: Metadata = { title: 'Request a 15-Minute Review', description: 'Request a short workflow review with Abdullah Sher Muhammad. Scheduling is arranged after the request.' };
export default function BookCallPage() {
  return <main>
    <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <ContactIntro review />
      <ContactForm kind="review" />
    </Container>
  </main>;
}
