import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { industries } from '@/content/industries';
import { IndustryPageView } from '@/features/industries/components/IndustryPageView';
import { createPageMetadata } from '@/lib/seo';

export function generateStaticParams() { return Object.keys(industries).map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};
  return createPageMetadata({ title: `AI Automation for ${industry.name}`, description: industry.intro, path: `/industries/${slug}/` });
}
export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();
  return <IndustryPageView industry={industry} />;
}
