import ProfileButton from '@/components/common/profile/ProfileButton';
import RegisterTemplate from '@/components/register/RegisterTemplate';
import { Button } from '@mui/material';
import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
import CheckboxGroupInput from '@/components/register/CheckboxGroupInput';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const onSubmit = useCallback(
    (data: { [key: string]: string | Array<string> }) => {
      if (data.type[0] === '강사') router.push('/register/teacher/step1');
      else if (data.type[0] === '암장 관리자')
        router.push('/register/manager/step1');
    },
    []
  );

  return (
    <ComponentWrapper>
      <RegisterTemplate step={33}>
        <Title>프로필을 등록해주세요.</Title>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ProfileButton />
          <TextField
            label="닉네임"
            isRequire
            register={register}
            formKey="nickname"
          />
          <TextField
            label="이메일"
            helperText="연락 가능한 이메일을 적어주세요."
            register={register}
            formKey="email"
          />
          <TextField
            label="인스타그램 계정"
            register={register}
            formKey="instagram"
          />
          <CheckboxGroupInput
            title="사용자 유형을 선택해주세요."
            checkboxes={['강사', '암장 관리자']}
            register={register}
            formKey="type"
          />

          <StyledButton type="submit">다음</StyledButton>
        </StyledForm>
      </RegisterTemplate>
    </ComponentWrapper>
  );
}

export default RegisterMainPage;
