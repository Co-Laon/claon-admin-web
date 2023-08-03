import { CenterFeeResponse } from '@/types/response/membership';
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const updateCenterFees = async (
  id: string,
  request: UpdateCenterFeeRequest
) => {
  try {
    const { data } = await axios.put(`/centers/${id}/fees`, request);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useUpdateCenterFees = (
  id: string,
  options?: Omit<
    UseMutationOptions<
      CenterFeeResponse,
      unknown,
      UpdateCenterFeeRequest,
      unknown
    >,
    'mutationFn'
  >
) => {
  const queryClient = useQueryClient();
  return useMutation(
    (request: UpdateCenterFeeRequest) => updateCenterFees(id, request),
    {
      ...options,
      onSuccess: (data, variables, context) => {
        if (options?.onSuccess) options.onSuccess(data, variables, context);
        queryClient.invalidateQueries({
          queryKey: queryKeys.MEMBERSHIP.list(id),
          refetchType: 'inactive',
        });
      },
    }
  );
};
