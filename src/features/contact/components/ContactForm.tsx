'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { FormField } from '@/components/ui/FormField';
import { FormCard } from '@/components/ui/FormCard';
import { submitLead } from '@/lib/lead-form';

const initial = { name: '', email: '', company: '', website: '', businessType: '', bottleneck: '', currentTools: '', timeline: '', details: '', websiteConfirm: '' };
const submitClass = 'mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-accent disabled:cursor-wait disabled:opacity-60';

export function ContactForm({ kind = 'project' }: { kind?: 'project' | 'review' }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState('');
  const set = (key: keyof typeof form, value: string) => setForm(previous => ({ ...previous, [key]: value }));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setError('');
    try {
      if (form.websiteConfirm) { setStatus('sent'); return; }
      await submitLead({ ...form, volume: 'Not provided', source: kind === 'review' ? '15-minute review request' : 'Contact request', bottleneck: kind === 'review' ? `Request a 15-minute automation review: ${form.bottleneck}` : form.bottleneck });
      setStatus('sent');
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not send request.');
      setStatus('idle');
    }
  }

  if (status === 'sent') return <FormCard>
    <div role="status">
      <Check size={32} className="text-accent" />
      <h2 className="mt-5 text-2xl font-bold">Thanks — your request is in.</h2>
      <p className="mt-4 leading-relaxed text-muted">{kind === 'review' ? 'This is a request for a review, not a confirmed appointment. I’ll follow up by email about the next step.' : 'I’ll review the workflow details you sent and follow up by email if there is a fit.'}</p>
      <Link className={submitClass} href="/services">Explore the services <ArrowRight size={17} /></Link>
    </div>
  </FormCard>;

  return <FormCard>
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold">{kind === 'review' ? 'Request a short review' : 'Tell me about your workflow'}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">A few details help me understand the process before we speak.</p>
      </div>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Leave this field blank<input tabIndex={-1} autoComplete="off" value={form.websiteConfirm} onChange={event => set('websiteConfirm', event.target.value)} /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Your name *">
          <input required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={event => set('name', event.target.value)} />
        </FormField>
        <FormField label="Work email *">
          <input required type="email" maxLength={200} autoComplete="email" value={form.email} onChange={event => set('email', event.target.value)} />
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Company *">
          <input required minLength={2} maxLength={150} autoComplete="organization" value={form.company} onChange={event => set('company', event.target.value)} />
        </FormField>
        <FormField label="Business website">
          <input type="url" placeholder="https://" maxLength={250} value={form.website} onChange={event => set('website', event.target.value)} />
        </FormField>
      </div>
      <FormField label="Business type *">
        <select required value={form.businessType} onChange={event => set('businessType', event.target.value)}>
          <option value="">Select your business</option>
          {['Home services', 'Marketing or digital agency', 'Professional services', 'SaaS or technology', 'Other business'].map(choice => <option key={choice}>{choice}</option>)}
        </select>
      </FormField>
      <FormField label="What needs to change? *">
        <select required value={form.bottleneck} onChange={event => set('bottleneck', event.target.value)}>
          <option value="">Choose the biggest bottleneck</option>
          {['Missed calls', 'Lead response and follow-up', 'Customer support questions', 'Copying data between tools', 'Internal operations', 'Other automation need'].map(choice => <option key={choice}>{choice}</option>)}
        </select>
      </FormField>
      <FormField label="Current tools">
        <input maxLength={350} placeholder="CRM, email, calendar, phone…" value={form.currentTools} onChange={event => set('currentTools', event.target.value)} />
      </FormField>
      <FormField label="Tell me what happens today">
        <textarea maxLength={2000} placeholder="Where does the process start and get stuck?" value={form.details} onChange={event => set('details', event.target.value)} />
      </FormField>
      <FormField label="When are you looking to improve it? *">
        <select required value={form.timeline} onChange={event => set('timeline', event.target.value)}>
          <option value="">Choose a timeframe</option>
          {['Exploring options', 'Within 3 months', 'This month', 'As soon as possible'].map(choice => <option key={choice}>{choice}</option>)}
        </select>
      </FormField>
      <button className={submitClass} type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : kind === 'review' ? 'Request my 15-minute review' : 'Send my automation request'}
        <ArrowRight size={17} />
      </button>
      {error && <p className="text-sm font-semibold text-red-700" role="alert">{error}</p>}
      <p className="text-xs leading-relaxed text-muted">Your details are used to review and respond to this enquiry. Read the <Link href="/privacy" className="underline hover:text-accent">privacy note</Link>.</p>
    </form>
  </FormCard>;
}
