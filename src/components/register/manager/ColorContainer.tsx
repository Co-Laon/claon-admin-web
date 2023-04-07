import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import styled from '@emotion/styled';
import { ColorContainerProps } from './type';

// -----------------------------Styles----------------------
const EssentialStar = styled.span`
  color: red;
`;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  color: #49454f;
`;

const StyledColorContainer = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 80px;
  height: 36px;

  border: 1px solid #79747e;
  border-radius: 4px;

  &:hover {
    border: 1px solid #49454f;
  }
`;
/**
 * Outlined Textfield 컴포넌트
 * @param param0
 * @returns
 */
function ColorContainer({
  helperText,
  label,
  isRequire,
  children,
  formPorps: register,
  error,
  ...props
}: ColorContainerProps) {
  return (
    <FormControl>
      <StyledInputLabel error={error} shrink>
        {label}
        {isRequire && <EssentialStar> *</EssentialStar>}
      </StyledInputLabel>
      <input type="hidden" {...register} />
      <StyledColorContainer {...props}>{children}</StyledColorContainer>
      {error ? (
        <FormHelperText error={error}>{error.message}</FormHelperText>
      ) : (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}

export default ColorContainer;
