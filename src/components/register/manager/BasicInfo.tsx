import TextField from '@/components/common/textfield/TextField';

import styled from '@emotion/styled';
import { useEffect } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface BasicInfoProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  mode: 'register' | 'edit' | 'readOnly';
  formKey: string;
  name: string;
  address: string;
  detail_address: string;
  tel: string;
  web_url: string;
  instagram_name: string;
  youtube_code: string;
}

const Container = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  & > input:disabled {
    color: rgba(0, 0, 0, 1);
    -webkit-text-fill-color: rgba(0, 0, 0, 1);
  }
`;

function BasicInfo({
  register,
  setValue,
  mode,
  formKey,
  name,
  address,
  detail_address,
  tel,
  web_url,
  instagram_name,
  youtube_code,
}: BasicInfoProps) {
  useEffect(() => {
    setValue(`${formKey}.name`, name);
    setValue(`${formKey}.address`, address);
    setValue(`${formKey}.detail_address`, detail_address);
    setValue(`${formKey}.tel`, tel);
    setValue(`${formKey}.web_url`, web_url);
    setValue(`${formKey}.instagram_name`, instagram_name);
    setValue(`${formKey}.youtube_code`, youtube_code);
  }, [
    name,
    address,
    detail_address,
    tel,
    web_url,
    instagram_name,
    youtube_code,
  ]);

  return (
    <Container>
      <StyledTextField
        formKey={`${formKey}.name`}
        label="암장명"
        register={register}
        disabled={mode === 'readOnly'}
        isRequire={mode === 'register'}
      />
      <StyledTextField
        formKey={`${formKey}.address`}
        label="주소"
        register={register}
        disabled={mode === 'readOnly'}
        isRequire={mode === 'register'}
      />
      <StyledTextField
        formKey={`${formKey}.detail_address`}
        label="상세 주소"
        register={register}
        disabled={mode === 'readOnly'}
      />
      <StyledTextField
        formKey={`${formKey}.tel`}
        label="전화번호"
        register={register}
        disabled={mode === 'readOnly'}
        isRequire={mode === 'register'}
      />
      <StyledTextField
        formKey={`${formKey}.web_url`}
        label="웹"
        register={register}
        disabled={mode === 'readOnly'}
      />
      <StyledTextField
        formKey={`${formKey}.instagram_name`}
        label="인스타그램 계정"
        register={register}
        disabled={mode === 'readOnly'}
      />
      <StyledTextField
        formKey={`${formKey}.youtube_code`}
        label="유튜브"
        register={register}
        disabled={mode === 'readOnly'}
      />
    </Container>
  );
}

export default BasicInfo;
