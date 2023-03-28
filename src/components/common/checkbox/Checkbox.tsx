import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { CheckboxProps } from './type';

const CheckBoxWrapper = styled.div<{ isChecked: boolean }>`
  padding: 20px;
  background-color: ${({ isChecked }) => (isChecked ? 'rgba(103,80,164,0.12)' : 'null')};
  border-radius: 8px;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const StyledCheckbox = styled(MuiCheckbox)`
  color: #6750a4 !important;
`;

const StyledLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

function Checkbox({ label, checked, ref, ...props }: CheckboxProps) {
  return (
    <CheckBoxWrapper isChecked={checked || false}>
      <FormControlLabel value={label} label={label} control={<StyledCheckbox {...props} checked={checked} />} inputRef={ref} />
    </CheckBoxWrapper>
  );
}
export default Checkbox;
