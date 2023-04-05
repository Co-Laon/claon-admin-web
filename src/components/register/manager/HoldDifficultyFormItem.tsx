import styled from '@emotion/styled';
import { useMemo } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import TextField from '../../common/textfield/TextField';

// ------------------- Style ----------------------

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

const StyledColorTextField = styled(TextField)<{ background?: string }>`
  width: 80px;
  height: 36px;
  margin-right: 5px;
  background: ${({ background }) => background};
`;

const StyledNameTextField = styled(TextField)`
  width: 200px;
  height: 36px;
`;

// ------------------- Component ----------------------

interface HoldDifficultyFormItemProps {
  register?: UseFormRegister<FieldValues>;
  idx?: number;
  formKey?: string;
  error?: FieldErrors<FieldValues>;
  onClickTextField?: (key: string) => void;
}

function HoldDifficultyFormItem({
  register,
  idx,
  formKey,
  error,
  onClickTextField,
}: HoldDifficultyFormItemProps) {
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

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer>
        <div>
          <StyledColorTextField
            label="난이도"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.difficulty`}
            onClick={handleTextFieldClick}
            error={
              errors && 'difficulty' in errors ? errors.difficulty : undefined
            }
          />
          <StyledNameTextField
            label="홀드 이름"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.name`}
            sx={{ width: '210px', height: '36px' }}
            error={errors && 'name' in errors ? errors.name : undefined}
          />
        </div>
      </ListFormItemContainer>
    );
  }
  return null;
}

export default HoldDifficultyFormItem;
