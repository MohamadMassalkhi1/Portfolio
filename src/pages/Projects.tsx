/**
 * Projects.tsx
 * Projects page component that displays a grid of AI and ML projects.
 * Features project filtering, animated cards, and links to GitHub repositories.
 */

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Input,
  VStack,
  Text,
  Badge,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

// Interface for project data structure
interface Project {
  name: string;
  description: string;
  html_url: string;
  topics?: string[];
}

const Projects = () => {
  // State management for projects and search functionality
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Theme colors for light/dark mode
  const bgColor = useColorModeValue('white', 'gray.800');

  // Static list of projects with their details
  const projectsList = [
    {
      "name": "Brain Tumor Detection",
      "description": "A deep learning model using CNNs to detect brain tumors from MRI images, deployed with Flask.",
      "html_url": "https://github.com/MohamadMassalkhi1/AI-and-ML-Projects/tree/main/Brain_Tumor_Detection",
      "topics": ["Deep Learning", "Medical AI", "Flask"]
    },
    {
      "name": "Stock Price Prediction",
      "description": "An LSTM-based deep learning model for time-series forecasting of stock prices.",
      "html_url": "https://github.com/MohamadMassalkhi1/AI-and-ML-Projects/tree/main/Stock_Price_Prediction",
      "topics": ["Deep Learning", "LSTM", "Finance", "Time Series"]
    },
    {
      "name": "CartPole - Reinforcement Learning",
      "description": "A reinforcement learning model using OpenAI Gym to balance a pole on a moving cart.",
      "html_url": "https://github.com/MohamadMassalkhi1/AI-and-ML-Projects/tree/main/Car%20Pole%20-%20Reinforcement%20Learning",
      "topics": ["Reinforcement Learning", "OpenAI Gym", "Deep Q-Learning"]
    },
    {
      "name": "RAG App",
      "description": "A Retrieval-Augmented Generation (RAG) application leveraging NLP and vector search for document processing.",
      "html_url": "https://github.com/MohamadMassalkhi1/RAG_App",
      "topics": ["Natural Language Processing", "LLMs", "AI Search"]
    }

  ];

  // Initialize projects on component mount
  useEffect(() => {
    setProjects(projectsList);
  }, []);

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            fontSize="4xl"
          >
            AI & ML Projects
          </Heading>
        </motion.div>

        {/* Search input */}
        <Input
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          maxW="600px"
        />

        {/* Projects grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="100%">
          {filteredProjects.map((project, index) => (
            // Animated project card
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Project card */}
              <Box
                p={6}
                bg={bgColor}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{
                  transform: 'translateY(-4px)',
                  transition: '0.3s',
                  boxShadow: '2xl',
                }}
                borderWidth="1px"
                borderColor="blue.200"
              >
                <VStack align="start" spacing={3}>
                  {/* Project title */}
                  <Heading size="md">{project.name}</Heading>
                  
                  {/* Project description */}
                  <Text>{project.description}</Text>
                  
                  {/* Project topics/tags */}
                  <Box>
                    {project.topics?.map((topic) => (
                      <Badge key={topic} mr={2} mb={2} colorScheme="blue">
                        {topic}
                      </Badge>
                    ))}
                  </Box>
                  
                  {/* GitHub link */}
                  <Link href={project.html_url} isExternal color="blue.500">
                    View on GitHub
                  </Link>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Projects;