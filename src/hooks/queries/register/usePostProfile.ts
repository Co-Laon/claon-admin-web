import { UploadFileResponse } from '@/types/common';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const profilePost = async (file?: File) => {
  if (!file) return `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`;

  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post('/users/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const usePostProfile = (
  options?: Omit<
    UseMutationOptions<UploadFileResponse, unknown, File | undefined, unknown>,
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
