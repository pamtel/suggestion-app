import { cardData } from '@/app/util'
import { Box, Button, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'

type NavbarProps = {
  onCardClick: () => void;
  isOpen: boolean;
  SuggestionsNumber: number;
}

const Navbar = ({ onCardClick, isOpen, SuggestionsNumber }: NavbarProps) => {
  return (
    <Box
      w='100%'
      bg='#373F68'
      px='20px'
      py='20px'
      borderRadius='10px'
    >
      <Flex
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <HStack>
            <Image src='/svg/bulb.svg' alt="Bulb" />
            <Text fontSize='18px' fontWeight={700} color="#FFFFFF" pl='20px'>{SuggestionsNumber} Suggestions</Text>
            <Box px='30px'>
              <HStack onClick={onCardClick} cursor='pointer'>
                <Text fontSize='14px' fontWeight={400} color="#FFFFFF">Sort by : <Text as='b'>Most Upvotes</Text></Text>
                {isOpen === true ?
                  <Image src='/svg/arrowDown.svg' alt='arrow-up' /> :
                  <Image src='/svg/arrowUp.svg' alt='arrow-up' />
                }
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