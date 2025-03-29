import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Contact from '../Contact';

export default function Navbar() {
  return (
    <Grid
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100vw',
        minHeight: '15vh',
        backgroundColor: '#fff',
        borderBottom: '2px solid #DDD',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        container
        md={10}
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2 }}
      >
        {/* Logo */}
        <Grid item xs={3}>
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/">
              <img
                src={require('../../media/NavbarLogo.jpg')}
                alt="Logo"
                style={{
                  maxHeight: '10vh',
                  height: 'auto',
                  maxWidth: '100%',
                }}
              />
            </Link>
          </Grid>
        </Grid>

        {/* Nav Links */}
        <Grid
          item
          xs={6}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {[
            { label: 'Services', path: '/services' },
            { label: 'Our Team', path: '/team' },
            { label: 'Discount Plans', path: '/discount' },
          ].map(({ label, path }) => (
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

        {/* Contact */}
        <Grid
          item
          xs={3}
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '90%',
          }}
        >
          <Contact />
        </Grid>
      </Grid>
    </Grid>
  );
}
