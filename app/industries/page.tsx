import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader, SiteFooter, AssessmentLink } from '../site-components';

export const metadata:Metadata={title:'Industries | Abdullah Sher Muhammad',description:'Practical AI automation for home services, HVAC, roofing and plumbing teams.'};

const industries=[
  {name:'Home services',description:'Capture enquiries and give field teams a clear next step while they are on the job.',href:'/industries/home-services'},
  {name:'HVAC',description:'Handle service requests, after-hours calls, qualification and dispatch context.',href:'/industries/hvac'},
  {name:'Roofing',description:'Keep estimate requests, project details and sales follow-up connected.',href:'/industries/roofing'},
  {name:'Plumbing',description:'Capture the service need and urgency while your plumbers are in the field.',href:'/industries/plumbing'},
];

export default function Industries(){return <><SiteHeader/><main className="wrap"><div className="page-hero"><p className="eyebrow">INDUSTRIES</p><h1>Built around the work <em>your team actually does.</em></h1><p>Every business has its own call types, tools and handoffs. Explore examples, then we can map a workflow for yours.</p></div><section className="interior-section"><div className="industry-directory">{industries.map((industry,i)=><Link href={industry.href} className="industry-directory-card" key={industry.href}><span>0{i+1} / INDUSTRY</span><h2>{industry.name}</h2><p>{industry.description}</p><strong>Explore {industry.name.toLowerCase()} <ArrowUpRight size={18}/></strong></Link>)}</div><div className="interior-banner"><h2>Work in another industry?</h2><p>Tell me where calls, leads or routine work get stuck. The first step is finding one useful workflow.</p><AssessmentLink light>Find my automation opportunities <ArrowUpRight size={18}/></AssessmentLink></div></section></main><SiteFooter/></>}
