'use client';

import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
const features = [
  {
    title: 'Automated Security Scanning',
    desc: 'Vulture ZAP automates security scanning processes using OWASP ZAP, swiftly identifying potential vulnerabilities in web applications.',
    color: '#B9FF66',
  },
  {
    title: 'Comprehensive Scans',
    desc: 'Conduct thorough spider scans, passive scans, and active scans to comprehensively map and analyze web applications for vulnerabilities.',
    color: '',
  },
  {
    title: ' Customizable Scans',
    desc: 'Customize scanning parameters to focus on specific vulnerabilities, enabling or disabling scanners based on tailored requirements.',
    color: '',
  },
  {
    title: 'Detailed Reporting',
    desc: 'Receive detailed reports on detected security alerts, including vulnerability type, risk level, and confidence level, facilitating effective vulnerability management.',
    color: '',
  },
];

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const FeatureCard = (props) => {
  return (
    <Flex
      w={{ base: '90%', md: '48%' }}
      bg={'#B9FF66'}
      borderRadius={'10px'}
      p={'15px'}
      gap={'20px'}
      borderBottom={'4px solid #000'}
    >
      <Stack justify={'start'}>
        <Text
          fontWeight={620}
          fontSize={{ base: '5vw', md: '28px' }}
          w={{ base: '100%', md: '90%' }}
          lineHeight={1.1}
        >
          {props.title}
        </Text>
        <Text
          fontWeight={350}
          fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
        >
          {props.desc}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Features() {
  return (
    <Box>
      <Stack pt={'40px'} w={'100%'}>
        <Flex
          w={{ base: '90%', md: '80%' }}
          mx={'auto'}
          pb={'24px'}
          gap={'20px'}
          align={'center'}
        >
          <Text
            lineHeight={1.1}
            fontSize={{ base: '5vw', md: '28px', lg: '32px' }}
            bg={'#B9FF66'}
            px={'4px'}
            borderRadius={'5px'}
            fontWeight={650}
            color={'black'}
          >
            Features
          </Text>
          <Text
            fontSize={{ base: '1.7vw', md: '1.2vw' }}
            w={{ base: '90%', md: '65%' }}
          >
            With VulTURE, leverage best cybersecurity and AI tools to get the
            most easy-to-comprehend analysis of your sites and make your
            pen-testing journey simplified.
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

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ),
};
