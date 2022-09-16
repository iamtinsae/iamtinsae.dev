import '../styles/global.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { ScrollObserver } from '@/components/ScrollObserver';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  </ThemeProvider>
);

export default MyApp;
