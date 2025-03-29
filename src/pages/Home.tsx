import { Divider, Grid, Typography } from '@mui/material';
import content from '../content';

const Content = () => {
  return (
    <Grid container
      maxWidth="lg"
      sx={{
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, fontStyle: 'italic' }}
      >
        {content.homePage.welcomeTitle}
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4} justifyContent="space-around" alignItems="center">
        <Grid item xs={12} md={6}>
          <img
            src={require('../media/OfficeShot.png')}
            alt="Office"
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '4 / 3',
              borderRadius: '8px',
            }}
          />
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="body1">
            {content.homePage.aboutDentistry.description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
