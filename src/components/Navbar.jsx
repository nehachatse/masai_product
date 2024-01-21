import { Flex, Heading, Spacer, Button, HStack } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextProvider';


function Navbar() {
  const {providerState} = useContext(AuthContext)

  const handleLogout = () => {
    providerState.logout();
  }

  return (
    <Flex
      data-cy="navbar"
      align="center"
      backgroundColor="gray"
      color="white"
      p={4}
    >

      <Heading as="h3" size="lg">
        Masai Products
      </Heading>
      <Spacer />
      <HStack spacing="24px">
        <ChakraLink as={ReactRouterLink} to='/' color='white' textDecoration='none'>HOME</ChakraLink>
        {providerState.authDetails.isAuth ? 
          <Button colorScheme='blue' onClick={handleLogout}>LOGOUT</Button> : 
          <ChakraLink as={ReactRouterLink} to='/login' color='white' textDecoration='none'>LOGIN</ChakraLink>}
        </HStack>
    </Flex>
  );
}

export default Navbar;
