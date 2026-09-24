import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { offers,offerPaths } from '../../lib/offer-pages';
import { OfferPageView } from '../offer-page';
export function generateStaticParams(){return offerPaths.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=offers[slug];return {title:p?.eyebrow||'AI Automation',description:p?.description}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const page=offers[slug];if(!page)notFound();return <OfferPageView page={page}/>}
