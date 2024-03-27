import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Navbar, Sidebar } from '../components/layout';
import Card from '../components/Card';

function Suggestions() {
  return (
    <Flex>
      <Box position="fixed" >
        <Sidebar />
      </Box>
      <Box ml="280px" width='100%'>
        <Box position="sticky">
          <Navbar />
        </Box>
        <Box mt="30px">
          <Card />
        </Box>
      </Box>
    </Flex>
  );
}

export default Suggestions;
