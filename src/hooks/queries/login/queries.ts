import { SignInRequest, SignInResponse } from '@/types/login';
import axios from 'axios';
import { getSession } from 'next-auth/react';

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
