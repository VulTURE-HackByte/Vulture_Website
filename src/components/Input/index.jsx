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
    event.preventDefault(); // Prevent default form submission behavior
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
          bg={'#B9FF66'}
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
        bg={'#B9FF66'}
        borderRadius={'10px'}
        p={'15px'}
        gap={'20px'}
        borderBottom={'4px solid #000'}
      >
        <Box>
          <Text>Select options:</Text>
          <FormLabel>
            <Input
              type="text"
              value={targetUri}
              checked={selectedOptions.includes(targetUri)}
              bg={'#fff'}
              onChange={handleInputChange}
              w={'40%'}
              mr={'20px'}
            />
            Enter target URL
          </FormLabel>
          <FormLabel>
            <Checkbox
              value="spider"
              checked={selectedOptions.includes('spider')}
              onChange={handleChange}
            >
              Spider
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              value="passive"
              checked={selectedOptions.includes('passive')}
              onChange={handleChange}
            >
              Passive
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              value="active"
              checked={selectedOptions.includes('active')}
              onChange={handleChange}
            >
              Active
            </Checkbox>
          </FormLabel>
        </Box>
        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
  );
}
