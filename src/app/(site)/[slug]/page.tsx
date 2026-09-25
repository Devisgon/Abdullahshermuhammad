import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { offers, offerPaths } from '@/content/offers';
import { OfferPageView } from '@/features/offers/components/OfferPageView';
import { createPageMetadata } from '@/lib/seo';
import { offerSearchTargets } from '@/content/seo-targets';

export function generateStaticParams() { return offerPaths.map(slug => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = offers[slug];
  if (!page) return {};
  const target = offerSearchTargets[slug];
  return createPageMetadata({ title: target.title, description: target.description, path: `/${slug}/` });
}
export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = offers[slug];
  if (!page) notFound();
  return <OfferPageView page={page} context={offerSearchTargets[slug]} />;
}
