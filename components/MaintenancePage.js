// components/MaintenancePage.js
import React from 'react';
import { Box, Heading, Text, Center } from '@chakra-ui/react';

const MaintenancePage = () => {
  return (
    <Center height="100vh" bg={useColorModeValue('white', 'gray.800')}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          Under Maintenance
        </Heading>
        <Text fontSize="xl">
          We are currently performing scheduled maintenance. We should be back shortly. Thank you for your patience.
        </Text>
      </Box>
    </Center>
  );
};

export default MaintenancePage;
