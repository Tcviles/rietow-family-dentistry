import { Email, Phone, Assignment, Map, AttachMoney } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';
import content from '../content';
import ContactButton from './Navbar/ContactButton';

const useStyles = tss.create({
    contactContainer: {
        display: 'flex',
        alignContent: 'center',
        background: content.colors.lightGrey,
        border: '2px solid #DDD',
        borderRadius: '10px',
        height: '70%',
        padding: 4
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 2,
        gap: 6
    }
});

function Contact() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.contactContainer}>
            <Grid xs={12} className={classes.row}>
                <Grid item xs={6}>
                    <ContactButton link="/contact" text="Contact Us"/>
                </Grid>
                <Grid item xs={6}>
                    <ContactButton link="tel:317-888-7576" text="317-888-7576"/>
                </Grid>
            </Grid>
            <Grid xs={12} className={classes.row}>
                <Grid item xs={5.8} sm={12}>
                    <ContactButton link="/pay" text="Pay Now" />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;
