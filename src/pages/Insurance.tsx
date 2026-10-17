import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
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
import { Helmet } from 'react-helmet';
import PageShell from '../components/layout/PageShell';
import { contactInfo } from '../data/contactInfo';

const MembershipCard = ({
  title,
  price,
  features,
}: {
  title: string;
  price: number;
  features: string[];
}) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: 300 },
        border: '2px solid #333',
        borderRadius: 0,
        backgroundColor: '#ccc',
        boxShadow: 'none',
        textAlign: 'center',
        mx: 'auto',
      }}
    >
      <CardContent sx={{ backgroundColor: '#999', py: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: '1rem',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </Typography>
      </CardContent>

      <CardContent sx={{ backgroundColor: '#ccc', py: 3 }}>
        <Typography variant="h4" sx={{ color: '#b00000', fontWeight: 'bold' }}>
          ${price}.00
        </Typography>
        <Typography variant="subtitle2" sx={{ color: '#b00000', fontStyle: 'italic' }}>
          Annually
        </Typography>
      </CardContent>

      <CardContent sx={{ backgroundColor: '#ccc', color: '#111', px: 3, pt: 0, pb: 2 }}>
        {features.map((feature, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{
              borderTop: '1px solid #aaa',
              py: 1,
            }}
          >
            {feature}
          </Typography>
        ))}
      </CardContent>

      <CardContent sx={{ backgroundColor: '#ccc', pt: 2 }}>
        <Button
          variant="contained"
          fullWidth
          href={contactInfo.phoneLink}
          sx={{
            backgroundColor: '#c00',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: 0,
            py: 1,
            ':hover': { backgroundColor: '#900' },
          }}
        >
          Call to Sign Up
        </Button>
      </CardContent>
    </Card>
  );
};

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
          <Box sx={{ mb: 5 }}>
            <Typography paragraph>
              <strong>Rietow Family Dentistry’s exclusive Friendly Smile Dental Membership</strong> is for new patients and current patients alike who are not currently covered by dental insurance.
            </Typography>
            <Typography paragraph>
              Our dental membership plans offer an affordable, hassle-free way for you and your family to receive the care you need. Each includes exams, cleanings, x-rays, and emergency visits—and much more.
            </Typography>
            <Typography paragraph>
              <strong>Contact us today!</strong>
            </Typography>
          </Box>

          {/* Toggle Button */}
          <Box textAlign="center" mb={4}>
            <Button variant="outlined" onClick={() => setShowTable(!showTable)}>
              {showTable ? 'View Cards' : 'Compare Plans'}
            </Button>
          </Box>

          {/* Cards or Table */}
          {showTable ? (
            <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#444' }}>
                    <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Feature</TableCell>
                    <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      Child
                    </TableCell>
                    <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      Adult
                    </TableCell>
                    <TableCell align="center" sx={{ color: '#fff', fontWeight: 'bold' }}>
                      Perio
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comparisonData.map((row, idx) => (
                    <TableRow key={idx} sx={{ backgroundColor: idx % 2 ? '#f9f9f9' : '#e9e9e9' }}>
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
