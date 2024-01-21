import { Stack, Box } from '@chakra-ui/react'

function LoadingSkeleton() {

  return (
      <Stack data-cy="loading-indicator">
        {
          [1,2,3,4,5,6].map( i => <Box w='100%' h='40px' bg='#A9C6E2' mt={4}></Box>)
        }
  
      </Stack>
  )
}

export default LoadingSkeleton
