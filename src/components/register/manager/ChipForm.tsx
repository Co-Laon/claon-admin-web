import styled from '@emotion/styled';
import React from 'react';
import { ChipFormProps } from './type';

// --------------------Styles---------------
const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 8px;
`;

const StyledChipButton = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#d0bcff' : '#E6E1E5')};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0px 10px;
`;

/**
 * form : { formKey: [item1, item2, item3] }
 *
 * @param items: string[] - 선택할 아이템들
 * @param formKey: string - form 에서 사용할 key
 * @param setValue: UseFormSetValue<FieldValues> - react-hook-form 의 setValue
 * @returns Chip 으로 선택 할 수 있는 form 컴포넌트
 */
function ChipForm({ items, formKey, setValue }: ChipFormProps) {
  const [selected, setSelected] = React.useState<boolean[]>(
    items.map(() => false)
  );

  const handleChipClick = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
    setValue(
      formKey,
      newSelected.reduce((acc, cur, newSelectedIndex) => {
        if (cur) {
          acc.push(items[newSelectedIndex]);
        }
        return acc;
      }, [] as string[])
    );
  };

  return (
    <ChipContainer>
      {items.map((item, index) => (
        <StyledChipButton
          key={item}
          onClick={() => handleChipClick(index)}
          isSelected={selected[index]}
        >
          {item}
        </StyledChipButton>
      ))}
    </ChipContainer>
  );
}

export default ChipForm;
