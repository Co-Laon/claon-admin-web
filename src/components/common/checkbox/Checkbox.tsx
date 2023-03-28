import { Checkbox as MuiCheckbox } from '@mui/material';
import styled from 'styled-components';
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

function Checkbox({ label, checked, ...props }: CheckboxProps) {
  return (
    <CheckBoxWrapper isChecked={checked || false}>
      <StyledCheckbox {...props} checked={checked} />
      <StyledLabel>{label}</StyledLabel>
    </CheckBoxWrapper>
  );
}
export default Checkbox;
