import React from 'react';
import { Divider, Grid, Typography, Box } from '@mui/material';
import content from '../content';

function Services() {
  const { heading, description } = content.servicesPage;

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
      {/* Title */}
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h5">{heading}</Typography>
        <Divider />
      </Grid>

      {/* Content */}
      <Grid
        item
        xs={12}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        {/* Text */}
        <Grid item xs={12} md={5}>
          <Typography variant="body1" whiteSpace="pre-line">
            {description}
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={require('../media/OfficeShot.png')}
            alt="Office"
            sx={{
              width: '100%',
              height: 'auto',
              aspectRatio: '4 / 3',
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Services;
