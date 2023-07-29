import { createQueryKeys } from '@lukemorales/query-key-factory';
import {
  UseMutationOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { CenterDetailResponse } from '@/types/response/center';
import { CenterUpdateRequest } from '@/types/request/center';
import {
  deleteCenter,
  findCenters,
  getCenterDetail,
  updateCenter,
} from './queries';

export const centerQueries = createQueryKeys('center', {
  list: () => ({
    queryKey: ['list'],
    queryFn: () => findCenters(),
  }),
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: () => getCenterDetail(id),
  }),
});

export const useFindCenter = () => {
  return useQuery({ ...centerQueries.list() });
};

export const useCenterDetail = (id: string) => {
  return useQuery({ ...centerQueries.detail(id) });
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
          queryKey: centerQueries.detail(id).queryKey,
          refetchType: 'inactive',
        });
      },
    }
  );
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
        queryKey: centerQueries.list().queryKey,
        refetchType: 'inactive',
      });
    },
  });
};
