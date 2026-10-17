import React, { useState } from 'react';
import { Grid, IconButton, Box, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import MobileMenu from './MobileMenu';
import { NAVBAR_HEIGHT } from './navConstants';
import { routes } from '../../../data/routes';

const navLinks = [
  { label: 'Services', path: routes.services },
  { label: 'Our Team', path: routes.team },
  { label: 'Discount Plans', path: routes.discount },
  { label: 'Patient Forms', path: routes.forms },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={(theme) => ({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: { xs: NAVBAR_HEIGHT.xs, md: NAVBAR_HEIGHT.md },
        bgcolor: 'common.white',
        borderBottom: '1px solid',
        borderColor: 'divider',
        zIndex: theme.zIndex.appBar,
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Grid
          container
          alignItems="center"
          sx={{
            height: '100%',
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Hamburger – mobile only */}
          <Grid
            item
            xs={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-start',
            }}
          >
            <IconButton onClick={() => setDrawerOpen(true)} aria-label="Open menu">
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
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <Box
                component="img"
                src={require('../../../assets/NavbarLogo.webp')}
                alt="Rietow Family Dentistry"
                sx={{
                  height: { xs: 44, md: 64 },
                  width: 'auto',
                  display: 'block',
                }}
              />
            </Link>
          </Grid>

          {/* Nav Links – desktop only */}
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
              <Box
                key={path}
                component={Link}
                to={path}
                sx={{
                  textDecoration: 'none',
                  color: 'text.secondary',
                  fontStyle: 'italic',
                  fontSize: 18,
                  mr: 3.5,
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {label}
              </Box>
            ))}
          </Grid>

          {/* Contact – desktop only */}
          <Grid
            item
            md={3}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Contact />
          </Grid>
        </Grid>
      </Container>

      <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </Box>
  );
}
