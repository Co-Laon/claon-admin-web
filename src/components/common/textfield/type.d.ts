import { OutlinedInputProps } from '@mui/material';
import { UseFormRegister } from 'react-hook-form';

export interface TextFieldProps extends OutlinedInputProps {
  helperText?: string;
  label: string;
  isRequire?: boolean;
  register: UseFormRegister<FieldValues>;
  formKey: string;
}
