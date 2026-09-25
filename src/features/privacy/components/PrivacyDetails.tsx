import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function PrivacyDetails() {
  return <section className="pb-24">
    <Container className="max-w-[900px] space-y-8 leading-[1.75] text-muted">
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">What the assessment collects</h2>
        <p>If you complete the form, it collects your name, work email, company, optional website, business type, workflow concerns, approximate enquiry volume, timing and any process details you choose to share.</p>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">How it is used</h2>
        <p>This information is used to review your request, identify a possible automation starting point and contact you about your enquiry. It is not displayed publicly. Please avoid entering passwords, financial account details or sensitive customer information.</p>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">Form delivery and retention</h2>
        <p>When you submit an enquiry, its details are delivered to our form provider for Abdullah to review and respond. GitHub Pages does not store the submission. The form provider&apos;s privacy and retention terms also apply. You can ask Abdullah to delete information you shared.</p>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">Website analytics</h2>
        <p>We use Microsoft Clarity to understand how visitors use this site through usage analytics, heatmaps and session recordings. Clarity may collect information such as pages viewed, clicks, scrolling and device details. Form fields and other sensitive content are masked by default. Read the <a className="underline hover:text-link" href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft privacy statement</a> for more information.</p>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">External links</h2>
        <p>Links to LinkedIn and Devisgon take you to separate websites with their own privacy practices. This site does not currently embed an external booking calendar.</p>
      </div>
      <div>
        <h2 className="mb-2 text-2xl font-bold text-ink">Contact</h2>
        <p>To ask about your information or request deletion, contact Abdullah through <a className="underline hover:text-link" href="https://www.linkedin.com/in/abdullahshermuhammad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </div>
      <Link href="/assessment" className="inline-flex font-bold text-link hover:text-highlight">Return to the assessment →</Link>
    </Container>
  </section>;
}
