import { CenterUploadPurpose } from '@/constants';
import { UploadFileResponse } from '@/types/common';
import { FileResponse } from '@/types/response/register';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const centerUploadList = async (purpose: string, fileList: File[]) => {
  const data = await axios
    .all(
      fileList.map((file) => {
        const formData = new FormData();
        formData.append('file', file);

        return axios.post<UploadFileResponse>(
          `/centers/${purpose}/file`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      })
    )
    .then(
      axios.spread((...responses) => {
        return responses.map((res) => res.data);
      })
    )
    .catch((error: any) => {
      throw error.response.data;
    });
  return data;
};

export const useCenterUploadList = (
  purpose: CenterUploadPurpose,
  options?: Omit<
    UseMutationOptions<FileResponse[], unknown, File[], unknown>,
    'mutationFn'
  >
) => {
  return useMutation(
    (fileList: File[]) => centerUploadList(purpose, fileList),
    {
      ...options,
    }
  );
};
