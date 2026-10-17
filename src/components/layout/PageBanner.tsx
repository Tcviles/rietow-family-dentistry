import { ReactNode } from 'react';
import { Box, Container, Typography } from '@mui/material';

type PageBannerProps = {
  title: string;
  subtitle?: ReactNode;
  image?: string;
  // CSS background-position, to choose which part of a tall photo shows
  position?: string;
  // Taller banner, for photos that need more room to show the subject
  tall?: boolean;
  // Extra bottom padding when content below overlaps the banner
  overlap?: boolean;
};

const defaultImage = require('../../assets/hero/office-night.webp');

// Full-width photo header used at the top of inner pages.
function PageBanner({ title, subtitle, image = defaultImage, position = 'center 60%', tall = false, overlap = false }: PageBannerProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        color: 'common.white',
        display: 'flex',
        alignItems: 'center',
        minHeight: tall ? { xs: 300, md: 440 } : undefined,
        boxSizing: 'border-box',
        pt: { xs: 6, md: 9 },
        pb: overlap ? { xs: 9, md: 12 } : { xs: 6, md: 9 },
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center', width: '100%' }}>
        <Typography variant="h2" component="h1" sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.4rem' } }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ mt: 1.5, opacity: 0.9, fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 620, mx: 'auto' }}>
            {subtitle}
          </Typography>
        )}
      </Container>
    </Box>
  );
}

export default PageBanner;
