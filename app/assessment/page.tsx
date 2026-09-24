import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../site-components';
import { AssessmentForm } from './assessment-form';
import { Check } from 'lucide-react';
export const metadata:Metadata={title:'Free AI Opportunity Assessment',description:'Tell Abdullah about one repetitive workflow. Get a practical starting point for AI automation in your business.'};
export default function Assessment(){return <><SiteHeader/><main className="wrap assessment-shell"><div className="assessment-intro"><p className="eyebrow">FREE AI OPPORTUNITY ASSESSMENT</p><h1>Find the work your team <em>shouldn’t have to repeat.</em></h1><p>Answer a few questions about the process, tools and timing. I’ll review your answers and look for a practical place to start.</p><div className="assessment-points"><div><Check size={18}/> Focused on your actual business process</div><div><Check size={18}/> No software purchase required</div><div><Check size={18}/> No obligation to hire me</div></div></div><AssessmentForm/></main><SiteFooter/></>}
