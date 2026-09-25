import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { AssessmentIntro } from '@/features/assessment/components/AssessmentIntro';
import { AssessmentForm } from '@/features/assessment/components/AssessmentForm';

export const metadata: Metadata = createPageMetadata({ title: 'Free AI Automation Opportunity Assessment', description: 'Tell Abdullah where calls, leads or repetitive work get stuck. Get a practical starting point for your business automation project.', path: '/assessment/' });
export default function AssessmentPage() {
  return <main>
    <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
      <AssessmentIntro />
      <AssessmentForm />
    </Container>
  </main>;
}
