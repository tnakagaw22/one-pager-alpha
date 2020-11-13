import React from 'react';
import { Heading, Progress, Text } from '@chakra-ui/core';

import { OnePagerData } from '../model/model';
import { ContentCard } from './ContentCard';

import NumberFormat from 'react-number-format';

type OnePagerFinancesProps = {
  onePagerData: OnePagerData;
  isLoading: boolean;
};

/** Renders the Finances card. */
export const OnePagerFinances = ({
  onePagerData,
  isLoading,
}: OnePagerFinancesProps) => {

  const formatFinanceNumber = (financeNumber: number) => {
    return <NumberFormat value={financeNumber} displayType={'text'} thousandSeparator={true} prefix={'$'} />;
  };

  return (
    <ContentCard title='Finances' isLoading={isLoading}>
      <Heading as='h1' size='lg' marginRight='10px'>
        Funding Stage: {onePagerData.fundraisingStage}
      </Heading>
      <SubHeading>
        Funds Raised: {formatFinanceNumber(onePagerData.fundsRaisedInStage)}
      </SubHeading>
      <SubHeading>
        Funding Goal: {formatFinanceNumber(onePagerData.fundraisingStageGoal)}
      </SubHeading>

      <Progress value={onePagerData.fundsRaisedInStage / onePagerData.fundraisingStageGoal * 100} />

      <Text fontSize='sm' marginTop='10px'>
        {onePagerData.fundraisingDetails}
      </Text>

    </ContentCard>
  );
};

/** Renders smaller heading. */
const SubHeading = ({ children }) => (
  <Heading as='h2' size='md' marginRight='10px'>
    {children}
  </Heading>
);
