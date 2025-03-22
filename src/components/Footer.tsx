/**
 * Footer.tsx
 * Footer component that displays copyright information and social links.
 * Features responsive layout and theme-aware colors.
 */

import React from 'react';
import { Box, Container, Text, Stack, Link, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  // Theme-aware colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    // Footer container with theme-aware background
    <Box bg={bgColor} color={textColor}>
      {/* Content container with responsive layout */}
      <Container
        as={Stack}
        maxW="container.xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        {/* Copyright text */}
        <Text>© 2025 Mohamad Massalkhi. All rights reserved</Text>

        {/* Social links */}
        <Stack direction="row" spacing={6}>
          <Link href="https://github.com/MohamadMassalkhi1/AI-and-ML-Projects" target="_blank">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/mohamadmassalkhi" target="_blank">
            LinkedIn
          </Link>
          <Link href="mailto:mohmassalkhi@gmail.com">
            Contact
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer; 