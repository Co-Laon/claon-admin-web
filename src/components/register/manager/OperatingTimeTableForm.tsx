import styled from '@emotion/styled';
import TextField from '@/components/common/textfield/TextField';
import React, { useCallback, useEffect, useMemo } from 'react';
import { dayOfWeekTable } from '@/constants';
import { OperatingTimeTableFormProps } from './type';

const NormalText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin-top: 12px;
`;

const ChipContainer = styled.div`
  padding: 0px;
  gap: 8px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr)) 2fr;
`;

const StyledChipButton = styled.div<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#d0bcff' : '#E6E1E5')};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 0px 8px;
  width: 100%;
  text-align: center;
`;

const TimeTableContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-right: 82px;
`;

const TimeTableInputFormatContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-weight: 400;
  padding: 0px;
  gap: 10px;
`;

const TimeTableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  gap: 10px;
  width: 60px;
  height: 24px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const TimeTableTextField = styled(TextField)`
  width: 96px;
  height: 24px;
  font-size: 12px;
  & > input:disabled {
    color: rgba(0, 0, 0, 1);
    -webkit-text-fill-color: rgba(0, 0, 0, 1);
  }
`;

const TimeTableList = ['월', '화', '수', '목', '금', '토', '일', '공휴일'];

/**
 * Form 때문에 재사용 불가!
 *
 * @param param0
 * @returns
 */
function OperatingTimeTableForm({
  register,
  unregister,
  formKey,
  error,
  timeTables,
  setValue,
  readOnly,
}: OperatingTimeTableFormProps) {
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

  const handleChipClick = useCallback(
    (index: number) => {
      const newSelected = [...selected];
      newSelected[index] = !newSelected[index];
      setSelected(newSelected);
      unregister(`${formKey}.${index}`);
    },
    [formKey, unregister, setSelected, selected]
  );

  const errors = useMemo(() => {
    if (error) {
      if (error[formKey]) return error[formKey];
    }
    return undefined;
  }, [error, formKey]);

  useEffect(() => {
    if (timeTables?.length !== 0 && setValue) {
      const day = [true, true, true, true, true, true, true, true];
      timeTables?.forEach((value, idx) => {
        const i = dayOfWeekTable[value.day_of_week];
        day[i] = false;
        setValue(`${formKey}.${idx}.start_time`, value.start_time);
        setValue(`${formKey}.${idx}.end_time`, value.end_time);
        setSelected(day);
      });
    }
  }, [timeTables]);

  return (
    <>
      <ChipContainer>
        {TimeTableList.map((day, index) => (
          <StyledChipButton
            key={day}
            onClick={readOnly ? () => {} : () => handleChipClick(index)}
            isSelected={selected[index]}
          >
            {day}
          </StyledChipButton>
        ))}
      </ChipContainer>
      <NormalText>
        {readOnly ? '이용시간' : '이용 시간을 입력해주세요.'}
      </NormalText>
      <TimeTableContainer>
        {selected
          .reduce((acc, cur, index) => {
            if (!cur) {
              acc.push(TimeTableList[index]);
            }
            return acc;
          }, [] as string[])
          .map((day, index) => {
            return (
              <TimeTableInputFormatContainer key={`${day}_timeTableInput`}>
                <TimeTableTitle>
                  <input
                    type="hidden"
                    value={day}
                    {...register(`${formKey}.${index}.day_of_week`)}
                  />
                  {day}
                </TimeTableTitle>
                <TimeTableTextField
                  disabled={readOnly}
                  label="시작시간"
                  isRequire="10:00"
                  register={register}
                  formKey={`${formKey}.${index}.start_time`}
                  error={
                    errors && 'start_time' in errors
                      ? errors.start_time
                      : undefined
                  }
                  pattern={{
                    value: /^([01][0-9]|2[0-3]):([0-5][0-9])$/,
                    message: '시간 형식이 올바르지 않습니다.',
                  }}
                />
                ~
                <TimeTableTextField
                  disabled={readOnly}
                  label="종료시간"
                  isRequire="22:00"
                  register={register}
                  formKey={`${formKey}.${index}.end_time`}
                  error={
                    errors && 'start_time' in errors
                      ? errors.start_time
                      : undefined
                  }
                  pattern={{
                    value: /^([01][0-9]|2[0-3]):([0-5][0-9])$/,
                    message: '시간 형식이 올바르지 않습니다.',
                  }}
                />
              </TimeTableInputFormatContainer>
            );
          })}
      </TimeTableContainer>
    </>
  );
}

export default OperatingTimeTableForm;
