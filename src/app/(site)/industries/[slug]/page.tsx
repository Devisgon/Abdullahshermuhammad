import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/content/industries';
import { IndustryPageView } from '@/features/industries/components/IndustryPageView';

export function generateStaticParams() { return Object.keys(industries).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  return { title: `AI Automation for ${industry?.name ?? 'Home Services'}`, description: industry?.intro };
}
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();
  return <IndustryPageView industry={industry} />;
}
