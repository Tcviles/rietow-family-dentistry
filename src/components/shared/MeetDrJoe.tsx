import { Grid, Button, Typography } from '@mui/material';
import content from '../../content';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../../data/routes';

function MeetDrJoe() {
  const { name, clinic, quote, headshot } = content.team.drJoe;

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '10px',
        padding: 2,
        textAlign: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Headshot */}
      <Grid item sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img
          src={headshot}
          alt={name}
          style={{
            width: '150px',
            aspectRatio: '1 / 1',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Grid>

      {/* Name & Clinic */}
      <Grid item>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1" gutterBottom>
          {clinic}
        </Typography>
      </Grid>

      {/* Quote */}
      <Grid item>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {quote}
        </Typography>
      </Grid>

      {/* CTA Button */}
      <Grid item sx={{ width: '100%' }}>
        <Button
          component={RouterLink}
          to={routes.team}
          variant="outlined"
        >
          Meet the team
        </Button>
      </Grid>
    </Grid>
  );
}

export default MeetDrJoe;
