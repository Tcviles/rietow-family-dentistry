import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';
import MeetDrJoe from './shared/MeetDrJoe';
import Map from './shared/Map';
import Hours from './shared/Hours';
import OfficeInfo from './shared/OfficeInfo';

// Use require to get the image URL
const backgroundImage = require('../media/Rietow DDS JPG.jpg');

const useStyles = tss.create({
    topFooterContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        background: 'white',
        padding: '20px',
        marginTop: '16px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Ensure the image covers the container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat' // Prevent the image from repeating
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        '& img': {
            width: '100%',
            aspectRatio: 15 / 9
        },
    },
    title: {
        marginBottom: '20px'
    }
});

function TopFooter() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.topFooterContainer}>
            <Grid item xs={3.8}>
                <Hours />
            </Grid>
            <Grid item xs={3.8} height='100%' alignContent='center'>
                <MeetDrJoe />
            </Grid>
            <Grid item xs={3.8} className={classes.footerContent}>
                <OfficeInfo />
                <Map />
            </Grid>
        </Grid>
    );
}

export default TopFooter;
