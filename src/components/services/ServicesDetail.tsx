import { Box, Button, Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Link as RouterLink } from 'react-router-dom';
import { ServiceDetail } from '../../content/types';
import { routes } from '../../data/routes';
import { contactInfo } from '../../data/contactInfo';
import RichText from '../shared/RichText';

type ServicesDetailProps = {
  service: ServiceDetail;
};

function ServicesDetail({ service }: ServicesDetailProps) {
  const { title, subtitle, description, sections, buttonText, icon: Icon } = service;
  const callFirst = buttonText.startsWith('Call');

  return (
    <Box component="article">
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Box
          sx={{
            flexShrink: 0,
            width: 52,
            height: 52,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            bgcolor: 'primary.main',
            color: 'primary.contrastText',
          }}
        >
          <Icon />
        </Box>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.1rem' } }}>
          {title}
        </Typography>
      </Stack>

      <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.secondary', mb: 2, lineHeight: 1.4 }}>
        {subtitle}
      </Typography>
      <RichText text={description} />

      {sections.map((section, index) => (
        <Box key={index} sx={{ mt: 4 }}>
          {section.title && (
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1.5 }}>
              {section.title}
            </Typography>
          )}

          {section.type === 'list' && (
            <Stack spacing={1.5}>
              {section.listItems.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={1.5}
                  sx={{ p: 2, borderRadius: 2, bgcolor: 'grey.50', border: '1px solid', borderColor: 'grey.200' }}
                >
                  <CheckCircleOutlineIcon color="primary" sx={{ mt: '2px', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 600 }}>{item.primary}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.secondary.trim().replace(/\s+/g, ' ')}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          )}

          {section.type === 'paragraph' && <RichText text={section.content} />}
        </Box>
      ))}

      {/* Closing call to action */}
      <Box sx={{ mt: 5, p: { xs: 2.5, md: 3 }, borderRadius: 3, bgcolor: 'grey.900', color: 'common.white' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
          Ready to get started?
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
          Call us or send a request and we'll find a time that works for you.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
          <Button variant="contained" href={contactInfo.phoneLink} startIcon={<PhoneInTalkOutlinedIcon />}>
            {callFirst ? buttonText : `Call ${contactInfo.phone}`}
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to={routes.contact}
            sx={{ color: 'common.white', borderColor: 'rgba(255,255,255,0.6)', '&:hover': { borderColor: 'common.white' } }}
          >
            {callFirst ? 'Request Appointment' : buttonText}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default ServicesDetail;
