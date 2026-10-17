import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { contactInfo } from '../data/contactInfo';

const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL;

const INQUIRIES = [
  'kids',
  'cleaning',
  'fillings',
  'extractions',
  'whitening',
  'invisalign',
  'implants',
  'dentures',
] as const;
type Inquiry = (typeof INQUIRIES)[number];

type TextFields = 'firstName' | 'lastName' | 'email' | 'phone' | 'notes';
type FieldErrors = Partial<Record<TextFields | 'form', string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

const emptyForm: Record<TextFields, string> = { firstName: '', lastName: '', email: '', phone: '', notes: '' };

const label = (inquiry: Inquiry) => inquiry.charAt(0).toUpperCase() + inquiry.slice(1);

// Fallback when the API isn't configured (e.g. local dev without the env var):
// open the patient's email app with the request filled in.
function openMailto(form: Record<TextFields, string>, inquiries: Inquiry[]) {
  const body = [
    `Name: ${form.firstName} ${form.lastName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Interested in: ${inquiries.length ? inquiries.map(label).join(', ') : 'Not specified'}`,
    '',
    form.notes,
  ].join('\n');
  const subject = `Appointment request from ${form.firstName} ${form.lastName}`;
  window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  // Hidden from people; bots that fill every field get silently ignored by the API.
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleInquiry = (inquiry: Inquiry) =>
    setInquiries((prev) => (prev.includes(inquiry) ? prev.filter((i) => i !== inquiry) : [...prev, inquiry]));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!CONTACT_API_URL) {
      openMailto(form, inquiries);
      return;
    }

    setStatus('sending');
    setErrors({});
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...form, inquiries, website: honeypot }),
      });
      const result = await res.json().catch(() => ({}));
      if (res.ok && result.ok) {
        setStatus('sent');
        return;
      }
      setErrors(result.errors ?? { form: 'Something went wrong.' });
      setStatus('error');
    } catch {
      setErrors({ form: 'We could not reach our server.' });
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <Box sx={{ textAlign: 'center', py: 6, px: 2 }}>
        <CheckCircleOutlineIcon color="success" sx={{ fontSize: 56, mb: 1 }} />
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Thanks, {form.firstName}! We got your message.
        </Typography>
        <Typography color="text.secondary">
          Our team will reach out soon. If it's urgent, please call us at{' '}
          <a href={contactInfo.phoneLink}>{contactInfo.phone}</a>.
        </Typography>
      </Box>
    );
  }

  const textField = (name: TextFields, fieldLabel: string, props: object = {}) => (
    <TextField
      label={fieldLabel}
      name={name}
      value={form[name]}
      onChange={handleChange}
      error={!!errors[name]}
      helperText={errors[name]}
      fullWidth
      {...props}
    />
  );

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {textField('firstName', 'First name', { required: true, autoComplete: 'given-name' })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {textField('lastName', 'Last name', { required: true, autoComplete: 'family-name' })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {textField('email', 'Email', { required: true, type: 'email', autoComplete: 'email' })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {textField('phone', 'Phone', { required: true, type: 'tel', autoComplete: 'tel' })}
        </Grid>
  
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            What can we help with?
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
            }}
          >
            {INQUIRIES.map((inquiry) => (
              <FormControlLabel
                key={inquiry}
                control={
                  <Checkbox checked={inquiries.includes(inquiry)} onChange={() => toggleInquiry(inquiry)} />
                }
                label={label(inquiry)}
              />
            ))}
          </Box>
        </Grid>
  
        <Grid item xs={12}>
          {textField('notes', 'Notes', {
            multiline: true,
            rows: 4,
            placeholder: 'Preferred days or times, questions, anything we should know',
          })}
        </Grid>
  
        {/* Honeypot: off-screen and skipped by keyboard and screen readers */}
        <Box
          component="input"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={honeypot}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setHoneypot(e.target.value)}
          sx={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
        />
  
        {status === 'error' && (
          <Grid item xs={12}>
            <Alert severity="error">
              {errors.form ?? 'Please fix the highlighted fields.'} You can also call us at{' '}
              <a href={contactInfo.phoneLink}>{contactInfo.phone}</a>.
            </Alert>
          </Grid>
        )}
  
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={status === 'sending'}
            startIcon={status === 'sending' ? <CircularProgress size={18} color="inherit" /> : undefined}
          >
            {status === 'sending' ? 'Sending…' : 'Send Request'}
          </Button>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            Please don't include sensitive medical details. We'll follow up by phone or email.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
