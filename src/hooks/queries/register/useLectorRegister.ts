import { LectorRegisterRequest } from '@/types/request/register';
import { LectorRegisterResponse } from '@/types/response/register';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const lectorRegister = async (
  lectorRegisterRequest: LectorRegisterRequest
) => {
  try {
    const { data } = await axios.post<LectorRegisterResponse>(
      '/auth/lector/sign-up',
      lectorRegisterRequest
    );
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const useLectorRegister = (
  options?: Omit<
    UseMutationOptions<
      LectorRegisterResponse,
      unknown,
      LectorRegisterRequest,
      unknown
    >,
    'mutationFn'
  >
) => {
  return useMutation(
    (lectorInfo: LectorRegisterRequest) => lectorRegister(lectorInfo),
    {
      ...options,
    }
  );
};
