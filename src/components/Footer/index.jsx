import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Flex, Text, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p="4"
      bg="gray.200"
      mt={'20px'}
    >
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} VulTURE
      </Text>
      <Text fontSize="sm" color="gray.600" display={'flex'} gap={'2px'}>
        <Text color="red">Vulnerability</Text> Testing Understanding Response
        Extension
      </Text>
      <Link href="https://www.github.com/" className="social-link">
        <FontAwesomeIcon icon={faGithub} />
      </Link>
    </Flex>
  );
}

export default Footer;
