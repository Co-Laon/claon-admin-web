import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';
import { findCenters, getCenterDetail } from './queries';

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
