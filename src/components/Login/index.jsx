import { Button, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, getAccessTokenSilently, isAuthenticated } =
    useAuth0();

  useEffect(() => {
    const getToken = async () => {
      try {
        await getAccessTokenSilently();
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <Container>
      <Button
        as={'a'}
        display={{ base: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        color={'black'}
        bg={'#B9FF66'}
        href={'#'}
        _hover={{
          bg: '#B9FF66',
        }}
        onClick={() => loginWithRedirect()}
      >
        Sign In
      </Button>
    </Container>
  );
};

export default Login;
