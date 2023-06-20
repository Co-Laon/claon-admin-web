import { Pagination } from '@/types/common';
import { CenterListResponse } from '@/types/response/center';
import axios from 'axios';

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
