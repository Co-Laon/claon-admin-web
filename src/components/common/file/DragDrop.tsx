import FolderPlus from '@/assets/FolderPlus';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { ChangeEvent, useCallback, useRef } from 'react';
import { DragDropProps } from './type';

// -----------------------Styles-----------------
const DragDropWrapper = styled.label`
  width: 360px;
  background-color: rgba(103, 80, 164, 0.12);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 20px 0 20px 0;
`;

const DragDropInput = styled.input`
  display: none;
`;

const StyledText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  background-color: #d0bcff;
  color: #1c1b1f;
  padding: 5px 20px 5px 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`;

/**
 *  File Drag Drop
 * @param param0
 * @returns
 */
function DragDrop({ onChange }: DragDropProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLLabelElement>(null);

  const handleDragIn = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDragOut = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      e.stopPropagation();
    },
    []
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>): void => {
      e.preventDefault();
      e.stopPropagation();

      if (e.dataTransfer.files) {
        onChange(Array.from(e.dataTransfer.files));
      }
    },
    []
  );

  const handleFileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        onChange(Array.from(e.target.files));
      }
    },
    [onChange]
  );

  const onClickButton = useCallback(() => {
    fileRef.current?.click();
  }, [fileRef]);

  return (
    <DragDropWrapper
      ref={dropRef}
      htmlFor="dragDropInput"
      onDragEnter={handleDragIn}
      onDragEnd={handleDragOut}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <DragDropInput
        id="dragDropInput"
        type="file"
        ref={fileRef}
        onChange={handleFileChange}
        multiple
      />
      <FolderPlus />
      <StyledText>파일을 여기에 올려 놓으세요</StyledText>
      <StyledButton onClick={onClickButton}>기기에서 선택</StyledButton>
    </DragDropWrapper>
  );
}
export default DragDrop;
