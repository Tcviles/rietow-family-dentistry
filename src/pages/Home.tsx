import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import content from '../content';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Rietow Family Dentistry | Family & Cosmetic Dentist in Greenwood, IN</title>
        <meta
          name="description"
          content="Gentle, high-quality family and cosmetic dentistry in Greenwood, Indiana. Offering cleanings, whitening, implants, Invisalign, and more."
        />
        <meta property="og:title" content="Rietow Family Dentistry | Greenwood, IN" />
        <meta
          property="og:description"
          content="Visit Rietow Family Dentistry for gentle family and cosmetic dental care. Accepting new patients of all ages in Greenwood, IN."
        />
        <meta property="og:image" content="https://www.rietowfamilydentistry.com/preview.jpg" />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/" />
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
            {content.homePage.welcomeTitle}
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

          {/* Main Grid */}
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={require('../media/JoeInfrontOfOffice.png')}
                alt="Dr. Joe Rietow in front of dental office"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
                {content.homePage.aboutDentistry.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default HomePage;
