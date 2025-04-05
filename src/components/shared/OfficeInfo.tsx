import { Grid, Link, Typography, Button, Box } from '@mui/material';
import content from '../../content';

function OfficeInfo() {
  const {
    addressLine1,
    addressLine2,
    mapLinkGoogle,
    mapLinkApple,
    phone,
    email,
  } = content.contactInfo;

  return (
    <Box
      sx={{
        backgroundColor: '#eee',
        borderRadius: 2,
        p: 2,
        mb: 2,
        maxWidth: '100%',
      }}
    >
      {/* Logo - keep it small */}
      <Box
        sx={{
          mb: 2,
          textAlign: 'center',
        }}
      >
        <Box
          component="img"
          src={require('../../media/r2-01.jpg')}
          alt="logo"
          sx={{
            maxHeight: 60,
            width: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Contact Info */}
      <Grid container spacing={2} alignItems="flex-start">
        {/* Address */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" fontWeight={600}>
            Address:
          </Typography>
          <Typography variant="body2">{addressLine1}</Typography>
          <Typography variant="body2">{addressLine2}</Typography>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" fontWeight={600}>
            Phone:
          </Typography>
          <Link href={`tel:${phone}`} underline="hover">
            <Typography variant="body2" color="primary" noWrap>
              {phone}
            </Typography>
          </Link>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle2" fontWeight={600}>
            Email:
          </Typography>
          <Link
            href={`mailto:${email}`}
            underline="hover"
            sx={{ display: 'inline-block', maxWidth: '100%' }}
          >
            <Typography
              variant="body2"
              color="primary"
              noWrap
              sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              {email}
            </Typography>
          </Link>
        </Grid>
      </Grid>

      {/* Map Buttons */}
      <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
        <Button
          size="small"
          variant="outlined"
          href={mapLinkGoogle}
          target="_blank"
        >
          Google Maps
        </Button>
        <Button
          size="small"
          variant="outlined"
          href={mapLinkApple}
          target="_blank"
        >
          Apple Maps
        </Button>
      </Box>
    </Box>
  );
}

export default OfficeInfo;
