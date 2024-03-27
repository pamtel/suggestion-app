import { Box, Button, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { cardData } from '../util'

const Card = () => {
  return (
    <Box w='100%'>
      {cardData.map((item, index) => (
        <Flex
          key={index}
          justifyContent='space-between'
          alignItems='center'
          py='20px'
          px='30px'
          bg='#FFFFFF'
          borderRadius='10px'
          my='15px'
        >
          <Box>
            <HStack>
              <VStack bg='#F2F4FE' borderRadius='10px' py='12px' px='8px'>
                <Text fontSize='13px' fontWeight={700} color='#3A4374'>{item.id}</Text>
              </VStack>
              <Box px='20px' textAlign='start'>
                <Text color='#3A4374' fontSize='18px' fontWeight={700} pb='5px'>
                  {item.heading}
                </Text>
                <Text color='#647196' fontSize='16px' fontWeight={400} pb='10px'>
                  {item.desc}
                </Text>
                <Button
                  size='sm'
                  bg='#F2F4FF'
                  borderRadius='10px'
                  py='8px'
                  px='16px'
                  my='5px'
                  border='none'
                >
                  <Text color='#4661E6' fontSize='13px' fontWeight={600}>{item.category}</Text>
                </Button>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Image src='../assets/path.png' alt='path' />
              <Text color='#3A4374' fontSize='16px' fontWeight={700}>
                {item.message}
              </Text>
            </HStack>
          </Box>
        </Flex>
      ))}

    </Box>
  )
}

export default Card