import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react'

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
    imageContainer: {
        margin: '20px',
        '& img': {
            width: '100%',
            height: 'auto',
            aspectRatio: 3 / 4
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
                <Grid item xs={4} height='100%'>
                    <Button href='https://www.google.com/maps/@39.6335357,-86.1572251,3a,75y,87.39h,90t/data=!3m7!1e1!3m5!1sAF1QipMb9Qw4xjRy78_4KfVzN--I1jT799Tkoq0Lmq1O!2e10!3e12!7i5576!8i2788?hl=en&authuser=0&coh=205409&entry=ttu' target='_blank'>Try a virtual tour!</Button>
                </Grid>
                <Grid item xs={4} height='100%' alignContent='center'>
                    <Typography variant='body1'></Typography>
                </Grid>

                <Grid item xs={7} className={classes.imageContainer}>
                    <img src={require('../media/JoePic.jpeg')} alt='' />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ContactPage;
