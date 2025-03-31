import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Grid,
} from '@mui/material';
import content from '../../content';

type ServicesDetailProps = {
  selectedService: string | null;
};


function ServicesDetail({ selectedService }: ServicesDetailProps) {
  const { intro, categories } = content.servicesPage;
  if (!selectedService) return (
    <Grid item xs={12} sx={{ mb: 3 }}>
      <Typography variant="body1" whiteSpace="pre-line">
        {intro}
      </Typography>
    </Grid>)
  const data = categories.find(category => category.id === selectedService)

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Typography variant="h5" gutterBottom>
        {data?.title}
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        {data?.subtitle}
      </Typography>

      <Typography variant="body1" paragraph>
        {data?.description}
      </Typography>

      {data?.sections?.map((section, index) => (
        <>
          <Divider sx={{ my: 3 }} />
          <Box key={index} sx={{ mt: 4 }}>
            {section.title && (
              <Typography variant="h6" gutterBottom>
                {section.title}
              </Typography>
            )}

            {section.type === 'list' && section.listItems && (
              <List dense>
                {section.listItems.map((item, idx) => (
                  <ListItem key={idx}>
                    <ListItemText
                      primary={item.primary}
                      secondary={item.secondary}
                    />
                  </ListItem>
                ))}
              </List>
            )}
            {section.type === 'paragraph' && section.content && (
              <Typography variant="body1" whiteSpace="pre-line" paragraph>
                {section.content}
              </Typography>
            )}
          </Box>
        </>
      ))}

      <Button
        variant="contained"
        color="primary"
        href="/contact"
        sx={{ mt: 2 }}
      >
        {data?.buttonText}
      </Button>
    </Box>
  );
}

export default ServicesDetail;
