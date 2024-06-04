import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { tss } from 'tss-react'
import Contact from './Contact';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = tss.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        height: '14.5vh',
        width: '100vw !important',
        position: 'fixed',
        background: 'white',
        borderBottom: 'solid 1px #999',
        zIndex: 2
    },
    headerContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '14vh',
        background: 'white',
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
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        '& button': {
            maxWidth: '100%',
            maxHeight: '10vh',
            height: 'auto',
        },
    },
    containers: {
        display: 'flex',
        width: '100%',
        minHeight: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function Header({ toggleMenu = () => { } }) {
    const { classes } = useStyles();

    return (
        <Grid className={classes.headerContainer}>
            <Grid container md={10} className={classes.headerContent}>
                <Grid item xs={3} className={classes.buttonContainer}>
                    <IconButton size="large" onClick={toggleMenu}>
                        <MenuIcon /> <Typography>Menu</Typography>
                    </IconButton>
                </Grid>
                <Grid item xs={6} className={classes.imageContainer}>
                    <img src={require('../media/Rietow DDS JPG.jpg')} alt='' />
                </Grid>
                <Grid item xs={3} className={classes.containers}>
                    <Contact />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Header;
