import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import styled from '@emotion/styled';
import { TextFieldProps } from './type';

/*-----------------------------Styles---------------------- */
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
  ...props
}: TextFieldProps) {
  return (
    <>
      <FormControl>
        <StyledInputLabel htmlFor="outlined-adornment-password">
          {label}
          {isRequire && <EssentialStar> *</EssentialStar>}
        </StyledInputLabel>
        <StyledOutlinedInput label={label} {...register(label)} {...props} />

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
}

export default TextField;
