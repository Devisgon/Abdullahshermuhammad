import { Hero } from '@/features/home/components/Hero';
import { Bottlenecks } from '@/features/home/components/Bottlenecks';
import { Solutions } from '@/features/home/components/Solutions';
import { Method } from '@/features/home/components/Method';
import { WorkflowComparison } from '@/features/home/components/WorkflowComparison';
import { PeopleFeature } from '@/features/home/components/PeopleFeature';
import { AboutPreview } from '@/features/home/components/AboutPreview';
import { ProcessSteps } from '@/features/home/components/ProcessSteps';
import { FinalCTA } from '@/features/home/components/FinalCTA';

export default function HomePage() {
  return <main>
    <Hero />
    <Bottlenecks />
    <Solutions />
    <Method />
    <WorkflowComparison />
    <PeopleFeature />
    <AboutPreview />
    <ProcessSteps />
    <FinalCTA />
  </main>;
}
