// Pure validation and email-building logic for the contact form, kept separate
// from the Lambda handler so it can be unit tested without AWS.

export const INQUIRIES = [
  'kids',
  'cleaning',
  'fillings',
  'extractions',
  'whitening',
  'invisalign',
  'implants',
  'dentures',
];

const LIMITS = { firstName: 100, lastName: 100, email: 200, phone: 40, notes: 5000 };
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const PHONE_RE = /^[0-9+().\-\s]{7,}$/;

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

// Returns { ok: true, data } or { ok: false, errors: { field: message } }.
// A filled-in honeypot field marks the submission as spam.
export function validate(body) {
  if (!body || typeof body !== 'object') return { ok: false, errors: { form: 'Invalid request.' } };
  if (clean(body.website)) return { ok: true, spam: true };

  const data = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email),
    phone: clean(body.phone),
    notes: clean(body.notes),
    inquiries: Array.isArray(body.inquiries)
      ? [...new Set(body.inquiries.filter((i) => INQUIRIES.includes(i)))]
      : [],
  };

  const errors = {};
  if (!data.firstName) errors.firstName = 'First name is required.';
  if (!data.lastName) errors.lastName = 'Last name is required.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'A valid email is required.';
  if (!PHONE_RE.test(data.phone)) errors.phone = 'A valid phone number is required.';
  for (const [field, max] of Object.entries(LIMITS)) {
    if (data[field].length > max) errors[field] = `Must be ${max} characters or fewer.`;
  }

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, data };
}

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

const titleCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export function buildEmail(data) {
  const name = `${data.firstName} ${data.lastName}`;
  const services = data.inquiries.length ? data.inquiries.map(titleCase).join(', ') : 'Not specified';
  const rows = [
    ['Name', name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Interested in', services],
    ['Notes', data.notes || '(none)'],
  ];

  const text = [
    'New appointment request from the website.',
    '',
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Reply to this email to respond to the patient directly.',
  ].join('\n');

  const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#222">
<h2 style="color:#BD1919;margin:0 0 12px">New appointment request</h2>
<table cellpadding="6" style="border-collapse:collapse">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="font-weight:bold;vertical-align:top;white-space:nowrap">${label}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`
  )
  .join('\n')}
</table>
<p style="color:#666;font-size:13px">Reply to this email to respond to the patient directly.</p>
</body></html>`;

  return { subject: `New appointment request: ${name}`.slice(0, 200), text, html };
}
