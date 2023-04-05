import {
  CheckboxProps,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@mui/material';
import styled from '@emotion/styled';
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
`;

interface CheckboxContainerProps extends CheckboxProps {
  text: string;
}

/**
 * Form 을 사용하지 않는 Checkbox
 * @param param0
 * @returns
 */
function CheckboxContainer({
  checked,
  text,
  ...props
}: CheckboxContainerProps) {
  return (
    <CheckBoxWrapper isChecked={checked || false}>
      <FormControlLabel
        value={text}
        label={<StyledText>{text}</StyledText>}
        control={<StyledCheckbox {...props} checked={checked} />}
      />
    </CheckBoxWrapper>
  );
}
export default CheckboxContainer;