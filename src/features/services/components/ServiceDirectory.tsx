import { Container } from '@/components/ui/Container';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { Callout } from '@/components/ui/Callout';
import { offers } from '@/content/offers';
import { servicePaths } from '@/content/services';

export function ServiceDirectory() {
  return <section className="pb-24">
    <Container>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{servicePaths.map((path, index) => <FeatureCard key={path} number={`0${index + 1} / SERVICE`} title={offers[path].eyebrow.toLowerCase().replace(/(^|\s)\S/g, letter => letter.toUpperCase())} description={offers[path].description} href={`/${path}`} />)}</div>
      <Callout title="Not sure which fits?" description="Describe your slowest workflow and I’ll identify a practical place to start." />
    </Container>
  </section>;
}
