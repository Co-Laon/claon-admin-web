import CameraGray from '@/assets/CameraGray';
import ProfileSkeleton from '@/assets/ProfileSkeleton';
import ProfileButton from '@/components/common/profile/ProfileButton';
import RegisterTemplate from '@/components/register/RegisterTemplate';
import { Button } from '@mui/material';
import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
import CheckboxGroupInput from '@/components/register/CheckboxGroupInput';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';

const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 36px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: start;
  gap: 30px;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  width: 100%;
  color: black;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  border-radius: 8px;
`;

function RegisterMainPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <ComponentWrapper>
      <RegisterTemplate step={33}>
        <Title>프로필을 등록해주세요.</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ProfileButton />
          <TextField label="닉네임" isRequire ref={register} />
          <TextField label="이메일" helperText="연락 가능한 이메일을 적어주세요." ref={register} />
          <TextField label="인스타그램 계정" ref={register} />
          <CheckboxGroupInput title="사용자 유형을 선택해주세요." checkboxes={['강사', '암장 관리자']} ref={register} />
          <StyledButton type="submit">다음</StyledButton>
        </StyledForm>
      </RegisterTemplate>
    </ComponentWrapper>
  );
}

export default RegisterMainPage;
