import { Box, Button, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState('');
  const [token, setToken] = useState(null);
  const { loginWithRedirect, user, getAccessTokenSilently, isAuthenticated } =
    useAuth0();

  useEffect(() => {
    if (user) {
      setLoginStatus('Logged in successfully!');
    } else {
      setLoginStatus('');
    }
  }, [user, token]);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setToken(token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <Box>
      {loginStatus && <Text>{loginStatus}</Text>}
      {user && <Text>{user.name}</Text>}
      <Button
        colorScheme={'blue'}
        variant={'solid'}
        onClick={() => loginWithRedirect()}
      >
        Sign In With Google
      </Button>
    </Box>
  );
};

export default Login;
