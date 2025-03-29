import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react'
import MeetDrJoe from './shared/MeetDrJoe';

const useStyles = tss.create({
    contactPageContainer: {
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

function ContactPage() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.contactPageContainer}>
            <Grid item xs={12} className={classes.title} alignContent='start'>
                <Typography variant='h5'>Contact Us</Typography>
                <Divider />
            </Grid>
            <Grid item xs={12} display='flex' alignContent='center' justifyContent='center'>
                <Grid item xs={7} className={classes.virtualTour}>
                    <Button href='https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu' target='_blank'>
                        <Typography variant='body1'>Rietow Dentistry Virtual Tour</Typography>
                    </Button>
                    <Button href='https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu' target='_blank'>
                        <img src={require('../media/VirtualTour.png')} alt='' />
                    </Button>
                </Grid>
                <Grid item xs={4} height='100%' alignContent='center'>
                    <MeetDrJoe />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContactPage;
