/**
 * Skills.tsx
 * Skills page component that showcases technical expertise and specializations.
 * Features animated cards with rotating icons and categorized skill sets.
 */

import React from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  Icon,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaPython, FaReact, FaDocker, FaCloud, FaHtml5, FaDatabase, FaGit,FaTable  } from 'react-icons/fa';
import { SiTensorflow, SiOpenai } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  // Theme colors for light/dark mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const hoverBgColor = useColorModeValue('blue.50', 'blue.900');

  // Skill categories with their respective icons and lists
  const skillCategories = [
    {
      title: 'Artificial Intelligence (AI)',
      skills: [
        'Deep Learning',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Reinforcement Learning',
      ],
      icon: SiOpenai,
    },
    {
      title: 'Machine Learning (ML)',
      skills: [
        'Linear Regression',
        'Logistic Regression',
        'Decision Trees',
        'Random Forest',
        'Support Vector Machine (SVM)',
        'K-Nearest Neighbors (KNN)',
        'Naive Bayes',
        'K-Means Clustering',
        'XGBoost'
      ],
      icon: SiTensorflow,
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'SQL '
      ],
      icon: FaPython,
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        'Flask',
        'OpenCV',
        'YOLOV8',
        'TensorFlow',
        'Pandas & NumPy',
        'PyTorch',
        'Keras',
        'Scikit-learn'
      ],
      icon: FaDocker,
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS',
        'Azure'
      ],
      icon: FaCloud,
    },
    {
      title: 'Data Visualization',
      skills: [
        'Power BI',
        'Tableau',
        'Matplotlib',
        'Seaborn'
      ],
      icon: FaTable,
    },
    {
      title: 'Database Management',
      skills: [
        'MySQL',
        'MongoDB'

      ],
      icon: FaDatabase,
    },
    {
      title: 'Version Control',
      skills: [
        'GitHub'
      ],
      icon: FaGit,
    }
    
    
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        {/* Animated page heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            bgGradient="linear(to-r, cyan.400, blue.500)"
            bgClip="text"
            fontSize="4xl"
          >
            Skills & Expertise
          </Heading>
        </motion.div>

        {/* Skills grid layout */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="100%">
          {skillCategories.map((category, index) => (
            // Animated skill category card
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Skill category card */}
              <Box
                p={6}
                bg={bgColor}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{
                  transform: 'translateY(-4px)',
                  transition: '0.3s',
                  boxShadow: '2xl',
                  bg: hoverBgColor,
                }}
                borderWidth="1px"
                borderColor="blue.200"
              >
                <VStack align="start" spacing={4}>
                  {/* Rotating icon animation */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon as={category.icon} boxSize={8} color="blue.500" />
                  </motion.div>

                  {/* Category title */}
                  <Heading size="md">{category.title}</Heading>

                  {/* Skills list */}
                  {category.skills.map((skill) => (
                    <Text key={skill}>{skill}</Text>
                  ))}
                </VStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Skills; 