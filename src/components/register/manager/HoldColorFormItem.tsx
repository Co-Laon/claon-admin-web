import styled from '@emotion/styled';
import { useCallback, useEffect, useMemo } from 'react';
import CrayonIcon from '@/assets/CrayonIcon';
import { css } from '@emotion/react';
import TextField from '../../common/textfield/TextField';
import ColorContainer from './ColorContainer';
import { HoldColorFormItemProps } from './type';

// ------------------- Style ----------------------

const ListFormItemContainer = styled.div<{ readOnly?: boolean }>`
  display: flex;
  flex-direction: row;
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

const StyledColorContainer = styled(ColorContainer)<{ background?: string }>`
  width: 80px;
  height: 36px;
  margin-right: 5px;
  background: ${({ background }) => background};
  font-size: 0px;
`;

const StyledNameTextField = styled(TextField)`
  width: 200px;
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
`;

// ------------------- Component ----------------------

function HoldColorFormItem({
  getValues,
  register,
  idx,
  formKey,
  error,
  onClickTextField,
  readOnly,
}: HoldColorFormItemProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  const handleTextFieldClick = useCallback(() => {
    if (onClickTextField) {
      onClickTextField(`${formKey}.${idx}.difficulty`);
    }
  }, [formKey, idx]);

  const isColorSelected = useMemo(
    () => getValues(`${formKey}.${idx}.difficulty`),
    [formKey, idx, getValues]
  );

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer readOnly={readOnly}>
        <StyledColorContainer
          label="색"
          isRequire
          {...register(`${formKey}.${idx}.difficulty`)}
          onClick={!readOnly ? handleTextFieldClick : () => {}}
          error={
            errors && 'difficulty' in errors ? errors.difficulty : undefined
          }
        >
          {isColorSelected && (
            <CrayonIcon
              color={
                getValues
                  ? getValues(`${formKey}.${idx}.difficulty`)
                  : undefined
              }
            />
          )}
        </StyledColorContainer>
        <StyledNameTextField
          label="홀드 이름"
          isRequire
          register={register}
          formKey={`${formKey}.${idx}.name`}
          sx={{ width: '210px', height: '36px' }}
          error={errors && 'name' in errors ? errors.name : undefined}
          disabled={readOnly}
        />
      </ListFormItemContainer>
    );
  }
  return null;
}

export default HoldColorFormItem;
