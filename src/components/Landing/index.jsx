'use client';

import { Box, Flex, Stack, Image, Text, Button } from '@chakra-ui/react';
import Features from '../Features';
import Footer from '../Footer';
import useAuthStore from '../../store/authStore';

export default function Landing() {
  const { user } = useAuthStore();

  return (
    <Box>
      <Flex
        w={'100%'}
        justify={'space-evenly'}
        flexDirection={{ base: 'column', md: 'row' }}
        align={'center'}
        pt={{ base: '50px', md: '20px' }}
      >
        <Stack w={{ base: '90%', md: '40%' }} gap={'20px'}>
          <Text
            lineHeight={1.1}
            fontSize={{ base: '8vw', md: '36px', lg: '48px' }}
            fontWeight={650}
          >
            Navigating the digital landscape safely
          </Text>
          <Text fontSize={{ base: '3.2vw', md: '24px' }}>
            VulTURE is a tool, designed especially for pen testers, to test for
            vulnerabilities in sites, understand them on your behalf and help
            you understand it.
          </Text>
          <Button
            as={'a'}
            mt={'10px'}
            display={{ base: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={600}
            color={'black'}
            bg={'#b9ff66'}
            href={'/input'}
            _hover={{
              bg: '#b9ff66',
            }}
            h={'40px'}
            w={'50%'}
            isDisabled={user ? false : true}
          >
            Perform Scans
          </Button>
        </Stack>
        <Image
          src="../../src/assets/landing.png"
          w={{ base: '60vw', md: '30%' }}
          aspectRatio={'1/1'}
          pt={{ base: '50px', md: '0px' }}
        />
      </Flex>
      <Features />
      <Footer />
    </Box>
  );
}
