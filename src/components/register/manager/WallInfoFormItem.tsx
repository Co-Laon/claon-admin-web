import SelectBox from '@/components/common/selectbox/SelectBox';
import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
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

const StyledSelectBox = styled(SelectBox)`
  width: 80px;
  height: 36px;
  margin-right: 5px;
`;

const StyledTextField = styled(TextField)`
  width: 210px;
  height: 36px;
`;

interface WallInfoFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
}

function WallInfoFormItem({
  register,
  idx,
  formKey,
  error,
}: WallInfoFormItemProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer>
        <div>
          <StyledSelectBox
            label="유형"
            isRequire
            items={['볼더링', '지구력']}
            {...register(`${formKey}.${idx}.wall_type`)}
          />
          <StyledTextField
            label="이름"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.name`}
            error={errors && 'name' in errors ? errors.name : undefined}
          />
        </div>
      </ListFormItemContainer>
    );
  }
  return null;
}

export default WallInfoFormItem;
