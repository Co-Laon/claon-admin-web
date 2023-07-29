import { Pagination } from '@/types/common';
import { CenterUpdateRequest } from '@/types/request/center';
import {
  CenterDetailResponse,
  CenterListResponse,
} from '@/types/response/center';
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

export const getCenterDetail = async (id: string) => {
  try {
    const { data } = await axios.get<CenterDetailResponse>(`/centers/${id}`);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};

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

export const deleteCenter = async (id: string) => {
  try {
    const { data } = await axios.delete(`/centers/${id}`);
    return data;
  } catch (error: any) {
    throw error.response.message;
  }
};
