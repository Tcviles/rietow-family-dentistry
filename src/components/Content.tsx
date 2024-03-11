import React from 'react';
import { Container, Grid } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    contentContainer: {
        border: '2px solid black',
        height: '6000px',
        paddingTop: '15vh'
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
