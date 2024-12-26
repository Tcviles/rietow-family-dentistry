import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { tss } from 'tss-react';
import Contact from '../Contact';

const useStyles = tss.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '15vh',
        width: '100vw !important',
        position: 'fixed',
        backgroundColor: '#fff',
        borderBottom: 'solid 2px #DDD',
        zIndex: 2,
    },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '0 20px'
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            maxWidth: '100%',
            maxHeight: '10vh',
            height: 'auto',
        }
    },
    navLinks: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        '& a': {
            color: '#A5A5A5', // Grey text color
            fontStyle: 'italic', // Italic style
            textDecoration: 'none',
            fontSize: '18px',
            marginRight: '30px',
            '&:hover': {
                color: '#888', // Slightly darker on hover
            },
        },
        '@media (max-width: 600px)': {
            display: 'none'
        }
    },
    contactContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '90%',
        '@media (max-width: 600px)': {
            display: 'none'
        }
    }
});

export default function Navbar() {
    const { classes } = useStyles();

    return (
        <Grid className={classes.headerContainer}>
            <Grid container md={10} className={classes.headerContent}>
                <Grid item xs={3} className={classes.imageContainer}>
                    <Link to="/">
                        <img src={require('../../media/NavbarLogo.jpg')} alt='Logo' />
                    </Link>
                </Grid>

                <Grid item xs={6} className={classes.navLinks}>
                    <Link to="/services">
                        <Typography>Services</Typography>
                    </Link>
                    <Link to="/team">
                        <Typography>Our Team</Typography>
                    </Link>
                    <Link to="/discount">
                        <Typography>Discount Plans</Typography>
                    </Link>
                </Grid>

                <Grid item xs={3} className={classes.contactContainer}>
                    <Contact />
                </Grid>
            </Grid>
        </Grid>
    );
}
