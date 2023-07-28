import { FileResponse } from '@/types/response/register';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import axios from 'axios';

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

export const usePostProof = (
  options?: Omit<
    UseMutationOptions<FileResponse[], unknown, File[], unknown>,
    'mutationFn'
  >
) => {
  return useMutation((fileList: File[]) => proofPost(fileList), {
    ...options,
  });
};
