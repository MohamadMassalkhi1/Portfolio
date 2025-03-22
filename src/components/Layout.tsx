/**
 * Layout.tsx
 * Main layout component that wraps all pages.
 * Provides consistent structure with navigation, footer, and chatbot.
 */

import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';

// Props interface for the Layout component
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Main container with minimum height and flex layout
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* Navigation bar fixed at the top */}
      <Navbar />

      {/* Main content area with max width container */}
      <Container maxW="container.xl" flex="1">
        {children}
      </Container>

      {/* Chatbot component for user interaction */}
      <ChatBot />

      {/* Footer component fixed at the bottom */}
      <Footer />
    </Box>
  );
};

export default Layout;