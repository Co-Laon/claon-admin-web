import styled from '@emotion/styled';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';

interface NormalSelectBoxProps extends SelectProps {
  items: { item: string; value: string }[];
  isRequire?: string | boolean;
}

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

const Placeholder = styled(MenuItem)`
  display: none;
`;

function NormalSelectBox({
  label,
  isRequire,
  items,
  error,
  ...props
}: NormalSelectBoxProps) {
  return (
    <FormControl error={error} fullWidth>
      {label && (
        <StyledInputLabel shrink>
          {label}
          {isRequire && <EssentialStar> * </EssentialStar>}
        </StyledInputLabel>
      )}
      <StyledSelect displayEmpty {...props}>
        {props.placeholder && (
          <Placeholder key="-1" value={props.placeholder} hidden>
            {props.placeholder}
          </Placeholder>
        )}
        {items.map((item) => {
          return (
            <MenuItem key={item.item} value={item.value}>
              {item.item}
            </MenuItem>
          );
        })}
      </StyledSelect>
    </FormControl>
  );
}

export default NormalSelectBox;
