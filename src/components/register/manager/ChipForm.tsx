import styled from '@emotion/styled';
import React from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

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
  weight: 400;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0px 10px;
`;

interface ChipFormProps {
  items: string[];
  formKey: string;
  setValue: UseFormSetValue<FieldValues>;
}

/**
 * form : { formKey: [item1, item2, item3] }
 *
 * @param param0
 * @returns
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
