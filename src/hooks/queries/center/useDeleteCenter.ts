import { CenterDetailResponse } from '@/types/response/center';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const deleteCenter = async (id: string) => {
  try {
    const { data } = await axios.delete(`/centers/${id}`);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useDeleteCenter = (
  options?: Omit<
    UseMutationOptions<CenterDetailResponse, unknown, unknown, unknown>,
    'mutationFn'
  >
) => {
  const queryClient = useQueryClient();
  return useMutation((id: string) => deleteCenter(id), {
    ...options,
    onSuccess: (data, variables, context) => {
      if (options?.onSuccess) options.onSuccess(data, variables, context);
      queryClient.invalidateQueries({
        queryKey: queryKeys.CENTER.list,
        refetchType: 'inactive',
      });
    },
  });
};
