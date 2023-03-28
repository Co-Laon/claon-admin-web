import { OutlinedInputProps } from '@mui/material';

export interface TextFieldProps extends OutlinedTextFieldProps {
  helperText?: string;
  label: string;
  isRequire?: boolean;
}
