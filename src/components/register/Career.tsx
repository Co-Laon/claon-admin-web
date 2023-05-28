import styled from '@emotion/styled';
import { useMemo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import TextField from '../common/textfield/TextField';

interface CareerProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}

// ------------------------- Styled -------------------------
const StyledContainer = styled.div`
  padding: 20px 16px 16px 16px;
  background-color: rgba(103, 80, 164, 0.12);
  border-radius: 8px;
  width: 100%;
`;

const StyeldFirstLine = styled.div`
  margin-bottom: 16px;
`;
const StyledStart = styled(TextField)`
  width: 84px;
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

const StyledEnd = styled(TextField)`
  width: 84px;
  height: 36px;
  font-size: 12px;
  line-height: 18px;

  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const StyledSecondLine = styled.div`
  display: grid;
`;

const StyledName = styled(TextField)`
  height: 36px;
  font-size: 12px;
  line-height: 18px;
`;

function Career({ register, idx, formKey, error }: CareerProps) {
  const datePattern = useMemo(() => /^(1\d{3}|2\d{3})-(0[1-9]|1[0-2])$/, []);
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  if (register && idx && formKey) {
    return (
      <StyledContainer>
        <StyeldFirstLine>
          <StyledStart
            formKey={`${formKey}.${idx}.start_date`}
            label="시작일"
            register={register}
            error={errors && 'start_date' in errors ? errors.start : undefined}
            isRequire
            placeholder="2023-01"
            pattern={{
              value: datePattern,
              message: 'yyyy-mm',
            }}
          />
          <StyledEnd
            formKey={`${formKey}.${idx}.end_date`}
            label="종료일"
            register={register}
            error={errors && 'end_date' in errors ? errors.end : undefined}
            placeholder="2023-01"
            isRequire
            pattern={{
              value: datePattern,
              message: 'yyyy-mm',
            }}
          />
        </StyeldFirstLine>
        <StyledSecondLine>
          <StyledName
            formKey={`${formKey}.${idx}.name`}
            label="경력명"
            register={register}
            error={errors && 'name' in errors ? errors.name : undefined}
            isRequire
          />
        </StyledSecondLine>
      </StyledContainer>
    );
  }
  return null;
}

export default Career;
