import type { Metadata } from 'next';
import { SiteHeader,SiteFooter } from '../site-components';
import { ContactForm } from '../contact/contact-form';
export const metadata:Metadata={title:'Request a 15-Minute Review',description:'Request a short workflow review with Abdullah Sher Muhammad. Scheduling is arranged after the request.'};
export default function BookCall(){return <><SiteHeader/><main className="wrap contact-layout"><div><p className="eyebrow">15-MINUTE AUTOMATION REVIEW</p><h1>Bring one workflow. Leave with <em>a clearer plan.</em></h1><p>We’ll look at what starts the process, where information goes and where a person needs to stay in control.</p><div className="assessment-points"><div>01 / Identify the bottleneck.</div><div>02 / Map a safe first version.</div><div>03 / Decide whether a build makes sense.</div></div><p className="micro">Use the form to request a review. It does not reserve a calendar time.</p></div><ContactForm kind="review"/></main><SiteFooter/></>}
