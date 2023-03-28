import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
export interface CheckboxProps extends MuiCheckboxProps {
  label: string;
  ref?: UseFormRegister<FieldValues>;
}
