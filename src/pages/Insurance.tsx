import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  Stack,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Helmet } from 'react-helmet';
import PageShell from '../components/layout/PageShell';
import { Link as RouterLink } from 'react-router-dom';
import { contactInfo } from '../data/contactInfo';
import { routes } from '../data/routes';

const MembershipCard = ({
  title,
  price,
  features,
}: {
  title: string;
  price: number;
  features: string[];
}) => (
  <Card
    sx={{
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      // Straight brand-colored bar along the top edge
      backgroundImage: (t) => `linear-gradient(${t.palette.primary.main}, ${t.palette.primary.main})`,
      backgroundSize: '100% 5px',
      backgroundRepeat: 'no-repeat',
      p: 3,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: 700 }}>
      {title}
    </Typography>
    <Box sx={{ my: 2 }}>
      <Typography component="span" sx={{ fontFamily: 'h4.fontFamily', fontSize: '2.4rem', fontWeight: 700, color: 'primary.main' }}>
        ${price}
      </Typography>
      <Typography component="span" color="text.secondary" sx={{ ml: 0.5 }}>
        / year
      </Typography>
    </Box>
    <Stack spacing={1.25} sx={{ flexGrow: 1, mb: 3 }}>
      {features.map((feature) => (
        <Stack key={feature} direction="row" spacing={1} alignItems="flex-start">
          <CheckIcon fontSize="small" color="primary" sx={{ mt: '2px' }} />
          <Typography variant="body2">{feature}</Typography>
        </Stack>
      ))}
    </Stack>
    <Button variant="contained" size="large" fullWidth href={contactInfo.phoneLink}>
      Call to Sign Up
    </Button>
  </Card>
);

const planCards = [
  {
    title: 'Child Membership Plan',
    price: 250,
    features: [
      '20% Discount on Treatment',
      '15% Discount on Orthodontics',
      '2 Cleanings – Per Year',
      '2 Periodic Exams – Per Year',
      '1 Set of BWX – Per Year',
      '1 Panoramic Radiograph',
      'Any Additional X-rays',
      '1 Emergency Office Visit',
      'Average savings of $350 + Unlimited savings with treatment needs',
    ],
  },
  {
    title: 'Adult Membership Plan',
    price: 325,
    features: [
      '20% Discount on Treatment',
      '15% Discount on Orthodontics',
      '2 Cleanings – Per Year',
      '2 Periodic Exams – Per Year',
      '1 Set of BWX – Per Year',
      '1 Panoramic Radiograph',
      'Any Additional X-rays',
      '1 Emergency Office Visit',
      'Average savings of $4000 + Unlimited savings with treatment needs',
    ],
  },
  {
    title: 'Periodontal Membership Plan',
    price: 550,
    features: [
      '20% Discount on Treatment',
      '15% Discount on Orthodontics',
      '4 Cleanings – Per Year', // Corrected per your update
      '2 Periodic Exams – Per Year',
      '1 Set of BWX – Per Year',
      '1 Panoramic Radiograph',
      'Any Additional X-rays',
      '1 Emergency Office Visit',
      'Average savings of $400 + Unlimited savings with treatment needs',
    ],
  },
];

const comparisonData = [
  {
    label: 'Annual Price',
    child: '$250',
    adult: '$325',
    perio: '$550',
  },
  {
    label: 'Cleanings per Year',
    child: '2',
    adult: '2',
    perio: '4',
  },
  {
    label: 'Periodic Exams per Year',
    child: '2',
    adult: '2',
    perio: '2',
  },
  {
    label: 'BWX Set per Year',
    child: '1',
    adult: '1',
    perio: '1',
  },
  {
    label: 'Panoramic Radiograph',
    child: '1',
    adult: '1',
    perio: '1',
  },
  {
    label: 'Additional X-rays',
    child: 'Included',
    adult: 'Included',
    perio: 'Included',
  },
  {
    label: 'Emergency Office Visit',
    child: 'Included',
    adult: 'Included',
    perio: 'Included',
  },
  {
    label: 'Discount on Treatment',
    child: '20%',
    adult: '20%',
    perio: '20%',
  },
  {
    label: 'Discount on Orthodontics',
    child: '15%',
    adult: '15%',
    perio: '15%',
  },
  {
    label: 'Average Savings',
    child: '$350+',
    adult: '$4000+',
    perio: '$400+',
  },
];

