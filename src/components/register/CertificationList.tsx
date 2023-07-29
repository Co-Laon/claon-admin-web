import styled from '@emotion/styled';
import { useMemo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import TextField from '../common/textfield/TextField';

interface CertificationListProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}
// ------------------- Style ----------------------
const StyledContainer = styled.div`
  padding: 20px 16px 16px 16px;
  background-color: rgba(103, 80, 164, 0.12);
  border-radius: 8px;
  width: 100%;
`;

const StyledFirstLine = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const StyledSecondLine = styled.div`
  display: grid;
`;

const StyledName = styled(TextField)`
  height: 36px;

  font-size: 12px;
  line-height: 18px;
  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const StyledDate = styled(TextField)`
  width: 96px;
  height: 36px;
  margin-right: 4px;

  font-size: 12px;
  line-height: 18px;
  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;
const StyledRate = styled(TextField)`
  width: 50px;
  height: 36px;

  font-size: 12px;
  line-height: 18px;
  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

function CertificationList({
  register,
  idx,
  formKey,
  error,
}: CertificationListProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  if (register && idx && formKey) {
    return (
      <StyledContainer>
        <StyledFirstLine>
          <StyledDate
            formKey={`${formKey}.${idx}.acquisition_date`}
            label="취득일"
            isRequire
            register={register}
            error={
              errors && 'acquisition_date' in errors
                ? errors.acquisition_date
                : undefined
            }
            placeholder="2023-01-01"
            pattern={{
              value:
                /^(19\d{2}|2\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[1-2])$/,
              message: 'yyyy-mm-dd',
            }}
          />

          <StyledRate
            formKey={`${formKey}.${idx}.rate`}
            label="급수"
            isRequire
            register={register}
            error={errors && 'rate' in errors ? errors.rate : undefined}
            placeholder="1"
          />
        </StyledFirstLine>
        <StyledSecondLine>
          <StyledName
            formKey={`${formKey}.${idx}.name`}
            label="자격명"
            isRequire
            register={register}
            error={errors && 'name' in errors ? errors.name : undefined}
            placeholder="스포츠 클라이밍 지도사"
          />
        </StyledSecondLine>
      </StyledContainer>
    );
  }
  return null;
}

export default CertificationList;
