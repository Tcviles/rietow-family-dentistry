import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  Grid,
  Paper,
  Divider,
} from '@mui/material';
import { Helmet } from 'react-helmet';

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
        width: 300,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 0 0 1px #fff, 0 0 0 8px #005880',
        transition: '0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 0 0 1px #fff, 0 0 0 10px #004766',
        },
      }}
    >
      <CardContent sx={{ backgroundColor: '#91B2C7', textAlign: 'center' }}>
        <Typography variant="h6" component="div" noWrap>
          {title}
        </Typography>
      </CardContent>

      <CardContent
        sx={{ backgroundColor: '#005880', position: 'relative', color: 'white', textAlign: 'center' }}
      >
        <Box display="inline-flex" alignItems="flex-start">
          <Typography variant="h4" component="span">
            $
          </Typography>
          <Typography variant="h1" component="span" sx={{ lineHeight: 1 }}>
            {price}
          </Typography>
          <Typography variant="h4" component="span" sx={{ marginLeft: '2px' }}>
            00
          </Typography>
        </Box>
        <Typography
          variant="h6"
          component="span"
          sx={{ position: 'absolute', right: 16, bottom: 16, fontStyle: 'italic' }}
        >
          Annually
        </Typography>
      </CardContent>

      <CardContent sx={{ backgroundColor: '#91B2C7', textAlign: 'left', color: '#000', px: 3 }}>
        {features.map((feature: string, index: number) => (
          <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
            • {feature}
          </Typography>
        ))}
      </CardContent>

      <CardContent sx={{ backgroundColor: '#005880', textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#91B2C7',
            color: '#000',
            ':hover': { backgroundColor: '#80A1B6' },
          }}
        >
          SIGN UP NOW!
        </Button>
      </CardContent>
    </Card>
  );
};

const InsurancePage = () => {
  const plans = [
    {
      title: 'Adult Membership Plan',
      price: 300,
      features: [
        '20% Discount on Routine Dental Services',
        '15% Discount on Orthodontics',
        '2 Cleanings – Per Year',
        '2 Regular Exams – Per Year',
        '1 Set of BWX – Per Year',
        '1 Panorex – 3 Years',
        'Additional PA X-Rays – As Needed',
        '1 Emergency Office Visit',
      ],
    },
    {
      title: 'Child Membership Plan',
      price: 250,
      features: [
        '20% Discount on Routine Dental Services',
        '15% Discount on Orthodontics',
        '2 Cleanings – Per Year',
        '2 Regular Exams – Per Year',
        '1 Set of BWX – Per Year',
        '1 Panorex – 3 Years',
        '1 Fluoride Treatment – Per Year',
        'Additional PA X-Rays – As Needed',
        '1 Emergency Office Visit',
      ],
    },
    {
      title: 'Adult Membership Plan - Perio',
      price: 550,
      features: [
        '20% Discount on Routine Dental Services',
        '15% Discount on Orthodontics',
        '4 Cleanings – Per Year',
        '2 Regular Exams – Per Year',
        '1 Set of BWX – Per Year',
        '1 Panorex – 3 Years',
        'Additional PA X-Rays – As Needed',
        '1 Emergency Office Visit',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Dental Membership Plans | Rietow Family Dentistry</title>
        <meta
          name="description"
          content="No dental insurance? No problem. Explore affordable dental membership plans for adults and children at Rietow Family Dentistry in Greenwood, IN."
        />
        <meta property="og:title" content="Membership Plans | Rietow Family Dentistry" />
        <meta
          property="og:description"
          content="Affordable dental care without insurance. Join our annual membership plans and save on cleanings, exams, and treatments."
        />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/membership-plans" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/membership-plans" />
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
            Membership Discount Plans
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

          {/* Intro Narrative */}
          <Box sx={{ mb: 5 }}>
            <Typography paragraph>
              <strong>Rietow Family Dentistry’s exclusive Friendly Smile Dental Membership</strong> is for new patients and current patients alike who are not currently covered by dental insurance. Our membership plans allow for a complete continuation of preventative care and provide a helpful solution for those without coverage.
            </Typography>
            <Typography paragraph>
              Our dental membership plans offer an affordable, hassle-free way for you and your family to receive the dental care you need. Dental treatment costs can add up, especially if you miss your periodic dental check-ups. Each level of our membership program includes 2 dental exams per year—and much more!
            </Typography>
            <Typography paragraph>
              We want you to take care of your teeth and enjoy the benefits of good oral hygiene. It is our belief that our membership plans can help facilitate a lifetime of consistent dental care. <strong>Contact us today!</strong>
            </Typography>
          </Box>

          {/* Pricing Cards */}
          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan, index) => (
              <Grid item key={index}>
                <MembershipCard {...plan} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default InsurancePage;