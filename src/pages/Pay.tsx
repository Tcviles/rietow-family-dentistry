import { Box, Button, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import PageShell from '../components/layout/PageShell';
import { routes } from '../data/routes';

function PayPage() {
  return (
    <>
      <Helmet>
        <title>Pay Online | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="Need to pay your dental bill? Contact Rietow Family Dentistry and our team will direct you to our secure payment options."
        />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/pay" />
      </Helmet>

      <PageShell title="Pay Online">
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
          <Typography paragraph>
            Online payment setup is currently in progress. Please call us and we can process your payment right away.
          </Typography>
          <Button variant="contained" href="tel:317-888-7576" sx={{ mr: 1 }}>
            Call (317) 888-7576
          </Button>
          <Button variant="outlined" href={routes.contact}>
            Contact Us
          </Button>
        </Box>
      </PageShell>
    </>
  );
}

export default PayPage;
