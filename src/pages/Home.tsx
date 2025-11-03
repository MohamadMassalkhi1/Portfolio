/**
 * Home.tsx
 * Main landing page component for the portfolio website.
 * Features a modern, animated hero section with personal introduction,
 * social links, and key expertise areas.
 */

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Icon,
  useColorModeValue,
  VStack,
  HStack,
  Flex,
  Tooltip,
  ScaleFade,
  Badge,
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaBrain, FaRobot, FaChartLine, FaCode, FaFilePdf} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

// Animation keyframes for various effects
const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  50% { border-color: transparent }
`;

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-10px) }
  100% { transform: translateY(0px) }
`;

const Home = () => {
  // Theme color values for light/dark mode
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'white');
  const accentColor = useColorModeValue('blue.500', 'blue.300');
  const cardBg = useColorModeValue('white', 'gray.800');
  const gradientBg = useColorModeValue(
    'linear(to-r, blue.50, purple.50)',
    'linear(to-r, blue.900, purple.900)'
  );
  const socialHoverBg = useColorModeValue('blue.50', 'blue.900');

  // Motion components for animations
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);

  // Data for skills section
  const skillsData = [
    { name: 'Deep Learning', icon: FaBrain, description: 'Neural Networks & AI Models' },
    { name: 'Computer Vision', icon: FaRobot, description: 'Image Processing & Recognition' },
    { name: 'NLP', icon: FaCode, description: 'Natural Language Processing' },
    { name: 'Reinforcement Learning', icon: FaChartLine, description: 'AI for Robotics and Automation' },
  ];

  // Social media links configuration
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/MohamadMassalkhi1?tab=repositories' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mohamadmassalkhi' },
    { icon: FaEnvelope, label: 'Email', href: 'mailto:mohmassalkhi@gmail.com' },
    { icon: FaFilePdf, label: 'Resume', href: process.env.PUBLIC_URL + '/Mohamad Massalkhi - Resume.pdf' }
  ];

  return (
    // Main container with gradient background
    <Box position="relative" minH="calc(100vh - 80px)" overflow="hidden" bg={gradientBg}>
      {/* Animated background effect */}
      <ParticleBackground />
      
      {/* Main content container */}
      <Container maxW="container.xl" h="full" position="relative" zIndex={1}>
        <Flex
          direction="column"
          h="full"
          pt={{ base: 20, md: 32 }}
          pb={20}
          gap={8}
        >
          {/* Hero Section */}
          <MotionFlex
            direction="column"
            gap={6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Welcome badge with animation */}
            <ScaleFade in={true} initialScale={0.9}>
              <Badge
                colorScheme="blue"
                px={3}
                py={1}
                borderRadius="full"
                mb={4}
                fontSize="md"
              >
                Welcome to my portfolio
              </Badge>
            </ScaleFade>

            {/* Animated greeting text */}
            <Text
              color={accentColor}
              fontWeight="bold"
              fontSize="xl"
              letterSpacing="wide"
              sx={{
                animation: `${float} 3s ease-in-out infinite`
              }}
            >
              Hi there, I'm
            </Text>
            
            {/* Main heading with gradient effect */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "7xl" }}
              fontWeight="bold"
              lineHeight="1.1"
              letterSpacing="tight"
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              Mohamad Massalkhi
              {/* Animated role text with typewriter effect */}
              <Text
                as="span"
                display="block"
                fontSize={{ base: "2xl", md: "4xl" }}
                color={accentColor}
                mt={4}
                sx={{
                  borderRight: '0.15em solid',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  animation: `
                    ${typewriter} 3s steps(50, end) forwards,
                    ${blink} 0.75s step-end infinite 3s`,
                }}
              >
                AI & Machine Learning Engineer
              </Text>
            </Heading>

            {/* Introduction text */}
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={textColor}
              maxW="800px"
              lineHeight="tall"
              mt={4}
            >
              Passionate about developing innovative AI solutions that push the boundaries 
              of what's possible. Specialized in computer vision, deep learning, and 
              natural language processing, I create intelligent systems that solve 
              real-world problems.
            </Text>

            {/* Call-to-action buttons */}
            <HStack spacing={6} mt={8}>
              <Button
                as="a"
                href="#/projects"
                size="lg"
                colorScheme="blue"
                rightIcon={<Icon as={FaArrowRight} />}
                _hover={{
                  transform: 'translateX(4px)',
                }}
                transition="all 0.3s"
                px={8}
                py={6}
                fontSize="lg"
              >
                View My Work
              </Button>
              <Button
                as="a"
                href="mailto:mohmassalkhi@gmail.com"
                size="lg"
                variant="outline"
                colorScheme="blue"
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'lg',
                }}
                px={8}
                py={6}
                fontSize="lg"
              >
                Get In Touch
              </Button>
            </HStack>
          </MotionFlex>

          {/* Social Links Section */}
          <MotionFlex
            gap={6}
            mt={12}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {socialLinks.map((social) => (
              <Tooltip key={social.label} label={social.label} hasArrow>
                <Button
                  as="a"
                  href={social.href}
                  target="_blank"
                  variant="ghost"
                  size="lg"
                  leftIcon={<Icon as={social.icon} boxSize={5} />}
                  _hover={{
                    transform: 'translateY(-2px)',
                    color: accentColor,
                    bg: socialHoverBg,
                  }}
                  transition="all 0.3s"
                >
                  {social.label}
                </Button>
              </Tooltip>
            ))}
          </MotionFlex>

          {/* Expertise Preview Section */}
          <MotionBox
            mt={20}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={accentColor}
              mb={4}
              letterSpacing="wider"
              textTransform="uppercase"
            >
              Areas of Expertise
            </Text>
            {/* Skills grid */}
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={8}
              wrap="wrap"
            >
              {skillsData.map((skill, index) => (
                <ScaleFade key={skill.name} in={true} initialScale={0.9} delay={index * 0.1}>
                  <Box
                    p={6}
                    bg={cardBg}
                    borderRadius="xl"
                    boxShadow="xl"
                    _hover={{
                      transform: 'translateY(-4px)',
                      shadow: '2xl',
                    }}
                    transition="all 0.3s"
                    flex="1"
                    minW={{ base: 'full', md: '250px' }}
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Decorative gradient line */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      h="4px"
                      bgGradient="linear(to-r, blue.400, purple.500)"
                    />
                    <VStack align="start" spacing={4}>
                      {/* Animated skill icon */}
                      <Icon 
                        as={skill.icon} 
                        boxSize={8} 
                        color={accentColor}
                        sx={{
                          animation: `${float} 3s ease-in-out infinite`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      />
                      <Text
                        fontWeight="bold"
                        fontSize="xl"
                        color={headingColor}
                      >
                        {skill.name}
                      </Text>
                      <Text color={textColor}>
                        {skill.description}
                      </Text>
                    </VStack>
                  </Box>
                </ScaleFade>
              ))}
            </Stack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default Home; 