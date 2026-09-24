'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowRight, Check, Mail, CalendarDays, Database, UserRound, Menu, X } from 'lucide-react';

export function AssessmentLink({children,light=false}:{children:React.ReactNode;light?:boolean}) {
  return <Link href="/assessment" className={light?'button light-button':'button primary-button'}>{children}</Link>;
}

const solutionLinks:[string,string][]=[['/ai-automation','AI automation'],['/ai-receptionist','AI receptionist'],['/lead-follow-up','Lead follow-up'],['/ai-call-agents','Voice AI'],['/ai-chatbot','Customer support AI'],['/ai-agents','AI agents'],['/custom-ai-systems','Custom AI systems']];
const industryLinks:[string,string][]=[['/industries/home-services','Home services'],['/industries/hvac','HVAC'],['/industries/roofing','Roofing'],['/industries/plumbing','Plumbing']];

function Brand({footer=false}:{footer?:boolean}) {
  return <Link className={'brand'+(footer?' footer-brand':'')} href="/" aria-label="Abdullah Sher Muhammad home">
    <span className="brand-symbol">AS</span><span className="brand-copy"><strong>ABDULLAH SHER</strong><small>AI SYSTEMS · DEVISGON</small></span>
  </Link>;
}

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    if(!open)return;
    const onKey=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};
    window.addEventListener('keydown',onKey);
    return ()=>window.removeEventListener('keydown',onKey);
  },[open]);
  const close=()=>setOpen(false);
  return <header className="site-header"><div className="wrap header-inner">
    <Brand/>
    <nav className="desktop-nav" aria-label="Main navigation">
      <Link href="/services">Solutions</Link><Link href="/industries">Industries</Link><Link href="/case-studies">Selected work</Link><Link href="/about">About</Link><Link href="/pricing">Pricing</Link>
    </nav>
    <div className="header-actions"><Link href="/assessment" className="header-cta" onClick={close}>Find opportunities <ArrowUpRight size={17}/></Link>
      <button className="mobile-menu-button" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)}>{open?<X size={23}/>:<Menu size={23}/>}</button>
    </div>
  </div>
  {open&&<><button className="mobile-menu-backdrop" type="button" aria-label="Close navigation" onClick={close}/><nav id="mobile-navigation" className="mobile-menu-panel" aria-label="Mobile navigation">
    <Link href="/services" onClick={close}>All solutions <ArrowUpRight size={16}/></Link>
    {solutionLinks.map(([href,label])=><Link href={href} key={href} onClick={close}>{label}</Link>)}
    <Link href="/industries" onClick={close}>Industries <ArrowUpRight size={16}/></Link>
    {industryLinks.map(([href,label])=><Link href={href} key={href} onClick={close}>{label}</Link>)}
    <Link href="/case-studies" onClick={close}>Selected work</Link><Link href="/about" onClick={close}>About</Link><Link href="/pricing" onClick={close}>Pricing</Link><Link href="/faq" onClick={close}>FAQ</Link><Link href="/partners" onClick={close}>For agencies</Link><Link href="/contact" onClick={close}>Contact</Link>
  </nav></>}
  <Link className="mobile-sticky-cta" href="/assessment" onClick={close}>Find my automation opportunities <ArrowUpRight size={17}/></Link>
  </header>;
}

export function SiteFooter(){return <footer className="footer"><div className="wrap"><div className="footer-top"><div><Brand footer/><p>Useful AI and automation, built around how your business actually works.</p></div><div><span>EXPLORE</span><Link href="/services">All solutions</Link><Link href="/assessment">Free assessment</Link><Link href="/case-studies">Selected work</Link><Link href="/pricing">Engagement options</Link><Link href="/faq">FAQ</Link></div><div><span>WORK TOGETHER</span><Link href="/contact">Contact Abdullah</Link><Link href="/book-call">Request a review</Link><Link href="/partners">Agency partnerships</Link><a href="https://www.linkedin.com/in/abdullahshermuhammad/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14}/></a><a href="https://devisgon.com" target="_blank" rel="noopener noreferrer">Devisgon <ArrowUpRight size={14}/></a></div><div><span>INDUSTRIES</span><Link href="/industries">All industries</Link>{industryLinks.map(([href,label])=><Link href={href} key={href}>{label}</Link>)}</div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Abdullah Sher Muhammad.</span><Link href="/privacy">Privacy</Link><span>Software engineer · Founder, Devisgon</span></div></div></footer>}

export function WorkflowPreview(){return <div className="workflow-preview" aria-label="Illustrative lead handling workflow"><div className="preview-top"><div className="preview-dot-row"><i/><i/><i/></div><span>LIVE WORKFLOW / LEAD RESPONSE</span><span className="preview-live">EXAMPLE</span></div><div className="preview-body"><div className="incoming"><div className="incoming-icon"><UserRound size={21}/></div><div><small>NEW ENQUIRY · WEBSITE FORM</small><strong>Service request received</strong><span>Contact details + requested service</span></div><span className="preview-time">09:41</span></div><div className="flow-connector"/><div className="flow-row"><div className="flow-icon"><Check size={17}/></div><div><span>01 / CLASSIFY</span><strong>Intent and priority identified</strong></div><small>09:41</small></div><div className="flow-connector"/><div className="flow-row"><div className="flow-icon"><Database size={17}/></div><div><span>02 / RECORD</span><strong>Lead added to CRM</strong></div><small>09:41</small></div><div className="flow-connector"/><div className="flow-row"><div className="flow-icon"><Mail size={17}/></div><div><span>03 / RESPOND</span><strong>Relevant reply sent</strong></div><small>09:42</small></div><div className="flow-connector"/><div className="flow-row final"><div className="flow-icon"><CalendarDays size={17}/></div><div><span>04 / HAND OFF</span><strong>Next action sent to the team</strong></div><small>09:42</small></div></div><div className="preview-bottom"><span>TRIGGER → DECISION → ACTION → HUMAN</span><ArrowRight size={18}/></div></div>}
