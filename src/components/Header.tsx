import React from 'react';
import { Grid, Menu, MenuItem, Button, IconButton } from '@mui/material';
import { tss } from 'tss-react'
import MenuIcon from '@mui/icons-material/Menu'
import Contact from './Contact';
import NavLinks from './NavLinks';

const useStyles = tss.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '14vh',
        width: '100vw !important',
        position: 'fixed',
        background: 'white',
        border: 'solid 2px red'
    },
    imageContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        '& img': {
            maxWidth: '100%',
            maxHeight: '10vh',
            height: 'auto',
        },
    },
    containers: {
        width: '100%',
        minHeight: '80%'
    }
});

function Header() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.headerContainer}>
            <Grid item xs={3} className={classes.containers}>
                <NavLinks />
            </Grid>
            <Grid item xs={6} className={classes.imageContainer}>
                <img src={require('../media/Rietow DDS JPG.jpg')} alt='' />
            </Grid>
            <Grid item xs={3} className={classes.containers}>
                <Contact />
            </Grid>
        </Grid>
    );
}

export default Header;
