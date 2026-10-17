import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import content from '../content';
import { routes } from '../data/routes';
import { contactInfo } from '../data/contactInfo';

// Optional icons
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Rietow Family Dentistry | Family & Cosmetic Dentist in Greenwood, IN</title>
        <meta
          name="description"
          content="Gentle, high-quality family and cosmetic dentistry in Greenwood, Indiana. Offering cleanings, whitening, implants, Invisalign, and more."
        />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/" />
      </Helmet>

      {/* Page background */}
      <Box sx={{ bgcolor: 'grey.100', pb: { xs: 6, md: 10 } }}>
        {/* HERO */}
        <Box
          sx={{
            bgcolor: 'common.white',
            borderRadius: { xs: 0, md: 4 },
            boxShadow: { xs: 0, md: 2 },
            mt: { xs: 0, md: 3 },
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={2.2}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      letterSpacing: -0.5,
                      lineHeight: 1.1,
                    }}
                  >
                    {content.homePage.welcomeTitle}
                  </Typography>

                  <Typography variant="h6" sx={{ color: 'text.secondary', lineHeight: 1.5 }}>
                    Gentle family dentistry, modern cosmetic options, and a team that makes visits feel easy.
                  </Typography>

                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                    <Button variant="contained" size="large" component={RouterLink} to={routes.contact}>
                      Request Appointment
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      href={contactInfo.phoneLink}
                    >
                      Call {contactInfo.phone}
                    </Button>
                  </Stack>

                  <Stack spacing={1} sx={{ pt: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <SentimentSatisfiedAltOutlinedIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Comfort-first care for kids & adults
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AutoAwesomeOutlinedIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Cosmetic dentistry & whitening options
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LocalHospitalOutlinedIcon color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        Modern technology, conservative treatment approach
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={require('../assets/JoeInfrontOfOffice.webp')}
                  alt="Dr. Joe Rietow in front of dental office"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 3,
                    boxShadow: 4,
                    display: 'block',
                  }}
                />

              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* QUICK SERVICES / HIGHLIGHTS */}
        <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
          <Grid container spacing={2.5}>
            {[
              { title: 'Preventive Care', desc: 'Exams, cleanings, and long-term oral health.' },
              { title: 'Cosmetic Dentistry', desc: 'Whitening and smile-enhancing options.' },
              { title: 'Restorative', desc: 'Crowns, fillings, and comfortable solutions.' },
            ].map((item) => (
              <Grid key={item.title} item xs={12} md={4}>
                <Card sx={{ borderRadius: 3, height: '100%' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ABOUT (your current text, but better container rhythm) */}
        <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 } }}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Grid container spacing={4} alignItems="center">
                {/* <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src={require('../assets/JoeInfrontOfOffice.webp')}
                    alt="Rietow Family Dentistry office"
                    sx={{
                      width: '100%',
                      borderRadius: 3,
                      aspectRatio: '4 / 3',
                      objectFit: 'cover',
                      bgcolor: 'grey.200',
                    }}
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>
                    Care that feels personal
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.85,
                      maxWidth: { xs: '100%', md: '62ch' }
                    }}
                  >
                    {content.homePage.aboutDentistry.description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
