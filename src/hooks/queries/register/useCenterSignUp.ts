import { ValidationError } from '@/types/common';
import { CenterAuthRequest } from '@/types/request/register';
import { CenterAuthResponse } from '@/types/response/register';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const centerSignUp = async (centerAuthRequest: CenterAuthRequest) => {
  try {
    const { data } = await axios.post('/auth/center/sign-up', {
      ...centerAuthRequest,
    });
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const useCenterSignUp = (
  options?: Omit<
    UseMutationOptions<
      CenterAuthResponse,
      ValidationError,
      CenterAuthRequest,
      unknown
    >,
    'mutationFn'
  >
) => {
  return useMutation(
    (centerInfo: CenterAuthRequest) => centerSignUp(centerInfo),
    {
      ...options,
    }
  );
};
