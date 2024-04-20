import React from 'react';
import { Box, VStack, Heading, Text, Input, Button } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Chatbot Interface</Heading>
        <Text>Welcome to the chatbot interface. Start a conversation below!</Text>
        <Box>
          <Input placeholder="Type your message..." />
          <Button mt={2} colorScheme="blue">Send</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
