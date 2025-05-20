// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import TopFooter from './TopFooter';
import Footer from './Footer';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          pt: '17vh', // matches space for navbar
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            flex: 1,
            width: '100%',
            px: 2,
          }}
        >
          {children}
        </Container>
      </Box>
      <TopFooter />
      <Footer />
    </>
  );
};

export default Layout;
