'use client';

import { Box, Flex, Stack, Text, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const features = [
  {
    title: 'Automated Scanning',
    desc: 'Vulture ZAP automates security scanning processes using OWASP ZAP, swiftly identifying potential vulnerabilities in web applications.',
    src: '../../src/assets/icon4.png',
  },
  {
    title: 'Detailed Reporting',
    desc: 'Receive detailed reports on detected security alerts, including vulnerability type, risk level, and confidence level, facilitating effective vulnerability management.',
    src: '../../src/assets/icon1.png',
  },
  {
    title: 'Comprehensive Scans',
    desc: 'Conduct thorough spider scans, passive scans, and active scans to comprehensively map and analyze web applications for vulnerabilities.',
    src: '../../src/assets/icon2.png',
  },
];

const FeatureCard = (props) => {
  return (
    <Flex
      w={{ base: '90%', md: '30%' }}
      bg={'#fff'}
      borderRadius={'10px'}
      p={'30px 15px'}
      gap={'20px'}
      boxShadow={'0px 0px 28px 12px rgba(232,232,232,1)'}
      justify={'center'}
      textAlign={'center'}
    >
      <Stack justify={'start'} align={'center'} gap={'28px'}>
        <Image src={props.src} w={'100px'} h={'100px'} />
        <Text
          fontWeight={620}
          fontSize={{ base: '5vw', md: '24px' }}
          w={{ base: '100%', md: '90%' }}
          lineHeight={1.1}
        >
          {props.title}
        </Text>
        <Text
          fontWeight={350}
          fontSize={{ base: '3vw', md: '2vw', lg: '16px' }}
          w={'75%'}
        >
          {props.desc}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Features() {
  return (
    <Box bg={'#fff'}>
      <Stack py={'60px'} w={'100%'}>
        <Flex
          w={{ base: '90%', md: '80%' }}
          mx={'auto'}
          gap={'20px'}
          align={'center'}
          bg={'#356bd6'}
          borderRadius={'5px'}
          mb={'42px'}
          p={'10px'}
        >
          <Text
            lineHeight={1.1}
            fontSize={{ base: '5vw', md: '28px', lg: '32px' }}
            px={'4px'}
            borderRadius={'5px'}
            fontWeight={650}
            color={'aliceblue'}
          >
            Features
          </Text>
        </Flex>
        <Flex
          mx={'auto'}
          w={{ base: '90%', md: '80%' }}
          justify={'space-between'}
          gap={'20px'}
          flexWrap={'wrap'}
        >
          {features.map((feature, index) => {
            return (
              <FeatureCard
                key={index}
                title={feature.title}
                desc={feature.desc}
                src={feature.src}
              />
            );
          })}
        </Flex>
      </Stack>
    </Box>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
