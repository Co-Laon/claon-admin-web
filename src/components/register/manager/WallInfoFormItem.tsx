import SelectBox from '@/components/common/selectbox/SelectBox';
import { css } from '@emotion/react';
import TextField from '@/components/common/textfield/TextField';
import styled from '@emotion/styled';
import React, { useEffect, useMemo } from 'react';
import { WallInfoFormItemProps } from './type';

// ------------------- Style ----------------------

const ListFormItemContainer = styled.div<{ readOnly?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 15px;
  isolation: isolate;

  width: 326px;

  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 1;
  ${({ readOnly }) =>
    readOnly
      ? css`
          background-color: none;
          justify-content: start;
        `
      : css`
          background: linear-gradient(
              0deg,
              rgba(103, 80, 164, 0.12),
              rgba(103, 80, 164, 0.12)
            ),
            #fffbfe;
        `}
`;

const StyledSelectBox = styled(SelectBox)`
  width: 80px;
  height: 36px;
  margin-right: 5px;
`;

const StyledTextField = styled(TextField)<{ typeLabel?: boolean }>`
  width: 210px;
  height: 36px;

  & > input {
    font-size: 12px;
    font-weight: 700;
    line-height: 17.55px;
  }
  & > input:disabled {
    color: black;
    -webkit-text-fill-color: black;
  }

  ${({ typeLabel }) =>
    typeLabel &&
    css`
      width: 80px;
      margin-right: 5px;
    `}
`;

function WallInfoFormItem({
  register,
  idx,
  formKey,
  error,
  value,
  readOnly,
  control,
}: WallInfoFormItemProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  const wallType = useMemo(() => {
    if (!value) return value;

    return value.wall_type === 'bouldering' ? '볼더링' : '지구력';
  }, [value]);

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer readOnly={readOnly}>
        <div>
          {readOnly ? (
            <StyledTextField
              label="유형"
              register={register}
              formKey={`${formKey}.${idx}.wall_type`}
              defaultValue={wallType}
              typeLabel
              readOnly
            />
          ) : (
            <StyledSelectBox
              label="유형"
              isRequire
              items={['볼더링', '지구력']}
              defaultValue={wallType}
              disabled={readOnly}
              control={control}
              formKey={`${formKey}.${idx}.wall_type`}
            />
          )}
          <StyledTextField
            label="이름"
            isRequire={!readOnly}
            register={register}
            formKey={`${formKey}.${idx}.name`}
            error={errors && 'name' in errors ? errors.name : undefined}
            disabled={readOnly}
          />
        </div>
      </ListFormItemContainer>
    );
  }
  return null;
}

export default WallInfoFormItem;
