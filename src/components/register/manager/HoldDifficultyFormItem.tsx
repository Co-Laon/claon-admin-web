import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';
import TextField from '../../common/textfield/TextField';
import { HoldDifficultyFormItemProps } from './type';

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

const StyledNameTextField = styled(TextField)`
  width: 200px;
  height: 36px;
`;

// ------------------- Component ----------------------

function HoldDifficultyFormItem({
  register,
  idx,
  formKey,
  error,
  onClickTextField,
  readOnly,
  setValue,
  value,
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

  useEffect(() => {
    console.log('readOnly: ', readOnly);
  }, [readOnly]);

  useEffect(() => {
    console.log('mounte');
  }, []);

  if (register && formKey && idx) {
    return (
      <ListFormItemContainer>
        <div>
          <StyledColorTextField
            disabled
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
            disabled
            label="홀드 이름"
            isRequire
            register={register}
            formKey={`${formKey}.${idx}.name`}
            sx={{ width: '210px', height: '36px' }}
            error={errors && 'name' in errors ? errors.name : undefined}
            readOnly={readOnly}
          />
        </div>
      </ListFormItemContainer>
    );
  }
  return null;
}

export default HoldDifficultyFormItem;
