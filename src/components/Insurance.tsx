import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material';

const MembershipCard = ({ title, price, features }: { title: string; price: number; features: string[] }) => {
  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 0 0 1px #fff, 0 0 0 8px #005880', // Dark blue outer border and white inner border
        mb: 2,
      }}
    >
      <CardContent sx={{ backgroundColor: '#91B2C7', textAlign: 'center' }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
      </CardContent>

      <CardContent sx={{ backgroundColor: '#005880', position: 'relative', color: 'white', textAlign: 'center' }}>
        <Box display="inline-flex" alignItems="flex-start">
          <Typography variant="h4" component="span" sx={{ verticalAlign: 'top' }}>
            $
          </Typography>
          <Typography variant="h1" component="span">
            {price}
          </Typography>
          <Typography variant="h4" component="span" sx={{ verticalAlign: 'top', marginLeft: '2px' }}>
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

      <CardContent sx={{ backgroundColor: '#91B2C7', textAlign: 'center', color: '#000' }}>
        {features.map((feature: string, index: any) => (
          <Typography key={index} variant="body1">
            {feature}
          </Typography>
        ))}
      </CardContent>

      <CardContent sx={{ backgroundColor: '#005880', textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#91B2C7', color: '#000', ':hover': { backgroundColor: '#80A1B6' } }}
        >
          SIGN UP NOW!
        </Button>
      </CardContent>
    </Card>
  );
};

const MembershipCardsContainer = () => {
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
    // You can add more plans here if needed
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {plans.map((plan, index) => (
        <Grid item key={index}>
          <MembershipCard title={plan.title} price={plan.price} features={plan.features} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembershipCardsContainer;
