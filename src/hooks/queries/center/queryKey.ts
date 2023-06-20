import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';
import { findCenters } from './queries';

export const centerQueries = createQueryKeys('center', {
  list: () => ({
    queryKey: ['list'],
    queryFn: () => findCenters(),
  }),
});

export const useFindCenter = () => {
  return useQuery({ ...centerQueries.list() });
};
