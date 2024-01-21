import { Button, Image, VStack, Text, Box, Center, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react';

function ProductItem({product}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)

  return (
    <VStack
      data-cy="product-card"
      spacing="20px"
      align="center"
      border="1px solid black"
      p={4}  ref={finalRef}
    >
      <Image src={product.image} alt={product.title} w='80%'/>
      <Text fontSize='6xl'>Product: {product.title}</Text>
      <Text>Brand : {product.brand}</Text>
      <Text>Category : {product.category}</Text>
      <Text>Price : {product.price}</Text>
      <Button onClick={onOpen} colorScheme='teal' variant='outline' p={4} mb={10}>View in Model</Button>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={'300px'} bg={'white'} p={5} border='1px solid black' borderRadius={4} margin='200px auto'>
          <ModalBody>
            <VStack>
            <Image src={product.image} alt={product.title} w='80%'/>
            <Text fontSize='6xl'>Product: {product.title}</Text>
            <Text>Brand : {product.brand}</Text>
            <Text>Category : {product.category}</Text>
            <Text>Price : {product.price}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
}

export default ProductItem;
