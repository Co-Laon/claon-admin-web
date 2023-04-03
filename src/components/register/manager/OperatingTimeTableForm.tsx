import styled from '@emotion/styled';
import TextField from '@/components/common/textfield/TextField';
import React from 'react';
import { WeekTimeTableFormProps } from './type';

const NormalText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

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

const TimeTableInputFormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  padding: 0px;
  gap: 10px;
`;

/**
 * Form 때문에 재사용 불가!
 *
 * @param param0
 * @returns
 */
function OperatingTimeTableForm({
  register,
  setValue,
  formKey,
  error,
}: WeekTimeTableFormProps) {
  const TimeTableList = ['월', '화', '수', '목', '금', '토', '일', '공휴일'];

  const [selected, setSelected] = React.useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true,
  ]);

  const handleChipClick = (index: number) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <>
      <ChipContainer>
        {TimeTableList.map((day, index) => (
          <StyledChipButton
            key={day}
            onClick={() => handleChipClick(index)}
            isSelected={selected[index]}
          >
            {day}
          </StyledChipButton>
        ))}
      </ChipContainer>
      <NormalText>이용 시간을 입력해주세요.</NormalText>
      {selected
        .reduce((acc, cur, index) => {
          if (!cur) {
            acc.push(TimeTableList[index]);
          }
          return acc;
        }, [] as string[])
        .map((day, index) => {
          setValue(`${formKey}.${index}.day_of_week`, day);
          return (
            <TimeTableInputFormatContainer>
              {day}
              <TextField
                label="시작시간"
                isRequire="10:00"
                register={register}
                formKey={`${formKey}.${index}.start_time`}
                error={error}
              />
              ~
              <TextField
                label="종료시간"
                isRequire="22:00"
                register={register}
                formKey={`${formKey}.${index}.end_time`}
                error={error}
              />
            </TimeTableInputFormatContainer>
          );
        })}
    </>
  );
}

export default OperatingTimeTableForm;
