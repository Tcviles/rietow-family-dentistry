import React from 'react';
import { Container, Grid } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    FooterContainer: {
        background: '#DDD',
        border: '2px solid #999',
        borderRadius: '5px',
        height: '100%'
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
