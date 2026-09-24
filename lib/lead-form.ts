// GitHub Pages cannot receive form POST requests. A Formspree endpoint is set
// at build time through the repository's NEXT_PUBLIC_LEAD_FORM_ENDPOINT variable.
export const leadFormEndpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT || '';

export async function submitLead(values: Record<string, string>) {
  if (!leadFormEndpoint) {
    throw new Error('The online enquiry form is not configured yet. Please contact Abdullah on LinkedIn.');
  }

  const fields = new FormData();
  for (const [name, value] of Object.entries(values)) fields.set(name, value);

  const response = await fetch(leadFormEndpoint, {
    method: 'POST',
    body: fields,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(response.status === 429
      ? 'Please wait a moment and try again.'
      : 'Your request could not be sent. Please try again or contact Abdullah on LinkedIn.');
  }
}
