import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
  UseFormUnregister,
} from 'react-hook-form';
import { ColorResult } from 'react-color';
import { HoldInfoResponse } from '@/types/response/center';
import HoldTypeSelect from './HoldTypeSelect';
import ListForm from '../ListForm';
import HoldColorFormItem from './HoldColorFormItem';
import HoldDifficultyFormItem from './HoldDifficultyFormItem';
import ColorPickerModal from './ColorPickerModal';

interface HoldInfoProps {
  title1: string;
  title2: string;
  register: UseFormRegister<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  readOnly?: boolean;
  defaultValue?: HoldInfoResponse;
  resetField?: UseFormResetField<FieldValues>;
}

enum HoldType {
  COLOR,
  OTHER,
}

const StyledTitle = styled.p<{ type?: boolean }>`
  font-size: 15.6px;
  font-weight: 700;
  line-height: 23.4px;
  ${({ type }) =>
    type &&
    css`
      margin-top: 12px;
    `}
`;

function HoldInfo({
  title1,
  title2,
  unregister,
  register,
  getValues,
  readOnly,
  setValue,
  defaultValue,
  resetField,
}: HoldInfoProps) {
  const [holdType, setHoldType] = useState<HoldType>(HoldType.COLOR);
  const isHoldSetColor = holdType === 0;
  const [colorPickerModalOpen, setColorPickerModalOpen] =
    useState<boolean>(false);
  // 홀드 난이도 색 input formKey
  const [holdColorTextFieldFormKey, setHoldColorTextFieldFormKey] =
    useState<string>('');

  // color picker 핸들러
  const handleColorPickerInputClick = useCallback((key: string) => {
    setHoldColorTextFieldFormKey(key);
    setColorPickerModalOpen(true);
  }, []);

  // 홀드 타입 변경 핸들러
  const handleHoldTypeChange = useCallback(
    (value: number) => {
      setHoldType(value);
      unregister('hold_list');
    },
    [unregister]
  );

  const handleColorPickerModalClose = useCallback(() => {
    setColorPickerModalOpen(false);
  }, []);

  const handleColorPickerModalComplete = useCallback(
    (color: ColorResult) => {
      setValue(holdColorTextFieldFormKey, color.hex);
      setColorPickerModalOpen(false);
    },
    [setValue, holdColorTextFieldFormKey]
  );

  useEffect(() => {
    if (defaultValue && !defaultValue?.is_color) setHoldType(HoldType.OTHER);
  }, [defaultValue]);

  return (
    <>
      <HoldTypeSelect
        title={<StyledTitle>{title1}</StyledTitle>}
        checkboxes={['색으로 표현해요', '다르게 표현해요']}
        defaultValue={holdType}
        onInputChange={handleHoldTypeChange}
        readOnly={readOnly}
      />
      {isHoldSetColor && (
        <ListForm
          register={register}
          title={<StyledTitle type>{title2}</StyledTitle>}
          unregister={unregister}
          formName="hold_list"
          items={
            <HoldColorFormItem
              getValues={getValues}
              onClickTextField={handleColorPickerInputClick}
            />
          }
          readOnly={readOnly}
          defaultValues={defaultValue?.hold_list}
          setValue={setValue}
        />
      )}
      {!isHoldSetColor && (
        <ListForm
          register={register}
          title={<StyledTitle type>{title2}</StyledTitle>}
          unregister={unregister}
          formName="hold_list"
          items={<HoldDifficultyFormItem />}
          readOnly={readOnly}
          defaultValues={defaultValue?.hold_list}
          setValue={setValue}
          resetField={resetField}
        />
      )}
      <ColorPickerModal
        open={colorPickerModalOpen}
        onClose={handleColorPickerModalClose}
        onChangeComplete={handleColorPickerModalComplete}
      />
    </>
  );
}

export default HoldInfo;
