import { createQueryKeys } from '@lukemorales/query-key-factory';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { LectorRegisterRequest } from '@/types/request/register';
import {
  CenterAuthRequest,
  CenterUploadPurpose,
  LectorRegisterRequest,
} from '../../../../types/request/register';
import {
  CenterAuthResponse,
  FileResponse,
  LectorRegisterResponse,
} from '@/types/response/register';
import {
  lectorRegister,
  nicknameDupCheck,
  profilePost,
  proofPost,
} from './queries';

export const registerQuries = createQueryKeys('register', {
  auth: () => ({
    queryKey: ['auth'],
    contextQueries: {
      dupCheck: (nickName: string) => ({
        queryKey: [nickName],
        queryFn: () => nicknameDupCheck(nickName),
      }),
    },
  }),
});

export const useDupCheck = (nickname: string) => {
  return useQuery({ ...registerQuries.auth()._ctx.dupCheck(nickname) });
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

export const usePostProfile = (
  options?: Omit<
    UseMutationOptions<string, unknown, File | undefined, unknown>,
    'mutationFn'
  >
) => {
  return useMutation((file?: File) => profilePost(file), {
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

export const useCenterUploadList = (
  purpose: CenterUploadPurpose,
  options?: Omit<
    UseMutationOptions<FileResponse[], unknown, File[], unknown>,
    'mutationFn'
  >
) => {
  return useMutation(
    (fileList: File[]) => centerUploadList(purpose, fileList),
    {
      ...options,
    }
  );
};
