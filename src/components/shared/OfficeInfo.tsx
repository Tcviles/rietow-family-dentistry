import { Email, Phone, Assignment, Map } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';

const useStyles = tss.create({
    contactContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: 'center',
        background: '#DDD',
        border: '2px solid #DDD',
        borderRadius: '10px',
        height: '80%',
        padding: '12px',
        marginBottom: '10px'
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
        '& button': {
            textDecoration: 'none',
            width: '100%',
            fontSize: '10px'
        }
    }
});

function OfficeInfo() {
    const { classes } = useStyles();

    return (
        <Grid container className={classes.contactContainer}>

            <Grid item>
                <Typography variant="body1">Address</Typography>
                <Typography variant="body1">Tues: 8AM - 5PM</Typography>
                <Typography variant="body1">Wed: 8AM - 5PM</Typography>
                <Typography variant="body1">Thurs: 8AM - 5PM</Typography>
                <Typography variant="body1">Fri: CLOSED</Typography>
                <Typography variant="body1">Sat: CLOSED</Typography>
                <Typography variant="body1">Sun: CLOSED</Typography>
            </Grid>
        </Grid>
    );
}

export default OfficeInfo;
