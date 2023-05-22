import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { LectorRegisterRequest } from '@/types/request/register';
import {
  FileResponse,
  LectorRegisterResponse,
} from '@/types/response/register';
import { lectorRegister, profilePost, proofPost } from './queries';

export const registerQuries = createQueryKeys('register', {});

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

export const usePostProfile = (
  options?: Omit<
    UseMutationOptions<FileResponse, unknown, File, unknown>,
    'mutationFn'
  >
) => {
  return useMutation((file: File) => profilePost(file), {
    ...options,
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const usePostProof = (
  options?: Omit<
    UseMutationOptions<FileResponse[], unknown, File[], unknown>,
    'mutationFn'
  >
) => {
  return useMutation((fileList: File[]) => proofPost(fileList), {
    ...options,
  });
};
