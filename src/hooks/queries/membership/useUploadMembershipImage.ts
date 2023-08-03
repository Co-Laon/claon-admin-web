import { UploadFileResponse } from '@/types/common';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const uploadMembershipImage = async (id: string, file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post(
      `/centers/${id}/fees/image/file`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};
export const useUploadMembershipImage = (
  id: string,
  options?: Omit<
    UseMutationOptions<UploadFileResponse, unknown, File | undefined, unknown>,
    'mutationFn'
  >
) => {
  return useMutation((file: File) => uploadMembershipImage(id, file), {
    ...options,
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};
