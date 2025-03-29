import React from 'react';
import { Grid, Box } from '@mui/material';
import MeetDrJoe from './shared/MeetDrJoe';
import Map from './shared/Map';
import Hours from './shared/Hours';
import OfficeInfo from './shared/OfficeInfo';

function TopFooter() {
  return (
    <Grid container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 3,
        marginTop: 2,
      }}
    >
      <Grid container spacing={2} justifyContent="space-around" maxWidth="lg">
        <Grid item xs={12} sm={6} md={4}>
          <Hours />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MeetDrJoe />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 1,
            '& img': {
              width: '100%',
              aspectRatio: '15 / 9',
            },
          }}
        >
          <OfficeInfo />
          <Map />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TopFooter;
