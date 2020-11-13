import React from 'react';
import { AspectRatioBox, Box } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

type OnePagerMapProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

export const OnePagerMap = ({
  onePagerData,
  isLoading,
}: OnePagerMapProps) => {
  return (
    <ContentCard title='Map' isLoading={isLoading}>
      <Box>
        <iframe
          src={onePagerData.mapUrl}
          width="600"
          height="450"
          >
        </iframe>
      </Box>
    </ContentCard>

  );
};
