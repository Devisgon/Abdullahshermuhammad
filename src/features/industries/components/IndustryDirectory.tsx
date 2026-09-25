import { Container } from '@/components/ui/Container';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Callout } from '@/components/ui/Callout';

const directory = [
  ['Home services', 'Capture enquiries and give field teams a clear next step while they are on the job.', 'home-services'],
  ['HVAC', 'Handle service requests, after-hours calls, qualification and dispatch context.', 'hvac'],
  ['Roofing', 'Keep estimate requests, project details and sales follow-up connected.', 'roofing'],
  ['Plumbing', 'Capture the service need and urgency while your plumbers are in the field.', 'plumbing'],
];

export function IndustryDirectory() {
  return <section className="pb-24">
    <Container>
      <div className="grid gap-5 md:grid-cols-2">{directory.map(([name, description, slug], index) => <FeatureCard key={slug} number={`0${index + 1} / INDUSTRY`} title={name} description={description} href={`/industries/${slug}`} label={`Explore ${name.toLowerCase()}`} />)}</div>
      <Callout title="Work in another industry?" description="Tell me where calls, leads or routine work get stuck. The first step is finding one useful workflow." />
    </Container>
  </section>;
}
