import { Button, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';

const useStyles = tss.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    background: '#DDD',
    border: '2px solid #DDD',
    borderRadius: '10px',
    padding: '12px',
    textAlign: 'center',
    width: '100%',
    aspectRatio: 3 / 4
  },
  officePic: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    "& img": {
      width: '70%',
      aspectRatio: 15 / 9,
      borderRadius: '5%'
    }
  }
});

function Hours() {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.officePic}>
        <img src={require("../../media/OfficeShot.png")} alt='Our Office' />
      </Grid>
      <Grid item>
        <Typography variant="h5">Office Hours</Typography>
        <br/>
        <Typography variant="body1">Mon: 8AM - 5PM</Typography>
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

export default Hours;
