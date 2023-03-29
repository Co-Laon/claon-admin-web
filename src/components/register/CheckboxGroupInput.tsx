import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import CheckboxForm from '../common/checkbox/CheckboxForm';
import { FieldValues, UseFormRegister } from 'react-hook-form';

/*-------------------Types------------------ */
interface CheckboxGroupInputProps {
  title: string;
  checkboxes: string[];
  register: UseFormRegister<FieldValues>;
  formKey: string;
}

/*-------------------Styles---------------- */
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

/**
 * 회원 가입 시 checkbox 를 통해 선택하는 항목 컴포넌트
 * @param param0
 * @returns
 */
function CheckboxGroupInput({
  title,
  checkboxes,
  register,
  formKey,
}: CheckboxGroupInputProps) {
  const [checked, setChecked] = useState(-1);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      if (!e.target.checked) setChecked(-1);
      else setChecked(idx);
    },
    []
  );

  return (
    <ComponentWrapper>
      <StyledTitle>{title}</StyledTitle>
      <CheckboxesWrapper>
        {checkboxes.map((checkbox, idx) => (
          <CheckboxForm
            key={idx}
            label={checkbox}
            checked={checked == idx}
            onChange={(e) => onChange(e, idx)}
            register={register}
            formKey={formKey}
          />
        ))}
      </CheckboxesWrapper>
    </ComponentWrapper>
  );
}

export default CheckboxGroupInput;
