import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiHide, BiShow } from 'react-icons/bi';
import axios from 'axios';
import qs from 'qs';
import useAuthStore from '../../store/authStore';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginData;
  const navigate = useNavigate();
  const toast = useToast();

  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (loading) {
      <Spinner />;
    }
  }, [loading]);

  const { addAuth, setUserEmail, setUserName } = useAuthStore((state) => ({
    addAuth: state.addAuth,
    setUserEmail: state.setUserEmail,
    setUserName: state.setUserName,
  }));

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    if (!(email && password)) {
      toast({
        title: 'Incomplete Entries',
        description: 'Please enter both email and password',
        status: 'error',
        duration: 2000,
        variant: 'subtle',
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
      return;
    }

    let data = qs.stringify({
      email: email,
      password: password,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4444/api/users/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      withCredentials: true,
      data: data,
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data));

        addAuth();
        localStorage.setItem('email', email);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('token', response.data.token);

        navigate('/');
        toast({
          title: 'Logged in successfully!',
          // description: 'Please enter both email and password',
          status: 'success',
          duration: 2000,
          variant: 'subtle',
          isClosable: true,
          position: 'top',
        });

        setUserEmail(email);
        setUserName(response.data.name);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // const parser = new DOMParser();
        // const htmlDoc = parser.parseFromString(
        //   error.response.data,
        //   'text/html'
        // );
        // const errorMessage = htmlDoc.body.textContent.trim();
        // toast({
        //   title: 'Error',
        //   description: errorMessage.slice(7, 27),
        //   status: 'error',
        //   duration: 2000,
        //   variant: 'subtle',
        //   isClosable: true,
        //   position: 'top',
        // });
      }
    }

    makeRequest();
  };

  return (
    <>
      <Center m={0} p={0}>
        <Stack>
          <Text
            textAlign="center"
            color=""
            fontSize={['1.7rem', '2.2rem']}
            fontWeight="600"
            mb="1rem"
          >
            Log In
          </Text>
          <Flex
            direction="column"
            border="2px solid #356bd6"
            w={['20rem', '27rem']}
            px={['1rem', '2rem']}
            py={['1rem', '2rem']}
            borderRadius="0.8rem"
            mb="1rem"
          >
            <form onSubmit={onSubmit}>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Email:{' '}
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <Input
                    type="email"
                    focusBorderColor="#356bd6"
                    bg="#ecedf6"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your email..."
                    onChange={onChange}
                  />
                </Box>
              </Box>
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Password:{' '}
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      focusBorderColor="#356bd6"
                      bg="#ecedf6"
                      id="password"
                      name="password"
                      value={password}
                      placeholder="Enter your password..."
                      onChange={onChange}
                    />
                    <InputRightElement
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <BiHide
                          style={{ width: '20px', height: '20px' }}
                          color="#356bd6"
                        />
                      ) : (
                        <BiShow
                          style={{ width: '20px', height: '20px' }}
                          color="#356bd6"
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                </Box>
              </Box>
              <Center>
                {loading ? (
                  <Button isLoading loadingText="Logging In...">
                    Log In
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    letterSpacing={1}
                    mt={['1rem', '']}
                    px="4rem"
                    fontSize="1rem"
                    bg="#356bd6"
                    color="white"
                    _hover={{
                      bg: '',
                    }}
                    rightIcon={
                      <AiOutlineArrowRight color="#ffffff" size="1.2rem" />
                    }
                  >
                    Log In
                  </Button>
                )}
              </Center>
            </form>
          </Flex>
          <Text textAlign="center" fontSize={['1.1rem', '1.2rem']}>
            {`Don't have an account?`}
          </Text>
          <Text
            textAlign="center"
            fontSize={['1.1rem', '1.2rem']}
            color="#356bd6"
            fontWeight="600"
          >
            <Link to="/signup">Register</Link>
          </Text>
        </Stack>
      </Center>
    </>
  );
}
