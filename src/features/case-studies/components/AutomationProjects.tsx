import { Container } from '@/components/ui/Container';

type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string;
};

// Keep this list in the order supplied by Abdullah. Descriptions avoid unverified
// deployment claims, client results, and capabilities absent from the source work.
const projects: Project[] = [
  {
    title: 'Google Workspace Job Posting, Trade-Agent Bidding & Contractor Hiring Automation System',
    category: 'Hiring operations',
    summary: 'A Google Workspace workflow for coordinating job postings, trade-agent bids and contractor hiring steps.',
    stack: 'Google Workspace · Workflow automation',
  },
  {
    title: 'AI Agent CRM Integration — Zapier-Powered Slack, Notion & AI Workflow Automation',
    category: 'AI & CRM',
    summary: 'Connects CRM work with Slack and Notion through Zapier and an AI-assisted workflow.',
    stack: 'Zapier · Slack · Notion · AI',
  },
  {
    title: 'Telegram AI Voice Assistant — n8n, OpenAI & Custom Text-to-Speech Automation',
    category: 'AI assistants',
    summary: 'A Telegram assistant workflow that combines OpenAI responses with custom text-to-speech output.',
    stack: 'Telegram · n8n · OpenAI · Text-to-speech',
  },
  {
    title: 'Meta Ads AI Marketing Automation — n8n-Powered Ad Creative Generation & Facebook Campaign Publishing',
    category: 'Marketing',
    summary: 'An n8n workflow for AI-assisted ad creative generation and Facebook campaign publishing.',
    stack: 'n8n · Meta Ads · AI',
  },
  {
    title: 'AI Voice Meeting Assistant — Conversational Meeting Scheduling & Calendly Automation',
    category: 'AI assistants',
    summary: 'A conversational voice workflow for arranging meetings through Calendly.',
    stack: 'AI voice · Calendly · Scheduling',
  },
  {
    title: 'Google Sheets-to-Clay Data Synchronization — Google Apps Script & Webhook Automation',
    category: 'Data integration',
    summary: 'Synchronizes spreadsheet records with Clay through an Apps Script and webhook workflow.',
    stack: 'Google Sheets · Apps Script · Clay · Webhooks',
  },
  {
    title: 'GoHighLevel Lead Generation & Sales Automation — LinkedIn Outreach, CRM Pipelines, Appointment Scheduling & Email Workflows',
    category: 'Sales & CRM',
    summary: 'Brings outreach, lead pipeline stages, appointments and follow-up email into a GoHighLevel sales workflow.',
    stack: 'GoHighLevel · LinkedIn · CRM · Email',
  },
  {
    title: 'YouTube Liked Video Tracking Automation — IFTTT & Google Sheets Data Logging',
    category: 'Data integration',
    summary: 'Logs liked YouTube videos to Google Sheets with an IFTTT automation.',
    stack: 'IFTTT · YouTube · Google Sheets',
  },
  {
    title: 'Facebook Content Marketing Automation — Make.com, Google Sheets, Mailchimp & Google Calendar Integration',
    category: 'Marketing',
    summary: 'Coordinates Facebook content planning and email marketing data across Sheets, Mailchimp and Calendar.',
    stack: 'Make · Facebook · Google Sheets · Mailchimp',
  },
  {
    title: 'Hotel Booking Operations Automation — Make.com, Jotform, Airtable, Google Sheets, Asana & ActiveCampaign',
    category: 'Operations',
    summary: 'Connects booking form intake with records, task management and email follow-up tools.',
    stack: 'Make · Jotform · Airtable · Asana · ActiveCampaign',
  },
  {
    title: 'Google Sheets-to-Clay Lead Data Integration — Make.com & HTTP Automation',
    category: 'Data integration',
    summary: 'A separate Sheets-to-Clay lead data workflow built with Make and HTTP requests.',
    stack: 'Make · HTTP · Google Sheets · Clay',
  },
  {
    title: 'IT Support Ticket Notification Automation — Make.com, monday.com, Airtable & Twilio',
    category: 'Support operations',
    summary: 'Links IT ticket records and status information with automated notifications.',
    stack: 'Make · monday.com · Airtable · Twilio',
  },
  {
    title: 'HubSpot Contact Management & Gmail Notification Automation — n8n, Jotform & Google Sheets Integration',
    category: 'Sales & CRM',
    summary: 'Moves contact-form information through an n8n and HubSpot workflow with Gmail notifications.',
    stack: 'n8n · HubSpot · Jotform · Google Sheets · Gmail',
  },
  {
    title: 'Automated PDF Invoice Generation & Email Delivery — Pabbly Connect & Google Workspace Business Process Automation',
    category: 'Finance operations',
    summary: 'Uses form and document data to prepare PDF invoices and send them by email through a connected Google Workspace process.',
    stack: 'Pabbly Connect · Google Forms · Docs · Drive · Gmail',
  },
  {
    title: 'QuickBooks Invoice Digitization & Webhook Automation Platform — React, Node.js, MongoDB & AWS S3',
    category: 'Finance systems',
    summary: 'A custom application for moving QuickBooks invoice information into a connected platform through webhooks.',
    stack: 'React · Node.js · MongoDB · AWS S3 · Webhooks',
  },
  {
    title: 'Slack Response Tracking & Google Sheets Automation — Zapier Workflow Integration',
    category: 'Team operations',
    summary: 'Tracks Slack responses in Google Sheets using a Zapier workflow.',
    stack: 'Zapier · Slack · Google Sheets',
  },
  {
    title: 'AI-Powered Automated Support Ticket Management — n8n, HubSpot, OpenAI, Notion & Jotform',
    category: 'AI & support',
    summary: 'Routes support form submissions through an AI-assisted ticket workflow across HubSpot and Notion.',
    stack: 'n8n · HubSpot · OpenAI · Notion · Jotform',
  },
  {
    title: 'Jira Service Management IT Support & Ticket Workflow Automation',
    category: 'Support operations',
    summary: 'Automates steps in an IT support ticket workflow using Jira Service Management.',
    stack: 'Jira Service Management · Ticket automation',
  },
  {
    title: 'Twitter/X Profile Data Scraping Platform — Python, Selenium & Web Automation',
    category: 'Data extraction',
    summary: 'A web form takes a designation and location, then Python and Selenium gather matching profile information for spreadsheet export.',
    stack: 'Python · Selenium · Twitter/X · Excel',
  },
  {
    title: 'LinkedIn Profile Scraping AI Agent — n8n, OpenAI, Google Sheets & Window Buffer Memory',
    category: 'AI & research',
    summary: 'A conversational research agent uses a LinkedIn profiles tool and session memory to handle follow-up requests.',
    stack: 'n8n · OpenAI · LinkedIn profiles tool · Google Sheets',
  },
  {
    title: 'Square Dashboard Inventory, Purchase Order & Sales Automation — Python, Google Apps Script & Google Sheets',
    category: 'Retail operations',
    summary: 'Coordinates Square catalog exports, purchase-order status processing and sales reports with Python and spreadsheet automation.',
    stack: 'Square · Python · Apps Script · Google Sheets',
  },
  {
    title: 'HCPA Business Process Automation & Pipedrive CRM Architecture — Pipedrive, Zapier, Make.com, Google Ads, Meta & Marketing Automation',
    category: 'Process analysis & architecture',
    summary: 'A cross-department process review and Pipedrive-centered automation roadmap covering sales, marketing and operations. The documented work is solution architecture, not a claim that every proposed integration was deployed.',
    stack: 'Pipedrive · Zapier · Make · Google Ads · Meta',
  },
];

export function AutomationProjects() {
  return <section aria-labelledby="automation-projects-heading" className="pb-20">
    <Container>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold tracking-widest text-highlight">AUTOMATION PORTFOLIO</p>
          <h2 id="automation-projects-heading" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">22 projects across connected systems</h2>
        </div>
        <p className="max-w-lg text-sm leading-relaxed text-muted">Each entry describes the workflow and tools. Project-specific results and deployment details are omitted where they are not documented.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => <article key={project.title} className="flex h-full flex-col rounded-lg border border-edge bg-panel p-6">
          <div className="flex items-center justify-between gap-4 text-xs font-extrabold tracking-widest text-highlight">
            <span>{project.category.toUpperCase()}</span><span aria-label={`Project ${index + 1}`}>{String(index + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight">{project.title}</h3>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
          <p className="mt-6 border-t border-edge pt-4 text-xs leading-relaxed text-muted"><span className="font-bold text-highlight">TOOLS</span><br />{project.stack}</p>
        </article>)}
      </div>
    </Container>
  </section>;
}
