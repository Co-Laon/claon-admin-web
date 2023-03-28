import { OutlinedInputProps } from '@mui/material';

export interface TextFieldProps extends OutlinedInputProps {
  helperText?: string;
  label: string;
  isRequire?: boolean;
}
