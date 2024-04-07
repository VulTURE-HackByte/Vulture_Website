'use client';

import {
  Box,
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import DownloadButton from '../DownloadButton';

const HistoryCard = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    async function fetchHistory() {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      };
      try {
        const response = await axios.get(
          'http://localhost:4444/api/history',
          config
        );
        console.log(response.data);
        setHistory(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchHistory();
  }, []);

  return (
    <TableContainer w={'80%'} mx={'auto'}>
      <Table>
        <Thead>
          <Tr borderBottom={'2px solid #000'}>
            <Th color={'#000'} fontWeight={650}>
              TimeStamp
            </Th>
            <Th color={'#000'} fontWeight={650}>
              Options
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.map((scan) => (
            <Tr key={scan._id}>
              <Td color={'#000'} fontWeight={600}>
                {scan.createdAt}
              </Td>
              <Td>
                <DownloadButton
                  data={scan.spyderRes}
                  fileName={`File_${scan._id}`}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default function History() {
  return (
    <Box

      minH="100vh"
      bg={'#f0eff5'}
      display={'flex'}
      py={'60px'}
      flexDirection={'column'}
      justifyContent={'start'}
    >
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        gap={'20px'}
        align={'center'}
        bg={'#356bd6'}
        border={'2px solid #000'}
        borderRadius={'0px'}
        boxShadow={'7px 7px 0px 0px #0B2447'}
        mb={'36px'}
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
          History
        </Text>
      </Flex>
      <HistoryCard />
    </Box>
  );
}
