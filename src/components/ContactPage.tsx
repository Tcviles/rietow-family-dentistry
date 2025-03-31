import React from 'react';
import { Button, Divider, Grid, Typography, Box } from '@mui/material';
import MeetDrJoe from './shared/MeetDrJoe';

function ContactPage() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'start',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 2,
      }}
    >
      {/* Page Title */}
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h5">Contact Us</Typography>
        <Divider />
      </Grid>

      {/* Content Layout */}
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexWrap="wrap"
        gap={3}
      >
        {/* Virtual Tour Section */}
        <Grid item xs={12} md={7}>
          <Button
            href="https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu"
            target="_blank"
            sx={{ mb: 2 }}
          >
            <Typography variant="body1">Rietow Dentistry Virtual Tour</Typography>
          </Button>

          <Button
            href="https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu"
            target="_blank"
            sx={{ width: '100%' }}
          >
            <Box
              component="img"
              src={require('../media/VirtualTour.png')}
              alt="Virtual Tour"
              sx={{
                width: '100%',
                height: 'auto',
                aspectRatio: '15 / 9',
                borderRadius: 2,
              }}
            />
          </Button>
        </Grid>

        {/* Dr. Joe Card */}
        <Grid item xs={12} md={4}>
          <MeetDrJoe />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactPage;
