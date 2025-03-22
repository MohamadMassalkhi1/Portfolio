/**
 * Navbar.tsx
 * Navigation component that provides links to different sections of the portfolio.
 * Features responsive design and dark mode toggle.
 */

import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useColorModeValue,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Color mode (dark/light) management
  const { colorMode, toggleColorMode } = useColorMode();
  // Theme-aware background color
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    // Sticky navigation container
    <Box bg={bgColor} px={4} position="sticky" top={0} zIndex={10}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo/Home link */}
        <Link to="/">
          <Box fontWeight="bold">Mohamad Massalkhi</Box>
        </Link>

        {/* Navigation items and theme toggle */}
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            {/* Navigation links */}
            <Link to="/projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link to="/skills">
              <Button variant="ghost">Skills</Button>
            </Link>

            {/* Dark/Light mode toggle */}
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 