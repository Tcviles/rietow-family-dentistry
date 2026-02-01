// src/components/layout/Layout.tsx
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar/Navbar';
import TopFooter from './TopFooter';
import Footer from './Footer';
import { NAVBAR_HEIGHT } from './Navbar/navConstants';
import AnnouncementBanner from './Navbar/AnnouncementBanner';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />

      {/* Spacer that always matches Navbar height */}
      <Box sx={{ height: { xs: NAVBAR_HEIGHT.xs, md: NAVBAR_HEIGHT.md } }} />
      <AnnouncementBanner />

      {children}

      <TopFooter />
      <Footer />
    </>
  );
};

export default Layout;
