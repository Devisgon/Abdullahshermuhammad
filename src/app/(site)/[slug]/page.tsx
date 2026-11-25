import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projectsBySlug } from '@/content/projects';
import { offers, offerPaths } from '@/content/offers';
import { OfferPageView } from '@/features/offers/components/OfferPageView';
import { createPageMetadata } from '@/lib/seo';
import { offerSearchTargets } from '@/content/seo-targets';

const projectExamples: Record<string, string> = {
  'ai-receptionist': 'ai-voice-meeting-assistant',
  'ai-call-agents': 'telegram-ai-voice-assistant',
  'lead-follow-up': 'gohighlevel-lead-generation-sales',
  'ai-automation': 'hotel-booking-operations-make',
  'ai-chatbot': 'ai-support-tickets-n8n-hubspot',
  'ai-agents': 'ai-agent-crm-slack-notion-zapier',
  'custom-ai-systems': 'fulixlabs-multi-agent-backend',
};

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
  const target = offerSearchTargets[slug];
  return <>
    <Breadcrumbs items={[{ name: 'Services', path: '/services/' }, { name: target.title, path: `/${slug}/` }]} />
    <OfferPageView page={page} context={target} project={projectsBySlug[projectExamples[slug]]} />
  </>;
}
