import styled from '@emotion/styled';
import { useMemo } from 'react';
import CrayonIcon from '@/assets/CrayonIcon';
import TextField from '../../common/textfield/TextField';
import ColorContainer from './ColorContainer';
import { HoldColorFormItemProps } from './type';

// ------------------- Style ----------------------

const ListFormItemContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

// ------------------- Component ----------------------

function HoldColorFormItem({
  getValues,
  register,
  idx,
  formKey,
  error,
  onClickTextField,
}: HoldColorFormItemProps) {
  const errors = useMemo(() => {
    if (idx && error) {
      return error[idx];
    }
    return undefined;
  }, [error, idx]);

  const handleTextFieldClick = () => {
    if (onClickTextField) {
      onClickTextField(`${formKey}.${idx}.difficulty`);
    }
  };

  const isColorSelected = getValues(`${formKey}.${idx}.difficulty`);

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer>
        <StyledColorContainer
          label="색"
          isRequire
          {...register(`${formKey}.${idx}.difficulty`)}
          onClick={handleTextFieldClick}
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
        />
      </ListFormItemContainer>
    );
  }
  return null;
}

export default HoldColorFormItem;
