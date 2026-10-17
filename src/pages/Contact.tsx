import { ReactNode } from 'react';
import { Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm';
import PageBanner from '../components/layout/PageBanner';
import Reveal from '../components/shared/Reveal';
import { contactInfo } from '../data/contactInfo';
import { officeHours } from '../data/officeHours';

const VIRTUAL_TOUR_URL =
  'https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788';

const fullAddress = `${contactInfo.addressLine1}, ${contactInfo.addressLine2}`;
const mapsQuery = encodeURIComponent(fullAddress);

// officeHours is listed Monday-first; Date.getDay() is Sunday-first.
const todayIndex = (new Date().getDay() + 6) % 7;

type QuickCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

const QuickCard = ({ icon, title, children, action }: QuickCardProps) => (
  <Card
    sx={{
      height: '100%',
      boxSizing: 'border-box',
      p: 3,
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.25s, box-shadow 0.25s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
    }}
  >
    <Box
      sx={{
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: 1.5, color: 'text.secondary' }}>
      {title}
    </Typography>
    <Box sx={{ flexGrow: 1, mb: action ? 2 : 0 }}>{children}</Box>
    {action}
  </Card>
);

const ContactPage = () => (
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

    <PageBanner
      title="Contact Us"
      subtitle="New patients are always welcome. Give us a call, send a message, or stop by. We'd love to meet you."
      overlap
    />

    {/* Quick contact cards, overlapping the banner */}
    <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative' }}>
      <Grid container spacing={2.5}>
        <Grid item xs={12} sm={6} md={3}>
          <Reveal>
            <QuickCard
              icon={<PhoneInTalkOutlinedIcon />}
              title="Call"
              action={
                <Button variant="contained" href={contactInfo.phoneLink} fullWidth>
                  Tap to Call
                </Button>
              }
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {contactInfo.phone}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fastest way to book or reach us for an emergency.
              </Typography>
            </QuickCard>
          </Reveal>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Reveal delay={100}>
            <QuickCard
              icon={<MailOutlineIcon />}
              title="Email"
              action={
                <Button variant="outlined" href={`mailto:${contactInfo.email}`} fullWidth>
                  Send an Email
                </Button>
              }
            >
              <Typography sx={{ fontWeight: 700, fontSize: { md: '0.88rem' }, overflowWrap: 'anywhere' }}>
                {contactInfo.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We'll get back to you within one business day.
              </Typography>
            </QuickCard>
          </Reveal>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Reveal delay={200}>
            <QuickCard
              icon={<PlaceOutlinedIcon />}
              title="Visit"
              action={
                <Stack direction="row" spacing={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none' }}
                  >
                    Google Maps
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    href={`https://maps.apple.com/?q=${encodeURIComponent('Rietow Family Dentistry')}&address=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textTransform: 'none' }}
                  >
                    Apple Maps
                  </Button>
                </Stack>
              }
            >
              <Typography sx={{ fontWeight: 700 }}>{contactInfo.addressLine1}</Typography>
              <Typography sx={{ fontWeight: 700 }}>{contactInfo.addressLine2}</Typography>
            </QuickCard>
          </Reveal>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Reveal delay={300}>
            <QuickCard icon={<ScheduleOutlinedIcon />} title="Hours">
              {officeHours.map(({ day, hours }, i) => (
                <Stack
                  key={day}
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    py: 0.25,
                    px: 1,
                    mx: -1,
                    borderRadius: 1,
                    fontWeight: i === todayIndex ? 700 : 400,
                    bgcolor: i === todayIndex ? 'action.selected' : 'transparent',
                    color: hours === 'CLOSED' && i !== todayIndex ? 'text.secondary' : 'text.primary',
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
                    {day}
                    {i === todayIndex && ' (today)'}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'inherit' }}>
                    {hours === 'CLOSED' ? 'Closed' : hours}
                  </Typography>
                </Stack>
              ))}
            </QuickCard>
          </Reveal>
        </Grid>
      </Grid>
    </Container>

    {/* Form + map */}
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Reveal>
            <Card sx={{ p: { xs: 3, md: 4 }, borderRadius: 3, boxSizing: 'border-box', height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                Request an Appointment
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Fill out the form and our team will reach out to find a time that works for you.
              </Typography>
              <ContactForm />
            </Card>
          </Reveal>
        </Grid>

        <Grid item xs={12} md={5}>
          <Reveal delay={150}>
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Card sx={{ borderRadius: 3, overflow: 'hidden', flexGrow: 1, minHeight: 300 }}>
                <Box
                  component="iframe"
                  title="Map to Rietow Family Dentistry"
                  src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sx={{ border: 0, width: '100%', height: '100%', minHeight: 300, display: 'block' }}
                />
              </Card>

              <Card
                component="a"
                href={VIRTUAL_TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'relative',
                  display: 'block',
                  borderRadius: 3,
                  overflow: 'hidden',
                  aspectRatio: '16 / 9',
                  color: 'common.white',
                  textDecoration: 'none',
                  '& img': { transition: 'transform 0.5s' },
                  '&:hover img': { transform: 'scale(1.05)' },
                }}
              >
                <Box
                  component="img"
                  src={require('../assets/VirtualTour.webp')}
                  alt="Street view of the Rietow Family Dentistry office"
                  loading="lazy"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}
                  sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.45)' }}
                >
                  <ThreeSixtyIcon sx={{ fontSize: 44 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Take a Virtual Tour
                  </Typography>
                </Stack>
              </Card>
            </Stack>
          </Reveal>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default ContactPage;
