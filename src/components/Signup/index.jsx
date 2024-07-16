import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Text,
  Flex,
  Stack,
  Box,
  Center,
  Input,
  InputRightElement,
  InputGroup,
  useToast,
} from '@chakra-ui/react';

import { BiShow, BiHide } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { Spinner } from '@chakra-ui/react';

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = signupData;
  const navigate = useNavigate();
  const toast = useToast();
  const onChange = (e) => {
    setSignupData((prevState) => ({
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
        description: 'Please enter all details',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
    }

    let data = qs.stringify({
      name: name,
      email: email,
      password: password,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4444/api/users/register',
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
        navigate('/');

        localStorage.setItem('email', email);
        localStorage.setItem('name', response.data);
        localStorage.setItem('token', response.data.token);

        setUserEmail(email);
        setUserName(response.data.name);
        setLoading(false);
        toast({
          title: 'Logged in successfully!',
          // description: 'Please enter all details',
          status: 'success',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });
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
            fontSize={['1.7rem', '2.2rem']}
            fontWeight="600"
            mb="1rem"
          >
            Register With Us
          </Text>
          <Flex
            direction="column"
            border="2px solid #000000"
            w={['20rem', '27rem']}
            px={['1rem', '2rem']}
            py={['1rem', '2rem']}
            borderRadius="0.8rem"
            mb="1rem"
          >
            <form onSubmit={onSubmit}>
              <Flex gap="2rem">
                <Box mb={['1rem', '2rem']}>
                  <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                    Name:{' '}
                  </Text>
                  <Box bg="#ffffff" borderRadius="0.4rem">
                    <Input
                      type="text"
                      focusBorderColor="#356bd6"
                      bg="#ecedf6"
                      id="name"
                      name="name"
                      value={name}
                      placeholder="Name..."
                      onChange={onChange}
                    />
                  </Box>
                </Box>
              </Flex>
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
                    placeholder="Email..."
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
                      placeholder="Password..."
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
              <Box mb={['1rem', '2rem']}>
                <Text mb="0.5rem" fontSize={['1.1rem', '1.2rem']}>
                  Confirm Password:{' '}
                </Text>
                <Box bg="#ffffff" borderRadius="0.4rem">
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      focusBorderColor="#356bd6"
                      bg="#ecedf6"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      placeholder="Confirm Password..."
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
                    Create Account
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
                    Create Account
                  </Button>
                )}
              </Center>
            </form>
          </Flex>
          <Text textAlign="center" fontSize={['1.1rem', '1.2rem']}>
            Already have an account?
          </Text>
          <Text
            textAlign="center"
            fontSize={['1.1rem', '1.2rem']}
            color="#356bd6"
            fontWeight="600"
          >
            <Link to="/login">Log In Now</Link>
          </Text>
        </Stack>
      </Center>
    </>
  );
}
