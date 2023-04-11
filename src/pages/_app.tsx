/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { axiosConfig } from '@/utils/config';
import { SessionProvider } from 'next-auth/react';

// axios 디폴트 설정 적용
axiosConfig();

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const queryClient = new QueryClient();

  // 레이아웃이 필요한 컴포넌트에서 getLayout을 정의하면 레이아웃을 적용할 수 있는 함수 생성
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <SessionProvider session={session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
