import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import styled from '@emotion/styled';
import { CheckboxContainerProps } from './type';

// ----------------------------Styles--------------------------

const CheckBoxWrapper = styled.div<{ isChecked: boolean }>`
  padding: 20px;
  background-color: ${({ isChecked }) =>
    isChecked ? 'rgba(103,80,164,0.12)' : 'null'};
  border-radius: 8px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledCheckbox = styled(MuiCheckbox)`
  color: #6750a4 !important;
`;

const StyledText = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: black;
`;

/**
 * Form 을 사용하지 않는 CheckboxForm 형태의 컴포넌트
 *
 * @param param0.checked 체크박스 체크 여부
 * @param param0.text 체크박스 안에 표시될 텍스트
 * @returns 체크 할 수 있는 컨테이너 컴포넌트
 */
function CheckboxContainer({
  checked,
  text,
  readOnly,
  ...props
}: CheckboxContainerProps) {
  return (
    <CheckBoxWrapper isChecked={checked || false}>
      <FormControlLabel
        value={text}
        label={<StyledText>{text}</StyledText>}
        control={<StyledCheckbox {...props} checked={checked} />}
        disabled={readOnly}
      />
    </CheckBoxWrapper>
  );
}
export default CheckboxContainer;
