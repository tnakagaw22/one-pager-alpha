import React from 'react';

import { ONE_PAGERS_PUBLIC_DATA_ARRAY } from '../data/onepagers';
import { OnePager } from '../components/OnePager';
import { OnePagerPublicData } from '../model/model';
import PaymentModal from '../components/PaymentModal';
import useLocalStorage from "../hooks/useLocalStorage"

type OnePagerPageData = {
  onePagerUrl: string;
};


/** Render a One Pager Page. */
export default function OnePagerPage({ onePagerUrl }: OnePagerPageData) {
  const [visitedOnePagerWithoutPayment, setVisitedOnePagerWithoutPayment] = useLocalStorage('visitedOnePagerWithoutPayment', []);
  const [isPaid, setIsPaid] = useLocalStorage('isPaid', false);

  React.useEffect(() => {
    // setVisitedOnePagerWithoutPayment([]);
    // setIsPaid(false);

    if (isPaid === false) {

      if (visitedOnePagerWithoutPayment.indexOf(onePagerUrl) < 0 && visitedOnePagerWithoutPayment.length < 2) {
        setVisitedOnePagerWithoutPayment((storedValue) => {
          storedValue.push(onePagerUrl);

          return storedValue;
        });
      }
    }

  }, []);

  // console.log(visitedOnePagerWithoutPayment);

  const showPaymentModal =
    visitedOnePagerWithoutPayment.indexOf(onePagerUrl) < 0
    && visitedOnePagerWithoutPayment.length >= 2
    && isPaid === false;

  return (
    <>
      <PaymentModal isOpen={showPaymentModal} />
      <OnePager onePagerUrl={onePagerUrl}></OnePager>
    </>
  );
}

export async function getStaticPaths() {
  const paths = ONE_PAGERS_PUBLIC_DATA_ARRAY.map(
    (onePager: OnePagerPublicData) => {
      return {
        params: {
          onePagerUrl: onePager.url,
        },
      };
    }
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      onePagerUrl: params.onePagerUrl,
    },
  };
}
