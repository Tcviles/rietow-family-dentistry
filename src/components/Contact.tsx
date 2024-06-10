import { Email, Phone, Assignment, Map, AttachMoney } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
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
            width: '100%',
            fontSize: '10px'
        }
    },
    hidePayNow: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none'
        }
    },
    showDollarSign: {
        display: 'none',
        '@media (max-width: 600px)': {
            display: 'flex'
        }
    }
});

function Contact() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.contactContainer}>
            <Grid item xs={3.8} sm={2.8} className={classes.textContainer}>
                <Button href='mailTo:Tcv720@gmail.com' style={{ color: 'white' }}><Email /></Button>
            </Grid>
            <Grid item xs={3.8} sm={2.8} className={classes.textContainer}>
                <Button href='tel:123-456-7890' style={{ color: 'white' }}><Phone /></Button>
            </Grid>
            <Grid item xs={3.8} sm={2.8} className={classes.textContainer}>
                <Button href='https://gillumdentistry.com/wp-content/uploads/2020/06/New-Patient-Forms_COVID.pdf' target='_blank' style={{ color: 'white' }}><Assignment /></Button>
            </Grid>
            <Grid item xs={5.8} sm={2.8} className={classes.textContainer}>
                <Button href='https://gillumdentistry.com/wp-content/uploads/2020/06/New-Patient-Forms_COVID.pdf' target='_blank' style={{ color: 'white' }}><Map /></Button>
            </Grid>
            <Grid item xs={5.8} sm={12} className={classes.textContainer}>
                <Button href='https://gillumdentistry.com/wp-content/uploads/2020/06/New-Patient-Forms_COVID.pdf' target='_blank' style={{ color: 'white' }}>
                    <span className={classes.hidePayNow}>Pay Now</span>
                    <span className={classes.showDollarSign} style={{ color: 'white' }}><AttachMoney /></span>
                </Button>
            </Grid>
        </Grid>
    );
}

export default Contact;
