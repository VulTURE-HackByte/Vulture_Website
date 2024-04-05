import { Box, Button, Text } from '@chakra-ui/react';
import { doSignInWithGoogle } from '../../firebase/auth';
import { useEffect, useState } from 'react';
import useAuthStore from '../../store/authStore';

const Login = () => {
  const { userLoggedIn, initializeUser } = useAuthStore();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    if (userLoggedIn === true) {
      setLoginStatus('Logged in successfully!');
    } else if (userLoggedIn === false) {
      setLoginStatus('Failed to log in.');
    } else {
      setLoginStatus('');
    }
  }, [userLoggedIn]);

  const doSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        doSignInWithGoogle();
        setIsSigningIn(false);
        initializeUser(); // Update userLoggedIn state after successful sign-in
      } catch (error) {
        setIsSigningIn(false);
        console.error('Sign-in error:', error);
      }
    }
  };

  return (
    <Box>
      {loginStatus && <Text>{loginStatus}</Text>}
      <Button colorScheme={'blue'} variant={'solid'} onClick={doSubmit}>
        Sign In With Google
      </Button>
    </Box>
  );
};

export default Login;
