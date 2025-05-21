import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import MeetDrJoe from '../components/shared/MeetDrJoe';
import OfficeInfo from '../components/shared/OfficeInfo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="Reach out to Rietow Family Dentistry to book an appointment, ask a question, or learn more about our services in Greenwood, Indiana."
        />
        <meta property="og:title" content="Contact Rietow Family Dentistry" />
        <meta
          property="og:description"
          content="Call, message, or visit Rietow Family Dentistry in Greenwood, IN. We’re happy to welcome new and existing patients!"
        />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/contact" />
      </Helmet>

      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'italic',
              fontWeight: 600,
              mb: 1,
              textAlign: 'center',
            }}
          >
            Contact Us
          </Typography>

          <Divider
            sx={{
              width: 60,
              borderBottomWidth: 3,
              borderColor: 'primary.main',
              mx: 'auto',
              my: 3,
            }}
          />

          {/* Office Info + Dr. Joe */}
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={7}>
              <OfficeInfo />
            </Grid>
            <Grid item xs={12} md={5}>
              <MeetDrJoe />
            </Grid>
          </Grid>

          {/* Virtual Tour */}
          <Box sx={{ my: 6 }}>
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
              Take a Virtual Tour of Our Office
            </Typography>
            <Button
              href="https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu"
              target="_blank"
              sx={{ display: 'block', width: '100%' }}
            >
              <Box
                component="img"
                src={require('../media/VirtualTour.png')}
                alt="Virtual Tour of the dental office"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </Button>
          </Box>

          {/* Contact Form */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Get in Touch
            </Typography>
            <ContactForm />
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default ContactPage;