import styled from '@emotion/styled';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { forwardRef } from 'react';

const EssentialStar = styled.span`
  color: red;
`;
const StyledSelect = styled(Select)`
  height: 48px;

  font-size: 10px;
  color: #49454f;

  & > fieldset > legend > span {
    padding: 0;
  }
`;

const StyledInputLabel = styled(InputLabel)`
  font-size: 12px;
  color: #49454f;
`;

interface SelectBoxProps extends SelectProps {
  items: string[];
  isRequire?: string | boolean;
}

const SelectBox = forwardRef<Element, SelectBoxProps>(
  ({ items, isRequire, ...props }: SelectBoxProps) => {
    const { label, error } = props;

    return (
      <FormControl error={error}>
        <StyledInputLabel shrink>
          {label}
          {isRequire && <EssentialStar> * </EssentialStar>}
        </StyledInputLabel>
        <StyledSelect defaultValue="" {...props}>
          {items.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
    );
  }
);

export default SelectBox;
