import { Container, Heading, Spacer, Button, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

function Home() {
  const {providerState} = useContext(AuthContext)
  console.log("+++", providerState.authDetails.token)

  return (
    <Container data-cy="home" maxW="container.xl" centerContent>
      {providerState.authDetails.isAuth ? 
      <Heading as="h3">Token: {providerState.authDetails.token}</Heading> :
      <Heading as="h3">Welcome Guest</Heading>
      }
      <ChakraLink as={ReactRouterLink} to="/products" color="green" textDecoration={'none'} >Go to Products Page</ChakraLink>
      
    </Container>
  );
}

export default Home;
