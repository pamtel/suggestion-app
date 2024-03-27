
'use client';

import React, { useState } from 'react'
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { categoryData, roadMapData } from '../../util'

const Sidebar = () => {

  const [activeCategory, setActiveCategory] = useState('All');

  const FrontendMentor = () => {
    return (
      <Box
        w='255px'
        h='137px'
        borderRadius='10px'
        px='24px'
        py="80px"
        bg='linear-gradient(90deg, rgba(122,152,251,1) 18%, rgba(163,55,246,1) 40%, rgba(251,181,122,1) 96%)'
      >
        <Text fontSize='20px' fontWeight={700} py='2px' color="#FFFFFF">
          Frontend Mentor
        </Text>
        <Text fontSize='15px' fontWeight={500} color="#FFFFFF">
          Feedback Board
        </Text>
      </Box>
    )
  }

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };


  const Category = () => {
    const categoriesInRows = [
      [categoryData[0], categoryData[1], categoryData[2]],
      [categoryData[3], categoryData[4]],
      [categoryData[5]],
    ];

    return (
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        w='255px'
        borderRadius='10px'
        pr='24px'
        py='18px'
        bg='#FFFFFF'
      >
        <Flex flexDirection='column'>
          {categoriesInRows.map((row, index) => (
            <Flex key={index}>
              {row.map((cat) => (
                <Button
                  key={cat.id}
                  size='sm'
                  bg={activeCategory === cat.name ? '#4661E6' : '#F2F4FF'}
                  borderRadius='10px'
                  py='8px'
                  px='16px'
                  my='5px'
                  border='none'
                  mr={index !== categoriesInRows.length - 1 ? 4 : 0}
                  cursor='pointer'
                  onClick={() => handleCategoryClick(cat.name)}
                >
                  <Text color={activeCategory === cat.name ? '#FFFFFF' : '#4661E6'} fontSize='13px' fontWeight={600}>
                    {cat.name}
                  </Text>
                </Button>
              ))}
            </Flex>
          ))}
        </Flex>
      </Box>
    );
  };

  const RoadMap = () => {
    return (
      <Box
        w='255px'
        bg='#FFFFFF'
        borderRadius='10px'
        py='18px'
        px='24px'
      >
        <Flex justifyContent='space-between' alignItems='center' pb='10px'>
          <Text color='#3A4374' fontWeight={700} fontSize='18px'>Roadmap</Text>
          <Text as='u' color='#4661E6' fontWeight={600} fontSize='13px'>View</Text>
        </Flex>
        <Flex flexDirection='column'>
          {roadMapData.map((item, index) => (
            <Flex key={index} justifyContent='space-between' alignItems='center'>
              <Box>
                <Flex py='10px' alignItems='center'>
                  <Box
                    w='8px'
                    h='8px'
                    borderRadius='50px'
                    bg={
                      item.type === 'Planned' ? '#F49F85' :
                        item.type === 'In-Progress' ? '#AD1FEA' :
                          '#62BCFA'
                    }></Box>
                  <Text color='#647196' fontWeight={400} fontSize='16px' pl='10px'>
                    {item.type}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Text color='#647196' fontWeight={700} fontSize='16px'>{item.view}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>
    )
  }

  return (
    <VStack>
      <Box>
        <FrontendMentor />
      </Box>
      <Box py='24px'>
        <Category />
      </Box>
      <Box>
        <RoadMap />
      </Box>
    </VStack>
  )
}

export default Sidebar