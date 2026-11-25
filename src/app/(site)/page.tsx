import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { Hero } from '@/features/home/components/Hero';
import { Bottlenecks } from '@/features/home/components/Bottlenecks';
import { Solutions } from '@/features/home/components/Solutions';
import { Method } from '@/features/home/components/Method';
import { WorkflowComparison } from '@/features/home/components/WorkflowComparison';
import { PeopleFeature } from '@/features/home/components/PeopleFeature';
import { AboutPreview } from '@/features/home/components/AboutPreview';
import { ProcessSteps } from '@/features/home/components/ProcessSteps';
import { FinalCTA } from '@/features/home/components/FinalCTA';
import { IdentitySchema } from '@/components/seo/IdentitySchema';

const homeTitle = 'AI Automation Consultant for Service Businesses | Abdullah Sher Muhammad';
export const metadata: Metadata = {
  ...createPageMetadata({
    title: homeTitle,
    description: 'AI automation for service businesses: call handling, lead follow-up, CRM integration and connected workflows designed by Abdullah Sher Muhammad, founder of Devisgon.',
    path: '/',
  }),
  title: { absolute: homeTitle },
};

export default function HomePage() {
  return <><IdentitySchema /><main>
    <Hero />
    <Bottlenecks />
    <Solutions />
    <Method />
    <WorkflowComparison />
    <PeopleFeature />
    <AboutPreview />
    <ProcessSteps />
    <FinalCTA />
  </main></>;
}
