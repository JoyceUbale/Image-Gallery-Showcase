'use client';

import Link from 'next/link';
import { Button, Container, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Image Gallery Showcase
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            A demo of locally stored and cached images
          </Typography>
          <Link href="/landing-page" passHref>
            <Button variant="contained" size="large" color="primary">
              View Gallery
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
}
