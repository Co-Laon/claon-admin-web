import FolderPlus from '@/assets/FolderPlus';
import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';
import { ImageUploadProps } from './type';
import PhotoIcon from '@/assets/PhotoIcon';

// -----------------------Styles-----------------
const ImageUploadWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 20px 0 20px 0;
`;

const ImageUploadInput = styled.input`
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
 *  ImageUpload
 * @param param0
 * @returns
 */
function ImageUpload({ onChange }: ImageUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const onClickButton = useCallback(() => {
    fileRef.current?.click();
  }, [fileRef]);

  return (
    <ImageUploadWrapper>
      <ImageUploadInput
        type="file"
        ref={fileRef}
        onChange={onChange}
        multiple={true}
      />
      <PhotoIcon />
      <StyledText>사진을 여기에 올려 놓으세요</StyledText>
      <StyledButton onClick={onClickButton}>기기에서 선택</StyledButton>
    </ImageUploadWrapper>
  );
}
export default ImageUpload;
