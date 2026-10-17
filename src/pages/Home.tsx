import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import content from '../content';
import { routes } from '../data/routes';
import { contactInfo } from '../data/contactInfo';
import HeroSlideshow, { Slide } from '../components/shared/HeroSlideshow';
import Reveal from '../components/shared/Reveal';
import ParallaxBand from '../components/shared/ParallaxBand';

const slides: Slide[] = [
  { src: require('../assets/hero/office.webp'), alt: 'Dr. Joe Rietow in front of Rietow Family Dentistry', focus: '50% 70%' },
  { src: require('../assets/hero/team-holiday.webp'), alt: 'The Rietow Family Dentistry team', focus: '50% 35%' },
  { src: require('../assets/hero/team-halloween.webp'), alt: 'The team dressed up for Halloween at the office', focus: '50% 40%' },
  { src: require('../assets/hero/family.webp'), alt: 'Dr. Joe Rietow with his family', focus: '55% 45%' },
];

const highlights = [
  { Icon: SentimentSatisfiedAltOutlinedIcon, text: 'Comfort-first care for kids & adults' },
  { Icon: AutoAwesomeOutlinedIcon, text: 'Cosmetic dentistry & whitening' },
  { Icon: LocalHospitalOutlinedIcon, text: 'Same-day emergency care' },
];

const featuredServices = [
  {
    Icon: CleanHandsOutlinedIcon,
    title: 'Preventive Care',
    desc: 'Exams, cleanings, and x-rays that keep small problems from becoming big ones.',
    category: 'routine',
  },
  {
    Icon: AutoAwesomeOutlinedIcon,
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and bonding for a smile you love showing off.',
    category: 'cosmetics',
  },
  {
    Icon: BuildOutlinedIcon,
    title: 'Restorative',
    desc: 'Tooth-colored fillings, crowns, bridges, and implants that look natural.',
    category: 'general',
  },
];

const HomePage = () => (
  <>
    <Helmet>
      <title>Rietow Family Dentistry | Family & Cosmetic Dentist in Greenwood, IN</title>
      <meta
        name="description"
        content="Gentle, high-quality family and cosmetic dentistry in Greenwood, Indiana. Offering cleanings, whitening, implants, Invisalign, and more."
      />
      <link rel="canonical" href="https://www.rietowfamilydentistry.com/" />
    </Helmet>

    <HeroSlideshow slides={slides}>
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Stack spacing={2.5} sx={{ maxWidth: 560, pt: { xs: 12, md: 0 } }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -0.5,
              fontSize: { xs: '2.3rem', md: '3.5rem' },
              textShadow: '0 2px 12px rgba(0,0,0,0.35)',
            }}
          >
            {content.homePage.welcomeTitle}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, opacity: 0.92, lineHeight: 1.5 }}>
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
              sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,0.7)', '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.1)' } }}
            >
              Call {contactInfo.phone}
            </Button>
          </Stack>
          <Stack spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {highlights.map(({ Icon, text }) => (
              <Stack key={text} direction="row" spacing={1} alignItems="center">
                <Icon fontSize="small" />
                <Typography variant="body2">{text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </HeroSlideshow>

    {/* Featured services */}
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 9 } }}>
      <Reveal>
        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 1 }}>
          Care for every smile in the family
        </Typography>
        <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 5 }}>
          From first cleanings to complete smile makeovers.
        </Typography>
      </Reveal>
      <Grid container spacing={3}>
        {featuredServices.map(({ Icon, title, desc, category }, i) => (
          <Grid key={title} item xs={12} md={4}>
            <Reveal delay={i * 120}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.25s, box-shadow 0.25s',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component={RouterLink}
                  to={`${routes.services}?category=${category}`}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        mb: 2,
                      }}
                    >
                      <Icon />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', lineHeight: 1.7 }}>
                      {desc}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mt: 2, color: 'primary.main', fontWeight: 600 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Learn more
                      </Typography>
                      <ArrowForwardIcon fontSize="small" />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Reveal>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button component={RouterLink} to={routes.services} endIcon={<ArrowForwardIcon />}>
          See all services
        </Button>
      </Box>
    </Container>

    {/* About */}
    <Box sx={{ bgcolor: 'common.white', py: { xs: 6, md: 9 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={5}>
            <Reveal>
              <Box
                component="img"
                src={require('../assets/joe-with-patient/image1.webp')}
                alt="Dr. Joe Rietow with a young patient"
                loading="lazy"
                sx={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 4, boxShadow: 6 }}
              />
            </Reveal>
          </Grid>
          <Grid item xs={12} md={7}>
            <Reveal delay={150}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>
                Meet Dr. Joe
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
                Care that feels personal
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.85, whiteSpace: 'pre-line' }}>
                {content.homePage.aboutDentistry.description.trim().replace(/\n\s+/g, ' ')}
              </Typography>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to={routes.team}
                endIcon={<ArrowForwardIcon />}
                sx={{ mt: 3 }}
              >
                Meet our team
              </Button>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Parallax call-to-action */}
    <ParallaxBand image={require('../assets/hero/office-night.webp')}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Reveal>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
            New patients welcome
          </Typography>
          <Typography sx={{ opacity: 0.9, mb: 4, fontSize: '1.1rem' }}>
            Ask about free nitrous oxide for numbing injections and our membership plans for patients without
            insurance.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="center">
            <Button variant="contained" size="large" component={RouterLink} to={routes.contact}>
              Request Appointment
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={RouterLink}
              to={routes.discount}
              sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,0.7)', '&:hover': { borderColor: 'common.white' } }}
            >
              View Membership Plans
            </Button>
          </Stack>
        </Reveal>
      </Container>
    </ParallaxBand>
  </>
);

export default HomePage;
