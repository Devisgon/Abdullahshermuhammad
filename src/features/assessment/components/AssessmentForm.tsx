'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { FormField } from '@/components/ui/FormField';
import { FormCard } from '@/components/ui/FormCard';
import { submitLead } from '@/lib/lead-form';

type Answers = { businessType: string; bottleneck: string; volume: string; currentTools: string; timeline: string; details: string; name: string; email: string; company: string; website: string; websiteConfirm: string };
const initial: Answers = { businessType: '', bottleneck: '', volume: '', currentTools: '', timeline: '', details: '', name: '', email: '', company: '', website: '', websiteConfirm: '' };
const steps = [
  { title: 'What kind of business do you run?', hint: 'Choose the closest fit.', field: 'businessType', choices: ['Home services', 'Marketing or digital agency', 'Professional services', 'SaaS or technology', 'Other business'] },
  { title: 'Where does the most work pile up?', hint: 'Choose the process you would most like to improve.', field: 'bottleneck', choices: ['Missed or after-hours calls', 'Lead response and follow-up', 'Customer support questions', 'Copying data between tools', 'Internal operations and reporting'] },
  { title: 'Roughly how many enquiries do you receive?', hint: 'A rough estimate is enough.', field: 'volume', choices: ['Fewer than 20 per month', '20–100 per month', '100–500 per month', 'More than 500 per month', 'Not sure / not applicable'] },
  { title: 'When would you like to improve this?', hint: 'This helps me suggest a realistic first step.', field: 'timeline', choices: ['Exploring options', 'Within 3 months', 'This month', 'As soon as possible'] },
] as const;
const actionClass = 'inline-flex min-h-12 items-center justify-center gap-2 rounded bg-action px-5 py-3 text-sm font-bold text-white hover:bg-accent disabled:opacity-60';

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const set = (field: keyof Answers, value: string) => { setAnswers(previous => ({ ...previous, [field]: value })); setError(''); };
  const next = () => {
    if (step < 4 && !answers[steps[step].field]) { setError('Please choose an option to continue.'); return; }
    setError(''); setStep(current => Math.min(current + 1, 4));
  };

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError(''); setStatus('sending');
    try {
      if (answers.websiteConfirm) { setStatus('done'); return; }
      await submitLead({ ...answers, source: 'AI opportunity assessment' });
      setCategory(/call/i.test(answers.bottleneck) ? 'Call handling opportunity' : /lead|follow/i.test(answers.bottleneck) ? 'Lead response opportunity' : /support|question/i.test(answers.bottleneck) ? 'Customer support opportunity' : 'Operations automation opportunity');
      setStatus('done');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Unable to send your answers.'); setStatus('idle'); }
  }

  if (status === 'done') return <FormCard>
    <div role="status">
      <Check size={32} className="text-highlight" />
      <p className="mt-5 text-xs font-bold tracking-widest text-highlight">YOUR ANSWERS ARE IN</p>
      <h2 className="mt-3 text-2xl font-bold">{category}</h2>
      <p className="mt-5 leading-relaxed text-muted">Thank you. Your answers have been sent for review. I’ll use the details you shared to identify a sensible first workflow.</p>
      <a className={`${actionClass} mt-7`} href="https://www.linkedin.com/in/abdullahshermuhammad/" target="_blank" rel="noopener noreferrer">Connect with Abdullah <ArrowRight size={17} /></a>
      <p className="mt-4 text-xs text-muted">You can close this page now. Connecting on LinkedIn is optional.</p>
    </div>
  </FormCard>;

  const question = steps[step];
  return <FormCard>
    <div className="flex items-center justify-between text-xs font-extrabold tracking-widest text-highlight">
      <span>STEP {step + 1} OF 5</span>
      <span>{(step + 1) * 20}%</span>
    </div>
    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-selected" role="progressbar" aria-valuenow={(step + 1) * 20} aria-valuemin={0} aria-valuemax={100} aria-label="Assessment progress">
      <div className={`h-full rounded-full bg-accent transition-all ${['w-1/5', 'w-2/5', 'w-3/5', 'w-4/5', 'w-full'][step]}`} />
    </div>
    {step < 4 ? <div>
      <h2 className="mt-8 text-2xl font-bold">{question.title}</h2>
      <p className="mt-2 text-sm text-muted">{question.hint}</p>
      <div className="mt-7 grid gap-3">{question.choices.map(choice => <button key={choice} type="button" aria-pressed={answers[question.field] === choice} onClick={() => set(question.field, choice)} className={`rounded border p-4 text-left text-sm font-semibold transition-colors ${answers[question.field] === choice ? 'border-accent bg-selected text-link' : 'border-edge-strong bg-panel text-ink hover:border-accent'}`}>{choice}</button>)}</div>
      <div className="mt-7 flex items-center justify-between gap-4">
        {step > 0 ? <button type="button" onClick={() => setStep(current => current - 1)} className="font-semibold text-link">← Back</button> : <span />}
        <button type="button" onClick={next} className={actionClass}>Continue <ArrowRight size={17} /></button>
      </div>
    </div> :
      <form onSubmit={send} className="mt-8 flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">Where should I send the next step?</h2>
        <p className="mt-2 text-sm text-muted">A little context helps me review your workflow.</p>
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this field blank<input tabIndex={-1} autoComplete="off" value={answers.websiteConfirm} onChange={event => set('websiteConfirm', event.target.value)} /></label>
      </div>
      <FormField label="Your name *">
        <input required minLength={2} maxLength={100} autoComplete="name" value={answers.name} onChange={event => set('name', event.target.value)} />
      </FormField>
      <FormField label="Work email *">
        <input required type="email" maxLength={200} autoComplete="email" value={answers.email} onChange={event => set('email', event.target.value)} />
      </FormField>
      <FormField label="Company *">
        <input required minLength={2} maxLength={150} autoComplete="organization" value={answers.company} onChange={event => set('company', event.target.value)} />
      </FormField>
      <FormField label="Business website (optional)">
        <input type="url" placeholder="https://" maxLength={250} value={answers.website} onChange={event => set('website', event.target.value)} />
      </FormField>
      <FormField label="Current tools (optional)">
        <input placeholder="CRM, email, forms, calendars…" maxLength={350} value={answers.currentTools} onChange={event => set('currentTools', event.target.value)} />
      </FormField>
      <FormField label="Describe the process (optional)">
        <textarea maxLength={2000} placeholder="What happens today? Where does it get stuck?" value={answers.details} onChange={event => set('details', event.target.value)} />
      </FormField>
      <div className="flex items-center justify-between gap-4">
        <button type="button" onClick={() => setStep(3)} className="font-semibold text-link">← Back</button>
        <button type="submit" disabled={status === 'sending'} className={actionClass}>
          {status === 'sending' ? 'Saving…' : 'Send my assessment'}
          <ArrowRight size={17} />
        </button>
      </div>
      <p className="text-xs leading-relaxed text-muted">Your details are used to review and respond to this enquiry. Read the <Link href="/privacy" className="underline hover:text-highlight">privacy note</Link>.</p>
    </form>}
    {error && <p className="mt-5 text-sm font-semibold text-red-700" role="alert">{error}</p>}
  </FormCard>;
}
