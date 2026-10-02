import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { CapstoneFeature } from '@/features/case-studies/components/CapstoneFeature';
import { AutomationProjects } from '@/features/case-studies/components/AutomationProjects';

export const metadata: Metadata = createPageMetadata({ title: 'Automation Projects and AI Workflow Portfolio', description: 'Explore 22 automation, AI agent, CRM, data integration and business systems projects by Abdullah Sher Muhammad, plus a university query-routing capstone in development.', path: '/case-studies/' });
export default function CaseStudiesPage() {
  return <main>
    <PageIntro eyebrow="SELECTED WORK" title="Automation projects" highlight="built around real workflows.">Explore 22 projects across automations, AI automations, data scraping, integrations, webhooks and solution architecture. Open each project for its workflow and tools. The university capstone below is in development.</PageIntro>
    <AutomationProjects />
    <CapstoneFeature />
  </main>;
}
