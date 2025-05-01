'use client'; // Add this directive at the top to make it a client component

import React from 'react';
import Link from 'next/link';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useImageCache } from '../hooks/useImageCache';
import { galleryData } from '../data/galleryData';

const LandingPage = () => {
  const { getCachedImage } = useImageCache();
  
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Button
          component={Link}
          href="/"
          startIcon={<ArrowBackIcon />}
          variant="text"
          sx={{ mr: 2, color: 'text.primary' }}
        >
          Back to Home
        </Button>
      </Box>
      
      <Typography variant="h2" component="h1" gutterBottom align="left" sx={{ fontWeight: 'bold', mb: 1 }}>
        Image Gallery
      </Typography>
      
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }} align="left">
        All images are locally stored and properly cached to reduce bandwidth usage.
      </Typography>
      
      {/* Use Box-based layout to avoid Grid issues */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 3, 
        marginX: -1.5 
      }}>
        {galleryData.map((item) => (
          <Box 
            key={item.id} 
            sx={{ 
              width: { xs: '100%', sm: '45%', md: '30%' },
              padding: 1.5,
              boxSizing: 'border-box'
            }}
          >
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 3,
              }
            }}>
              <CardMedia
                component="img"
                height="400"
                image={getCachedImage(`/images/${item.image}`)}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" align="left">
                  {item.title}
                </Typography>
                <Typography align="left" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default LandingPage;