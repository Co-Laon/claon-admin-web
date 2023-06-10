import Certificate from '@/components/register/Certificate';
import RegisterLayout from '@/layouts/RegisterLayout';
import {
  useCenterSignUp,
  useCenterUploadList,
} from '@/hooks/queries/register/queryKey';
import React, { ReactElement, useCallback } from 'react';
import { CenterAuthRequest } from '@/types/request/register';
import { CenterUploadPurpose } from '@/constants';

function Step2() {
  const { mutate: mutateCenterSignUp } = useCenterSignUp();

  const { mutate: mutateCenterProofUploadList } = useCenterUploadList(
    CenterUploadPurpose.PROOF,
    {
      onSuccess: (data) => {
        const formData: CenterAuthRequest = JSON.parse(
          localStorage.getItem('manager') || ''
        );
        formData.proof_list = data.map((file) => file.file_url);
        console.dir(formData);
        mutateCenterSignUp(formData);
      },
    }
  );

  const handleClickNext = useCallback((files: File[]) => {
    const formData: CenterAuthRequest = JSON.parse(
      localStorage.getItem('manager') || ''
    );
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
