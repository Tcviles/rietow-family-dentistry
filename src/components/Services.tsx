import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Divider,
  Button,
} from '@mui/material';
import content from '../content';
import ServicesDetail from './services/ServicesDetail';

function Services() {
  const { heading, servicesContent } = content.servicesPage;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSelectCategory = (selectedId: string) => {
    const selectedCategoryObj = servicesContent.find(cat => cat.id === selectedId) || null;
    setSelectedCategory(selectedCategoryObj?.id || null);
    setSelectedService(selectedCategoryObj?.services[0].id || null);
  }

  // Set default selection logic
  useEffect(() => {
    if (servicesContent.length === 1) {
      const firstCat = servicesContent[0];
      setSelectedCategory(firstCat.id);
      setSelectedService(firstCat.services[0].id);
    }
  }, [servicesContent]);

  const selectedCategoryObj = servicesContent.find(cat => cat.id === selectedCategory);

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'start',
        minHeight: '100vh',
        backgroundColor: 'white',
        padding: 3,
        borderRadius: 2,
      }}
    >
      {/* Page Heading */}
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h5">{heading}</Typography>
        <Divider />
      </Grid>

      {/* Show category selection only if there's more than one */}
      {servicesContent.length > 1 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
              lg: '1fr 1fr 1fr 1fr 1fr 1fr',
            },
            gap: 3,
            width: '100%',
            mb: 2,
          }}
        >
          {servicesContent.map(({ title, icon: Icon, id }) => (
            <Box
              key={id}
              onClick={() => handleSelectCategory(id)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selectedCategory === id ? '#dff6fc' : '#f5f5f5',
                padding: 1,
                borderRadius: 1,
                cursor: 'pointer',
                minHeight: 70,
                transition: '0.2s ease-in-out',
                '&:hover': {
                  boxShadow: 1,
                  backgroundColor: '#ebebeb',
                },
              }}
            >
              <Icon sx={{ fontSize: 20, color: '#555', mb: 0.5 }} />
              <Typography variant="caption" align="center" fontWeight={500}>
                {title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      <Grid item xs={12} sx={{ mb: 2 }}>
        <Divider />
      </Grid>

      {/* Sub-grid: services under selected category */}
      {selectedCategoryObj && selectedCategoryObj.services.length > 1 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1fr 1fr 1fr',
              lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            },
            gap: 3,
            justifyContent: 'center',
            alignContent: 'center',
            width: '100%',
            mb: 2,
          }}
        >
          {selectedCategoryObj.services.map(({ id, title, icon: Icon }) => (
            <Box
              key={id}
              onClick={() => setSelectedService(id)}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selectedService === id ? '#333' : '#444',
                color: '#fff',
                padding: 1,
                borderRadius: 1,
                cursor: 'pointer',
                transition: '0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: '#222',
                },
              }}
            >
              <Icon sx={{ fontSize: 20, color: '#fff', mb: 0.5 }} />
              <Typography variant="caption" align="center" fontWeight={400}>
                {title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}

      {/* Service detail view */}

      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: '#f0f0f0',
          marginTop: 2,
          borderRadius: 2,
        }}
      >
        <ServicesDetail selectedService={selectedService} />
      </Grid>
    </Grid>
  );
}

export default Services;
