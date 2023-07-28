import { CenterDetailResponse } from '@/types/response/center';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const getCenterDetail = async (id: string) => {
  try {
    const { data } = await axios.get<CenterDetailResponse>(`/centers/${id}`);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useGetCenterDetail = (id: string) => {
  return useQuery(queryKeys.CENTER.detail(id), () => getCenterDetail(id));
};
