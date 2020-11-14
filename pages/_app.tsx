import { AppProps } from 'next/app';
import { ThemeProvider } from '@chakra-ui/core';

import '../styles/global.scss';
import '../styles/payment.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
