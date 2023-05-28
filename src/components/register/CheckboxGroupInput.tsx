import { FieldValues, UseFormRegister } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CheckboxForm from '../common/checkbox/CheckboxForm';

// -------------------Types------------------
interface CheckboxGroupInputProps {
  title: string | JSX.Element;
  checkboxes: string[];
  register: UseFormRegister<FieldValues>;
  formKey: string;
  defaultValue?: number;
}

// -------------------Styles----------------
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
  font-size: 16px;
  line-height: 24px;
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
  defaultValue,
}: CheckboxGroupInputProps) {
  const [checked, setChecked] = useState(defaultValue || -1);
  const [keyList, setKeyList] = useState<string[]>([]);

  useEffect(() => {
    setKeyList(checkboxes.map((_, idx) => `${formKey}_${idx}`));
  }, [checkboxes, formKey]);

  const onChange = useCallback(
    (idx: number) => {
      if (idx === checked) setChecked(-1);
      else setChecked(idx);
    },
    [checked]
  );

  const titleComponent =
    typeof title === 'string' ? <StyledTitle>{title}</StyledTitle> : title;

  return (
    <ComponentWrapper>
      {titleComponent}
      <CheckboxesWrapper>
        {checkboxes.map((checkbox, idx) => (
          <CheckboxForm
            key={keyList[idx]}
            label={checkbox}
            checked={checked === idx}
            onChange={() => onChange(idx)}
            register={register}
            formKey={formKey}
          />
        ))}
      </CheckboxesWrapper>
    </ComponentWrapper>
  );
}

export default CheckboxGroupInput;
