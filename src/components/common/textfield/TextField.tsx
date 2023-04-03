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
const StyledOutlinedInput = styled(OutlinedInput)<{ height?: number }>`
  height: ${({ height }) => height || 48}px;

  & > fieldset > legend > span {
    padding: 0;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  color: #49454f;
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
      <StyledInputLabel error={error} shrink>
        {label}
        {isRequire && <EssentialStar> *</EssentialStar>}
      </StyledInputLabel>
      <StyledOutlinedInput
        error={error}
        {...register(formKey, {
          required: isRequire,
          pattern,
          minLength,
          maxLength,
        })}
        {...props}
        label={`${label}${isRequire ? ' *' : ''}`}
        notched
      />
      {error ? (
        <FormHelperText error={error}>{error.message}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default TextField;
