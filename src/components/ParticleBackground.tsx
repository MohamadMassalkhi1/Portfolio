import React from 'react';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ParticleBackground = () => {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgGradient="linear(to-r, blue.400, purple.500, blue.600)"
      backgroundSize="200% 200%"
      animation={`${animatedGradient} 15s ease infinite`}
      opacity={0.1}
    />
  );
};

export default ParticleBackground; 