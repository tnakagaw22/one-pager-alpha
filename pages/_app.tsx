import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';

import { GlobalProvider } from "../context/GlobalContext";

import '../styles/global.scss';
import '../styles/payment.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}
