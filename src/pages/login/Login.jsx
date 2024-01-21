import { Container, Input, Button, Box, Center } from '@chakra-ui/react'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../products/api';

function Login() {
  const navigate = useNavigate();
  const [error, setError] =  useState(false)
  const {providerState} = useContext(AuthContext);
  const [formData, setFormData] = useState({'email': '', 'password': ''})
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("I'm Clicked")
    
    loginUser(formData).then((data) => {
      providerState.login(data.data.token)
      navigate('/')
    })
    .catch((err) => {
      setError(true)
      console.log("ERROR=",err)
    })
  }

  return (
    <Container data-cy="login" maxW='2xl' mt={100} centerContent>
      {error && <Box bg={'red'} color={'white'} mb={8} p={8} border='1px solid white' borderRadius={4}>Invalid email or password</Box>}
      <form onSubmit={(e) => handleLogin(e)}>
        <Box w='100%' mb={10}>
          <Input type='email' placeholder='Enter Email' name='email' value={formData.email} onChange={(e) => handleChange(e)} w='300px' h='30px' pl={4}/>
        </Box>

        <Box mb={10}>
          <Input type='password' placeholder='Enter Password' name='password' value={formData.password} onChange={(e) => handleChange(e)} w='300px' h='30px' pl={4}/>
        </Box>
        
        <Center>
          <Button type='submit' textAlign='center' w='100px' h='30px' bg='purple' color='white' border="none" borderRadius={5} cursor='pointer'>LOGIN </Button>
        </Center>
      </form>
    </Container>
  );
}

export default Login;
