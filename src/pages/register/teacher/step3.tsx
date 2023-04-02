import ImagePlaceholder from '@/assets/ImagePlaceholder';
import { nickanmeState } from '@/recoil/register/teacher';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';

// --------------------- Style ----------------------
const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImagePlaceholder = styled(ImagePlaceholder)`
  margin-bottom: 12px;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const StyledHelp = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 20px;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  color: black;
  font-weight: 500;
  font-size: 20px;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

function Step3() {
  const nickName = useRecoilValue(nickanmeState);
  const router = useRouter();

  const onClickButton = useCallback(() => {
    router.push('/');
  }, [router]);
  return (
    <StyledContainer>
      <div>
        <StyledImagePlaceholder />
        <StyledTitle>{`${nickName}님의 정보를 살펴보고 있어요.`}</StyledTitle>
        <StyledTitle>잠시만 기다려주세요.</StyledTitle>
        <StyledHelp>
          문의사항은 help.claon@gmail.com으로 연락해주세요.
        </StyledHelp>
        <StyledButtonContainer>
          <StyledButton onClick={onClickButton}>
            다른계정으로 로그인
          </StyledButton>
        </StyledButtonContainer>
      </div>
    </StyledContainer>
  );
}

export default Step3;
