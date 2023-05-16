import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { postSignIn } from './queries';

// 로그인 커스텀 훅
export const useOAuthSignIn = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const {
    mutate: signInClaon,
    data: userData,
    isLoading: signInClaonLoading,
  } = useMutation(postSignIn, {
    onSuccess: (res) => {
      // 성공 시  토큰 axios에 디폴트 설정
      const { access_token: accessToken, refresh_token: refreshToken } = res;
      axios.defaults.headers.common['access-token'] = accessToken;
      axios.defaults.headers.common['refresh-token'] = refreshToken;

      // 성공 시 가입 유무 판단 후 라우팅
      // 회원가입 => 이메일 파라미터 전달
      const registerPath = `/register?email=${res.profile?.email}`;
      const homePath = '/home';
      const nextPath = res.is_signed_up ? homePath : registerPath;
      router.push(nextPath);
      signOut({ redirect: false });
    },
    onError: (error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      signOut({ redirect: false });
    },
  });

  return {
    signInClaon,
    session,
    userData,
    signInClaonLoading,
  };
};
