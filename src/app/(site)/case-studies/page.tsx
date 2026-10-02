import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { CapstoneFeature } from '@/features/case-studies/components/CapstoneFeature';
import { AutomationProjects } from '@/features/case-studies/components/AutomationProjects';

export const metadata: Metadata = createPageMetadata({ title: 'Websites, Web Apps and Automation Projects', description: 'Explore 42 projects by Abdullah Sher Muhammad across websites, web apps, automations, AI workflows, scraping, integrations, webhooks and solution architecture.', path: '/case-studies/' });
export default function CaseStudiesPage() {
  return <main>
    <PageIntro eyebrow="SELECTED WORK" title="Websites, apps and" highlight="automation projects.">Explore 42 projects across automations, AI automations, scraping, integrations, webhooks, solution architecture, websites and web apps. Open each project for its scope and tools. The university capstone below is in development.</PageIntro>
    <AutomationProjects />
    <CapstoneFeature />
  </main>;
}
