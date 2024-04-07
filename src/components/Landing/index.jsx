'use client';

import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  Button,
  useToast,
} from '@chakra-ui/react';
import useAuthStore from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const { isAuth } = useAuthStore((state) => ({
    isAuth: state.isAuth,
  }));
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <Box>
      <Flex
        w={'100%'}
        justify={'center'}
        flexDirection={{ base: 'column', md: 'row' }}
        align={'center'}
        py={'40px'}
        bg={'#fff'}
      >
        <Stack w={{ base: '90%', md: '40%' }} gap={'20px'}>
          <Text
            lineHeight={1.1}
            fontSize={{ base: '8vw', md: '36px', lg: '48px' }}
            fontWeight={650}
          >
            Navigating the digital landscape safely
          </Text>
          <Text fontSize={{ base: '3.2vw', md: '20px' }}>
            VulTURE is a tool, designed especially for pen testers, to test for
            vulnerabilities in sites, understand them on your behalf and help
            you understand it.
          </Text>
          <Button
            as={'a'}
            mt={'10px'}
            display={{ base: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={620}
            color={'white'}
            bg={'#356bd6'}
            cursor={'pointer'}
            cli
            onClick={() => {
              isAuth
                ? navigate('/scans')
                : toast({
                    title: 'Error',
                    description: 'Please login to perform scans',
                    status: 'error',
                    duration: 2000,
                    variant: 'subtle',
                    isClosable: true,
                    position: 'top',
                  });
            }}
            _hover={{
              bg: '#356bd6',
            }}
            h={'52px'}
            w={'60%'}
            border={'2px solid #000'}
          >
            Perform Scans
          </Button>
        </Stack>
        <Image
          src="../../src/assets/illustr.png"
          w={{ base: '60vw', md: '40%' }}
          aspectRatio={'1/1'}
          pt={{ base: '50px', md: '0px' }}
        />
      </Flex>
    </Box>
  );
}
