import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro } from '@/components/ui/PageIntro';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Container } from '@/components/ui/Container';
import { PartnershipProcess } from '@/features/partners/components/PartnershipProcess';

export const metadata: Metadata = createPageMetadata({ title: 'White-Label AI Automation for Agencies', description: 'Technical delivery for agencies offering AI voice agents, workflow automation, CRM integrations and custom software to their clients.', path: '/partners/' });
export default function PartnersPage() {
  return <main>
    <PageIntro eyebrow="FOR AGENCIES" title="You own the client relationship." highlight="We build the system.">Need technical delivery for an AI automation, voice, integration or custom software project? I lead implementation with the team at Devisgon.</PageIntro>
    <Container className="pb-20">
      <ButtonLink>Discuss a delivery project <ArrowUpRight size={18} /></ButtonLink>
    </Container>
    <PartnershipProcess />
  </main>;
}
