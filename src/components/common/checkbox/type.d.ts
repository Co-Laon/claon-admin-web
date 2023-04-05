import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

export interface CheckboxFormProps extends MuiCheckboxProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  formKey: string;
  fontSize?: string;
  fontWeight?: string;
}
