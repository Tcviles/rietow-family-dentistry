import { Grid, Typography, Box } from '@mui/material';
import content from '../../content';

function Hours() {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: '10px',
        padding: 2,
        textAlign: 'center',
        height: '100%',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mb: 2,
          '& img': {
            width: '80%',
            aspectRatio: '4 / 3',
            borderRadius: '5%',
          },
        }}
      >
        <img src={require("../../media/OfficeShot.png")} alt="Our Office" />
      </Grid>

      <Typography variant="h5" gutterBottom>
        Office Hours
      </Typography>

      {content.officeHours.map(({ day, hours }) => (
        <Typography key={day} variant="body1">
          {day}: {hours}
        </Typography>
      ))}
    </Grid>
  );
}

export default Hours;
