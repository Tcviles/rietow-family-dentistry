import { Box, Button, Grid, Link, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { contactInfo } from '../../data/contactInfo';

function OfficeInfo() {
  const {
    addressLine1,
    addressLine2,
    phone,
    phoneLink,
    email,
  } = contactInfo;
  const mapsQuery = encodeURIComponent(`${addressLine1}, ${addressLine2}`);

  return (
    <Box
      sx={{
        backgroundColor: '#EEE',
        borderRadius: 3,
        p: 3,
        mb: 4,
        maxWidth: '100%',
        boxShadow: 1,
      }}
    >
      {/* Logo */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Box
          component="img"
          src={require('../../assets/r2-01.webp')}
          alt="Rietow Family Dentistry"
          sx={{ maxHeight: 60, width: 'auto', objectFit: 'contain' }}
        />
      </Box>

      <Grid
  container
  direction="column"
  spacing={2}
  alignItems="flex-start"
  justifyContent="flex-start"
>
  {/* Address */}
  <Grid item>
    <Box display="flex" alignItems="flex-start" gap={1}>
      <RoomIcon sx={{ color: 'primary.main', mt: '2px' }} />
      <Box>
        <Typography variant="subtitle2" fontWeight={600}>
          Address
        </Typography>
        <Typography variant="body2">{addressLine1}</Typography>
        <Typography variant="body2">{addressLine2}</Typography>
        <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
          <Button
            size="small"
            variant="outlined"
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none', py: 0.25 }}
          >
            Google Maps
          </Button>
          <Button
            size="small"
            variant="outlined"
            href={`https://maps.apple.com/?q=${encodeURIComponent('Rietow Family Dentistry')}&address=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'none', py: 0.25 }}
          >
            Apple Maps
          </Button>
        </Box>
      </Box>
    </Box>
  </Grid>

  {/* Phone */}
  <Grid item>
    <Box display="flex" alignItems="flex-start" gap={1}>
      <PhoneIcon sx={{ color: 'primary.main', mt: '2px' }} />
      <Box>
        <Typography variant="subtitle2" fontWeight={600}>
          Phone
        </Typography>
        <Link
          href={phoneLink}
          underline="hover"
          sx={{ color: 'text.primary' }}
        >
          <Typography variant="body2">{phone}</Typography>
        </Link>
      </Box>
    </Box>
  </Grid>

  {/* Email */}
  <Grid item>
    <Box display="flex" alignItems="flex-start" gap={1}>
      <EmailIcon sx={{ color: 'primary.main', mt: '2px' }} />
      <Box>
        <Typography variant="subtitle2" fontWeight={600}>
          Email
        </Typography>
        <Link
          href={`mailto:${email}`}
          underline="hover"
          sx={{ color: 'text.primary', maxWidth: 240 }}
        >
          <Typography
            variant="body2"
            sx={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
          >
            {email}
          </Typography>
        </Link>
      </Box>
    </Box>
  </Grid>
</Grid>


    </Box>
  );
}

export default OfficeInfo;
