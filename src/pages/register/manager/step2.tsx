import Certificate from '@/components/register/Certificate';
import RegisterLayout from '@/layouts/RegisterLayout';
import {
  useCenterSignUp,
  useCenterUploadList,
} from '@/hooks/queries/register/queryKey';
import React, { ReactElement, useCallback } from 'react';
import { CenterAuthRequest } from '@/types/request/register';
import { CenterUploadPurpose } from '@/constants';
import { useLocalStorage } from '@/hooks/common/useLocalStorage';

function Step2() {
  const [formData, setFormData] = useLocalStorage<CenterAuthRequest>('manager');
  const { mutate: mutateCenterSignUp } = useCenterSignUp();

  const { mutate: mutateCenterProofUploadList } = useCenterUploadList(
    CenterUploadPurpose.PROOF,
    {
      onSuccess: (data) => {
        setFormData({
          ...formData,
          proof_list: data.map((file) => file.file_url),
        });
        mutateCenterSignUp(formData);
      },
    }
  );

  const handleClickNext = useCallback((files: File[]) => {
    console.dir(formData);
    return () => {
      mutateCenterProofUploadList(files);
    };
  }, []);

  return (
    <Certificate type="관리자" name="claon2023" onClickNext={handleClickNext} />
  );
}

Step2.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={99}>{page}</RegisterLayout>;
};

export default Step2;
