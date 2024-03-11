import React from 'react';
import { Container, Grid } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    contentContainer: {
        height: '6000px',
        background: 'white',
        padding: '20px',
        borderRadius: '10px'
    }
})

function Content() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.contentContainer}>
            Content
        </Grid>
    );
}

export default Content;
