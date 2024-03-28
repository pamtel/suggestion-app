'use client';

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Navbar, Sidebar } from '../components/layout';
import Card from '../components/Card';
import Popup from '../components/Popup';
import { cardData } from '../util';
import EmptyState from '../components/EmptyState';

function Suggestions() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const filterCards = (category: string) => {
    console.log('selectedCategory', category);
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === 'All' ?
    cardData : cardData.filter(card => card.category === selectedCategory);

  return (
    <Box position='relative'>
      <Flex>
        <Box position="fixed">
          <Sidebar onCategoryFilter={filterCards} />
        </Box>
        <Box ml="280px" width='100%'>
          <Box position="sticky">
            <Navbar onCardClick={togglePopup} isOpen={isOpen} SuggestionsNumber={filteredCards.length} />
          </Box>
          {filteredCards.length === 0 ?
            <EmptyState /> :
            <Box mt="30px" position='relative'>
              <Card selectedCategory={selectedCategory} />
              {isOpen && (
                <Popup isOpen={isOpen} onClose={closePopup} />
              )}
            </Box>
          }
        </Box>
      </Flex>
    </Box>
  );
}

export default Suggestions;
