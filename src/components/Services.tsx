import React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    servicesContainer: {
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
            aspectRatio: 4 / 3
        },
    },
    title: {
        marginBottom: '20px'
    }
})

function Services() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.servicesContainer}>
            <Grid item xs={12} className={classes.title} alignContent='start'>
                <Typography variant='h5'>Our Services</Typography>
                <Divider />
            </Grid>
            <Grid item xs={12} display='flex' alignContent='center' justifyContent='center'>
                <Grid item xs={4} height='100%' alignContent='center'>
                    <Typography variant='body1'>Gillum Dentistry offers an honest, compassionate, and experienced approach to Family Dentistry.  Our Dentist in Greenwood, Indiana has a simple philosophy. We treat our patients like family and give them what they want, while providing the highest standard of dental care.  Our dental team recognizes our patient’s health, comfort, and satisfaction as our number one priority.  Ask about Dr. Gillum’s Comfortable Dental Injections Technique, with complimentary “Nitrous Oxide!” At our dental clinic in Greenwood, IN your family’s trip to the dentist doesn’t have to be an unpleasant experience.  Never fear injections again!  Read More…</Typography>
                </Grid>

                <Grid item xs={7} className={classes.imageContainer}>
                    <img src={require('../media/OfficeShot.png')} alt='' />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Services;
