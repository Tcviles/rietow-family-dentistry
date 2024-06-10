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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    },
    footerContent: {
        display: 'flex',
        flexDirection: 'column',
        marginTop:'10px',
        '& img': {
            width: '100%',
            aspectRatio: 15 / 9
        },
    }
});

function TopFooter() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.topFooterContainer}>
            <Grid item xs={12} sm={5.8} md={3.8} marginTop='10px'>
                <Hours />
            </Grid>
            <Grid item xs={12} sm={5.8} md={3.8} marginTop='10px'>
                <MeetDrJoe />
            </Grid>
            <Grid item xs={12} md={3.8} className={classes.footerContent}>
                <OfficeInfo />
                <Map />
            </Grid>
        </Grid>
    );
}

export default TopFooter;
