/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
