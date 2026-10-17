import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { contactInfo } from '../data/contactInfo';
import { routes } from '../data/routes';

const checklist = [
  {
    icon: AccessTimeOutlinedIcon,
    title: 'Arrive 15 minutes early',
    text: 'Give yourself a few extra minutes to check in, especially if you are filling out forms here.',
  },
  {
    icon: BadgeOutlinedIcon,
    title: 'Bring your ID and insurance card',
    text: 'If you have dental insurance, bring your card so we can verify your benefits.',
  },
  {
    icon: MedicationOutlinedIcon,
    title: 'Know your medications',
    text: 'A list of current medications and allergies helps us care for you safely.',
  },
];

function PatientFormsPage() {
  return (
    <>
      <Helmet>
        <title>Patient Forms | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="Download new patient forms for Rietow Family Dentistry in Greenwood, IN, and learn what to bring to your first visit."
        />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/forms" />
      </Helmet>

      <PageShell title="Patient Forms">
        <Box sx={{ textAlign: 'center', maxWidth: 640, mx: 'auto', mb: 5 }}>
          <AssignmentOutlinedIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            New patient forms
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
            Save time at your first visit by printing and filling out our new patient forms at home. Bring the
            completed forms with you to your appointment. Don't have a printer? No problem: you can fill them
            out at the front desk.
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/forms/new-patient-forms.pdf"
            target="_blank"
            rel="noopener"
            startIcon={<DownloadOutlinedIcon />}
          >
            Download New Patient Forms (PDF)
          </Button>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
            Patient information, health history, and dental history (3 pages)
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {checklist.map(({ icon: Icon, title, text }) => (
            <Grid item xs={12} md={4} key={title}>
              <Box
                sx={{
                  height: '100%',
                  boxSizing: 'border-box',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'grey.50',
                  border: '1px solid',
                  borderColor: 'grey.200',
                }}
              >
                <Icon color="primary" sx={{ mb: 1 }} />
                <Typography sx={{ fontWeight: 600, mb: 0.5 }}>{title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  {text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
          <Button variant="outlined" size="large" href={contactInfo.phoneLink}>
            Questions? Call {contactInfo.phone}
          </Button>
          <Button variant="outlined" size="large" component={RouterLink} to={routes.contact}>
            Send Us a Message
          </Button>
        </Stack>
      </PageShell>
    </>
  );
}

export default PatientFormsPage;
