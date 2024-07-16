'use client';

import { Box } from '@chakra-ui/react';
import Landing from '../../components/Landing';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import FAQS from '../../components/FAQS';

export default function LandingPage() {
  return (
    <Box>
      <Landing />
      <Features />
      <FAQS />
      <Footer />
    </Box>
  );
}
