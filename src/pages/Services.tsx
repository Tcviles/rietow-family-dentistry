import { useEffect, useRef } from 'react';
import { alpha, Box, Button, Card, CardActionArea, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import content from '../content';
import { ServiceCategory } from '../content/types';
import ServicesDetail from '../components/services/ServicesDetail';
import PageBanner from '../components/layout/PageBanner';
import RichText from '../components/shared/RichText';
import Reveal from '../components/shared/Reveal';
import { NAVBAR_HEIGHT } from '../components/layout/Navbar/navConstants';

const { intro, servicesContent } = content.servicesPage;

// Overview: every category as a compact, tappable card
function CategoryGrid({ onSelect }: { onSelect: (category: ServiceCategory) => void }) {
  return (
    <Grid container spacing={2}>
      {servicesContent.map((category, i) => {
        const { id, title, icon: Icon, services } = category;
        return (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Reveal delay={(i % 3) * 80}>
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: 5 },
                }}
              >
                <CardActionArea onClick={() => onSelect(category)} sx={{ height: '100%', p: 2.5 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: (t) => alpha(t.palette.primary.main, 0.08),
                        color: 'primary.main',
                      }}
                    >
                      <Icon />
                    </Box>
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {services.length > 1
                          ? services.map((s) => s.title.replace(/ \(.*\)$/, '')).join(' · ')
                          : 'Learn more'}
                      </Typography>
                    </Box>
                    <ChevronRightIcon sx={{ color: 'text.disabled' }} />
                  </Stack>
                </CardActionArea>
              </Card>
            </Reveal>
          </Grid>
        );
      })}
    </Grid>
  );
}

function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);
  const activeChipRef = useRef<HTMLDivElement>(null);

  // The URL is the source of truth, so links like /services?category=routine work
  // and the browser back button steps back through what the visitor looked at.
  const category = servicesContent.find((c) => c.id === searchParams.get('category'));
  const service = category?.services.find((s) => s.id === searchParams.get('service')) ?? category?.services[0];

  const select = (categoryId: string, serviceId?: string) => {
    setSearchParams(serviceId ? { category: categoryId, service: serviceId } : { category: categoryId });
  };

  // Scroll to the top of the content and keep the active category chip visible
  useEffect(() => {
    if (!category) return;
    const navOffset = window.innerWidth >= 900 ? NAVBAR_HEIGHT.md : NAVBAR_HEIGHT.xs;
    const top = topRef.current;
    if (top) {
      const y = top.getBoundingClientRect().top + window.scrollY - navOffset;
      if (window.scrollY > y) window.scrollTo({ top: y, behavior: 'smooth' });
    }
    activeChipRef.current?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [category, service]);

  return (
    <>
      <Helmet>
        <title>
          {service ? `${service.title} | ` : ''}Dental Services | Rietow Family Dentistry in Greenwood, IN
        </title>
        <meta
          name="description"
          content="Explore comprehensive family and cosmetic dental services at Rietow Family Dentistry in Greenwood, IN. Learn about cleanings, fillings, implants, and more."
        />
        <meta property="og:title" content="Services | Rietow Family Dentistry" />
        <meta
          property="og:description"
          content="From preventive care to cosmetic and restorative dentistry, Rietow Family Dentistry is your trusted provider in Greenwood, Indiana."
        />
        <meta property="og:url" content="https://www.rietowfamilydentistry.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rietowfamilydentistry.com/services" />
      </Helmet>

      <PageBanner
        title="Our Services"
        subtitle="Honest, compassionate, and experienced care for every member of your family."
        image={require('../assets/joe-with-patient/image2.webp')}
        position="center 40%"
        tall
      />

      <Box ref={topRef} />

      {!category || !service ? (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
          <Box sx={{ maxWidth: 820, mx: 'auto', mb: { xs: 4, md: 6 }, textAlign: { md: 'center' } }}>
            <RichText text={intro} />
          </Box>
          <CategoryGrid onSelect={(c) => select(c.id)} />
        </Container>
      ) : (
        <>
          {/* Phones/tablets: sticky, swipeable category bar */}
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'sticky',
              top: NAVBAR_HEIGHT.xs,
              zIndex: 2,
              bgcolor: 'background.paper',
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ overflowX: 'auto', px: 2, py: 1.5, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}
            >
              {servicesContent.map((c) => (
                <Box key={c.id} ref={c.id === category.id ? activeChipRef : undefined} sx={{ flexShrink: 0 }}>
                  <Chip
                    icon={<c.icon fontSize="small" />}
                    label={c.title}
                    onClick={() => select(c.id)}
                    color={c.id === category.id ? 'primary' : 'default'}
                    variant={c.id === category.id ? 'filled' : 'outlined'}
                  />
                </Box>
              ))}
            </Stack>
          </Box>

          <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
            <Grid container spacing={{ xs: 3, md: 5 }}>
              {/* Desktop: sticky sidebar of all categories */}
              <Grid item md={4} lg={3.5} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Card sx={{ position: 'sticky', top: NAVBAR_HEIGHT.md + 24, borderRadius: 3, p: 1.5 }}>
                  <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => setSearchParams({})}
                    sx={{ mb: 1, textTransform: 'none' }}
                  >
                    All services
                  </Button>
                  {servicesContent.map((c) => {
                    const active = c.id === category.id;
                    return (
                      <Box key={c.id}>
                        <Button
                          fullWidth
                          startIcon={<c.icon />}
                          onClick={() => select(c.id)}
                          sx={{
                            justifyContent: 'flex-start',
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontWeight: active ? 700 : 500,
                            color: active ? 'primary.main' : 'text.primary',
                            bgcolor: (t) => (active ? alpha(t.palette.primary.main, 0.08) : 'transparent'),
                            borderRadius: 2,
                            px: 1.5,
                            py: 1,
                          }}
                        >
                          {c.title}
                        </Button>
                        {active && c.services.length > 1 && (
                          <Stack sx={{ pl: 5.5, py: 0.5 }}>
                            {c.services.map((s) => (
                              <Button
                                key={s.id}
                                size="small"
                                onClick={() => select(c.id, s.id)}
                                sx={{
                                  justifyContent: 'flex-start',
                                  textAlign: 'left',
                                  textTransform: 'none',
                                  color: s.id === service.id ? 'primary.main' : 'text.secondary',
                                  fontWeight: s.id === service.id ? 700 : 400,
                                  borderLeft: '2px solid',
                                  borderColor: s.id === service.id ? 'primary.main' : 'divider',
                                  borderRadius: 0,
                                  pl: 1.5,
                                }}
                              >
                                {s.title}
                              </Button>
                            ))}
                          </Stack>
                        )}
                      </Box>
                    );
                  })}
                </Card>
              </Grid>

              <Grid item xs={12} md={8} lg={8.5}>
                {/* Phones/tablets: services within the chosen category */}
                {category.services.length > 1 && (
                  <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {category.services.map((s) => (
                      <Chip
                        key={s.id}
                        label={s.title}
                        onClick={() => select(category.id, s.id)}
                        color={s.id === service.id ? 'primary' : 'default'}
                        variant={s.id === service.id ? 'filled' : 'outlined'}
                        size="small"
                      />
                    ))}
                  </Box>
                )}

                <Card sx={{ borderRadius: 3, p: { xs: 2.5, md: 5 } }}>
                  <ServicesDetail key={service.id} service={service} />
                </Card>

                <Button
                  startIcon={<ArrowBackIcon />}
                  onClick={() => setSearchParams({})}
                  sx={{ mt: 3, display: { md: 'none' } }}
                >
                  All services
                </Button>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}

export default ServicesPage;
