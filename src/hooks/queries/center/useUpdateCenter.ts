import { CenterUpdateRequest } from '@/types/request/center';
import { CenterDetailResponse } from '@/types/response/center';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const updateCenter = async (
  id: string,
  requests: CenterUpdateRequest
) => {
  try {
    const { data } = await axios.put(`/centers/${id}`, requests);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useUpdateCenter = (
  id: string,
  options?: Omit<
    UseMutationOptions<
      CenterDetailResponse,
      unknown,
      CenterUpdateRequest,
      unknown
    >,
    'mutationFn'
  >
) => {
  const queryClient = useQueryClient();
  return useMutation(
    (requests: CenterUpdateRequest) => updateCenter(id, requests),
    {
      ...options,
      onSuccess: (data, variables, context) => {
        if (options?.onSuccess) options.onSuccess(data, variables, context);
        queryClient.invalidateQueries({
          queryKey: queryKeys.CENTER.detail(id),
          refetchType: 'inactive',
        });
      },
    }
  );
};
