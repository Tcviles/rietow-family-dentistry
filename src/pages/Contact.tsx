import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import MeetDrJoe from '../components/shared/MeetDrJoe';
import OfficeInfo from '../components/shared/OfficeInfo';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
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
              alt="Virtual Tour"
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
  );
};

export default ContactPage;
