import { Pagination } from '@/types/common';
import { CenterListResponse } from '@/types/response/center';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import queryKeys from '../queryKeys';

export const findCenters = async () => {
  try {
    const { data } = await axios.get<Pagination<CenterListResponse>>(
      '/centers'
    );
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useFindCenter = () => {
  return useQuery(queryKeys.CENTER.list, findCenters);
};

export const useFindCenterNames = () => {
  return useQuery(queryKeys.CENTER.list, () =>
    findCenters().then((data) => {
      return data.results.map((d) => ({ item: d.name, value: d.center_id }));
    })
  );
};
