import ProfileButton from '@/components/common/profile/ProfileButton';
import RegisterLayout from '@/components/register/RegisterLayout';
import { Button } from '@mui/material';
import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
import CheckboxGroupInput from '@/components/register/CheckboxGroupInput';
import { useForm } from 'react-hook-form';
import { ReactElement, useCallback } from 'react';
import { useRouter } from 'next/router';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = useCallback(
    (data: { [key: string]: string | Array<string> }) => {
      if (data.type[0] === '강사') router.push('/register/teacher/step1');
      else if (data.type[0] === '암장 관리자')
        router.push('/register/manager/step1');
    },
    [router]
  );

  return (
    <>
      <Title>프로필을 등록해주세요.</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ProfileButton />
        <TextField
          label="닉네임"
          isRequire="닉네임은 필수 입력입니다."
          register={register}
          formKey="nickname"
          error={errors}
          minLength={{
            value: 2,
            message: '닉네임은 2~20자 이내로 작성해주세요.',
          }}
          maxLength={{
            value: 20,
            message: '닉네임은 2~20자 이내로 작성해주세요.',
          }}
        />
        <TextField
          label="이메일"
          helperText="연락 가능한 이메일을 적어주세요."
          register={register}
          formKey="email"
          error={errors}
          pattern={{
            value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
            message: '이메일을 알맞게 입력해주세요.',
          }}
        />
        <TextField
          label="인스타그램 계정"
          register={register}
          formKey="instagram"
          error={errors}
          pattern={{
            value: /^[a-zA-Z0-9_.]*$/i,
            message: '영어, 숫자, 언더바, 마침표만 입력 가능합니다.',
          }}
          minLength={{
            value: 3,
            message: '인스타그램 계정은 3~30자 이내로 작성해주세요.',
          }}
          maxLength={{
            value: 30,
            message: '인스타그램 계정은 3~30자 이내로 작성해주세요.',
          }}
        />
        <CheckboxGroupInput
          title="사용자 유형을 선택해주세요."
          checkboxes={['강사', '암장 관리자']}
          register={register}
          formKey="type"
        />

        <StyledButton type="submit">다음</StyledButton>
      </StyledForm>
    </>
  );
}

RegisterMainPage.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={33}>{page}</RegisterLayout>;
};

export default RegisterMainPage;
