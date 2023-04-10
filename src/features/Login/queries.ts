// import { createQueryKeys } from '@lukemorales/query-key-factory';
import axios from 'axios';
import { getSession, signOut, useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { SignInRequest, SignInResponse } from '.';

// 로그인 관련 쿼리키 저장소
// const loginKeys = createQueryKeys('login', {
//   login: () => ({
//     queryKey: ['login'],
//     queryFn: (provider: string) => postSignIn(provider),
//   }),
// });

// 로그인 쿼리
export const postSignIn = async (provider: string) => {
  const session = await getSession();
  let token = null;
  if (session) {
    token = 'idToken' in session ? session.idToken : session.accessToken;
  }
  const request: SignInRequest = {
    id_token: token as string,
  };

  const response: SignInResponse = await axios
    .post(`/auth/${provider}/sign-in`, request)
    .then((res) => res.data);
  return response;
};

// 로그인 커스텀 훅
export const useOAuthSignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    mutate: signInClaon,
    data: userData,
    isLoading: signInClaonLoading,
  } = useMutation(postSignIn, {
    // 성공 시 가입 유무 판단 후 라우팅
    // 회원가입 => 이메일 파라미터 전달
    onSuccess: (res) => {
      // eslint-disable-next-line no-console
      const { access_token: accessToken, refresh_token: refreshToken } = res;
      axios.defaults.headers.common['access-token'] = accessToken;
      axios.defaults.headers.common['refresh-token'] = refreshToken;
      const registerPath = `/register?email=${res.profile?.email}`;
      const homePath = '/home';
      const nextPath = res.is_signed_up ? homePath : registerPath;
      router.push(nextPath);
      signOut();
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  });

  return {
    signInClaon,
    session,
    userData,
    signInClaonLoading,
  };
};
