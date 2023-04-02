import Career from '@/components/register/Career';
import CertificationList from '@/components/register/CertificationList';
import CheckboxGroupInput from '@/components/register/CheckboxGroupInput';
import ContestExperience from '@/components/register/ContestExperience';
import ListForm from '@/components/register/ListForm';
import RegisterLayout from '@/components/register/RegisterLayout';
import { nickanmeState } from '@/recoil/register/teacher';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { ReactElement, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

const StyledTitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;

const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledContainer = styled.div`
  padding-top: 116px;
  padding-bottom: 32px;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  width: 100%;
  color: #000000;
  font-size: 20px;
  line-height: 30px;

  font-weight: 500;
`;

function Step1() {
  const nickName = useRecoilValue(nickanmeState);
  const router = useRouter();
  const {
    register,
    unregister,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onFormSubmit = useCallback(
    (data: any) => {
      console.log(data);
      router.push('/register/teacher/step1');
    },
    [router]
  );

  return (
    <>
      <div>
        <StyledTitle>{`${nickName} 강사님`}</StyledTitle>
        <StyledTitle>자신을 소개해주세요.</StyledTitle>
      </div>
      <StyledFormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <CheckboxGroupInput
          title="홀드 세팅도 하시나요?"
          checkboxes={['하고 있어요', '하지 않아요']}
          formKey="is_setter"
          register={register}
          defaultValue={1}
        />
        <ListForm
          formName="contest_list"
          items={<ContestExperience />}
          register={register}
          unregister={unregister}
          title="대회 참가 경험이 있나요?"
          error={errors}
        />
        <ListForm
          formName="certificate_list"
          items={<CertificationList />}
          register={register}
          unregister={unregister}
          title="취득한 자격이 있나요?"
          error={errors}
        />
        <ListForm
          formName="career_list"
          items={<Career />}
          register={register}
          unregister={unregister}
          title="다양한 경력 사항을 입력해주세요"
          error={errors}
        />
        <StyledButton type="submit">다음</StyledButton>
      </StyledFormContainer>
    </>
  );
}

Step1.getLayout = function getLayout(page: ReactElement) {
  return <RegisterLayout step={66}>{page}</RegisterLayout>;
};
export default Step1;
