import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Box bg="gray.900" color="white" py="4" mt={'20px'}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="4"
        maxW="6xl"
        mx="auto"
      >
        <Box>
          <Text fontSize="sm" fontWeight="bold">
            © {new Date().getFullYear()} VulTURE
          </Text>
          <Text fontSize="sm">
            <span style={{ color: 'red' }}>Vulnerability</span> Testing
            Understanding Response Extension
          </Text>
        </Box>
        <Box>
          <Link href="https://www.github.com/" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
