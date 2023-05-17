import Certificate from '@/components/register/Certificate';
import RegisterLayout from '@/layouts/RegisterLayout';
import React, { ReactElement, useCallback } from 'react';

function Step2() {
  const handleClickNext = useCallback((files: File[]) => {
    return () => console.log(files);
  }, []);
  return (
    <Certificate type="관리자" name="claon2023" onClickNext={handleClickNext} />
  );
}

Step2.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={99}>{page}</RegisterLayout>;
};

export default Step2;
