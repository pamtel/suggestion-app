import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export const EmptyState = () => {
  return (
    <Flex justifyContent='center' alignItems='center' bg='#FFFFFF' mt='30px' borderRadius='10px'>
      <Box py='10%' textAlign='center'>
        <Image src='/images/empty.png' alt='empty state' />
        <Text color='#3A4374' fontSize='24px' fontWeight={700} py='15px'>
          There is no feedback yet.
        </Text>
        <Text color='#647196' fontSize='16px' fontWeight={400}>
          Got a suggestion? Found a bug that needs to be squashed?
        </Text>
        <Text color='#647196' fontSize='16px' fontWeight={400}>
          We love hearing about new ideas to improve our app.
        </Text>
        <Box>
          <Button
            bg='#AD1FEA'
            px='20px'
            py='10px'
            border='none'
            borderRadius='10px'
            cursor='pointer'
            mt='40px'
          >
            <Text color='#F2F4FE' fontSize='14px' fontWeight={700}>
              + Add Feedback
            </Text>
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default EmptyState