import styled from '@emotion/styled';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';
import { forwardRef } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

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
  items: { item: string; value: string }[];
  isRequire?: string | boolean;
  control?: Control<FieldValues, any>;
  formKey: string;
}

const SelectBox = forwardRef<Element, SelectBoxProps>(
  ({ items, isRequire, control, formKey, ...props }: SelectBoxProps) => {
    const { label, error } = props;
    return (
      <Controller
        name={formKey}
        control={control}
        render={({ field }) => (
          <FormControl error={error}>
            <StyledInputLabel shrink>
              {label}
              {isRequire && <EssentialStar> * </EssentialStar>}
            </StyledInputLabel>
            <StyledSelect defaultValue="" {...props} {...field}>
              {items.map((item) => {
                return (
                  <MenuItem key={item.item} value={item.value}>
                    {item.item}
                  </MenuItem>
                );
              })}
            </StyledSelect>
          </FormControl>
        )}
      />
    );
  }
);

export default SelectBox;
