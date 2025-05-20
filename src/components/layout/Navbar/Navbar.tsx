import React, { useState } from 'react';
import {
  Button,
  Stack,
  Grid,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Typography,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import content from '../../../content';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Our Team', path: '/team' },
  { label: 'Discount Plans', path: '/discount' },
  { label: 'Patient Forms', path: '/forms' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        minHeight: '15vh',
        backgroundColor: '#fff',
        borderBottom: '2px solid #DDD',
        zIndex: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" sx={{ py: 1 }}>
          {/* Hamburger menu – mobile only */}
          <Grid
            item
            xs={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-start',
            }}
          >
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>

          {/* Logo */}
          <Grid
            item
            xs={8}
            md={3}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-end', md: 'flex-start' },
            }}
          >
            <Link to="/">
              <img
                src={require('../../../media/NavbarLogo.jpg')}
                alt="Logo"
                style={{ maxHeight: '10vh', height: 'auto', maxWidth: '100%' }}
              />
            </Link>
          </Grid>

          {/* Nav Links - desktop only */}
          <Grid
            item
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                style={{
                  textDecoration: 'none',
                  color: '#A5A5A5',
                  fontStyle: 'italic',
                  fontSize: '18px',
                  marginRight: '30px',
                }}
                onMouseOver={e => (e.currentTarget.style.color = '#888')}
                onMouseOut={e => (e.currentTarget.style.color = '#A5A5A5')}
              >
                <Typography>{label}</Typography>
              </Link>
            ))}
          </Grid>

          {/* Contact - desktop only */}
          <Grid
            item
            md={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              height: '90%',
            }}
          >
            <Contact />
          </Grid>
        </Grid>
      </Container>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Nav Links */}
          <List>
            {navLinks.map(({ label, path }) => (
              <ListItem
                key={path}
                button
                component={Link}
                to={path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Action Buttons */}
          <Stack spacing={1}>
            <Button
              href={content.contactInfo.contactPage}
              variant="contained"
              sx={{
                backgroundColor: '#999',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#777' },
              }}
              fullWidth
            >
              Contact Us
            </Button>

            <Button
              href={content.contactInfo.phoneLink}
              variant="contained"
              sx={{
                backgroundColor: '#999',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#777' },
              }}
              fullWidth
            >
              {content.contactInfo.phone}
            </Button>

            <Button
              href={content.contactInfo.payLink}
              variant="contained"
              sx={{
                backgroundColor: '#999',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#777' },
              }}
              fullWidth
            >
              Pay Now
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
