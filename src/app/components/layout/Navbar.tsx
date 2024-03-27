// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, HStack, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box
      w='100%'
      bg='#373F68'
      px='20px'
      py='10px'
      borderRadius='10px'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <HStack>
            <Image src='/public/svg/bulb.svg' alt="Bulb" />
            <Text fontSize='18px' fontWeight={700}>6 Suggestions</Text>
            <Box px='30px'>
              <HStack>
                <Text fontSize='14px' fontWeight={400}>Sort by : <Text as='b'>Most Upvotes</Text></Text>
                {/* <ChevronDownIcon w={8} h={8} /> */}
                {/* <IconButton aria-label='Search database' icon={<ChevronDownIcon />} /> */}
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Box>
          <Button
            bg='#AD1FEA'
            px='20px'
            py='10px'
            border='none'
            borderRadius='10px'
            cursor='pointer'
          >
            <Text color='#F2F4FE' fontSize='14px' fontWeight={700}>
              + Add Feedback
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar