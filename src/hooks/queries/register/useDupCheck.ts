import { IsDuplicatedResponse } from '@/types/response/register';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const nicknameDupCheck = async (nickname: string) => {
  if (nickname === '') return false;
  try {
    const { data } = await axios.get<IsDuplicatedResponse>(
      `/auth/nickname/${nickname}/is-duplicated`
    );
    return data.is_duplicated;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const useDupCheck = (nickname: string) => {
  return useQuery(queryKeys.REGISTER.dupCheck(nickname), () =>
    nicknameDupCheck(nickname)
  );
};
