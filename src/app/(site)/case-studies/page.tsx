import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { CapstoneFeature } from '@/features/case-studies/components/CapstoneFeature';
import { AutomationProjects } from '@/features/case-studies/components/AutomationProjects';

export const metadata: Metadata = createPageMetadata({ title: 'Automation Projects and AI Workflow Portfolio', description: 'Explore 22 automation, AI agent, CRM, data integration and business systems projects by Abdullah Sher Muhammad, plus a university query-routing capstone in development.', path: '/case-studies/' });
export default function CaseStudiesPage() {
  return <main>
    <PageIntro eyebrow="SELECTED WORK" title="Automation projects" highlight="built around real workflows.">A selection of 22 projects spanning AI agents, CRM integrations, marketing, operations and data workflows. The university capstone below is in development; the HCPA entry covers process analysis and solution architecture.</PageIntro>
    <AutomationProjects />
    <CapstoneFeature />
  </main>;
}
