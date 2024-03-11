import React from 'react';
import { Container, Grid } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    FooterContainer: {
        border: '2px solid black'
    }
})

function Footer() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.FooterContainer}>
            Footer
        </Grid>
    );
}

export default Footer;
