import styled from '@emotion/styled';
import { Control, FieldValues, UseFormRegister } from 'react-hook-form';
import { feePeriodItems, feeTypeItems } from '@/constants';
import { InputAdornment } from '@mui/material';
import SelectBox from '../common/selectbox/SelectBox';
import TextField from '../common/textfield/TextField';

interface MembershipItemProps {
  register?: UseFormRegister<FieldValues>;
  control?: Control<FieldValues, any>;
  idx?: string;
  formKey?: string;
}

const Container = styled.div`
  background-color: rgba(103, 80, 164, 0.12);
  border-radius: 8px;
  padding: 16px;
  width: 466px;
`;

const FirstRow = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PeriodContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const StyledTextField = styled(TextField)<{ width: string }>`
  width: ${({ width }) => width};
  height: 36px;
  & > input[type='number']::-webkit-inner-spin-button,
  & > input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FeeTypeSelectBox = styled(SelectBox)`
  width: 84px;
  height: 36px;
`;

const PeriodTypeSelectBox = styled(SelectBox)`
  width: 72px;
  height: 36px;
`;

function MembershipItem({
  register,
  control,
  idx,
  formKey,
}: MembershipItemProps) {
  if (register)
    return (
      <Container>
        <FirstRow>
          <FeeTypeSelectBox
            items={feeTypeItems}
            formKey={`${formKey}.${idx}.fee_type`}
            control={control}
            label="구분"
            isRequire
          />
          <StyledTextField
            width="347px"
            formKey={`${formKey}.${idx}.name`}
            label="회원권명"
            isRequire
            register={register}
          />
        </FirstRow>
        <SecondRow>
          <PeriodContainer>
            <StyledTextField
              width="56px"
              formKey={`${formKey}.${idx}.period`}
              isRequire
              label="기간"
              register={register}
              type="number"
            />
            <PeriodTypeSelectBox
              formKey={`${formKey}.${idx}.period_type`}
              items={feePeriodItems}
              control={control}
              label="기간 단위"
              isRequire
              inputProps={{ inputProps: { min: 1 } }}
            />
            <StyledTextField
              width="60px"
              formKey={`${formKey}.${idx}.count`}
              label="횟수"
              register={register}
              endAdornment={<InputAdornment position="end">회</InputAdornment>}
              type="number"
              inputProps={{ inputProps: { min: 1 } }}
            />
          </PeriodContainer>
          <StyledTextField
            width="96px"
            endAdornment={<InputAdornment position="end">원</InputAdornment>}
            register={register}
            label="가격"
            formKey={`${formKey}.${idx}.price`}
            type="number"
            inputProps={{ inputProps: { min: 1 } }}
          />
        </SecondRow>
      </Container>
    );
  return null;
}

export default MembershipItem;
