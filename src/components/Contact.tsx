import { Email, Phone } from '@mui/icons-material';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import { tss } from 'tss-react';

const useStyles = tss.create({
    contactContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        background: '#DDD',
        border: '2px solid #DDD',
        borderRadius: '10px',
        height: '100%',
        padding: '12px'
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        background: '#999',
        border: '2px solid #DDD',
        borderRadius: '10px',
        padding: '2px',
        marginTop: '2px',
        marginBottom: '2px',
        height: '60%',
        '& button': {
            textDecoration: 'none',
            color: 'white',
            width: '100%',
            fontSize: '14px'
        }
    }
});

function Contact() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.contactContainer}>
            <Grid item xs={5.8} className={classes.textContainer}>
                <IconButton><Email/></IconButton>
            </Grid>
            <Grid item xs={5.8} className={classes.textContainer}>
                <IconButton><Phone/></IconButton>
            </Grid>
            <Grid item xs={12} className={classes.textContainer}>
                <IconButton>Patient Forms</IconButton>
            </Grid>
        </Grid>
    );
}

export default Contact;
