'use client';

import {
  Box,
  Flex,
  Text,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// const history = [
//   {
//     title: 'Automated Security Scanning',
//     desc: 'Vulture ZAP automates security scanning processes using OWASP ZAP, swiftly identifying potential vulnerabilities in web applications.',
//     color: '#f3d340',
//   },
//   {
//     title: 'Comprehensive Scans',
//     desc: 'Conduct thorough spider scans, passive scans, and active scans to comprehensively map and analyze web applications for vulnerabilities.',
//     color: '',
//   },
//   {
//     title: ' Customizable Scans',
//     desc: 'Customize scanning parameters to focus on specific vulnerabilities, enabling or disabling scanners based on tailored requirements.',
//     color: '',
//   },
//   {
//     title: 'Detailed Reporting',
//     desc: 'Receive detailed reports on detected security alerts, including vulnerability type, risk level, and confidence level, facilitating effective vulnerability management.',
//     color: '',
//   },
// ];

const HistoryCard = () => {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await axios.get('http://localhost:4444/api/history');
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
      <Table variant={''} colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Scans</Th>
            <Th>TimeStamp</Th>
            <Th>Options</Th>
          </Tr>
        </Thead>
        <Tbody>
          {history.map((scan) => (
            <Tr key={scan.id}>
              <Td>{scan.title}</Td>
              <Td>{scan.timestamp}</Td>
              <Td>{scan.options}</Td>
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
      bg={'#f0eff5'}
      display={'flex'}
      py={'60px'}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Flex
        w={{ base: '90%', md: '80%' }}
        mx={'auto'}
        gap={'20px'}
        align={'center'}
        bg={'#f3d340'}
        border={'2px solid #000'}
        borderRadius={'0px'}
        boxShadow={'7px 7px 0px 0px #0B2447'}
        mb={'36px'}
        p={'10px'}
        _hover={{ boxShadow: '-7px -7px 0px 0px #0B2447' }}
      >
        <Text
          lineHeight={1.1}
          fontSize={{ base: '5vw', md: '28px', lg: '32px' }}
          px={'4px'}
          borderRadius={'5px'}
          fontWeight={650}
          color={'black'}
        >
          History
        </Text>
        <Text fontSize={{ base: '1.7vw', md: '1.2vw' }}>
          View the history of your scans
        </Text>
      </Flex>
      {history.map((index) => (
        <HistoryCard key={index} />
      ))}
    </Box>
  );
}
