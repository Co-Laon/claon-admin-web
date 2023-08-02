import ImagePlaceholder from '@/assets/ImagePlaceholder';
import Pending from '@/components/common/Pending';
import { nickanmeState } from '@/recoil/register/teacher';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

function Step3() {
  const nickName = useRecoilValue(nickanmeState);
  const router = useRouter();

  const onClickButton = useCallback(() => {
    router.push('/');
  }, [router]);
  return (
    <Pending
      title={`${nickName}님의 정보를 살펴보고 있어요.`}
      buttonLabel="다른계정으로 로그인"
      subTitle="잠시만 기다려주세요."
      onClickButton={onClickButton}
    />
  );
}

export default Step3;
