import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildEmail, validate } from '../src/contact.mjs';

const valid = {
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@example.com',
  phone: '(317) 555-1234',
  notes: 'Tooth hurts',
  inquiries: ['cleaning', 'whitening'],
};

test('accepts a valid submission', () => {
  const result = validate(valid);
  assert.equal(result.ok, true);
  assert.deepEqual(result.data.inquiries, ['cleaning', 'whitening']);
});

test('requires name, email, and phone', () => {
  const result = validate({});
  assert.equal(result.ok, false);
  assert.deepEqual(Object.keys(result.errors).sort(), ['email', 'firstName', 'lastName', 'phone']);
});

test('drops unknown inquiries and duplicates', () => {
  const result = validate({ ...valid, inquiries: ['cleaning', 'cleaning', 'hacking'] });
  assert.deepEqual(result.data.inquiries, ['cleaning']);
});

test('rejects oversized notes', () => {
  const result = validate({ ...valid, notes: 'x'.repeat(5001) });
  assert.equal(result.ok, false);
  assert.ok(result.errors.notes);
});

test('flags honeypot submissions as spam', () => {
  assert.deepEqual(validate({ ...valid, website: 'http://spam' }), { ok: true, spam: true });
});

test('escapes HTML in the email body', () => {
  const { data } = validate({ ...valid, notes: '<script>alert(1)</script>' });
  const email = buildEmail(data);
  assert.ok(!email.html.includes('<script>'));
  assert.ok(email.html.includes('&lt;script&gt;'));
  assert.equal(email.subject, 'New appointment request: Jane Doe');
  assert.ok(email.text.includes('Interested in: Cleaning, Whitening'));
});
