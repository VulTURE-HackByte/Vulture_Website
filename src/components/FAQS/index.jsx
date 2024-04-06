'use client';

import {
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

const faqs = [
  {
    q: 'What is VulTURE and how does it work?',
    a: 'VulTURE is a website security assessment platform. It assesses website safety by identifying vulnerabilities through VulTURE_ZAP and storing data in VulTURE_DB.',
  },
  {
    q: 'What are the key features of VulTURE?',
    a: 'VulTURE offers website security assessment, vulnerability analysis, and seamless integration across its repositories.',
  },
  {
    q: 'How do I get started with VulTURE?',
    a: 'Clone and set up dependencies for VulTURE_Website, VulTURE_DB, and VulTURE_ZAP. Follow README instructions for configuration.',
  },
  {
    q: 'What technologies are used in VulTURE?',
    a: 'VulTURE utilizes React, Zustand, JWT for frontend, and Flask for backend, ensuring robust security assessment.',
  },
  {
    q: 'Is this tool free to use?',
    a: 'Yes, this tool is free to use.',
  },
];

export const Faq = ({ children }) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {children.q}
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize="12px" />
              ) : (
                <AddIcon fontSize="12px" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{children.a}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default function FAQS() {
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
        pb={'24px'}
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
          FAQS
        </Text>
        <Text
          fontSize={{ base: '1.7vw', md: '1.2vw' }}
          w={{ base: '90%', md: '65%' }}
        >
          When VUlTURE offers so much to its users, it is natural to have
          questions. Here are some of the most frequently asked questions.
        </Text>
      </Flex>
      <Accordion allowMultiple w={{ base: '90%', md: '80%' }} mx={'auto'}>
        {faqs.map((faq, index) => (
          <Faq key={index}>{faq}</Faq>
        ))}
      </Accordion>
    </Box>
  );
}

Faq.propTypes = {
  children: PropTypes.object,
};
