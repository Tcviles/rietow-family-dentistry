import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import content from '../content';

const HomePage = () => {
  return (
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontStyle: 'italic',
              fontWeight: 600,
              mb: 1,
              textAlign: 'center',
            }}
          >
            {content.homePage.welcomeTitle}
          </Typography>

          <Divider
            sx={{
              width: 60,
              borderBottomWidth: 3,
              borderColor: 'primary.main',
              mx: 'auto',
              my: 3,
            }}
          />

          {/* Main Grid */}
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={require('../media/OfficeShot.png')}
                alt="Office"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
                {content.homePage.aboutDentistry.description}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
  );
};

export default HomePage;
