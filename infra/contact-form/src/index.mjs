import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import { buildEmail, validate } from './contact.mjs';

const ses = new SESv2Client({});
const { TO_EMAIL, FROM_EMAIL } = process.env;

const respond = (statusCode, body) => ({
  statusCode,
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body),
});

export async function handler(event) {
  let body;
  try {
    const raw = event.isBase64Encoded ? Buffer.from(event.body ?? '', 'base64').toString() : event.body;
    body = JSON.parse(raw ?? '');
  } catch {
    return respond(400, { ok: false, errors: { form: 'Invalid request.' } });
  }

  const result = validate(body);
  if (!result.ok) return respond(400, result);
  // Pretend success so bots don't learn the honeypot exists.
  if (result.spam) return respond(200, { ok: true });

  const email = buildEmail(result.data);
  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `Rietow Family Dentistry Website <${FROM_EMAIL}>`,
        Destination: { ToAddresses: [TO_EMAIL] },
        ReplyToAddresses: [result.data.email],
        Content: {
          Simple: {
            Subject: { Data: email.subject, Charset: 'UTF-8' },
            Body: {
              Text: { Data: email.text, Charset: 'UTF-8' },
              Html: { Data: email.html, Charset: 'UTF-8' },
            },
          },
        },
      })
    );
  } catch (err) {
    // Log only the error, never the submission: it may contain health information.
    console.error('SES send failed', err.name, err.message);
    return respond(502, { ok: false, errors: { form: 'We could not send your message. Please call us.' } });
  }

  return respond(200, { ok: true });
}
