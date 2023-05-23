import axios from 'axios';
import {
  FileResponse,
  IsDuplicatedResponse,
  LectorRegisterResponse,
} from '@/types/response/register';
import { LectorRegisterRequest } from '@/types/request/register';

export const profilePost = async (file?: File) => {
  if (!file) return `${process.env.NEXT_PUBLIC_S3}/profile/default.svg`;

  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post('/users/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const proofPost = async (fileList: File[]) => {
  if (fileList.length === 0) return [] as FileResponse[];
  const data = await axios
    .all(
      fileList.map((file) => {
        const formData = new FormData();
        formData.append('files', file);
        return axios.post('/centers/proof/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      })
    )
    .then(
      axios.spread((...response: any[]) => {
        return response.map((res) => res.data);
      })
    );
  return data as FileResponse[];
};

export const lectorRegister = async (
  lectorRegisterRequest: LectorRegisterRequest
) => {
  try {
    const { data } = await axios.post<LectorRegisterResponse>(
      '/auth/lector/sign-up',
      lectorRegisterRequest
    );
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const nicknameDupCheck = async (nickname: string) => {
  if (nickname === '') return false;
  try {
    const { data } = await axios.get<IsDuplicatedResponse>(
      `/auth/nickname/${nickname}/is-duplicated`
    );
    return data.is_duplicated;
  } catch (error: any) {
    throw error.response.data;
  }
};
