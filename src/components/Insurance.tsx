import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react'
import MeetDrJoe from './shared/MeetDrJoe';

const useStyles = tss.create({
    insuranceContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'start',
        height: '100vh',
        background: 'white',
        padding: '20px',
        borderRadius: '10px'
    },
    virtualTour: {
        margin: '20px',
        '& img': {
            width: '100%',
            aspectRatio: 15 / 9
        },
    },
    title: {
        marginBottom: '20px'
    }
})

function Insurance() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.insuranceContainer}>
            <Grid item xs={12} className={classes.title} alignContent='start'>
                <Typography variant='h5'>Discount Plans</Typography>
                <Divider />
            </Grid>
            <Grid item xs={12} display='flex' alignContent='center' justifyContent='center'>
                Information about the discount plan
            </Grid>
        </Grid>
    );
}

export default Insurance;
