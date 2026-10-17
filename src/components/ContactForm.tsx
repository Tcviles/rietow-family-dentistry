import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  Grid,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../data/routes';
import { contactInfo } from '../data/contactInfo';

type InquiryFields =
  | 'kids'
  | 'cleaning'
  | 'fillings'
  | 'extractions'
  | 'whitening'
  | 'invisalign'
  | 'implants'
  | 'dentures';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  inquiries: Record<InquiryFields, boolean>;
}

const initialFormState: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notes: '',
  inquiries: {
    kids: false,
    cleaning: false,
    fillings: false,
    extractions: false,
    whitening: false,
    invisalign: false,
    implants: false,
    dentures: false,
  },
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      inquiries: {
        ...prev.inquiries,
        [name]: checked,
      },
    }));
  };

  // Until a form backend exists, hand the request to the patient's email app
  // so it actually reaches the office.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const services = (Object.keys(form.inquiries) as InquiryFields[])
      .filter((field) => form.inquiries[field])
      .map((field) => field.charAt(0).toUpperCase() + field.slice(1));
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Interested in: ${services.length ? services.join(', ') : 'Not specified'}`,
      '',
      form.notes,
    ].join('\n');
    const subject = `Appointment request from ${form.firstName} ${form.lastName}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const group1: InquiryFields[] = ['kids', 'cleaning', 'fillings', 'extractions'];
  const group2: InquiryFields[] = ['whitening', 'invisalign', 'implants', 'dentures'];

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Left: Contact Form */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Text fields */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              {/* Inquiry checkboxes */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>
                  Service Inquiries:
                </Typography>
                {group1.map((field) => (
                  <FormControlLabel
                    key={field}
                    control={
                      <Checkbox
                        name={field}
                        checked={form.inquiries[field]}
                        onChange={handleCheckbox}
                      />
                    }
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                ))}
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="body2" gutterBottom>
                  Service Inquiries (Cont’d):
                </Typography>
                {group2.map((field) => (
                  <FormControlLabel
                    key={field}
                    control={
                      <Checkbox
                        name={field}
                        checked={form.inquiries[field]}
                        onChange={handleCheckbox}
                      />
                    }
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                ))}
              </Grid>

              {/* Notes field */}
              <Grid item xs={12}>
                <TextField
                  label="Notes"
                  name="notes"
                  multiline
                  rows={4}
                  fullWidth
                  value={form.notes}
                  onChange={handleChange}
                />
              </Grid>

              {/* Submit button */}
              <Grid item xs={12}>
                <Button type="submit" variant="contained">
                  Send Request
                </Button>
                {submitted && (
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Your email app should open with your request filled in — just press send.
                    If nothing opened, email us at{' '}
                    <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a> or call{' '}
                    <a href={contactInfo.phoneLink}>{contactInfo.phone}</a>.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Right: Pay Online CTA */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Pay Your Bills Online
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Questions about a bill? We're happy to help.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to={routes.pay}
            fullWidth
          >
            Pay Online
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
