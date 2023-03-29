import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import styled from '@emotion/styled';
import { CheckboxProps } from './type';
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

const StyledLabel = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

/**
 * Label 과 같이 사용하는 Checkbox
 * @param param0
 * @returns
 */
function CheckboxForm({
  label,
  checked,
  register,
  formKey,
  ...props
}: CheckboxProps) {
  return (
    <CheckBoxWrapper isChecked={checked || false}>
      <FormControlLabel
        value={label}
        label={<StyledLabel>{label}</StyledLabel>}
        control={<StyledCheckbox {...props} checked={checked} />}
        {...register(formKey)}
      />
    </CheckBoxWrapper>
  );
}
export default CheckboxForm;
