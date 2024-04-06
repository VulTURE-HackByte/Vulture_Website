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
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function InputScan() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [targetUri, setTargetUri] = useState('');

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
    // Prevent default form submission behavior
    console.log('Selected Options:', selectedOptions); // Example: Log selected options
    // Handle form submission logic here (e.g., send data to server)
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
          //   bg={'#b9ff66'}
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
        >
          Use custom scans leveraging best cybersecurity tools to get the most
          easy-to-comprehend analysis of your sites and make your pen-testing
          journey simplified.
        </Text>
      </Flex>
      <FormControl
        mx={'auto'}
        onSubmit={handleSubmit}
        w={{ base: '90%', md: '80%' }}
        bg={'#b9ff66'}
        borderRadius={'10px'}
        py={'15px'}
        px={'30px'}
        gap={'20px'}
        borderBottom={'4px solid #000'}
      >
        <Box>
          <Text>Select options:</Text>
          <FormLabel>
            <Text fontSize={{ base: '0.8rem', md: '1rem', lg: '1.6vw' }}>
              Enter target URL
            </Text>
            <Input
              type="text"
              value={targetUri}
              checked={selectedOptions.includes(targetUri)}
              bg={'#fff'}
              onChange={handleInputChange}
              w={'40%'}
              mr={'20px'}
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
          onClick={handleSubmit}
          color={'white'}
          bg={'black'}
          cursor={'pointer'}
          _hover={{
            bg: '#333333',
          }}
          h={'40px'}
          w={'25%'}
          isDisabled={targetUri && selectedOptions ? false : true}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