const InsurancePage = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dental Membership Plans | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="No insurance? Rietow Family Dentistry's Friendly Smile membership plans include cleanings, exams, x-rays, an emergency visit, and 20% off treatment in Greenwood, IN."
        />
        <meta property="og:title" content="Dental Membership Plans | Rietow Family Dentistry" />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/discount" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/discount" />
      </Helmet>

      <PageShell title="Membership Discount Plans">
          <Box sx={{ mb: 5, '& a': { color: 'primary.main', fontWeight: 600 } }}>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              <strong>Rietow Family Dentistry’s exclusive Friendly Smile Dental Membership</strong> is for{' '}
              <RouterLink to={routes.contact}>new patients</RouterLink> and current patients alike, not currently
              covered by dental insurance. Our membership plans allow for a complete continuation of{' '}
              <RouterLink to={`${routes.services}?category=routine`}>preventative care</RouterLink>. This provides a
              helpful solution for those who do not currently have dental insurance.
            </Typography>
            <Typography paragraph sx={{ lineHeight: 1.8 }}>
              Our dental membership plans offer an affordable, hassle-free way for you and your family to receive the
              dental care you need. Dental treatment costs can add up, especially if you or your family members miss
              your periodic dental check-ups. Each level of our <a href="#plans">membership program</a> includes 2
              dental exams per year, and much more. We want you to take care of your teeth and enjoy the benefits of
              good oral hygiene. It is our belief that our Membership plans can help facilitate a lifetime of
              consistent dental care. <RouterLink to={routes.contact}>Contact us today!</RouterLink>
            </Typography>
          </Box>

          {/* Toggle Button */}
          <Box id="plans" textAlign="center" mb={4} sx={{ scrollMarginTop: 140 }}>
            <Button variant="outlined" onClick={() => setShowTable(!showTable)}>
              {showTable ? 'View Cards' : 'Compare Plans'}
            </Button>
          </Box>

          {/* Cards or Table */}
          {showTable ? (
            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ bgcolor: 'secondary.main' }}>
                    <TableCell sx={{ color: 'common.white', fontWeight: 700 }}>Feature</TableCell>
                    <TableCell align="center" sx={{ color: 'common.white', fontWeight: 700 }}>
                      Child
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'common.white', fontWeight: 700 }}>
                      Adult
                    </TableCell>
                    <TableCell align="center" sx={{ color: 'common.white', fontWeight: 700 }}>
                      Perio
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map((row, idx) => (
                    <TableRow key={idx} sx={{ bgcolor: idx % 2 ? 'background.paper' : 'background.default' }}>
                      <TableCell>{row.label}</TableCell>
                      <TableCell align="center">{row.child}</TableCell>
                      <TableCell align="center">{row.adult}</TableCell>
                      <TableCell align="center">{row.perio}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Grid container spacing={4} justifyContent="center">
              {planCards.map((plan, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <MembershipCard {...plan} />
                </Grid>
              ))}
            </Grid>
          )}
          {/* Legal / Terms Section */}
          <Box mt={6}>
            <Typography variant="h6" gutterBottom>
              Membership Plan Terms & Limitations
            </Typography>

            <Typography paragraph>
              <strong>Friendly Smile Membership Plan Contract</strong> – Thank you for choosing our friendly smile membership plan. The purpose of this plan is to offer our uninsured patients a savings plan when the services are paid in advance. This plan is only valid at our office.
            </Typography>

            <Typography paragraph>
              <strong>Membership plan is not insurance</strong> – No Deductible, No Waiting Period, No Maximums.
            </Typography>

            <Typography paragraph>
              <strong>Indiana law</strong> regarding membership programs allows you to cancel and receive a full refund within 30 days of initial sign-up. After the grace period, the plan cannot be cancelled, and no refunds will be given. Services that have been rendered, prior to cancellation, will be collected and immediately due at our regular and customary office fees. Plan benefits may be forfeited if the patient fails to cancel a scheduled re-care appointment within 48 hours of the appointment or fails to show up for a scheduled appointment.
            </Typography>

            <Typography paragraph>
              <strong>Limitations and Exclusions</strong> – Participants cannot have additional dental insurance coverage. Services for injuries or conditions which are covered under Worker’s Compensation or other insurance coverage are exempt from our plans. Services that cannot be performed because of the general health, physical, or psychological limitations of the patient are exempt.
            </Typography>

            <Typography paragraph>
              <strong>Care Credit Users</strong> will only receive 15% discount on dental treatment needs and 10% discount on orthodontics.
            </Typography>

            <Typography paragraph>
              <strong>Periodontal Disease Limitation:</strong> The benefits of this plan are provided to healthy patients who require routine cleanings only. Patients who develop periodontal or “Gum” disease may require a specialized treatment called <strong>scaling and root planing</strong>. Patients refer to this as a deep cleaning. Scaling and root planing is a therapeutic procedure that is typically administered with anesthetic and destroys harmful bacteria and removes hardened deposits below the gum line. If you require scaling and root planing, a 20% discount will be given off of our usual and customary fees.
            </Typography>
          </Box>
      </PageShell>
    </>
  );
};

export default InsurancePage;
