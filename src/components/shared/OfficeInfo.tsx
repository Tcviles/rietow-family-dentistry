import { Grid, Link, Typography } from '@mui/material';
import content from '../../content';

function OfficeInfo() {
  const { addressLine1, addressLine2, mapLink, phone } = content.contactInfo;

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#DDD',
        border: '2px solid #DDD',
        borderRadius: '10px',
        padding: 2,
        mb: 2,
        gap: 2,
      }}
    >
      {/* Logo Image */}
      <Grid sx={{ '& img': { aspectRatio: '16 / 5', borderRadius: '20px', width: '100%' } }}>
        <img src={require('../../media/r2-01.jpg')} alt="logo" />
      </Grid>

      {/* Contact Info */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">Address:</Typography>
          <Link href={mapLink} target="_blank" underline="hover">
            <Typography variant="body2">{addressLine1}</Typography>
            <Typography variant="body2">{addressLine2}</Typography>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography variant="body1">Phone:</Typography>
          <Link href={`tel:${phone}`} underline="hover">
            <Typography variant="body2">{phone}</Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default OfficeInfo;
