import { Box, Button, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageShell from '../components/layout/PageShell';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../data/routes';

function PatientFormsPage() {
  return (
    <>
      <Helmet>
        <title>Patient Forms | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="Access patient forms for Rietow Family Dentistry. Complete forms before your appointment to save time at check-in."
        />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/forms" />
      </Helmet>

      <PageShell title="Patient Forms">
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          <Typography paragraph>
            We are currently updating our online forms. Please call our office and we can help you complete everything before your visit.
          </Typography>
          <Button variant="contained" component={RouterLink} to={routes.contact}>
            Contact Our Office
          </Button>
        </Box>
      </PageShell>
    </>
  );
}

export default PatientFormsPage;
