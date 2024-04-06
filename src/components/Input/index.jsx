'use client';

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Text,
  Checkbox,
  Input,
  Button,
  Image,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function InputScan() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [targetUri, setTargetUri] = useState('');
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleChange = (event) => {
    const { value, checked } = event.target;

    // Update selected options based on checkbox state
    const newSelectedOptions = checked
      ? [...selectedOptions, value] // Add value if checked
      : selectedOptions.filter((option) => option !== value); // Remove if unchecked

    setSelectedOptions(newSelectedOptions);
  };

  const handleInputChange = (e) => {
    setTargetUri(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Options:', selectedOptions);
    setData({ targetUri, selectedOptions });
  };

  return (
    <Box>
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        pb={'24px'}
        pt={'40px'}
        gap={'20px'}
        align={'center'}
      >
        <Text
          lineHeight={1.1}
          fontSize={{ base: '5vw', md: '28px', lg: '32px' }}
          px={'4px'}
          borderRadius={'5px'}
          fontWeight={650}
          color={'black'}
        >
          Scans
        </Text>
        <Text
          fontSize={{ base: '1.7vw', md: '1.2vw' }}
          w={{ base: '90%', md: '65%' }}
          lineHeight={1.1}
        >
          Use custom scans leveraging best cybersecurity tools to get the most
          easy-to-comprehend analysis of your sites and make your pen-testing
          journey simplified.
        </Text>
      </Flex>
      <FormControl
        pos={'relative'}
        mx={'auto'}
        onSubmit={handleSubmit}
        w={{ base: '90%', md: '80%' }}
        bg={'#f3d340'}
        borderRadius={'10px'}
        py={'15px'}
        px={'30px'}
        gap={'20px'}
        border={'2px solid #000'}
        borderBottom={'7px solid #000'}
        mb={'32px'}
      >
        <Image
          src={'../../src/assets/star.png'}
          w={{ base: '32px' }}
          pos={'absolute'}
          top={'-5%'}
          left={'-1.5%'}
        />
        <Box>
          <Text fontSize={{ base: '1.7vw', md: '2vw' }} fontWeight={600}>
            Select options:
          </Text>
          <FormLabel>
            <Text
              fontSize={{ base: '0.8rem', md: '1rem', lg: '1.4vw' }}
              fontWeight={600}
            >
              Enter target URL here :-
            </Text>
            <Input
              type="text"
              value={targetUri}
              checked={selectedOptions.includes(targetUri)}
              _hover={{ border: '2px solid #000' }}
              _active={{ border: '2px solid #000' }}
              bg={'#fff'}
              onChange={handleInputChange}
              border={'2px solid #000'}
              borderRadius={'0px'}
              boxShadow={'7px 7px 0px 0px #0B2447'}
              w={'40%'}
              mr={'20px'}
              mb={'12px'}
            />
          </FormLabel>
          <FormLabel>
            <Checkbox
              borderColor="rgb(26, 32, 44)"
              value="spider"
              checked={selectedOptions.includes('spider')}
              onChange={handleChange}
              fontWeight={350}
              fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
            >
              Spider
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              borderColor="rgb(26, 32, 44)"
              value="passive"
              checked={selectedOptions.includes('passive')}
              onChange={handleChange}
              fontWeight={350}
              fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
            >
              Passive
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              borderColor="rgb(26, 32, 44)"
              value="active"
              checked={selectedOptions.includes('active')}
              onChange={handleChange}
              fontWeight={350}
              fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
            >
              Active
            </Checkbox>
          </FormLabel>
        </Box>
        <Button
          type="submit"
          as={'a'}
          mt={'10px'}
          display={{ base: 'inline-flex' }}
          fontSize={'md'}
          fontWeight={600}
          color={'white'}
          bg={'black'}
          _hover={{
            bg: '#333333',
          }}
          h={'40px'}
          w={'25%'}
          onSubmit={handleSubmit}
          isDisabled={targetUri && selectedOptions.length > 0 ? false : true}
        >
          Submit
        </Button>
      </FormControl>
      <Flex
        mx={'auto'}
        w={{ base: '90%', md: '80%' }}
        bg={'#f3d340'}
        borderRadius={'10px'}
        py={'15px'}
        px={'30px'}
        display={selectedOptions.length > 0 && data ? 'flex' : 'none'}
        gap={'20px'}
        border={'2px solid #000'}
        borderBottom={'7px solid #000'}
      >
        {selectedOptions.length > 0 && data ? (
          <Text fontSize={{ base: '1.7vw', md: '2vw' }} fontWeight={600}>
            Report:
            {selectedOptions.map((option) => (
              <Text key={option} fontWeight={400}>
                {option}
              </Text>
            ))}
          </Text>
        ) : (
          <></>
        )}
      </Flex>
    </Box>
  );
}
