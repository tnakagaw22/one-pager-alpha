import React from 'react';
import { Box, Flex, Heading, Text, Avatar } from '@chakra-ui/core';

import { OnePagerData, OnePagerFaq } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerFaqsProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Founders card. */
export const OnePagerFaqs = ({
  onePagerData,
  isLoading,
}: OnePagerFaqsProps) => {
  return (
    <ContentCard title='FAQ' isLoading={isLoading}>
      {onePagerData.faqs.map((faq: OnePagerFaq) => (
        <Faq key={faq.question} faq={faq}></Faq>
      ))}
    </ContentCard>
  );
};

/** Renders a Founder component. */
const Faq = ({ faq }: { faq: OnePagerFaq }) => {
  return (
    <Flex align='center'>
      <Box>
        <Box key={faq.question} d='inline-flex' alignItems='baseline'>
          <Heading as='h2' size='md' marginRight='10px' marginBottom='0'>
            {faq.question}
          </Heading>
        </Box>
        <Text fontSize='sm' marginTop='5px'>
          {faq.answer}
        </Text>
      </Box>
    </Flex>
  );
};
