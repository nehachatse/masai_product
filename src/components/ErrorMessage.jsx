import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function ErrorMessage() {
  return <>
  <Alert status='error' bg={'#FED7D7'} h={'40px'}>
    <AlertIcon color={'red'} w='20px' h={'30px'} mr={8} pl={4}/>
    <AlertTitle fontWeight={'bold'}>Error: </AlertTitle>
    <AlertDescription ml={8}>Something went wrong, Please refresh.</AlertDescription>
  </Alert>
  </>;
}

export default ErrorMessage;
