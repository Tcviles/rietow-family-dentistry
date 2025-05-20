import { Box, Button } from '@mui/material';
import content from '../../../content';

function Contact() {
  const { contactPage, phone, phoneLink, payLink } = content.contactInfo;

  return (
    <Box
    sx={{
        backgroundColor: '#DDD',
        borderRadius: '10px',
        padding: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        width: '100%',        // 👈 fills whatever space parent provides
        maxWidth: '100%',     // 👈 prevents overflow if applied elsewhere
      }}
    >
      {/* Top row: Contact + Phone side-by-side */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          href={contactPage}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#999',
            color: 'white',
            textTransform: 'none',
            fontSize: '12px',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#777' },
          }}
        >
          Contact Us
        </Button>
        <Button
          href={phoneLink}
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#999',
            color: 'white',
            textTransform: 'none',
            fontSize: '12px',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#777' },
          }}
        >
          {phone}
        </Button>
      </Box>

      {/* Bottom: Pay Now full-width */}
      <Button
        href={payLink}
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: '#999',
          color: 'white',
          textTransform: 'none',
          fontSize: '12px',
          borderRadius: '8px',
          '&:hover': { backgroundColor: '#777' },
        }}
      >
        Pay Now
      </Button>
    </Box>
  );
}

export default Contact;
