'use client';

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import { useEffect } from 'react';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const signup = () => {
    navigate('/signup');
  };

  const {
    isAuth,
    userName,
    userEmail,
    setUserEmail,
    setUserName,
    addAuth,
    removeAuth,
  } = useAuthStore((state) => ({
    isAuth: state.isAuth,
    userName: state.userName,
    userEmail: state.userEmail,
    setUserName: state.setUserName,
    setUserEmail: state.setUserEmail,
    addAuth: state.addAuth,
    removeAuth: state.removeAuth,
  }));

  useEffect(() => {
    setUserEmail(localStorage.getItem('email'));
    setUserName(localStorage.getItem('name'));

    return () => {
      if (userName != null && userEmail != null) {
        addAuth();
      } else {
        removeAuth();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = () => {
    removeAuth();
    localStorage.clear();
    setUserEmail('');
    setUserName('');
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        w={'90%'}
        mx={'auto'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          align={'center'}
          justify={{ base: 'start' }}
          gap={{ base: '25%', lg: '35%' }}
          pr={{ base: '15%', md: '40px' }}
        >
          <Image
            src="../../src/assets/logo.png"
            cursor={'pointer'}
            onClick={() => {
              navigate('/');
            }}
            w={{ base: 150, md: 150 }}
            aspectRatio={'10/3'}
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {!isAuth ? (
          <Flex
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}
            gap={'20px'}
          >
            <Button
              as={'a'}
              display={{ base: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#356bd6'}
              onClick={signup}
              cursor={'pointer'}
              _hover={{
                bg: '#356bd6',
              }}
              border={'2px solid #000'}
            >
              Sign Up
            </Button>
            <Button
              as={'a'}
              display={{ base: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#356bd6'}
              onClick={login}
              cursor={'pointer'}
              _hover={{
                bg: '#356bd6',
              }}
              border={'2px solid #000'}
            >
              Sign In
            </Button>
          </Flex>
        ) : (
          <Button
            as={'a'}
            display={{ base: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#356bd6'}
            onClick={logout}
            cursor={'pointer'}
            _hover={{
              bg: '#356bd6',
            }}
            border={'2px solid #000'}
          >
            Logout
          </Button>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'md'}
            fontWeight={600}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Github',
    href: 'https://github.com/VulTURE-HackByte',
  },
  // {
  //   label: 'Features',
  //   href: '/features',
  // },
  // {
  //   label: 'Download',
  //   href: '/download',
  // },
];

MobileNavItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  href: PropTypes.string.isRequired,
};
