import { Box, Button, Divider, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import { Link, useLocation } from 'react-router-dom';
import { contactInfo } from '../../../data/contactInfo';
import { routes } from '../../../data/routes';

const menuLinks = [
  { label: 'Home', path: routes.home, Icon: HomeOutlinedIcon },
  { label: 'Services', path: routes.services, Icon: MedicalServicesOutlinedIcon },
  { label: 'Our Team', path: routes.team, Icon: GroupsOutlinedIcon },
  { label: 'Discount Plans', path: routes.discount, Icon: LoyaltyOutlinedIcon },
  { label: 'Patient Forms', path: routes.forms, Icon: AssignmentOutlinedIcon },
  { label: 'Contact Us', path: routes.contact, Icon: MailOutlineIcon },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { pathname } = useLocation();

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { width: 'min(320px, 86vw)', display: 'flex', flexDirection: 'column' } }}
    >
      {/* Header */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2.5, py: 2 }}>
        <Link to={routes.home} onClick={onClose} style={{ display: 'inline-flex' }}>
          <Box
            component="img"
            src={require('../../../assets/NavbarLogo.webp')}
            alt="Rietow Family Dentistry"
            sx={{ height: 44, width: 'auto' }}
          />
        </Link>
        <IconButton onClick={onClose} aria-label="Close menu" edge="end">
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />

      {/* Links */}
      <List component="nav" aria-label="Main" sx={{ px: 1.5, py: 1.5 }}>
        {menuLinks.map(({ label, path, Icon }) => {
          const active = pathname === path;
          return (
            <ListItemButton
              key={path}
              component={Link}
              to={path}
              onClick={onClose}
              selected={active}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                py: 1.25,
                color: 'text.primary',
                '&.Mui-selected': {
                  bgcolor: 'rgba(189, 25, 25, 0.08)',
                  color: '#BD1919',
                  '& .MuiListItemIcon-root': { color: '#BD1919' },
                },
                '&.Mui-selected:hover': { bgcolor: 'rgba(189, 25, 25, 0.12)' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'text.secondary' }}>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} primaryTypographyProps={{ fontWeight: active ? 700 : 500, fontSize: '1.05rem' }} />
              <ChevronRightIcon fontSize="small" sx={{ opacity: 0.35 }} />
            </ListItemButton>
          );
        })}
      </List>

      {/* Pinned to the bottom: call to action + office info */}
      <Box sx={{ mt: 'auto', p: 2.5, bgcolor: 'grey.50', borderTop: '1px solid', borderColor: 'divider' }}>
        <Button
          variant="contained"
          size="large"
          fullWidth
          href={contactInfo.phoneLink}
          startIcon={<PhoneInTalkOutlinedIcon />}
          sx={{ py: 1.25, borderRadius: 2, mb: 1 }}
        >
          Call {contactInfo.phone}
        </Button>
        <Button
          variant="outlined"
          size="large"
          fullWidth
          component={Link}
          to={routes.contact}
          onClick={onClose}
          sx={{ borderRadius: 2, mb: 2 }}
        >
          Request Appointment
        </Button>

        <Stack spacing={1}>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <ScheduleOutlinedIcon fontSize="small" color="action" sx={{ mt: '2px' }} />
            <Typography variant="body2" color="text.secondary">
              Mon–Thurs, 8AM–5PM
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} alignItems="flex-start">
            <PlaceOutlinedIcon fontSize="small" color="action" sx={{ mt: '2px' }} />
            <Typography variant="body2" color="text.secondary">
              {contactInfo.addressLine1}
              <br />
              {contactInfo.addressLine2}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Drawer>
  );
}
