import { ReactNode, useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { keyframes } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export type Slide = {
  src: string;
  alt: string;
  // CSS object-position, to keep faces in frame when the photo is cropped
  focus?: string;
};

type HeroSlideshowProps = {
  slides: Slide[];
  interval?: number;
  children?: ReactNode;
};

// Slow "Ken Burns" zoom on the visible slide
const kenBurns = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.08); }
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

function HeroSlideshow({ slides, interval = 6000, children }: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Only start loading later slides after the first one has had a chance to paint
  const [loadAll, setLoadAll] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setLoadAll(true), 1500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (paused || slides.length < 2 || prefersReducedMotion()) return;
    const t = window.setInterval(() => setActive((i) => (i + 1) % slides.length), interval);
    return () => window.clearInterval(t);
  }, [paused, slides.length, interval]);

  const go = (delta: number) => setActive((i) => (i + delta + slides.length) % slides.length);

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      aria-label="Photos of Rietow Family Dentistry"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: '72vh', md: '78vh' },
        minHeight: { xs: 460, md: 560 },
        maxHeight: 760,
        bgcolor: 'grey.900',
        color: 'common.white',
      }}
    >
      {slides.map((slide, i) => (
        <Box
          key={slide.src}
          aria-hidden={i !== active}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        >
          {(i === 0 || loadAll) && (
            <Box
              component="img"
              src={slide.src}
              alt={slide.alt}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: slide.focus ?? 'center',
                animation: i === active ? `${kenBurns} ${interval + 2000}ms ease-out forwards` : 'none',
                '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
              }}
            />
          )}
        </Box>
      ))}

      {/* Darken the left side so overlay text stays readable on any photo */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: {
            xs: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.65) 100%)',
            md: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.05) 100%)',
          },
        }}
      />

      <Box sx={{ position: 'relative', height: '100%', zIndex: 1 }}>{children}</Box>

      {slides.length > 1 && (
        <>
          {[
            { delta: -1, label: 'Previous photo', Icon: ChevronLeftIcon, side: { left: 12 } },
            { delta: 1, label: 'Next photo', Icon: ChevronRightIcon, side: { right: 12 } },
          ].map(({ delta, label, Icon, side }) => (
            <IconButton
              key={label}
              aria-label={label}
              onClick={() => go(delta)}
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                color: 'common.white',
                bgcolor: 'rgba(0,0,0,0.25)',
                display: { xs: 'none', md: 'inline-flex' },
                '&:hover': { bgcolor: 'rgba(0,0,0,0.45)' },
                ...side,
              }}
            >
              <Icon fontSize="large" />
            </IconButton>
          ))}

          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              gap: 1,
              zIndex: 2,
            }}
          >
            {slides.map((slide, i) => (
              <Box
                key={slide.src}
                component="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                sx={{
                  width: i === active ? 28 : 10,
                  height: 10,
                  p: 0,
                  border: 0,
                  borderRadius: 5,
                  cursor: 'pointer',
                  bgcolor: i === active ? 'common.white' : 'rgba(255,255,255,0.5)',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default HeroSlideshow;
