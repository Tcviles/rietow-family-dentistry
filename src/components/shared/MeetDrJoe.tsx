import { Button, Grid, Typography } from '@mui/material';
import { tss } from 'tss-react';

const useStyles = tss.create({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: '#DDD',
    border: '2px solid #DDD',
    borderRadius: '10px',
    padding: '12px',
    textAlign: 'center',
    width: '100%',
    aspectRatio: 3 / 4
  },
  headShot: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    "& img": {
      width: '150px',
      aspectRatio: 1 / 1,
      borderRadius: '50%',
      objectFit: 'cover'
    }
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
      color: 'white',
      width: '100%',
      fontSize: '10px'
    }
  }
});

function MeetDrJoe() {
  const { classes } = useStyles();

  return (
    <Grid container className={classes.contentContainer}>
      <Grid item className={classes.headShot}>
        <img src={require("../../media/JoeHeadshot1x1.png")} alt='Dr. Joe Rietow' />
      </Grid>
      <Grid item>
        <Typography variant="h5">Dr. Joe Rietow, DDS</Typography>
        <Typography variant="body1">Rietow Family Dentistry</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">"As my patient, you can expect that I will help you achieve the smile that you have always wanted while using the latest technology available in dentistry."</Typography>
      </Grid>
      <Grid item className={classes.textContainer}>
        <Button href="/" style={{ color: 'white' }}>
          Meet the team
        </Button>
      </Grid>
    </Grid>
  );
}

export default MeetDrJoe;
