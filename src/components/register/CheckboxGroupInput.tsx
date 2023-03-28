import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Checkbox from '../common/checkbox/Checkbox';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface CheckboxGroupInputProps {
  title: string;
  checkboxes: string[];
  ref?: UseFormRegister<FieldValues>;
}
const ComponentWrapper = styled.div`
  margin-top: 12px;
`;
const CheckboxesWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  margin-top: 8px;
`;
const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

function CheckboxGroupInput({ title, checkboxes, ref }: CheckboxGroupInputProps) {
  const [checked, setChecked] = useState(-1);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    if (!e.target.checked) setChecked(-1);
    else setChecked(idx);
  }, []);

  return (
    <ComponentWrapper>
      <StyledTitle>{title}</StyledTitle>
      <CheckboxesWrapper>
        {checkboxes.map((checkbox, idx) => (
          <Checkbox key={idx} label={checkbox} checked={checked == idx} onChange={(e) => onChange(e, idx)} ref={ref} />
        ))}
      </CheckboxesWrapper>
    </ComponentWrapper>
  );
}

export default CheckboxGroupInput;
