import { FeeResponse } from '@/types/response/membership';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import queryKeys from '../queryKeys';

export const getCenterFees = async (id: string) => {
  try {
    const { data } = await axios.get<FeeResponse>(`/centers/${id}/fees`);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

export const useGetCenterFees = (id: string) => {
  return useQuery(queryKeys.MEMBERSHIP.list(id), () => getCenterFees(id));
};
