import { FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import styled from 'styled-components';
import { TextFieldProps } from './type';

const EssentialStar = styled.span`
  color: red;
`;
const StyledOutlinedInput = styled(OutlinedInput)`
  height: 48px;
`;

const StyledInputLabel = styled(InputLabel)`
  font-size: 16px;
`;

function TextField({ helperText, label, isRequire, ...props }: TextFieldProps) {
  return (
    <>
      <FormControl>
        <StyledInputLabel htmlFor="outlined-adornment-password">
          {label}
          {isRequire && <EssentialStar> *</EssentialStar>}
        </StyledInputLabel>
        <StyledOutlinedInput label={label} />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
}

export default TextField;
