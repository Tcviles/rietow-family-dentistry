import { ReactNode } from 'react';
import { Box } from '@mui/material';

type ParallaxBandProps = {
  image: string;
  children: ReactNode;
};

// A full-width photo band whose background stays put while the page scrolls past it.
// iOS Safari ignores fixed backgrounds, so phones get a normal (scrolling) background.
function ParallaxBand({ image, children }: ParallaxBandProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' },
        color: 'common.white',
        py: { xs: 8, md: 12 },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(20, 20, 20, 0.6)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>{children}</Box>
    </Box>
  );
}

export default ParallaxBand;
