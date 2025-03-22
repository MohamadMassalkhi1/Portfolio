import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Input,
  VStack,
  Text,
  useColorModeValue,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { ChatIcon, CloseIcon } from '@chakra-ui/icons';

const ChatBot = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([]);
  const [input, setInput] = useState('');
  const bgColor = useColorModeValue('white', 'gray.800');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages([...messages, userMessage]);
    setInput('');

    // Add AI response logic here
    const botMessage = { text: "I'm here to help! (Add AI integration)", isBot: true };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <Box position="fixed" bottom={4} right={4} zIndex={100}>
      <Collapse in={isOpen}>
        <Box
          w="300px"
          h="400px"
          bg={bgColor}
          borderRadius="lg"
          boxShadow="xl"
          p={4}
          mb={4}
        >
          <VStack h="100%" spacing={4}>
            <Box flex={1} w="100%" overflowY="auto">
              {messages.map((msg, idx) => (
                <Box
                  key={idx}
                  bg={msg.isBot ? 'blue.100' : 'gray.100'}
                  p={2}
                  borderRadius="md"
                  mb={2}
                  ml={msg.isBot ? 0 : 'auto'}
                  mr={msg.isBot ? 'auto' : 0}
                  maxW="80%"
                >
                  <Text>{msg.text}</Text>
                </Box>
              ))}
            </Box>
            <Box w="100%">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
            </Box>
          </VStack>
        </Box>
      </Collapse>
      <IconButton
        aria-label="Toggle chat"
        icon={isOpen ? <CloseIcon /> : <ChatIcon />}
        onClick={onToggle}
        colorScheme="blue"
        borderRadius="full"
        size="lg"
      />
    </Box>
  );
};

export default ChatBot; 