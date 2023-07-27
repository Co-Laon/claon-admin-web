import styled from '@emotion/styled';
import { useMemo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import TextField from '../common/textfield/TextField';

interface ContestExperienceProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}

// ----------------------- Style ------------------------

const StyledContainer = styled.div`
  padding: 20px 16px 16px 16px;
  background-color: rgba(103, 80, 164, 0.12);
  border-radius: 8px;
  width: 100%;
`;

const StyledYear = styled(TextField)`
  width: 60px;
  height: 36px;
  font-size: 12px;
  line-height: 18px;

  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const StyledContestName = styled(TextField)`
  height: 36px;
  font-size: 12px;
  line-height: 18px;
  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

const StyledFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 3.5fr;
  gap: 4px;
  margin-bottom: 16px;
  padding: 0;
`;
const StyledSecond = styled.div`
  display: grid;
`;

const StyledPrize = styled(TextField)`
  height: 36px;
  font-size: 12px;
  line-height: 18px;

  & > input::placeholder {
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
  }
`;

function ContestExperience({
  register,
  idx,
  formKey,
  error,
}: ContestExperienceProps) {
  // eslint-disable-next-line
  const yearPattern = `(197[6-9]|198\d|199\d|200\d|201\d|202[0-${new Date()
    .getFullYear()
    .toString()
    .substring(-1)}])`;
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);
  if (register && idx && formKey) {
    return (
      <StyledContainer>
        <StyledFirst>
          <StyledYear
            label="연도"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.year`}
            placeholder={new Date().getFullYear().toString()}
            error={errors && 'year' in errors ? errors.year : undefined}
            pattern={{
              value: new RegExp(yearPattern),
              message: '1976~',
            }}
          />
          <StyledContestName
            label="대회명"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.title`}
            placeholder="스포츠 클라이밍 대회"
            error={errors && 'title' in errors ? errors.title : undefined}
          />
        </StyledFirst>
        <StyledSecond>
          <StyledPrize
            label="수상명"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.name`}
            placeholder="학생부 금상"
            error={errors && 'name' in errors ? errors.name : undefined}
          />
        </StyledSecond>
      </StyledContainer>
    );
  }
  return null;
}

export default ContestExperience;
