import { Button, Stack } from '@mui/material';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Link } from 'react-router-dom';
import { contactInfo } from '../../../data/contactInfo';

// Desktop navbar actions: phone number plus the primary call to action
function Contact() {
  const { contactPage, phone, phoneLink } = contactInfo;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Button
        href={phoneLink}
        color="secondary"
        startIcon={<PhoneInTalkOutlinedIcon />}
        sx={{ whiteSpace: 'nowrap', fontWeight: 600 }}
      >
        {phone}
      </Button>
      <Button component={Link} to={contactPage} variant="contained" sx={{ whiteSpace: 'nowrap' }}>
        Book a Visit
      </Button>
    </Stack>
  );
}

export default Contact;
