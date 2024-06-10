import { Email, Phone, Assignment, Map } from '@mui/icons-material';
import { Button, Grid, Link, Typography } from '@mui/material';
import { tss } from 'tss-react';

const useStyles = tss.create({
    contactContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        background: '#DDD',
        border: '2px solid #DDD',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '10px',
        height: '100%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
        '& img': {
            width: '100%',
            aspectRatio: 16 / 5,
            borderRadius: '20px'
        },
    },
});

function OfficeInfo() {
    const { classes } = useStyles();

    return (
        <Grid className={classes.contactContainer}>
            <Grid className={classes.imageContainer}>
                <img src={require('../../media/r2-01.jpg')} alt='logo' />
            </Grid>
            <Grid container display="flex">
                <Grid item md={6}>
                    <Typography variant="body1">Address:</Typography>
                    <Link href='https://www.google.com/maps/place/Rietow+Family+Dentistry+(Formerly+Gillum+Dentistry)/@39.6333995,-86.1570506,17z/data=!3m1!4b1!4m6!3m5!1s0x886b5c342567e3ab:0x4d9a38e7cde8ddd4!8m2!3d39.6333995!4d-86.1570506!16s%2Fg%2F1tfd7qsx?entry=ttu' target='_blank'>
                    <Typography variant="body2">1259 N State Rd 135 E</Typography>
                    <Typography variant="body2">Greenwood, IN 46142</Typography>
                    </Link>
                </Grid>
                <Grid item md={5}>
                    <Typography variant="body1">Phone:</Typography>
                    <Typography variant="body2">1-317-888-7576</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OfficeInfo;
