import React from 'react';
import { Modal, ModalBody, Box, Text } from '@chakra-ui/react';
import { comments } from '../util/comments';

const Popup = ({ isOpen, onClose }: any) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box
        position='absolute'
        top='17%'
        left='50%'
        bg='white'
        borderRadius='10px'
        py='10px'
        w='255px'
        boxShadow='0px 10px 15px -3px rgba(0,0,0,0.1);'
      >
        <ModalBody>
          {comments.map((v, index) => (
            <Box py='8px' cursor='pointer' borderEnd='1px'>
              <Text
                key={index}
                fontSize='16px'
                color='#647196'
                px='3px'
              >
                {v.com}
              </Text>
            </Box>
          ))}
        </ModalBody>
      </Box>
    </Modal>
  );
};

export default Popup;
