import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
import { InputAdornment } from '@mui/material';
import React, { useMemo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

const ListFormItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 15px;
  isolation: isolate;

  width: 326px;

  background: linear-gradient(
      0deg,
      rgba(103, 80, 164, 0.12),
      rgba(103, 80, 164, 0.12)
    ),
    #fffbfe;
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 1;
`;

const StyledFeeNameTextField = styled(TextField)`
  width: 100%;
  height: 36px;
  margin-right: 5px;
  margin-bottom: 15px;
`;

const StyledFeePriceTextField = styled(TextField)`
  width: 96px;
  height: 36px;
  margin-right: 5px;
`;

const StyledFeeCountTextField = styled(TextField)`
  width: 60px;
  height: 36px;
`;

interface FeeInfoFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}

function FeeInfoFormItem({
  register,
  idx,
  formKey,
  error,
}: FeeInfoFormItemProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [idx, error]);

  if (register && formKey && idx)
    return (
      <ListFormItemContainer>
        <StyledFeeNameTextField
          label="요금명"
          isRequire
          register={register}
          formKey={`${formKey}.${idx}.name`}
          error={errors && 'name' in errors ? errors.name : undefined}
        />
        <div>
          <StyledFeePriceTextField
            label="가격"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.price`}
            error={errors && 'price' in errors ? errors.price : undefined}
            endAdornment={<InputAdornment position="end">원</InputAdornment>}
          />
          <StyledFeeCountTextField
            label="횟수"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.count`}
            error={errors && 'count' in errors ? errors.price : undefined}
            endAdornment={<InputAdornment position="end">회</InputAdornment>}
          />
        </div>
      </ListFormItemContainer>
    );
  return null;
}

export default FeeInfoFormItem;
