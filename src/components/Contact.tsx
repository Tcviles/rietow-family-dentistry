import { Grid } from '@mui/material';
import { tss } from 'tss-react'

const useStyles = tss.create({
    ContactContainer: {
        background: '#DDD',
        border: '2px solid #999',
        borderRadius: '5px',
        height: '100%'
    }
})

function Contact() {
    const { classes } = useStyles()

    return (
        <Grid container className={classes.ContactContainer}>
            Contact
        </Grid>
    );
}

export default Contact;
