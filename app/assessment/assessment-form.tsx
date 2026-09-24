'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { submitLead } from '../../lib/lead-form';

type Answers={businessType:string;bottleneck:string;volume:string;currentTools:string;timeline:string;details:string;name:string;email:string;company:string;website:string;websiteConfirm:string};
const initial:Answers={businessType:'',bottleneck:'',volume:'',currentTools:'',timeline:'',details:'',name:'',email:'',company:'',website:'',websiteConfirm:''};
const steps=[
 {title:'What kind of business do you run?',hint:'Choose the closest fit.',field:'businessType',choices:['Home services','Marketing or digital agency','Professional services','SaaS or technology','Other business']},
 {title:'Where does the most work pile up?',hint:'Choose the process you would most like to improve.',field:'bottleneck',choices:['Missed or after-hours calls','Lead response and follow-up','Customer support questions','Copying data between tools','Internal operations and reporting']},
 {title:'Roughly how many enquiries do you receive?',hint:'A rough estimate is enough.',field:'volume',choices:['Fewer than 20 per month','20–100 per month','100–500 per month','More than 500 per month','Not sure / not applicable']},
 {title:'When would you like to improve this?',hint:'This helps me suggest a realistic first step.',field:'timeline',choices:['Exploring options','Within 3 months','This month','As soon as possible']},
] as const;
export function AssessmentForm(){
 const [step,setStep]=useState(0),[answers,setAnswers]=useState<Answers>(initial),[status,setStatus]=useState<'idle'|'sending'|'done'>('idle'),[error,setError]=useState(''),[category,setCategory]=useState('');
 const set=(field:keyof Answers,value:string)=>{setAnswers(p=>({...p,[field]:value}));setError('')};
 const goNext=()=>{if(step<4 && !answers[steps[step].field]){setError('Please choose an option to continue.');return}setError('');setStep(s=>Math.min(s+1,4))};
 async function send(e:React.FormEvent<HTMLFormElement>){e.preventDefault();setError('');setStatus('sending');try{
  if(answers.websiteConfirm){setStatus('done');return}
  await submitLead({...answers,source:'AI opportunity assessment'});
  setCategory(/call/i.test(answers.bottleneck)?'Call handling opportunity':/lead|follow/i.test(answers.bottleneck)?'Lead response opportunity':/support|question/i.test(answers.bottleneck)?'Customer support opportunity':'Operations automation opportunity');
  setStatus('done')
 }catch(e){setError(e instanceof Error?e.message:'Unable to send your answers.');setStatus('idle')}}
 if(status==='done') return <div className="assessment-card success-panel" role="status"><span className="success-symbol"><Check size={30}/></span><p className="eyebrow">YOUR ANSWERS ARE IN</p><h2>{category}</h2><p>Thank you. Your answers have been sent for review. I’ll use the details you shared to identify a sensible first workflow.</p><a className="button primary-button" href="https://www.linkedin.com/in/abdullahshermuhammad/" target="_blank" rel="noopener noreferrer">Connect with Abdullah <ArrowRight size={17}/></a><p className="privacy-note">You can close this page now. Connecting on LinkedIn is optional.</p></div>;
 return <div className="assessment-card"><div className="step-count"><span>STEP {step+1} OF 5</span><span>{Math.round((step+1)/5*100)}%</span></div><div className="progress-bar" aria-hidden="true"><span style={{width:`${(step+1)/5*100}%`}}/></div>
 {step<4?<><h2>{steps[step].title}</h2><p className="step-subtitle">{steps[step].hint}</p><div className="choice-grid">{steps[step].choices.map(choice=><button className={`choice ${answers[steps[step].field]===choice?'selected':''}`} aria-pressed={answers[steps[step].field]===choice} onClick={()=>set(steps[step].field,choice)} key={choice} type="button">{choice}</button>)}</div><div className="form-actions">{step>0?<button className="back-button" onClick={()=>setStep(s=>s-1)} type="button">← Back</button>:<span/>}<Button className="button primary-button" onClick={goNext} type="button">Continue <ArrowRight size={17}/></Button></div></>:
 <form onSubmit={send}><h2>Where should I send the next step?</h2><p className="step-subtitle">A little context helps me review your workflow.</p><div style={{position:'absolute',left:'-9999px'}} aria-hidden="true"><label>Leave this field blank<input tabIndex={-1} autoComplete="off" value={answers.websiteConfirm} onChange={e=>set('websiteConfirm',e.target.value)}/></label></div><label className="form-field"><span>Your name *</span><input required minLength={2} maxLength={100} autoComplete="name" value={answers.name} onChange={e=>set('name',e.target.value)}/></label><label className="form-field"><span>Work email *</span><input required type="email" maxLength={200} autoComplete="email" value={answers.email} onChange={e=>set('email',e.target.value)}/></label><label className="form-field"><span>Company *</span><input required minLength={2} maxLength={150} autoComplete="organization" value={answers.company} onChange={e=>set('company',e.target.value)}/></label><label className="form-field"><span>Business website <small>(optional)</small></span><input type="url" placeholder="https://" maxLength={250} value={answers.website} onChange={e=>set('website',e.target.value)}/></label><label className="form-field"><span>Current tools <small>(optional)</small></span><input placeholder="CRM, email, forms, calendars…" maxLength={350} value={answers.currentTools} onChange={e=>set('currentTools',e.target.value)}/></label><label className="form-field"><span>Describe the process <small>(optional)</small></span><textarea maxLength={2000} placeholder="What happens today? Where does it get stuck?" value={answers.details} onChange={e=>set('details',e.target.value)}/></label><div className="form-actions"><button type="button" className="back-button" onClick={()=>setStep(3)}>← Back</button><Button className="button primary-button" type="submit" disabled={status==='sending'}>{status==='sending'?'Saving…':'Send my assessment'} <ArrowRight size={17}/></Button></div><p className="privacy-note">Your details are used to review and respond to this enquiry. Read the <Link href="/privacy">privacy note</Link>.</p></form>}
 {error&&<p className="form-error" role="alert">{error}</p>}
 </div>
}
