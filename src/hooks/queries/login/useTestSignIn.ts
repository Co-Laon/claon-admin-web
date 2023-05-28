import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { testSignIn } from './queries';

export const useTestSignIn = () => {
  const router = useRouter();
  const { mutate: signIn, data: userData } = useMutation(testSignIn, {
    onSuccess: (res) => {
      const { access_token: accessToken, refresh_token: refreshToken } = res;
      axios.defaults.headers.common['access-token'] = accessToken;
      axios.defaults.headers.common['refresh-token'] = refreshToken;

      router.push('/home');
    },
  });
  return { signIn, userData };
};
