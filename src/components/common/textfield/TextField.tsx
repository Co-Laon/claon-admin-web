import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import styled from '@emotion/styled';
import { TextFieldProps } from './type';

// -----------------------------Styles----------------------
const EssentialStar = styled.span`
  color: red;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
  height: 48px;
`;

const StyledInputLabel = styled(InputLabel)`
  font-size: 16px;
`;
/**
 * Outlined Textfield 컴포넌트
 * @param param0
 * @returns
 */
function TextField({
  helperText,
  label,
  isRequire,
  register,
  error,
  formKey,
  pattern,
  minLength,
  maxLength,
  ...props
}: TextFieldProps) {
  return (
    <FormControl>
      <StyledInputLabel error={Boolean(error[formKey])}>
        {label}
        {isRequire && <EssentialStar> *</EssentialStar>}
      </StyledInputLabel>
      <StyledOutlinedInput
        error={Boolean(error[formKey])}
        {...register(formKey, {
          required: isRequire,
          pattern,
          minLength,
          maxLength,
        })}
        {...props}
        label={label}
      />
      {error[formKey] ? (
        <FormHelperText error={error[formKey]}>
          {error[formKey].message}
        </FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default TextField;
