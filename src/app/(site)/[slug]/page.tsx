import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { offers, offerPaths } from '@/content/offers';
import { OfferPageView } from '@/features/offers/components/OfferPageView';

export function generateStaticParams() { return offerPaths.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = offers[slug];
  return { title: page?.eyebrow ?? 'AI Automation', description: page?.description };
}
export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = offers[slug];
  if (!page) notFound();
  return <OfferPageView page={page} />;
}
