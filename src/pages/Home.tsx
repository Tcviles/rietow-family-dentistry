import React from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';
import Map from '../components/shared/Map';
import content from '../content';

const useStyles = tss.create({
    contentContainer: {
        display: 'flex',
        alignContent: 'start',
        justifyContent: 'center',
        minHeight: '100vh',
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
    },
    italicTitle: {
        fontStyle: 'italic'  // Italics for welcomeTitle
    }
})

function Content() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.contentContainer}>
            <Grid item xs={12} className={classes.title} alignContent='start'>
                <Typography variant='h4' className={classes.italicTitle}>
                    {content.homePage.welcomeTitle}
                </Typography>
                <Divider />
            </Grid>
            <Grid item xs={12} display='flex' alignContent='center' justifyContent='space-around'>
                <Grid item xs={6} className={classes.imageContainer}>
                    <img src={require('../media/OfficeShot.png')} alt='' />
                </Grid>

                <Grid item xs={5} height='100%' alignContent='center'>
                    <Typography variant='body1'>{content.homePage.aboutDentistry.description}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Content;
