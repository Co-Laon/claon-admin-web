import { OutlinedInputProps } from '@mui/material';
import { FieldError, UseFormRegister, ValidationRule } from 'react-hook-form';

export interface TextFieldProps extends OutlinedInputProps {
  helperText?: string;
  label: string;
  isRequire?: string | boolean;
  register: UseFormRegister<FieldValues>;
  formKey: string;
  error?: FieldError<FieldValues>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
}
