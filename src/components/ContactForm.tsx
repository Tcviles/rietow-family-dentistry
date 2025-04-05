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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    // TODO: Add backend/form handler integration here
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
                  Submit
                </Button>
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
            You will be directed to a new page.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/pay-now" // Replace when you get the provider link
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