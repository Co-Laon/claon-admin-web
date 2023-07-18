import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CheckboxContainer from '@/components/common/checkbox/CheckboxContainer';
import { HoldTypeSelectProps } from './type';

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

/**
 * 회원 가입 시 checkbox 를 통해 선택하는 항목 컴포넌트
 * @param param0
 * @returns
 */
function HoldTypeSelect({
  title,
  checkboxes,
  defaultValue,
  onInputChange,
  readOnly,
}: HoldTypeSelectProps) {
  const [checked, setChecked] = useState(defaultValue);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      if (!e.target.checked) setChecked(-1);
      else setChecked(idx);
    },
    []
  );

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (onInputChange) onInputChange(checked || 0);
  }, [checked, onInputChange]);

  return (
    <ComponentWrapper>
      {title}
      <CheckboxesWrapper>
        {checkboxes.map((checkbox, idx) => (
          <CheckboxContainer
            key={`${checkbox}`}
            checked={checked === idx}
            text={checkbox}
            onChange={(e) => onChange(e, idx)}
            readOnly={readOnly}
          />
        ))}
      </CheckboxesWrapper>
    </ComponentWrapper>
  );
}

export default HoldTypeSelect;
