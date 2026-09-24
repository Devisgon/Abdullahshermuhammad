import type { Metadata } from 'next';
import { SiteHeader,SiteFooter } from '../site-components';
import { ContactForm } from './contact-form';
export const metadata:Metadata={title:'Contact Abdullah',description:'Tell Abdullah Sher Muhammad about the business process you want to automate.'};
export default function Contact(){return <><SiteHeader/><main className="wrap contact-layout"><div><p className="eyebrow">START A CONVERSATION</p><h1>Tell me what is still being done <em>manually.</em></h1><p>Give me the short version. I’ll tell you whether it looks automatable and what I would start with.</p><div className="assessment-points"><div>01 / I review your workflow.</div><div>02 / I identify a practical first step.</div><div>03 / We discuss a scope if there is a fit.</div></div></div><ContactForm/></main><SiteFooter/></>}
