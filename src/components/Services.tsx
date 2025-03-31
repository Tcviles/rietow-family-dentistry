import React, { useState } from 'react';
import { Grid, Typography, Box, Divider, Button } from '@mui/material';
import content from '../content';
import ServicesDetail from './services/ServicesDetail';

function Services() {
  const { heading, categories } = content.servicesPage;
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


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

          {/* Services Grid */}
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
            }}
          >
            {categories.map(({ title, description, icon: Icon, id }) => (
              <Box
                key={id}
                onClick={() => setSelectedService(id ?? '')}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // Center icon + title
                  justifyContent: 'center',
                  backgroundColor: '#f9f9f9',
                  padding: 1,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: '0.2s',
                  minHeight: 100,
                  '&:hover': { boxShadow: 3, backgroundColor: '#f0f0f0' },
                }}
              >
                <Icon sx={{ fontSize: 36, color: '#999', mb: 1 }} />
                <Typography variant="subtitle1" align="center">
                  {title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">{description}</Typography> */}
              </Box>
            ))}
          </Box>
        <Grid item 
          xs={12} 
          sx={{
            backgroundColor: '#f0f0f0',
            marginTop: 2
          }}
        >
          <ServicesDetail selectedService={selectedService} />
        </Grid>
    </Grid>
  );
}

export default Services;
