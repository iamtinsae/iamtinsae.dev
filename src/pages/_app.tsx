import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { ScrollObserver } from '@/components/ScrollObserver';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
    <Analytics />
  </ThemeProvider>
);

export default MyApp;
