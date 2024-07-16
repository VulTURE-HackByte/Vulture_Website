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
  Spinner,
  Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function InputScan() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [targetUri, setTargetUri] = useState('');
  const [loading, isLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, checked } = event.target;

    const newSelectedOptions = checked
      ? [...selectedOptions, value]
      : selectedOptions.filter((option) => option !== value);

    setSelectedOptions(newSelectedOptions);
  };

  const handleInputChange = (e) => {
    setTargetUri(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    isLoading(true);

    async function runScan(option) {
      let data = JSON.stringify({ target: targetUri });

      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      };

      try {
        const response = await axios.post(
          `http://localhost:4444/api/scan/${option}`,
          data,
          config
        );
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    }

    Promise.all(selectedOptions.map((option) => runScan(option)))
      .then(() => {
        navigate('/history'); // Navigate only after all requests have completed
      })
      .catch((error) => {
        console.error('An error occurred during scanning:', error);
        // Handle any errors here, such as showing an error message to the user
      })
      .finally(() => {
        isLoading(false); // Stop loading indicator in any case
      });
  };

  return (
    <Box pt={'30px'}>
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        gap={'20px'}
        align={'center'}
        bg={'#356bd6'}
        border={'2px solid #000'}
        borderRadius={'0px'}
        boxShadow={'7px 7px 0px 0px #0B2447'}
        mb={'42px'}
        p={'20px'}
      >
        <Text
          lineHeight={1.1}
          fontSize={{ base: '5vw', md: '28px', lg: '40px' }}
          px={'4px'}
          borderRadius={'5px'}
          fontWeight={650}
          color={'aliceblue'}
        >
          Scans
        </Text>
      </Flex>
      <FormControl
        pos={'relative'}
        mx={'auto'}
        onSubmit={handleSubmit}
        w={{ base: '90%', md: '80%' }}
        bg={'#356bd6'}
        borderRadius={'10px'}
        py={'20px'}
        px={'30px'}
        gap={'20px'}
        border={'2px solid #000'}
        mb={'32px'}
      >
        <Image
          src={'../../src/assets/star.png'}
          w={{ base: '32px' }}
          pos={'absolute'}
          top={'-5%'}
          left={'-1%'}
        />
        <Box>
          <Text
            fontSize={{ base: '1.7vw', md: '1.8vw' }}
            fontWeight={600}
            color={'white'}
          >
            Select options:
          </Text>
          <FormLabel>
            <Text
              fontSize={{ base: '0.8rem', md: '1rem', lg: '1.3vw' }}
              color={'white'}
              fontWeight={600}
            >
              Enter target URL
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
              fontWeight={700}
              fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
            >
              Spider
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              borderColor="rgb(26, 32, 44)"
              value="passive"
              color={'white'}
              checked={selectedOptions.includes('passive')}
              onChange={handleChange}
              fontWeight={700}
              fontSize={{ base: '3vw', md: '2vw', lg: '20px' }}
            >
              Passive
            </Checkbox>
          </FormLabel>
          <FormLabel>
            <Checkbox
              borderColor="rgb(26, 32, 44)"
              value="active"
              color={'white'}
              checked={selectedOptions.includes('active')}
              onChange={handleChange}
              fontWeight={700}
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
          {loading ? <Spinner /> : 'Submit'}
        </Button>
      </FormControl>
    </Box>
  );
}
