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
  const [viewCountWithoutPayment, setViewCountWithoutPayment] = useLocalStorage('viewCountWithoutPayment', 0);

  React.useEffect(() => {
    setViewCountWithoutPayment(viewCountWithoutPayment + 1);
  }, []);
  console.log(viewCountWithoutPayment);

  return (
    <>
      <PaymentModal isOpen={viewCountWithoutPayment > 2} />
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
