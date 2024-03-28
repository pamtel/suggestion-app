import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalCloseButton, Box } from '@chakra-ui/react';

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
        <ModalHeader>Popup Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Popup content goes here */}
          This is the content of the popup.
        </ModalBody>
      </Box>
    </Modal>
  );
};

export default Popup;
