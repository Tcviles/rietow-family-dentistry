import { useState, useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Divider,
  Paper,
  Typography,
} from '@mui/material';
import content from '../content';
import ServicesDetail from '../components/services/ServicesDetail';

function ServicesPage() {
  const { heading, servicesContent } = content.servicesPage;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelectCategory = (selectedId: string) => {
    const selectedCategoryObj = servicesContent.find(cat => cat.id === selectedId) || null;
    setSelectedCategory(selectedCategoryObj?.id || null);
    setSelectedService(selectedCategoryObj?.services[0].id || null);
  };

  useEffect(() => {
    if (servicesContent.length === 1) {
      const firstCat = servicesContent[0];
      setSelectedCategory(firstCat.id);
      setSelectedService(firstCat.services[0].id);
    }
  }, [servicesContent]);

  const selectedCategoryObj = servicesContent.find(cat => cat.id === selectedCategory);

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
        {/* Page Heading */}
        <Typography
          variant="h4"
          sx={{
            fontStyle: 'italic',
            fontWeight: 600,
            mb: 1,
            textAlign: 'center',
          }}
        >
          {heading}
        </Typography>

        <Divider
          sx={{
            width: 60,
            borderBottomWidth: 3,
            borderColor: 'primary.main',
            mx: 'auto',
            my: 3,
          }}
        />

        {/* Category Selector */}
        {servicesContent.length > 1 && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr 1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
                lg: 'repeat(6, 1fr)',
              },
              gap: 3,
              mb: 4,
            }}
          >
            {servicesContent.map(({ title, icon: Icon, id }) => (
              <Box
                key={id}
                onClick={() => {
                  handleSelectCategory(id)
                  setTimeout(() => {
                    if (detailRef.current) {
                      const yOffset = -130; // Adjust based on your navbar height (e.g., 100px)
                      const y = detailRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }, 0);
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedCategory === id ? '#dff6fc' : '#f5f5f5',
                  padding: 2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  minHeight: 80,
                  transition: '0.2s ease-in-out',
                  '&:hover': {
                    boxShadow: 1,
                    backgroundColor: '#ebebeb',
                  },
                }}
              >
                <Icon sx={{ fontSize: 24, color: '#555', mb: 0.5 }} />
                <Typography variant="caption" align="center" fontWeight={500}>
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        <Box ref={detailRef} />

        {/* Service Buttons */}
        {selectedCategoryObj && selectedCategoryObj.services.length > 1 && (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
                lg: 'repeat(8, 1fr)',
              },
              gap: 2,
              mb: 3,
            }}
          >
            {selectedCategoryObj.services.map(({ id, title, icon: Icon }) => (
              <Box
                key={id}
                onClick={() => {
                  setSelectedService(id);
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedService === id ? '#333' : '#444',
                  color: '#fff',
                  padding: 2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  transition: '0.2s ease-in-out',
                  '&:hover': {
                    backgroundColor: '#222',
                  },
                }}
              >
                <Icon sx={{ fontSize: 24, color: '#fff', mb: 0.5 }} />
                <Typography variant="caption" align="center" fontWeight={400}>
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Service Detail */}
        <Box
          sx={{
            backgroundColor: '#f9f9f9',
            borderRadius: 2,
            px: { xs: 2, md: 4 },
            py: 3,
          }}
        >
          <ServicesDetail selectedService={selectedService} />
        </Box>
      </Paper>
    </Container>
  );
}

export default ServicesPage;
